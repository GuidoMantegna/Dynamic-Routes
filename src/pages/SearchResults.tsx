import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './styles/SearchResults.scss';
import { Data } from '../interfaces/Data'
import FilterPanel from '../components/FilterPanel'
import SorterPanel from '../components/SorterPanel';

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

    const handleFilters = (data: Data[]) => {
        setFilteredData(data)
    }

    const handleSorters = (data: Data[]) => {
        setFilteredData(data)
    }

    const results = filteredData?.length === 0 ? data : filteredData

    return (
        <>
        <div className="row">
            <div className="col-3 ps-4 pe-0 mt-3">
                <FilterPanel results={results} data={data} handleFilters={handleFilters}/>
            </div>

            <div className="col-9">
                <SorterPanel results={results} data={data} handleSorters={handleSorters} />
            </div>
        </div>
        </>
    );
};

export default SearchResults;