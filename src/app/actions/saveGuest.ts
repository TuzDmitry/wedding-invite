'use server';

import { supabase } from "@/lib/supabaseClient";
import { verifyRecaptchaToken } from "@/lib/verifyRecaptcha";

export async function saveGuest(
    invite_id: string,
    formState: { success: boolean },
    formData: FormData
) {
    const rsvp_text = formData.get('rsvp_text') as string;
    const token = formData.get("g-recaptcha-response") as string;

    if (
        !token ||
        !invite_id ||
        !rsvp_text ||
        !rsvp_text.trim() ||
        rsvp_text.trim().length > 100
    ) {
        return {success: false};
    }

    const recaptchaValid = await verifyRecaptchaToken(token);
    console.log(recaptchaValid, 'recaptchaValid')
    if (!recaptchaValid) {
        console.error("Invalid reCAPTCHA");
        return {success: false};
    }

    const {error} = await supabase
        .from('guests-responses')
        .upsert([{
            invite_id,
            rsvp_text: rsvp_text.trim(),
            written_at: new Date()
        }], {
            onConflict: 'invite_id'
        });

    if (error) {
        console.error('Supabase error:', error.message);

        return {success: false};
    }

    console.log('__write on DB successfull');

    return {success: true};
}
