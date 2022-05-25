import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  nombre:any;
  id_categoria:any = null;

  constructor(private servicio: StoreService) { }

  ngOnInit(): void {
  }

  onEnviar(){
    let {nombre,id_categoria} = this;
    let categoria = {nombre,id_categoria};
    this.servicio.nuevaCategoria(categoria).subscribe( data => {
      alert("CATEGORIA AGREGADA");
    });
  }

}
