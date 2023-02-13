import "./button.css";

const Button = ({text, active, type = "submit"})=> {
    const fullClassName = active ? "btn active" : "btn";

    return <button type={type} className={fullClassName}>{text}</button>
}

export default Button;