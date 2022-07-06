import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-social-media',
  templateUrl: './btn-social-media.component.html',
  styleUrls: ['./btn-social-media.component.css']
})
export class BtnSocialMediaComponent implements OnInit {

  @Input() color:string = 'black';
  @Input() producto:string | undefined;
  @Input() precio:number | undefined;
  @Input() id:number | undefined;
  texto:string = 'Mirá esto!';

  constructor() {
    if (this.producto !== undefined && this.precio !== undefined){
      this.texto = this.producto + ' - ¡A solo $' + this.precio + '!'
    }
    
   }

  ngOnInit(): void {
    let btn = document.getElementById("socialBtn");
    switch(this.color){
      case 'black':
        btn?.classList.add("btn-dark");
        btn?.classList.add("text-white");
        break;
      case 'white':
        btn?.classList.add("btn-light");
        btn?.classList.add("text-dark");
        break;
      default:
        btn?.classList.add("btn-light text-dark");
        break;
    }
  }
  share(){
    let url = document.location.origin;
    if (navigator.share && this.id!== undefined) { 
      navigator.share({
         title: this.texto,
         url: url+'/articles/article/'+this.id
       }).then(() => {
         console.log('Thanks for sharing!');
       })
       .catch(console.error);
      }
  }

}
