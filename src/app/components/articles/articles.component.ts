import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  products:any;
  loaded:boolean = false; //cuando se pone en true se elimna el spinner
  
  constructor(private dataStore: StoreService, public fbStorage:FirebaseStorageService) { }

  ngOnInit(): void {
    this.dataStore.obtenerDatos().subscribe(data =>{
      this.products=data;
      this.loaded=true;
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