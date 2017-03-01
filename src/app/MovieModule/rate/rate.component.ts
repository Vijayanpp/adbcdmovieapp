import { Component, OnInit,Input } from '@angular/core';
import { SharedService} from '../../../Provider/sharedservice.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
	@Input()
	movie

  constructor(private sharedService:SharedService,private routernav:Router) { }

  ngOnInit() {
  }

Rate(count,currentRating,newRating,id,cat)
{

  if(firebase.auth().currentUser!=null)
   {  
    
  var uid = firebase.auth().currentUser.uid;
  var recentPostsRef = firebase.database().ref('posts/'+cat+'/dev/'+id);
  this.sharedService.RatethePost(recentPostsRef,count,currentRating,newRating,uid);
    var recentPostsRef2 = firebase.database().ref('posts/Trailer/'+this.sharedService.sharedvalue.category+'/'+id);
   }
    else
   {
     this.routernav.navigate(['Signin']);
   }
}

}
