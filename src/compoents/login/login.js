import "./login.css"
import { useNavigate } from "react-router-dom"
function Login(){

    const navigate = useNavigate();

    function handleClick(){
       navigate("/chat")
    }
    return(
        <div className="login">
            <div className="container">
                <div className="header">
                    Welcome to CricGPT
                </div>
                <div className="user-section">
                    <div className="username">
                        <label htmlFor="username">Username</label>
                        <input id="username" placeholder="Enter  Username" />
                    </div>
                    <div className="Password">
                        <label htmlFor="Password">Password</label>
                        <input id="Password" placeholder="Enter  Password" />
                    </div>
                </div>
                <div className="footer">
                    <button className="button-signin" onClick={handleClick}>Sign In</button>
                    <button className="button-signup" >Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Login