import axios from "axios";


const axiosWarehouse = axios.create({
    baseURL: "https://warehouse.eu/api/v1",
    headers: {
        'Content-type': 'application/json',
        'Authorization' : 'Bearer ' + localStorage.getItem('Bearer')
      }
    
    });
    
    axiosWarehouse.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          localStorage.setItem('Bearer','');
          window.location.href = '/';
        }
      });
    
export default axiosWarehouse;