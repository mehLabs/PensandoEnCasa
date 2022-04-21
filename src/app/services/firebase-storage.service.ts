import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';


firebase.initializeApp(environment.firebaseConfig); //INIZIALIZA FIREBASE PARA USARLO ACÁ

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {
  
  storageRef = firebase.app().storage().ref();

  constructor() { }

  async subirImagen(nombre:string, imgBase64: any){

    try {
      console.log("Nombre en servicio: "+nombre);
      let respuesta = this.storageRef.child('assets/images/'+nombre).putString(imgBase64, 'data_url');
      return await (await respuesta).ref.getDownloadURL();
      //await espera a terminar la instrucción antes de seguir
      //el return devuelve la URL para mandarla a la base de datos y queda almacenada la ruta de la imagen
    }
    catch(err){
      console.log(err);   
      return null;
    }
  }
}
