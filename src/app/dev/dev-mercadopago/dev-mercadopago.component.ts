import { Component, OnInit } from '@angular/core';
import { MercadopagoService } from 'src/app/checkout/mercadopago.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-dev-mercadopago',
  templateUrl: './dev-mercadopago.component.html',
  styleUrls: ['./dev-mercadopago.component.css']
})
export class DevMercadopagoComponent implements OnInit {

  jsons:any = [];
  constructor(private mp:MercadopagoService) {
    mp.getPagos().subscribe(pagos => this.jsons = pagos);
   }

  ngOnInit(): void {
  }

}
