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
            window.location.reload();
        } else {
            setMode('ving');
            window.location.reload();
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        window.matchMedia && window.matchMedia('(prefers-color-scheme: apollo)').matches && !localTheme ?
            setMode('apollo') :
            localTheme ?
                setTheme(localTheme) :
                setMode('ving');
        setComponentMounted(true);
    }, []);

    return [theme, toggleTheme, componentMounted]
};