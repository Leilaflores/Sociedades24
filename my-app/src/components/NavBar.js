import React from 'react';
import LogoSociedades24 from "../Asset/LogoSociedades24.png";

export const NavBar = () => {

  return (
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a href="#">
      <img src={LogoSociedades24} alt="Logo" width="150" height="144"></img>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Servicios
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Constitución de SRL</a></li>
            <li><a class="dropdown-item" href="#">Constitución de SAS</a></li>
            <li><a class="dropdown-item" href="#">Constitución de SA</a></li>
            <li><a class="dropdown-item" href="#">Servicio de domicilio legal y Fiscal</a></li>
            <li><a class="dropdown-item" href="#">Gestión de tramites en IGJ</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}
