import Link from 'next/link';

export const Header = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 text-sm font-normal text-black">
            <div className="flex items-center space-x-1 font-semibold text-lg">
                <span>Stay</span>
                <span className="font-light">Unfiltered</span>
            </div>

            <ul className="hidden md:flex items-center space-x-6">
                <li className="cursor-pointer flex items-center space-x-1">
                    <span>Care</span>
                </li>

                <li className="cursor-pointer">
                    <Link href="/Community">Community</Link>
                </li>

                <li className="cursor-pointer flex items-center space-x-1">
                    <Link href="/Counsellor">Therapy</Link>
                </li>

                <li className="cursor-pointer">
                    Business
                </li>

                <li className="cursor-pointer">
                    <Link href="/About">About</Link>
                </li>

                <li className="cursor-pointer flex items-center space-x-1">
                    <span>Login</span>
                </li>

                <li>
                    <Link href="/Profile">Avatar</Link>
                </li>
            </ul>
        </nav>
    );
};
