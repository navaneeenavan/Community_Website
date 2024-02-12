
import { useState } from "react";
import {supabase} from "./supabaseclient.js"
import { useNavigate } from "react-router-dom";

function SignUp() {
    const[mail , setMail] = useState("");
    const[pass , setPass] = useState("");
    const navigate = useNavigate(); 
    const Handlelogin = async (e)=>
    {
        e.preventDefault();
        
        const { data, error } = await supabase.auth.signInWithPassword({
            email: mail,
            password: pass,
          })

          if(error)
          {
            alert(error);
          }
          else{
            localStorage.setItem("email", JSON.stringify(data.user.email));
            navigate("/auth")

          }
    }


    return (
        <div className="flex flex-col w-full h-screen bg-white space-y-10 items-center justify-center">
            <p>Please Enter your Authentication Credentials</p>
            <div className= "flex flex-col space-y-5"> 
            <p>Enter your Email</p>
            <input
              className="h-10 w-56 bg-gray-200 pl-5 border rounded-lg"
              type="text"
              placeholder="Email.."
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            ></input>
            </div>
            <div className= "flex flex-col space-y-5"> 
            <p>Enter your Password</p>
            <input
              className="h-10 w-56 bg-gray-200 pl-5 border rounded-lg"
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            ></input>
            </div>
            <div>
            <button
              className="h-10 w-20 bg-blue-300 text-white rounded-lg"
                onClick={Handlelogin}
            >
              Submit
            </button>
            </div>
            
        </div>
    )
}

export default SignUp
