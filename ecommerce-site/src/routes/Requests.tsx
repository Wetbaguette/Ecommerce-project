
export default function Requests() {
    return (
        <>
            <section className="custom-requests-section">
                <div className="requests-title">
                    <h2>Custom Cookies</h2>
                    <h3>All custom cookies have an order minimum of 8 and we will contact you about the exact pricing.</h3>
                </div>
                <form action="post" className="requests-form">
                    <div>
                        <div>
                            <label htmlFor="request-name">Name</label>
                            <input type="text" name="request-name" id="request-name" />
                        </div>
                        <div>
                            <label htmlFor="request-email">Email Address</label>
                            <input type="email" name="request-email" id="request-email" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="request-base">Base</label>
                            <select name="request-base" id="request-base"></select>
                        </div>
                        <div>
                            <label htmlFor="request-quantity">Quantity</label>
                            <input type="text" name="request-quantity" id="request-quantity" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="request-mixins">Mix Ins</label>
                        <input type="text" name="request-mixins" id="request-mixins" />
                    </div>
                    <div>
                        <label htmlFor="request-stuffing">Stuffing</label>
                        <input type="text" name="request-stuffing" id="request-stuffing" />
                    </div>
                    <div>
                        <label htmlFor="request-notes">Notes</label>
                        <textarea name="request-notes" id="request-notes"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    )
}