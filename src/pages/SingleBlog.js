import { useLocation } from "react-router-dom";

const SingleBlog = () => {
  const location = useLocation();
  const { date, name, content, image } = location.state;

  return (
    <div className="container-blog">
      <div className="single-blog">
        <img src={image} alt="" />
        <small>{date}</small>
        <h1>{name}</h1>
        <p>{content}</p>

      </div>
    </div>
  );
};

export default SingleBlog;
