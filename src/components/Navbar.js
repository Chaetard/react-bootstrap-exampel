import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a
          href="https://github.com/Chaetard"
          target="_blank"
          className="navbar-brand"
        >
          <i className="bi bi-code-slash"></i>
          <span>Jesus Santos</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="index">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link misproyectos"
                href="nohay.html"
                target="_blank"
              >
                Mis Proyectos
              </a>
            </li>
          </ul>

          

          <a
            href="https://www.instagram.com/n0kemm/"
            target="_blank"
            className="nav-item col-6 col-md-auto p-3 text-light"
          >
            {" "}
            <i className="bi bi-instagram"></i>
          </a>

          <a
            href="https://github.com/Chaetard"
            target="_blank"
            className="nav-item col-6 col-md-auto p-3 text-light"
          >
            {" "}
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://wa.link/ziczvh"
            target="_blank"
            className="nav-item col-6 col-md-auto p-3 text-light"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
          <a
            href="https://www.facebook.com/trapocosplayer/"
            target="_blank"
            className="nav-item col-6 col-md-auto p-3 text-light"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
