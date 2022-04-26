import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-que-buscas',
  templateUrl: './que-buscas.component.html',
  styleUrls: ['./que-buscas.component.css']
})
export class QueBuscasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipList = this.tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

}
