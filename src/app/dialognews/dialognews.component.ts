import { Component, OnInit,Input } from '@angular/core';
declare var FB;

@Component({
  selector: 'app-dialognews',
  templateUrl: './dialognews.component.html',
  styleUrls: ['./dialognews.component.css']
})
export class DialognewsComponent implements OnInit {

  @Input()
	news
  constructor() { }

  ngOnInit() {
  }
   


shareFb(url)
{
    FB.ui({
   app_id:'568461570013753',
    method: 'share',
    
    display: 'popup',
    href: url,
  }, function(response){
    console.log(response.error_message)
  });

}
  
  shareGplus(url)
{
 
  var currentURL=url;
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
  return window.open("https://plus.google.com/share?url=" + currentURL, "", windowOpenSettings), !1
}


  shareTwitter(currentTitle,url)
{
  var currentURL=url
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
  return window.open("https://twitter.com/share?url=" + currentURL + "&text=" + currentTitle, "", windowOpenSettings), !1
}

 shareLinkedin(currentTitle,url)
{
  var currentURL=url;
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
  return window.open("http://www.linkedin.com/shareArticle?mini=true&url=" + currentURL + "&title=" + currentTitle + "&source=", "", windowOpenSettings), !1
}

sharePin(currentTitle,url)
{
  var currentURL=window.location.href;
  var windowOpenSettings = "height=550,width=525,left=100,top=100,menubar=0";
  return window.open("https://twitter.com/share?url=" + currentURL + "&text=" + currentTitle, "", windowOpenSettings), !1
}

}
