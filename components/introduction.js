import { Link } from "react-scroll";

export default function Introduction() {
    return (
        <section className="section is-paddingless" id="home">
            <div data-aos="slide-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className="hero is-fullheight-with-navbar has-background-pattern">
                <div className="hero-body">
                    <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <h1 className="title"> We provide perfect solutions for businesses and self employed individuals who need <span>convenient and reliable</span> accountancy services</h1>
                        <br />
                        <h2 className="subtitle"> Specialized in Accounting, Bookkeeping and Consultancy Services </h2>
                        
                        {/*<div className="buttons has-addons is-left">
                        <Link className="button is-primary is-rounded is-medium" style={{width: "50%"}}
                            activeClass=""
                            to="services"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}> 
                            Have a Look? 
                        </Link>
                        <Link className="button is-warning is-rounded is-medium" style={{width: "50%"}}
                            activeClass=""
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}> 
                            Get a Quote! 
                        </Link>
                        </div>*/}
                    </div>
                    
                    {/*<div className="column is-5">
                        <img className="animated-up-down" src="/accounting.png" alt="web development image"/>
                    </div>*/}
                    
                    </div>
                </div>
            </div>
        </section>
    );
}