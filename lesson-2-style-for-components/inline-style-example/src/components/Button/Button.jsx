import buttonStyles from "./button-styles";

const Button = ({text, type = "submit"})=> {

    return <button type={type} style={buttonStyles.btn}>{text}</button>
}

export default Button;