import { useState } from "react";
import { NavWrapper } from "./Nav.styled";
import SideBar from "../SideBar/SideBar";
import Image from "next/image";
import Link from "next/link";
import { jua400 } from "@/lib/fonts";

const TopNav = (props) => {
  const { position } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <NavWrapper className={position}>
        <Link href="/">
          <Image
            width={30}
            height={30}
            src="/photo-search-logo.png"
            alt="photo-search-logo"
          />
        </Link>
        <h3 className={jua400.className}>PhotoSearch</h3>
        <Image
          onClick={handleToggleMenu}
          width={20}
          height={20}
          src={isMenuOpen ? "/cross.png" : "/hamburguer-menu.png"}
          alt={isMenuOpen ? "close-menu" : "open-menu"}
        />
      </NavWrapper>
      {isMenuOpen ? <SideBar isMenuOpen /> : null}
    </>
  );
};

export default TopNav;
