import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ServiceCard({serviceName, serviceDescription, icons}) {
    return (
        <div className="card " id="service-card">
            <div className="card-content">
                <div className="card-icon-wrapper">
                    <div className="card-icon-shaper">
                        <FontAwesomeIcon icon={icons[0]} style={{color: "#f0f0f0", fontSize: "3rem"}} />
                    </div>
                </div>

                <h4 className="card-title"> {serviceName[0]} </h4>

                <p className="card-subtitle">
                    {serviceDescription[0]}
                </p>
            </div>

            <div className="columns is-centered">
                <div className="column is-6-tablet is-6-desktop is-paddingless">
                    <FontAwesomeIcon icon={icons[1]} style={{color: "#f0f0f0", fontSize: "3rem"}} />
                </div>
                <div className="column is-6-tablet is-6-desktop is-paddingless">
                    <FontAwesomeIcon icon={icons[2]} style={{color: "#f0f0f0", fontSize: "3rem"}} />
                </div>
            </div>
            <div className="columns is-centered">
                <div className="column is-6-tablet is-6-desktop is-paddingless">
                    <FontAwesomeIcon icon={icons[3]} style={{color: "#f0f0f0", fontSize: "3rem"}} />
                </div>
                <div className="column is-6-tablet is-6-desktop is-paddingless">
                    <FontAwesomeIcon icon={icons[4]} style={{color: "#f0f0f0", fontSize: "3rem"}} />
                </div>
            </div>

            <a className="button is-warning is-rounded is-medium" style={{width: "45%", border: "2px solid white"}}> 
                Learn More 
            </a>
        </div>
    );
}