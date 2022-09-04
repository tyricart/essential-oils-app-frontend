import { Link } from "react-router-dom"

export const BlogCard = ({blog, index}) => {
    return (
        <Link state={blog} to='/single-blog' className="blog-item">
            <img src={`https://source.unsplash.com/random?sig=${index}`} alt="" />
            <small>{blog.date}</small>
            <h4>{blog.name}</h4>
            <p>{blog.content}</p> 
        </Link>
    )
}