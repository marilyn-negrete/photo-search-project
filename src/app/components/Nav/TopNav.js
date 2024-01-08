import { useState } from "react";
import { StyledTopNav } from "./Nav.styled";
import Image from "next/image";
import logo from "../../../../public/photo-search-logo.png";
import hamburguer from "../../../../public/hamburguer-menu.png";
import cross from "../../../../public/cross.png";
import Link from "next/link";

const TopNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return(
        <StyledTopNav>
            <Link href="/">
                <Image width={30} height={30} src={logo} alt="photo-search-logo"/>
            </Link>
            <h4>PhotoSearch</h4>
            <Image 
                onClick={handleToggleMenu} 
                width={20} 
                height={20} 
                src={isMenuOpen ? cross : hamburguer} 
                alt={isMenuOpen ? 'close-menu' : 'open-menu'}
            />
        </StyledTopNav>
    )
}

export default TopNav;