import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Category = () => {
    const { id, category, search } = useParams<{id: string, category: string, search: string}>();

    type Data = {
        name: string;
        picture: string;
        children_categories: {name: string; id:string}[]
    }

    const [data, setData] = useState<Data>();

    useEffect(() => {
        fetchData(`https://api.mercadolibre.com/categories/${category}`)
    }, [])

    async function fetchData(url:string) {
        const getData = await fetch(url);
        const data = await getData.json();
        
        setData(data)
    }

    return (
        <>
        <Header handleSearch={()=>{}} section="subcategories"/>
        <Navbar/>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb m-3">
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item"><Link to={`/${id}`}>Categorias</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{data?.name}</li>
            </ol>
        </nav>
        <div className="container">
            <ul className="categories-list row gy-3 p-2">
                {data?.children_categories.map(cat => {
                    return (
                        <Link to={`/${id}/${category}/${cat.name}`} className="card-group col-6 col-sm-4 col-xl-3" key={cat.id}>
                            <div className="card h-100">
                                <img src={data.picture} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                <h5 className="card-title lead text-center text-dark">{cat.name}</h5>
                                </div>
                            </div>
                        </Link>
                    )
                  })
                }
            </ul> 
        </div>
        </>
    );
};

export default Category;