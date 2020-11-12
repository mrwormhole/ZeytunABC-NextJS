import Head from 'next/head'
import { useEffect, useContext } from 'react';

import LoadingContext from "../components/loadingContext";
import Preloader from '../components/preloader';
import Navigation from '../components/navigation';
import FloatingActionButton from "../components/floatingActionButton";

import Footer from "../components/footer";
import Introduction from "../components/introduction";
import About from "../components/about";
import Services from '../components/services';
import Certification from '../components/certification';
import Achievements from '../components/achievements';
import ContactForm from '../components/contactForm';
import { useCookies } from 'react-cookie';

export default function HomePage() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [cookies2, setCookie2, removeCookie2] = useCookies(["animationEnabled"]);

  useEffect(() => {
    setTimeout(() => { 
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

  if (typeof window !== undefined) {
    if (isLoading) {
      return (
          <Preloader />
      );
    }
  }

  console.log("isloading(index page): ",isLoading);

  return (
    <React.Fragment>

      <Head>
        <meta name="title" content="Zeytun ABC London" />
		    <meta name="description" content="Zeytun ABC LTD is a company established in London. We offer wide range of accountancy, taxation and consultancy services with highest reliablity and the most convenient costs. This is the official site of Zeytun ABC London." />
		    <meta name="keywords" content="zeytun abc, accounting, london, zeytun abc london, zeytun abc accounting, software london, mehmet, altun, mehmet altun, zeyneb altun, accountancy, accountancy service, taxation service, consultancy service, accountancy taxation consultancy london, london accountant, accountancy agency, accounting for convenient cost, reliable accountant" />
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
        <link rel="manifest" href="site.webmanifest" />
      </Head>

      <Navigation />
      <main>
        <Introduction />
        <Certification />
        <Services />
        {/*<Achievements />*/}
        <About />
        <ContactForm />
      </main>
      <FloatingActionButton />
      <Footer /> 

    </React.Fragment>
  );
}
