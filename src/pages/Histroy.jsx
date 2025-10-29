import { Box,Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";


function Histroy() {
  return (
    <div>
      <h1 className='text-center my-5' >Downloaded Resume History</h1>
      <Link to={'/resume'} className='float-end me-5' style={{marginTop:'-80px'}} >Back</Link>
        <Box component="section" className='container-fluid' >
          <div className='row' >
            <div className='col-md-4' >
               <Paper elevation={3} sx={{my:5,p:5,textAlign:'center'}}>
               <div className='d-flex justify-content-between align-items-center' >
                <h6>Review at: date</h6>
                <button className='btn btn-danger mb-2 fs-4' ><RiDeleteBin6Line /></button>
               </div>
               <div className='border rounded p-3' >
                 <img width={'200px'} height={'200px'} src="https://marketplace.canva.com/EAGmJ13p8zE/1/0/1131w/canva-black-and-white-minimalist-professional-resume-a4-X9UHTVTOsqQ.jpg" alt="" />
               </div>
                </Paper>
            </div>
          </div>
    </Box>
    </div>
  )
}

export default Histroy