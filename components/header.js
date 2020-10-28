import { useCookies } from "react-cookie";

export default function Header() {
    const [cookies] = useCookies(["language"]);
    const currentLanguage = cookies["language"];

    if (currentLanguage == "english") {
        return (
            <React.Fragment>
                <h1 className="title"> 
                    We are ready here to help you for <span>a successful business. </span>
                    We provide professional services at a fair price for your company.
                </h1>
                <br />
                <h2 className="subtitle"> 
                    Specialized in Accounting, Bookkeeping and Consultancy Services.
                </h2>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <h1 className="title"> 
                    İşletmenizde <span>sürdürülebilir başarı</span> sağlamanız için buradayız. 
                    Profesyonel muhasebe ve danışmanlık hizmetlerimizle uygun fıyatlarla çözümler sunmaktayız.
                </h1>
                <br />
                <h2 className="subtitle"> 
                    Ayrıntılı bilgiye ulaşmak için lütfen irtibata geçiniz. 
                </h2>
            </React.Fragment>
        );
    }
    
}