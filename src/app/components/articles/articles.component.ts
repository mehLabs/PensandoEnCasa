import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router'; //para los parametros de ?estetipo=true

import { StoreService } from 'src/app/services/store.service';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { AuthService } from '@auth0/auth0-angular';

import {environment as env} from '../../../environments/environment';

import { Title } from '@angular/platform-browser';
import { Producto } from 'src/app/interfaces/producto';


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
  @Input() rol:any;

  
  constructor(
    private route:ActivatedRoute, 
    private dataStore: StoreService, 
    public fbStorage:FirebaseStorageService,
    private auth:AuthService,
    private titleService:Title,
    ) {}

  ngOnInit(): void {
    let userRole:any;
    this.auth.user$.subscribe(data => {
      console.log(data);
      if (data !== null && data !== undefined ){
        userRole = data[`${env.auth.audience}`+"roles"][0];
        
        this.rol = userRole;
      }
    })
    this.titleService.setTitle("Lista de productos - Pensando en Casa");    

    this.route.queryParams
      .subscribe(params => {
        this.category = params['category'];
        if (this.category === undefined || this.category === null){
          this.dataStore.obtenerDatos().subscribe(data => {
            console.log(data);
            this.products=data;
            this.loaded=true;
          })
        }else{
          this.dataStore.getArticulosPorCat(this.category).subscribe( data => {
            this.products=data;
            this.dataStore.obtenerCategoria(this.category).subscribe(categoria =>{
              this.categoryName = categoria.nombre;
              this.categoryDes = categoria.descripcion;
              this.titleService.setTitle(categoria.nombre + " - Pensando en Casa")
            });
            this.loaded=true;
          })
        }
      })
    }

  


  eliminarProducto(producto:any){
    this.dataStore.eliminarProducto(producto).subscribe((eliminado:Boolean) =>{
      if (eliminado){
        producto.nombre = "ELIMINADO";
        producto.descripcion = "";
        producto.precio = "0.01";
        this.products = this.products.filter((product:Producto) => product.id_article !== producto.id_article);
      }
    });
  }

  


}