import React, { useEffect, useState } from 'react';
import '../css/Tipodc.css'; // Importa el archivo CSS
import Icon from '../iconos/flecha-hacia-atras.png'
import Resgistrar from '../iconos/registrar.png'
import { useNavigate } from 'react-router-dom';
import { getVehiculos } from '../services/vehiculo.service';

export function Vehiculos() {
  const navigate = useNavigate();
  const [combustibles, setCombustibles] = useState(['DIESEL', 'EXTRA']);
  const [vehiculos, setVehiculos] = useState([]); // Cambié el nombre de la variable para evitar confusiones
  const [tiposDeCombustible, setTiposDeCombustible] = useState(['Tipocom']); // Cambié el nombre de la variable
  useEffect(() => {
  getVehiculos().then((data)=>{    
  setVehiculos(data.contenido)
  })
  }, [])


  return (
    <div> {/* Aplica una clase de contenedor */}

      <div className='titledc'>
        <h1 >LISTA DE VEHICULOS Y PLACAS</h1>
      </div>

      <div className="atras"> {/* Cambié "class" a "className" */}
        <img src={Icon} alt="TITULO DE LA SECCION" onClick={() => { navigate("/combustible") }} className="atras" />
      </div>


      <link href={'//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css'} rel="stylesheet" />

      <div className="box"> {/* Cambié "class" a "className" */}
        <div className="container-2"> {/* Cambié "class" a "className" */}
          <span className="icon"><i className="fa fa-search"></i></span>
          <input type="search" id="search" placeholder="Buscar..." />
          <img src={Resgistrar} alt="ICONO REGISTRAR" onClick={() => { navigate("/combustible") }} className="btnV" />
        </div>
      </div>

      <table border="1">
        <thead>
          <tr>
            <th><p>PLACA</p></th>
            <th>VEHICULO</th>
            <th>TIPO DE VEHICULO</th>
            <th>TIPO DE COMBUSTIBLE</th>
            <th>CONDUCTOR</th>
            <th>KILOMETRAJE</th>
            <th className='act'>ACCIONES</th>
          </tr>
        </thead>

        <tbody>
          {vehiculos.map((vehiculo, index) => (
            <tr key={vehiculo.placa}>
              <td>{vehiculo.placa}</td>
              <td>{vehiculo.nombreDelVehiculo}</td> {/* Usar vehiculos[index] para obtener el vehículo correspondiente */}
              <td>{vehiculo.tipoDeVehiculo}</td> {/* Usar tiposDeCombustible[index] */}
              <td>{vehiculo.conductor}</td>
              <td>{vehiculo.kilometraje}</td>
              <td>{vehiculo.tipoCombustible}</td>
              <td></td>
            </tr>
          ))}
        </tbody>       
       

      </table>
    </div>
  );
}
