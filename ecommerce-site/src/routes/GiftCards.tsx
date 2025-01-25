import Footer from "../components/Footer"

export default function GiftCards() {
    return (
        <>
            <section className="gift-card-shop">
                <div className="container grid grid-rows-[min-content_1fr 1fr] gap-5">
                    <div className="cookie-img">
                        <img className="w-full" src={"//www.theblakery.co/cdn/shop/files/blakery-gift-card_1040x1040.jpg?v=1714484971"} alt="collection of cookies" />
                    </div>
                    <div className="info-text flex flex-col gap-3 row-start-1">
                        <h3 className="cookie-name">Digital Gift Card</h3>
                        <div className="review-stars">
                            {/* put svg */}
                        </div>
                        <p className="text-sm">$50.00</p>
                        <p className="text-sm">Digital gift cards are sent immediately to you by email (to the email address entered at checkout).</p>
                        <p className="text-sm">When you’re ready to give your gift, just forward the email you receive to the recipient—and write a personalized note!—or print it out and slip it into a card. </p>
                    </div>
                    <div className="price-btn">
                        <button className="btn-white-fill">Add to Cart</button>
                    </div>
                </div>
            </section>
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