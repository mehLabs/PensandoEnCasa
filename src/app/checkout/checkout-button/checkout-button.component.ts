import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout-button',
  templateUrl: './checkout-button.component.html',
  styleUrls: ['./checkout-button.component.css']
})
export class CheckoutButtonComponent implements OnInit {

  init_point: any;
  @Input() loading:boolean = false;
  @Input() profileForm:FormGroup | undefined;

  constructor() { }

  ngOnInit(): void {

    
  }


  


}
