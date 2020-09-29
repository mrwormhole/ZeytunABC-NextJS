import '@fortawesome/fontawesome-svg-core/styles.css'
import "../styles/_app.scss"

import { useState } from 'react';
import LanguageContext from '../components/languageContext';

export default function App({Component, pageProps}) {
    
    const [language, setLanguage] = useState("english");

    return (
        <LanguageContext.Provider value={{currentLanguage: language, setCurrentLanguage: setLanguage}}>
            <Component {...pageProps} />
        </LanguageContext.Provider>
    );
}