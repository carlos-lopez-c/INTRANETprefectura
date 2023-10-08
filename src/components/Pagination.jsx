import { useState } from "react";

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
        <div>
            <button onClick={onPreviousPage} disabled={numeroDePagina === 1}>Retroceder</button>
            <select onChange={onChangeMedidaPagina} name="limit" id="limit" defaultValue={medidaDePagina}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
            <button onClick={onNextPage} disabled={ultimaPagina}>Avanzar</button>
        </div>
    )
}

