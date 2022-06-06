import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchText:string = '';

  constructor(private search:SearchService) { }

  ngOnInit(): void {
    
  }

  onEnviar(){
    this.search.search(this.searchText);
  }

}
