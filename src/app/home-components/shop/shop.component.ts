import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categorias:any;
  buy:boolean = false;
  constructor(private storeService: StoreService) {
   }

  ngOnInit(): void {
    this.storeService.obtenerCategorias().subscribe(categoriasS => this.categorias=categoriasS);
  }

  verMas(){
    this.buy = !this.buy;
  }

}
