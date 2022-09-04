import { useLocation } from "react-router-dom";

const SingleOil = () => {
  const location = useLocation();
  const { name, medicinalUse, emotionalUse, meansOfUse, chakra, safety, index } = location.state;

  return (
    <div className="container">
      <div className="single-oil">
        <img src={`https://source.unsplash.com/random?sig=${index}`} alt="" />
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
