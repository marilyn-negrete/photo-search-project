import styles from "./styles.module.scss"
import Link from "next/link"

const Nav = () => {
    return (
        <nav className="nav">
            <ul className={styles.nav__links}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/feed">Feed</Link>
                </li>
                <li>
                    <Link href="/local-photographers">Local Photographers</Link>
                </li>
                <li>
                    <Link href="/camera">Camera</Link>
                </li>
                <li>
                    <Link href="/profile/1">Profile</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;