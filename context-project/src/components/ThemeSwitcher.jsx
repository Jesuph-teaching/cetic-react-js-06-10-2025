import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

export default function ThemeSwitcher() {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<button
			onClick={() => {
				setTheme(theme === 'light' ? 'dark' : 'light');
			}}
		>
			{theme}
		</button>
	);
}
