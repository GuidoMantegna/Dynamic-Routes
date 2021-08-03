import './styles/Header.scss';
import logo from '../assets/imgs/logo-mlibre.png';

const Header = () => {
    return (
        <header className="container-fluid d-flex justify-content-center">
            <div className="container-sm row align-items-center py-3 px-0 m-0">
                <img src={logo} className="img-fluid col-3 col-md-2 p-1" alt="logo" id="logo"></img>

                <form className="col-9 col-md-10 d-inline-flex px-2">
                    <input className="form-control" type="search" placeholder="Buscá productos, marcas y más..." aria-label="Search"></input>
                    <button className="btn btn-link">
                        <i className="bi bi-search text-secondary fs-5"></i>
                    </button>
                </form>
            </div>
        </header>
    )
};

export default Header;