import React,{useState} from 'react'
import Axios  from 'axios';
import {Navigate}  from "react-router-dom";

function RegisterForm() {

  const [details, setDetails] = useState({ email: "", password: "",name:"" });
  const [redirect, setRedirect] = useState({redirect:null})
  const [error,setError] = useState({error:null})



  const Register=details=>{
    Axios.post('http://localhost:3001/user/signup',{
      email:details.email,
      password:details.password,
      name:details.name
    }).then((response)=>{
      
      if(response.data.msg=='success'){
        setRedirect({redirect:'/login'})
        
      }
    }).catch((error)=>{console.log(error.response.data.msg);
    setError({error:error.response.data.msg})})
    
    
    
  }



  const submitHandler =e=>{
    e.preventDefault();
    Register(details);


  }
  if(redirect.redirect){
    return <Navigate to="/login" />
  }
  return (
    <form
        onSubmit={submitHandler}
        id="register-form"
        className="white-popup-block"
      >
        <div className="col-md-4 login-social">
          <h4>Register with social</h4>
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
          <h4>Register a new account</h4>
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
                  placeholder="User name*"
                  type="text"
                  onChange={e=>setDetails({...details,name:e.target.value})}
                  value={details.name}
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
                  type="text"
                  onChange={e=>setDetails({...details,password:e.target.value})}
                  value={details.password}
                />
              </div>
            </div>
          </div>
          {/* <div className="col-md-12">
            <div className="row">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Repeat Password*"
                  type="text"
                  onChange={e=>setDetails({...details,repeatPass:e.target.value})}
                  value={details.repeatPass}
                />
              </div>
            </div>
          </div> */}
          <div className="col-md-12">
            <div className="row">
              <button type="submit">Sign up</button>
            </div>
          </div>
          <p className="link-bottom">
            {/* Are you a member? <a href="#">Login now</a> */}
          </p>
        </div>
      </form> 
  )
}

export default RegisterForm