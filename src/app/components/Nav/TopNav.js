import { useState } from "react";
import { NavWrapper } from "./Nav.styled";
import Image from "next/image";
import Link from "next/link";
import { chewy400 } from "@/lib/fonts";
import dynamic from "next/dynamic";

const TheSideBar = dynamic(() => import("@/components/SideBar/SideBar"));

const TopNav = (props) => {
  const { position } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <NavWrapper className={position} isMenuOpen={isMenuOpen}>
        <Link href="/">
          <Image
            width={30}
            height={30}
            src="/photo-search-logo.png"
            alt="photo-search-logo"
          />
        </Link>
        <h3 className={chewy400.className}>PhotoSearch</h3>
        <Image
          onClick={handleToggleMenu}
          width={20}
          height={20}
          src={isMenuOpen ? "/cross.png" : "/hamburguer-menu.png"}
          alt={isMenuOpen ? "close-menu" : "open-menu"}
        />
      </NavWrapper>
      {isMenuOpen ? <TheSideBar isMenuOpen /> : null}
    </>
  );
};

export default TopNav;
