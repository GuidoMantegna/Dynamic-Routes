import './styles/Header.scss';
import logo from '../assets/imgs/logo-mlibre.png';
import React, { useRef, useState} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

type Props = {
    handleSearch: (searchKey: string) => void;
    section: string;
}

const Header: React.FC<Props> = ({ handleSearch, section }) => {
    const { id, category } = useParams<{id: string, category: string}>();

    const [searchKey, setSearchKey] = useState('');

    const searchRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // const search = searchRef.current?.value;
        if(searchKey !== '') {handleSearch(searchKey)}
    }

    const handleChange = (e: React.ChangeEvent) => {
        const {value} = e.target as typeof e.target & {
            value: string;
        };
        setSearchKey(value)
        console.log(value)
    }

    return (
        <header className="container-fluid d-flex justify-content-center">
            <div className="container-sm row align-items-center py-3 px-0 m-0">
                <Link to='/' className="col-3 col-md-2 p-1">
                    <img src={logo} className="img-fluid" alt="logo" id="logo"></img>
                </Link>

                <form className="col-9 col-md-10 d-inline-flex px-2" onSubmit={handleSubmit}>
                    <input className="form-control" value={searchKey} onChange={handleChange} ref={searchRef} type="search" placeholder="Buscá productos, marcas y más..." aria-label="Search"></input>
                    
                    {section === "search-results" &&
                    <button className="btn btn-link">
                        <i className="bi bi-search text-secondary fs-5"></i>
                    </button>
                    }
                    
                    {section !== "search-results" && searchRef.current?.value !== ''
                    &&
                    <Link to={`/${id}/${category}/${searchKey}`}>
                        <button className="btn btn-link">
                            <i className="bi bi-search text-secondary fs-5"></i>
                        </button>
                    </Link>
                    }

                    {section !== "search-results" && searchRef.current?.value === ''
                    &&
                    <button className="btn btn-link">
                        <i className="bi bi-search text-secondary fs-5"></i>
                    </button>
                    }
                    

                </form>
            </div>
        </header>
    )
};

export default Header;