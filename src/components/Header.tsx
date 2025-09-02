'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Lumina Lens Studio
        </Link>

        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 w-full bg-white border-t md:static md:block md:border-none md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 px-4 py-4 md:p-0">
            <li>
              <Link href="/" onClick={closeMenu} className="text-gray-700 hover:text-black">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={closeMenu} className="text-gray-700 hover:text-black">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" onClick={closeMenu} className="text-gray-700 hover:text-black">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu} className="text-gray-700 hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu} className="text-gray-700 hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
