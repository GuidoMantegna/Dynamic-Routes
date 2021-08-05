import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import './styles/SearchResults.scss'

const SearchResults = () => {

    const { id, search } = useParams<{id:string, search: string}>();

    // type Data = {
    //     results: {
    //         id: string;
    //         thumbnail: string;
    //         title: string;
    //         price: number;
    //         sold_quantity: number;
    //         permalink: string;
    //         shipping: {free_shipping: boolean};
    //         condition: string;
    //         installments: {
    //             rate: number;
    //             quantity: number;
    //         };

    //     }[];
    // }

    type Data = {
        id: string;
        thumbnail: string;
        title: string;
        price: number;
        sold_quantity: number;
        permalink: string;
        shipping: {free_shipping: boolean};
        condition: string;
        installments: {
            rate: number;
            quantity: number;
        };
    };

    const [data, setData] = useState<Data[]>();
    const [filteredData, setFilteredData] = useState<Data[] | undefined>([]);

    useEffect(() => {
        fetchData(`https://api.mercadolibre.com/sites/${id}/search?category=${search}`)
    }, [])

    async function fetchData(url:string) {
        const getData = await fetch(url);
        const data = await getData.json();
        
        setData(data.results)
        console.log(data)
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

    const inputRef = useRef(null)
    let filteredArray: Data[] | undefined = [];

    const handleFilters = (e: React.MouseEvent<HTMLParagraphElement>) => {
        const {value, currentTarget, id} = e.target as typeof e.target & {
            value: string;
            currentTarget: HTMLParagraphElement;
            id: string 
        };
        let inputs: HTMLInputElement[] = Array.from(document.querySelectorAll('.input-filter'));

        let selectedFilters: string[] = inputs.filter(input => input.checked).map(input => input.id);

        const filterFun = (value: string, arr: Data[] | undefined) => {
            let newArr;
            // if(value === 'gratis') return arr?.filter(item => item.shipping.free_shipping);
            // if(value === 'new') return arr?.filter(item => item.condition === 'new');

            switch (value) {
                case 'gratis':
                    newArr = arr?.filter(item => item.shipping.free_shipping);
                    break;
                case 'nuevo':
                    newArr = arr?.filter(item => item.condition === 'new')
                    break;
                case 'usado':
                    newArr = arr?.filter(item => item.condition !== 'new')
                    break;
                case 'sin interes':
                    newArr = arr?.filter(item => item.installments.rate === 0)
                    break;
                case '0-6':
                    newArr = arr?.filter(item => item.installments.quantity <= 6)
                    break;
                case '6 o mas':
                    newArr = arr?.filter(item => item.installments.quantity > 6)
                    break;
                default:
                    setFilteredData(data)
                    break;
            }
            return newArr
        }

        
        for (let index = 0; index < selectedFilters.length; index++) {
            if(index === 0 ) {
                filteredArray = filterFun(selectedFilters[index], data)
            } else {
                filteredArray = filterFun(selectedFilters[index], filteredArray)
            }
            
        }

        setFilteredData(filteredArray)
    }

    const results = filteredData?.length === 0 ? data : filteredData

    return (
        <>
        <div className="row">
            <div className="results-filter col-3">
                <div className="">
                    <p className="fw-bold mb-1 fs-5 text-dark">Search Title</p>
                    <p>
                        <span className="text-muted me-1">{data?.length}</span>  
                        Resultados
                    </p>
                </div>
                <div>
                    <p className="fw-bold mb-1 fs-5 text-dark">Costo de envio</p>
                    <p onClick={handleFilters} data-info="gratis">Gratis
                        <span className="text-muted ms-1">
                            ({data?.filter(item => item.shipping.free_shipping).length})
                        </span>
                    </p>
                    <input className="input-filter" type="checkbox" name="gratis" id="gratis" onClick={handleFilters} ref={inputRef}/>
                </div>
                <div>
                    <p className="fw-bold mb-1 fs-5 text-dark">Condicion</p>
                    <p onClick={handleFilters} data-info="gratis" className="mb-1">Nuevo 
                        <span className="text-muted ms-1">
                            ({data?.filter(item => item.condition === 'new').length})
                        </span>
                    </p>
                    <input className="input-filter" type="checkbox" name="nuevo" id="nuevo" onClick={handleFilters} ref={inputRef}/>
                    <p onClick={handleFilters}>Usado 
                        <span className="text-muted ms-1">
                            ({data?.filter(item => item.condition !== 'new').length})
                        </span>
                    </p>
                    <input className="input-filter" type="checkbox" name="usado" id="usado" onClick={handleFilters} ref={inputRef}/>
                </div>
                <div>
                    <p className="fw-bold mb-1 fs-5 text-dark">Pago</p>
                    <p onClick={handleFilters} className="mb-1">Sin interés 
                        <span className="text-muted ms-1">
                            ({data?.filter(item => item.installments.rate === 0).length})
                        </span>
                    </p>
                    <input className="input-filter" type="checkbox" name="sin interes" id="sin interes" onClick={handleFilters} ref={inputRef}/>
                    <p onClick={handleFilters} className="mb-1">0-6 
                        <span className="text-muted ms-1">  
                            ({data?.filter(item => item.installments.quantity <= 6).length})
                        </span>    
                    </p>
                    <input className="input-filter" type="checkbox" name="0-6" id="0-6" onClick={handleFilters} ref={inputRef}/>
                    <p onClick={handleFilters}>12 o más 
                        <span className="text-muted ms-1">
                            {data?.filter(item => item.installments.quantity > 6).length}
                        </span> 
                    </p>
                    <input className="input-filter" type="checkbox" name="12 0 mas" id="12 0 mas" onClick={handleFilters} ref={inputRef}/>
                </div>
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
                    })}
                </ul>
            </div>
        </div>
        </div>
        
        </>
    );
};

export default SearchResults;