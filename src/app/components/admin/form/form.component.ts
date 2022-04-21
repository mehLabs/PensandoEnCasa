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
  imgSupp = [this.img1,this.img2,this.img3];

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
    const {nombre,usado,precio,id_article,id_categoria,descripcion,cantidad,img1,img2,img3} = this;
    const nuevoProducto = {nombre,usado,precio,id_article,id_categoria,descripcion,cantidad,img1,img2,img3};
    
    this.dataStore.nuevoProducto(nuevoProducto).subscribe(data => this.creado = data);
    console.log(this.creado);
  }

  cargarImagen(event:any){
    let archivos = event.target.files;
    let largo = 3;

    if (archivos.length < 3){
    largo = archivos.length;
    }


    for (var i=0;i<largo;i++){
      let reader = new FileReader();
      reader.readAsDataURL(archivos[i]);
      console.log(i);
      this.readFile(archivos[i],i);
      
    
    }
  }

  private readFile(file: any, i:number): Observable<string> {
    return new Observable(obs => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        console.log("?");
        obs.next(reader.result as string);
        this.storageService.subirImagen(this.nombre+"_img-"+ (i+1) , reader.result).then( urlImage => {
          console.log(urlImage);
          this.imgSupp[i] = urlImage;
        })
        obs.complete();
      }
    })
  }


  isNameEmpty(event:any):void{
    if (event.length > 0){ this.nameIsEmpty = false }
    else { this.nameIsEmpty = true }
  }

  ngOnInit(): void {
  }

}
