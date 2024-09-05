import Image from "next/image";
import { StyledIconButton } from "./Button.styled";

const IconButton = (props) => {
    const {handleOnClick, srcIcon, size, altIcon} = props;

    console.log(props);
    
    return(
    <StyledIconButton onClick={handleOnClick} size={size}>
        <Image width={size === 'sm' ? 10 : 25} height={size === 'sm' ? 10 : 25} alt={altIcon} src={srcIcon}/>
    </StyledIconButton>
    )
}

export default IconButton;