'use client';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Lumina Lens Studio. All rights reserved.</p>
    </footer>
  );
}
