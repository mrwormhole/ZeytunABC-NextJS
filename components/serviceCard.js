import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ServiceCard({serviceName, serviceDescription, icons}) {
    

    return (
        <div className="card" id="service-card">
            <div className="card-content">
                <div className="card-icon-wrapper">
                    <div className="card-icon-shaper">
                        <FontAwesomeIcon className="main-icon" icon={icons[0]} />
                    </div>
                </div>

                <h4 className="card-title"> {serviceName[0]} </h4>
                <p className="card-subtitle"> {serviceDescription[0]} </p>
            </div>

            <div className="columns is-centered">
                <div className="column is-6-tablet is-6-desktop is-paddingless">
                    
                    <h4 className="card-category-title"> 
                        <FontAwesomeIcon className="category-icon" icon={icons[1]} /> {serviceName[1]} 
                    </h4>
                    <p className="card-category-subtitle">{serviceDescription[1]}</p>
                </div>
                <div className="column is-6-tablet is-6-desktop is-paddingless">
                    
                    <h4 className="card-category-title"> 
                        <FontAwesomeIcon className="category-icon" icon={icons[2]} /> {serviceName[2]} 
                    </h4>
                    <p className="card-category-subtitle">{serviceDescription[2]}</p>
                </div>
            </div>
            <div className="columns is-centered">
                <div className="column is-6-tablet is-6-desktop is-paddingless">
                
                    <h4 className="card-category-title"> 
                        <FontAwesomeIcon className="category-icon" icon={icons[3]} /> {serviceName[3]} 
                    </h4>
                    <p className="card-category-subtitle">{serviceDescription[4]}</p>
                </div>
                <div className="column is-6-tablet is-6-desktop is-paddingless">
    
                    <h4 className="card-category-title">
                        <FontAwesomeIcon className="category-icon" icon={icons[4]} /> {serviceName[4]} 
                    </h4>                
                    <p className="card-category-subtitle">{serviceDescription[4]}</p>
                </div>
            </div>

            <div className="button-centerer">
                <a className="button is-warning is-rounded is-medium"> 
                    Learn More 
                </a>
            </div>
        </div>
    );
}