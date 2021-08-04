import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './styles/SearchResults.scss'

const SearchResults = () => {

    const { id, search } = useParams<{id:string, search: string}>();

    type Data = {
        results: [{
            id: string;
            thumbnail: string;
            title: string;
            price: number;
            sold_quantity: number;
            permalink: string;
        }];
    }

    const [data, setData] = useState<Data>();

    useEffect(() => {
        fetchData(`https://api.mercadolibre.com/sites/${id}/search?category=${search}`)
    }, [])

    async function fetchData(url:string) {
        const getData = await fetch(url);
        const data = await getData.json();
        
        setData(data)
        console.log(data)
    }

    return (
        <>
        <div className="container">
            <ul className="results-list ">
                {data?.results.map(item => {
                    return (
                        <a href={item.permalink} className="results-item bg-white p-3" key={item.id}>

                                <div className="item-img">
                                    <img className="img-fluid" src={item.thumbnail} alt="item-img" />
                                </div>
                                <div className="item-info row align-items-around ps-5">
                                    <h5 className="fw-light">{item.title}</h5>
                                    <span className="h5 strong">${item.price}</span>
                                    <p className="lead fs-6">vendidos: <span>{item.sold_quantity}</span></p>
                                </div>

                        </a>
                    )
                })

                }
                
            </ul>
        </div>
        </>
    );
};

export default SearchResults;