import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TopVirais',
  description: 'Desbloqueie o acesso a vídeos virais e comece a lucrar!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%' y='50%' dominant-baseline='central' text-anchor='middle' font-family='Poppins, sans-serif' font-size='90' font-weight='900' fill='%23fab915'>V</text></svg>" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
