import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/functions'

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }

  goCheckOut(products:any) {
    let CheckOut:any; //link al backend, en caso de usar npm sería firebase.functions().httpsCallable('checkout');
    return CheckOut(products);
  }
}
