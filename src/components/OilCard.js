import { Link } from "react-router-dom"

export const OilCard = ({oil}) => {
    return (
        <Link state={oil} to='/single-oil' className="oils-item">
            <img src={oil.image} alt="" />
            <h4>{oil.name}</h4>
            <p><b>Medicinal Use: </b>{oil.medicinalUse}</p>
            <p><b>Means of Use: </b>{oil.meansOfUse}</p>
        </Link>
    )
}