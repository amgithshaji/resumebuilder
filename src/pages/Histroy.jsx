import { Box, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";
import { getHistroyAPI, removeHistroyAPI } from '../services/allAPI';


function Histroy() {

  const [allHistroy, setAllHistroy] = useState([])
  console.log(allHistroy);

  useEffect(() => {
    getHistroy()
  }, [])

  const getHistroy = async () => {
    try {
      const result = await getHistroyAPI()
      console.log(result);
      if (result.status == 200) {
        setAllHistroy(result.data)
      }

    } catch (err) {
      console.log(err);

    }

  }

  const deletehistory = async(id)=>{
    try{
await removeHistroyAPI(id)
getHistroy()
    }catch(err){
console.log(err);

    }
  }

  return (
    <div>
      <h1 className='text-center my-5' >Downloaded Resume History</h1>
      <Link to={'/resume'} className='float-end me-5' style={{ marginTop: '-80px' }} >Back</Link>
      <Box component="section" className='container-fluid' >
        <div className='row' >
          {
            allHistroy.length > 0 ?
              allHistroy?.map(item => (
                <div key={item?.id} className='col-md-4' >
                  <Paper elevation={3} sx={{ my: 5, p: 5, textAlign: 'center' }}>
                    <div className='d-flex justify-content-between align-items-center' >
                      <h6>Review at: {item?.timesStamp}</h6>
                      <button onClick={()=>deletehistory(item?.id)} className='btn btn-danger mb-2 fs-4' ><RiDeleteBin6Line /></button>
                    </div>
                    <div className='border rounded p-3' >
                      <img width={'200px'} height={'200px'} src={item?.resumeImg} alt="" />
                    </div>
                  </Paper>
                </div>
              ))
              :
              <p>no resumes are downloaded yet!!</p>
          }
        </div>
      </Box>
    </div>
  )
}

export default Histroy