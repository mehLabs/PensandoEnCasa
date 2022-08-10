import { Producto } from "./producto";

type Nullable<T> = T | null;
export interface Preferencia {
    additionalInfo:{
        address:{
            floor:string | undefined;
            dto:string | undefined;
            notes:string | undefined;
        }
    }
    items:Producto[];
    payer:{
        name:string | undefined;
        surname:string | undefined | undefined;
        email:string | undefined;
        phone: {
            areaCode:string | undefined;
            number:string | undefined;
        };
        identification: {
            type:string | undefined;
            number:string | undefined;
        };
        address:{
            streetName:string | undefined;
            streetNumber:string | undefined;
            zipCode:string | undefined;
        }
    };
}
