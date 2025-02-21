import { Link } from 'react-router-dom'
import ContactComponent from '../components/ContactComponent.tsx'
import Footer from '../components/Footer.tsx'


export default function Contact() {
    return (
        <>
            <section className="contact">
                <div className="container">
                    <ContactComponent />
                    <div className='lg:flex justify-between gap-6'>
                        <div className="shopping-box bg-[url('//www.theblakery.co/cdn/shop/files/Sprinkles_Candy.jpg?v=1710173698&width=3840')]">
                            <h2>FAQ</h2>
                            <Link to={'/faq'}><button className='btn-white-border'>Read More</button></Link>
                        </div>
                        <div className="shopping-box bg-[url('//www.theblakery.co/cdn/shop/files/tray_of_cookies_36e6fbdc-560d-4622-ab3a-04c31f457760.jpg?v=1710178763&width=3840')]">
                            <h2>Catering</h2>
                            <Link to={'/catering'}><button className='btn-white-border'>Read More</button></Link>
                        </div>
                        <div className="shopping-box bg-[url('//www.theblakery.co/cdn/shop/files/mound_of_cookies.jpg?v=1714919481&width=3840')]">
                            <h2>Custom</h2>
                            <Link to={'/custom-requests'}><button className='btn-white-border'>Make a Request</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}