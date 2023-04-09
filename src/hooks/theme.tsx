import {
    createContext,
    useContext,
    useState,
    useMemo,
    useCallback,
    ReactNode
} from 'react';

interface IThemeContext {
    isDarkTheme: boolean;
    toggleTheme(): void;
}

interface IThemeProvider {
    children: ReactNode;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProviderWrapper = ({ children }: IThemeProvider) => {
    const [ isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

    const toggleTheme = useCallback(() => setIsDarkTheme(!isDarkTheme), [isDarkTheme]);

    const themeProviderValue = useMemo(() => ({isDarkTheme, toggleTheme}), [isDarkTheme, toggleTheme]);

    return (
        <ThemeContext.Provider value={themeProviderValue}>
            {children}
        </ThemeContext.Provider>
    );
}

function useTheme(): IThemeContext {
    return useContext(ThemeContext);
}

export { ThemeProviderWrapper, useTheme };
