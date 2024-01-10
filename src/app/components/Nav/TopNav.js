import { useState } from "react";
import { StyledTopNav } from "./Nav.styled";
import SideBar from "../SideBar/SideBar";
import Image from "next/image";
import Link from "next/link";

const TopNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return(
        <>
            <StyledTopNav>
                <Link href="/">
                    <Image width={30} height={30} src="/photo-search-logo.png" alt="photo-search-logo"/>
                </Link>
                <h4>PhotoSearch</h4>
                <Image 
                    onClick={handleToggleMenu} 
                    width={20} 
                    height={20} 
                    src={isMenuOpen ? '/cross.png' : '/hamburguer-menu.png'} 
                    alt={isMenuOpen ? 'close-menu' : 'open-menu'}
                />
            </StyledTopNav>
            {isMenuOpen ?  <SideBar isMenuOpen/> : null}
        </>
        
    )
}

export default TopNav;