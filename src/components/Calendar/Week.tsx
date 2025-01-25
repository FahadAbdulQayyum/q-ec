"use client";

import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import { Button } from '@shadcn/ui';

const Week: React.FC<WeekProps> = ({ date, month, select, selected, exclusive }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null; // Avoid SSR rendering

    const daysInWeek = [];
    const startOfWeek = date.clone();

    for (let i = 0; i < 7; i++) {
        const day = startOfWeek.clone().add(i, 'days');
        daysInWeek.push(
            <Button
                key={day.format('YYYY-MM-DD')}
                variant={day.isSame(selected, 'day') ? 'contained' : 'outline'}
                onClick={() => select(day)}
                className={`w-10 h-10 ${day.month() !== month.month() ? 'text-gray-400' : 'text-black'}`}
            >
                {day.date()}
            </Button>
        );
    }

    return <div className="flex justify-between py-2">{daysInWeek}</div>;
};

export default Week;
