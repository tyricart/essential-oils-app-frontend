import { useState } from "react";
// import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { OilCard } from "../components/OilCard";

const AdminOil = () => {
  const [oil, setOil] = useState();
  const [oils, setOils] = useState([]);


  useEffect(() => {
    fetch("http://localhost:4040/oils")
      .then((response) => response.json())
      .then((data) => setOils(data))
      .catch((err) => console.error(err));
  }, []);


  function sendOil(newOil) {
    const { oilName, medicinalUse, emotionalUse, meansOfUse, chakra, safety, image } =
      newOil;
    fetch("http://localhost:4040/add-oil", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oilName: oilName,
        medicinalUse: medicinalUse,
        emotionalUse: emotionalUse,
        meansOfUse: meansOfUse,
        image: image,
        chakra: chakra,
        safety: safety,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }


  const handleUpdate = (event) => {
    event.preventDefault();
    console.log("Oil updated to API");

    fetch("http://localhost:4040/oils?name=", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  const handleDelete = (event) => {
    event.preventDefault();
    console.log('deleting oil')
    fetch("http://localhost:4040/remove-oil?oilName=", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  const allOils = oils.map((oil, index) => {
    return <OilCard key={oil._id} oil={oil} index={index} />;
  });


  return (
    <div className="container-oil">
      <h1>Oil CRUD</h1>
      <form className="add-form">
        <label htmlFor="">Oil Name: </label>
        <input
          onChange={(e) => setOil({ ...oil, oilName: e.target.value })}
          type="text"
          placeholder="ex: Arborvitae"
          name="oilName"
          id="name"
        />
        <label htmlFor="">Medicinal Use: </label>
        <input
          onChange={(e) => setOil({ ...oil, medicinalUse: e.target.value })}
          type="text"
          placeholder="ex: Antiviral"
          name="Medicinal Use"
          id="Medicinal Use"
        />
        <label htmlFor="">Emotional Use: </label>
        <input
          onChange={(e) => setOil({ ...oil, emotionalUse: e.target.value })}
          type="text"
          placeholder="ex: Trusting"
          name="Emotional Use"
          id="Emotional Use"
        />
        <label htmlFor="">Means of Use: </label>
        <input
          onChange={(e) => setOil({ ...oil, meansOfUse: e.target.value })}
          type="text"
          placeholder="ex: Topical"
          name="Means of Use"
          id="Means of Use"
        />
        <label htmlFor="">Chakra: </label>
        <input
          onChange={(e) => setOil({ ...oil, chakra: e.target.value })}
          type="text"
          placeholder="ex: Crown"
          name="Chakra"
          id="Chakra"
        />
        <label htmlFor="">Safety: </label>
        <input
          onChange={(e) => setOil({ ...oil, safety: e.target.value })}
          type="text"
          placeholder="ex: Dilute"
          name="Safety"
          id="Safety"
        />
        <label htmlFor="">Image: </label>
        <input
          onChange={(e) => setOil({ ...oil, image: e.target.value })}
          type="text"
          placeholder="Image URL"
          name="image"
          id="image"
        />{" "}
        <br />
        <button onClick={() => sendOil(oil)}>Add Oil</button>
        <button onClick={() => handleUpdate(oil)}>Update Oil</button>
        </form>

        <input type="text" />
        <button onClick={(e) => handleDelete(e)}>Delete Oil</button>

      <div className="container">
        <h1>Essential Oils Directory</h1>
        <div className="oils">{allOils}</div>
      </div>

    </div>
  );
};

export default AdminOil;
