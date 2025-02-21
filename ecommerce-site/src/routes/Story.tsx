import Stars from "../components/Stars"
import Footer from "../components/Footer"
import CookieScroll from "../components/CookieScroll"

export default function Story() {
    return (
        <>
            <section className="story-title">
                <h2 className="font-medium leading-snug text-center w-[80%] mx-auto my-0 tracking-widest pt-2 pb-5 lg:pb-12 lg:text-[3.75rem]">Meet the Blakery, your new Foodie friend - and if you aren't yet convinced, taste to believe!</h2>
                <div className="mb-5">
                    <hr className="border-none h-[2px] bg-white"/>
                    <div className="flex justify-around  py-[1em] lg:w-[50%] mx-auto my-0">
                        <Stars />
                        <p className="uppercase font-semibold tracking-widest lg:text-xl">Our Story</p>
                        <Stars />
                    </div>
                    <hr className="border-none h-[2px] bg-white"/>
                </div>
            </section>
            <section className="story-content">
                <div className="container">
                    <div className="founder-info grid grid-rows-[min-content_1fr 1fr] gap-5 lg:grid-rows-[min-content_1fr] lg:grid-cols-2 lg:h-[45vh]">
                        <img className="border-white rounded-3xl border-2 object-cover object-top lg:row-span-2 col-start-1" src="//www.theblakery.co/cdn/shop/files/Blakery_Headshot.jpg?v=1714917409&width=3840" alt="img of founder of The Blakery" />
                        <h3 className="row-start-1 lg:col-start-2 text-3xl lg:text-5xl uppercase font-bold">Get to know our Founder</h3>
                        <div>
                            <h4 className="hidden lg:block text-2xl uppercase tracking-widest">Creator of the 6 oz Cookie</h4>
                            <p className="my-3 leading-relaxed tracking-wider lg:text-xl">Do people <span className="underline italic">really</span> read the “About Us” section of any website? We hope so. Because we think our story is pretty inspiring and truly unique. You see, we were founded by a young man named Blake Warman. Blake grew up as a pudgy kid that struggled to get rid of his sweet tooth.  </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 lg:bg-[#343434] rounded-lg lg:my-5">
                        <div className="lg:w-[75%] flex flex-col gap-2 mx-auto my-0 lg:py-[4rem]">
                            <h2 className="text-3xl lg:text-5xl lg:my-5 font-semibold">The Solution</h2>
                            <p className="leading-relaxed tracking-wider lg:text-xl">Then, one day in high school, instead of eating his feelings, Blake decided to try baking his feelings. This led to Blake losing 80 pounds and the life-changing discovery that friends, family, and complete strangers loved whatever Blake Baked. (Which is also very fun to say). </p>
                            <p className="leading-relaxed tracking-wider lg:text-xl">Not only did people love Blake’s baked treats, but Blake fell in love with the happiness his treats brought to people. So Blake rolled up his sleeves and poured everything he had into creating the Maison de Cookie. </p>
                            <p className="leading-relaxed tracking-wider lg:text-xl">Today, at 25, Blake is the founder of The Blakery. A Maison of the most creatively delicious cookies you can find and devour. </p>
                            <button className="btn-white-border lg:text-xl py-3">Shop Now</button>
                        </div>
                    </div>
                </div>
            </section>
            <CookieScroll />
            <Footer />
        </>
    )
}