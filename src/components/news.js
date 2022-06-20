import React, { useState,useEffect } from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";
import Auth from "./Auth";
import Navbar from "./navbar";

function News() {
  const [redirect, setRedirect] = useState({ redirect: null });
  const [error, setError] = useState({ error: null });

  const [data,setData] = useState({news:[]});
  let pro_image=""
  
  
useEffect(() => {
    Axios.get("http://localhost:3001/news/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          setData({news:response.data})
        })
        .catch((error) => {
          console.log(error);
          if(error.response.data.name=="TokenExpiredError")
          {
            Auth.isAuthenticated=false
          }
          setError({ error: error });
        });
},[])
  



  if (!Auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if(data.news){
    return (
        <div>
            
        <Navbar/>
        <div className="blog-area full-blog standard full-blog default-padding">
        <div className="container">
            <div className="row">
                <div className="blog-items">
                    <div className="blog-content col-md-10 col-md-offset-1">
                        
                    {data.news.map(news=>(
                         pro_image=`http://localhost:3001/images/${news.image}`,
                        <div className="single-item">
                            <div className="item">
                                <div className="thumb">
                                    <a href="#"><img src={pro_image} alt="Thumb"/></a>
                                    <div className="date">
                                        {/* <h4><span>24</span> Nov, 2018</h4> */}
                                    </div>
                                </div>
                                <div className="info">
                                    <h3>
                                        <a href="#">{news.name}</a>
                                    </h3>
                                    <p>
                                        {news.description}
                                    </p>
                                    {/* <a href="#">Read More <i className="fas fa-angle-double-right"></i></a> */}
                                    <div className="meta">
                                        <ul>
                                            <li>
                                                <a href="#"><i className="fas fa-user"></i> Author</a>
                                            </li>
                                            <li>
                                                {/* <a href="#"><i className="fas fa-comments"></i> 23 Comments</a> */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                        
                        
                       
                        {/* <div className="row">
                            <div className="col-md-12 pagi-area">
                                <nav aria-label="navigation">
                                    <ul className="pagination">
                                        <li><a href="#">Previous</a></li>
                                        <li className="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div> */}
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
      );
  }
  return (
    <div>
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        styles={"background-image: url(assets/img/2440x1578.png);"}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>News</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">
                    <i className="fas fa-home"></i> Home
                  </a>
                </li>
                <li>
                  <a href="#">Page</a>
                </li>
                <li className="active">News</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default News;
