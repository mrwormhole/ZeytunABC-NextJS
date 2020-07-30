import { faCalculator, faBook, faEnvelopeOpenText, faIdBadge, faPenFancy, faBriefcase, faCalendarDay, faTasks, faStamp, faBuilding, faUsers, faChartLine, faUserTie, faWarehouse, faThumbtack } from '@fortawesome/free-solid-svg-icons'
import ServiceCard from './serviceCard'

export default function Services() {
    let accountancyServices = ["ACCOUNTANCY SERVICES", "BOOKKEEPING", "PAYROLL", "YEAR END ACCOUNTS", "PENSIONS"];
    let accountancyIcons = [faCalculator, faBook, faEnvelopeOpenText, faIdBadge, faPenFancy];
    let accountancyDescriptions = ["We provide our clients with a comprehensive range of accountancy services.", 
                                   "With years of experience, we can easily take away the hassle of bookeeping",
                                   "The responsibilities faced by employers can be overwhelming but we can guide you through the processes and calculations",
                                   "The year end accounts provide significant information about your business, we can help you analyze that",
                                   "We can administrate your workplace pension scheme and provide feedback to make your business stay compliant"];
;
    let taxationServices = ["TAXATION SERVICES", "CORPORATION TAX", "SELF ASSESSMENT", "VALUE ADDED TAX(VAT)", "CAPITAL GAINS TAX(CGT)"];
    let taxationsIcons = [faBriefcase, faCalendarDay, faTasks, faStamp, faBuilding];
    let taxationDescriptions = ["As a tax adviser, our goal is to work closely with you to ensure you pay the minimum tax required by law",
                                "With years of experience, we can easily take away the hassle of bookeeping",
                                "If you want to make sure you are paying the right amount of tax, you should consult a profesional",
                                "If you are just starting out, we can help you decide whether you need to be VAT registered from the outset or not",
                                "Individuals are charged CGT in respect of gains made from selling, transferring or otherwise disposing of assets"];

    let consultancyServices = ["CONSULTANCY SERVICES", "BUSINESS PLANS", "EMPLOYMENT LAW", "BUSINESS STARTUPS", "TAX INVESTIGATIONS"];
    let consultancyIcons = [faUsers, faChartLine, faUserTie, faWarehouse, faThumbtack ];
    let consultancyDescriptions = ["We provide a high-quality, specialized accounting and financial consultancy services to small and medium sized companies",
                                   "We can assist you with business planning, cash-flow forecasts and starting your business",
                                   "When employing staff for the first time, many businesses lack the knowledge or experience to enable them to successfully negotiate through the employment law minefield",
                                   "We want you to focus on what you do the best; building your business while we are providing all the necessary background support",
                                   "You should ensure that your tax return is accurate and complies with the UK tax regime. At this point, we can help you about these regulations"];

    return (
        <section className="section is-medium" id="services">
            <h2 className="title"> Our Services </h2>
            <br />

            <div className="columns is-centered">
                <div className="column is-6-tablet is-4-desktop is-paddingless">
                    <ServiceCard serviceName={accountancyServices} icons={accountancyIcons} 
                        serviceDescription={accountancyDescriptions}/>
                </div>
                <div className="column is-6-tablet is-4-desktop is-paddingless">
                    <img className="card-image" src="/accountancy.png" alt="Accountacy Services" />
                </div>
            </div>
            <div className="columns is-centered">
                <div className="column is-6-tablet is-4-desktop is-paddingless">
                    <img className="card-image" src="/taxation.png" alt="Taxation Services" />
                </div>
                <div className="column is-6-tablet is-4-desktop is-paddingless">
                    <ServiceCard serviceName={taxationServices} icons={taxationsIcons}
                            serviceDescription={taxationDescriptions} />
                </div>
            </div>
            <div className="columns is-centered">
                <div className="column is-6-tablet is-4-desktop is-paddingless">
                    <ServiceCard serviceName={consultancyServices} icons={consultancyIcons}
                            serviceDescription={consultancyDescriptions} />
                </div>
                <div className="column is-6-tablet is-4-desktop is-paddingless">
                    <img className="card-image" src="/consultancy.png" alt="Consultancy Services" />
                </div>
            </div>
        </section>
    );
}