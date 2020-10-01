import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Certification() {
    return (
        <section className="section" id="certification">
            <div className="columns is-centered is-vcentered">
                <div className="column is-8">
                <h2 className="title">
                    <FontAwesomeIcon className="tick-icon" icon={faCheckSquare} /> Providing solutions with Business Specialists (PhD), 
                    Certified Chartered Accountants (ACCA, FCCA) and Qualified Bookkeepers (AAT)
                    <br /> <br />
                    <FontAwesomeIcon className="tick-icon" icon={faCheckSquare} /> Registered to Information Commissioner's Office (ICO)
                </h2>
                </div>
                <div className="column is-2">
                    <div className="certification-logo-image-wrapper" >
                        <div className="certification-logo-image"><img src="/ACCA.png" /></div>
                        <div className="certification-logo-image"><img src="/AAT.png" /></div>  
                        <div className="certification-logo-image"><img src="/ICO.png" /></div> 
                        <div className="certification-logo-image"><img src="/CIMA.png" /></div>
                    </div>  
                </div>

            </div>
            <div className="container">
                
                
            </div>
        </section>
    );
}