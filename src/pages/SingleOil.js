import { useLocation } from "react-router-dom";
import { OilCard } from "../components/OilCard";

const SingleOil = () => {
  const location = useLocation();
  const { name, medicinalUse, emotionalUse, meansOfUse, chakra, safety, image } = location.state;

  return (
    <div className="container">
      <div className="single-oil">
        <img src={image} alt="" />
        <h1>{name}</h1>
        <p><b>Medicinal Use: </b> {medicinalUse}</p>
        <p><b>Emotional Use: </b>{emotionalUse}</p>
        <p><b>Means of Use: </b>{meansOfUse}</p>
        <p><b>Chakra: </b>{chakra}</p>
        <p><b>Safety: </b>{safety}</p>

      </div>
    </div>
  );
};

export default SingleOil;
