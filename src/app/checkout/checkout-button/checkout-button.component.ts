import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { CheckoutService } from '../../checkout/checkout.service';

import { get } from 'scriptjs';
import { MercadopagoService } from '../mercadopago.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-button',
  templateUrl: './checkout-button.component.html',
  styleUrls: ['./checkout-button.component.css']
})
export class CheckoutButtonComponent implements OnInit {

  init_point: any;
  
  preference = {
    items: [
        {
            title: 'Mi producto',
            unit_price: 100,
            quantity: 1,
        }
    ]
  };

  constructor(private mercadopago:MercadopagoService, private cart:CartService) { }

  ngOnInit(): void {

    get("https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js", () => {
      //library has been loaded...
    });
  }

  onBuy() {
    let items = this.cart.getItems();

    this.mercadopago.comprar(items).subscribe(data => {
      console.log("Redirecting to MP");
      console.log(data);
      window.location.href = data;
    });
      
  }


}
