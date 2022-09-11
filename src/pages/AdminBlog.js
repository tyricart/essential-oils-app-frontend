import { useState } from "react";
import { useLocation } from "react-router-dom";


const AdminBlog = () => {
    const [form, setForm] = useState({})
    const location = useLocation();
    const { name, image } = form;

const sendBlog = (event) => {
event.preventDefault() // stops form from refreshing page
// const newOil = { name: 'Rosemary', meansOfUse: 'Topical', chakra: 'Heart' }

   fetch('http:localhost:4040/blogs', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    console.log('Blog sent to API')
  }

  const handleForm = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleUpdate = (event) => {
    event.preventDefault()
    console.log("Blog updated to API");

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

  const handleDelete = (event) => {
    event.preventDefault()
    console.log("Blog deleted from API");

    fetch(`http://localhost:4040/blogs?name=${name}`, {
      method: "DELETE",
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
    <div className="container-blog">
      <h1>Add Blog</h1>
      <form className="add-blog-form">
        <label htmlFor="">Date: </label>
        <input onChange={e => handleForm(e)} type="text" placeholder="ex: 12 July 2022" name="date" id="date"/> <br />
        
        <label htmlFor="">Name: </label>
        <input onChange={e => handleForm(e)} type="text" placeholder="ex: Benefits of Amethyst " name="name" id="name"/> <br />
        
        <label htmlFor="">Content</label>
        <input onChange={e => handleForm(e)} type="text" placeholder="ex: Write something great" name="content" id="content"/><br />

        <button onClick={event => sendBlog(event)}>Add Blog</button>
        <button onClick={event => handleUpdate(event)}>Update Blog</button>
        <button onClick={event => handleDelete(event)}>Delete Blog</button>

      </form>
    </div>
  );
};


export default AdminBlog;
