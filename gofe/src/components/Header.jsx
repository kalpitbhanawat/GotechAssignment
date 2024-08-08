import React from 'react'
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
function Header({text}) {
  return (
    <>
    <div  style={{
        display: 'flex',
        justifyContent:"space-between",
        height:'84px'
        
      }}>
    <Typography sx={{fontFamily:'Inter'}} variant="h5" component="h2">
  {text}
</Typography>
<TextField
      variant="standard"
      placeholder="Search..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{ width: 300,height:36,background:"#F2F2F2" ,alignSelf:'center'}}
    />
    </div>
    <Divider></Divider>
</>
  )
}

export default Header
