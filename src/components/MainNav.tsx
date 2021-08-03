

const MainNav = () => {
    return (
        <ul className="main-nav navbar-nav container-fluid">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown">
                      Categorias
                    </a>
                    <ul className="categories-dropdown p-2">
                      <li><a className="dropdown-item text-white" href="#">Vehículos</a></li>
                      <li><a className="dropdown-item text-white" href="#">Inmuebles</a></li>
                      <li><a className="dropdown-item text-white" href="#">Tecnología</a></li>
                      <li><a className="dropdown-item text-white" href="#">Hogar y electrodomésticos</a></li>
                      <li><a className="dropdown-item text-white" href="#">Herramientas e Industrias</a></li>
                      <li><a className="dropdown-item text-white" href="#">Juguetes y bebés</a></li>
                      <li><a className="dropdown-item text-white" href="#">Deportes y aire libre</a></li>
                      <li><a className="dropdown-item text-white" href="#">Libros</a></li>
                      <li><a className="dropdown-item text-white" href="#">Accesorios para Vehículos</a></li>
                      <li><a className="dropdown-item text-white" href="#">Moda</a></li>
                      <li><a className="dropdown-item text-white" href="#">Belleza y cuidado personal</a></li>
                      <li><a className="dropdown-item text-white" href="#">Supermercado</a></li>
                      <li><a className="dropdown-item text-white" href="#">Agro</a></li>
                      <li><a className="dropdown-item text-white" href="#">Servicios</a></li>
                      <li><a className="dropdown-item text-white" href="#">Productos Sustentables</a></li>
                      <li><a className="dropdown-item text-white" href="#">Ver más categorías</a></li>
                    </ul>
                  </li>        
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Ofertas</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Historial</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Supermercado</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Vender</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Ayuda</a>
                  </li>
              </ul>          
    );
};

export default MainNav;