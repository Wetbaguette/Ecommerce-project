import {Link} from 'react-router-dom'

export default function Navbar() {
    return(
        <header>
            <nav>
                <div className="navbar">
                    <div className="ham-menu">
                        menu
                    </div>
                    <div className="logo">
                        <Link to={'/'}>logo</Link>
                    </div>
                    <div className="cart">
                        cart
                    </div>
                </div>
                <div className="ham-menu-list">
                    <Link to={'/build-a-box'}>Build a Box</Link>
                    <Link to={'/cookie-catalogue'}>Cookie Catalogue</Link>
                    <Link to={'/custom-requests'}>Custom Requests</Link>
                    <Link to={'/catering'}>Catering</Link>
                    <Link to={'/gift-cards'}>Gift Cards</Link>
                    <Link to={'/our-story'}>Our Story</Link>
                    <Link to={'/contact-us'}>Contact Us</Link>
                    <Link to={'/faq'}>FAQ</Link>
                </div>
            </nav>
        </header>
    )
}