import React, { useState } from "react";
import Axios from "axios";

import Auth from "./Auth"
import {Navigate}  from "react-router-dom";
import Navbar from "./navbar";

function AdminLogin() {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error,setError] = useState({error:null})
  const [redirect, setRedirect] = useState({redirect:null})



  const Login=details=>{
    Axios.post('http://localhost:3001/admin/login',{
      email:details.email,
      password:details.password
    }).then((response)=>{
      console.log(response.data.token);
      Auth.token=response.data.token;
      Auth.authenticated= true;
      localStorage.setItem("jwt",response.data.token)
      if(response.data.userType){
        localStorage.setItem("userType",response.data.userType)
      }
      setRedirect({redirect:"/products"})
      return <Navigate to="/products" />
      

      

    })
    .catch((error)=>{
      console.log(error.response.data.error);
      setError({error: error.response.data.error})
    })
    
  }

  const submitHandler = (event) => {
    console.log("hello");

    event.preventDefault();
    Login(details);
  };

  if(redirect.redirect){
    return <Navigate to="/" />
  }

  if(localStorage.getItem("jwt") ){
    return <Navigate to="/" />
  }


  
  

  return (
    <div>
      <Navbar/>
        
      <form
        onSubmit={submitHandler}
        
        id="login-form"
        className="white-popup-block"
        
      >
        <div className="col-md-4 login-social">
          <h4>Login with </h4>
          <ul>
            <li className="facebook">
              
                <i className="fab fa-facebook-f"></i>
              
            </li>
            <li className="twitter">
              
                <i className="fab fa-twitter"></i>
              
            </li>
            <li className="linkedin">
              
                <i className="fab fa-linkedin-in"></i>
              
            </li>
          </ul>
        </div>
        <div className="col-md-8 login-custom">
          <h4>ADMIN LOGIN</h4>
          {error.error ? <div className="col-md-12 alert alert-danger">{error.error}</div> :""}
          <div className="col-md-12">
            <div className="row">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Email*"
                  type="email"
                  onChange={e=>setDetails({...details,email:e.target.value})}
                  value={details.email}
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Password*"
                  type="password"
                  onChange={e=>setDetails({...details, password:e.target.value})}
                  value={details.password}

                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <label htmlFor="login-remember">
                <input type="checkbox" id="login-remember" />
                Remember Me
              </label>
              {/* <a title="Lost Password" href="#" className="lost-pass-link"> */}
                
              {/* </a> */}
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <button type="submit">Login</button>
              
            </div>
          </div>
          <p className="link-bottom">
            {/* Not a member yet? <a href="#">Register now</a> */}
          </p>
        </div>
      </form>

      

      
    </div>
  );
}

export default AdminLogin;
