"use client"

import { useEffect, useState } from "react";

export function useThemeSwitch(){
    
    const toggleTheme = (theme) => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    const [mode, setMode] = useState('light');

    useEffect(() => {
        toggleTheme(mode)
    }, [mode])

    return [mode, setMode]
}