import { Component, OnInit } from '@angular/core';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';

type Nullable<T> = T | null;


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  creado:any;
  nameIsEmpty:boolean = true;

  //Articulo
  nombre: string = '';
  usado: boolean = false;
  precio: number = 0;
  id_article: Nullable<number> = null;
  id_categoria: Nullable<number> = null;
  descripcion: string = '';
  cantidad: number = 0;
  img1: Nullable<string> = null;
  img2: Nullable<string> = null;
  img3: Nullable<string> = null;

  imgSupp:any = [];

  constructor(private dataStore: StoreService, private storageService: FirebaseStorageService) {}

    
  //Categoria
  categories: any = [{
    name: "Colchones",
    id: "1"
    },{
      name: "Jardin",
      id: "2"
    },{
      name: "Baño",
      id: "3"
    }];

    

  onEnviar(){
    //TODO agregar una tabla llamada imagenes que esté linkeada "onetomany" a articulos
    this.img1 = this.imgSupp[0];
    this.img2 = this.imgSupp[1];
    this.img3 = this.imgSupp[2];

    const {nombre,usado,precio,id_article,id_categoria,descripcion,cantidad,img1,img2,img3} = this;
    const nuevoProducto = {nombre,usado,precio,id_article,id_categoria,descripcion,cantidad,img1,img2,img3};
    
    this.dataStore.nuevoProducto(nuevoProducto).subscribe(data => {
      this.creado = data
      console.log(this.creado);
    });
  }

  cargarImagen(event:any){
    let archivos = event.target.files;
    let largo = 3;

    if (archivos.length < 3){
    largo = archivos.length;
    }

    for (var i=0;i<largo;i++){
    this.uploadFile(archivos[i],i);
    
    }
  }

  uploadFile(file:any,i:number):any{
    let reader = new FileReader();
      reader.readAsDataURL(file);
      console.log(i);
      reader.onloadend = () => {
        console.log(reader);
        this.storageService.subirImagen(this.nombre+"_img-"+ (i+1) , reader.result).then( urlImage => {
          this.imgSupp.push(this.nombre+"_img-"+ (i+1));
          console.log("Uploaded");
          return urlImage;
        })
      }
  }

  isNameEmpty(event:any):void{
    if (event.length > 0){ this.nameIsEmpty = false }
    else { this.nameIsEmpty = true }
  }

  ngOnInit(): void {
  }

}
