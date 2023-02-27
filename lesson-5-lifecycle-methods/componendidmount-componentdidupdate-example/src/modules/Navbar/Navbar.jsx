import NavbarMenu from "./NavbarMenu/NavbarMenu";

import styles from "./navbar.module.scss";

const Navbar = ({menuItems}) => {
    return (
        <div className={styles.navbar}>
            <div className="container">
                <div className={styles.navbarRow}>
                    <a href="#">Logo</a>
                    <NavbarMenu items={menuItems} />
                   {/* 
                   const props = {
                    items: menuItems
                   }
                   const obj = new NavbarMenu(props);
                   obj.render()
                   */}
                    <button>To books list</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;