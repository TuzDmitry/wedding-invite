'use client'
import React from 'react';
import { useSearchParams } from "next/navigation";
import { GuestsTitleMap } from "@/state";

const GuestsInviteTitle = () => {
    const searchParams = useSearchParams();
    const guestId = searchParams.get('guests') as keyof typeof GuestsTitleMap;
    let title = GuestsTitleMap[guestId] || 'Дорогие родные и друзья!';

    return (
        <h2 className='text-6xl font-allegro'>{title}</h2>
    );
};

export default GuestsInviteTitle;
