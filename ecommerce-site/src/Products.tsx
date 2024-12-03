import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

export default function Products() {
    return(
        <>
            <Navbar />
            <Outlet />
            <section className="reviews">
                <h3>Reviews</h3>
                <div className="review-container">
                    <p>What did you think?</p>
                    <h4>Let Us know!</h4>
                    <button>Write a Review</button>
                </div>
                <h3>Customer Photos</h3>
            </section>
        </>
    ) 
}