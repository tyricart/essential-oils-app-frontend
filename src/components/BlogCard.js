import { Link } from "react-router-dom"

export const BlogCard = ({blog, image}) => {
    return (
        <Link state={blog} to='/single-blog' className="blog-item">
            <img src={blog.image} alt="" />
            <small>{blog.date}</small>
            <h4>{blog.name}</h4>
        </Link>
    )
}