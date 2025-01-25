"use client"

import React, { useState } from 'react';
import moment from 'moment';

interface CalendarProps {
    selected: number;  // Unix timestamp of selected date
    onSelect: (date: number) => void;
    timeZoneName: string;
}

const Calendar: React.FC<CalendarProps> = ({ selected, onSelect, timeZoneName }) => {
    const [currentDate, setCurrentDate] = useState(moment(selected).tz(timeZoneName));

    const goToPreviousMonth = () => {
        setCurrentDate(currentDate.clone().subtract(1, 'month'));
    };

    const goToNextMonth = () => {
        setCurrentDate(currentDate.clone().add(1, 'month'));
    };

    const renderDayNames = () => {
        return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="day-name">
                {day}
            </div>
        ));
    };

    const renderDays = () => {
        const startOfMonth = currentDate.clone().startOf('month').startOf('week');
        const endOfMonth = currentDate.clone().endOf('month').endOf('week');
        const days = [];
        let day = startOfMonth.clone();

        while (day.isBefore(endOfMonth, 'day')) {
            days.push(
                <div
                    key={day.toString()}
                    className={`day ${day.month() === currentDate.month() ? '' : 'other-month'} ${day.isSame(moment(selected), 'day') ? 'selected' : ''
                        }`}
                    onClick={() => onSelect(day.unix())}
                >
                    {day.date()}
                </div>
            );
            day.add(1, 'day');
        }

        return days;
    };

    return (
        <div className="calendar">
            <div className="header">
                <button onClick={goToPreviousMonth}>Prev</button>
                <div>{currentDate.format('MMMM YYYY')}</div>
                <button onClick={goToNextMonth}>Next</button>
            </div>
            <div className="days">{renderDayNames()}</div>
            <div className="dates">{renderDays()}</div>
        </div>
    );
};

export default Calendar;
