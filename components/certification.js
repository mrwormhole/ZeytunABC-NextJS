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
                        " Providing solutions with Business Specialists, Certified Chartered Accountants and Qualified Bookkeepers" : 
                        " İşletme Uzmanları, Sertifikalı Yeminli Muhasebeciler ve Nitelikli Muhasebeciler ile çözümler sunmaya devam ediyoruz"
                    }
                    <br /> <br />
                    <FontAwesomeIcon className="tick-icon" icon={faCheckSquare} />
                    {currentLanguage == "english" ?
                        " Registered to the Information Commissioner's Office (ICO)" :
                        " Veri Güvenliği Kapsamında ICO kaydımız bulunmaktadır"
                    }
                </h2>
                </div>
            </div>
        </section>
    );
}
