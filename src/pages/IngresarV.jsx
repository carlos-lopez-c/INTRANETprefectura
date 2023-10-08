
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startCreateVehiculo } from '../store/vehiculo/thunks';
import { useNavigate } from 'react-router-dom';

export const IngresarV= ()=> {
const [vehiculoForm,setVehiculoForm]=useState({placa: '',
nombreDelVehiculo: '',
tipoDeVehiculo: 'automóvil',
tipoCombustible: 'extra',
conductor: '',
kilometraje: ''})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehiculoForm({ ...vehiculoForm,[name]: value });
  }
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a tu servidor o realizar cualquier acción que necesites con los datos.
    console.log(vehiculoForm);
    dispatch(startCreateVehiculo(vehiculoForm));
    navigate("/vehiculos");
  }

 
    return (
      <div>
        <h1>Formulario de Datos del Vehículo</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="placa">Placa:</label>
          <input type="text" id="placa" name="placa" value={vehiculoForm.placa} onChange={handleChange} required /><br /><br />

          <label htmlFor="vehiculo">Vehículo:</label>
          <input type="text" id="vehiculo" name="nombreDelVehiculo" value={vehiculoForm.nombreDelVehiculo} onChange={handleChange} required /><br /><br />

          <label htmlFor="tipo_vehiculo">Tipo de Vehículo:</label>
          <select id="tipo_vehiculo" name="tipoDeVehiculo" value={vehiculoForm.tipoDeVehiculo} onChange={handleChange}>
            <option value="automóvil">Automóvil</option>
            <option value="camioneta">Camioneta</option>
            <option value="moto">Moto</option>
            <option value="otros">Otros</option>
          </select><br /><br />

          <label htmlFor="tipo_combustible">Tipo de Combustible:</label>
          <select id="tipo_combustible" name="tipoCombustible" value={vehiculoForm.tipoCombustible} onChange={handleChange}>
            <option value="extra">Extra</option>
            <option value="diesel">Diesel</option>
          </select><br /><br />

          <label htmlFor="conductor">Conductor:</label>
          <input type="text" id="conductor" name="conductor" value={vehiculoForm.conductor} onChange={handleChange} required /><br /><br />

          <label htmlFor="kilometraje">Kilometraje:</label>
          <input type="number" id="kilometraje" name="kilometraje" value={vehiculoForm.kilometraje} onChange={handleChange} required /><br /><br />

          <input type="submit" value="Guardar" />
        </form>
      </div>
    );
  }


