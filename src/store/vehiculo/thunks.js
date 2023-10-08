import { getVehiculo, getVehiculos, createVehiculo, updateVehiculo, setLoading, setError, deleteVehiculo, cleanVehiculo } from "./vehiculoSlice";
import vehiculoService from "../../services/vehiculo.service";

export const startGetVehiculos = (numeroDePagina, medidaDePagina) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        console.log(numeroDePagina, medidaDePagina);
        const data = await vehiculoService.getVehiculos(numeroDePagina, medidaDePagina);
        dispatch(getVehiculos({
            vehiculos: data.contenido,
            options: {
                medidaDePagina: data.medidaDePagina,
                numeroDePagina: data.numeroDePagina + 1,
                totalElementos: data.totalElements,
                totalPaginas: data.totalPaginas,
                ultimaPagina: data.ultimaPagina,
            }
        }));
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
        dispatch(cleanVehiculo());
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
        dispatch(cleanVehiculo());
    } catch (error) {
        dispatch(setError(error));
    } finally {
        dispatch(setLoading(false));
    }
}



