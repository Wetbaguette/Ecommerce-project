import { Link } from "react-router-dom"
import cookieCatalogue from "../cookieCatalogue"

function catalogue() {
    return cookieCatalogue.map(cookie => {
        return(
             <Link to={`products/${cookie.id}`}><div className="catalogue-item">
                <div className="catalogue-item-img w-[300px]">
                    <img src={cookie.img} alt={cookie.name} />
                </div>
               <h2>{cookie.name}</h2>
            </div></Link>
        )
    })
}

export default function Catalogue() {

    return (
        <>
            <section className="cookie-catalogue-section">
                <h2>Cookie Catalogue</h2>
                <div className="catalogue">
                    {catalogue()}
                </div>
            </section>
        </>
    )
}