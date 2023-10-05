import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from '../components/Header';
import Home from '../pages/Home'
import Combustible from '../pages/Combustible'
import { Bcolores } from '../components/Bcolores';
import {TipoDoc} from '../pages/TipoDoc'
import { Vehiculos } from '../pages/vehiculos';

export default function AppRoutes() {
    return (
        <>
            <Header imagenh='PREFECTURA-DE-COTOPAXI' />
            <Bcolores/>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/combustible"} element={<Combustible />} />
                <Route path={"/tipodc"} element={<TipoDoc />} />
                <Route path={"/vehiculos"} element={<Vehiculos />} />
            </Routes>
        </>


    )
}
