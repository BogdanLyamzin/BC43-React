import {useContext} from "react";

import LanguageSwitcher from "../LanguageSwitcher";

import {langContext} from "../../context/langContext";

import locale from "./locale.json";

import styles from "./navbar.module.css";

const Navbar = ()=> {
    const {lang} = useContext(langContext);

    const menu = locale.menu[lang];

    return (
        <nav className={styles.navbar}>
            <a href="#">Logo</a>
            <div>{menu}</div>
            <LanguageSwitcher lang={lang} />
        </nav>
    )
}

export default Navbar;