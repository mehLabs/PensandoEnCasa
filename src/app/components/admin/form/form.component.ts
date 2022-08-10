import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import $ from "jquery";
import { Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria';

type Nullable<T> = T | null;


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  creado:any;
  errorCheck:boolean = false;
  nameIsEmpty:boolean = true;
  cantIsEmpty:boolean = true;
  precioIsEmpty:boolean = true;
  catIsEmpty:boolean = true;
  fileIsEmpty:boolean = true;
  modal = document.getElementById('creadoModal');

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

  isImg:any = [];
  imgSupp:any = [];

  constructor(public route:Router,private dataStore: StoreService, public storageService: FirebaseStorageService) {}

    
  //Categoria
  categories:Categoria[] = [];

  newCat(categoria:Categoria){
    this.categories.push(categoria);
    console.log("the new categories:");
    console.log(this.categories);
  }

  deleteCat(categoria:Categoria){
    console.log("la categoria");
    console.log(categoria);
    let newCategories = this.categories.filter( cat => cat.id_categoria !== categoria.id_categoria);
    console.log(newCategories);
    this.categories = newCategories;
  }

    

  onEnviar(){
    //TODO agregar una tabla llamada imagenes que esté linkeada "onetomany" a articulos
    if (this.checkForm()){
      this.img1 = this.imgSupp[0];
      this.img2 = this.imgSupp[1];
      this.img3 = this.imgSupp[2];

      const {nombre,usado,precio,id_article,id_categoria,descripcion,cantidad,img1,img2,img3} = this;
      const nuevoProducto = {nombre,usado,precio,id_article,id_categoria,descripcion,cantidad,img1,img2,img3};
      
      this.dataStore.nuevoProducto(nuevoProducto).subscribe(data => {
        if (data !== null){
          this.creado = data;
          console.log(this.creado);
          ($('#creadoModal') as any).toggle();
        }else{
          alert("No se pudo agregar el artículo");
        }
        }
        )
    }else{
      alert("Por favor rellene los campos restantes");
    }
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
      this.isImg[i] = 1;
      reader.readAsDataURL(file);
      console.log(typeof(file));
      console.log(this.isImg[i]);
      reader.onloadend = () => {
        console.log(reader);
        this.storageService.subirImagen(this.nombre+"_img-"+ (i+1) , reader.result).then( urlImage => {
          console.log("El porcentaje de carga de "+i+" es "+this.isImg[i]);
          this.changeImage(i,2);
          this.imgSupp.push(this.nombre+"_img-"+ (i+1));
          this.fileIsEmpty = false;
          console.log("Uploaded");
          return urlImage;
        })
      }
  }

  isNameEmpty(event:any):void{
    if (event.length > 0){ this.nameIsEmpty = false }
    else { this.nameIsEmpty = true }
  }

  isCatEmpty(): boolean{
    if (this.id_categoria == null){
      this.catIsEmpty = true;
      return true;
    }else{
      this.catIsEmpty = false;
      return false
    }
  }

  isPrecioEmpty():boolean{
    if (this.precio <= 0){
      this.precioIsEmpty = true;
      return true;
    }else{
      this.precioIsEmpty = false;
      return false;
    }
  }

  isCantEmpty():boolean{
    if (this.cantidad <= 0){
      this.cantIsEmpty = true;
      return true;
    }else{
      this.cantIsEmpty = false;
      return false;
    }
  }

  checkForm():boolean{
    this.errorCheck = true;
    if ([this.nameIsEmpty, this.isCantEmpty(),this.isCatEmpty(), this.isPrecioEmpty()].every(c => c === true) ){
      return false;
    }else{
      return true;
    }
  }

  toggleModal(){
    ($('#creadoModal') as any).toggle();
  }

  addMore(){
    this.toggleModal();
    this.emptyAll();
  }

  emptyAll(){
  this.creado = undefined;
  this.errorCheck= false;
  this.nameIsEmpty= true;
  this.cantIsEmpty= true;
  this.precioIsEmpty = true;
  this.catIsEmpty = true;
  this.fileIsEmpty= true;

  //Articulo
  this.nombre = '';
  this.usado = false;
  this.precio = 0;
  this.id_article= null;
  this.id_categoria = null;
  this.descripcion= '';
  this.cantidad= 0;
  this.img1 = null;
  this.img2 = null;
  this.img3 = null;

  this.isImg = [];
  this.imgSupp= [];
  }

  
  creadoCheck(){
    this.route.navigate(['/articles/article',this.creado]);
  }

  ngOnInit(): void {
    this.dataStore.obtenerCategorias().subscribe(cat => {
      this.categories = cat;
    })
  }

  changeImage(i:any,num:number){
    
    this.isImg[i] = 2;
  }


}
