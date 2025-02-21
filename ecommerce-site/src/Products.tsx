import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import CookieScroll from "./components/CookieScroll"

export default function Products() {
    return(
        <>
            <Navbar />
            <Outlet />
            <section className="reviews text-center mt-6 container">
                <h3 className="uppercase text-3xl lg:text-6xl lg:font-semibold">Reviews</h3>
                <div className="review-container uppercase border-2 border-white rounded-3xl py-10 sm:py-[5rem] my-6">
                    <p className="text-lg sm:text-2xl tracking-widest">What did you think?</p>
                    <h4 className="text-3xl sm:text-4xl lg:text-5xl font-semibold my-3">Let Us know!</h4>
                    <button className="btn-white-border text-2xl sm:text-3xl lg:text-2xl sm:py-4 lg:py-3">Write a Review</button>
                </div>
                <h3>Customer Photos</h3>
            </section>
            <CookieScroll />
            <Footer />
        </>
    ) 
}