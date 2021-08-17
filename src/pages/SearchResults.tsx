import { useState, useEffect, useRef } from 'react';
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
        console.log(data)
    }


    const handleSorters = (data: Data[]) => {
        setFilteredData(() => data)
        console.log(data)
    }

    const handleSearch = (searchKey: string) => {
        fetchData(`https://api.mercadolibre.com/sites/${id}/search?q=${searchKey}`);
    }

    const filterBTN = useRef<HTMLSpanElement>(null);
    const filterPanel = useRef<HTMLDivElement>(null);
    
    const openFilterPanel = (e: React.MouseEvent) => {
        
        filterPanel.current?.classList.toggle("filter-panel-hidden"); 
        filterBTN.current?.classList.toggle("panel-btn-open"); 
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
            <div className="row m-0">
                <div className="filter-panel filter-panel-hidden col-8 col-md-3 ps-5 pe-0 pt-3 mt-md-3" ref={filterPanel}>
                    <div className='filter-btn' onClick={openFilterPanel}><span ref={filterBTN} className="panel-btn-close">{'>'}</span></div>
                    <FilterPanel results={results} data={data} handleFilters={handleFilters}/>
                </div>

                <div className="sorter-panel col-12 col-md-9 p-0">
                    <SorterPanel results={results} data={data} handleSorters={handleSorters} />
                    <ResulstList results={results} />
                </div>
            </div>}
        </div>
        </>
    );
};

export default SearchResults;