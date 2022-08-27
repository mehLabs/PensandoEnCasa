import { Component, Input, OnInit } from '@angular/core';
import { Promo } from 'src/app/interfaces/promo';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-admin-promo',
  templateUrl: './admin-promo.component.html',
  styleUrls: ['./admin-promo.component.css']
})
export class AdminPromoComponent implements OnInit {
  @Input() promo:Promo | undefined = undefined;

  constructor(private backend:StoreService) { }

  ngOnInit(): void {
  }

  borrar(){
    if(this.promo){
      this.backend.deleteOferta( this.promo.id).subscribe((anything:any) => console.log(anything));
    }
  }

}
