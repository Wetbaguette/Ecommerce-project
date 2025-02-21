import { Link } from "react-router-dom"
import cookieCatalogue from "../cookieCatalogue"
import Footer from "../components/Footer"

function catalogue() {
    return cookieCatalogue.map(cookie => {
        return(
             <Link to={`products/${cookie.id}`}><div className="catalogue-item my-3 border-2 rounded-lg border-[#4F4C4D]">
                <div className="catalogue-item-img w-full h-[50vh] sm:h-[70vh] lg:h-[50vh]">
                    <img className="rounded-lg object-cover" src={cookie.img} alt={cookie.name} />
                </div>
               <h2 className="text-center tracking-widest text-2xl sm:text-4xl lg:text-2xl my-3">{cookie.name}</h2>
            </div></Link>
        )
    })
}

export default function Catalogue() {

    return (
        <>
            <section className="cookie-catalogue-section mb-10">
                <div className="container">
                    <h2 className="text-6xl sm:text-7xl font-bold tracking-wider text-center my-[0.5em]">Cookie Catalogue</h2>
                    <div className="catalogue my-0 mx-auto lg:max-w-[1165px] lg:grid grid-cols-3 gap-x-4">
                        {catalogue()}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}