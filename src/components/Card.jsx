import React from 'react';
import '../css/card.css'; // Importa el archivo de estilos CSS para la barra de navegación
import '../css/Nprincipal.css'
import styles from '../css/Carrusel.module.css'
export function Card() {
    return (
        <div className={styles.App}>
            <h1 className="Tnotic">SERVICIOS</h1>
            <div className="cards-list">

                <div className="card">
                    <div className="card_image">
                        <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="Card Image" />
                    </div>
                    <div className="card_title title-white">
                        <p>Card Title</p>
                    </div>
                </div>


                <div className="card 2">
                    <div className="card_image">
                        <img src="https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg" />
                    </div>
                    <div className="card_title title-white">
                        <p>Card Title</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card_image">
                        <img src="https://i.redd.it/b3esnz5ra34y.jpg" alt="Card Image" />
                    </div>
                    <div className="card_title title-white">
                        <p>Card Title</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

