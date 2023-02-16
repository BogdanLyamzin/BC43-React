import styles from "./button.module.scss";

const Button = ({text, active, type = "submit"})=> {
    const fullClassName = active ? `${styles.btn} active` : styles.btn;

    return <button type={type} className={fullClassName}>{text}</button>
}

export default Button;