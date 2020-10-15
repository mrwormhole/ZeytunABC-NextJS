import { useCookies } from "react-cookie";

export default function Header() {
    const [cookies] = useCookies(["language"]);
    const currentLanguage = cookies["language"];

    if (currentLanguage == "english") {
        return (
            <React.Fragment>
                <h1 className="title"> 
                    We provide perfect solutions for businesses and self employed individuals who need
                    <span>convenient and reliable</span> accountancy services
                </h1>
                <br />
                <h2 className="subtitle"> 
                    Specialized in Accounting, Bookkeeping and Consultancy Services
                </h2>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <h1 className="title"> 
                <span>Uygun ve güvenilir</span> muhasebe servislerine ihtiyaç duyan işletmeler 
                ve serbest meslek sahipleri için en iyi çözümleri sunuyoruz
                </h1>
                <br />
                <h2 className="subtitle"> 
                    Muhasebe, Ön Muhasebe  ve Danışmanlık Hizmetlerinde Profesyonellik
                </h2>
            </React.Fragment>
        );
    }
    
}