import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import cardImg from '../assets/imgs/generic-product.jpg'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import PageError from '../components/PageError';
import PageLoading from '../components/PageLoading';
import { Data } from '../interfaces/Data';

const Home = () => {
    const { id } = useParams<{id: string}>();

    const [data, setData] = useState<Data[]>([]);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData(`https://api.mercadolibre.com/sites/${id}/categories`)
    }, [])

    async function fetchData(url: string) {
        setStatus('pending');
        setError(null)

        try {
            const getData = await fetch(url);
            const data = await getData.json();
            setData(data);
            
            setStatus('resolved')
        }
        catch (error) {
            setStatus('rejected')
            setError(error)
        }
    }

    return (
        <>
        <Header handleSearch={() => {}} section="home"/>
        <Navbar />

        <div className="pages-main-container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb p-3">
                    <li className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item active" aria-current="page">Categorias</li>
                </ol>
            </nav>

            {status === 'pending' && <PageLoading/>}
            {status === 'rejected' && <PageError error={error}/>}
            {status === 'resolved' && 
                <div className="container">
                    <ul className="categories-list row gy-3 p-2">
                        {data.map(cat => {
                            return (  
                                <Link to={`/${id}/${cat.id}`} className="card-group col-6 col-sm-4 col-xl-3" key={cat.id}>
                                    <div className="card h-100">
                                        <img src={cardImg} className="card-img-top" alt="..."></img>
                                        <div className="card-body">
                                        <h5 className="card-title lead fs-6 text-center text-dark">{cat.name}</h5>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </ul>
                </div>}
        </div>
        </>        
    );
};

export default Home;