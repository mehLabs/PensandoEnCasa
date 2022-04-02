import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import {products} from '../articles';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  product:any;

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    //this.route.paramMap.subscribe(params => {
    //  this.product = products[+params.get('productId') ];
    //})
  }

}
