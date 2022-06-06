import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  rol:any = null;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    let userRole:any = null;
    this.auth.getUser().subscribe(data => {
      if (data !== null && data !== undefined ){
        userRole = data["https://infinite-refuge-54136.herokuapp.com/roles"][0];
        
        this.rol = userRole;
      }
    })
  }

  

}
