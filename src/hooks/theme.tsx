import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    ReactNode,
} from "react";

interface ThemeContextData {
    isDarkTheme: boolean;
    toggleTheme(): void;
}

const ThemeContext = createContext({} as ThemeContextData);

interface Props {
    children: ReactNode;
}

export function ThemeProviderWrapper({ children }: Props) {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme) {
            setIsDarkTheme(storedTheme === "dark");
            return;
        }

        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        setIsDarkTheme(prefersDark);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            isDarkTheme ? "dark" : "light"
        );

        localStorage.setItem(
            "theme",
            isDarkTheme ? "dark" : "light"
        );
    }, [isDarkTheme]);

    const toggleTheme = useCallback(() => {
        setIsDarkTheme((old) => !old);
    }, []);

    const value = useMemo(
        () => ({
            isDarkTheme,
            toggleTheme,
        }),
        [isDarkTheme, toggleTheme]
    );

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}