import Image from "next/image";
import { StyledIconButton } from "./Button.styled";
import { kalam300 } from "@/lib/fonts";

const IconButton = (props) => {
    const {handleOnClick, srcIcon, size, altIcon, label} = props;

    const iconSizes = {
        xs: 10,
        sm: 20,
        md: 30
    };

    return(
    <StyledIconButton onClick={handleOnClick}>
        <Image 
            width={iconSizes[size]} 
            height={iconSizes[size]} 
            alt={altIcon} 
            src={srcIcon}
        />
       { label ? <span className={`icon-btn-label ${kalam300.className}`}>{label}</span> : null} 
    </StyledIconButton>
    )
}

export default IconButton;