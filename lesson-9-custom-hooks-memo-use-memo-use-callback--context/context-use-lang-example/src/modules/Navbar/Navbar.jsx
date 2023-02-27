import LanguageSwitcher from "../LanguageSwitcher";

import useLang from "../../shared/hooks/useLang";

import locale from "./locale.json";

import styles from "./navbar.module.css";

const Navbar = ()=> {
    const {lang} = useLang();

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