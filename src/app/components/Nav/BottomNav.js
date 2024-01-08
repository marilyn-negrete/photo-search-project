import { StyledBottomNav } from "./Nav.styled";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
    return (
        <StyledBottomNav>
            <ul>
                <li>
                    <Link href="/">
                        <Image
                            alt="home-option"
                            src="/home.png"
                            width={25}
                            height={25}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/local-photographers">
                        <Image
                            alt="location-option"
                            src="/location.png"
                            width={25}
                            height={25}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/camera">
                        <Image
                            alt="camera-option"
                            src="/camera.png"
                            width={25}
                            height={25}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/feed">
                        <Image
                            alt="bell-option"
                            src="/bell.png"
                            width={25}
                            height={25}
                        />
                    </Link>

                </li>
                <li>
                    <Link href="/profile/1">
                        <Image
                            alt="user-option"
                            src="/user.png"
                            width={25}
                            height={25}
                        />
                    </Link>
                </li>
            </ul>
        </StyledBottomNav>
    )
}

export default Nav;