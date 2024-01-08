import { StyledTopNav } from "./Nav.styled";
import Image from "next/image";
import logo from "../../../../public/photo-search-logo.png";
import hamburguer from "../../../../public/hamburguer-menu.png";

const TopNav = () => {
    return(
        <StyledTopNav>
            <Image width={30} height={30} src={logo} alt="photo-search-logo"/>
            <h4>PhotoSearch</h4>
            <Image width={20} height={20} src={hamburguer} alt="hamburguer-menu"/>
        </StyledTopNav>
    )
}

export default TopNav;