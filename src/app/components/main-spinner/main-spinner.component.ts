import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-main-spinner',
  templateUrl: './main-spinner.component.html',
  styleUrls: ['./main-spinner.component.css']
})
export class MainSpinnerComponent implements OnInit {
  cargandoTexto:string;

  constructor(){
    this.cargandoTexto = "Cargando aplicación web..."
    setTimeout(() => {
      document.getElementById("mainSpinner")?.classList.add("out");
      this.cargandoTexto = "";
    }, 200);
  }
    
  ngOnInit(): void {
  }

}
