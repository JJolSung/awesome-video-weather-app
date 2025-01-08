import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weather Awsome App',
  description: 'Weather Awsome App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
