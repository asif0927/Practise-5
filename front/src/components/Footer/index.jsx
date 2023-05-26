import React from 'react'
import style from "./index.module.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FacebookIcon from '@mui/icons-material/Facebook';

const index = () => {
  return (
   <footer className={style.footer}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
            <p >Copyright ©2023 All rights reserved | This template is made with by <span className={style.span}>Colorlib</span></p>
        </Grid>
        <Grid item xs={6}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={3} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Card>
      <CardContent>
           <FacebookIcon/>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={3} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Card>
      <CardContent>
           <FacebookIcon/>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={3} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Card>
      <CardContent>
           <FacebookIcon/>
      </CardContent>
    </Card>
        </Grid>
        <Grid item xs={3} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Card>
      <CardContent>
           <FacebookIcon/>
      </CardContent>
    </Card>
        </Grid>
      </Grid>
      

      
    </Box>
    </Grid>
    </Grid>
    </Box>
   </footer>
  )
}

export default index