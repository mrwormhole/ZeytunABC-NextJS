import Head from 'next/head'
import { useState, useEffect } from 'react';

import Preloader from '../components/preloader'
import Navigation from '../components/navigation';
import FloatingActionButton from "../components/floatingActionButton";

import Footer from "../components/footer";
import Introduction from "../components/introduction";
import About from "../components/about";
import Services from '../components/services';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => { 
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

  if (isLoading) {
    return (
        <Preloader />
    );
  }

  return (
    <React.Fragment>

      <Head>
        <meta name="title" content="Zeytun ABC London" />
		    <meta name="description" content="Zeytun ABC London is a company established in London with a great team. We offer wide range of web development and social media management services with a wide range of languages at a reasonable cost. This is the official site of Goldenhand Software London." />
		    <meta name="keywords" content="zeytun abc, accounting, london, zeytun abc london, zeytun abc accounting, software london, talha, altinel, talha altinel, web, development, web development london, web london, development london, london web development, web development agency, social, media, management, social media management london, media management london, social media london, website designer agency for convenient cost" />
		    <meta name="robots" content="index, follow" />
		    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
		    <meta name="language" content="English" />
		    <meta name="author" content="Goldenhand Software London" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Zeytun Accounting</title>

 
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="manifest" href="favicon_io/site.webmanifest" />
      </Head>

      <Navigation />
      <main>
        <Introduction />
        <About />
        <Services />
      </main>

      <FloatingActionButton />
      <Footer /> 

    </React.Fragment>
  );
}
