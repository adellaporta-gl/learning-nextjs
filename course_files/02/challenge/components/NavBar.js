import { useRouter } from 'next/router';
import Link from 'next/link';

const NavBar = () => {
    const router = useRouter();
    console.log("router", router);
    return (
        <nav>
            <ul>
                <Link href=""><li key="homeKey">Home</li></Link>
                <Link href="/contacts"><li key="contactsKey">Contacts</li></Link>
            </ul>
        </nav>
    );
}
export default NavBar;