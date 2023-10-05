// import React from 'react'; // todo el poder de react
// import '../css/style.css';

// export function Namecomponent(props) {
//   return (
//     <div className='content'>
//       <img className='imgContent'
//         src={`../img/${props.imagen}.jpg`} alt='FOTO' />  {/* al poner llaves se concidera javascript */}

//       <div className='text'>
//         <p className='name'><strong>{props.nombre}</strong> en <small>{props.pais}</small></p>
//         <p className='cargo'>{props.cargo} en<strong> {props.empresa}</strong> </p>
//         <p className='texto'>{props.testimonio}</p>
//       </div>
//     </div>
//   );
// }

// Ejemplo de PaginaInicio.js
import React from 'react';
import '../css/combustible.css'
import IconTipdocum  from '../IconCombustible/tipoDoc.png'
import IconVehi from '../IconCombustible/Vehiculo.png'
import IconRegister from '../IconCombustible/Registro.png'
import IconGast from '../IconCombustible/RepGAST.png'
import ReporteKOmgal from'../IconCombustible/ReporteKOmgal.png'
import RepD from '../IconCombustible/RepD.png'
import ReporM from '../IconCombustible/ReporM.png'
import RegresarH from '../IconCombustible/RegresarH.png'
import TitleCk from '../IconCombustible/TitleCk.png'

import { useNavigate } from 'react-router-dom';
 
function Combustible() {
  const navigate=useNavigate();
  return (
    <div className="contenedor">
      <img src={TitleCk} onClick={()=>{navigate ("/")}} alt="TITULO DE LA SECCION" className="title"/>    
      <div className='imagen-container'>        
      <img src={IconVehi} onClick={()=>{navigate ("/vehiculos")}} alt="ICONO VEHICULO" className="icR"/>
      <img src={IconRegister} alt="ICONO REGISTRO" className="icR"/>
      <img src={IconGast} alt="ICONO REPORTE DE GASTOS" className="icR"/>
      </div>

      <div className='imagen-container'>      
      <img src={ReporteKOmgal} alt="ICONO REPORTE KM/GALON" className="icR"/>
      <img src={RepD} alt="ICONO REPORTE DIARIO" className="icR"/>
      <img src={ReporM} alt="ICONO REPORTE MENSUAL" className="icR"/>
      <img src={RegresarH} onClick={()=>{navigate ("/")}} alt="ICONO HOME" className="icR"/>
      </div>
    </div>
  );
}

export default Combustible;

