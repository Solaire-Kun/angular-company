export const Product: {
    id: number,
    name: string;
    description: string;
    release: string;
    quantity: number;
    price: number;
    image: string;
}[] = [
        {
            id: 1,
            name: 'Riso',
            description: 'Commestibile',
            release: '23/01/2021',
            quantity: 30,
            price: 1,
            image: '../../assets/product.png'
        },
        {
            id: 2,
            name: 'Pasta',
            description: 'Non Commestibile',
            release: '13/31/2020',
            quantity: 30,
            price: 2,
            image: '../../assets/product.png'
        },
        {
            id: 3,
            name: 'TV',
            description: 'a nice TV',
            release: '25/02/2022',
            quantity: 20,
            price: 200,
            image: '../../assets/product.png'
        }
    ];