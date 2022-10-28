export interface Compra_modelo{
    id_producto: string, //corresponde con el ID del producto (colección Productos)
    name_product: string,
    unit_price: number,
    amount: number,
    total: number,
    date: string,
    _id?: string,
}