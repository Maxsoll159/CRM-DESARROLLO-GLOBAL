"use client"
import { createContext, useEffect, useState } from 'react';

export const appContext = createContext({} as any);

export const AppModeProvider = ({ children }: any) => {
    const [body, setBody] = useState<any>("")
    useEffect(() => {
        if (typeof document !== 'undefined') {
            setBody(document.querySelector(".bg-bg-fondoDas"))
        }
    }, [])

    return (
        <appContext.Provider
            value={{ body }}
        >
            {children}
        </appContext.Provider>
    );
}