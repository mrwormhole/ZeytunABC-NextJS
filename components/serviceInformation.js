import { useCookies } from "react-cookie";

export default function ServiceInformation({imageName, serviceContent, serviceContentTR}) {
    const [cookies] = useCookies(["language"]);
    const currentLanguage = cookies["language"];

    if ( currentLanguage == "english") {
        return (
            <div className="column is-10 is-offset-1 columns services-information">
                <div className="column is-5 is-offset-1 py-6 mt-6">
                    <figure className="image">
                        <img src={imageName} loading="lazy" alt={imageName} />
                    </figure> 
                </div>
                <div className="column is-4 is-offset-1 has-margin-top-auto has-margin-bottom-auto my-3 py-3">
                    <div className="title">
                        <h2 className="has-text-black is-family-secondary"> {currentLanguage == "english" ? "How Can We Help?" : "Nasıl Yardımcı Olabiliriz?"} </h2>
                    </div>
                    
                    <h5 className="is-size-5 has-text-weight-bold"> 
                        {serviceContent ? serviceContent.split("\n").map((sentence, i) => <span key={i}><br />{sentence}</span>) : ""}
                    </h5>
                </div>
            </div>
        );
    } else {
        return (
            <div className="column is-10 is-offset-1 columns services-information">
                <div className="column is-5 is-offset-1 py-6 mt-6">
                    <figure className="image">
                        <img src={imageName} loading="lazy" alt={imageName} />
                    </figure> 
                </div>
                <div className="column is-4 is-offset-1 has-margin-top-auto has-margin-bottom-auto my-3 py-3">
                    <div className="title">
                        <h2 className="has-text-black is-family-secondary"> {currentLanguage == "english" ? "How Can We Help?" : "Nasıl Yardımcı Olabiliriz?"} </h2>
                    </div>
                    
                    <h5 className="is-size-5"> 
                        {serviceContentTR ? serviceContentTR.split("\n").map((sentence, i) => <span key={i}><br />{sentence}</span>) : ""}
                    </h5>
                </div>
            </div>
        );
    }
    
}