import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'Finding Finance Association',
  description: 'Democratizing Finance Industry Education for Students',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}