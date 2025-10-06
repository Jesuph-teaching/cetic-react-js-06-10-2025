import React, { useEffect, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext';

export default function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);
	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
