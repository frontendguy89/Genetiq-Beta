import React, { useState } from 'react';
import LanguageIcon from "@assets/Navbar/Icons/Language.svg?react";
import styles from "./LanguageChanger.module.scss";
import { useTranslation } from 'react-i18next';

const primaryLanguage = "en";
const secondaryLanguage = "hy";

export const LanguageChanger = () => {
	
	const { t, i18n } = useTranslation();

	const currentLanguage = i18n.resolvedLanguage;

	const nextLanguage = currentLanguage === primaryLanguage ? secondaryLanguage : primaryLanguage;

	const changeLanguage = () => {
    		i18n.changeLanguage(nextLanguage);
  	 };
		
	return (
		<div>
			<button className={styles["button"]} onClick={changeLanguage}>
				<LanguageIcon />
			</button>
		</div>
	);

}