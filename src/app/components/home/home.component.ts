import { Component, OnInit } from '@angular/core';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mainBed = {
    img1: "../../../assets/images/mattres.webp",
    nombre: "Colchón",
    precio: 15000
  };
  offers = [this.mainBed]
  bestProducts:any = [];

  constructor(
    private dataStore: StoreService,
    public fbStorage: FirebaseStorageService
    ) { }

  ngOnInit(): void {
    this.dataStore.obtenerDatos().subscribe(data =>{
      if (data !== null){
        let sortedData = data.sort((n1:any,n2:any) => n1.precio - n2.precio);
        let count = 0;
        for (let i=sortedData.length-1;i>sortedData.length-3;i--){
  
          this.bestProducts[count] = sortedData[i];
          count++;
        }
        console.log(this.bestProducts);
        console.log(this.fbStorage.obtenerImgURL(this.bestProducts[0].img1));
      }
    });
    
  }

}
