import { Component } from '@angular/core';
import { SharedService} from '../Provider/sharedservice.service'
import { ActivatedRoute,Router } from '@angular/router';
import * as Firebase from 'firebase';
declare  var jQuery;
declare var firebase;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public imgUrl:string;
	private displayName:string;
	private email:string;

	constructor(private sharedService:SharedService,private router:Router, private route: ActivatedRoute) { }
  ngOnInit()
  {
  	this.checkAuthState();
  }
  logout()
  {
  	console.log("click on the logout")
  	firebase.auth().signOut().then(()=>{
  	this.router.navigate([''], { relativeTo: this.route })
    this.sharedService.sharedvalue.signin=false;
    this.sharedService.sharedvalue.currentUser=null
}
)
  }

  checkAuthState()
  {
  	 var self=this;
  	firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
   
    self.imgUrl=user.photoURL;
     self.displayName=user.displayName;
    self.email=user.email; 
    self.sharedService.sharedvalue.signin=true;
    self.sharedService.sharedvalue.currentUser=user;

  } else {
    
    self.imgUrl=null;
    self.displayName=null;
    self.email=null;
    self.sharedService.sharedvalue.signin=false;
    self.sharedService.sharedvalue.currentUser=null;


  }
});
  }
 
 
}
