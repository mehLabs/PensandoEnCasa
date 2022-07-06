import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/auth';
import { environment } from 'src/environments/environment';
type Nullable<T> = T | null;


firebase.initializeApp(environment.firebaseConfig); //INIZIALIZA FIREBASE PARA USARLO ACÁ

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {
  
  storageRef = firebase.app().storage().ref();

  constructor() { }

  async subirImagen(nombre:string, imgBase64: any){

    try {
      let respuesta = (await this.storageRef.child('assets/images/'+nombre).putString(imgBase64, 'data_url'));
      return await (await respuesta).ref.getDownloadURL();
      //await espera a terminar la instrucción antes de seguir
      //el return devuelve la URL para mandarla a la base de datos y queda almacenada la ruta de la imagen
    }
    catch(err){
      console.log(err);   
      return null;
    }
  }

  obtenerImgURL(nombre:string | Nullable<string>):any{
    if (nombre !== null){
      return 'https://firebasestorage.googleapis.com/v0/b/storification-5a9f7.appspot.com/o/assets%2Fimages%2F'+nombre+'?alt=media';
    }else{ return null}
  }
  reemplazarEspacio(word:string){
    let nueva = '';
    for (let i=0;i<word.length;i++){
      if (word[i] === ' '){
        nueva = word.substring(0,i)+'%20'+word.substring(i+1,word.length);
      }
    }
    return nueva;
  }

  async uploadFile(file:any,nombre:any){
    console.log(typeof(file));
    let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        console.log(reader);
        let result:any;
        this.subirImagen(nombre+"_img-"+ (1) , reader.result).then( urlImage => {
          console.log("Uploaded");
          return result = urlImage;
        });
      }
  }

  signInToFirebase(JWT:string): Promise<any>{
    return firebase.auth().signInWithCustomToken(JWT);
  }
}
