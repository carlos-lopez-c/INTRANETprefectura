
import styles from '../css/Carrusel.module.css'
const CarruselItem = ({ item }) => {

    return (
        <div className={styles['swiper-slide']}>
            <img src={item.imagen} alt="" />
            <div className={styles['card-description']}>
                <div className={styles['card-title']}>
                    <h4>Descripción</h4>
                </div>
                <div className={styles['card-text']} >
                    <p>{item.descripcion}</p>
                </div>
                <div className={styles['card-link']} >
                    <a href="#">Ver más</a>
                </div>
            </div>
        </div>
    );
};

export default CarruselItem;