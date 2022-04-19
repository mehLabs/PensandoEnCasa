import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  products:any;

  constructor(private dataStore: StoreService) { }

  ngOnInit(): void {
    this.dataStore.obtenerDatos().subscribe(data =>
      this.products=data)
  }

}