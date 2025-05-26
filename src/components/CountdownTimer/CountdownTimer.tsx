'use client';

import React from 'react';
import { useTimer } from 'react-timer-hook';

interface CountdownTimerProps {
    expiryTimestamp: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({expiryTimestamp}) => {
    const {
        days,
        hours,
        minutes,
        seconds,
        isRunning,
    } = useTimer({
        expiryTimestamp,
        onExpire: () => console.log('🎉 Обратный отсчёт завершён!'),
    });

    let separator = <div
        className='border-l border-gray-200 h-[60px] m-auto'
        role='separator'
    />;

    return (
        <div className="text-center p-4 rounded-2xl shadow-md inline-block">
            {isRunning ? (
                <div className="flex justify-center gap-5 sm:gap-10 font-mono">
                    <TimeBox label="Дней" value={days}/>
                    {separator}
                    <TimeBox label="Часов" value={hours}/>
                    {separator}
                    <TimeBox label="Минут" value={minutes}/>
                    {separator}
                    <TimeBox label="Секунд" value={seconds}/>
                </div>
            ) : (
                <div className="text-xl font-semibold text-red-600">Событие наступило!</div>
            )}
        </div>
    );
};

const TimeBox = ({label, value}: { label: string; value: number }) => (
    <div className="flex flex-col items-center font-arial">
        <div className="text-4xl sm:text-6xl ">{value}</div>
        <div className="text-sm text-gray-500">{label}</div>
    </div>
);

export default CountdownTimer;
