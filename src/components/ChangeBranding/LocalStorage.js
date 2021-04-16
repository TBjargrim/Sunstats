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
        window.matchMedia && window.matchMedia('(prefers-color-scheme: apollo)').matches && !localTheme ?
            setMode('apollo') :
            localTheme ?
                setTheme(localTheme) :
                setMode('ving');
        setComponentMounted(true);
    }, []);
    //Vi returnar theme som innehåller valt theme och toggletheme functionen som "switshar" mellan teman.
    return [theme, toggleTheme, componentMounted]
};