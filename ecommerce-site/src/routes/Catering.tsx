import ContactComponent from "../components/ContactComponent"
import Footer from "../components/Footer"

export default function Catering() {
    return (
        <>
            <section className="catering-section container">
                <div className="catering-prices-container">
                    <h2 className="text-center text-[2rem] font-bold tracking-wider">Corporate & Event Orders</h2>
                    <div className="catering-prices">
                        <div className="prices">
                            <div className="price-amount">
                                <p>50 - 150</p>
                            </div>
                            <div className="price">
                                <p>$3.75</p>
                            </div>
                        </div>
                        <div className="prices border-y-[1px] border-white">
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
                    <aside className="bg-[#322F30] text-center text-xl uppercase tracking-widest py-3 px-5 rounded-lg">Now available in 1/2 size cookies</aside>
                </div>
                <div className="catering-container">
                    <div className="catering-info flex flex-col-reverse">
                        <div className="cookie-img border-2 border-white rounded-md my-2">
                            <img src="//www.theblakery.co/cdn/shop/files/Review_Image.png?v=1709755034" alt="img of cookie menage" />
                        </div>
                        <div className="info-text my-6">
                            <h3 className="text-[2rem] uppercase font-bold">Packaging</h3>
                            <p className="my-2 tracking-widest">We offer numerous custom options for event packaging and presentation at an additional charge, including:</p>
                            <ul className="cater-list flex flex-col gap-2">
                                <li>
                                    <div className="checkmark">✓</div>
                                    <div>
                                        <h4>Individual Packaging</h4>
                                        <p>If you provide stickers for your event, we will happily affix them to the packages</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkmark">✓</div>
                                    <div>
                                        <h4>Themed Decorations</h4>
                                        <p>Cookies decorated to match an event or wedding's color scheme or theme</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkmark">✓</div>
                                    <div>
                                        <h4>Luxury Gift Boxes</h4>
                                        <p>Premium gift boxes to with satin ribbons, perfect for guest favors or bridal party gifts</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkmark">✓</div>
                                    <div>
                                        <h4>Presentation Arrangements</h4>
                                        <p>Artistically arranged cookies on a large serving platter or a tiered dessert stand. Local Deliveries only. Prices $6/cookie</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="checkmark">✓</div>
                                    <div>
                                        <h4>Cookie Truck</h4>
                                        <p>Coming Soon!</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="middle-text my-6">
                        <h3 className="text-3xl text-center uppercase tracking-widest">Ordering & Delivery</h3>
                        <p className="mt-4 tracking-widest">We will provide information about delivery options depending on your location, just fill out the contact form below. If you're located within Miami-Dade County free white glove delivery service is available.</p>
                    </div>
                    <div className="catering-container my-8">
                        <div className="cookie-img border-2 border-white rounded-md">
                            <img src="//www.theblakery.co/cdn/shop/files/Cookie-Breaking.jpg?v=1714918805" alt="img of cookie being broken by hand" />
                        </div>
                        <div className="info-text my-8">
                            <h3 className="text-3xl uppercase tracking-widest">Products</h3>
                            <p className="mt-4 tracking-widest">The Blakery is home to Miami's most decadent, show-stopping 6oz. cookies around. Each custom cookie is made fresh from the most distinctive ingredients, with combinations and flavors that will have them talking for days.</p>
                            <button className="my-8 border-2 border-white rounded-md min-w-[220px] max-w-[290px] w-[60%] py-2 uppercase tracking-widest">View Now</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h3 className="tracking-widest uppercase text-center text-lg">Get in Touch with Us</h3>
                    <ContactComponent />
                </div>
            </section>
            <Footer />
        </>
    )
}