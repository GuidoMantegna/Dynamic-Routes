import { Data } from '../interfaces/Data';

type Props = {
    results: Data[] | undefined;
    data: Data[] | undefined;
    handleSorters(data: Data[] | undefined): void;
}

const SorterPanel: React.FC<Props> = ({ data, results, handleSorters }) => {

    let isOpen = false;

    const handleClick = (e: React.MouseEvent<HTMLSelectElement>) => {
        const {value} = e.target as typeof e.target & {
            value: string;
        };

        if (!isOpen) {
            isOpen = true;
        } else {
            switch (value) {
                case 'mas-vendido':
                    handleSorters(data?.sort((a, b) => b.sold_quantity - a.sold_quantity))
                    break;
                case 'menos-vendido':
                    handleSorters(data?.sort((a, b) => a.sold_quantity - b.sold_quantity))
                    break;
                case 'menor-precio':
                    handleSorters(data?.sort((a, b) => a.price - b.price))
                    break;            
                default:
                    handleSorters(data?.sort((a, b) => b.price - a.price))
                    break;
            }

            isOpen = false
        } 


    }

    return (
        <>
        <div className="container">
            <div className="results-sort mb-1">
                <label htmlFor="ordenar-por" className="strong">Ordenar por</label>
                <select onClick={handleClick} name="ordenar-por" id="sorting-options" className="border-0 ms-2">
                    <option  value="mayor-precio">Mayor precio</option>
                    <option value="menor-precio">Menor precio</option>
                    <option value="mas-vendido">Mas vendido</option>
                    <option value="menos-vendido">Menos vendido</option>
                </select>
            </div>
            
        </div>   
        </>
    );
};

export default SorterPanel;