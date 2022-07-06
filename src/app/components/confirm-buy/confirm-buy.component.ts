import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MercadopagoService } from 'src/app/checkout/mercadopago.service';
import { Preferencia } from 'src/app/interfaces/preferencia';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirm-buy',
  templateUrl: './confirm-buy.component.html',
  styleUrls: ['./confirm-buy.component.css']
})
export class ConfirmBuyComponent implements OnInit {
  preference:Preferencia = {
    "items": [],
    "payer": {
      "name": undefined,
      "surname" : undefined,
      "email" : undefined,
      "phone" : {
        "areaCode" : undefined,
        "number" : undefined
      },
      "identification" : {
        "type" : 'DNI',
        "number" : undefined,
      },
      "address" : {
        "streetName" : '',
        "streetNumber" : 0,
        "floor": '',
        "dto":'',
        "zipCode" : undefined,
        "notes":undefined

      }
    }
    
  };
  loading=false;
  deviceId:any;

  //Form
  infoForm: FormGroup = new FormGroup({});
  

  constructor(
    private fb:FormBuilder,
    private cart:CartService, 
    private mercadopago:MercadopagoService
    ) { }

  ngOnInit(): void {
    this.infoForm = this.fb.group({

      name:new FormControl(this.preference.payer.name,[Validators.required]),
      surname:new FormControl(this.preference.payer.surname),
      email:new FormControl(this.preference.payer.email,[Validators.required]),
      areaCode:new FormControl(this.preference.payer.phone.areaCode,[Validators.required]),
      number:new FormControl(this.preference.payer.phone.number,[Validators.required]),
      dni:new FormControl(this.preference.payer.identification.number,[Validators.required]),
      streetName:new FormControl(this.preference.payer.address.streetName,[Validators.required]),
      streetNumber:new FormControl(this.preference.payer.address.streetNumber,[Validators.required]),
      floor :new FormControl(this.preference.payer.address.floor),
      dto :new FormControl(this.preference.payer.address.dto),
      zipCode :new FormControl(this.preference.payer.address.zipCode),
      notes :new FormControl(this.preference.payer.address.notes),
    })

    this.loadScript();
    this.preference.items = this.cart.getItems();
  }

  private loadScript(){
    let mp = document.createElement("script");
    mp.type = "text/javascript";
    mp.async = true;
    mp.src = "https://www.mercadopago.com/v2/security.js";
    mp.setAttribute("view","checkout");
    document.body.appendChild(mp);
  }

  onBuy() {

    if(this.infoForm.valid){
      this.loading = true;
      let preferencia = this.preference;
  
      preferencia.payer.address.streetName = preferencia.payer.address.streetName+ " " +preferencia.payer.address.floor + preferencia.payer.address.dto;
      console.log(preferencia);
  
      
      this.mercadopago.comprar(preferencia).subscribe(data => {
        console.log("Redirecting to MP");
        console.log(data);
        window.location.href = data;
      });
    }else{
      this.infoForm.markAllAsTouched();
    }
  }

}
