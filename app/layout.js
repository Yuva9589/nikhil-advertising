import './globals.css';

export const metadata = {
  title: 'Nikhil Advertising — Digital Wall Wraps & Outdoor Branding',
  description: 'India\'s trusted partner for digital wall wraps & outdoor branding solutions. Premium quality, bulk orders, pan India service.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
