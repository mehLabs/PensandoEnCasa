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
    "additionalInfo": {
      "address":{
        "floor": '',
        "dto":'',
        "notes":''
      }
    },
    "items": [],
    "payer": {
      "name": '',
      "surname" : '',
      "email" : '',
      "phone" : {
        "areaCode" : '',
        "number" : ''
      },
      "identification" : {
        "type" : 'DNI',
        "number" : '',
      },
      "address" : {
        "streetName" : '',
        "streetNumber" : '',
        "zipCode" : '',

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
      floor :new FormControl(this.preference.additionalInfo.address.floor),
      dto :new FormControl(this.preference.additionalInfo.address.dto),
      zipCode :new FormControl(this.preference.payer.address.zipCode),
      notes :new FormControl(this.preference.additionalInfo.address.notes),
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
      let preferencia = this.infoForm.value;
      this.preference.additionalInfo.address.dto = preferencia.dto;
      this.preference.additionalInfo.address.floor = preferencia.floor;
      this.preference.additionalInfo.address.notes = preferencia.notes;

      this.preference.payer.address.streetName = preferencia.streetName;
      this.preference.payer.address.streetNumber = preferencia.streetNumber;
      this.preference.payer.address.zipCode = preferencia.zipCode;

      this.preference.payer.email = preferencia.email;
      this.preference.payer.name = preferencia.name;
      this.preference.payer.surname = preferencia.surname;
      this.preference.payer.phone.areaCode = preferencia.areaCode;
      this.preference.payer.phone.number = preferencia.number;
      this.preference.payer.identification.number = preferencia.dni;

      console.log(this.preference);
  
      
      this.mercadopago.comprar(this.preference).subscribe(data => {
        console.log("Redirecting to MP");
        console.log(data);
        window.location.href = data;
      });
    }else{
      this.infoForm.markAllAsTouched();
    }
  }

}
