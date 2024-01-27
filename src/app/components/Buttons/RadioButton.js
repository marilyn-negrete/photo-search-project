import Image from "next/image";
import { StyledRadioButton } from "./Button.styled";

const RadioButton = (props) => {
    const {handleOnClick, srcIcon, size, shadow} = props;

    return(
    <StyledRadioButton onClick={handleOnClick} size={size} shadow={shadow}>
        <Image width={size === 'sm' ? 10 : 25} height={size === 'sm' ? 10 : 25} alt="Create" src={srcIcon}/>
    </StyledRadioButton>
    )
}

export default RadioButton;