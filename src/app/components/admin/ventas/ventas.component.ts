import { Component, OnInit } from '@angular/core';
import { Item, Pago } from 'src/app/interfaces/pago';
import {MercadopagoService} from '../../../checkout/mercadopago.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  ventas: Pago[] = [];
  entregados: Pago[] = [];
  hoy:number = 0;
  cargado:boolean = false;

  constructor(private mercadopago:MercadopagoService) { }

  ngOnInit(): void {
    this.mercadopago.getPagos().subscribe( (pagos:any) => {
      this.cargado = true;
      console.log(pagos);
      this.ventas = pagos;
    });
    this.mercadopago.getEntregados().subscribe( (pagos:any) => {
      this.entregados = pagos;
    })
    this.hoy = Date.now();
  }

  getTotal(products:Array<Item>){
    let sum:number = 0;
    for (let element of products){
      sum += element.unitPrice;
    }
    return sum;
  }

  getDate(fecha:string):number{
    return Math.round((this.hoy - Date.parse(fecha)) / (1000*3600*24));
  }

  entregar(id:string){
    this.mercadopago.entregarPedido(id).subscribe( data => {
      let i = this.ventas.findIndex((pago) => pago.id === id);
      this.entregados.push(this.ventas[i]);
      this.ventas.splice(i,1);
    });
  }

  cancelar(id:string,i:number){
    this.mercadopago.cancelarPedido(id).subscribe(data => {
      this.ventas.splice(i,1);
    })
  }

  borrar(id:string,i:number){
    this.mercadopago.borrarEntregado(id).subscribe(data => {
      this.entregados.splice(i,1);
    })
  }

}
