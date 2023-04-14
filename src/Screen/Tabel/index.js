import * as React from "react";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { useNavigate  , Link , useLocation } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import SideBar from "../../Component/Sidebar";
const Tabel = () => {
  var location = useLocation();
  var navigate = useNavigate();

  const [data, setdata] = useState();

  const reader = new FileReader();

  function HandleClick(e) {
    setdata(e.target.innerText);
    // props.setEmail(e.target.innerText);
  }

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const allow = params.get('allow');
    if (allow === '1') {
    } else {
      navigate("/");
    }
  });
  return (
    <div>
      <Grid container>
        <Grid item lg={2.9}>
          {/* <SideBar email={props.email} /> */}
        </Grid>
        <Grid item lg={9}>
          <TableContainer component={Paper} style={{ width: "100%" }}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <b>UserName</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Email</b>
                  </TableCell>

                  {/* <TableCell align="center">
                    <b>Image</b>
                  </TableCell> */}
                </TableRow>
              </TableHead>
              {/* <TableBody>
                {props.todo.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{row.username}</TableCell>
                    <TableCell onClick={HandleClick} align="center">
                      {row.email}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody> */}
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default Tabel;
