import { Producto } from "./producto";

type Nullable<T> = T | null;
export interface Preferencia {
    items:Producto[];
    payer:{
        name:string | undefined;
        surname:string | undefined | undefined;
        email:string | undefined;
        phone: {
            areaCode:number | undefined;
            number:number | undefined;
        };
        identification: {
            type:string | undefined;
            number:number | undefined;
        };
        address:{
            streetName:string | undefined;
            streetNumber:number | undefined;
            zipCode:string | undefined;
            floor:string | undefined;
            dto:string | undefined;
            notes:string | undefined;
        }
    };
}
