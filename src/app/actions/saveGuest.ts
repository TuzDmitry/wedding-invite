'use server';

import { supabase } from "@/lib/supabaseClient";

export async function saveGuest(
    invite_id: string,
    formState: { success: boolean },
    formData: FormData
) {
    const rsvp_text = formData.get('rsvp_text');

    const {error} = await supabase
        .from('guests-responses')
        .upsert([{
            invite_id,
            rsvp_text,
            written_at: new Date()
        }], {
            onConflict: 'invite_id'
        });

    if (error) {
        console.error('Supabase error:', error.message);

        return {success: false};
    }

    console.log('successfull');

    return {success: true};
}
