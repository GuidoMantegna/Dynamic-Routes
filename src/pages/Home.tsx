import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import cardImg from '../assets/imgs/generic-product.jpg'
import AppiRefs from '../components/AppiRefs';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';

const Home = () => {
    const { id } = useParams<{id: string}>();

    type Data = {
        id: string, 
        name: string,
        // children_categories: {name: string, id:string}[],
        // category: string;
    }

    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        fetchData(`https://api.mercadolibre.com/sites/${id}/categories`)
    }, [])

    async function fetchData(url:string) {
        const getData = await fetch(url);
        const data = await getData.json();
        
        setData(data)
    }

    return (
        <div className="container">
            <ul className="categories-list row gy-3 p-2">
                {data.map(cat => {
                    return (
                        <Link to={`/MLA/${cat.id}`} className="card-group col-6 col-sm-4 col-xl-3" key={cat.id}>
                            <div className="card h-100">
                                <img src={cardImg} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                <h5 className="card-title lead text-center text-dark">{cat.name}</h5>
                                </div>
                            </div>
                        </Link>
                    )
                  })
                }
            </ul> 
        </div>
    );
};

export default Home;