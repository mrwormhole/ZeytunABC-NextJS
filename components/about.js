import { useContext } from "react";
import { Link } from "react-scroll";
import LanguageContext from "./languageContext";

export default function About() {
    const {currentLanguage} = useContext(LanguageContext);

    if (currentLanguage == "english") {
        return (
            <section className="section is-medium" id="about">
                    <div className="columns">
                        <div className="column is-6 is-offset-3">
                            <h2 className="title"> About Us </h2>
                            <br />
                            <p className="subtitle"> 
                            ZEYTUN ABC provides accounting, bookkeeping and consultancy services for businesses which are based or seek to be established in the United Kingdom.
                            We provide our services with ACCA and FCCA certified chartered accountants, AAT qualified professional bookkeepers and specialist business advisors who have PhD degree. <br /> <br /> 
                            We use cloud-based accounting software and the advantage of Open Banking opportunities to serve with the most up to date solutions for your accountancy needs.
                            We also apply various analysis techniques and offer different aspects of financial data to support our clients in their informational and practical needs.  <br /> <br /> 
                            We are ready here to help you no matter what you need to take necessary steps for a successful business.
                            </p>
                            <br />
                            {/*<div className="buttons is-centered">
                                <Link className="button is-danger is-rounded is-medium" style={{width: "40%"}}
                                    activeClass=""
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}> 
                                    Contact Us 
                                </Link>
                        </div>*/}
                        </div>
                    </div>
            </section>
        );
    } else {
        return (
            <section className="section is-medium" id="about">
                    <div className="columns">
                        <div className="column is-6 is-offset-3">
                            <h2 className="title"> About Us </h2>
                            <br />
                            <p className="subtitle"> 
                            ZEYTUN ABC, Birleşik Krallık’ta yerleşik olan veya yeni kurulacak işletmeler için muhasebe ve danışmanlık hizmetleri vermektedir.
                            Hizmetlerimizi ACCA ve FCCA sertifikalı yeminli muhasebeciler ve doktora derecesine sahip uzman iş danışmanları aracılığıyla sağlamaktayız. <br /> <br /> 
                            Muhasebe ihtiyaçlarınız için en güncel çözümleri, bulut tabanlı muhasebe yazılımları ve açık bankacılık avantajları gibi araçları da kullanarak sunmaktayız.
                            Ayrıca, müşterilerimizi tam ve anlaşılır bir şekilde bilgilendirirken pratik ihtiyaçlarını sorunsuz yerine getirmeleri için desteklemekteyiz. <br /> <br /> 
                            Başarılı bir iş için gerekli adımları başarılı bir şekilde atmanız için ihtiyaçlarınıza cevap vermeye hazırız.
                            </p>
                            <br />
                            {/*<div className="buttons is-centered">
                                <Link className="button is-danger is-rounded is-medium" style={{width: "40%"}}
                                    activeClass=""
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}> 
                                    Contact Us 
                                </Link>
                        </div>*/}
                        </div>
                    </div>
            </section>
        );
    }
}