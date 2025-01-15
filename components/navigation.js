import { Link as ScrollerLink } from "react-scroll";
import Link from 'next/link';
import { useCookies } from "react-cookie";

function toggleBurger() {
  const navbarBurger = document.getElementsByClassName("navbar-burger")[0];
  const navbarMenu = document.getElementsByClassName("navbar-menu")[0];

  navbarBurger.classList.toggle("is-active");
  navbarMenu.classList.toggle("is-active");
}

function getAbbvr(languageName) {
  if (languageName == "english") { return "EN"; }
  else if (languageName == "turkish") { return "TR"; }
  else { return "UNDEF"; }
}

export default function Navigation(props) {
  const [cookies, setCookie] = useCookies(["language"]);
  const currentLanguage = cookies["language"];
  //var path = "";

  //if (typeof window !== `undefined`) {
  //  var pathArray = window.location.href.split("/");
  //  path = pathArray[pathArray.length-1];
  //}

  if (props.onPage == "contact") {
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link href="/">
              <a className="navbar-item">
                <img src="/logo.png" alt="Zeytun ABC logo" />
              </a>
            </Link>

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
              <Link href="/">
                <a className="navbar-item navbar-item-hoverable">{currentLanguage == "english" ? "Home" : "Anasayfa"}</a>
              </Link>
              <Link href="/">
                <a className="navbar-item navbar-item-hoverable">{currentLanguage == "english" ? "Services" : "Servisler"}</a>
              </Link>
              <Link href="/">
                <a className="navbar-item navbar-item-hoverable">{currentLanguage == "english" ? "About" : "Hakkında"}</a>
              </Link>
              <Link href="/contact">
                <a className="navbar-item navbar-item-hoverable is-active">{currentLanguage == "english" ? "Contact" : "İletişim"}</a>
              </Link>


              <div className="container-shape-wrapper">
                <div className="container-shape diamond-shape">
                  <div className="language-name">
                    <a onClick={() => {
                      if (currentLanguage == "english") {
                        setCookie("language", "turkish");
                      } else {
                        setCookie("language", "english");
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
  } else if (props.onPage == "services") {
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link href="/">
              <a className="navbar-item">
                <img src="/logo.png" alt="Zeytun ABC logo" />
              </a>
            </Link>

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
              <Link href="/">
                <a className="navbar-item navbar-item-hoverable">{currentLanguage == "english" ? "Home" : "Anasayfa"}</a>
              </Link>
              <Link href="/">
                <a className="navbar-item navbar-item-hoverable is-active">{currentLanguage == "english" ? "Services" : "Servisler"}</a>
              </Link>
              <Link href="/">
                <a className="navbar-item navbar-item-hoverable">{currentLanguage == "english" ? "About" : "Hakkında"}</a>
              </Link>
              <Link href="/contact">
                <a className="navbar-item navbar-item-hoverable">{currentLanguage == "english" ? "Contact" : "İletişim"}</a>
              </Link>


              <div className="container-shape-wrapper">
                <div className="container-shape diamond-shape">
                  <div className="language-name">
                    <a onClick={() => {
                      if (currentLanguage == "english") {
                        setCookie("language", "turkish");
                      } else {
                        setCookie("language", "english");
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
  } else if (props.onPage == "announcement") {
    return (<nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img src="/logo.png" alt="Zeytun ABC logo" />
            </a>
          </Link>

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
            <Link href="/">
              <a className="navbar-item navbar-item-hoverable">{currentLanguage == "english" ? "Home" : "Anasayfa"}</a>
            </Link>
            <Link href="/">
              <a className="navbar-item navbar-item-hoverable">{currentLanguage == "english" ? "Services" : "Servisler"}</a>
            </Link>
            <Link href="/">
              <a className="navbar-item navbar-item-hoverable">{currentLanguage == "english" ? "About" : "Hakkında"}</a>
            </Link>
            <Link href="/contact">
              <a className="navbar-item navbar-item-hoverable">{currentLanguage == "english" ? "Contact" : "İletişim"}</a>
            </Link>


            <div className="container-shape-wrapper">
              <div className="container-shape diamond-shape">
                <div className="language-name">
                  <a onClick={() => {
                    if (currentLanguage == "english") {
                      setCookie("language", "turkish");
                    } else {
                      setCookie("language", "english");
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
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img src="/logo.png" alt="Zeytun ABC logo" />
            </a>
          </Link>

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
            <ScrollerLink href="/" className="navbar-item navbar-item-hoverable"
              activeClass="is-active"
              to="home"
              spy={true}
              smooth={true}
              offset={-95}
              duration={500} onClick={() => toggleBurger()}>
              {currentLanguage == "english" ? "Home" : "Anasayfa"}
            </ScrollerLink>
            <ScrollerLink href="/" className="navbar-item navbar-item-hoverable"
              activeClass="is-active"
              to="services"
              spy={true}
              smooth={true}
              offset={-95}
              duration={500} onClick={() => toggleBurger()}>
              {currentLanguage == "english" ? "Services" : "Servisler"}
            </ScrollerLink>
            <ScrollerLink href="/" className="navbar-item navbar-item-hoverable"
              activeClass="is-active"
              to="about"
              spy={true}
              smooth={true}
              offset={-95}
              duration={500} onClick={() => toggleBurger()}>
              {currentLanguage == "english" ? "About" : "Hakkında"}
            </ScrollerLink>
            <Link href="/contact">
              <a className="navbar-item navbar-item-hoverable">{currentLanguage == "english" ? "Contact" : "İletişim"}</a>
            </Link>

            <div className="container-shape-wrapper">
              <div className="container-shape diamond-shape">
                <div className="language-name">
                  <a onClick={() => {
                    if (currentLanguage == "english") {
                      setCookie("language", "turkish");
                    } else {
                      setCookie("language", "english");
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