import styled from '@emotion/styled';

const Button = styled.button`
    text-decoration: none;
    padding: 10px 15px;
    background-color: ${props => props.active ? "red" : "#fff"};
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: ${props => props.active ? "#fff" : "red"};
    border: 1px solid red;
    border-radius: 5px;
    cursor: pointer;

    :hover {
        background-color: ${props => props.active ? "#fff" : "red"};
        color: ${props => props.active ? "red" : "#fff"};
    }
`

export default Button;