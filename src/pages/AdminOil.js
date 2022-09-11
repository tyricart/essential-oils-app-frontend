import { useState } from "react";
import { useLocation } from "react-router-dom";


const AdminOil = () => {
    const [oil, setOil] = useState()

  function sendOil (newOil){
    const {oilName, medicalUse, emotionalUse, meansOfUse, charka, safety} = newOil
    fetch('http://localhost:4040/add-oil', {
        method: 'POST', 
        headers: {
          Accept:'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          oilName: oilName,
          medicalUse: medicalUse,
          emotionalUse: emotionalUse,
          meansOfUse: meansOfUse,
          charka: charka, 
          safety: safety,
        })
    }) 
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }

  const handleUpdate = (event) => {
    event.preventDefault()
    console.log("Oil updated to API");

    fetch(`http://localhost:4040/oils?name=`, {
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
    event.preventDefault()
    // console.log(name)

    // fetch(`http://localhost:4040/oils?name=${name}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(form), 
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.error(err));
  };

  console.log(oil)

  return (
    <div className="container-oil">
      <h1>Add Oil</h1>
      <form className="add-form">
        <label htmlFor="">Oil Name: </label>
        <input onChange={e => setOil({...oil, oilName: e.target.value})} type="text" placeholder="ex: Arborvitae" name="name" id="name"/>
        
        <label htmlFor="">Medicinal Use: </label>
        <input onChange={e => setOil({...oil, medicalUse: e.target.value})} type="text" placeholder="ex: Antiviral" name="Medicinal Use" id="Medicinal Use"/>
      
        <label htmlFor="">Emotional Use: </label>
        <input onChange={e => setOil({...oil, emotionalUse: e.target.value})} type="text" placeholder="ex: Trusting" name="Emotional Use" id="Emotional Use"/>

        <label htmlFor="">Means of Use: </label>
        <input onChange={e => setOil({...oil, meansOfUse: e.target.value})} type="text" placeholder="ex: Topical" name="Means of Use" id="Means of Use"/>

        <label htmlFor="">Chakra: </label>
        <input onChange={e => setOil({...oil, charka: e.target.value})} type="text" placeholder="ex: Crown" name="Chakra" id="Chakra"/>
        
        <label htmlFor="">Safety: </label>
        <input onChange={e => setOil({...oil, safety: e.target.value})} type="text" placeholder="ex: Dilute" name="Safety" id="Safety"/>

        <label htmlFor="">Image: </label>
        <input onChange={e => setOil({...oil, image: e.target.value})} type="text" placeholder="" name="Image" id="Safety"/> <br />

        <button onClick={() => sendOil(oil)}>Add Oil</button>
        <button>Update Oil</button>
        <button>Delete Oil</button>

      </form>
    </div>
  );
};



export default AdminOil;
