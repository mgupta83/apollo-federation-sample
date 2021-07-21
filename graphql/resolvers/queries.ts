import os from 'os'
export const query1=async() => {
    let h = process.env.WEBSITE_SITE_NAME
    let s = os.hostname()
    if(!h){
        return s
    }
    else{
        return h
    }
    // return 'query successful'
}