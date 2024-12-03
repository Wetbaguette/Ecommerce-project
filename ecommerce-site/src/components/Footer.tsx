import {Link} from 'react-router-dom'

export default function Footer() {
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    {/* add logo */}
                </div>
                <ul className="footer-links">
                    <li><Link to={"/"}>Build a Box</Link></li>
                    <li><Link to={"/"}>Gift Cards</Link></li>
                    <li><Link to={"/"}>Our Story</Link></li>
                    <li><Link to={"/"}>Contact Us</Link></li>
                    <li><Link to={"/"}>FAQ</Link></li>
                    <li><Link to={"/"}>Catering</Link></li>
                    <li><Link to={"/"}>Terms</Link></li>
                </ul>
                <div className="footer-email">
                    <h2>Fresh Blacked Emails</h2>
                    <form action="post">
                        {/* put input */}
                    </form>
                    <div className="social-media">
                        {/* add svg */}
                    </div>
                </div>
            </div>
        </footer>
    )
}