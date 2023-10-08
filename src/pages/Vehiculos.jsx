import { useEffect, useState } from 'react';
import '../css/Tipodc.css'; // Importa el archivo CSS
import '../css/buscador.css'
import Icon from '../iconos/flecha-hacia-atras.png'
import Resgistrar from '../iconos/registrar.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startDeleteVehiculo, startGetVehiculo, startGetVehiculos } from '../store/vehiculo/thunks';
import { Pagination } from '../components/Pagination';

export function Vehiculos() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { vehiculos, loading, vehiculo, ultimaPagina, totalPaginas, medidaDePagina, numeroDePagina, totalElementos } = useSelector(state => state.vehiculo);
  const [vehiculosFiltrados, setVehiculosFiltrados] = useState(vehiculos); // Agregué esta línea
  const [searchVehiculo, setSearchVehiculo] = useState('');


  useEffect(() => {
    dispatch(startGetVehiculos(numeroDePagina, medidaDePagina));
  }, [])

  useEffect(() => {
    if (vehiculo.placa) {
      setVehiculosFiltrados(vehiculos.filter(v => v.placa === vehiculo.placa));
    } else {
      setVehiculosFiltrados(vehiculos);
    }
  }, [vehiculo, vehiculos])


  const handleSearchChange = (e) => {
    setSearchVehiculo(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchVehiculo === '') return setVehiculosFiltrados(vehiculos);
    dispatch(startGetVehiculo(searchVehiculo));
  }

  const handleDelete = (placa) => {
    dispatch(startDeleteVehiculo(placa));
  }

  const handlePaginaSiguiente = () => {
    dispatch(startGetVehiculos(numeroDePagina + 1, medidaDePagina));
  }

  const handlePaginaAnterior = () => {
    dispatch(startGetVehiculos(numeroDePagina - 1, medidaDePagina));
  }

  const handleMedidaDePagina = (medida) => {
    dispatch(startGetVehiculos(1, medida));
  }
  if (loading) return (<h1>Cargando...</h1>);
  return (
    <div className='.contenedor-flex'> {/* Aplica una clase de contenedor */}

      <div className='titledc'>
        <h1>LISTA DE VEHICULOS Y PLACAS</h1>
      </div>


      <link href={'//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css'} rel="stylesheet" />

      <div className="atras"> 
        <div className="container-2"> 
          <form onSubmit={handleSearch}>
            <span className="icon"><i className="fa fa-search"></i></span>
            <input type="search" id="search" placeholder="Buscar..."
              value={searchVehiculo} onChange={handleSearchChange} />
          </form>
          <img src={Icon} alt="atras" onClick={() => { navigate("/combustible") }} className='imgA' />
          <img src={Resgistrar} alt="ICONO REGISTRAR" onClick={() => { navigate("/vehiculos/formulario") }} className="btnV" />
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
          {vehiculosFiltrados.map((vehiculo) => (
            <tr key={vehiculo.placa}>
              <td>{vehiculo.placa}</td>
              <td>{vehiculo.nombreDelVehiculo}</td>
              <td>{vehiculo.tipoDeVehiculo}</td>
              <td>{vehiculo.tipoCombustible}</td>
              <td>{vehiculo.conductor}</td>
              <td>{vehiculo.kilometraje}</td>
              <td>
                <button onClick={() => handleDelete(vehiculo.placa)} className="eliminar">Eliminar</button>
                <Link to={`/vehiculos/formulario/${vehiculo.placa}`} className='actualizar'>Actualizar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        ultimaPagina={ultimaPagina}
        totalPaginas={totalPaginas}
        medidaDePagina={medidaDePagina}
        numeroDePagina={numeroDePagina}
        totalElementos={totalElementos}
        handlePaginaSiguiente={handlePaginaSiguiente}
        handlePaginaAnterior={handlePaginaAnterior}
        handleMedidaDePagina={handleMedidaDePagina}
      />
    </div>
  );
}
