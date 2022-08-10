import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categorias:any;
  buy:boolean = true;
  loaded:boolean = false;

  Array = Array;

  constructor(private storeService: StoreService) {
   }

  ngOnInit(): void {
    this.storeService.obtenerCategorias().subscribe(categoriasS => {
      this.categorias=categoriasS;
      //this.loaded = true;
      
      let concatCat:string='';
      for (let categoria of categoriasS){
        concatCat += categoria.nombre +" ";
      }
      //this.metaService.updateTag(null,"tag_attribute='Artículos del hogar, Bahía Blanca. '"+concatCat);
    });

    this.storeService.isLoaded().subscribe(data =>{
      //this.loaded = data;
    })

    setTimeout(() => {
      this.loaded = true;
    }, 5000);
  
  }

  verMas(){
    this.buy = !this.buy;
  }

}
