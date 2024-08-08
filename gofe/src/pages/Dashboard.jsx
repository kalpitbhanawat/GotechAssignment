import React, { useEffect,useState } from 'react'
import Header from '../components/Header'
import { Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import deleteLogo from '../assets/icon-trash.png';
function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { name, calories, fat, carbs, protein };
}
const columns = [
    { item: 'Uername' },
    { item: 'Email' },
    { item: 'SentMails' },
    { item: 'Activity time' },
    { item: 'Activity State' }
]

function Dashboard() {
    const [age, setAge] = React.useState('');
    const [rows,setRows] = useState([])
    const [selected, setSelected] = useState([]);
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    
    useEffect(() => {
         // Use this line if you're in a Node.js environment
         const fetchData = async () => {
            try {
              const response = await axios.get('http://localhost:3001/get-data');
              setRows(response?.data.rows);
              console.log(response)
            //   setLoading(false);
            } catch (err) {
            //   setError(err);
            //   setLoading(false);
            }
          };
      
          fetchData();
    }, []);
    return (
        <>


            <Header text="Dashboard"></Header>
            <div style={{
                display: 'flex',
                justifyContent: "space-between"

            }}>
                <Typography sx={{ fontFamily: 'Inter' }} variant="h6" component="h2">All Users</Typography>
                <FormControl >
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead >
                        <TableRow >
                            {/* {
                columns.map((row)=>{
                    <TableCell sx={{background:'pink'}}>{row.name}</TableCell>
                })
            } */}
                            {/* <TableCell sx={{background:'#CCCCCC'}}>Dessert (100g serving)</TableCell> */}
                            <TableCell sx={{ background: '#CCCCCC' }} align="left">
                                <Typography sx={{ fontFamily: 'Inter', textTransform: 'capitalize', fontWeight: 'bold' }} variant="button" >Uername</Typography>
                            </TableCell>
                            <TableCell sx={{ background: '#CCCCCC' }} align="left">
                                <Typography sx={{ fontFamily: 'Inter', textTransform: 'capitalize', fontWeight: 'bold' }} variant="button" >E-mail</Typography>
                            </TableCell>
                            <TableCell sx={{ background: '#CCCCCC' }} align="left">
                                <Typography sx={{ fontFamily: 'Inter', textTransform: 'capitalize', fontWeight: 'bold' }} variant="button" >Sent mails</Typography>
                            </TableCell>
                            <TableCell sx={{ background: '#CCCCCC' }} align="left">
                                <Typography sx={{ fontFamily: 'Inter', textTransform: 'capitalize', fontWeight: 'bold' }} variant="button" >Activity Time</Typography>
                            </TableCell>
                            <TableCell sx={{ background: '#CCCCCC' }} align="left">
                                <Typography sx={{ fontFamily: 'Inter', textTransform: 'capitalize', fontWeight: 'bold' }} variant="button" >Activity State</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.username}
                                </TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.sentmails}</TableCell>
                                <TableCell align="left">{row.activitytime}</TableCell>
                                <TableCell align="left">
                                    <div style={{justifyItems:'space-between'}}>
                                    {row.activitystate}
                                <img onClick={(event) => handleClick(event, row.id)} src={deleteLogo} alt="fireSpot" />
                                </div>
                                </TableCell>
                                
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Dashboard