import { Link } from "react-scroll";

export default function About() {
    return (
        <section className="section is-medium" id="about">
                <div className="columns reverse-columns">
                    <div className= "column is-4 is-offset-2">
                        <img className="animated-up-down" src="/businesswoman.png" alt="About our business" />
                    </div>
                    <div className="column is-4">
                        <h2 className="title"> About Us </h2>
                        <br />
                        <p className="subtitle"> 
                            Zeytun ABC LTD provides accounting, taxation and consultancy services 
                            for the formal grown-up businesses and the self employed individuals in London, United Kingdom.
                            We use various analyzation techniques and provide different aspects for financial data to be the most reliable and convenient for the clients.
                            <br /><br />Prioritising clients' needs with being highly reliable & convenient is our first way of helping people.
                            We take pride of being formal AAT member and formal partner of Edge Chartered Certified Accountants.
                            Zeytun ABC also provides services like corporation tax, self assessment, value added tax(VAT) and capital gains tax(CGT).
                        </p>
                        <br />
                        <div className="buttons is-centered">
                            <Link className="button is-danger is-rounded is-medium" style={{width: "40%"}}
                                activeClass=""
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}> 
                                Contact Us 
                            </Link>
                        </div>
                    </div>
                </div>
        </section>
    );
}