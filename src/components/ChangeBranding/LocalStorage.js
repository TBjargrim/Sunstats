import { useEffect, useState } from 'react';



export const useVingMode = () => {
    const [theme, setTheme] = useState('ving');
    const [componentMounted, setComponentMounted] = useState(false);

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const toggleTheme = () => {
        if (theme === 'ving') {
            setMode('apollo');
        } else {
            setMode('ving');
        }
    };
    //Om användare valt ett tema så sätts läggs det i setTheme-functionen.
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
        } else {
            setMode('ving');
        }
        setComponentMounted(true);
    }, []);
    //Vi returnar theme som innehåller valt theme och toggletheme functionen som "switshar" mellan teman.
    return [theme, toggleTheme, componentMounted]
};