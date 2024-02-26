import { StyledSquareButton } from "./Button.styled";

const InputButton = (props) => {
    const { handleOnClick, value, elementType, backgroundColor } = props;

    return (
        elementType === 'submit' 
        ? <StyledSquareButton value={value} type={elementType} backgroundColor={backgroundColor}/> 
        : <StyledSquareButton value={value} type={elementType} onClick={handleOnClick} backgroundColor={backgroundColor}/>
        )
}

export default InputButton;