import { useEffect } from 'react';
import { debounce } from '../utils/debounce';

function changeBackgroundOpacity(): void {
    const root = document.getElementById('bg');
    if (!root) return;

    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop === 0) {
        root.style.display = 'none';

        return;
    }

    root.style.display = 'block';
    const maxOpacity = 0.7;
    const opacity = (scrollTop / 1000) * 2;

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
