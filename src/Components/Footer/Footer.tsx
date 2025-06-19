// components/Footer/Footer.tsx
import { FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 mt-20">
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
            <li><a href="/" className="hover:text-gray-500">Home</a></li>
            <li><a href="/gallery" className="hover:text-gray-500">Gallery</a></li>
            <li><a href="/about" className="hover:text-gray-500">About</a></li>
            <li><a href="/services" className="hover:text-gray-500">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-500">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-black ">Connect</h3>
          <div className="flex space-x-4 text-black">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              <FaFacebookF />
            </a>
            <a href="mailto:info@luminalens.com" className="hover:text-gray-500">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lumina Lens Studio. All rights reserved.
      </div>
    </footer>
  );
}
