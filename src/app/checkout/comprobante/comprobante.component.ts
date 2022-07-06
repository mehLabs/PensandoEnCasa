import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pago } from 'src/app/interfaces/pago';
import { MercadopagoService } from '../mercadopago.service';

@Component({
  selector: 'app-comprobante',
  templateUrl: './comprobante.component.html',
  styleUrls: ['./comprobante.component.css']
})
export class ComprobanteComponent implements OnInit {
  payment_id:any;
  pago:Pago|null = null;
  url:string = '';

  constructor(private route:ActivatedRoute,private mercadopago:MercadopagoService) { }

  ngOnInit(): void {
    this.payment_id = this.route.queryParams.subscribe((params:any) => {
      this.payment_id = params['payment_id'];
      console.log(this.payment_id);
      this.mercadopago.getPago(this.payment_id).subscribe((newPago:any) =>{
        console.log(newPago);
        this.pago = newPago;
        this.url = window.location.href;
      })
    });

  }

}
