'use client';
import { createContext, useEffect, useState } from 'react';
export const ThemeContext = createContext<any>(null);

/**
 * Provides a theme context for the application.
 * @param children - The child components to be wrapped by the theme provider.
 * @returns The theme provider component.
 */
export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState('light');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    console.log('Theme mounted');

    let userScheme: string = 'light';
    if (typeof window !== 'undefined') {
      const prefersDarkScheme = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;

      if (prefersDarkScheme) {
        userScheme = 'dark';
      }
    }

    const localTheme = localStorage.getItem('theme') || userScheme;
    changeTheme(localTheme);
  }, []);

  /**
   * Sets the theme and stores it in local storage.
   * @param theme - The theme to be set.
   */
  const changeTheme = (theme: string) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
  };

  if (!isMounted) return <>Loading...</>;

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
