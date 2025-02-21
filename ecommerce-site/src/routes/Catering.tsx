import ContactComponent from "../components/ContactComponent"
import Footer from "../components/Footer"
import CookieScroll from "../components/CookieScroll"

export default function Catering() {
    return (
        <>
            <section className="catering-section container">
                <div className="catering-prices-container">
                    <h2 className="text-center text-[2rem] font-bold sm:font-semibold lg:font-bold tracking-wider sm:text-[2.5rem] lg:text-5xl">Corporate & Event Orders</h2>
                    <div className="catering-prices lg:flex justify-center lg:my-10">
                        <div className="prices">
                            <div className="price-amount">
                                <p>50 - 150</p>
                            </div>
                            <div className="price">
                                <p>$3.75</p>
                            </div>
                        </div>
                        <div className="prices border-y-[1px] border-white lg:border-y-0 lg:border-x-[1px]">
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
                    <aside className="bg-[#322F30] text-center text-xl sm:text-3xl lg:text-xl uppercase tracking-widest py-3 px-5 lg:mb-10 rounded-lg max-w-[1050px] my-0 mx-auto">Now available in 1/2 size cookies</aside>
                </div>
                <div className="catering-container">
                    <div className="catering-info flex flex-col-reverse lg:flex-row lg:justify-between lg:gap-[5rem] max-w-[1150px] my-0 mx-auto">
                        <div className="cookie-img border-2 border-white rounded-md my-2 lg:w-[100%]">
                            <img className="object-cover" src="//www.theblakery.co/cdn/shop/files/Review_Image.png?v=1709755034" alt="img of cookie menage" />
                        </div>
                        <div className="info-text my-6">
                            <h3 className="text-[2rem] sm:text-5xl lg:text-6xl uppercase font-bold">Packaging</h3>
                            <p className="my-[0.5em] sm:text-[1.4rem] lg:text-xl tracking-widest">We offer numerous custom options for event packaging and presentation at an additional charge, including:</p>
                            <ul className="cater-list flex flex-col gap-2 sm:gap-5 my-5">
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
                    <div className="middle-text my-[3em]">
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl lg:mb-8 text-center uppercase tracking-widest">Ordering & Delivery</h3>
                        <p className="mt-4 lg:my-0 lg:mx-auto lg:w-[500px] text-center tracking-widest sm:text-xl lg:text-base">We will provide information about delivery options depending on your location, just fill out the contact form below. If you're located within Miami-Dade County free white glove delivery service is available.</p>
                    </div>
                    <div className="catering-container my-8 lg:flex lg:flex-row-reverse lg:gap-[5rem] lg:my-0 lg:mx-auto lg:max-w-[1150px]">
                        <div className="cookie-img lg:min-w-[550px] border-2 border-white rounded-md">
                            <img src="//www.theblakery.co/cdn/shop/files/Cookie-Breaking.jpg?v=1714918805" alt="img of cookie being broken by hand" />
                        </div>
                        <div className="info-text my-8 self-center">
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-widest">Products</h3>
                            <p className="mt-4 tracking-widest sm:text-xl">The Blakery is home to Miami's most decadent, show-stopping 6oz. cookies around. Each custom cookie is made fresh from the most distinctive ingredients, with combinations and flavors that will have them talking for days.</p>
                            <button className="my-8 border-[1px] border-white rounded-lg min-w-[220px] max-w-[290px] w-[60%] py-[0.6em] uppercase tracking-widest sm:text-xl">View Now</button>
                        </div>
                    </div>
                </div>
                <div className="container rounded-md lg:my-12 lg:py-12 lg:bg-[#322F30]">
                    <h3 className="tracking-widest uppercase text-center text-lg sm:text-3xl mb-[0.5em]">Get in Touch with Us</h3>
                    <ContactComponent />
                </div>
            </section>
            <CookieScroll />
            <Footer />
        </>
    )
}