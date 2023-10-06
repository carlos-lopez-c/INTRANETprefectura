import api from './config'

const vehiculoService = {}
vehiculoService.createVehiculo = async (vehiculo) => {
    const { data } = await api.post("vehiculos", vehiculo);
    return data
}

vehiculoService.getVehiculos = async () => {
    const { data } = await api.get("vehiculos");
    return data
}

vehiculoService.getVehiculo = async (placa) => {
    const { data } = await api.get(`vehiculos/${placa}`);
    return data
}
vehiculoService.updateVehiculo = async (placa, vehiculo) => {
    const { data } = await api.put(`vehiculos/${placa}`, vehiculo);
    return data
}


vehiculoService.deleteVehiculo = async (placa) => {
    const { data } = await api.delete(`vehiculos/${placa}`);
    return data
}

export default vehiculoService;