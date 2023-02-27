import {useContext} from "react";

import {langContext} from "../../context/langContext";

import styles from "./language-switcher.module.css";

const LanguageSwitcher = () => {
    const {lang, toggleLang} = useContext(langContext);

    return (
        <div>
            <span onClick={toggleLang} className={lang === "ua" ? styles.currentLang : styles.lang}>UA</span>
            | 
            <span onClick={toggleLang} className={lang === "ru" ? styles.currentLang : styles.lang}>RU</span> 
        </div>
    )
}

export default LanguageSwitcher;