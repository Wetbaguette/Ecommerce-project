import {Link} from 'react-router-dom'
import cookieData from '../cookieData.tsx'
import Stars from '../components/Stars.tsx'
import Footer from '../components/Footer.tsx'

function cookies() {
    const cookiesData = cookieData
    return cookiesData.map(cookie => {
        return(
            <div className="cookie-name-cursor flex flex-col items-center">
                <Stars />
                <h2 className='cookie text-2xl sm:text-5xl lg:text-6xl my-[0.4em]'>{cookie.name}</h2>
            </div>
        )
    })
}

export default function Home() {
    return (
        <>
            <main className='bg-[#231F20]'>
                <section className="top-shopping-section mt-3">
                    <div className="container">
                        <div className="desktop-version hidden lg:grid grid-cols-2 gap-5 grid-rows-[min-content_min-content]">
                            <div className="home-video row-span-2 row-start-1 h-[100vh]">
                                <video className='border-2 border-white rounded-3xl w-full object-cover h-[100vh]' autoPlay muted>
                                    <source src='https://cdn.shopify.com/videos/c/o/v/b87a1010fa3a40929e0debebbef48105.mp4'/>
                                </video>
                            </div>
                            <div className="shopping-box bg-[#343434] h-full">
                                <h3 className='subTitle'>All your favorites</h3>
                                <h2>Build a Box</h2>
                                <button className='btn-white-border self-center'>Shop Now</button>
                            </div>
                            <div className="shopping-box row-start-1 bg-[url('//www.theblakery.co/cdn/shop/files/mound_of_cookies.jpg?v=1714919481&width=3840')] h-full">
                                <h2>Variety Pack</h2>
                                <button className='btn-white-border self-center'>Add to Cart</button>
                                <Link className='learn-more-btn' to={'/'}>Learn More</Link>
                            </div>
                        </div>
                        <div className="mobile-version mb-10 lg:hidden">
                            <div className="main-banner-img border-2 border-white rounded-3xl h-[45vh] max-h-[380px]">
                                <img className='border-white rounded-3xl max-h-[inherit] object-cover object-center' src="//www.theblakery.co/cdn/shop/files/The_Blakery_Dec_18.jpg?v=1732887156&width=3840" alt="christmas special" />
                            </div>
                            <Link to={'/build-a-box'}><button className='w-full bg-white text-[#231F20] my-2 py-2 text-lg rounded-lg uppercase'>Build a Box</button></Link>
                        </div>
                    </div>
                </section>
                <section className="cookie-display flex flex-col items-center justify-center my-[2.5em]">
                    <h2 className='text-2xl text-center sm:text-5xl lg:text-6xl my-[0.4em]'>Sleigh All Day Collection</h2>
                    {cookies()}
                </section>
                <div className="infinite-scroll"></div>
                <section className="middle-shopping-section">
                    <div className="container lg:grid grid-rows-[min-content_min-content] grid-cols-2 gap-7">
                        <div className="shopping-box bg-[url('//www.theblakery.co/cdn/shop/files/TheBlakeryDec0.jpg?v=1732886819&width=3840')]">
                            <h2 className='w-[80%] my-0 mx-auto'>Sleigh All Day Collection</h2>
                            <Link to={'/cookie-catalogue/products/sleigh-all-day-collection'}><button className='btn-white-border'>Order Now</button></Link>
                            <Link className='learn-more-btn' to={'/cookie-catalogue/products/sleigh-all-day-collection'}>Learn More</Link>
                        </div>
                        <div className="shopping-box bg-[url('//www.theblakery.co/cdn/shop/files/tray_of_cookies_36e6fbdc-560d-4622-ab3a-04c31f457760.jpg?v=1710178763&width=3840')]">
                            <h2>6 Pack</h2>
                            <Link to={"build-a-box"}><button className='btn-white-border'>Build your own</button></Link>
                        </div>
                        <div className="shopping-box bg-[url('//www.theblakery.co/cdn/shop/files/mound_of_cookies.jpg?v=1714919481&width=3840')]">
                            <h2>12 Pack</h2>
                            <Link to={"build-a-box"}><button className='btn-white-border'>Build your own</button></Link>
                        </div>
                        <div className="shopping-box bg-[url('//www.theblakery.co/cdn/shop/files/ezgif.com-animated-gif-maker.gif?v=1727973311&width=3840')]">
                            <h2>Fan Fave 6 Pack</h2>
                            <Link to={'/cookie-catalogue/products/fan-fave-6-pack'}><button className='btn-white-border'>Add to Cart</button></Link>
                            <Link className='learn-more-btn' to={'/cookie-catalogue/products/fan-fave-6-pack'}>Learn More</Link>
                        </div>
                    </div>
                </section>
                <section className="home-review-section">
                    <div className="review-text">
                        {/* add svg */}
                        {/* placeholder */}
                        <h3>The perfect colleague holiday treat to give</h3>
                        <p>Totally decadent, delicious and made for a fantastic Holiday gift to give a colleague. Thank you Blakery for a fun, yummy treat.</p>
                        <div className="next-btns">
                            <button>prev</button>
                            <button>next</button>
                        </div>
                    </div>
                    <div className="review-img">
                        {/* add img */}
                    </div>
                </section>
                <section className="article-review-scroll">
                    <div className="scroll-box">
                        {/* add logos */}
                    </div>
                </section>
                <section className="bottom-shopping-section">
                    <div className="container lg:flex gap-7">
                        <div className="shopping-box bg-[url('//www.theblakery.co/cdn/shop/files/The_Blakery_Dec_36.jpg?v=1733000791&width=3840')]">
                            <h3 className='subTitle'>Cookie of the Month</h3>    
                            <h2>Velvet Crush</h2>
                            <Link to={'/cookie-catalogue/products/velvet-crush'}><button className='btn-white-border'>Order Now</button></Link>
                            <Link className='learn-more-btn' to={'/cookie-catalogue/products/velvet-crush'}>Learn More</Link>
                        </div>
                        <div className="shopping-box bg-[url('//www.theblakery.co/cdn/shop/files/Sprinkles_Candy.jpg?v=1710173698&width=3840')]">
                            <h3 className='subTitle'>Special Order?</h3>    
                            <h2>Customize</h2>
                            <Link to={'/custom-requests'}><button className='btn-white-border'>Submit a Request</button></Link>
                        </div>
                        <div className="shopping-box bg-[url('//www.theblakery.co/cdn/shop/files/Cookie_Box.jpg?v=1710173697&width=3840')]">
                            <h3 className='subTitle'>Pre-built Box</h3>    
                            <h2>Variety</h2>
                            <Link to={'/cookie-catalogue/products/variety-pack'}><button className='btn-white-border'>Order Now</button></Link>
                            <Link className='learn-more-btn' to={'/cookie-catalogue/products/variety-pack'}>Learn More</Link>
                        </div>
                    </div>
                </section>
                <section className="home-catering-section">
                    <div className="desktop-catering lg:block hidden text-center my-12">
                        <h3 className='uppercase text-lg'>Order The Blakery for your next event</h3>
                        <h2 className='text-6xl font-semibold my-4'>The Blackery Caters</h2>
                        <Link to={'/catering'}><button className='btn-white-border'>Catering Menu</button></Link>
                    </div>
                    <div className="mobile-catering lg:hidden text-center">
                        <h2 className='text-2xl font-semibold mb-2'>We Cater!</h2>
                        <p className='uppercase text-sm max-w-[60%] mx-auto my-0 tracking-wider'>Order The Blakery for your next event</p>
                        <Link to={'/catering'}><button className='btn-white-border'>Catering Menu</button></Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}