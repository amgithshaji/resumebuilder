import { Divider, Button } from '@mui/material'
import React from 'react'
import { BsJustify } from 'react-icons/bs'


function Preview() {
  return (
    <div style={{ margin: '80px' }} className='shadow  rounded-3 p-5 w-100 text-center' >
      <h3>Name</h3>
      <h5>Job Title</h5>
      <h6 >
        <span className='mx-2'>Location</span>|<span className='mx-2' >E-mail</span>|<span className='mx-2' >Mobile</span> </h6>
      <p className='my-3 ' >
        <a href="" target='_blank' > GITHUB</a> |
        <a href="" target='_blank' > LINKEDIN </a> |
        <a href="" target='_blank' > PORTFOLIO</a>
      </p>
      <Divider sx={{ fontSize: "25px" }} >Summary</Divider>
      <p style={{ textAlign: "justify" }} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quas fuga architecto libero rem suscipit eaque, excepturi atque, obcaecati mollitia doloribus ad numquam! Eveniet, modi deleniti asperiores explicabo corrupti vel?</p>
      <Divider sx={{ fontSize: "25px", marginBottom: "10px" }} >Education</Divider>
      <h5>Course name</h5>
      <p>
        <span className='mx-2'>College</span>|<span className='mx-2' >University</span>|<span className='mx-2' >Year of passout</span>
      </p>
      <Divider sx={{ fontSize: "25px", marginBottom: "10px" }} >Professional experience</Divider>
      <h5>job/Internship</h5>
      <p>
        <span className='mx-2'>Company name</span>|<span className='mx-2' >company Location</span>|<span className='mx-2' >Duration</span></p>
      <Divider sx={{ fontSize: "25px", marginBottom: "10px" }} >Skills</Divider>
      <div className='d-flex flex-wrap justify-content-between my-3' >
        <Button variant='contained' className='m-1' >NODE JS  </Button>
      </div>
    </div>
  )
}

export default Preview