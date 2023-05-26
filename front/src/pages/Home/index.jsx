import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import style from "./index.module.css";
import { getAllSports } from "../../api/requests";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllSports().then((res) => {
      setData(res);
    });
  }, []);
  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
      <div className={style.div26}>
        <h2 style={{ textAlign: "center", fontSize: "42px", color: "black" }}>
          Top Courses That are open for Students
        </h2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <div className="card">
                <div className="img-top">
                  <img
                    className="card-img-top"
                    src="https://preview.colorlib.com/theme/gym/img/c1.jpg.webp"
                    alt="Card image cap"
                  />
                  <div
                    style={{
                      backgroundColor: "red",
                      top: "50%",
                      position: "absolute",
                      left: "5%",
                    }}
                  >
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      Cours Avialable
                    </p>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Running Classes</h5>
                  <p classNmae="card-text">275$</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="card">
                <div className="img-top">
                  <img
                    className="card-img-top"
                    src="https://preview.colorlib.com/theme/gym/img/c2.jpg.webp"
                    alt="Card image cap"
                  />
                  <div
                    style={{
                      backgroundColor: "red",
                      top: "50%",
                      position: "absolute",
                      left: "5%",
                    }}
                  >
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      Cours Avialable
                    </p>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Running Classes</h5>
                  <p classNmae="card-text">275$</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="card">
                <div className="img-top">
                  <img
                    className="card-img-top"
                    src="https://preview.colorlib.com/theme/gym/img/c3.jpg.webp"
                    alt="Card image cap"
                  />
                  <div
                    style={{
                      backgroundColor: "red",
                      top: "50%",
                      position: "absolute",
                      left: "5%",
                    }}
                  >
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      Cours Avialable
                    </p>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Running Classes</h5>
                  <p classNmae="card-text">275$</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="card">
                <div className="img-top">
                  <img
                    className="card-img-top"
                    src="https://preview.colorlib.com/theme/gym/img/c4.jpg.webp"
                    alt="Card image cap"
                  />
                  <div
                    style={{
                      backgroundColor: "red",
                      top: "50%",
                      position: "absolute",
                      left: "5%",
                    }}
                  >
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      Cours Avialable
                    </p>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Running Classes</h5>
                  <p classNmae="card-text">275$</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="card">
                <div className="img-top">
                  <img
                    className="card-img-top"
                    src="https://preview.colorlib.com/theme/gym/img/c5.jpg.webp"
                    alt="Card image cap"
                  />
                  <div
                    style={{
                      backgroundColor: "red",
                      top: "50%",
                      position: "absolute",
                      left: "5%",
                    }}
                  >
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      Cours Avialable
                    </p>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Running Classes</h5>
                  <p classNmae="card-text">275$</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <div className="card">
                <div className="img-top">
                  <img
                    className="card-img-top"
                    src="https://preview.colorlib.com/theme/gym/img/c6.jpg.webp"
                    alt="Card image cap"
                  />
                  <div
                    style={{
                      backgroundColor: "red",
                      top: "50%",
                      position: "absolute",
                      left: "5%",
                    }}
                  >
                    <p
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                      }}
                    >
                      Cours Avialable
                    </p>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Running Classes</h5>
                  <p classNmae="card-text">275$</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className={style.div5}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "35px",
            marginBottom: "30px",
          }}
        >
          We care about what we offer
        </h1>
        <h6 style={{ textAlign: "center", fontSize: "19px" }}>
          Who are in extremely love with eco friendly system.
        </h6>
        <div style={{ /*width: "80%", margin: "0 auto"*/ }}>
          <div
            style={{ /*display: "flex", flexDirection: "row", flexWrap: "wrap"*/ }}
          >
            <div className="container">
                <div className="row">
                <div className="col-3">
            {data &&
              data.map((sports) => {
                return (
                      <Card style={{/*width:"300px",height:"400px",marginLeft:"40px",marginBottom:"30px"*/}}>
                        <img
                          src={sports.imageUrl}
                          style={{maxWidth:"100%" ,height:"auto"}}
                        />
                        <h2 style={{fontSize:"20px"}}>{sports.title}</h2>
                        <p style={{fontSize:"10px"}}>{sports.description}</p>
                      </Card>
                );
              })}
              </div>
              </div>
              </div>
          </div>
        </div>
      </div>
      <div className={style.div}>
        <div className={style.over}>
          <h2>Top Courses That are open for Students</h2>
        </div>
        <div
          style={{
            width: "60%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 className={style.h1}>Huge Transaction in last Week</h1>
          <p className={style.p2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore<br></br>
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
          <a className={style.a3} href="#">
            Become a Member
          </a>
        </div>
      </div>
    </>
  );
};

export default index;
