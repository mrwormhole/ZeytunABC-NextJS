import '@fortawesome/fontawesome-svg-core/styles.css'
import "../styles/_app.scss"

import { useState } from 'react';
import LanguageContext from '../components/languageContext';
import LoadingContext from '../components/loadingContext';

export default function App({Component, pageProps}) {
    const [isLoading, setIsLoading] = useState(true);
    const [language, setLanguage] = useState("english");

    return (
    <LoadingContext.Provider value = {{
        isLoading: isLoading,
        setIsLoading: setIsLoading}}>
            <LanguageContext.Provider 
                value={{currentLanguage: language, 
                setCurrentLanguage: setLanguage}}>
                    <Component {...pageProps} />
            </LanguageContext.Provider>
    </LoadingContext.Provider>
    );
}