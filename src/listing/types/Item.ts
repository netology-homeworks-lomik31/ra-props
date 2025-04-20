import Image from "./Image"

interface Item {
    listing_id: number,
    url: string,
    MainImage: Image,
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
    state: string,
}

export default Item;
