import Image from "next/image";
import { StyledRadioButton } from "./Button.styled";

const RadioButton = (props) => {
    const {handleOnClick} = props;

    return(
    <StyledRadioButton onClick={handleOnClick}>
        <Image width={25} height={25} alt="Create" src="/plus.svg"/>
    </StyledRadioButton>
    )
}

export default RadioButton;