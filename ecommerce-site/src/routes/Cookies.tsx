import { useParams } from "react-router-dom";
import cookieCatalogue from "../cookieCatalogue.tsx";
import cookieData from '../cookieData.tsx'

export default function Cookies() {
    const {cookieId} = useParams()
    const cookies= cookieData.find(cookie => cookie.id === cookieId)
    const specialCookies = cookieCatalogue.find(cookie => cookie.id === cookieId)
    console.log(specialCookies)
    
    console.log(cookieId)

    
    if (cookieId === 'velvet-crush') {
        return (
            <section className="cookie-info">
                <div className="container grid grid-rows-[min-content_1fr] lg:grid-rows-[min-content_1fr] lg:grid-cols-2 gap-2 lg:gap-x-12">
                    <div className="cookie-img row-start-2 lg:row-start-1 lg:row-span-2">
                        <img className="w-full" src="//www.theblakery.co/cdn/shop/files/The_Blakery_Dec_34_1040x1040.jpg?v=1732885871" alt="velvet crush cookie" />
                    </div>
                    <div className="info-text">
                        <h3 className="cookie-name">Velvet Crush</h3>
                        <div className="review-stars">
                            {/* put svg */}
                        </div>
                        <p>$53.00</p>
                        <p className="cookie-description">Indulge in the ultimate holiday romance with Velvet Crush. This luscious red velvet cookie base is studded with creamy white chocolate chips and hides a seductive surprise—a rich cream cheese buttercream center. Soft, sultry, and oh-so-irresistible, it’s the kind of crush you’ll want to keep coming back to.</p>
                        <div className="price-btn">
                            <button className="btn-white-fill text-xl sm:text-2xl lg:text-xl font-bold sm:py-4 lg:py-3 lg:w-[60%]">6 Pack</button>
                            <button className="btn-white-fill text-xl sm:text-2xl lg:text-xl font-bold sm:py-4 lg:py-3 lg:w-[60%]">12 Pack</button>
                            <button className="btn-white-fill text-xl sm:text-2xl lg:text-xl font-bold sm:py-4 lg:py-3 lg:w-[60%]">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else if (cookieId === "sleigh-all-day-collection") {
        return (
            <section className="cookie-info">
                <div className="container grid grid-rows-[min-content_1fr] lg:grid-rows-[min-content_1fr] lg:grid-cols-2 gap-2 lg:gap-x-12">
                    <div className="cookie-img h-[50vh] row-start-2 lg:row-start-1 lg:row-span-2">
                        <img className="w-full object-cover" src={"//www.theblakery.co/cdn/shop/files/TheBlakeryDec0_1040x1040.jpg?v=1732886819"} alt="collection of cookies" />
                    </div>
                    <div className="info-text">
                        <h3 className="cookie-name">Sleigh All Day Collection</h3>
                        <div className="review-stars">
                            {/* put svg */}
                        </div>
                        <p>$60.00</p>
                        <div>
                            <h4 className="santa-dot">Velvet Crush</h4>
                            <p className="sleigh-desc">Indulge in the ultimate holiday romance with Velvet Crush. This luscious red velvet cookie base is studded with creamy white chocolate chips and hides a seductive surprise—a rich cream cheese buttercream center. Soft, sultry, and oh-so-irresistible, it’s the kind of crush you’ll want to keep coming back to.</p>
                        </div>
                        <div>
                            <h4 className="santa-dot">Spice it Up</h4>
                            <p className="sleigh-desc">A bold gingerbread cookie packed with creamy white chocolate chips and stuffed with a velvety cookie butter core. It’s the perfect balance of sweet, spice, and everything naughty.</p>
                        </div>
                        <div>
                            <h4 className="santa-dot">Hot (and bothered) Cocoa</h4>
                            <p className="sleigh-desc">A rich hot cocoa cookie loaded with gooey mini marshmallows. It’s steamy, dreamy, and guaranteed to warm you up from the inside out.  </p>
                        </div>
                        <div>
                            <h4 className="santa-dot">Mint to be Naughty</h4>
                            <p className="sleigh-desc">This double chocolate peppermint cookie is studded with chunks of peppermint bark and hides a decadent chocolate ganache center. Cool, creamy, and irresistibly indulgent.  </p>
                        </div>
                        <div>
                            <h4 className="santa-dot">Under the Mistle-Dough</h4>
                            <p className="sleigh-desc">Soft, buttery frosted sugar cookie pieces in this festive treat, stuffed with a melt-in-your-mouth sugar cookie Kiss. It’s the perfect excuse for a holiday smooch.  </p>
                        </div>
                        <div>
                            <h4 className="santa-dot">Toffee Temptation</h4>
                            <p className="sleigh-desc">Dive into decadence with this chocolate cookie loaded with crunchy almond toffee and stuffed with ooey-gooey caramel. One bite, and you’ll be tempted to grab a second.  </p>
                        </div>
                        <p className="sleigh-desc">Want to swap a flavor? No problem—just add a note at checkout with your desired change. The <strong>12-pack variant</strong> includes <strong>2 of each flavor. </strong></p>
                    </div>
                    <div className="price-btn">
                        <button className="btn-white-fill text-xl sm:text-2xl lg:text-xl font-bold sm:py-4 lg:py-3 lg:w-[60%]">6 Pack</button>
                        <button className="btn-white-fill text-xl sm:text-2xl lg:text-xl font-bold sm:py-4 lg:py-3 lg:w-[60%]">12 Pack</button>
                        <button className="btn-white-fill text-xl sm:text-2xl lg:text-xl font-bold sm:py-4 lg:py-3 lg:w-[60%]">Add to Cart</button>
                    </div>
                </div>
            </section>
        )
    } else if (cookieId === "fan-fave-6-pack") {
        return (
            <section className="cookie-info">
                <div className="container grid gap-5 grid-rows-[min-content_1fr] lg:grid-rows-[min-content_1fr] lg:grid-cols-2 lg:gap-x-12">
                    <div className="cookie-img row-start-2 lg:row-start-1 lg:row-span-2">
                        <img className="w-full" src={"//www.theblakery.co/cdn/shop/files/ezgif.com-animated-gif-maker_1040x1040.gif?v=1727973311"} alt="collection of cookies" />
                    </div>
                    <div className="info-text flex flex-col gap-3 row-start-1">
                        <h3 className="cookie-name">Fan Faves 6 Pack</h3>
                        <div className="review-stars">
                            {/* put svg */}
                        </div>
                        <p className="text-sm">$53.00</p>
                        <p className="cookie-description">Includes 6 of our top selling flavors:</p>
                        <ul className="cookie-description flex flex-col gap-3">
                            <li><p>1️⃣ Slam Dunk'd (Dunkaroo)</p></li>
                            <li><p>2️⃣ Let's Go Glamping (S'mores)</p></li>
                            <li><p>3️⃣ Creamy Dream (Cookies 'N Cream)</p></li>
                            <li><p>4️⃣ MILF (Chocolate Chip)</p></li>
                            <li><p>5️⃣ Cookie Menage (Oreo Biscoff)</p></li>
                            <li><p>6️⃣ The Candy Lover (KitKat, m&m, fudge brownie)</p></li>
                        </ul>
                    </div>
                    <div className="price-btn">
                        <button className="btn-white-fill text-xl sm:text-2xl lg:text-xl font-bold sm:py-4 lg:py-3 lg:w-[60%]">Add to Cart</button>
                    </div>
                </div>
            </section>
        )
    } else if (cookieId === "variety-pack") {
        return (
            <section className="cookie-info">
                <div className="container grid grid-rows-[min-content_1fr] lg:grid-rows-[min-content_1fr] lg:grid-cols-2 gap-2 lg:gap-x-12">
                    <div className="cookie-img row-start-2 lg:row-start-1 lg:row-span-2">
                        <img className="w-full" src={"//www.theblakery.co/cdn/shop/files/variety-pack2_1040x1040.jpg?v=1714919497"} alt="collection of cookies" />
                    </div>
                    <div className="info-text">
                        <h3 className="cookie-name">Fan Faves 6 Pack</h3>
                        <div className="review-stars">
                            {/* put svg */}
                        </div>
                        <p>$99.00</p>
                        <p className="cookie-description">Twelve tantalizing cookies that'll seduce your taste buds and leave you craving for more. From flirtatious classics to daring delights, this collection will have you saying 'oui oui' to every bite.</p>
                        <div className="price-btn">
                            <button className="btn-white-fill text-xl sm:text-2xl lg:text-xl font-bold sm:py-4 lg:py-3 lg:w-[60%]">Add to cart</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else if (cookieId === "build-a-box-6-pack") {
        return (
            <section className="cookie-info">
                <div className="container grid grid-rows-[min-content_1fr] lg:grid-rows-[min-content_1fr] lg:grid-cols-2 gap-2 lg:gap-x-12">
                    <div className="cookie-img row-start-2 lg:row-start-1 lg:row-span-2">
                        <img className="w-full" src={"//www.theblakery.co/cdn/shop/files/variety-pack2_1040x1040.jpg?v=1714919497"} alt="collection of cookies" />
                    </div>
                    <div className="info-text">
                        <h3 className="cookie-name">Build a Box 6 Pack</h3>
                        <div className="review-stars">
                            {/* put svg */}
                        </div>
                        <p className="cookie-description">The hottest 6 packs are made in The Blakery kitchen. Build your box now.</p>
                        <div className="price-btn">
                            <button className="btn-white-fill text-xl sm:text-2xl lg:text-xl font-bold sm:py-4 lg:py-3 lg:w-[60%]">Build a Box</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    } else if (cookieId === "build-a-box-12-pack") {
        return (
            <section className="cookie-info">
            <div className="container grid grid-rows-[min-content_1fr] lg:grid-rows-[min-content_1fr] lg:grid-cols-2 gap-2 lg:gap-x-12">
                <div className="cookie-img row-start-2 lg:row-start-1 lg:row-span-2">
                    <img className="w-full" src={"//www.theblakery.co/cdn/shop/files/variety-pack2_1040x1040.jpg?v=1714919497"} alt="collection of cookies" />
                </div>
                <div className="info-text flex flex-col gap-3 mb-6">
                    <h3 className="cookie-name">Build a Box 12 Pack</h3>
                    <div className="review-stars">
                        {/* put svg */}
                    </div>
                    <p className="cookie-description">The best way to #GetBlaked, with a 12 pack.</p>
                    <div className="price-btn">
                        <button className="btn-white-fill text-xl sm:text-2xl lg:text-xl font-bold sm:py-4 lg:py-3 lg:w-[60%]">Build a Box</button>
                    </div>
                </div>
            </div>
            </section>
        )
    } else if (!cookies) {
        return <p>wrong</p>
    } else {
        return (
            <section className="cookie-info">
                <div className="container grid grid-rows-[min-content_1fr] lg:grid-rows-[min-content_1fr] lg:grid-cols-2 gap-2 lg:gap-x-12">    
                    <div className="cookie-img row-start-2 lg:row-start-1 lg:row-span-2">
                        <img className="w-full" src={cookies.img[0]} alt={cookies.name} />
                    </div>
                    <div className="info-text flex flex-col gap-3 mb-6">
                        <h3 className="cookie-name">{cookies.name}</h3>
                        <div className="review-stars">
                            {/* put svg */}
                        </div>
                        <p className="cookie-description">{cookies.description}</p>
                    </div>
                    <div className="order-btn">
                        <button className="btn-white-fill text-xl sm:text-2xl lg:text-xl font-bold sm:py-4 lg:py-3 lg:w-[60%]">Build a Box</button>
                    </div>
                </div>
            </section>
        )
    }
}