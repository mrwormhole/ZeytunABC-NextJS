import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default function FloatingActionButton() {
    return (
        <a className="floating-action-button" href="https://wa.me/1XXXXXXXXXX">
            <span className="icon is-large"><FontAwesomeIcon icon={faPhone} /></span>
        </a>
    );
}