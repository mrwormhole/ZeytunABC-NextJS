import { useContext } from "react";
import { Link } from "react-scroll"
import LanguageContext from "./languageContext";

function toggleBurger() {
  const navbarBurger = document.getElementsByClassName("navbar-burger")[0];
  const navbarMenu = document.getElementsByClassName("navbar-menu")[0];

  navbarBurger.classList.toggle("is-active");
  navbarMenu.classList.toggle("is-active");
}

function getAbbvr(languageName) {
  if(languageName == "english") { return "TR"; }
  else if(languageName == "turkish") { return "EN"; }
  else { return "UNDEF"; }
}

export default function Navigation() {
    const { currentLanguage, setCurrentLanguage } =  useContext(LanguageContext);
    console.log(currentLanguage);

    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-brand">
              <a href="/" className="navbar-item">
                <img src="/logo.png" alt="Zeytun ABC logo"/>
              </a>
    
              <a role="button" 
                className="navbar-burger burger" 
                aria-label="menu" 
                aria-expanded="false" 
                data-target="navbarBasicExample" 
                onClick={() => toggleBurger()}>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
              </a>
            </div>
    
            <div id="navbarBasicExample" className="navbar-menu"> 
              <div className="navbar-end">
                <Link className="navbar-item navbar-item-hoverable"
                  activeClass="is-active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-95}
                  duration={500} onClick={() => toggleBurger()}> 
                    Home 
                </Link>
                <Link className="navbar-item navbar-item-hoverable"
                  activeClass="is-active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-95}
                  duration={500} onClick={() => toggleBurger()}> 
                    Services
                </Link>
                <Link className="navbar-item navbar-item-hoverable"
                  activeClass="is-active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-95}
                  duration={500} onClick={() => toggleBurger()}> 
                    About 
                </Link>
                <Link className="navbar-item navbar-item-hoverable"
                  activeClass="is-active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-95}
                  duration={500} onClick={() => toggleBurger()}> 
                    Contact 
                </Link>

                <div className="container-shape-wrapper">
                  <div className="container-shape diamond-shape">
                    <div className="language-name">
                      <a onClick={() => {
                        if(currentLanguage == "english") {
                          setCurrentLanguage("turkish");
                        } else {
                          setCurrentLanguage("english");
                        }
                      }}>
                        {getAbbvr(currentLanguage)}
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </nav>
    );
}