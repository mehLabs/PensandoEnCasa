import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router'; //para los parametros de ?estetipo=true
import { filter } from 'rxjs/operators';

import { StoreService } from 'src/app/services/store.service';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input() category?:Params | null;
  
  products:any;
  loaded:boolean = false; //cuando se pone en true se elimna el spinner
  
  constructor(private route:ActivatedRoute, private dataStore: StoreService, public fbStorage:FirebaseStorageService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.category = params['category'];
      })

    this.dataStore.obtenerDatos().subscribe(data =>{
      if (this.category === undefined){
        this.products=data;
        this.loaded=true;
      }else{
        let newData:any = [];
        for (let product of data){
          this.dataStore.obtenerCategoria(product.id_categoria).subscribe(categoria =>{
            if (categoria.nombre === this.category){
              newData.push(product);
            };
          })
        }
        this.products = newData;
        this.loaded=true;
      }
    });
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