import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService} from '../../../Provider/sharedservice.service'
import * as Firebase from 'firebase';
declare var FB;
declare var window:any;

@Component({
  selector: 'app-trailerinnerpage',
  templateUrl: './trailerinnerpage.component.html',
  styleUrls: ['./trailerinnerpage.component.css']
})
export class TrailerinnerpageComponent implements OnInit {

  public movietrailer
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
      
      var self=this;
      var adbcd_music=firebase.database().ref('posts/Trailer/dev/').child(id);
    adbcd_music.on("value", function(snapshot) {
    self.movietrailer=snapshot.val();
    self.movietrailer.id=snapshot.key;
    self.movietrailer.views++; 

    if(self.movietrailer.trailers)
    {
     self.videourl=self.sanitizer.bypassSecurityTrustHtml(self.movietrailer.trailers[0]);
    }  
    
     }, function (errorObject) {
   console.log("The read failed: " + errorObject.code);
   });})

  }
 

  like(id)
{ 
    
   if(firebase.auth().currentUser!=null)
   {
    var uid = firebase.auth().currentUser.uid;
    var recentPostsRef = firebase.database().ref('posts/Trailer/dev/'+id);
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
     var recentPostsRef = firebase.database().ref('posts/Trailer/dev/'+id);   
     var uid = firebase.auth().currentUser.uid;
     
     firebase.database().ref().update(updates);     
     updates['/Favourites/movietrailer/' +uid+'/'+newPostKey]=movienews; 
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
  this.movietrailer=[];
}

}
