import { useLocation } from "react-router-dom";

const SingleBlog = () => {
  const location = useLocation();
  const { date, name, content, index } = location.state;

  return (
    <div className="container-blog">
      <div className="single-blog">
        <img src={`https://source.unsplash.com/random?sig=${index}`} alt="" />
        <small>{date}</small>
        <h1>{name}</h1>
        <p>{content}</p>

      </div>
    </div>
  );
};

export default SingleBlog;
