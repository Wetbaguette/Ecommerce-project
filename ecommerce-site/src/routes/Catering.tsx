import ContactComponent from "../components/ContactComponent"

export default function Catering() {
    return (
        <>
            <section className="catering-section">
                <div className="catering-prices-container">
                    <h2>Corporate & Event Orders</h2>
                    <div className="catering-prices">
                        <div className="prices">
                            <div className="price-amount">
                                <p>50 - 150</p>
                            </div>
                            <div className="price">
                                <p>$3.75</p>
                            </div>
                        </div>
                        <div className="prices">
                            <div className="price-amount">
                                <p>150 - 500</p>
                            </div>
                            <div className="price">
                                <p>$3.50</p>
                            </div>
                        </div>
                        <div className="prices">
                            <div className="price-amount">
                                <p>500+</p>
                            </div>
                            <div className="price">
                                <p>$3.25</p>
                            </div>
                        </div>
                    </div>
                    <aside>Now available in 1/2 size cookies</aside>
                </div>
                <div className="catering-container">
                    <div className="catering-info">
                        <div className="cookie-img">
                            <img src="//www.theblakery.co/cdn/shop/files/Review_Image.png?v=1709755034" alt="img of cookie menage" />
                        </div>
                        <div className="info-text">
                            <h3>Packaging</h3>
                            <p>We offer numerous custom options for event packaging and presentation at an additional charge, including:</p>
                            <ul>
                                <li>
                                    <div>
                                        <h4>Individual Packaging</h4>
                                        <p>If you provide stickers for your event, we will happily affix them to the packages</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h4>Themed Decorations</h4>
                                        <p>Cookies decorated to match an event or wedding's color scheme or theme</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h4>Luxury Gift Boxes</h4>
                                        <p>Premium gift boxes to with satin ribbons, perfect for guest favors or bridal party gifts</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h4>Presentation Arrangements</h4>
                                        <p>Artistically arranged cookies on a large serving platter or a tiered dessert stand. Local Deliveries only. Prices $6/cookie</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h4>Cookie Truck</h4>
                                        <p>Coming Soon!</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="middle-text">
                        <h3>Ordering & Delivery</h3>
                        <p>We will provide information about delivery options depending on your location, just fill out the contact form below. If you're located within Miami-Dade County free white glove delivery service is available.</p>
                    </div>
                    <div className="catering-container">
                        <div className="cookie-img">
                            <img src="//www.theblakery.co/cdn/shop/files/Cookie-Breaking.jpg?v=1714918805" alt="img of cookie being broken by hand" />
                        </div>
                        <div className="info-text">
                            <h3>Products</h3>
                            <p>The Blakery is home to Miami's most decadent, show-stopping 6oz. cookies around. Each custom cookie is made fresh from the most distinctive ingredients, with combinations and flavors that will have them talking for days.</p>
                            <button>View Now</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h3>Get in Touch with Us</h3>
                    <ContactComponent />
                </div>
            </section>
        </>
    )
}