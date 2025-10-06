import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

export default function ThemeSwitcher() {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<button
			className="theme-switcher"
			onClick={() => {
				setTheme(theme === 'light' ? 'dark' : 'light');
			}}
			title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
		>
			{theme === 'light' ? '🌙' : '☀️'}
		</button>
	);
}
