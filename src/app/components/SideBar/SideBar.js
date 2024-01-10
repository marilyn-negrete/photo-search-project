import { SideBarWrapper, Items, Item } from "./SideBar.styled";

const SideBar = () => {
    return(
       <SideBarWrapper>
            <Items>
                <Item>One</Item>
                <Item>Two</Item>
                <Item>Three</Item>
            </Items>
       </SideBarWrapper>
    )
}

export default SideBar;