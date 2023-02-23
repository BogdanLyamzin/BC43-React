import { useState } from "react";

import styles from "./navbar-menu.module.scss";

const NavbarMenu = ({items}) => {
   const [activeIndex, setActiveIndex] = useState(0);

   const elements = items.map(({ id, link, text }, index) => {
       const fullClassName = index === activeIndex ? `${styles.link} ${styles.active}` : styles.link;
       return (
           <li key={id}>
               <a onClick={() => setActiveIndex(index)} href={link} className={fullClassName}>{text}</a>
           </li>
       )
   });

   return (
       <ul className={styles.menu}>
           {elements}
       </ul>
   )
}

export default NavbarMenu;

/*
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
*/
