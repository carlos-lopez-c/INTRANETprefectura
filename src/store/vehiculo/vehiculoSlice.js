import { createSlice } from "@reduxjs/toolkit";

export const vehiculoSlice = createSlice({
    name: "vehiculo",
    initialState: {
        vehiculos: [],
        vehiculo: {},
        loading: false,
        error: null,
    },
    reducers: {
        getVehiculos: (state, action) => {
            state.vehiculos = action.payload;
        },
        getVehiculo: (state, action) => {
            state.vehiculo = action.payload;
        },
        createVehiculo: (state, action) => {
            state.vehiculos.push(action.payload);
        },
        updateVehiculo: (state, action) => {
            const index = state.vehiculos.findIndex(
                (vehiculo) => vehiculo.placa === action.payload.placa
            );
            state.vehiculos[index] = action.payload;
        },
        deleteVehiculo: (state, action) => {
            state.vehiculos = state.vehiculos.filter(
                (vehiculo) => vehiculo.placa !== action.payload
            );
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const {
    getVehiculos,
    getVehiculo,
    createVehiculo,
    updateVehiculo,
    deleteVehiculo,
    setLoading,
    setError,
} = vehiculoSlice.actions;

export default vehiculoSlice.reducer;