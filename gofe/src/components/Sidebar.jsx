import React from 'react'
import upLogo from '../assets/upVector.png';
import downLogo from '../assets/DownVector.png'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button';
function Sidebar() {
    return (
        <>
        {/* <div>
        cxvdfcx b gfvcbvbvcb fv
        </div> */}
        <div style={{
            width: '15%', background: '#060A5A', height: "100vh",padding: '24px 12px 24px 12px'
        }}>
            <div style={{
        display: 'flex',
      
        // justifyContent:"space-between"
        
      }}>
                <div style={{ display: 'grid' }}>
                    <img src={upLogo} alt="fireSpot" />
                    <img src={downLogo} alt="fireSpot" />
                </div>
                <Typography sx={{fontFamily:'Inter', textTransform: 'capitalize',color:'white',paddingLeft:2}} variant="h6" >Connect More</Typography>
            </div>
           <Button sx={{background:'#444DF2',width:'100%', marginTop:2}}>
           <Typography sx={{fontFamily:'Inter', textTransform: 'capitalize',color:'white',padding: 0.5}} variant="buttoon" >Add User</Typography>
           </Button>
        </div>
        </>
    )
}

export default Sidebar