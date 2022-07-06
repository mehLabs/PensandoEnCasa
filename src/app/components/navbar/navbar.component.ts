import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchText:string = '';
  width:number;
  breakpoint:number = 992;

  constructor(private search:SearchService) {
    this.width = window.innerWidth;
    document.documentElement.style.setProperty('--breakpoint', this.breakpoint.toString() + "px");
   }

  ngOnInit(): void {
    
  }

  onEnviar(){
    this.search.search(this.searchText);
  }

}
