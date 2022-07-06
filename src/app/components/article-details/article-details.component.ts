import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  url = window.location.href;
  singleProduct:Producto | undefined;
  category:any;
  id:any;
  loaded:boolean = false; //cuando se pone en true se elimna el spinner

  constructor(private dataStore: StoreService, private router:Router, private route: ActivatedRoute, private storageFB:FirebaseStorageService) { 
    this.id=this.route.snapshot.paramMap.get('productId');
  }

  ngOnInit(): void {
    this.dataStore.obtenerArticulo(this.id).subscribe(data => {
      this.singleProduct = data;
      console.log(data);
      this.loaded= true;
      if (this.singleProduct !== undefined){

        this.singleProduct.img1 = this.storageFB.obtenerImgURL(this.singleProduct.img1);
        this.singleProduct.img2 = this.storageFB.obtenerImgURL(this.singleProduct.img2);
        this.singleProduct.img3 = this.storageFB.obtenerImgURL(this.singleProduct.img3);
        this.dataStore.obtenerCategoria(this.singleProduct.id_categoria).subscribe(categoria => this.category = categoria.nombre);
      }
    },
    err => {
      if(err.status === 500){
        this.router.navigate(['/ERROR']);
      }
    })
  }



}
