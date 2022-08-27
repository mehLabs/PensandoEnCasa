import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private facebookService:FacebookService) { }

  ngOnInit(): void {
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox?.setAttribute("page_id", "101618329231035");
    chatbox?.setAttribute("attribution", "biz_inbox");

    this.initFacebookService();

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement; js.id = id;
      js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js';
      fjs.parentNode?.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  private initFacebookService(): void{
    const initParams: InitParams = { xfbml:true, version:'v14.0'};
    this.facebookService.init(initParams);
  }

  

}

      
