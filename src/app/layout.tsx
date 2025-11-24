import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Royal Mushrooms - Premium Organic Fungi",
  description: "Discover exquisite, sustainably-sourced premium mushrooms delivered fresh to your door",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(26, 26, 46, 0.95)',
              color: '#fff',
              border: '1px solid rgba(100, 200, 255, 0.3)',
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
