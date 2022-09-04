import { useEffect, useState } from "react"
import { BlogCard } from "../components/BlogCard"

const Home = () => {
    const [blogs, setBlogs] = useState([]) 

    useEffect(() => {
        fetch('http://localhost:4040/blogs')
        .then(response => response.json())
        .then(data => setBlogs(data))
        .catch(err => console.error(err))
    }, [])

    const allBlogs = blogs.map((blog, index) => {
        return <BlogCard key={blog.name} blog={blog} index={index}/>
    })

    return (
        <div className="container-blog">
            {/* I WANT TO PUT A BANNER HERE */}
            <div className="blogs">{allBlogs}</div>
        </div>
    )
}

export default Home