import React,{useState} from 'react'
import { Navigate,NavLink } from "react-router-dom";
import Auth from './Auth';




function Navbar() {

  const [redirect, setRedirect] = useState({redirect:null})

  console.log(Auth.token);

  const onCourseClick=()=>{
    setRedirect({redirect:'/products'});
    return <Navigate to={'/products'} />

  }
  const onNewsClick=()=>{
    setRedirect({redirect:'/news'});
    return <Navigate to={'/news'} />

  }
  const loginClick=()=>{
    setRedirect({redirect:'/login'});
  }
  const registerClick=()=>{
    setRedirect({redirect:'/register'});
  }
  const addProdBtn=()=>{
    setRedirect({redirect:'/add-product'});
  }
  const addNewsBtn=()=>{
    setRedirect({redirect:'/add-news'});
  }
  const logoutClick=()=>{
    Auth.logout();
    setRedirect({redirect:'/login'})
  }

  const homeClick=()=>{
    setRedirect({redirect:'/'})
  }


  if(redirect.redirect){
    return <Navigate to={redirect.redirect} />
  }
  

  return (
    
    
    <nav className="navbar navbar-default navbar-sticky bootsnav">

        
        <div className="container">
          <div className="row">
            <div className="top-search">
              <div className="input-group">
                
                {/* <form action="#">
                  <input type="text" name="text" className="form-control" placeholder="Search"/>
                  <button type="submit">
                   
                  </button>
                </form> */}
              </div>
            </div>
          </div>
        </div>
       

        <div className="container">

          
          {/* <div className="attr-nav">
            <ul>
              <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
            </ul>
          </div>
           */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="index.html">
              <img src="assets/img/logo.png" className="logo" alt="Logo"/>
            </a>
          </div>
         

          
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
              <li className="">
                <a href="/" className="dropdown-toggle active" onClick={homeClick} data-toggle="dropdown" >Home</a>
                <ul className="dropdown-menu"> {Auth.isAuthenticated ? "hello" : "hey user"}</ul>
                {/* <ul className="dropdown-menu">
                  
                  <li><a href="index.html">Home Version One</a></li>
                  <li><a href="index-2.html">Home Version Two</a></li>
                  <li><a href="index-3.html">Home Version Three</a></li>
                  <li><a href="index-4.html">Home Version Four</a></li>
                  <li><a href="index-5.html">Home Version Five</a></li>
                  <li><a href="index-6.html">Home Version Six</a></li>
                  <li><a href="index-7.html">Home Version Serven <span className="badge">New</span></a></li>
                  <li><a href="index-onepage.html">Onepage Version One</a></li>
                  <li><a href="index-2-onepage.html">Onepage Version Two</a></li>
                  <li><a href="index-3-onepage.html">Onepage Version Three</a></li>
                  <li><a href="index-4-onepage.html">Onepage Version Four</a></li>
                  <li><a href="index-5-onepage.html">Onepage Version Five</a></li>
                  <li><a href="index-6-onepage.html">Onepage Version Six</a></li>
                </ul> */}
              </li>
              {/* <li className="dropdown megamenu-fw">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages</a>
                <ul className="dropdown-menu megamenu-content" role="menu">
                  <li>
                    <div className="row">
                      <div className="col-menu col-md-3">
                        <h6 className="title">Gallery</h6>
                        <div className="content">
                          <ul className="menu-col">
                            <li><a href="gallery-2-colum.html">Gallery Two Colum</a></li>
                            <li><a href="gallery-3-colum.html">Gallery Three Colum</a></li>
                            <li><a href="gallery-4-colum.html">Gallery Four Colum</a></li>
                            <li><a href="gallery-6-colum.html">Gallery Six Colum</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-3">
                        <h6 className="title">Advisor</h6>
                        <div className="content">
                          <ul className="menu-col">
                            <li><a href="advisor-carousel.html">Advisor Carousel</a></li>
                            <li><a href="advisor-2-colum.html">Advisor Two Colum</a></li>
                            <li><a href="advisor-3-colum.html">Advisor Three Colum</a></li>
                            <li><a href="advisor-carousel-2.html">Advisor Carousel Two</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-3">
                        <h6 className="title">User Pages</h6>
                        <div className="content">
                          <ul className="menu-col">
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="edit-profile.html">Edit Profile</a></li>
                            <li><a href="login.html">login</a></li>
                            <li><a href="register.html">register</a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-menu col-md-3">
                        <h6 className="title">Other Pages</h6>
                        <div className="content">
                          <ul className="menu-col">
                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="faq.html">Faq</a></li>
                            <li><a href="pricing-table.html">Pricing Table</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="404.html">Error Page</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li> */}

              {Auth.isAuthenticated ? <li className="">

<a href="/products" className="dropdown-toggle active" onClick={onCourseClick} data-toggle="dropdown" >Downloadble Materials</a>

</li> : ""}
              
              {/* <li className="dropdown">
                <a href="#" className="dropdown-toggle active" data-toggle="dropdown" >Teachers</a>
                <ul className="dropdown-menu">
                  <li><a href="teachers.html">Advisor</a></li>
                  <li><a href="teachers-details.html">Advisor Details</a></li>
                </ul>
              </li> */}
              
              <li className="">
                <a  href="/news" className="dropdown-toggle" data-toggle="dropdown" onClick={onNewsClick} >News</a>
                {/* <ul className="dropdown-menu">
                  <li><a href="blog-standard.html">Blog Standard</a></li>
                  <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                  <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                  <li><a href="blog-single-standard.html">Single Standard</a></li>
                  <li><a href="blog-single-left-sidebar.html">Single Left Sidebar</a></li>
                  <li><a href="blog-single-right-sidebar.html">Single Right Sidebar</a></li>
                </ul> */}
              </li>
              {/* <li>
                <a href="contact.html">contact</a>
              </li> */}
              <li className="">
                <a href="#" className="dropdown-toggle active" data-toggle="dropdown" >{localStorage.getItem("jwt") ? "hello" : <button className="btn" onClick={loginClick}>Login</button>}</a>
                
                
              </li>
              <li className="">
                <a href="#" className="dropdown-toggle active" data-toggle="dropdown" >{localStorage.getItem("jwt") ? <button className="btn" onClick={logoutClick}>Logout</button> : " "}</a>
                
                
              </li>
              <li className="">
                <a href="#" className="dropdown-toggle active" data-toggle="dropdown" >{(localStorage.getItem("jwt") && localStorage.getItem("userType")=="admin") ? <button className="btn" onClick={addProdBtn}>Add Product</button> : ""}</a>
                
                
              </li>
              <li className="">
                <a href="#" className="dropdown-toggle active" data-toggle="dropdown" >{localStorage.getItem("jwt") && localStorage.getItem("userType")=="admin" ? <button className="btn" onClick={addNewsBtn}>Add News</button> : ""}</a>
                
                
              </li>
            </ul>
          </div>
        </div>

      </nav>
  )
}

export default Navbar