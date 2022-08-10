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
    "additionalInfo":{
      "address":{
        "floor": '',
        "dto":'',
        "notes":undefined
      }
    },
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
        "streetNumber" : '',
        "zipCode" : undefined,

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
      floor :new FormControl(this.preference.additionalInfo.address.floor),
      dto :new FormControl(this.preference.additionalInfo.address.dto),
      zipCode :new FormControl(this.preference.payer.address.zipCode),
      notes :new FormControl(this.preference.additionalInfo.address.notes,[Validators.required]),
    })
  }

  enviar(){
    console.log(this.infoForm.value)
    window.open('https://api.whatsapp.com/send?phone=542915271778&text=Hola%20soy%20'+this.infoForm.value.name+'%20DNI%20'+this.infoForm.value.dni+'%20deseo%20que%20me%20contacten%20para%20un%20reembolso%20de%20'+this.infoForm.value.notes+'.%20Tel%C3%A9fono:%20'+this.infoForm.value.areaCode + this.infoForm.value.number+'%20Direcci%C3%B3n:%20'+this.infoForm.value.streetName+'%20'+this.infoForm.value.streetNumber+'%20','_blank','noopener,resizable,scrollbars')
  }

}
