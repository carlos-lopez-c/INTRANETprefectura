import React from 'react';
import '../css/nav.css'; // Importa el archivo de estilos CSS para la barra de navegación
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav">
    <button className="nav-toggle" aria-label="Abrir menú">
        <i className="fas fa-bars"></i>
    </button>
    <ul className="nav-menu">
        
        <li className="nav-menu-item">
            <a href="#" className="nav-menu-link nav-link">ADMINISTRATIVO</a>
            <ul className="sub-menu">
                <li className="sub-menu-item"><Link to="/combustible">COMBUSTIBLE</Link></li>
                <li className="sub-menu-item"><a href="#">Submenú 2</a></li>
                <li className="sub-menu-item"><a href="#">Submenú 3</a></li>
            </ul>
        </li>

 
        <li className="nav-menu-item">
            <a href="#" className="nav-menu-link nav-link">Blog</a>
            <ul className="sub-menu">
                <li className="sub-menu-item"><a href="#">Submenú 1</a></li>
                <li className="sub-menu-item"><a href="#">Submenú 2</a></li>
                <li className="sub-menu-item"><a href="#">Submenú 3</a></li>
            </ul>
        </li>
        
         
        <li className="nav-menu-item">
            <a href="#" className="nav-menu-link nav-link">Blog</a>
            <ul className="sub-menu">
                <li className="sub-menu-item"><a href="#">Submenú 1</a></li>
                <li className="sub-menu-item"><a href="#">Submenú 2</a></li>
                <li className="sub-menu-item"><a href="#">Submenú 3</a></li>
            </ul>
        </li>

         
        <li className="nav-menu-item">
            <a href="#" className="nav-menu-link nav-link">Blog</a>
            <ul className="sub-menu">
                <li className="sub-menu-item"><a href="#">Submenú 1</a></li>
                <li className="sub-menu-item"><a href="#">Submenú 2</a></li>
                <li className="sub-menu-item"><a href="#">Submenú 3</a></li>
            </ul>
        </li>
    </ul>
</nav>

    );
  }
}

export default Navbar;
