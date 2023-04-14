import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useNavigate  , Link , useLocation } from 'react-router-dom';
import { Buffer } from 'buffer';
import axios from 'axios'

import "./index.css";
import { Container } from "@mui/material";


const SideBar = () => {
  var location = useLocation();
  var navigate = useNavigate();
  
  
  const [imagedd, setImage] = useState([]);
  const [data, setdata] = useState();
  const [todo, setTodo] = useState([]);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);



async function HandleClick(e) {
    let emailValue = e.target.innerText;
     if (emailValue === undefined) {
      return;
    }
      fetch("http://localhost:8081/image?id=8")
        .then(response => response.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob);
          console.log(url);
        }); 
}
//////////////////
async function chackimgs(e){
  let emailValue = e.target.value;
  console.log(emailValue);
  const imageConvert = await fetch( "https://mmitairdrop.com:8081/image?email=" + emailValue)
  const Converted = await imageConvert.json()
  console.log(Converted.length)
  await setdata(Converted.length)
}
 //////copy//////
 function copy(e) {
  var copyText = e.target.innerText;
  console.log(copyText)
  var textField = document.createElement("textarea");
  textField.innerText = copyText;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand("copy");
  textField.remove();
  Swal.fire({  
    icon: 'success',  
    title: 'Copy To Clipboard.', 
    showConfirmButton: false,  
    timer: 500   
  }); 
}
//////copy//////



  const GetData = async () => {
    let response = await (
      await fetch("https://mmitairdrop.com:8081/getfilterdata")
    ).json();
    
        const walletAddressRegExp = /^(0x)?[0-9a-fA-F]{40}$/;
        for (var i = 0; i < response.length; i++) {
            if (response[i].address === null || walletAddressRegExp.test() === false) {
              response.splice(i, 1)
              i--; 
            }
          console.log(response)
        }
  };

  const GetWalletData = async () => {

    const preloader = document.getElementById("preloader");
    const mintUI = document.getElementById("mintUI");
    let isLoading = false;

    if (isLoading) {
      return;
    }

    isLoading = true;
    preloader.style.display = "block";
    mintUI.style.display = "none";
    try {

    let response = await (
      await fetch("https://mmitairdrop.com:8081/getfilterdata")
    ).json();
  
     const walletAddressRegExp = /^(0x)?[0-9a-fA-F]{40}$/;
     var igData = [];   
     for(let j = 0 ; j < response.length ; j++){
            // console.log(response.length)
          let responseDetail = await (
            await fetch("https://mmitairdrop.com:8081/imagedatas?email=" + response[j].email)
          ).json();
          let a = await responseDetail[0]
          try{
          if (a.address === null || walletAddressRegExp.test(a.address) === false) {
          }else{
            igData.push(a)
          }
        }catch(err){if(err){console.log(err)}}
        }  
        await setImage(igData)
        await setStatus('Sorted Data')
      }catch (error) {
        console.log(error);
      } finally {
        isLoading = false;
        preloader.style.display = "none";
        mintUI.style.display = "block";
      }
  };
  const GetWalletUnSortData = async () => {

    const preloader = document.getElementById("preloader");
    const mintUI = document.getElementById("mintUI");
    let isLoading = false;

    if (isLoading) {
      return;
    }

    isLoading = true;
    preloader.style.display = "block";
    mintUI.style.display = "none";
    try {


    let response = await (
      await fetch("https://mmitairdrop.com:8081/getdataregister?email=ammar@gmail.com")
    ).json();
  
     const walletAddressRegExp = /^(0x)?[0-9a-fA-F]{40}$/;

     for (var i = 0; i < response.length; i++) {
         
      if (response[i].address === null || walletAddressRegExp.test(response[i].address) === false  ) {
       
        response.splice(i, 1)
        i--; 
      }
    
  }
        await setImage(response)
        await setStatus('UnSort Data')
      }catch (error) {
        console.log(error);
      } finally {
        isLoading = false;
        preloader.style.display = "none";
        mintUI.style.display = "block";
      }
        
  };
  const getItemsForCurrentPage = () => {
    const startIndex = (currentPage - 1) * 16;
    const endIndex = startIndex + 16;
    return imagedd.slice(startIndex, endIndex);
  };

//////////////////
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const allow = params.get('allow');
    if (allow === '1') {
    } else {
      navigate("/");
    }
  });

  useEffect(() => {
    console.log(imagedd)
    setTotalPages(Math.ceil(imagedd.length / 16))
  });

  useEffect(() => {
  }, [totalPages , todo , imagedd , data , email,status]);

  useEffect(() => {
    GetWalletUnSortData()
  }, []);


  return (
    <>
          
<div id="preloader" class="loader">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
      <Grid  id="mintUI" container>
    <Container>
    <Grid container spacing={2}>
        <Grid style={{textAlign:'center',marginTop:'15px'}} item xs={4}>
        <Button onClick={GetWalletUnSortData}  variant="contained" disableElevation>
          UnSorted Data
        </Button>
        </Grid>
        <Grid style={{marginBottom:'10px'}} item xs={4}>
            <h3 style={{color:'white', marginTop:'10px',marginBottom:'-5px',textAlign:'center'}}>MMIT AirDrop {status}</h3>
         <h6 style={{color:'white', marginTop:'10px',marginBottom:'5px',textAlign:'center'}}>All Members {status} Status</h6>
        </Grid>
        <Grid style={{textAlign:'center',marginTop:'15px'}} item xs={4}>
        <Button onClick={GetWalletData} variant="contained" disableElevation>
        Sorted Data
        </Button>
        </Grid>
      </Grid>
    </Container>

        {/* Sidebar */}
   
        <Grid item lg={12}>
          <TableContainer component={Paper} style={{ width: "100%" }}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                <TableCell align="left">
                    <b>S.No</b>
                  </TableCell>
                <TableCell align="left">
                    <b>Address</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>UserName</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Email</b>
                  </TableCell>

                  <TableCell align="center">
                    <b>Bind Status</b>
                  </TableCell>
                  <TableCell  align="center">
                    <b>Snap Status</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {todo.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.username}</TableCell>
                    <TableCell onClick={HandleClick} align="center">
                      {row.email}
                    </TableCell>
                  </TableRow>
                ))} */}
             
             {getItemsForCurrentPage().map((row, index) => (
                         
                         <TableRow
                              key={index}
                              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                              <TableCell style={{width:'5px'}} align="left">{row.id}</TableCell>
                              <TableCell onClick={copy} align="left">{row.address}</TableCell>
                              <TableCell align="center">{row.username}</TableCell>
                             
                              <TableCell onClick={HandleClick} align="center">
                                {row.email}
                              </TableCell> 
                              <TableCell align="left">
                              <p id="adrs" style={{display:'none'}}>{row.address}</p>
                                {row.address !== null ?
                                <button className="button"  style={{background:'transparent',fontSize:'14px',border:'0px'}} data-tooltip={row.address.substr(0 , 6)+'...'+row.address.substr(36 , 41)}><i class="fa fa-check"></i></button>
                                  : 
                                <button className="button" style={{background:'transparent',fontSize:'14px',border:'0px'}} > <i class="fa fa-circle-thin"></i></button>
                                }
                              </TableCell> 
                              <TableCell align="right">
                              {/* <button onMouseOver={chackimgs} value={row.email} style={{fontSize:'14px'}}>Chack <i class="fa fa-file-photo-o"></i></button> */}
                              <div className="button" data-tooltip={data >= 4 ? 'Varified':'NonVarified'}>
                                <div className="button-wrapper">
                                  <div className="text"><button onMouseOver={chackimgs} value={row.email} style={{fontSize:'14px',color:'white',background:'transparent',border:'0px'}}>Chack <i class="fa fa-file-photo-o"></i></button></div>
                                  <span className="icon">
                                   {data}
                                  </span>
                                </div>
                              </div>
                              </TableCell> 
                              
                            </TableRow>
                          
                        ))}

                 
                
                  
                  
                 
               
             
              </TableBody>
            </Table>
            <Container style={{width:'100%', textAlign:'center'}}>
    <Button 
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  <span> No: {currentPage} </span>
                  <span>Total Pages: {totalPages} </span>
                  <Button
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                  
                  
             
    </Container>
          </TableContainer>
    
        </Grid>
      </Grid>
    </>
  );
};

export default SideBar;
