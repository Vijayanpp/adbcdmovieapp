import { Component, OnInit } from '@angular/core';
import * as Firebase from 'firebase';
import { ActivatedRoute,Router } from '@angular/router';
import { SharedService} from '../../Provider/sharedservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute,private sharedService:SharedService) { }

  ngOnInit() {
  }

  login()
{
var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(user=>
 {
 
   this.router.navigate(['']);
    this.sharedService.sharedvalue.signin=true;
    this.sharedService.sharedvalue.currentUser=user;
    this.writeUserData(user.uid, user.displayName, user.email, user.photoURL);
 }).catch((error) => {
     console.error("login error");
    });

};
 writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

}
