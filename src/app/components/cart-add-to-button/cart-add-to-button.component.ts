import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-add-to-button',
  templateUrl: './cart-add-to-button.component.html',
  styleUrls: ['./cart-add-to-button.component.css']
})
export class CartAddToButtonComponent implements OnInit {
  @Input() productId:any;
  @Input() product:Producto | undefined;
  @Input() cant:number | undefined;
  @Output() removeItem: EventEmitter<any> = new EventEmitter<any>();
  @Output() minusItem: EventEmitter<number> = new EventEmitter<number>();
  @Output() addItem: EventEmitter<number> = new EventEmitter<number>();

  constructor(private cart:CartService) { }

  ngOnInit(): void {
      setTimeout(() => {
        if (this.product !== undefined && this.cant !== undefined && this.cant > 0){
          console.log(this.product.nombre + "tiene "+ this.cant);
          this.addToCartInit(this.product,this.productId,this.cant);
        }
      }, 300);
  }
  addToCart(product:Producto,id:any){
    let cant = this.cart.addToCart(product);
    product.cantidad = cant;
    let boton = document.getElementById('btn'+id);
    let botonText = document.getElementById('btnText'+id);
    let plusMinus = document.getElementById("plusMinus"+id);
    let cantText = document.getElementById('cant'+id);
    
    plusMinus?.classList.add("show");
    cantText?.classList.add("showQuantity");

    boton?.classList.add("carrito");
    if (botonText !== null) {
      botonText.innerHTML = '<i class="bi bi-check-lg"><i>'
    }
    product.cantidad = 1;

    
  }
  addToCartInit(product:Producto,id:any,cant:number){
    product.cantidad = cant;
    let boton = document.getElementById('btn'+id);
    let botonText = document.getElementById('btnText'+id);
    let plusMinus = document.getElementById("plusMinus"+id);
    let cantText = document.getElementById('cant'+id);
    
    plusMinus?.classList.add("show");
    cantText?.classList.add("showQuantity");

    boton?.classList.add("carrito");
    if (botonText !== null) {
      botonText.innerHTML = '<i class="bi bi-check-lg"><i>'
    }

    
  }

  removeFromCart(product:Producto,id:number){
    this.cart.removeItem(product);
    let boton = document.getElementById('btn'+id);
    let botonText = document.getElementById('btnText'+id);
    let plusMinus = document.getElementById("plusMinus"+id);
    let cantText = document.getElementById('cant'+id);
    
    plusMinus?.classList.remove("show");
    cantText?.classList.remove("showQuantity");

    boton?.classList.remove("carrito");
    if (botonText !== null) {
      botonText.innerHTML = 'Añadir al carrito'
    }
    this.removeItem.emit(id);
  }

  plusToCart(product:Producto){
    this.cart.addToCart(product);
    this.addItem.emit(product.precio);
  }

  minusToCart(product:Producto,id:number){
    if (product.cantidad === 1){
      this.askRemove(product,id);
    }else if (product.cantidad>1){
      this.cart.minusItem(product);
      this.minusItem.emit(product.precio);
    }
  }

  cancel(id:number){
    let caja = document.getElementById("plusMinus"+id);
    caja?.classList.remove("remove-btn");
  }

  askRemove(product:Producto,id:number){
    let caja = document.getElementById("plusMinus"+id);
    caja?.classList.add("remove-btn");
  }

  onClickRemove(product:Producto,id:number){
    this.cancel(id);
    this.removeFromCart(product,id);
  }

}
