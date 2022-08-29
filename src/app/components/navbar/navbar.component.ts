import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchText:string = '';
  width:number = 0;
  breakpoint:number = 992;

  constructor(private search:SearchService, private cdRef:ChangeDetectorRef) {
    this.setWidthSize();
    document.documentElement.style.setProperty('--breakpoint', this.breakpoint.toString() + "px");
  }

  setWidthSize(){
    this.width = window.innerWidth;
  }

  ngOnInit(): void {
    window.addEventListener("resize",() =>this.setWidthSize())
  }

  onEnviar(){
    this.search.search(this.searchText);
  }

}
