import { useState } from "react";
import '../css/paginacion.css'
export const Pagination = ({
    totalPaginas,
    numeroDePagina,
    totalElementos,
    medidaDePagina,
    ultimaPagina,
    handlePaginaSiguiente,
    handlePaginaAnterior,
    handleMedidaDePagina
}) => {


    const onNextPage = () => {
        handlePaginaSiguiente();
    }

    const onPreviousPage = () => {
        handlePaginaAnterior();
    }

    const onChangeMedidaPagina = (e) => {
        handleMedidaDePagina(e.target.value);
    }


    return (
       <div className="btn">
            <button className="boton bnat" onClick={onPreviousPage} disabled={numeroDePagina === 1}>ATRAS</button>
            <select onChange={onChangeMedidaPagina} name="limit" id="limit" defaultValue={medidaDePagina}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
            <button className="boton" onClick={onNextPage} disabled={ultimaPagina}>SIGUIENTE</button>
        </div>
    )
}

