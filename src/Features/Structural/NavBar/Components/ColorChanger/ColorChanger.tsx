import React, { useState, useEffect } from 'react';
import SunIcon from "@assets/Navbar/Icons/Sun.svg?react";
import MoonIcon from "@assets/Navbar/Icons/Moon.svg?react";
import styles from "./ColorChanger.module.scss";

interface ColorChangerProps {
	// onClick: () => void;
	disabled?: boolean;
}

export const ColorChanger = () => {

 const [theme, setTheme] = useState('light');

	useEffect(() => {
        // Remove existing theme classes
        document.body.classList.remove('light-theme', 'dark-theme');
        
        // Add the current theme class
        document.body.classList.add(`${theme}-theme`);
        
        // Persist the theme choice
        localStorage.setItem('theme', theme);
        
    }, [theme]); // Run this effect ONLY when 'theme' changes

      const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
      };
	
	
	return (
	<div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
	<button className={styles["button"]} onClick={toggleTheme}>
			<span>
			 {theme === 'light' ? <SunIcon /> : <MoonIcon />}
			</span>
	</button>
	</div>
	);
}