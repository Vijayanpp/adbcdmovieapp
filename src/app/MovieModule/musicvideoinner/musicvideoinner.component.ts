import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService} from '../../../Provider/sharedservice.service';
import * as Firebase from 'firebase';
declare var FB;
declare var window:any;
@Component({
  selector: 'app-musicvideoinner',
  templateUrl: './musicvideoinner.component.html',
  styleUrls: ['./musicvideoinner.component.css']
})
export class MusicvideoinnerComponent implements OnInit {
  
  public musicvideos;
  public videourl;
  public starsid;
  public share:boolean=false;
   public rate:boolean=false;
     public userid
  constructor(private router: ActivatedRoute, private sanitizer: DomSanitizer,private sharedService:SharedService,private routernav:Router) {
  
   }

  ngOnInit() {
     
     if(firebase.auth().currentUser!=null)
     {
       this.userid=firebase.auth().currentUser.uid;
       
     }

  	this.router.params.subscribe((params) => {
     
      const id = params['id'];
      var self=this;
      var adbcd_music=firebase.database().ref('posts/Music/dev'+'/').child(id);
    adbcd_music.on("value", function(snapshot) {
    self.musicvideos=snapshot.val();
    console.log(snapshot.val())
    self.musicvideos.id=snapshot.key;
    self.musicvideos.views++;
       
    if(self.musicvideos.musicvideos)
    {
     self.videourl=self.sanitizer.bypassSecurityTrustHtml(self.musicvideos.musicvideos[0]);
    }   
    
     }, function (errorObject) {
   console.log("The read failed: " + errorObject.code);
   });})

  }

   addFavourite(movienews,id)
  {
   
    if(firebase.auth().currentUser!=null)
   {
    
     var newPostKey = firebase.database().ref().child('posts').push().key;
     var updates = {};
     var recentPostsRef = firebase.database().ref('posts/Music/dev/'+id);   
     var uid = firebase.auth().currentUser.uid;
     
     firebase.database().ref().update(updates);     
     updates['/Favourites/musicvideos/' +uid+'/'+newPostKey]=movienews; 
     firebase.database().ref().update(updates);   
     this.sharedService.favourite(uid,recentPostsRef); 
   }
   else
   {
     this.routernav.navigate(['Signin']);
   }
  }
 

   like(id)
{ 
     
   if(firebase.auth().currentUser!=null)
   {
    var uid = firebase.auth().currentUser.uid;
    var recentPostsRef = firebase.database().ref('posts/Music/dev/'+id);
    this.sharedService.LikethePost(recentPostsRef,uid);  
   }
   else
   {
     this.routernav.navigate(['login']);
   }
}

ngOnDestroy()
{
  this.musicvideos=[];
}

}
