import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'E-Cell VIT Mumbai | Entrepreneurship Cell',
  description: 'The Entrepreneurship Cell of Vidyalankar Institute of Technology, Mumbai. Fostering innovation, building startups, and nurturing entrepreneurs.',
  keywords: 'E-Cell, VIT Mumbai, Entrepreneurship, Startups, Vidyalankar, Innovation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-dark-950 text-white noise-overlay">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
