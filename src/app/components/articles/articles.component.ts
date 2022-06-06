import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router'; //para los parametros de ?estetipo=true
import { filter } from 'rxjs/operators';

import { StoreService } from 'src/app/services/store.service';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { AuthService } from '@auth0/auth0-angular';
import { Producto } from 'src/app/interfaces/producto';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input() category?:number | null;
  categoryName:any = null;
  categoryDes:any = null;
  
  products:any;
  loaded:boolean = false; //cuando se pone en true se elimna el spinner
  rol:any = null;

  
  constructor(
    private route:ActivatedRoute, 
    private dataStore: StoreService, 
    public fbStorage:FirebaseStorageService,
    private auth:AuthService,
    private cart:CartService
    ) {}

  ngOnInit(): void {

    let userRole:any = null;
    this.auth.user$.subscribe(data => {
      if (data !== null && data !== undefined ){
        userRole = data["https://infinite-refuge-54136.herokuapp.com/roles"][0];
        
        this.rol = userRole;
      }
    })
    

    this.route.queryParams
      .subscribe(params => {
        this.category = params['category'];
        if (this.category === undefined || this.category === null){
          this.dataStore.obtenerDatos().subscribe(data => {
            this.products=data;
            this.loaded=true;
          })
        }else{
          this.dataStore.getArticulosPorCat(this.category).subscribe( data => {
            this.products=data;
            this.dataStore.obtenerCategoria(this.category).subscribe(categoria =>{
              this.categoryName = categoria.nombre;
              this.categoryDes = categoria.descripcion;
            });
            this.loaded=true;
          })
        }
      })
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
  }

  plusToCart(product:Producto){
    this.cart.addToCart(product);

  }

  minusToCart(product:Producto,id:number){
    if (product.cantidad === 1){
      this.askRemove(product,id);
    }else if (product.cantidad>1){
      this.cart.minusItem(product);
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


  eliminarProducto(producto:any){
    this.dataStore.eliminarProducto(producto).subscribe((eliminado:Boolean) =>{
      if (eliminado){
        producto.nombre = "ELIMINADO";
        producto.descripcion = "";
        producto.precio = "0.01";
      }
    });
  }


}