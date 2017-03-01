import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService} from '../../../Provider/sharedservice.service'
import * as Firebase from 'firebase';
declare var FB;
declare var window:any;

@Component({
  selector: 'app-reviewinnerpage',
  templateUrl: './reviewinnerpage.component.html',
  styleUrls: ['./reviewinnerpage.component.css']
})
export class ReviewinnerpageComponent implements OnInit {

   public moviereview
  public videourl;
  public starsid;
  public share:boolean=false;
  public rate:boolean=false;
 public userid;
  constructor(private router: ActivatedRoute, private sanitizer: DomSanitizer,private sharedService:SharedService,private routernav:Router) { 


  }

  ngOnInit() {
    this.sharedService.sharedvalue.category="Hollywood";
    if(firebase.auth().currentUser!=null)
     {
       this.userid=firebase.auth().currentUser.uid;
       
     }
  	this.router.params.subscribe((params) => {
     
      const id = params['id'];
      console.log(id)
      var self=this;
      var adbcd_music=firebase.database().ref('posts/Review/dev/').child(id);
    adbcd_music.on("value", function(snapshot) {
    self.moviereview=snapshot.val();
    self.moviereview.id=snapshot.key;
    self.moviereview.views++;  
    
     }, function (errorObject) {
   console.log("The read failed: " + errorObject.code);
   });})

  }
 

  like(id)
{ 
    
   if(firebase.auth().currentUser!=null)
   {
    var uid = firebase.auth().currentUser.uid;
    var recentPostsRef = firebase.database().ref('posts/Review/dev/'+id);
    this.sharedService.LikethePost(recentPostsRef,uid);  
   }
   else
   {
     this.routernav.navigate(['login']);
   }
}

addFavourite(movienews,id)
  {
   
    if(firebase.auth().currentUser!=null)
   {
    
     var newPostKey = firebase.database().ref().child('posts').push().key;
     var updates = {};
     var recentPostsRef = firebase.database().ref('posts/Review/dev/'+id);   
     var uid = firebase.auth().currentUser.uid;
     
     firebase.database().ref().update(updates);     
     updates['/Favourites/moviereview/' +uid+'/'+newPostKey]=movienews; 
     firebase.database().ref().update(updates);   
     this.sharedService.favourite(uid,recentPostsRef); 
   }
   else
   {
     this.routernav.navigate(['Signin']);
   }
  }

  
ngOnDestroy()
{
  this.moviereview=[];
}



}
