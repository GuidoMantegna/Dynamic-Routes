
import { Link } from 'react-router-dom';
import cardImg from '../assets/imgs/generic-product.jpg'

interface props {
    categories: {id: string, name: string, category: string}[];
    children_categories: {name: string, id:string}[];
    section: string
}

const Categories: React.FC<props> = ({categories, section}) => {

    return (
        <div className="container">
            {/* <ul className="categories-list row gy-3 p-2">
                {
                section==='home'
                ? categories.map(cat => {
                    return (
                        <Link to={`/MLA/${cat.id}`} className="card-group col-6 col-sm-4 col-xl-3" key={cat.id}>
                            <div className="card h-100">
                                <img src={cardImg} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                <h5 className="card-title lead text-center text-dark">{cat.name}</h5>
                                </div>
                            </div>
                        </Link>
                    )
                  })
                : categories.children_categories.map(cat => {
                    return (
                        <Link to={`/MLA/${cat.category}`} className="card-group col-6 col-sm-4 col-xl-3" key={cat.children_categories.id}>
                            <div className="card h-100">
                                <img src={cardImg} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                <h5 className="card-title lead text-center text-dark">{cat.name}</h5>
                                </div>
                            </div>
                        </Link>
                    )
                  })
                }
            </ul> */}
            
        </div>
    );
};

export default Categories;