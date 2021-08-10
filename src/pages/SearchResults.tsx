import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './styles/SearchResults.scss';
import { Data } from '../interfaces/Data'
import FilterPanel from '../components/FilterPanel'
import SorterPanel from '../components/SorterPanel';
import ResulstList from '../components/ResulstList';
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const SearchResults = () => {

    const { id, search } = useParams<{id:string, search: string}>();

    const [data, setData] = useState<Data[]>();
    const [filteredData, setFilteredData] = useState<Data[] | undefined>([]);

    useEffect(() => {
        fetchData(`https://api.mercadolibre.com/sites/${id}/search?q=${search}`)
    }, [])

    async function fetchData(url:string) {
        const getData = await fetch(url);
        const data = await getData.json();
        
        setData(data.results)
    }

    const handleFilters = (data: Data[]) => {
        setFilteredData(data)
    }

    const handleSorters = (data: Data[]) => {
        setFilteredData(data)
    }

    const handleSearch = (searchKey: string) => {
        fetchData(`https://api.mercadolibre.com/sites/${id}/search?q=${searchKey}`);
    }

    const results = filteredData?.length === 0 ? data : filteredData

    return (
        <>
        <Header handleSearch={handleSearch} section="search-results"/>
        <Navbar/>
        {/* <nav aria-label="breadcrumb">
            <ol className="breadcrumb m-3">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Categorias</a></li>
                <li className="breadcrumb-item active" aria-current="page">{data?.name}</li>
            </ol>
        </nav> */}
        <div className="row">
            <div className="col-3 ps-4 pe-0 mt-3">
                <FilterPanel results={results} data={data} handleFilters={handleFilters}/>
            </div>

            <div className="col-9">
                <SorterPanel results={results} data={data} handleSorters={handleSorters} />
                <ResulstList results={results} />
            </div>
        </div>
        </>
    );
};

export default SearchResults;