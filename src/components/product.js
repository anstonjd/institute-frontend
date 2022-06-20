import React, { useState,useEffect} from "react";
import Axios from "axios";
import { Navigate } from "react-router-dom";
import Auth from "./Auth";

function Products() {
  const [redirect, setRedirect] = useState({ redirect: null });
  const [error, setError] = useState({ error: null });

  const [data,setData] = useState({products:[]});
  


  const getData=async()=>{
    const {data}=await Axios.get("http://localhost:3001/products", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        }
        
      });
      setData(data);
  };

  useEffect(() => {
    getData();
  }, [])
  

    
         
    // .then((response) => {
    //   console.log(response.data);
    //   setData({products:response.data})
    // })
    
    

  

  if (!Auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if(data){
    return (
        <div>
          <div
            className="breadcrumb-area shadow dark text-center bg-fixed text-light"
            styles={"background-image: url(assets/img/2440x1578.png);"}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1>Courses</h1>
                  <ul className="breadcrumb">
                    <li>
                      <a href="#">
                        <i className="fas fa-home"></i> Home
                      </a>
                    </li>
                    <li>
                      <a href="#">Page</a>
                    </li>
                    <li className="active">Course</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="popular-courses default-padding bottom-less without-carousel">
            <div className="container">
              <div className="row">
                <div className="popular-courses-items bottom-price">
                <div className="col-md-4 col-sm-6 equal-height" >
                {data.products.map(product=>(
                  
                    <div className="item" key={product.id}>
                      <div className="thumb">
                        {/* <a href="#">
                                        <img src="assets/img/800x600.png" alt="Thumb"/>
                                    </a> */}
                        <div className="overlay">
                          <a className="btn btn-theme effect btn-sm">
                            <i className="fas fa-chart-bar"></i> View Now
                          </a>
                        </div>
                      </div>
                      <div className="info">
                        {/* <div className="author-info">
                                        <div className="thumb">
                                            <a href="#"><img src="assets/img/100x100.png" alt="Thumb"/></a>
                                        </div>
                                        <div className="others">
                                            <a href="#">Munil Druva</a>
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <span>4.5 (23,890)</span>
                                            </div>
                                        </div>
                                    </div> */}
                        <h4>
                          <a href="#">{product.name}</a>
                        </h4>
                        <div className="cats">
                          <a href="#">Education</a>
                          <a href="#">Science</a>
                        </div>
                        <p>
                          Would day nor ask walls known. But preserved advantage are
                          but and certainty earnestly enjoyment.
                        </p>
                        <div className="bottom-info">
                          {/* <ul>
                                            <li>
                                                <i className="fas fa-user"></i> 6,690
                                            </li>
                                            <li>
                                                <i className="fas fa-clock"></i> 16:00
                                            </li>
                                        </ul> */}
                          <div className="price-btn">Free</div>
                        </div>
                      </div>
                    </div>
                  
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      );
  }
//   return (
//     <div>
//       <div
//         className="breadcrumb-area shadow dark text-center bg-fixed text-light"
//         styles={"background-image: url(assets/img/2440x1578.png);"}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <h1>Courses</h1>
//               <ul className="breadcrumb" >
//                 <li>
//                   <a href="#">
//                     <i className="fas fa-home"></i> Home
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#">Page</a>
//                 </li>
//                 <li className="active">Course</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </div>
//   );
}

export default Products;
