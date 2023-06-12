import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import styles from './scrollToTopButton.module.scss';

const ScrollToTopButton = ({
    isDarkTheme
}: {
    isDarkTheme: boolean
}) => {
    const [visible, setVisible] = useState<boolean>(false);

    const goBackToTop = () => window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    const toggleVisible = () => {
        if (window.scrollY >= 300) {
            setVisible(true);
            return;
        }

        setVisible(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible)
    }, []);

    if (!visible) {
        return null
    }

    return (
        <button
            className={`${styles.button} ${isDarkTheme ? styles.dark : styles.light}`}
            onClick={goBackToTop}
        >
            <FaArrowUp
                color={`${isDarkTheme ? '' : '#fff'}`}
            />
        </button>
    )
};

export default ScrollToTopButton;