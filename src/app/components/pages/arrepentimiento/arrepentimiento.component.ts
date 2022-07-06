import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Preferencia } from 'src/app/interfaces/preferencia';

@Component({
  selector: 'app-arrepentimiento',
  templateUrl: './arrepentimiento.component.html',
  styleUrls: ['./arrepentimiento.component.css']
})
export class ArrepentimientoComponent implements OnInit {

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
  infoForm: FormGroup = new FormGroup({});
  

  constructor(
    private fb:FormBuilder,
    ) { }

  ngOnInit(): void {
    this.infoForm = this.fb.group({

      name:new FormControl(this.preference.payer.name,[Validators.required]),
      surname:new FormControl(this.preference.payer.surname,[Validators.required]),
      email:new FormControl(this.preference.payer.email,[Validators.required]),
      areaCode:new FormControl(this.preference.payer.phone.areaCode,[Validators.required]),
      number:new FormControl(this.preference.payer.phone.number,[Validators.required]),
      dni:new FormControl(this.preference.payer.identification.number,[Validators.required]),
      streetName:new FormControl(this.preference.payer.address.streetName,[Validators.required]),
      streetNumber:new FormControl(this.preference.payer.address.streetNumber,[Validators.required]),
      floor :new FormControl(this.preference.payer.address.floor),
      dto :new FormControl(this.preference.payer.address.dto),
      zipCode :new FormControl(this.preference.payer.address.zipCode),
      notes :new FormControl(this.preference.payer.address.notes,[Validators.required]),
    })
  }

  enviar(){

  }

}
