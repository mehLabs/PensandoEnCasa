import { Component, OnInit } from '@angular/core';
import { now } from 'jquery';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-promos',
  templateUrl: './promos.component.html',
  styleUrls: ['./promos.component.css']
})
export class PromosComponent implements OnInit {
  now = new Date();
  today = this.now.getTime();
  tomorrow = new Date().setHours(24,0,0,0);
  countDownDate = this.tomorrow;
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  promos: any[] = [];

  constructor(private backend:StoreService) {
    backend.getOfertas().subscribe(data => {
      this.promos = data;
    })
   }

  ngOnInit(): void {
    this.countDown();
  }

  countDown(){
    setInterval( () => {

      let now = new Date().getTime();
      let timeleft = this.countDownDate - now;

      this.days = Math.floor( timeleft / (1000 * 60 * 60 * 24));
      this.hours = Math.floor( timeleft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      this.minutes = Math.floor( timeleft % (1000* 60 * 60) / (1000 * 60));
      this.seconds = Math.floor( timeleft % (1000 * 60) /1000);


    },1000)
    return 
  }

}
