import { NavWrapper } from "./Nav.styled";
import Link from "next/link";
import Image from "next/image";

const BottomNav = (props) => {
    const {position} = props;

    return (
        <NavWrapper className={position}>
            <div>
                <Link href="/feed">
                    <Image
                        alt="home-option"
                        src="/home.png"
                        width={25}
                        height={25}
                    />
                </Link>
            </div>
            <div>
                <Link href="/local-photographers">
                    <Image
                        alt="location-option"
                        src="/location.png"
                        width={25}
                        height={25}
                    />
                </Link>
            </div>
            <div>
                <Link href="/camera">
                    <Image
                        alt="camera-option"
                        src="/camera.png"
                        width={25}
                        height={25}
                    />
                </Link>
            </div>
            <div>
                <Link href="/feed">
                    <Image
                        alt="bell-option"
                        src="/bell.png"
                        width={25}
                        height={25}
                    />
                </Link>

            </div>
            <div>
                <Link href="/profile/1">
                    <Image
                        alt="user-option"
                        src="/user.png"
                        width={25}
                        height={25}
                    />
                </Link>
            </div>
        </NavWrapper>
    )
}

export default BottomNav;