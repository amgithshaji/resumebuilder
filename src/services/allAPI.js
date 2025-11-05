import commonAPI from "./commonAPI"
import ServerURL from "./ServerURL"

// resume add api - called by the userInput,when finsih btn is clicked
export const addResumeAPI = async (resume)=>{
    return await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}

// get resume api-called from viewresume,when page load
export const getResumeAPI = async (id)=>{
    return await commonAPI(`${ServerURL}/resumes/${id}`,"GET",{})
}

// update resume api
// get histroy api
// remove histroy api