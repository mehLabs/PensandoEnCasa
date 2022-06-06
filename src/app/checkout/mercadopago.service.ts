import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {environment as env} from '../../environments/environment';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {

  constructor(private http:HttpClient) { }

  comprar(productos:Producto[]){ //TODO set productos an interface
    console.log("sending post to "+`${env.dev.serverUrl}/api/public/mp/createAndRedirect`);
    return this.http.post(
      `${env.dev.serverUrl}/api/public/mp/createAndRedirect`,
      productos,
      {responseType: 'text'});
  }

  comprarDirect(productos:any){
    window.location.href = (`${env.dev.serverUrl}/api/public/mp/createAndRedirect?name=`+productos.name+'&price='+productos.price+'&img='+productos.img);
  
  }
}
