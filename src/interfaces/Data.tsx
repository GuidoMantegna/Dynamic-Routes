export interface Data {
    id: string,
    thumbnail: string,
    title: string,
    price: number,
    sold_quantity: number,
    permalink: string,
    shipping: {free_shipping: boolean},
    condition: string,
    installments: {
        rate: number,
        quantity: number,
    },
}