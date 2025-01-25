import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Calendar: React.FC = () => {
    const hours = Array.from({ length: 16 }, (_, i) => 9 + i); // Hours from 9 AM to 12 AM

    const getMonthDays = () => {
        const days = [];
        for (let day = 1; day <= 31; day++) {
            days.push(day);
        }
        return days;
    };

    return (
        <div className="grid grid-cols-12 gap-4 p-4">
            {/* Calendar Section */}
            <div className="col-span-8 grid grid-cols-7 gap-2">
                {getMonthDays().map((day) => (
                    <motion.div
                        key={day}
                        className="border border-gray-300 rounded-lg p-4 flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        {day}
                    </motion.div>
                ))}
            </div>

            {/* Time Section */}
            <div className="col-span-4">
                <Card>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            {hours.map((hour) => (
                                <div
                                    key={hour}
                                    className="border-b border-gray-300 pb-2 pt-2 text-center"
                                >
                                    {hour % 12 || 12} {hour >= 12 ? "PM" : "AM"}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Calendar;
