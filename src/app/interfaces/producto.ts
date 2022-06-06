type Nullable<T> = T | null;
export interface Producto{
    nombre: string;
    usado: boolean;
    precio: number;
    id_article: Nullable<number>;
    id_categoria: Nullable<number>;
    descripcion: string;
    cantidad: number;
    img1: Nullable<string>;
    img2: Nullable<string>;
    img3: Nullable<string>;
}