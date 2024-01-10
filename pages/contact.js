import Head from 'next/head'
import React from "react";

import Navigation from '../components/navigation';
import FloatingActionButton from "../components/floatingActionButton";
import Footer from "../components/footer";
import ContactCardForm from '../components/contactCardForm';

export default function Contact() {
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

      <Navigation onPage="contact" />
      <main>
        <ContactCardForm />
      </main>
      <FloatingActionButton />
      <Footer />
    </React.Fragment>
  );
}
