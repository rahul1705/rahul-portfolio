import Link from 'next/link';
import NavbarToggleButton from './NavbarToggleButton';
import { personalData } from '@/utils/data/personal-data';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-transparent relative">
      <div className="flex items-center justify-between py-3 px-4 md:px-6">
        {/* Website Name */}
        <div className="flex flex-shrink-0 items-center w-full md:w-auto md:justify-start">
          <Link href="/" id='logo-name' className="text-3xl font-semibold bg-gradient-to-r from-green-400 via-sky-400 to-violet-600 text-transparent bg-clip-text leading-[3.4rem] pe-2">
            {personalData.name}
          </Link>
        </div>

        {/* Toggle Button and Navigation Links */}
        <NavbarToggleButton />

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex md:space-x-6">
          {['about', 'experience', 'skills', 'education', 'projects'].map((item) => (
            <li key={item}>
              <Link
                href={`/${item === 'about' ? '#about' : `#${item}`}`}
                className="block px-4 py-2 text-base text-white transition-colors duration-300 hover:text-violet-500"
              >
                {item.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;