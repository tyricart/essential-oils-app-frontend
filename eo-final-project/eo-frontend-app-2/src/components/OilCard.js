import { Link } from "react-router-dom"

export const OilCard = ({oil}) => {
    return (
        <Link state={oil} to='/single-oil' className="oils-item">
            <h4>{oil.oilName}</h4>
            <img src={oil.image} alt="" />
            <div className="top-uses">
            <p><b>Medicinal Use: </b>{oil.medicinalUse}</p>
            <p><b>Means of Use: </b>{oil.meansOfUse}</p>
            </div>
        </Link>
    )
}