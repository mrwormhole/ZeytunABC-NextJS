import { useContext } from "react";
import { Link as ScrollerLink } from "react-scroll";
import Header from "./header";


export default function Introduction() {
    
    return (
        <section className="section is-paddingless" id="home">
            <div className="hero is-fullheight-with-navbar has-background-pattern">
                <div className="hero-body">
                    <div className="columns">
                    <div className="column is-8 is-offset-2" >
                        <Header />
                        
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