import { StyledSquareButton } from "./Button.styled";

const InputButton = (props) => {
    const { handleOnClick, value, elementType } = props;

    return (
        elementType === 'submit' 
        ? <StyledSquareButton value={value} type={elementType} /> 
        : <StyledSquareButton value={value} type={elementType} onClick={handleOnClick}/>
        )
}

export default InputButton;