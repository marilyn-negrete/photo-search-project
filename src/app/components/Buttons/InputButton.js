import { StyledSquareButton } from "./Button.styled";

const InputButton = (props) => {
    const { handleOnClick, value, elementType, backgroundColor } = props;

    return (
        elementType === 'submit' 
        ? <StyledSquareButton value={value} type={elementType}/> 
        : <StyledSquareButton value={value} type={elementType} onClick={handleOnClick} backgroundColor={backgroundColor ? backgroundColor : 'black'}/>
        )
}

export default InputButton;