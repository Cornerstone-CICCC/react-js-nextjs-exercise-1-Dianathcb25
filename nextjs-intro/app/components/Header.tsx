import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between bg-gray-100 p-2">
      <nav>
        <ul className="flex items-center gap-3">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/contact">Contact Us</Link>
          </li>

          <li>
            <Link href="/about">About Us</Link>
          </li>

          <li>
            <Link href="services">Our Services</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
