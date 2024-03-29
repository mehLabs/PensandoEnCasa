import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Promo } from 'src/app/interfaces/promo';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-admin-promos',
  templateUrl: './admin-promos.component.html',
  styleUrls: ['./admin-promos.component.css']
})
export class AdminPromosComponent implements OnInit {
  promo:Promo = {
    id: 0,
    img: '',
    alt: '',
    type: '',
    type_id: 0

  }

  loadingMain:boolean = false;
  imgMain:any;
  promoForm:FormGroup = new FormGroup({});
  articulos: any = [];
  categorias:any = [];
  selectedType: boolean = false;
  promos:any = [];

  constructor(private router: Router, private backend:StoreService, private fb:FormBuilder, private firebase:FirebaseStorageService) { }

  ngOnInit(): void {
    this.backend.getOfertas().subscribe( lasPromos => {
      this.promos = lasPromos;
      console.log(lasPromos)
    });

    this.promoForm = this.fb.group({
      alt: new FormControl(this.promo.alt,[Validators.required]),
      img: new FormControl(this.promo.img,[Validators.required]),
      type: new FormControl(this.promo.type,[Validators.required]),
      type_id: new FormControl(this.promo.type_id,[Validators.required])
    })

    this.backend.obtenerDatos().subscribe(articulos => {this.articulos = articulos});
    this.backend.obtenerCategorias().subscribe(categorias => {this.categorias = categorias});
  }

  getObjId(type:string): any{
    switch (type) {
      case "articulo": 
        return this.articulos;
      case "categoria": 
        return this.categorias;
    
      default:
        return null;
    }
  }

  onEnviar(){
    this.loadingMain = true;
    this.subirImagen();
  }



  async subirImagen(){
    let urle = '';
    let imagen:object = this.imgMain.target.files[0];
    await this.uploadFile(imagen,this.promo.type+"-"+this.promo.type_id);
  }

  prepImagen($event:any){
    this.imgMain = $event;
  }

  async uploadFile(file:any,name:string){
    let reader = new FileReader();
    let url:string = '';

    reader.readAsDataURL(file);
    console.log(typeof(file));
    reader.onloadend = async () => {
      console.log(reader);
      await this.uploadFileToFB(reader,name).then( urle => {
        url = urle;
        console.log(url);
        this.backend.newOferta(this.promo).subscribe( (retorno => {
          if (retorno){
            this.router.navigateByUrl("/");
          }
        }));
      });
    }
  }

  async uploadFileToFB(reader:any,name:any){
    let url:any;
    await this.firebase.subirImagen(name , reader.result).then( urlImage => {
      if (urlImage !== null){
        this.changeImage(urlImage);
        console.log("Uploaded");
        url = urlImage;
      }
    })
    return url; //it returns the url OK
  }

  changeImage(url:string){
    this.promo.img = url;
  }
}
