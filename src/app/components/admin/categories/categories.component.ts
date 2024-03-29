import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/interfaces/categoria';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  nombre:any;
  id_categoria:any = '';
  categories:any = '';
  descripcion:any = '';
  img:any = '';

  filas: boolean[] = [];
  filasBU: string[] = [];
  loading: boolean[] = [];
  loadingMain:boolean = false;
  imgMain:any = null;

  mostrarForm:boolean = false;

  constructor(private servicio: StoreService, public firebase:FirebaseStorageService) { }
  @Output() newCat: EventEmitter<Categoria> = new EventEmitter();
  @Output() deleteCat: EventEmitter<Categoria> = new EventEmitter();

  ngOnInit(): void {
    this.servicio.obtenerCategorias().subscribe(categorias => {
      this.categories = categorias;
      this.filas.push(false);
      this.loading.push(false);
    });
  }

  editCategory(id:number){
    let catSpan = document.getElementById("catName_"+id);
    if (catSpan !== null){
      this.filas[id] = !this.filas[id]; 
      if (this.filas[id]){
        this.filasBU[id] = this.categories[id].nombre;
      }else{
        this.categories[id].nombre = this.filasBU[id];
      }
    }
  }

  mostrarFormu(){
    this.mostrarForm = !this.mostrarForm;
  }

  async onEnviar(){
    if(this.imgMain !== null){
      this.loadingMain = true;
      await this.subirImagen(this.juntarTodoYMandarlo,this.newCat);
    }else{
      alert("Falta una imagen para la categoría");
    } 
  }


  juntarTodoYMandarlo(url:any,nome:any,des:any,id:any,servicio:any,setNull:any,emit:any){
    console.log("juntar "+url);
    let {nombre,descripcion,img,id_categoria} = this || {};
    let categoria = {nombre,descripcion,img,id_categoria};
    categoria.img = url;
    categoria.descripcion = des;
    categoria.id_categoria = id;
    categoria.nombre = nome;
    console.log(categoria);
    servicio.nuevaCategoria(categoria).subscribe( (data:any) => {
      setNull(data);
      let imgInput = document.getElementById("image") as HTMLInputElement | null;
      if (imgInput){
        imgInput.value = '';
      }

      alert("CATEGORIA AGREGADA");
      console.log(data);
      emit.emit(data);
    });

  }

  setNull = (data:any) => {
    this.nombre = null;
    this.descripcion = null;
    this.img = null;
    this.id_categoria = null; 
    this.categories.push(data);
    this.filas.push(false);
    this.loading.push(false);
    this.loadingMain = false;
  }

  async subirImagen(callback:any,emit:any){
    let urle = '';
    let imagen:object = this.imgMain.target.files[0];
    await this.uploadFile(imagen,this.nombre+"cat",callback,emit);
  }

  prepImagen($event:any){
    this.imgMain = $event;
  }

  async uploadFile(file:any,name:string,callback:any,emit:any){
    let reader = new FileReader();
    let url:string = '';

    reader.readAsDataURL(file);
    console.log(typeof(file));
    reader.onloadend = async () => {
      console.log(reader);
      await this.uploadFileToFB(reader,name).then( urle => {
        url = urle;
        console.log(url);
        callback(url,this.nombre,this.descripcion,this.id_categoria,this.servicio,this.setNull,emit);
      });
    }
  }

  async uploadFileToFB(reader:any,name:any){
    let url:any;
    await this.firebase.subirImagen(this.nombre+"_img-"+ (name) , reader.result).then( urlImage => {
      this.changeImage(urlImage);
      console.log("Uploaded");
      url = urlImage;
    })
    return url; //it returns the url OK
  }

  changeImage(image:any){ //actualiza la img que se va a subir a la database
    this.img = image;
  }

  eliminarCategoria(categoria:any,id:number){
    this.loading[id] = true;
    this.servicio.eliminarCategoria(categoria).subscribe((eliminado:Boolean) =>{
      if (eliminado === true){
        this.deleteCat.emit(categoria);
        this.categories.splice(id,1);
        this.filas.splice(id,1);
      }else{
        alert("No podés borrar una categoría que tiene productos. Primero borrá los productos");
      }
      this.loading[id]=false;
    });
    
  }

  saveCategory(categoria:any,id:number){

  }

}
