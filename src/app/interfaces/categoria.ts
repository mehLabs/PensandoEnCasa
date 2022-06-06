type Nullable<T> = T | null;
export interface Categoria{
    nombre:string;
    id_categoria: Nullable<number>;
}
