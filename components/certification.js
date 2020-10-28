import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCookies } from "react-cookie";

export default function Certification() {
    const [cookies] = useCookies(["language"]);
    const currentLanguage = cookies["language"];

    return (
        <section className="section" id="certification">
            <div className="columns is-centered is-vcentered">
                <div className="column is-8">
                <h2 className="title">
                    <FontAwesomeIcon className="tick-icon" icon={faCheckSquare} /> 
                    {currentLanguage == "english" ? 
                        " Providing solutions with Business Specialists (PhD), Certified Chartered Accountants (ACCA, FCCA) and Qualified Bookkeepers (AAT)" : 
                        " İşletme Uzmanları (Doktora), Sertifikalı Yeminli Muhasebeciler (ACCA, FCCA) ve Nitelikli Muhasebeciler (AAT) ile çözümler sunmaya devam ediyoruz"
                    }
                    <br /> <br />
                    <FontAwesomeIcon className="tick-icon" icon={faCheckSquare} />
                    {currentLanguage == "english" ?
                        " Registered to the Information Commissioner's Office (ICO)" :
                        " Bilgi Komiserliği Ofisine (ICO) kayıtlı"
                    }
                </h2>
                </div>
                <div className="column is-2">
                    <div className="certification-logo-image-wrapper" >
                        <div className="certification-logo-image"><img src="/ACCA.png" /></div>
                        <div className="certification-logo-image"><img src="/AAT.png" /></div>  
                        <div className="certification-logo-image"><img src="/ICO.png" /></div> 
                        <div className="certification-logo-image"><img src="/CIMA.png" /></div>
                    </div>  
                </div>

            </div>
            <div className="container">
                
                
            </div>
        </section>
    );
}