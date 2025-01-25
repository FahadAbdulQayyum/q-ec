// Week.tsx
import React from 'react';
import moment from 'moment-timezone';
import { Button } from '@shadcn/ui';

interface WeekProps {
    date: moment.Moment;
    month: moment.Moment;
    select: (day: moment.Moment) => void;
    selected: moment.Moment;
    exclusive?: boolean;
}

const Week: React.FC<WeekProps> = ({ date, month, select, selected, exclusive }) => {
    const daysInWeek = [];
    const startOfWeek = date.clone();

    for (let i = 0; i < 7; i++) {
        const day = startOfWeek.clone().add(i, 'days');
        daysInWeek.push(
            <Button
                key={day.format('YYYY-MM-DD')}
                variant={day.isSame(selected, 'day') ? 'contained' : 'outlined'}
                onClick={() => select(day)}
                className={`w-10 h-10 ${day.month() !== month.month() ? 'text-gray-400' : 'text-black'}`}
            >
                {day.date()}
            </Button>
        );
    }

    return (
        <div className="flex justify-between py-2">
            {daysInWeek}
        </div>
    );
};

export default Week;
