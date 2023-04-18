import { Link, Route, Routes, useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";


const Home = () => <h1>Home</h1> 
const Projects = ()  => <h1>Projects</h1>
const NotFound = () => <p>404</p>


const Register = () => {

    return (
        <div>
        <p>Register</p>
        <RegistrationForm/>
        </div>
    )
}

const LogIn = () => {
    return (
        <div>
        <p>LogIn</p>
        <LoginForm/>
        </div>
    )
}
 
const Routing = () => {
    return (
        <div>
            <div>
                <Link to = "/">Home</Link>
                <br/>
                <Link to = "/LogIn">LogIn</Link>
                <br/>
                <Link to = "/Register">Register</Link>
            </div>
        <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path = "/LogIn" element = {<LogIn/>}/>
            <Route path = "/Register" element = {<Register/>} />
        </Routes>

        
        </div>
    )
}

export default Routing;