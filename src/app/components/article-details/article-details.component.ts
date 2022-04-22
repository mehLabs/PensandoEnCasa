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
  id:any;

  constructor(private dataStore: StoreService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.dataStore.obtenerDatos().subscribe(data => {
      this.id=this.route.snapshot.paramMap.get('productId');
      this.singleProduct = this.dataStore.obtenerArticulo(this.id);
      console.log(this.id);
      console.log(this.singleProduct);
    });
  }

}
