import { Product } from "../models/product.model";

export interface ShowProducts{
    total: number;
    products: Product[];
}