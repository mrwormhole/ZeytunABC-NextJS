import Form from '../components/form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPhone, faEnvelope  } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return (
        <section className="section" id="contact">
            <h2 className="title"> Contact Us</h2>
            <div className="container">
                <div className="columns reverse-columns">
                    <div className="column is-8 contact-form">
                        <Form />
                    </div>
                    <div className="column is-4 contact-card">
                        <p className="small-title">Get In Touch</p>
                        <h5><FontAwesomeIcon icon={faHome} /> London, England, N15 5EA </h5>
                        <h5><FontAwesomeIcon icon={faPhone} /> +44 740 531 99 94</h5>
                        <h5><FontAwesomeIcon icon={faEnvelope} /> info@zeytunabc.com</h5>
                        <div className="iframe-holder">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.0778438878433!2d-0.08377078422716991!3d51.58513667964792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c11c4db412d%3A0x3267454a183dd0f4!2s151%20W%20Green%20Rd%2C%20Tottenham%2C%20London%20N15%205EA!5e0!3m2!1sen!2suk!4v1596468841724!5m2!1sen!2suk" width="100%" height="100%" frameBorder="0" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}