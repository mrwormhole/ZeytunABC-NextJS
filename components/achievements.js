
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faBriefcase, faSmile, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'

export default function Achievements() {
    return (
        <section className="section" id="achievements">
            <div className="level" >
                <div className="level-item has-text-centered">
                    <div>
                        <FontAwesomeIcon icon={faUsers} />    
                        <p className="title">Happy Clients</p>
                        <p className="subtitle">200</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <FontAwesomeIcon icon={faBriefcase} />
                        <p className="title">Transactions Tracked</p>
                        <p className="subtitle">50k</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <FontAwesomeIcon icon={faMoneyBillWave} />
                        <p className="title">Tax Return Savings</p>
                        <p className="subtitle">£100k</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <FontAwesomeIcon icon={faSmile} />
                        <p className="title">Satisfaction Rate</p>
                        <p className="subtitle">100%</p>
                    </div>
                </div>
            </div>
        </section>
    );
}