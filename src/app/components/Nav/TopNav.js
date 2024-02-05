import { useState } from "react";
import { NavWrapper } from "./Nav.styled";
import SideBar from "../SideBar/SideBar";
import Image from "next/image";
import Link from "next/link";
import Typography from "../Typography/Typography";
import { Jua } from 'next/font/google';

// fonts
const jua = Jua({ subsets: ['latin'], weight: '400'});

const TopNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return(
        <>
            <NavWrapper position='top' bgColor='light'>
                <Link href="/">
                    <Image width={30} height={30} src="/photo-search-logo.png" alt="photo-search-logo"/>
                </Link>
                <Typography variant="h3" label="PhotoSearch" className={jua.className}/>
                <Image 
                    onClick={handleToggleMenu} 
                    width={20} 
                    height={20} 
                    src={isMenuOpen ? '/cross.png' : '/hamburguer-menu.png'} 
                    alt={isMenuOpen ? 'close-menu' : 'open-menu'}
                />
            </NavWrapper>
            {isMenuOpen ?  <SideBar isMenuOpen/> : null}
        </>
        
    )
}

export default TopNav;