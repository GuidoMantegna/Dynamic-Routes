import './styles/Navbar.scss';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

type Data = {
    name: string,
    categories: {id: string, name: string}[],
    currencies: {id: string, symbol: string}[]
}

const Navbar: React.FC = () => {

    const { id } = useParams<{id: string}>();

    const [data, setData] = useState<Data>();

    useEffect(() => {
        fetchData(`https://api.mercadolibre.com/sites/${id}`)
    }, [])

    async function fetchData(url:string) {
        const getData = await fetch(url);
        const data = await getData.json();
        
        setData(data)
    }

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
                            <Link to={`/${id}`} className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <i className="bi bi-geo-alt nav-link">{data?.name}</i>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">{data?.currencies[0].id}{data?.currencies[0].symbol}</span>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {data?.categories.map(cat => {
                                    return (
                                        <Link to={`/${id}/${cat.id}`} className="dropdown-item" key={cat.id}>
                                            {cat.name}
                                        </Link>
                                    )
                                })
                                }
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;