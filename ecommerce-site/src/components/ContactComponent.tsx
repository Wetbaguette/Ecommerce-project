
export default function Contact() {
    return (
        <div className="contact-form">
            <h2 className="text-center text-3xl font-bold">Contact Us</h2>
            <form action="post" className="my-6">
                <div>
                    <div className="mb-2">
                        <label className="text-sm" htmlFor="contact-name">Name</label>
                        <input className="form-input"
                        placeholder="First Last" type="text" name="contact-name" id="contact-name" />
                    </div>
                    <div className="mb-2">
                        <label className="text-sm" htmlFor="phone-num">Phone Number</label>
                        <input className="form-input" placeholder="XXX-XXX-XXXX" type="number" name="phone-num" id="phone-num" />
                    </div>
                </div>
                <div className="mb-2">
                    <label className="text-sm" htmlFor="contact-email">Email</label>
                    <input className="form-input" placeholder="Email@example.com" type="email" name="contact-email" id="contact-email" />
                </div>
                <div className="mb-2">
                    <label className="text-sm" htmlFor="contact-message">Message</label>
                    <textarea className="form-input" placeholder="What's on your mind?" name="contact-message" id="contact-message"></textarea>
                </div>
                <button className="btn-white-fill text-lg py-[1.1em] font-semibold" type="submit">Submit</button>
            </form>
        </div>
    )
}