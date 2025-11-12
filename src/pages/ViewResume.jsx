import React, { useEffect, useState } from 'react'
import  Header  from "../components/Header";
import Footer from "../components/Footer"
import Preview from '../components/Preview';
import { addHistroyAPI, getResumeAPI } from '../services/allAPI';
import { useParams } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import { IoRefreshCircle } from "react-icons/io5";
import { AiFillBackward } from "react-icons/ai";
import { Link } from 'react-router-dom'
import Edit from "../components/Edit";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';



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

const handleDownloadResume = async () =>{
// create pdf document
const doc = new jsPDF();
const preview = document.getElementById("preview")
// ss of preview - html2camvas
const canvas = await html2canvas(preview,{scale:2})
// console.log(canvas);
// convert canvas to image
const resumeImg = canvas.toDataURL('image/png')
console.log(resumeImg);

// add ss to pdf
const pageWidth = doc.internal.pageSize.getWidth()
// const imgHeight =  doc.internal.pageSize.getHeight()
const imgWidth = pageWidth-20
const imgHeight = canvas.height*imgWidth/canvas.width
doc.addImage(resumeImg,'PNG',0,0,imgWidth,imgHeight)
// download pdf
doc.save(`${resume.username}-resume.pdf`)
// local time data = new date
const localtimeData = new Date()
// console.log(localtimeData);
const timesStamp = ` ${localtimeData.toLocaleDateString()},${localtimeData.toLocaleTimeString()} `
// console.log(timesstamp);
try{
await addHistroyAPI({timesStamp,resumeImg})
}catch(err){
console.log(err);

}

}






  return (
    <>

<div className='container my-5' >
<div className='row' >
<div className='col-md-2' ></div>
<div className='col-md-6  col-12 ' >
  <div className='d-flex justify-content-center align-items-center mt-5' >
    <button onClick={handleDownloadResume} className='btn fs-4 text-primary' ><FaDownload /></button>
    <Edit resumeDetails={resume} setResumeDetails={setResume} />
        <Link to={'/history'} className='btn fs-3 text-danger' ><IoRefreshCircle /></Link>
        <Link to={'/resume'} className='btn fs-2 text-success' ><AiFillBackward /></Link>

  </div>
<div id='preview'><Preview resumeDetails={resume} /></div>
</div>
<div className='col-md-2' ></div>
</div>
</div>

    </>
  )
}

export default ViewResume