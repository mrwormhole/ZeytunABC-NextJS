import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator, faBook, faEnvelopeOpenText, faChartLine, faPenFancy, faBriefcase, faTasks, faBuilding, faUsers, faUserTie, faFileInvoice, faHouseUser } from '@fortawesome/free-solid-svg-icons'
//import ServiceCard from './serviceCard'
import { serviceNames } from "../constants/serviceConstants";
import Link from 'next/link';
import { useCookies } from "react-cookie";

export default function Services() {
    const [cookies] = useCookies(["language"]);
    const currentLanguage = cookies["language"];
    
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
                    <a href="/services/general-accounting-consultancy" className="service-box-cover-link" />
                    <FontAwesomeIcon className="category-icon" icon={faUsers} />
                    <h2>{currentLanguage == "english" ? serviceNames["english"][0] : serviceNames["turkish"][0]}</h2>
                    
                </div>
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <a href="/services/company-formation" className="service-box-cover-link" />
                    <FontAwesomeIcon className="category-icon" icon={faPenFancy} />
                    <h2>{currentLanguage == "english" ? serviceNames["english"][1] : serviceNames["turkish"][1]}</h2>
                </div>
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <a href="/services/address-services" className="service-box-cover-link" />
                    <FontAwesomeIcon className="category-icon" icon={faBuilding} />
                    <h2>{currentLanguage == "english" ? serviceNames["english"][2] : serviceNames["turkish"][2]}</h2>
                </div>
            </div>

            <div className="columns is-centered mt-2 is-vcentered">
            
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <a href="/services/bookkeeping" className="service-box-cover-link" />
                    <FontAwesomeIcon className="category-icon" icon={faBook} />
                    <h2>{currentLanguage == "english" ? serviceNames["english"][3] : serviceNames["turkish"][3]}</h2>
                </div>
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <a href="/services/tax-services" className="service-box-cover-link" />
                    <FontAwesomeIcon className="category-icon" icon={faEnvelopeOpenText} />
                    <h2>{currentLanguage == "english" ? serviceNames["english"][4] : serviceNames["turkish"][4]}</h2>
                </div>
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <a href="/services/year-end-accounts" className="service-box-cover-link" />
                    <FontAwesomeIcon className="category-icon" icon={faCalculator} /> 
                    <h2>{currentLanguage == "english" ? serviceNames["english"][5] : serviceNames["turkish"][5]}</h2>
                </div>
            </div>

            <div className="columns is-centered mt-2 is-vcentered">
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box  mt-2 mx-5">
                    <a href="/services/payroll-pensions" className="service-box-cover-link" />
                    <FontAwesomeIcon className="category-icon" icon={faFileInvoice} />
                    <h2>{currentLanguage == "english" ? serviceNames["english"][6] : serviceNames["turkish"][6]}</h2>
                </div>
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <a href="/services/management-accounts" className="service-box-cover-link" />
                    <FontAwesomeIcon className="category-icon" icon={faUserTie} />
                    <h2>{currentLanguage == "english" ? serviceNames["english"][7] : serviceNames["turkish"][7]}</h2>
                </div>
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <a href="/services/mortgage-insurance" className="service-box-cover-link" />
                    <FontAwesomeIcon className="category-icon" icon={faHouseUser} />
                    <h2>{currentLanguage == "english" ? serviceNames["english"][8] : serviceNames["turkish"][8]}</h2>
                </div>
            </div>

            <div className="columns is-centered mt-2 is-vcentered">
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <a href="/services/business-consultancy" className="service-box-cover-link" />
                    <FontAwesomeIcon className="category-icon" icon={faBriefcase} />
                    <h2>{currentLanguage == "english" ? serviceNames["english"][9] : serviceNames["turkish"][9]}</h2>
                </div>
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <a href="/services/market-research" className="service-box-cover-link" />
                    <FontAwesomeIcon className="category-icon" icon={faChartLine} />
                    <h2>{currentLanguage == "english" ? serviceNames["english"][10] : serviceNames["turkish"][10]}</h2>
                </div>
                <div className="column is-4-tablet has-text-centered is-3-desktop service-box mt-2 mx-5">
                    <a href="/services/ma-due-diligence" className="service-box-cover-link" />
                    <FontAwesomeIcon className="category-icon" icon={faTasks} />
                    <h2>{currentLanguage == "english" ? serviceNames["english"][11] : serviceNames["turkish"][11]}</h2>
                </div>
            </div>
        </section>
    );
}