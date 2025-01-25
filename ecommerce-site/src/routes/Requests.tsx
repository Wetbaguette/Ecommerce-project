import Footer from "../components/Footer"

export default function Requests() {
    return (
        <>
            <section className="custom-requests-section">
                <div className="w-[80%] mx-auto my-0 mb-[80px]">    
                    <div className="requests-title">
                        <h2 className="text-center text-3xl font-semibold">Custom Cookies</h2>
                        <h3 className="text-center ">All custom cookies have an order minimum of 8 and we will contact you about the exact pricing.</h3>
                    </div>
                    <form action="post" className="requests-form mx-auto my-0 max-w-[700px] ">
                        <div className="flex gap-2 justify-between mb-2 mt-8">
                            <div className="flex flex-col w-[50%]">
                                <label className="text-sm" htmlFor="request-name">Name</label>
                                <input className="form-input" 
                                placeholder="First Last"
                                type="text" name="request-name" id="request-name" />
                            </div>
                            <div className="flex flex-col w-[50%]">
                                <label className="text-sm" htmlFor="request-email">Email Address</label>
                                <input className="form-input" 
                                placeholder="email@example.com"
                                type="email" name="request-email" id="request-email" />
                            </div>
                        </div>
                        <div className="flex gap-2 justify-between mb-2">
                            <div className="flex flex-col w-[50%]">
                                <label className="text-sm" htmlFor="request-base">Base</label>
                                <select className="form-input" name="request-base" id="request-base"></select>
                            </div>
                            <div className="flex flex-col w-[50%]">
                                <label className="text-sm" htmlFor="request-quantity">Quantity</label>
                                <input className="form-input" 
                                placeholder="Minimum of 8"
                                type="text" name="request-quantity" id="request-quantity" />
                            </div>
                        </div>
                        <div className="mb-2">
                            <label className="text-sm" htmlFor="request-mixins">Mix Ins</label>
                            <input className="form-input" 
                            placeholder="Ex: M&Ms, sprinkles... etc."
                            type="text" name="request-mixins" id="request-mixins" />
                        </div>
                        <div className="mb-2">
                            <label className="text-sm" htmlFor="request-stuffing">Stuffing</label>
                            <input className="form-input" 
                            placeholder="Max of one"
                            type="text" name="request-stuffing" id="request-stuffing" />
                        </div>
                        <div className="mb-2">
                            <label className="text-sm" htmlFor="request-notes">Notes</label>
                            <textarea className="form-input" 
                            placeholder="Allergies, event details... etc."
                            name="request-notes" id="request-notes"></textarea>
                        </div>
                        <div className="w-[40%] mx-auto my-0 min-w-0">
                            <button className="btn-white-fill min-w-0" type="submit">Submit</button>

                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}