import React from "react";
import "./navbar.css";

function navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a href="#" class="navbar-brand">
        <i class="bi bi-code-slash"></i>
        <span>Jesus Santos</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Mis Proyectos</a>
          </li>

        </ul>

        <hr class="d-md-none text-white-50" />

        

        <ul class="navbar-nav flex-row flex-wrap text-light">
          <li class="nav-item col-6 col-md-auto p-3">
            <i class="bi bi-twitter"></i>
            <small class="d-md-none ms-2">Twitter</small>
          </li>

          <li class="nav-item col-6 col-md-auto p-3">
            <i class="bi bi-github"></i>
            <small class="d-md-none ms-2">GitHub</small>
          </li>

          <li class="nav-item col-6 col-md-auto p-3">
            <i class="bi bi-whatsapp"></i>
            <small class="d-md-none ms-2">WhatsApp</small>
          </li>

          <li class="nav-item col-6 col-md-auto p-3">
            <i class="bi bi-facebook"></i>
            <small class="d-md-none ms-2">Facebook</small>
          </li>
        </ul>

        

        <form class="d-flex">
          <button class="btn btn-outline-warning d-none d-md-inline-block" type="submit">
            Informacion
          </button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default navbar