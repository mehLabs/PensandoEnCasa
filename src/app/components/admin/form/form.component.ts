import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

type Nullable<T> = T | null;


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  creado:any;

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

    constructor(private dataStore: StoreService) {}

    
  
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

    


  ngOnInit(): void {
  }

}
