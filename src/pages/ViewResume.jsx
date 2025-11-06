import React, { useEffect, useState } from 'react'
import  Header  from "../components/Header";
import Footer from "../components/Footer"
import Preview from '../components/Preview';
import { getResumeAPI } from '../services/allAPI';
import { useParams } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import { IoRefreshCircle } from "react-icons/io5";
import { AiFillBackward } from "react-icons/ai";
import { Link } from 'react-router-dom'
import Edit from "../components/Edit";


function ViewResume() {

const {id} = useParams()
// console.log(id);

const [resume,setResume]= useState({})

useEffect(()=>{
getResumeDetails()
},[])

const getResumeDetails = async ()=>{
  const result = await getResumeAPI(id)
  // console.log(result);
  if (result.status==200) {
    setResume(result.data)
    
  }
  
}
console.log(resume);

  return (
    <>

<div className='container my-5' >
<div className='row' >
<div className='col-md-2' ></div>
<div className='col-md-6  col-12 ' >
  <div className='d-flex justify-content-center align-items-center mt-5' >
    <button className='btn fs-4 text-primary' ><FaDownload /></button>
    <Edit resumeDetails={resume} setResumeDetails={setResume} />
        <Link to={'/history'} className='btn fs-3 text-danger' ><IoRefreshCircle /></Link>
        <Link to={'/resume'} className='btn fs-2 text-success' ><AiFillBackward /></Link>

  </div>
<Preview resumeDetails={resume} />
</div>
<div className='col-md-2' ></div>
</div>
</div>

    </>
  )
}

export default ViewResume