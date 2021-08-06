import { useRef } from 'react';
import { Data } from '../interfaces/Data';

type Props = {
    results: Data[] | undefined;
    data: Data[] | undefined;
    handleFilters(data: Data[] | undefined): void;
}

const FilterPanel: React.FC<Props> = ({ results, data, handleFilters }) => {

    const filterFunc = (value: string, arr: Data[] | undefined) => {
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
                // setFilteredData(data)
                break;
        }
        return newArr
    }

    const inputRef = useRef(null)
    let filteredArray: Data[] | undefined = [];

    const handleClick = (e: React.MouseEvent) => {

        let inputs: HTMLInputElement[] = Array.from(document.querySelectorAll('.input-filter'));
        let selectedFilters: string[] = inputs.filter(input => input.checked).map(input => input.id);
        
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
                <div>
                    <p className="fw-bold mb-1 fs-5 text-dark">Search Title</p>
                    <div>
                        <label htmlFor="resultado">Resultados</label>
                        <span className="text-muted me-1">{results?.length}</span>  
                    </div>
                </div>

                <div>
                    <p className="fw-bold mb-1 fs-5 text-dark">Costo de envio</p>
                    <div>
                        <label>Gratis</label>
                        <span className="text-muted ms-1">
                            ({data?.filter(item => item.shipping.free_shipping).length})
                        </span>
                        <input className="input-filter" type="checkbox" name="gratis" id="gratis" onClick={handleClick} ref={inputRef}/>
                    </div>
                </div>

                <div>
                    <p className="fw-bold mb-1 fs-5 text-dark">Condicion</p>
                    <div>
                        <label>Nuevo</label>
                        <span className="text-muted ms-1">
                            ({data?.filter(item => item.condition === 'new').length})
                        </span>
                        <input className="input-filter" type="checkbox" name="nuevo" id="nuevo" onClick={handleClick} ref={inputRef}/>
                    </div>
                    <div>
                        <label>Usado</label> 
                        <span className="text-muted ms-1">
                            ({data?.filter(item => item.condition !== 'new').length})
                        </span>
                        <input className="input-filter" type="checkbox" name="usado" id="usado" onClick={handleClick} ref={inputRef}/>
                    </div>
                </div>

                <div>
                    <p className="fw-bold mb-1 fs-5 text-dark">Pago</p>
                    <div>
                        <label>Sin interés</label> 
                        <span className="text-muted ms-1">
                            ({data?.filter(item => item.installments.rate === 0).length})
                        </span>
                        <input className="input-filter" type="checkbox" name="sin interes" id="sin interes" onClick={handleClick} ref={inputRef}/>
                    </div>
                    <div>
                        <label>0-6</label>
                        <span className="text-muted ms-1">  
                            ({data?.filter(item => item.installments.quantity <= 6).length})
                        </span>    
                        <input className="input-filter" type="checkbox" name="0-6" id="0-6" onClick={handleClick} ref={inputRef}/>
                    </div>
                    <div>
                        <label>12 o más</label> 
                        <span className="text-muted ms-1">
                            {data?.filter(item => item.installments.quantity > 6).length}
                        </span> 
                        <input className="input-filter" type="checkbox" name="12 0 mas" id="12 0 mas" onClick={handleClick} ref={inputRef}/>
                    </div>
                </div>
                </>

    );
};

export default FilterPanel;