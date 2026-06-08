import Header from '@/components/Header';
import Footer from '@/components/Footer';
// @ts-ignore: CSS side-effect import without type declarations
import './globals.css';

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