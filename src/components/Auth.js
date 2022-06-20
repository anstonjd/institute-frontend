class Auth {
    constructor() {
      this.authenticated = false;
      this.token=null;
    }
  
    login(cb) {
      this.authenticated = true;
      cb();
    }
  
    logout() {
      this.authenticated = false;
      this.token = null;
      localStorage.removeItem("jwt");
      localStorage.removeItem("userType");
      
    }
  
    isAuthenticated() {
      console.log(localStorage.getItem("jwt"));
      if(localStorage.getItem("jwt") == null) {
        this.authenticated=false
      }
      else{
        this.authenticated = true
      }
      return this.authenticated;
    }
    getToken(){
        return this.token;
    }
  }
  
  export default new Auth();