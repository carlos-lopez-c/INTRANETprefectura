import { configureStore } from '@reduxjs/toolkit';

import { vehiculoSlice } from './vehiculo/vehiculoSlice';

export const store = configureStore({
    reducer: {
        vehiculo: vehiculoSlice.reducer
    },
});

