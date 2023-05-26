import React from 'react'
import style from "./index.module.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';
const index = () => {
  return (
   <>
     <header className={style.header}>
         <div style={{width:"80%",margin:"0 auto"}}>
         <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
            <span className={style.span}>
            We believe we helps people<br></br>for happier lives
            </span>
        </Grid>
        <Grid item xs={4}>
          <img src="https://preview.colorlib.com/theme/gym/img/logo.png.webp" alt="dsdsdws" style={{maxWidth:"100%",height:"auto"}} />
        </Grid>
        <Grid item xs={4} >
        <a class="tel" href="tel:+880 123 12 658 439" className={style.a}>+880 123 12 658 439</a>
        <a href="tel:+880 123 12 658 439"><span className={style.span2}><CallIcon/></span></a>
        </Grid>
      </Grid>
    </Box>
         </div>
         <hr className={style.hr}/>
         <div style={{width:"85%",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center"}}>
               <nav className=''>
                <ul className={style.li}>
                    <Link to="/home"><li className={style.li}>Home</li></Link>
                    <Link to="/add"><li  className={style.li}>Add</li></Link>
                    <li  className={style.li}>Plan</li>
                    <li  className={style.li}>Plan</li>
                    <li  className={style.li}>Plan</li>
                    <li  className={style.li}>Plan</li>
                </ul>
               </nav>
         </div>
     </header>
     <section className={style.section}>
        <div className={style.over}></div>
        <div style={{width:"60%",margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
              <h2 className={style.h2}>REAL FITNESS <br></br>DEPENDS ON EXERCISE</h2>
              <p className={style.p2}>SHAPE YOUR BODY WELL.</p>
        </div>
     </section>
   </>
  )
}

export default index