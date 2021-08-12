import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './styles/SearchResults.scss';
import { Data } from '../interfaces/Data'
import FilterPanel from '../components/FilterPanel'
import SorterPanel from '../components/SorterPanel';
import ResulstList from '../components/ResulstList';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import PageError from '../components/PageError';
import PageLoading from '../components/PageLoading';

const SearchResults = () => {

    const { id, search } = useParams<{id:string, search: string}>();

    const [data, setData] = useState<Data[]>();
    const [filteredData, setFilteredData] = useState<Data[] | undefined>([]);
    const [status, setStatus] = useState('idle');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData(`https://api.mercadolibre.com/sites/${id}/search?q=${search}`)
    }, [])

    async function fetchData(url: string) {
        setStatus('pending');
        setError(null)

        try {
            const getData = await fetch(url);
            const data = await getData.json();
            setData(data.results);
            
            setStatus('resolved')
        }
        catch (error) {
            setStatus('rejected')
            setError(error)
        }
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
        <div className="pages-main-container">
            {status === 'pending' && <PageLoading/>}
            {status === 'rejected' && <PageError error={error}/>}
            {status === 'resolved' &&
            <div className="row">
                <div className="col-3 ps-4 pe-0 mt-3">
                    <FilterPanel results={results} data={data} handleFilters={handleFilters}/>
                </div>

                <div className="col-9">
                    <SorterPanel results={results} data={data} handleSorters={handleSorters} />
                    <ResulstList results={results} />
                </div>
            </div>}
        </div>
        </>
    );
};

export default SearchResults;