import { StyledSquareButton } from "./Button.styled";

const InputButton = (props) => {
    const { id, name, handleOnClick, value, elementType, backgroundColor } = props;

    return (
        elementType === 'submit' 
        ? <StyledSquareButton value={value} type={elementType} backgroundColor={backgroundColor} id={id} name={name} /> 
        : <StyledSquareButton value={value} type={elementType} onClick={handleOnClick} backgroundColor={backgroundColor} id={id} name={name}/>
        )
}

export default InputButton;