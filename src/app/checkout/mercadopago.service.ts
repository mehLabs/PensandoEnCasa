import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {environment as env} from '../../environments/environment';
import { Preferencia } from '../interfaces/preferencia';

@Injectable({
  providedIn: 'root'
})
export class MercadopagoService {

  constructor(private http:HttpClient) { }

  comprar(productos:Preferencia){ //TODO set productos an interface
    console.log("sending post to "+`${env.dev.serverUrl}/api/public/mp/createAndRedirect`);
    return this.http.post(
      `${env.dev.serverUrl}/api/public/mp/createAndRedirect`,
      productos,
      {responseType: 'text'});
  }

  getPago(id:string):Observable<string>{
    return this.http.get<string>(
      `${env.dev.serverUrl}/api/public/mp/getPago?id=`+id,
    )
  }

  getPagos():Observable<string[]>{
    return this.http.get<string[]>(
      `${env.dev.serverUrl}/api/protected/getPagos`,
    )
  }

  getEntregados():Observable<string[]>{
    return this.http.get<string[]>(
      `${env.dev.serverUrl}/api/protected/getEntregas`
    )
  }

  entregarPedido(id:string):Observable<boolean>{
    let idLong:number = Number.parseInt(id);
    return this.http.post<boolean>(
      `${env.dev.serverUrl}/api/protected/pedido/entrega/`+idLong, null
    )
  }

  cancelarPedido(id:string):Observable<boolean>{
    let idLong:number = Number.parseInt(id);
    return this.http.post<boolean>(
      `${env.dev.serverUrl}/api/protected/pedido/del/`+idLong, null

    )
  }

  borrarEntregado(id:string):Observable<boolean>{
    let idLong:number = Number.parseInt(id);
    return this.http.post<boolean>(
      `${env.dev.serverUrl}/api/protected/entregas/del/`+idLong, null
    )
  }

  comprarDirect(productos:any){
    window.location.href = (`${env.dev.serverUrl}/api/public/mp/createAndRedirect?name=`+productos.name+'&price='+productos.price+'&img='+productos.img);
  
  }
}
