import './globals.css'; // Importa los estilos globales
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Movie App',
  description: 'Challenge de estilos con TailwindCSS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
