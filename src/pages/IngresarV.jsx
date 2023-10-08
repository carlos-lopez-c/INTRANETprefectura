
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreateVehiculo, startGetVehiculo, startUpdateVehiculo } from '../store/vehiculo/thunks';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/ingresar.css'
import '../css/Tipodc.css'

export const IngresarV = () => {
  const { placa } = useParams();
  const { vehiculo } = useSelector(state => state.vehiculo);
  useEffect(() => {
    if (placa) {
      dispatch(startGetVehiculo(placa));
    }
  }
    , [placa])


  const [vehiculoForm, setVehiculoForm] = useState({
    placa: vehiculo.placa || '',
    nombreDelVehiculo: vehiculo.nombreDelVehiculo || '',
    tipoDeVehiculo: vehiculo.tipoDeVehiculo || '',
    tipoCombustible: vehiculo.tipoCombustible || '',
    conductor: vehiculo.conductor || '',
    kilometraje: vehiculo.kilometraje || '',
  })

  useEffect(() => {
    if (vehiculo.placa) {
      setVehiculoForm(vehiculo);
    }
  }, [vehiculo])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVehiculoForm({ ...vehiculoForm, [name]: value });
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vehiculo.placa) {
      dispatch(startUpdateVehiculo(vehiculoForm.placa, vehiculoForm));
    } else {
      dispatch(startCreateVehiculo(vehiculoForm));
    }
    navigate("/vehiculos");
  }

  return (
    <div className='principal'>

      <div className='titledc ingreso'>
        <h1>FORMULARIO DE INGRESO</h1>
      </div>

      <form onSubmit={handleSubmit} className='form'>


        <div className="input-group">
          <input placeholder="Ingrese la Placa" type="text" id="placa" name="placa" value={vehiculoForm.placa} onChange={handleChange} required /><br /><br />
        </div>

        <div className="input-group">
          <input placeholder="Ingrese el vehículo" type="text" id="vehiculo" name="nombreDelVehiculo" value={vehiculoForm.nombreDelVehiculo} onChange={handleChange} required /><br /><br />
        </div>


        <div className="input-group">
          <label>Seleccione el tipo de vehiculo y el combustible :</label>
          <select id="tipo_vehiculo" name="tipoDeVehiculo" value={vehiculoForm.tipoDeVehiculo} onChange={handleChange}>
            <option value="automóvil">Automóvil</option>
            <option value="camioneta">Camioneta</option>
            <option value="moto">Moto</option>
            <option value="otros">Otros</option>
          </select><br /><br />
        </div>


        <div className="input-group">
          <select id="tipo_combustible" name="tipoCombustible" value={vehiculoForm.tipoCombustible} onChange={handleChange}>
            <option value="extra">Extra</option>
            <option value="diesel">Diesel</option>
          </select><br /><br />
        </div>


        <div className="input-group">
          <input placeholder="Ingrese el conductor" type="text" id="conductor" name="conductor" value={vehiculoForm.conductor} onChange={handleChange} required /><br /><br />
        </div>

        <div className="input-group">
  <input placeholder="Ingrese el Kilometraje" type="number" id="kilometraje" name="kilometraje" value={vehiculoForm.kilometraje} onChange={handleChange} required />
  <span className="custom-arrow-up"></span>
  <span className="custom-arrow-down"></span>
</div>


        <input className='guardar' type="submit" value="Guardar" />
      </form>
    </div>
  );
}


