"use client";

import React, { useRef } from "react";
import { useFormState } from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";

import { saveGuest } from "@/app/actions/saveGuest";

export default function AnswerForm({invite_id}: { invite_id: string }) {
    const [state, action] = useFormState(
        saveGuest.bind(null, invite_id),
        {success: false}
    );

    const formRef = useRef<HTMLFormElement>(null);
    const recaptchaRef = useRef<ReCAPTCHA | null>(null);
    const hiddenTokenRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async () => {
        const token = await recaptchaRef.current?.executeAsync();
        if (!token) return;
        const tokenInput = hiddenTokenRef.current;

        if (tokenInput) tokenInput.value = token;

        formRef.current?.requestSubmit();
    };

    return (
        <form
            ref={formRef}
            action={action}
            className="flex flex-col w-full"
        >
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                size="invisible"
            />
            <h3 className="text-lg">Уточните ваше присутвие</h3>
            <input
                className="bg-transparent outline-none border-[1.5px] border-black p-3 w-full mb-4"
                disabled={state.success}
                name="rsvp_text"
                maxLength={100}
                required
            />

            <input
                type="hidden"
                name="g-recaptcha-response"
                ref={hiddenTokenRef}
            />

            {!state.success ? (
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="border-[1.5px] border-black hover:border-zinc-700 p-3 shadow-8 text-zinc-950 hover:text-zinc-700"
                >
                    Отправить
                </button>
            ) : (
                <div>Спасибо за ваш ответ!</div>
            )}
        </form>
    );
}
