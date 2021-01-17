import theDiamondLogo from '../assets/the-diamond-logo.png'
import './Navbar.scss'

export default function navbar() {
    return (
        <nav className='navbar'>
            <img
                className="img-logo"
                src={theDiamondLogo}
            />
            <small></small>
        </nav>
    );
}