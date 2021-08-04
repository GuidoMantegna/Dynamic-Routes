import './styles/Navbar.scss'

const Navbar = () => {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">

                <div className="d-flex align-items-center">
                    <i className="bi bi-person-circle nav-link text-secondary p-0"><span className="ms-1 fst-normal">USER</span></i>
                    <a className="nav-link px-1 text-secondary" href="#">Compras</a>
                    <a className="nav-link px-1 text-secondary" href="#">Favoritos</a>
                    <a className="nav-link px-1 text-secondary" href="#"><i className="bi bi-bell"></i></a>
                    <a className="nav-link px-1 text-secondary" href="#"><i className="bi bi-cart2"></i></a>
                </div>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"></hr></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;