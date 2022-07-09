import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Producto } from 'src/app/interfaces/producto';
import { Promo } from 'src/app/interfaces/promo';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { StoreService } from 'src/app/services/store.service';
import {environment as env} from '../../../environments/environment';

interface Offer{
  img: string,
  alt: string,
  id: number,
  type: string,
  type_id: number
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  mainBed:Offer = {
    img: "https://firebasestorage.googleapis.com/v0/b/storification-5a9f7.appspot.com/o/assets%2Ffixed_assets%2F41841e3abc2d627ee9b0620e9a678fa3.jpg?alt=media",
    alt: "Colchón",
    id: 0,
    type: '',
    type_id:0
  };
  rol:any = null;
  offers:Array<Offer> = [this.mainBed];
  bestProducts:any = [];

  constructor(
    private dataStore: StoreService,
    public fbStorage: FirebaseStorageService,
    private auth: AuthService
    ) { }

  ngOnInit(): void {
    let userRole:any = null;
    this.auth.user$.subscribe(data => {
      if (data !== null && data !== undefined ){
        userRole = data[`${env.auth.audience}`+"roles"][0];
        
        this.rol = userRole;
      }
    });
    this.dataStore.obtenerDatos().subscribe((data:any[]) =>{
      if (data !== null && data !== undefined && data.length > 0){
        let sortedData = data.sort((n1:any,n2:any) => {return n1.precio - n2.precio});
        let count = 0;
        for (let i=0;i<sortedData.length;i++){
          if (sortedData[i].img1 !== null){
            this.bestProducts[count] = sortedData[i];
            count++;
          }
        }
      }
    });
    this.dataStore.getOfertas().subscribe(ofertas => {
      for (let index = 0; index < ofertas.length; index++) {
        if (ofertas[index].img1 === null || ofertas[index].img1 === undefined){
          ofertas.slice(index,1);
        };
        
      }
      if (ofertas.length > 0){
        this.offers.push(ofertas);
      }
    })
    
  }

  eliminarArticulo(promo:Promo){
    switch (promo.type) {
      case 'articulo':
        this.dataStore.eliminarProducto(promo);
        break;
      case 'categoria':
        this.dataStore.eliminarCategoria(promo);
        break;
      default:
        break;
    }
  }

}
