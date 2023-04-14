import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import "./login.css";
// import SideBar from "../../Component/Sidebar";
// import userImage from "../../Image/user.png";
import { useNavigate ,Link , useLocation } from "react-router-dom";
const Login = () => {
  // const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const [allow, setAllow] = useState(0);

  const handleChange = (key, e) => {
    setformData({ ...formData, [key]: e.target.value });
  };

  const handleClick = () => {
    if ((formData.email == "bilal") && (formData.password=='123')) {
      setAllow(1)
      // navigate("/tab");
    } else {
    
    }
  };
 

  return (
    <div style={{backgroundColor:'rgb(0,0,0)',height:'100vh'}}>
      <Grid container>
   
        <Grid item lg={12} style={{ paddingTop: "16%" }}>
          <div class="grid align__item">
            <div class="register" id="container">
           
              <Grid container style={{ justifyContent: "center" }}>
                <Grid item lg={6}>
                
                </Grid>
              </Grid>
              <h2 style={{ fontFamily: "Times New Roman, Times, serif",color:'white' }}>
                Login In
              </h2>

              <br></br>

              <form action="" method="" class="form">
                <div class="form__field">
                  <input
                    onKeyUp={handleClick} 
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e)}
                    style={{color:'white'}}
                  />
                </div>
      <br></br>
                <div class="form__field">
                  <input
                    onKeyUp={handleClick} 
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => handleChange("password", e)}
                    style={{color:'white'}}
                    
                  />
                </div>
      <br></br>
                <div class="form__field">
                <Link
                  to={{
                    pathname: '/tab',
                    search: '?allow=' + encodeURIComponent(allow),
                  }}
                ><button style={{cursor:'pointer',backgroundColor:'transparent',paddingLeft:'40px' ,paddingRight:'40px',border:'1px solid white',borderRadius:'10px',color:'white',paddingTop:'2%',paddingBottom:'2%'}}>Sign In</button>
                </Link>  
                </div>
              </form>
            </div>
          </div>
        </Grid>
       
      </Grid>
    </div>
  );
};

export default Login;
