import Stars from "../components/Stars"
import Footer from "../components/Footer"

export default function Story() {
    return (
        <>
            <section className="story-title">
                <h2 className="font-semibold text-center w-[80%] mx-auto my-0 tracking-widest pt-2 pb-5">Meet the Blakery, your new Foodie friend - and if you aren't yet convinced, taste to believe!</h2>
                <div className="mb-5">
                    <hr className="border-none h-[2px] bg-white"/>
                    <div className="flex justify-around  py-2">
                        <Stars />
                        <p className="uppercase font-semibold">Our Story</p>
                        <Stars />
                    </div>
                    <hr className="border-none h-[2px] bg-white"/>
                </div>
            </section>
            <section className="story-content">
                <div className="container">
                    <div className="founder-info grid grid-rows-[min-content_1fr 1fr] gap-5">
                        <img className="border-white rounded-3xl border-2" src="//www.theblakery.co/cdn/shop/files/Blakery_Headshot.jpg?v=1714917409&width=3840" alt="img of founder of The Blakery" />
                        <h3 className="row-start-1 text-3xl uppercase font-bold">Get to know our Founder</h3>
                        <div>
                            <h4 className="hidden">Creator of the 6oz Cookie</h4>
                            <p className="my-3 leading-relaxed tracking-wider">Do people <span className="underline italic">really</span> read the “About Us” section of any website? We hope so. Because we think our story is pretty inspiring and truly unique. You see, we were founded by a young man named Blake Warman. Blake grew up as a pudgy kid that struggled to get rid of his sweet tooth.  </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-semibold">The Solution</h2>
                        <p className="leading-relaxed tracking-wider">Then, one day in high school, instead of eating his feelings, Blake decided to try baking his feelings. This led to Blake losing 80 pounds and the life-changing discovery that friends, family, and complete strangers loved whatever Blake Baked. (Which is also very fun to say). </p>
                        <p className="leading-relaxed tracking-wider">Not only did people love Blake’s baked treats, but Blake fell in love with the happiness his treats brought to people. So Blake rolled up his sleeves and poured everything he had into creating the Maison de Cookie. </p>
                        <p className="leading-relaxed tracking-wider">Today, at 25, Blake is the founder of The Blakery. A Maison of the most creatively delicious cookies you can find and devour. </p>
                        <button className="btn-white-border">Shop Now</button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}