import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './styles/SearchResults.scss';
import { Data } from '../interfaces/Data'
import FilterPanel from '../components/FilterPanel'

const SearchResults = () => {

    const { id, search } = useParams<{id:string, search: string}>();

    const [data, setData] = useState<Data[]>();
    const [filteredData, setFilteredData] = useState<Data[] | undefined>([]);

    useEffect(() => {
        fetchData(`https://api.mercadolibre.com/sites/${id}/search?category=${search}`)
    }, [])

    async function fetchData(url:string) {
        const getData = await fetch(url);
        const data = await getData.json();
        
        setData(data.results)
    }

    let isOpen = false;

    const handleSorting = (e: React.MouseEvent<HTMLSelectElement>) => {
        const {value} = e.target as typeof e.target & {
            value: string;
        };

        
        if (!isOpen) {
            isOpen = true;
        } else {
            switch (value) {
                case 'mas-vendido':
                    setFilteredData(() => {
                        return data?.sort((a, b) => b.sold_quantity - a.sold_quantity)
                    })
                    break;
                case 'menos-vendido':
                    setFilteredData(() => {
                        return data?.sort((a, b) => a.sold_quantity - b.sold_quantity)
                    })
                    break;
                case 'menor-precio':
                    setFilteredData(() => {
                        return data?.sort((a, b) => a.price - b.price)
                    })
                    break;            
                default:
                    setFilteredData(() => {
                        return data?.sort((a, b) => b.price - a.price)
                    })
                    break;
            }

            isOpen = false
        } 


    }

    const handleFilters = (data: Data[]) => {
        setFilteredData(data)
    }

    const results = filteredData?.length === 0 ? data : filteredData

    return (
        <>
        <div className="row">
            <div className="results-filter col-3 ps-5 pe-0 mt-3">
                <FilterPanel results={results} data={data} handleFilters={handleFilters}/>
            </div>

        <div className="col-9">
            <div className="container">
                <div className="results-sort mb-1">
                    <label htmlFor="ordenar-por" className="strong">Ordenar por</label>
                    <select onClick={handleSorting} name="ordenar-por" id="sorting-options" className="border-0 ms-2">
                        <option  value="mayor-precio">Mayor precio</option>
                        <option value="menor-precio">Menor precio</option>
                        <option value="mas-vendido">Mas vendido</option>
                        <option value="menos-vendido">Menos vendido</option>
                    </select>
                </div>
                <ul className="results-list">
                    {results?.map(item => {
                        return (
                            <a href={item.permalink} className="results-item bg-white p-3 border-bottom" key={item.id}>

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
                    })}
                </ul>
            </div>
        </div>
        </div>
        
        </>
    );
};

export default SearchResults;