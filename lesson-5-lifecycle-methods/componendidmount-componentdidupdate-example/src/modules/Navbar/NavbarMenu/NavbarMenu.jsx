import { Component } from "react";

import styles from "./navbar-menu.module.scss";

class NavbarMenu extends Component {
    state = {
        activeIndex: 0,
    }

    handleClick(index) {
        this.setState({
            activeIndex: index,
        })
    }

    render() {
        const { items } = this.props;
        const {activeIndex} = this.state;
        console.log(activeIndex);
        
        const elements = items.map(({ id, link, text }, index) => {
            const fullClassName = index === activeIndex ? `${styles.link} ${styles.active}` : styles.link;

            return (
                <li key={id}>
                    <a onClick={() => this.handleClick(index)} href={link} className={fullClassName}>{text}</a>
                </li>
            )
        });

        return (
            <ul className={styles.menu}>
                {elements}
            </ul>
        )
    }
}

export default NavbarMenu;