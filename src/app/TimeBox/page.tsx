"use client"

import Calendar from '@/components/Calendar'
import React from 'react'
// import moment from 'moment-timezone';


// const handleSelect = (unixDate: number) => {
//     console.log("Selected date:", unixDate);
// };

const TimeBox = () => {
    return (
        <div>
            <Calendar />
            {/* <Calendar
                timeZoneName="America/New_York"  // Set your desired time zone
                selected={moment().unix()}        // Provide the selected date in Unix format
                onSelect={handleSelect}             // Provide the select function to handle date selection
            /> */}
        </div>
    )
}

export default TimeBox
