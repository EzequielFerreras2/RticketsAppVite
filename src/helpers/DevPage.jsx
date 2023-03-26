import React from 'react'
import imgx from "../img/DevP.png";
import Grid from '@mui/material/Grid'

const DevPage = () => {
  return (
    <div>
      <Grid container
      row
      alignContent="center"
      alignItems="center" >
        <Grid item>
          <img style={{height:1000}} src={imgx} alt="DevImg"/>
        </Grid>
      </Grid>
        
    </div>
  )
}

export default DevPage