import { SideBarWrapper, Items, Item } from "./SideBar.styled";
import Link from "next/link";

const SideBar = (props) => {
    const { handleToggleMenu } = props;

    return(
       <SideBarWrapper>
            <Items>
                <Item onClick={handleToggleMenu} >
                    <Link href="/feed">Feed</Link>
                </Item>
                <Item onClick={handleToggleMenu}>
                    <Link href="/mna96">My Profile</Link>
                </Item>
                <Item onClick={handleToggleMenu}>
                    <Link href="/">Log out</Link>
                </Item>
            </Items>
       </SideBarWrapper>
    )
}

export default SideBar;