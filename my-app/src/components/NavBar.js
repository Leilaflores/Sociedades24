import React from 'react';
import LogoSociedades24B from "../Asset/LogoSociedades24B.png";

function NavBar () {
  return (
  <nav className='navbar navbar-expand-lg bg-ligth'>
  <div className='container-fluid'>
    <a href="#">
      <img src={LogoSociedades24B} alt="Logo" width="150" height="144"></img>
    </a>
    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id="navbarSupportedContent">
      <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <li className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Servicios
          </a>
          <ul className='dropdown-menu'>
            <li><a className='dropdown-item' href="#SA">Constitución de SA</a></li>
            <li><a className='dropdown-item' href="#SAS">Constitución de SAS</a></li>
            <li><a className='dropdown-item' href="#SRL">Constitución de SRL</a></li>
            <li><a className='dropdown-item' href="#DomLegal">Servicio de domicilio legal y Fiscal</a></li>
            <li><a className='dropdown-item' href="#Gestion">Gestión de tramites en IGJ</a></li>
          </ul>
        </li>
        <li className='nav-item'>
          <a className='nav-link' aria-current="page" href="#Contacto">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}

export default NavBar;