import Axios from 'axios';

const token = localStorage.getItem("adminToken");

const axios=Axios.create({
    baseURL:"http://100.10.10.18:8000/api",
    withCredentials:true,
    withXSRFToken:true,
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization": `Bearer ${token}`
    }

});

export default axios;