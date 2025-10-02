import Navigation from "./Components/Navigation/Navigation";
import Logo from "@assets/General/LogoGenetiq.svg?react";
import styles from "./Navbar.module.scss";
import NotificationHub from "./Components/NotificationsHub/NotificationsHub";
import Profile from "./Components/Profile/Profile";
import ManageData from "./Components/ManageData/ManageData";
import { LanguageChanger } from "./Components/LanguageChanger/LanguageChanger";
import { ColorChanger } from "./Components/ColorChanger/ColorChanger";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
	const { t } = useTranslation();

	return (
		<div className={styles["navbar-container"]}>
			<div className={styles["logo-wrapper"]}>
				<Logo />
			</div>
			<Navigation />
			<div className={styles["actions-container"]}>
				<p>{t('welcome_message')}</p>
				<ManageData />
				<LanguageChanger />
				<ColorChanger />
				<NotificationHub IsBadge={true} />
				<Profile />
			</div>
		</div>
	);
};

export default Navbar;
