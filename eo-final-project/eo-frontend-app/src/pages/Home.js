import { useEffect, useState } from "react"

const Home = () => {
    const [oils, sestOils] = useState([]) 

    useEffect(() => {
        fetch('http://localhost:4040/')
        .then(response => response.json())
        .then(data => sestOils(data))
        .catch(err => console.error(err))
    }, [])

    const allOils = oils.map(oil => <li>{oil.Name}</li>)
    return (
        <>
    <h1>Home Component</h1>
    <ul>{allOils}</ul>
    </>
    )
}

export default Home