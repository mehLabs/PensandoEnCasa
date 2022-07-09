import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {environment as env} from '../../../environments/environment';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  rol:any;

  constructor(private auth: AuthService) {
   }

  ngOnInit(): void {
    let userRole:any = null;
    this.auth.user$.subscribe(data => {
      console.log(data);
      if (data !== null && data !== undefined ){
        userRole = data[`${env.auth.audience}`+"roles"][0];
        
        this.rol = userRole;
      }
    })
  }

  

}
