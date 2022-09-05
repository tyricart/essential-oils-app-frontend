const AdminBlog = () => {
  const sendBlog = () => {
    fetch('http:localhost:4040/blogs', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendBlog)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

    console.log('Blog sent to API')
  }

  return (
    <div className="container-blog">
      <h1>Add Blog</h1>
      <form className="add-blog-form">
        <label htmlFor="">Date: </label>
        <input type="text" placeholder="ex: 12 July 2022" name="date" id="date"/> <br />
        
        <label htmlFor="">Name: </label>
        <input type="text" placeholder="ex: Benefits of Amethyst " name="name" id="name"/> <br />
        
        <label htmlFor="">Content</label>
        <input type="text" placeholder="ex: Write something great" name="content" id="content"/><br />

        <button onClick={sendBlog}>Add Blog</button>

      </form>
    </div>
  );
};



export default AdminBlog;
