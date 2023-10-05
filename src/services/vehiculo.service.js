import api from './config'
export const getVehiculos=async()=>{
const {data} =await api.get("http://localhost:8081/api/vehiculos");

return data 
}