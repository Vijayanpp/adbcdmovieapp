import { Component, OnInit,Input } from '@angular/core';
declare var FB;
@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

	@Input()
	movie
  constructor() { }

  ngOnInit() {
  }
  shareOnFB()
  {
    console.log('sharex');
      FB.ui({
   app_id:'568461570013753',
    method: 'share',
    
    display: 'popup',
    href: 'http://www.adbcd.com',
  }, function(response){
    console.log(response.error_message)
  });
}

 


shareFb()
{
    FB.ui({
   app_id:'568461570013753',
    method: 'share',
    
    display: 'popup',
    href: 'http://www.adbcd.com',
  }, function(response){
    console.log(response.error_message)
  });

}
  
  shareGplus()
{
 
  var currentURL=window.location.href;  
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
  return window.open("https://plus.google.com/share?url=" + currentURL, "", windowOpenSettings), !1
}


  shareTwitter(currentTitle)
{
  var currentURL=window.location.href;
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
  return window.open("https://twitter.com/share?url=" + currentURL + "&text=" + currentTitle, "", windowOpenSettings), !1
}

 shareLinkedin(currentTitle)
{
  var currentURL=window.location.href;
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
  return window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + currentURL + "&title=" + currentTitle + "&source=", "", windowOpenSettings), !1
}

sharePin(currentTitle)
{
  var currentURL=window.location.href;
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
  return window.open("https://twitter.com/share?url=" + currentURL + "&text=" + currentTitle, "", windowOpenSettings), !1
}

}
