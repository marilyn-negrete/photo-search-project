import Image from "next/image";
import { StyledIconButton } from "./Button.styled";

const IconButton = (props) => {
    const {handleOnClick, srcIcon, size, shadow} = props;

    return(
    <StyledIconButton onClick={handleOnClick} size={size} shadow={shadow}>
        <Image width={size === 'sm' ? 10 : 25} height={size === 'sm' ? 10 : 25} alt="Create" src={srcIcon}/>
    </StyledIconButton>
    )
}

export default IconButton;