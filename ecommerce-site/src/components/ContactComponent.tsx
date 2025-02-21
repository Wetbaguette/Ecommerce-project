
export default function Contact() {
    return (
        <div className="contact-form lg:w-[65%] max-w-[690px] my-0 mx-auto">
            <h2 className="text-center text-3xl sm:text-[2.4rem] lg:text-6xl font-bold tracking-widest">Contact Us</h2>
            <form action="post" className="my-6">
                <div className="lg:flex gap-2">
                    <div className="mb-2 lg:w-[50%]">
                        <label className="text-sm sm:text-base lg:text-sm" htmlFor="contact-name">Name</label>
                        <input className="form-input"
                        placeholder="First Last" type="text" name="contact-name" id="contact-name" />
                    </div>
                    <div className="mb-2 lg:w-[50%]">
                        <label className="text-sm sm:text-base lg:text-sm" htmlFor="phone-num">Phone Number</label>
                        <input className="form-input" placeholder="XXX-XXX-XXXX" type="number" name="phone-num" id="phone-num" />
                    </div>
                </div>
                <div className="mb-2">
                    <label className="text-sm sm:text-base lg:text-sm" htmlFor="contact-email">Email</label>
                    <input className="form-input" placeholder="Email@example.com" type="email" name="contact-email" id="contact-email" />
                </div>
                <div className="mb-2">
                    <label className="text-sm sm:text-base lg:text-sm" htmlFor="contact-message">Message</label>
                    <textarea className="form-input h-[150px]" placeholder="What's on your mind?" name="contact-message" id="contact-message"></textarea>
                </div>
                <button className="btn-white-fill text-lg py-[1.1em] font-semibold lg:w-[50%]" type="submit">Submit</button>
            </form>
        </div>
    )
}