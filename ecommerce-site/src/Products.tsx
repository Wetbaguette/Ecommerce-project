import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Products() {
    return(
        <>
            <Navbar />
            <Outlet />
            <section className="reviews text-center container">
                <h3 className="uppercase text-3xl">Reviews</h3>
                <div className="review-container uppercase border-2 border-white rounded-xl py-10 my-6">
                    <p className="text-lg tracking-widest">What did you think?</p>
                    <h4 className="text-3xl">Let Us know!</h4>
                    <button className="btn-white-border">Write a Review</button>
                </div>
                <h3>Customer Photos</h3>
            </section>
            <Footer />
        </>
    ) 
}