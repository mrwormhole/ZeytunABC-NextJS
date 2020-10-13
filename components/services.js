import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator, faBook, faEnvelopeOpenText, faChartLine, faPenFancy, faBriefcase, faTasks, faBuilding, faUsers, faUserTie, faFileInvoiceDollar, faFileInvoice } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import LanguageContext from './languageContext';
//import ServiceCard from './serviceCard'

export default function Services() {
    const { currentLanguage } = useContext(LanguageContext);
    let serviceNames;
    if (currentLanguage == "english") {
        serviceNames = ["Ankara Agreement", "Company Formation", "Address Services", "Bookkeeping", "Tax Services", "Year-End Accounts", 
                        "Payroll(PAYE)", "VAT Returns", "Start-up Support", "Business Consultancy", "Management Accounts", "Audit"];
    } else {
        serviceNames = ["Ankara Anlamaşması", "Şirket Kurulumu", "Adres Servisi", "Ön Muhasebe İşlemleri", "Vergi İşlemleri", "Dönem Sonu Muhasebe İşlemleri",
                        ];
    }
    
    /*
    return (
        <section className="section is-medium" id="services">
            <h2 className="title"> Our Services </h2>
            <br />

            <div className="columns reverse-columns is-centered is-vcentered mt-5">
                <div className="column is-6-tablet is-6-desktop is-paddingless">
                    <ServiceCard serviceName={accountancyServices} icons={accountancyIcons} 
                        serviceDescription={accountancyDescriptions}/>
                </div>
                <div className="column is-6-tablet is-4-desktop is-paddingless">
                    <img className="card-image" src="/accountancy.png" alt="Accountacy Services" />
                </div>
            </div>
            <div className="columns is-centered is-vcentered mt-5">
                <div className="column is-6-tablet is-4-desktop is-paddingless">
                    <img className="card-image" src="/taxation.png" alt="Taxation Services" />
                </div>
                <div className="column is-6-tablet is-6-desktop is-paddingless">
                    <ServiceCard serviceName={taxationServices} icons={taxationsIcons}
                            serviceDescription={taxationDescriptions} />
                </div>
            </div>
            <div className="columns reverse-columns is-centered is-vcentered mt-5">
                <div className="column is-6-tablet is-6-desktop is-paddingless">
                    <ServiceCard serviceName={consultancyServices} icons={consultancyIcons}
                            serviceDescription={consultancyDescriptions} />
                </div>
                <div className="column is-6-tablet is-4-desktop is-paddingless">
                    <img className="card-image" src="/consultancy.png" alt="Consultancy Services" />
                </div>
            </div>
        </section>
    );*/
    return (
        <section className="section is-medium" id="services">
            <h2 className="title"> {currentLanguage == "english" ? "Our Services" : "Servislerimiz"} </h2>
            <br />

            <div className="columns is-centered is-vcentered mt-5">
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <a href="/services/test">
                        <FontAwesomeIcon className="category-icon" icon={faUsers} />
                        <h2>{serviceNames[0]}</h2>
                    </a>
                </div>
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <FontAwesomeIcon className="category-icon" icon={faPenFancy} />
                    <h2>{serviceNames[1]}</h2>
                </div>
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <FontAwesomeIcon className="category-icon" icon={faBuilding} />
                    <h2>{serviceNames[2]}</h2>
                </div>
            </div>

            <div className="columns is-centered mt-2 is-vcentered">
            
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <FontAwesomeIcon className="category-icon" icon={faBook} />
                    <h2>{serviceNames[3]}</h2>
                </div>
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <FontAwesomeIcon className="category-icon" icon={faEnvelopeOpenText} />
                    <h2>{serviceNames[4]}</h2>
                </div>
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <FontAwesomeIcon className="category-icon" icon={faCalculator} /> 
                    <h2>{serviceNames[5]}</h2>
                </div>
            </div>

            <div className="columns is-centered mt-2 is-vcentered">
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box  mt-2 mx-5">
                    <FontAwesomeIcon className="category-icon" icon={faFileInvoiceDollar} />
                    <h2>{serviceNames[6]}</h2>
                </div>
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <FontAwesomeIcon className="category-icon" icon={faFileInvoice} />
                    <h2>{serviceNames[7]}</h2>
                </div>
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <FontAwesomeIcon className="category-icon" icon={faChartLine} />
                    <h2>{serviceNames[8]}</h2>
                </div>
            </div>

            <div className="columns is-centered mt-2 is-vcentered">
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <FontAwesomeIcon className="category-icon" icon={faBriefcase} />
                    <h2>{serviceNames[9]}</h2>
                </div>
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <FontAwesomeIcon className="category-icon" icon={faUserTie} />
                    <h2>{serviceNames[10]}</h2>
                </div>
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <FontAwesomeIcon className="category-icon" icon={faTasks} />
                    <h2>{serviceNames[11]}</h2>
                </div>
            </div>
        </section>
    );
}