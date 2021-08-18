import '../pages/styles/SearchResults.scss';
import { Data } from '../interfaces/Data';
import { useParams } from 'react-router-dom';

type Props = {
    results: Data[] | undefined;
    data: Data[] | undefined;
    handleFilters(data: Data[] | undefined): void;
}

const FilterPanel: React.FC<Props> = ({ results, data, handleFilters }) => {

    const {id, search} = useParams<{id: string, search: string}>();

    // const sitesWithInstallments = ['MLA', 'MLC', 'MCO', 'MPE']

    const filterFunc = (value: string | undefined, arr: Data[] | undefined) => {
        let newArr;

        switch (value) {
            case 'gratis':
                newArr = arr?.filter(item => item.shipping.free_shipping !== null ? item.shipping.free_shipping : false);
                break;
            case 'nuevo':
                newArr = arr?.filter(item => item.condition !== null ? item.condition === 'new' : false)
                break;
            case 'usado':
                newArr = arr?.filter(item => item.condition !== null ? item.condition !== 'new' : false)
                break;
            case 'sin interes':
                newArr = arr?.filter(item => item.installments !== null ? item.installments.rate === 0 : false)
                break;
            case '0-6':
                newArr = arr?.filter(item => item.installments !== null ? item.installments.quantity <= 6 : false)
                break;
            case '6 o mas':
                newArr = arr?.filter(item => item.installments !== null ? item.installments.quantity >= 12 : false)
                break;
            default:
                handleFilters(data)
                break;
        }
        return newArr
    }

    let filteredArray: Data[] | undefined = [];

    const handleClick = (e: React.MouseEvent) => {

        let inputs: HTMLInputElement[] = Array.from(document.querySelectorAll('.input-filter'));
        let selectedFilters: (string | undefined)[]  = inputs.filter(input => input.checked).map(input => input.dataset.info);

        if(selectedFilters.length===0) {handleFilters(filteredArray)}
        
        for (let index = 0; index < selectedFilters.length; index++) {
            if(index === 0 ) {
                filteredArray = filterFunc(selectedFilters[index], data)
            } else {
                filteredArray = filterFunc(selectedFilters[index], filteredArray)
            } 
        }

        handleFilters(filteredArray)
    }

    return (
        <>
        <div className="filter-option-container">
            <p className="filter-title">{search}</p>
            
            <div>
                <span className="filter-qty ms-0 me-2">{results?.length}</span>  
                <label className="filter-option" htmlFor="resultado">Resultados</label>
            </div>
        </div>

        <div className="filter-option-container">
            <p className="filter-title">Costo de envio</p>
            <div className="d-flex">
                <label className="filter-option">Gratis</label>
                <span className="filter-qty">
                    ({filterFunc('gratis', results)?.length})
                </span>
                <div className="form-check form-switch ms-2">
                    <input className="form-check-input input-filter" type="checkbox" data-info="gratis" id="flexSwitchCheckDefault" onClick={handleClick}></input>
                </div>
            </div>
        </div>

        <div className="filter-option-container">
            <p className="filter-title">Condicion</p>

            <div className="d-flex">
                <label className="filter-option">Nuevo</label>
                <span className="filter-qty">
                    ({filterFunc('nuevo', results)?.length})
                </span>
                <div className="form-check form-switch ms-2">
                    <input className="form-check-input input-filter" type="checkbox" data-info="nuevo" id="flexSwitchCheckDefault" onClick={handleClick}></input>
                </div>
            </div>
            <div className="d-flex">
                <label className="filter-option">Usado</label> 
                <span className="filter-qty">
                    ({filterFunc('usado', results)?.length})
                </span>
                <div className="form-check form-switch ms-2">
                    <input className="form-check-input input-filter" type="checkbox" data-info="usado" id="flexSwitchCheckDefault" onClick={handleClick}></input>
                </div>
            </div>
        </div>

        {/* {sitesWithInstallments.includes(id) && */}
        <div className="filter-option-container">
            <p className="filter-title">Pago</p>

            <div className="d-flex">
                <label className="filter-option">Sin interés</label> 
                <span className="filter-qty">
                    ({filterFunc('sin interes', results)?.length})
                </span>
                <div className="form-check form-switch ms-2">
                    <input className="form-check-input input-filter" type="checkbox" data-info="sin interes" id="flexSwitchCheckDefault" onClick={handleClick}></input>
                </div>
            </div>
            <div className="d-flex">
                <label className="filter-option">0-6</label>
                <span className="filter-qty">  
                    ({filterFunc('0-6', results)?.length})
                </span>    
                <div className="form-check form-switch ms-2">
                    <input className="form-check-input input-filter" type="checkbox" data-info="0-6" id="flexSwitchCheckDefault" onClick={handleClick}></input>
                </div>
            </div>
            <div className="d-flex">
                <label className="filter-option">12 o más</label> 
                <span className="filter-qty">
                    ({filterFunc('6 o mas', results)?.length})
                </span> 
                <div className="form-check form-switch ms-2">
                    <input className="form-check-input input-filter" type="checkbox" data-info="6 o mas" id="flexSwitchCheckDefault" onClick={handleClick}></input>
                </div>
            </div>
        </div>
        {/* } */}
        </>

    );
};

export default FilterPanel;