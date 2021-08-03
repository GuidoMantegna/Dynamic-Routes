import { useState, useEffect } from 'react';

// Sites: Devuelve información sobre los sitios donde Mercado Libre está disponible.
// https://api.mercadolibre.com/sites/MLA (Sitio de Argentina)
/*

*/

// Categories: Devuelve las categorías disponibles en el sitio.
// https://api.mercadolibre.com/sites/MLA/categories (Todas la categorias de ARG)

// Category ID: Devuelve información sobre la categoría.
// https://api.mercadolibre.com/categories/MLA1512 (Categoria especifica de ARG)

// Obtener ítems listados en una categoría.
// 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1512' (busqueda gral de categoria)
/* Props:
.results = [list of products]
.results[n] = {Specific product}
    - .consdition = "new" / ""
    - .id = string
    - .price = number
    - .thumbnail = "url"
    - .title = string
    - .sold_quatity = number
    - .available_quantity = number
    - .shipping.free-shipping: boolean
    - .installments: 
        .quantity: number (n de cuotas)
        .rate: number (n de interes)
*/

// Search: Obtener items de una consulta de busqueda.
// 'https://api.mercadolibre.com/sites/MLA/search?q=bicicleta' (busqueda especifica)

// Domain Discovery: Predictor de categorías. Devuelve la categoría correspondente para enumerar un artículo basándose en el título, dominio e/ou atributos
// 'https://api.mercadolibre.com/sites/MLA/domain_discovery/search?q=bicicleta'
/*
attributes: []
category_id: "MLA6143"
category_name: "Bicicletas"
domain_id: "MLA-BICYCLES"
domain_name: "Bicicletas
*/

const AppiRefs = () => {

    useEffect(() => {
        fetchData('https://api.mercadolibre.com/categories/MLA5725')
    }, [])

    const fetchData = async (url: string) => {
        const getData = await fetch(url);
        const jsonData = await getData.json();
    }

    return (
        <div>
            
        </div>
    );
};

export default AppiRefs;