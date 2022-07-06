import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-in-construction',
  templateUrl: './site-in-construction.component.html',
  styleUrls: ['./site-in-construction.component.css']
})
export class SiteInConstructionComponent implements OnInit {
  desktop:boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth > 992){
      document.getElementById("openModalButton")?.click();
      this.desktop=true;
    }
  }

}
