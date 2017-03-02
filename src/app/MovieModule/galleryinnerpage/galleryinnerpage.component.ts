import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService} from '../../../Provider/sharedservice.service'
import * as Firebase from 'firebase';
declare var FB;
declare var window:any;

@Component({
  selector: 'app-galleryinnerpage',
  templateUrl: './galleryinnerpage.component.html',
  styleUrls: ['./galleryinnerpage.component.css']
})
export class GalleryinnerpageComponent implements OnInit {

   public gallery
  public videourl;
  public starsid;
  public share:boolean=false;
  public rate:boolean=false;
  public userid;
  public galleryimagesdvey;
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
      var adbcd_movie=firebase.database().ref('posts/Gallery/dev/').child(id);
    adbcd_movie.on("value", function(snapshot) {
    self.gallery=snapshot.val();
    self.gallery.id=snapshot.key;
       


       
     }, function (errorObject) {
   console.log("The read failed: " + errorObject.code);
   });})



     this.kk()
  }



  kk()
  {
      var api=(<any>jQuery('.megafolio-container')).megafoliopro(
        {
            filterChangeAnimation:"rotatescale",
            filterChangeSpeed:800,
            filterChangeRotate:99,
            filterChangeScale:0.6,          
            delay:20,
            paddingHorizontal:0,
            paddingVertical:0,
            layoutarray:[8]
         });
 
      // CALL FILTER FUNCTION IF ANY FILTER HAS BEEN CLICKED
      jQuery('.filter').click(function() {
            jQuery('.filter').each(function() { jQuery(this).removeClass("selected")});
            api.megafilter(jQuery(this).data('category'));
            jQuery(this).addClass("selected");
         });
		 
      // THE FANCYBOX PLUGIN INITALISATION
      jQuery(".fancybox").fancybox();
		 
      // FLEXY MENU SETTING
	 
		// GO TO TOP SETTING
		var offset = 220;
		var duration = 500;	
	
  }

  addFavourite(gallery,id)
  {
   
    if(firebase.auth().currentUser!=null)
   {
    
     var newPostKey = firebase.database().ref().child('posts').push().key;
     var updates = {};
     var recentPostsRef = firebase.database().ref('posts/News/dev/'+id);   
     var uid = firebase.auth().currentUser.uid;
     
     firebase.database().ref().update(updates);     
     updates['/Favourites/gallery/' +uid+'/'+newPostKey]=gallery; 
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
    var recentPostsRef = firebase.database().ref('posts/News/dev/'+id);
    this.sharedService.LikethePost(recentPostsRef,uid);  
   }
   else
   {
     this.routernav.navigate(['Signin']);
   }
}

  
  ngOnDestroy()
{
  this.gallery=[];
}


}
