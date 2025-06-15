'use client';
import './Header.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">Lumina Lens Studio</div>
      <nav className="header__nav">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
