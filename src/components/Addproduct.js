import React, { useState } from "react";
import Axios from "axios";

import Auth from "./Auth";
import { Navigate } from "react-router-dom";
import Navbar from "./navbar";

function AddProduct() {
  const [details, setDetails] = useState({
    name: "",
    description: "",
    image: "",
    allowed:""
  });
  const [error, setError] = useState({ error: null });
  const [success, setSuccess] = useState({ success: null });
  const [redirect, setRedirect] = useState({ redirect: null });

  let formD = new FormData();

  const Product = (details) => {
    console.log(details);
    formD.append("name", details.name);
    formD.append("description", details.description);
    formD.append("product_image", details.image);
    formD.append("allowed_courses",details.allowed)

    console.log(formD);

    Axios.post("http://localhost:3001/products/product",formD, {
      
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => {
        console.log(response.data);
        
        
        // setRedirect({ redirect: "/products" });
        // return <Navigate to="/products" />;
        setSuccess({success:"Product created successfully"})
        setDetails({allowed:"",name:"",description:"",image:""})
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setError({ error: error.response.data.error });
      });
  };

  const submitHandler = (event) => {
    console.log("hello");

    event.preventDefault();

    Product(details);
  };

  if (redirect.redirect) {
    return <Navigate to="/products" />;
  }

  return (
    <div>
      <Navbar />

      <form
        onSubmit={submitHandler}
        id="login-form"
        className="white-popup-block"
      >
        <div className="col-md-4 login-social"></div>
        <div className="col-md-8 login-custom">
          <h4>Add Product</h4>
          {error.error ? (
            <div className="col-md-12 alert alert-danger">{error.error}</div>
          ) : (
            ""
          )}
          {success.success ? (
            <div className="col-md-12 alert alert-success">{success.success}</div>
          ) : (
            ""
          )}
          <div className="col-md-12">
            <div className="row">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Name*"
                  type="name"
                  onChange={(e) =>
                    setDetails({ ...details, name: e.target.value })
                  }
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
                  onChange={(e) =>
                    setDetails({ ...details, description: e.target.value })
                  }
                  value={details.description}
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="allowed course*"
                  type="text"
                  onChange={(e) =>
                    setDetails({ ...details, allowed: e.target.value })
                  }
                  value={details.allowed}
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="image*"
                  type="file"
                  onChange={(e) =>
                    setDetails({ ...details, image: e.target.files[0] })
                  }
                  //   value={details.description}
                />
              </div>
            </div>
          </div>
          {/* <div className="col-md-12">
            <div className="row">
              <label htmlFor="login-remember">
                <input type="checkbox" id="login-remember" />
                Remember Me
              </label>
              <a title="Lost Password" href="#" className="lost-pass-link">
               
              </a>
            </div>
          </div> */}
          <div className="col-md-12">
            <div className="row">
              <button type="submit">Add</button>
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

export default AddProduct;
