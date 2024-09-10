import Axios from 'axios';

const token = localStorage.getItem("userToken");

const axios=Axios.create({
    baseURL:"http://localhost:3000/api",
    headers:{
        "Content-Type":"application/json",
        "Authorization": `${token}`
    }

});

export default axios;