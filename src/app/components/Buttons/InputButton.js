import { StyledSquareButton } from "./Button.styled";

const InputButton = (props) => {
    const { id, name, handleOnClick, value, elementType, backgroundColor, disabled } = props;

    return (
        elementType === 'submit' 
        ? <StyledSquareButton 
            value={value} 
            type={elementType} 
            backgroundColor={backgroundColor} 
            id={id} name={name} 
            disabled={disabled} 
            /> 
        : <StyledSquareButton 
            value={value} 
            type={elementType} 
            onClick={handleOnClick} 
            backgroundColor={backgroundColor} 
            id={id} name={name} 
            disabled={disabled} 
            />
        )
}

export default InputButton;