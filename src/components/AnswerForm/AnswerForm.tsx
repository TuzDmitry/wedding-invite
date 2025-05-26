"use client";

import React from "react";
import { useFormState } from "react-dom";

import { saveGuest } from "@/app/actions/saveGuest";

export default function AnswerForm({invite_id}: { invite_id: string }) {
    const [state, action] = useFormState(
        saveGuest.bind(null, invite_id),
        {success: false},
    );

    return (
        <form
            action={action}
            className="flex flex-col w-full"
        >
            <h3 className="text-lg">Уточните ваше присутвие</h3>
            <input
                className='bg-transparent outline-none border-[1.5px] border-black p-3 w-full mb-4'
                disabled={state.success}
                // errorMessage={formStateErrors.title?.join(", ")}
                // isInvalid={!!formStateErrors.title}
                name="rsvp_text"
                required
            />
            {!state.success ?
                <button
                    className='border-[1.5px] border-black hover:border-zinc-700 p-3 shadow-8 text-zinc-950 hover:text-zinc-700'
                >
                    Отправить
                </button> :
                <div>Спасибо за ваш ответ!</div>
            }
        </form>
    );
}
