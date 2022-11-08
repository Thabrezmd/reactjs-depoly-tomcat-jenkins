import { useNavigate, NavLink } from "react-router-dom";
import '../index.css'

const Home=()=>{
    const navigate = useNavigate()

    return (
        <>
        <h1>Welcome Home Page </h1>
            {/* <button className="btn btn-success" > Register </button> */}
            <div className="main">
            <NavLink to={'/register'} className="btn btn-primary">Register</NavLink>
            </div> 
            <div className="">
                <NavLink to={'/binary'} className="btn btn-primary">View</NavLink>
            </div>

            {/* <button className="btn btn-info" > View </button> */}
            
        </>
    )
}

export default Home;
