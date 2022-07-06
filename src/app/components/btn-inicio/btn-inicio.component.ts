import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-inicio',
  templateUrl: './btn-inicio.component.html',
  styleUrls: ['./btn-inicio.component.css']
})
export class BtnInicioComponent implements OnInit {
  @Input() link:string = '';

  constructor() {}

  ngOnInit(): void {
  }

}
