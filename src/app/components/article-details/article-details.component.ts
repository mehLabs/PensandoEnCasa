import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';



@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  singleProduct:any;

  constructor(private dataStore: StoreService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.dataStore.obtenerDatos().subscribe(data => {
      this.route.paramMap.subscribe(params => {
        this.singleProduct = data.products[+params.get('productId') ];
      });
    });
  }

}
