import { baseURL, logAndDisplayErrors } from '@/utilis/helpers';
import axios from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
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
if(response.config.method!=='get'){
    toast.success('Success ✅');
}
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
