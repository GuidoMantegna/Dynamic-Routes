import { Data } from '../interfaces/Data';

type Props = {
    results: Data[] | undefined;
}

const ResulstList: React.FC<Props> = ({ results }) => {

    return (
        <ul className="results-list container">
            {results?.map(item => {
                return (
                    <a href={item.permalink} className="results-item bg-white p-3 border-bottom" key={item.id}>
                        <div className="item-img">
                            <img className="img-fluid" src={item.thumbnail} alt="item-img" />
                        </div>
                        <div className="item-info row align-items-around ps-4 ps-md-5">
                            <h5 className="fw-light h6">{item.title}</h5>
                            <span className="h6 strong">$ {new Intl.NumberFormat('de-DE').format(item.price)}</span>
                            <p className="small">vendidos: <span>{item.sold_quantity}</span></p>
                        </div>
                    </a>
                )
            })}
        </ul>
    );
};

export default ResulstList;