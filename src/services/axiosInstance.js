import { baseURL, logAndDisplayErrors } from '@/utilis/helpers';
import axios from 'axios';
import Cookies from 'js-cookie';
const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});
axiosInstance.interceptors.request.use(
  async (config)=>{
    try {
          // console.log("token",token)
        const token = Cookies.get('token')
        if(token){
       config.headers['Authorization']=`Bearer ${token}`
        }
        return config
            
        } catch (error) {
            return Promise.reject(error)
        }
}
)
axiosInstance.interceptors.response.use(
(response)=>{

return response

},
(error)=>{
if(error){
    logAndDisplayErrors(error?.response?.data)
}
return error
}

)
export default axiosInstance;
