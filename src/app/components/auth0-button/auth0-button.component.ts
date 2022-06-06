import { Component} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth0-button',
  templateUrl: './auth0-button.component.html',
  styleUrls: ['./auth0-button.component.css']
})
export class Auth0ButtonComponent {

  constructor(public auth: AuthService) { }


}
