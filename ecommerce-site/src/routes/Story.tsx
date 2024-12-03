import Stars from "../components/Stars"

export default function Story() {
    return (
        <>
            <section className="story-title">
                <h2>Meet the Blakery, your new Foodie friend - and if you aren't yet convinced, taste to believe!</h2>
                <div>
                    <div>
                        <Stars />
                        <p>Our Story</p>
                        <Stars />
                    </div>
                </div>
            </section>
            <section className="story-content">
                <div className="container">
                    <div className="img-founder">
                        <img src="//www.theblakery.co/cdn/shop/files/Blakery_Headshot.jpg?v=1714917409&width=3840" alt="img of founder of The Blakery" />
                    </div>
                    <div className="text">
                        <h3>Get to know our Founder</h3>
                        <h4>Creator of the 6oz Cookie</h4>
                        <p>Do people <span>really</span> read the “About Us” section of any website? We hope so. Because we think our story is pretty inspiring and truly unique. You see, we were founded by a young man named Blake Warman. Blake grew up as a pudgy kid that struggled to get rid of his sweet tooth.  </p>
                    </div>
                    <div>
                        <h2>The Solution</h2>
                        <p>Then, one day in high school, instead of eating his feelings, Blake decided to try baking his feelings. This led to Blake losing 80 pounds and the life-changing discovery that friends, family, and complete strangers loved whatever Blake Baked. (Which is also very fun to say). </p>
                        <p>Not only did people love Blake’s baked treats, but Blake fell in love with the happiness his treats brought to people. So Blake rolled up his sleeves and poured everything he had into creating the Maison de Cookie. </p>
                        <p>Today, at 25, Blake is the founder of The Blakery. A Maison of the most creatively delicious cookies you can find and devour. </p>
                        <button>Shop Now</button>
                    </div>
                </div>
            </section>
        </>
    )
}