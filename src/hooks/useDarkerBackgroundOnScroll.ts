import { useEffect } from 'react';
import { debounce } from '../utils/debounce';

function changeBackgroundOpacity(): void {
    console.log(document.documentElement.scrollTop);

    const root = document.getElementById('bg');
    if (!root) return;

    const maxOpacity = 0.7;
    const opacity = (document.documentElement.scrollTop / 1000) * 2;

    root.style.backgroundColor = `rgba(0, 0, 0, ${opacity > maxOpacity ? maxOpacity : opacity})`;
}

const debounced = debounce(changeBackgroundOpacity, 5, true);

export function useDarkerBackgroundOnScroll(): void {
    useEffect(() => {
        window.scrollTo(0, 0);
        changeBackgroundOpacity();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', debounced);

        return (): void => {
            window.removeEventListener('scroll', debounced);
        };
    }, []);
}
