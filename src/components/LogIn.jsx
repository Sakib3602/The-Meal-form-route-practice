import { useState } from "react";
import { Link } from "react-router-dom";


const LogIn = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        const get = {
            name : name,
            email : email,
            pass : pass,
        }
        console.log(get)
        
        
    }


    return (
       <div>
         <div className="w-[600px] p-10 h-[500px] bg-purple-300 m-auto rounded-3xl">
            <form onSubmit={handleSubmit}>
                <h1 className="text-center text-5xl font-[700]">Log In</h1>
                <hr className="mt-5" />
                <h1 className="text-[20px] mt-3 font-[600]">Your Name</h1>
                
                <input required placeholder="Your Name" onChange={(e)=> setName(e.target.value)} className="w-full h-11 rounded-2xl mt-3 p-3" type="text" name="" id="" />
                <h1 className="text-[20px] mt-3 font-[600]">Your Email</h1>

                <input required placeholder="Your Email" onChange={(e)=> setEmail(e.target.value)} className="w-full h-11 rounded-2xl mt-3  p-3" type="email" name="" id="" />
                <h1 className="text-[20px] mt-3 font-[600]">Your Password</h1>

                <input required placeholder="Your Password" onChange={(e)=> setPass(e.target.value)} className="w-full h-11 rounded-2xl mt-3  p-3"  type="password" name="" id="" />
                <button className="btn btn-secondary mt-4 w-[520px]">Submit</button>
            </form>
            

                       
        </div>
        <Link to={'/meals'} >

            <button className="btn btn-primary ">See Card With Out Log IN</button>
        </Link>
       </div>
    );
};

export default LogIn;