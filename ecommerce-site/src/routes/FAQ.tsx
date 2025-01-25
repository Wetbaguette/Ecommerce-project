
const faq: {question: string, answer: string}[] = [
    {
        question: "When can I expect my cookies to embark on their journey?",
        answer: "Our crack team of bakers is in overdrive to whip up your handcrafted delights. Expect your order to ship within 1-4 business days of placing it. Once your order is “Blaked” and sets sail from our kitchen, it's usually a smooth 1-4 business days voyage to your door. Need it pronto? Overnight orders are your best bet, but remember, they're only available Monday-Wednesday by Noon EST."
    }, {
        question: "Do you offer local delivery?",
        answer: "For a limited time, we are offering complimentary white glove delivery for all 12 packs and B”l”akers dozens (Monday-Thursday) in the Miami-Dade area. If you have questions regarding delivery radius, please reach out to hello@theblakery.co."
    }, {
        question: "Can I play the scheduling game with my order?",
        answer: "Sorry, we're not magicians (though we do work magic with cookies). We can't hold or schedule orders for specific shipping or delivery days. It's first come, first served in the cookie queue, with all orders shipping within 1-4 business days. After that, it's in the hands of the delivery wizards!"
    }, {
        question: "Are my cookies shipped with a cool entourage?",
        answer: "Nah, our cookies are too cool for cooling packs. They're baked fresh, packed in a sleek box, then bundled up in a shipper box for their grand adventure to you."
    }, {
        question: "Help! My cookies are feeling mushy.",
        answer: "Chill out, literally! If your cookies arrive a little softer than expected, blame it on the weather, not on our baking process. Pop them in the fridge for a bit, and they'll firm up nicely. And if you're facing a cookie catastrophe, snap some pics and shoot them over to our rescue squad at hello@theblakery.co."
    }, {
        question: "Where should I stash my cookies?",
        answer: "Keep your cookies cozy in their packaging at room temperature. They'll appreciate the warm welcome. If not consuming upon arrival, throw in the freezer and defrost when ready to devour."
    }, {
        question: "How much dough for your delicious cookies?",
        answer: "Our B”l”akers Dozen (Variety Pack) is $79, and our 6 pack is $42. Trust us, they’re worth every penny."
    }, {
        question: "Can I mix and match my cookie crew?",
        answer: "You sure can! The Blakery wants to provide you with an experience tailored to your preferences which is why we created the Build a Box feature!"
    }, {
        question: "Can I indulge if I have a nut allergy?",
        answer: "Our kitchen is like a nut-friendly nightclub, with all sorts of ingredients mingling. While we take precautions, we can't guarantee a nut-free zone. If you're nuts about safety, consult your doctor before diving in."
    }, {
        question: "What's the skinny on cookie nutrition?",
        answer: "Check out our website for all the delicious details on each cookie. Or view our nutrition information here: "
    }, {
        question: "How long can I keep these cookies before they crumble?",
        answer: "These babies are preservative-free, so they'll stay fresh for about 5 days. If you're planning an extended cookie vacation, pop them in the freezer. They'll thank you by staying fresh for a few months!"
    }, {
        question: "My shipper box arrived looking worse for wear.",
        answer: "Ah, the hazards of shipping! If your shipper box took a beating on its journey, don't worry. It's all part of the adventure. But if your cookies are worse for wear, drop us a line at hello@theblakery.co, and we'll work our magic."
    }, {
        question: "Help! My order is playing hooky.",
        answer: "Sometimes, even cookies need a little extra time to find their way home. If your order seems to be taking an extended vacation with the carrier, reach out to us at hello@theblakery.co, and we'll launch a search party."
    }, {
        question: "My tracking number says my cookies are partying, but I'm not invited.",
        answer: "Ah, the mysteries of technology! If your cookies are MIA, check with your neighbors first. If they're not playing host, hit us up at hello@theblakery.co and we'll investigate."
    }, {
        question: "Can I change the shipping destination mid-voyage?",
        answer: "If your order is still docked, shoot us an email at hello@theblakery.co with the new coordinates, and we'll reroute it for you!"
    }, {
        question: "What's the scoop on returns, exchanges, and refunds?",
        answer: "Unfortunately, our cookies are like one-hit wonders—they're here and then they're gone. Due to their fleeting nature, we don't offer returns, exchanges, or refunds. But if you've got a genuine cookie conundrum, drop us a line at hello@theblakery.co."
    }, {
        question: "Can I spread the cookie love with corporate gifts?",
        answer: "Absolutely! Whether it's for your boss or the office oddball, we've got you covered. Just head to our website and fill out this form for orders of 5 or more boxes. Let the cookie celebrations begin!"
    }, {
        question: "What about creating that dream flavor?",
        answer: "If you dream it, we can “Blake” it. Fill out this form to begin your dream cookie journey. Minimum 8 cookies per custom order."
    }, {
        question: "I want to #GETBLAKED at my event!",
        answer: "We want to #GETBLAKED with you! Check out this page for all things events!"
    }
]

function questions() {
    return faq.map(item => {
        return (
            <div>
                <div className="question">
                    <h4 className="font-semibold tracking-widest my-4">{item.question}</h4>
                    {/* svg */}
                </div>
                <p className="tracking-widest text-sm my-4">{item.answer}</p>
                <hr />
            </div>
        )
    })
}

export default function FAQ() {
    return (
        <>
            <section className="faq">
                <div className="title bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(35,31,32,1)),url('//www.theblakery.co/cdn/shop/files/blakery-pattern_1024x.svg?v=1714500231')] text-3xl text-center font-bold [word-spacing:20px] tracking-wider py-[2em] px-[0.5em] bg-no-repeat bg-cover bg-center from-black">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="questions-answers container">
                    {questions()}
                </div>
            </section>
        </>
    )
}