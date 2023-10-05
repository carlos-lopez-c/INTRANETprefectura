import React, { useState } from 'react';
import '../css/Tipodc.css'; // Importa el archivo CSS

export function TipoDoc() {
  const [combustibles, setCombustibles] = useState(['DIESEL', 'EXTRA']);

  return (
    <div className="tipo-doc-container"> {/* Aplica una clase de contenedor */}
      <h1 className='titledc'>Lista de Tipos de documentos</h1>
      <h2>Tipo de combustible</h2>

      <table border="1">
        <thead>
          <tr>
            <th>COMBUSTIBLE</th>
          </tr>
        </thead>
        
        <tbody>
          {combustibles.map((combustible, index) => (
            <tr key={index}>
              <td>{combustible}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
