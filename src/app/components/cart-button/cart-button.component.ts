import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent implements OnInit {
  itemsQuantity:number = 0;

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getQuantity().subscribe( (cant) => {
      this.itemsQuantity = cant;
    });
  }

}
