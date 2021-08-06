import '../pages/styles/SearchResults.scss';
import { Data } from '../interfaces/Data';

type Props = {
    results: Data[] | undefined;
    data: Data[] | undefined;
    handleFilters(data: Data[] | undefined): void;
}

const FilterPanel: React.FC<Props> = ({ results, data, handleFilters }) => {

    const filterFunc = (value: string | undefined, arr: Data[] | undefined) => {
        let newArr;

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
                handleFilters(data)
                break;
        }
        return newArr
    }

    let filteredArray: Data[] | undefined = [];

    const handleClick = (e: React.MouseEvent) => {

        let inputs: HTMLInputElement[] = Array.from(document.querySelectorAll('.input-filter'));
        let selectedFilters: string[]  = inputs.filter(input => input.checked).map(input => input.id);
        
        for (let index = 0; index < selectedFilters.length; index++) {
            if(index === 0 ) {
                filteredArray = filterFunc(selectedFilters[index], data)
            } else {
                filteredArray = filterFunc(selectedFilters[index], filteredArray)
            } 
        }
        console.log(filteredArray)

        handleFilters(filteredArray)
    }

    return (
        <>
        <div className="filter-option-container">
            <p className="filter-title">Search Title</p>
            
            <div>
                <span className="filter-qty ms-0 me-2">{results?.length}</span>  
                <label className="filter-option" htmlFor="resultado">Resultados</label>
            </div>
        </div>

        <div className="filter-option-container">
            <p className="filter-title">Costo de envio</p>
            <div>
                <label className="filter-option">Gratis</label>
                <span className="filter-qty">
                    ({filterFunc('gratis', data)?.length})
                </span>
                <input className="input-filter" type="checkbox" name="gratis" id="gratis" onClick={handleClick} />
                {/* <div className="form-check form-switch">
                    <input className="form-check-input input-filter" type="checkbox" data-info="gratis" id="flexSwitchCheckDefault" onClick={handleClick}></input>
                </div> */}
            </div>
        </div>

        <div className="filter-option-container">
            <p className="filter-title">Condicion</p>

            <div>
                <label className="filter-option">Nuevo</label>
                <span className="filter-qty">
                    ({filterFunc('nuevo', data)?.length})
                </span>
                <input className="input-filter" type="checkbox" name="nuevo" id="nuevo" onClick={handleClick} />
                {/* <div className="form-check form-switch">
                    <input className="form-check-input input-filter" type="checkbox" data-info="nuevo" id="flexSwitchCheckDefault" onClick={handleClick}></input>
                </div> */}
            </div>
            <div>
                <label className="filter-option">Usado</label> 
                <span className="filter-qty">
                    ({filterFunc('usado', data)?.length})
                </span>
                <input className="input-filter" type="checkbox" name="usado" id="usado" onClick={handleClick}/>
                {/* <div className="form-check form-switch">
                    <input className="form-check-input input-filter" type="checkbox" data-info="usado" id="flexSwitchCheckDefault" onClick={handleClick}></input>
                </div> */}
            </div>
        </div>

        <div className="filter-option-container">
            <p className="filter-title">Pago</p>

            <div>
                <label className="filter-option">Sin interés</label> 
                <span className="filter-qty">
                    ({filterFunc('sin interes', data)?.length})
                </span>
                <input className="input-filter" type="checkbox" name="sin interes" id="sin interes" onClick={handleClick} />
                {/* <div className="form-check form-switch">
                    <input className="form-check-input input-filter" type="checkbox" data-info="sin interes" id="flexSwitchCheckDefault" onClick={handleClick}></input>
                </div> */}
            </div>
            <div>
                <label className="filter-option">0-6</label>
                <span className="filter-qty">  
                    ({filterFunc('0-6', data)?.length})
                </span>    
                <input className="input-filter" type="checkbox" name="0-6" id="0-6" onClick={handleClick} />
                {/* <div className="form-check form-switch">
                    <input className="form-check-input input-filter" type="checkbox" data-info="0-6" id="flexSwitchCheckDefault" onClick={handleClick}></input>
                </div> */}
            </div>
            <div>
                <label className="filter-option">12 o más</label> 
                <span className="filter-qty">
                    ({filterFunc('12 o mas', data)?.length})
                </span> 
                <input className="input-filter" type="checkbox" name="12 0 mas" id="12 o mas" onClick={handleClick} />
                {/* <div className="form-check form-switch">
                    <input className="form-check-input input-filter" type="checkbox" data-info="12 o mas" id="flexSwitchCheckDefault" onClick={handleClick}></input>
                </div> */}
            </div>
        </div>
        </>

    );
};

export default FilterPanel;