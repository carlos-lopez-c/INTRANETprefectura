
import '../css/header.css';
import logoPrefectura from '../img/PREFECTURA-DE-COTOPAXI.png'

export function Header(props) {
    return (
        <header>
            <a href="#" className="LogoConsejo">
                <img className='imgContent'
                    // src={require(`../img/${props.imagenh}.png`)} alt='FOTO' />
                    src={logoPrefectura} />
            </a>
        </header>
      

    );
}


