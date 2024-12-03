import {Link} from 'react-router-dom'
import cookieData from '../cookieData.tsx'

function cookies() {
    const cookiesData = cookieData
    return cookiesData.map(cookie => {
        return(
            <h2 className='cookie'>{cookie.name}</h2>
        )
    })
}

export default function Home() {
    return (
        <>
            <main className='bg-[#231F20]'>
                <section className="top-shopping-section">
                    <div className="container">
                        <div className="home-video">
                            {/* put video here */}
                        </div>
                        <div className="shopping-box">
                            <h3>All your favorites</h3>
                            <h2>Build a Box</h2>
                            <button>Shop Now</button>
                        </div>
                        <div className="shopping-box">
                            <h2>Variety Pack</h2>
                            <button>Add to Cart</button>
                            <Link to={'/'}>Learn More</Link>
                        </div>
                    </div>
                </section>
                <section className="cookie-display">
                    {cookies()}
                </section>
                <div className="infinite-scroll"></div>
                <section className="middle-shopping-section">
                    <div className="container">
                        <div className="shopping-box">
                            <h2>The Pie Collection</h2>
                            <button>Order Now</button>
                            <a href="#">Learn More</a>
                        </div>
                        <div className="shopping-box">
                            <h2>6 Pack</h2>
                            <button>Build your own</button>
                        </div>
                        <div className="shopping-box">
                            <h2>12 Pack</h2>
                            <button>Build your own</button>
                        </div>
                        <div className="shopping-box">
                            <h2>Fan Fave 6 Pack</h2>
                            <button>Add to Cart</button>
                            <a href="#">Learn More</a>
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
                    <div className="container">
                        <div className="shopping-box">
                            <h3>Cookie of the Month</h3>    
                            <h2>Apple of my Pie</h2>
                            <button>Try it Now!</button>
                            <a href="#">Learn More</a>
                        </div>
                        <div className="shopping-box">
                            <h3>Cookie of the Month</h3>    
                            <h2>Pecan't Resist</h2>
                            <button>Try it Now!</button>
                            <a href="#">Learn More</a>
                        </div>
                        <div className="shopping-box">
                            <h3>Special Order?</h3>    
                            <h2>Customize</h2>
                            <button>Submit a Request</button>
                        </div>
                        <div className="shopping-box">
                            <h3>Pre-built Box</h3>    
                            <h2>Variety</h2>
                            <button>Add to Cart</button>
                            <a href="#">Learn More</a>
                        </div>
                    </div>
                </section>
                <section className="home-catering-section">
                    <h3>Order The Blakery for your next event</h3>
                    <h2>The Blackery Caters</h2>
                    <button>Catering Menu</button>
                </section>
            </main>
        </>
    )
}