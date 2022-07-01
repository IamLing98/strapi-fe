import { useEffect, useState } from 'react';
import Aside from '../components/Aside';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Preloading from '../components/Preloading';

// Global CSS
// import '../public/css/style.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);

  return (
    <>
      {loader && <Preloading />}

      <Header />

      <Aside />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />

      <div className="dark-mark"></div>
    </>
  );
}
