export interface Producto_modelo{
    article: string,
    description: string,
    url_img: string,
    price: number,
    category: string,
    stock: number,
    _id?: string, //El signo (?), significa que este campo es opcinal
}