import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-main-spinner',
  templateUrl: './main-spinner.component.html',
  styleUrls: ['./main-spinner.component.css']
})
export class MainSpinnerComponent implements OnInit {
  cargandoTexto:string;

  constructor(private data:StoreService){
    this.cargandoTexto = "Cargando aplicación web..."
    data.obtenerDatos().subscribe(data =>{
      document.getElementById("mainSpinner")?.classList.add("out");
      this.cargandoTexto = "";
    })
  }

  ngOnInit(): void {
  }

}
