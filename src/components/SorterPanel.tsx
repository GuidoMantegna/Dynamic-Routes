import { Data } from '../interfaces/Data';

type Props = {
    results: Data[] | undefined;
    data: Data[] | undefined;
    handleSorters(data: Data[] | undefined): void;
}

const SorterPanel: React.FC<Props> = ({ data, results, handleSorters }) => {

    let isOpen = false;

    const handleClick = (e: React.MouseEvent) => {
        const {value} = e.target as typeof e.target & {
            value: string;
        };

        if (!isOpen) {
            isOpen = true;
        } else {
            // let newArr: Data[] | undefined ;
            switch (value) {
                case 'mas-vendido':
                    // newArr = results?.sort((a, b) => b.sold_quantity - a.sold_quantity)
                    handleSorters(results?.sort((a, b) => b.sold_quantity - a.sold_quantity))
                    // console.log(results?.sort((a, b) => b.sold_quantity - a.sold_quantity))
                    break;
                case 'menos-vendido':
                    // newArr = results?.sort((a, b) => a.sold_quantity - b.sold_quantity)
                    handleSorters(results?.sort((a, b) => a.sold_quantity - b.sold_quantity))
                    // console.log(results?.sort((a, b) => a.sold_quantity - b.sold_quantity))
                    break;
                case 'menor-precio':
                    // newArr = results?.sort((a, b) => a.price - b.price)
                    handleSorters(results?.sort((a, b) => a.price - b.price))
                    // console.log(results?.sort((a, b) => a.price - b.price))
                    break;            
                default:
                    // newArr = results?.sort((a, b) => b.price - a.price)
                    handleSorters(results?.sort((a, b) => b.price - a.price))
                    // console.log(results?.sort((a, b) => b.price - a.price))
                    break;
            }
            // console.log(newArr)
            // handleSorters(newArr)
            isOpen = false
        } 
        // switch (value) {
        //             case 'mas-vendido':
        //                 handleSorters(data?.sort((a, b) => b.sold_quantity - a.sold_quantity))
        //                 break;
        //             case 'menos-vendido':
        //                 handleSorters(data?.sort((a, b) => a.sold_quantity - b.sold_quantity))
        //                 break;
        //             case 'menor-precio':
        //                 handleSorters(data?.sort((a, b) => a.price - b.price))
        //                 break;            
        //             default:
        //                 handleSorters(data?.sort((a, b) => b.price - a.price))
        //                 break;
        //         }
        //         console.log(value)


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
        
        {/* <div className="btn-group">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                Sort
            </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-md-start">
                <li><button onClick={handleClick} className="dropdown-item" type="button" value="mas-vendido">Mas vendido</button></li>
                <li><button onClick={handleClick} className="dropdown-item" type="button" value="menos-vendido">Menos vendido</button></li>
                <li><button onClick={handleClick} className="dropdown-item" type="button" value="menor-precio">Menor precio</button></li>
                <li><button onClick={handleClick} className="dropdown-item" type="button" value="mayor-precio">Mayor precio</button></li>
            </ul>
        </div> */}
        </>
    );
};

export default SorterPanel;


