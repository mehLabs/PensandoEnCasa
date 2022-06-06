import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document,public auth:AuthService) { }
  
  rol:any = null;
  user:any;

  ngOnInit(): void {
    let userRole:any = null;
  this.auth.user$.subscribe(user => {
    if (user !== null && user !== undefined){
      this.user = user;
      userRole = user["https://infinite-refuge-54136.herokuapp.com/roles"][0];
      this.rol = userRole;
    }

  });
  }

}
