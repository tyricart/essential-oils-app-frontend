import { useLocation } from "react-router-dom";

const SingleOil = () => {
  const location = useLocation();
  const { oilName, medicinalUse, emotionalUse, meansOfUse, chakra, safety, image } = location.state;

  return (
    <div className="container-single">
      <div className="single-oil">
        <div className="oil-name"><h1>{oilName}</h1></div>
        <div className="top-uses"><p><b>Medicinal Use: </b> {medicinalUse}</p>        </div>
        <img src={image} alt="" />
        <div className="safety"><p><b>Safety: </b>{safety}</p></div>

        <p><b>Emotional Use: </b>{emotionalUse}</p>
        <p><b>Means of Use: </b>{meansOfUse}</p>
        <p><b>Chakra: </b>{chakra}</p>

      </div>
    </div>
  );
};

export default SingleOil;
