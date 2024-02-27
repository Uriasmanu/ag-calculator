import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    return (
        <Context.Provider value={{ day, setDay, month, setMonth, year, setYear }}>
            {children}
        </Context.Provider>
    );
};
