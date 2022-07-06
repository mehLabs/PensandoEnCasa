import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { CartService } from 'src/app/services/cart.service';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products:Producto[] = [];

  constructor(
    private searchS:SearchService,
    public fbStorage:FirebaseStorageService,
    private cart:CartService
    ) {}

  ngOnInit(): void {
    this.products = this.searchS.getSearched();
  }
  
  addToCart(product:Producto){
    this.cart.addToCart(product);
  }

}
