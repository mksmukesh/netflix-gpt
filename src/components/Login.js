import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

const [isSignedIn,setIsSignedIn]=useState(true);
    const handleSignIn=()=>{
           setIsSignedIn(!isSignedIn);
    }
  return (
    <div className="">
      <Header />

      <div className=" absolute ">
        <img
          alt="bg-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        />
      </div>

      <form className=" absolute my-36 mx-auto px-12 py-14 left-0 right-0 w-3/12  bg-black text-white rounded-lg bg-opacity-75 ">
        <h1 className="font-bold text-2xl p-2 "> {isSignedIn?"Log In" : "Sign Up"}</h1>
        {!isSignedIn && <input
          className="p-2 my-2 w-full rounded-lg text-black bg-gray-300"
          type="text "
          placeholder="Name"
        />}
        {!isSignedIn && <input
          className="p-2 my-2 w-full rounded-lg text-black bg-gray-300"
          type="text "
          placeholder="Phone/Mobile no."
        />}
        
        <input
          className="p-2 my-2 w-full rounded-lg text-black bg-gray-300"
          type="text "
          placeholder="Email Address"
        />
        
        <input
          className="p-2 my-2  w-full rounded-lg  text-black bg-gray-300"
          type="password "
          placeholder="Password"
        />
        
        <button className="p-2 my-4  w-full rounded-lg bg-red-600">{isSignedIn?"Log In":"Sign Up"}</button>
        <p className="cursor-pointer" onClick={handleSignIn}>{isSignedIn?"New to Netflix? Sign up now.":"Already Signed Up, Login Now."}</p>
      </form>
    </div>
  );
};

export default Login;
