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
export const updateResumeAPI = async (id,resume)=>{
    return await commonAPI(`${ServerURL}/resumes/${id}`,"PUT",resume)
}

// add histroy api
export const addHistroyAPI = async (history)=>{
    return await commonAPI(`${ServerURL}/history`,"POST",history)
}
// get history
export const getHistroyAPI = async ()=>{
    return await commonAPI(`${ServerURL}/history`,"GET",{})
}
// remove histroy api
export const removeHistroyAPI = async (id)=>{
    return await commonAPI(`${ServerURL}/history/${id}`,"DELETE",{})
}