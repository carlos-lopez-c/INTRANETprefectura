import { createSlice } from "@reduxjs/toolkit";

export const vehiculoSlice = createSlice({
    name: "vehiculo",
    initialState: {
        vehiculos: [],
        vehiculo: {},
        medidaDePagina: 5,
        numeroDePagina: 1,
        totalElementos: 0,
        totalPaginas: 0,
        ultimaPagina: true,
        loading: false,
        error: null,
    },
    reducers: {
        getVehiculos: (state, action) => {
            state.vehiculos = action.payload.vehiculos;
            state.medidaDePagina = action.payload.options.medidaDePagina;
            state.numeroDePagina = action.payload.options.numeroDePagina;
            state.totalElementos = action.payload.options.totalElementos;
            state.totalPaginas = action.payload.options.totalPaginas;
            state.ultimaPagina = action.payload.options.ultimaPagina;
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
        cleanVehiculo: (state) => {
            state.vehiculo = {};
        },
    },
});

export const {
    getVehiculos,
    getVehiculo,
    createVehiculo,
    updateVehiculo,
    deleteVehiculo,
    cleanVehiculo,
    setLoading,
    setError,
} = vehiculoSlice.actions;

export default vehiculoSlice.reducer;