import { Data } from '../interfaces/Data';
import { useState } from 'react';

type Props = {
    results: Data[] | undefined;
    handleSorters(data: Data[] | undefined): void;
}

const SorterPanel: React.FC<Props> = ({ results, handleSorters }) => {

    const [currentSort, setCurrentSort] = useState('Elegir')

    const handleClick = (e: React.MouseEvent) => {
        const {value} = e.target as typeof e.target & {
            value: string;
        };

        switch (value) {
                case 'Mas vendido':
                    handleSorters(results?.sort((a, b) => b.sold_quantity - a.sold_quantity))
                    break;
                case 'Menos vendido':
                    handleSorters(results?.sort((a, b) => a.sold_quantity - b.sold_quantity))
                    break;
                case 'Menor precio':
                    handleSorters(results?.sort((a, b) => a.price - b.price))
                    break;            
                default:
                    handleSorters(results?.sort((a, b) => b.price - a.price))
                    break;
            }
        setCurrentSort(value)
    }

    return (
        <>        
        <div className="container">
            <div className="results-sort mb-1">
                <label htmlFor="ordenar-por" className="small">Ordenar por</label>
                <div className="btn-group">
                    <button type="button" className="sorter-toggler dropdown-toggle small" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                        {currentSort}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end p-0">
                        <li><button onClick={handleClick} className="dropdown-item small border-bottom" type="button" value="Mas vendido">Mas vendido</button></li>
                        <li><button onClick={handleClick} className="dropdown-item small border-bottom" type="button" value="Menos vendido">Menos vendido</button></li>
                        <li><button onClick={handleClick} className="dropdown-item small border-bottom" type="button" value="Menor precio">Menor precio</button></li>
                        <li><button onClick={handleClick} className="dropdown-item small" type="button" value="Mayor precio">Mayor precio</button></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default SorterPanel;


