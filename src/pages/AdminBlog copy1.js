import { useState } from "react";
import { useLocation } from "react-router-dom";


const AdminBlog = () => {
    const [form, setForm] = useState({})
    const location = useLocation();
    const { name, date, content, index } = location.state;
  
  const sendOil = (event) => {
    event.preventDefault() // stops form from refreshing page
    // const newOil = { name: 'Rosemary', meansOfUse: 'Topical', chakra: 'Heart' }

    fetch('http://localhost:4040/blogs', {// GET is the default
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(form)
    }) 
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))

    console.log('Oil sent to API')
  };

  const handleForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

    const handleUpdate = (event) => {
    event.preventDefault()
    console.log("Oil updated to API");

    fetch(`http://localhost:4040/blogs?name=${name}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form), 
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container-oil">
      <h1>Add Blog</h1>
      <form className="add-form">
        <label htmlFor=""></label>
        <input onChange={e => handleForm(e)} type="text" placeholder="ex: Arborvitae" name="name" id="name"/>
        
        <label htmlFor="">Medicinal Use: </label>
        <input onChange={e => handleForm(e)} type="text" placeholder="ex: Antiviral" name="Medicinal Use" id="Medicinal Use"/>
        
        <label htmlFor="">Emotional Use: </label>
        <input onChange={e => handleForm(e)} type="text" placeholder="ex: Trusting" name="Emotional Use" id="Emotional Use"/>

        <button onClick={event => sendOil(event)}>Add Oil</button>
        <button onClick={(event) => handleUpdate(event)}>Comment</button>

      </form>
    </div>
  );
};



export default AdminBlog;
