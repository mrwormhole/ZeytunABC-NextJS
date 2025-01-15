import '@fortawesome/fontawesome-svg-core/styles.css';
import "../styles/_app.scss";

import Script from 'next/script';
import { useState } from 'react';
import LoadingContext from '../components/loadingContext';
import { CookiesProvider, useCookies } from 'react-cookie';
import UnderConstructionPage from './under-construction';

export default function App({Component, pageProps}) {
    const [isLoading, setIsLoading] = useState(true);
    const [cookies, setCookie] = useCookies(["language"]);

    if (!cookies["language"]) {
        setCookie("language", "english", { path: '/' });
    }

    let maintenance = false
    if(maintenance) {
        return(
            <UnderConstructionPage />
        );
    }

    return (
    <CookiesProvider>
        <LoadingContext.Provider value = {{
            isLoading: isLoading,
            setIsLoading: setIsLoading}}>
                <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
                <Script strategy="lazyOnload">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                        page_path: window.location.pathname,
                        });
                    `}
                </Script>
                <Component {...pageProps} />
        </LoadingContext.Provider>
    </CookiesProvider>
    );
}
