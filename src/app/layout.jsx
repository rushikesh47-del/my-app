import { Metadata } from 'next';

export const metadata = {
  title: 'My Awesome App',
  description: 'This is an awesome Next.js app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Custom head content */}
        <meta charSet="UTF-8" />
      </head>
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
