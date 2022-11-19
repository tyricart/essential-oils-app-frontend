import { useEffect, useState } from "react"
import { OilCard } from "../components/OilCard"

const Directory = () => {
    const [oils, setOils] = useState([]) 

    useEffect(() => {
        fetch('http://localhost:4040/oils')
        .then(response => response.json())
        .then(data => setOils(data))
        .catch(err => console.error(err))
    }, [])

    const allOils = oils.map((oil, index) => {
        return <OilCard key={oil._id} oil={oil} index={index} />

    })
    return (
        <div className="container">
            <h1>Essential Oils Directory</h1>
            <div className="oils">{allOils}</div>
        </div>
    )
}

export default Directory