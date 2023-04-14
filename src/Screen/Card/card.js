import Grid from "@mui/material/Grid";
import "./card.css";
import MultipleSideBar from "../../Component/Sidebar";
import { useState, useEffect } from "react";
import { useNavigate  , Link , useLocation } from 'react-router-dom';
import user from "../../Image/user.png";
const Card = () => {
  var location = useLocation();
  var navigate = useNavigate();
  
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const data = params.get('data');
    if (data.length <= 0 ) {
      navigate("/");
    } else {
      setTodo(data)
    }
  });
  useEffect(() => {
  }, [todo]);

  // fetchData();
  // const fetchData = async () => {
  //   let response = await (
  //     await fetch("https://mmitairdrop.com:8081/getdataregister")
  //   ).json();
  //   await setTodo(response);
  //   console.log(todo)
  // };

  return (
    <div>
      <Grid container >
        <Grid item lg={2.4} >
          <MultipleSideBar />
        </Grid>
        <Grid item lg={0.6}></Grid>
        <Grid item lg={9} >
          <Grid
            container
            style={{ justifyContent: "center", gap: "30px", marginTop: "20px" }}
          >
            {todo.map((item) => {
              // let addressSub = item.address;
              // let result = addressSub.substring(0, 12);
              
              // "..." +
              // addressSub.substring(6, 12);
              return (
                <Grid item lg={3.5} className="container">
                  {/* <img src={user} className="user_img" />
                  <p>Name:{item.name}</p>
                  <p>Email:{item.username}</p>
                  <p style={{marginBottom:'30px'}}>Address:{result}</p> */}
                </Grid>
              );
            })}
          </Grid>
          {/* <Grid container>
            {console.log("", todo.name)}
            {todo.map((item) => {
              let text1 = item.address;
              let result =
                text1.substring(0, 5) + "..." + text1.substring(11, 17);
              return (
                <div>
                  <Grid item lg={11.9} style={{width:'100%'}}>
                    <div class="container"  >
                      <div class="wrapper">
                        <div class="banner-image"> </div>
                        <br></br>

                        <p>Name:{item.name}</p>
                        <p>Email:{item.username}</p>
                        <p>Address:{result}</p>
                      </div>
          
                    </div>
                  </Grid>
                </div>
              );
            })}
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
