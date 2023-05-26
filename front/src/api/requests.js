import { BASE_URL } from "./baseUrl";
import axios from 'axios';




export const getAllSports=async()=>{
    let globalData;
    await axios.get(`${BASE_URL}`)
    .then(res=>{
        globalData=res.data;
    })
    return globalData;
}


export const getSportsById=async(id)=>{
    let globalData;
    await axios.get(`${BASE_URL}/${id}`)
    .then(res=>{
        globalData=res.data;
    })
    return globalData;
}

export const postSports=async(payload)=>{
    await axios.post(`${BASE_URL}`,payload);
}
export const deleteSports=async(id)=>{
    await axios.delete(`${BASE_URL}/${id}`)
}