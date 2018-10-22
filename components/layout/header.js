import Link from 'next/link';
const Header = (props) => (
    <header>
        <nav>
            <Link href="/">
                <button>Home</button>
            </Link>
            <Link href="/about">
                <button>About</button>
            </Link>
        </nav>
    </header>
)

export default Header