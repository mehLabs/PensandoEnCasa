import { Component, OnInit, Renderer2 } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { CartService } from 'src/app/services/cart.service';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Producto[];
  hay:boolean;
  total:number = 0;


  constructor(
    public firebase:FirebaseStorageService,
    private cart:CartService,
    ) {
    if (this.cart.getItems().length > 0){
      this.products = this.cart.getItems();
      this.hay = true;
    }else{
      this.products = [];
      this.hay = false;
    }
  }

  ngOnInit(): void {

    this.setPrecioTotal();

  }

  removeItem(product:Producto,i:number){
    this.cart.removeItem(product);
    this.products.splice(i,1);
    this.setPrecioTotal();
    this.checkVacio();
  }
  removeItemFromEmit(i:number){
    this.products.splice(i,1);
    this.setPrecioTotal();
    this.checkVacio();
  }

  setPrecioTotal(){
    this.total = 0;
    if (this.products.length > 0){
      for (let product of this.products){
        this.total += (product.precio * product.cantidad);
      }
    }
  }
  
  plusToCart(product:Producto){
    this.cart.addToCart(product);
    this.total += product.precio;

  }

  minusToCart(product:Producto,i:number){
    this.total -= product.precio;
    let debeExistir = this.cart.minusItem(product);
    if (!debeExistir){
      this.removeItem(product,i)
    }
  }

  checkVacio(){
    
    if (this.cart.getItems().length > 0){
      this.products = this.cart.getItems();
      this.hay = true;
    }else{
      this.products = [];
      this.hay = false;
    }
  }

  minusItem(precio:number){
    this.total -= precio;
  }
  plusItem(precio:number){
    this.total += precio;
  }
}
