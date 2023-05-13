import Profile from "../component/profile"
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <>
        <h1>My portfolio</h1>
            <Link to="/">Home</Link>
                <br/>
            <Link to="/product">Product</Link>        
        <Profile/>
        </>
    )
}

export default Home