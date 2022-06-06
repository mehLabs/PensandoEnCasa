import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent implements OnInit {


  @Input() jsonFormData:any;

  constructor(private backend:StoreService) {}

  ngOnInit(): void {
  }

  hardReset(){
    console.log("Intentando borrar todo...");
    let resultado = this.backend.hardReset();
    if (resultado){
      alert("Se han eliminado todos los artículos y categorías del servidor");
    }else{
      alert("Hubo un problema y no se pudo resetear el servidor");
    }
  }

}
