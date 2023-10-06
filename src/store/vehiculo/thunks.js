import { getVehiculo, getVehiculos, createVehiculo, updateVehiculo, setLoading, setError, deleteVehiculo } from "./vehiculoSlice";
import vehiculoService from "../../services/vehiculo.service";

export const startGetVehiculos = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const { contenido } = await vehiculoService.getVehiculos();
        dispatch(getVehiculos(contenido));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading(false));
    }
};

export const startGetVehiculo = (placa) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const data = await vehiculoService.getVehiculo(placa);
        dispatch(getVehiculo(data));
        console.log(data);
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading(false));
    }
}

export const startCreateVehiculo = (vehiculo) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const data = await vehiculoService.createVehiculo(vehiculo);
        dispatch(createVehiculo(data));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading(false));
    }
}

export const startUpdateVehiculo = (placa, vehiculo) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const data = await vehiculoService.updateVehiculo(placa, vehiculo);
        dispatch(updateVehiculo(data));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading(false));
    }
}

export const startDeleteVehiculo = (placa) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        await vehiculoService.deleteVehiculo(placa);
        dispatch(deleteVehiculo(placa));
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading(false));
    }
}



