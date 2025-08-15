// pages/_app.js
import '../styles/globals.css'; // This imports your Tailwind CSS and custom styles
import Head from 'next/head'; // Import Next.js Head component for managing <head> content

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Head component to add meta tags, link tags for fonts etc. */}
      <Head>
        {/* Link to Google Fonts to load the 'Inter' font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      {/* This renders the actual page component (e.g., Home from index.js) */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;