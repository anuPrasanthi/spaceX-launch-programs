
 import axios from 'axios';

const getDataByFilters = (filters) =>{
const queryString = Object.keys(filters).map((key)=>{
    return `${encodeURIComponent(key)}=${encodeURIComponent(filters[key])}`
}).join('&amp');
return axios.get(`https://api.spacexdata.com/v3/launches?limit=100&${queryString}`).then(res => {
    console.log(res);
    return res.data;
})
}

export default getDataByFilters;