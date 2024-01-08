import { StyledBottomNav } from "./Nav.styled";
import Link from "next/link";
import Image from "next/image";
import home from "../../../../public/home.png";
import camera from "../../../../public/camera.png";
import location from "../../../../public/location.png";
import bell from "../../../../public/bell.png";
import user from "../../../../public/user.png";

const Nav = () => {
    return (
        <StyledBottomNav>
            <ul>
                <li>
                    <Link href="/">
                        <Image
                            alt="home-option"
                            src={home}
                            width={25}
                            height={25}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/local-photographers">
                        <Image
                            alt="location-option"
                            src={location}
                            width={25}
                            height={25}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/camera">
                        <Image
                            alt="camera-option"
                            src={camera}
                            width={25}
                            height={25}
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/feed">
                        <Image
                            alt="bell-option"
                            src={bell}
                            width={25}
                            height={25}
                        />
                    </Link>

                </li>
                <li>
                    <Link href="/profile/1">
                        <Image
                            alt="user-option"
                            src={user}
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