import { useState } from "react";

const useDateInput = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const validateDay = (input) => {
        const value = parseInt(input);
        if (value >= 1 && value <= 31) {
            setDay(input);
        } else {
            setDay('');
        }
    };

    const validateMonth = (input) => {
        const value = parseInt(input);
        if (value >= 1 && value <= 12) {
            setMonth(input);
        } else {
            setMonth('');
        }
    };

    const validateYear = (input) => {
        const currentYear = new Date().getFullYear();
        const value = parseInt(input);
        if (value <= currentYear) {
            setYear(input);
        } else {
            setYear('');
        }
    };

    return {
        day,
        month,
        year,
        setDay: validateDay,
        setMonth: validateMonth,
        setYear: validateYear
    };
};

export default useDateInput;
