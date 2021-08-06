import { Data } from '../interfaces/Data';

type Props = {
    results: Data[] | undefined;
}

const ResulstList: React.FC<Props> = ({ results }) => {
    return (
        <ul className="results-list">
            {results?.map(item => {
                return (
                    <a href={item.permalink} className="results-item bg-white p-3 border-bottom" key={item.id}>
                        <div className="item-img">
                            <img className="img-fluid" src={item.thumbnail} alt="item-img" />
                        </div>
                        <div className="item-info row align-items-around ps-5">
                            <h5 className="fw-light">{item.title}</h5>
                            <span className="h5 strong">${item.price}</span>
                            <p className="lead fs-6">vendidos: <span>{item.sold_quantity}</span></p>
                        </div>
                    </a>
                )
            })}
        </ul>
    );
};

export default ResulstList;