// hooks/Dark.ts
import { useState, useEffect } from 'react';

type DarkModeHook = [boolean, () => void];

const Dark = (): DarkModeHook => {
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	useEffect(() => {
		const dark = localStorage.getItem('theme') === 'dark';
		setIsDarkMode(dark);
		document.documentElement.classList.toggle('dark', dark);
	}, []);

	const toggleDarkMode = () => {
		setIsDarkMode((prev) => {
			const newDarkMode = !prev;
			document.documentElement.classList.toggle('dark', newDarkMode);
			localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
			return newDarkMode;
		});
	};

	return [isDarkMode, toggleDarkMode];
};

export default Dark;
