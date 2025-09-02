// components/Footer/Footer.tsx
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-3">
        {/* Column 1: Logo / Brand */}
        <div>
          <h2 className="text-2xl text-black font-bold">Lumina Lens Studio</h2>
          <p className="text-sm text-black  mt-2">
            Capturing moments, crafting memories.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black ">Navigate</h3>
          <ul className="space-y-2 text-black text-sm">
            <li><Link href="/" className="hover:text-gray-500">Home</Link></li>
            <li><Link href="/gallery" className="hover:text-gray-500">Gallery</Link></li>
            <li><Link href="/about" className="hover:text-gray-500">About</Link></li>
            <li><Link href="/services" className="hover:text-gray-500">Services</Link></li>
            <li><Link href="/contact" className="hover:text-gray-500">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black ">Connect</h3>
          <div className="flex space-x-4 text-black">
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              <FaInstagram />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              <FaFacebookF />
            </Link>
            <Link href="mailto:info@luminalens.com" className="hover:text-gray-500">
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lumina Lens Studio. All rights reserved.
      </div>
    </footer>
  );
}
