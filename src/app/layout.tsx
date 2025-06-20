import Header from '@/components/Header/Header';
import './globals.css';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Lumina Lens Studio',
  description: 'Capturing Moments, Crafting Memories',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </ body>
    </html>
  );
}