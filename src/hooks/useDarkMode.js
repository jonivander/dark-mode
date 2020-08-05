import useLocalStorage from './useLocalStorage'
import { useEffect } from 'react';


export function useDarkMode(){
    const [darkMode, setDarkMode] = useLocalStorage();

    useEffect(() => {
        document.body.classList.toggle('dark-mode')
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

