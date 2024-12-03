
export default function Contact() {
    return (
        <div className="contact-form">
            <h2>Contact Us</h2>
            <form action="post">
                <div>
                    <div>
                        <label htmlFor="contact-name">Name</label>
                        <input type="text" name="contact-name" id="contact-name" />
                    </div>
                    <div>
                        <label htmlFor="phone-num">Phone Number</label>
                        <input type="number" name="phone-num" id="phone-num" />
                    </div>
                </div>
                <div>
                    <label htmlFor="contact-email">Email</label>
                    <input type="email" name="contact-email" id="contact-email" />
                </div>
                <div>
                    <label htmlFor="contact-message">Message</label>
                    <textarea name="contact-message" id="contact-message"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}