'use client';
import { useContext } from 'react';

import { ThemeContext } from './ThemeContext';

export default function ClientThemeWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useContext(ThemeContext);

  return <div data-theme={theme}>{children}</div>;
}
