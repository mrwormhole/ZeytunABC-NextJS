import '@fortawesome/fontawesome-svg-core/styles.css'
import "../styles/_app.scss"

import { useState } from 'react';
import LoadingContext from '../components/loadingContext';
import { CookiesProvider, useCookies } from 'react-cookie';
import UnderConstructionPage from './underConstruction';

export default function App({Component, pageProps}) {
    const [isLoading, setIsLoading] = useState(true);
    const [cookies, setCookie, removeCookie] = useCookies(["language"]);

    if (cookies["language"]) {
        setCookie("language", "english", { path: '/' });
    }
    if(cookies["language"] != "english" && cookies["language"] != "turkish") {
        removeCookie("language", { path: '/' });
        setCookie("language", "english", { path: '/' });
    }

    let maintenance = true
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
                <Component {...pageProps} />
        </LoadingContext.Provider>
    </CookiesProvider>
    );
}