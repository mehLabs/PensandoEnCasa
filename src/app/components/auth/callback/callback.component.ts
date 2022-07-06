import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FirebaseStorageService } from 'src/app/services/firebase-storage.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  cargado:boolean = false;
  constructor(private firebase:FirebaseStorageService,private store:StoreService,private router:Router) { }

  ngOnInit(): void {
    this.store.getJWT().subscribe( jwt => {
      console.log(jwt);
      this.firebase.signInToFirebase(jwt.token).finally( () => {
        console.log("success");
        this.cargado=true;
      }).catch((error) => {
        console.log(error);
        alert("Ha habido un error en el inicio de sesión, por favor cierre sesión y vuelva a intentarlo")
      });
    })
  }

}
