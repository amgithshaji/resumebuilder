import commonAPI from "./commonAPI"
import ServerURL from "./ServerURL"

// resume add api - called by the userInput,when finsih btn is clicked
export const addResumeAPI = async (resume)=>{
    return await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}

// get resume api
// update resume api
// get histro api
// remove histroy api