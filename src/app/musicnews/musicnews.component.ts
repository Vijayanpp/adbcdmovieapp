import { Component, OnInit } from '@angular/core';
import {FetchdataService } from '../../Provider/fetchdata.service';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import {AdbcdConfig} from '../../Global/variables';
declare var window:any;

@Component({
  selector: 'app-musicnews',
  templateUrl: './musicnews.component.html',
  styleUrls: ['./musicnews.component.css']
})
export class MusicnewsComponent implements OnInit {

 private mainnews=[];
  private subscription;  
  constructor(private fetchdata:FetchdataService ) { }

  ngOnInit() {

   this.fetchNewsFromSource("mtv-news");
  // this.StartDatabaseQueries("met-vews")
  }

 




  
  fetchNewsFromSource(source)
  {
  /*Generated the URL*/
  let url=AdbcdConfig.API_URL+source+"&sortBy=top&apiKey="+AdbcdConfig.API_KEY;
  this.subscription=this.fetchdata._fetchNews(url).subscribe(news=>
   {

   this.mainnews=[];
   this.mainnews=this.mainnews.concat(news.articles);
   for(let i=0;i<this.mainnews.length;i++)
   {
     
     var newPostKey = firebase.database().ref().child('posts').push().key;
     this.mainnews[i].source=news.source;
     this.mainnews[i].like=0;
     this.mainnews[i].id=newPostKey;
  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  var date=new Date();
  var today=date.getDay()+'/'+date.getMonth()+"/"+date.getFullYear();

  updates['/news/music/'+source+'/'+news.articles[i].title+'/' + newPostKey] =this.mainnews[i];
   firebase.database().ref().update(updates);
   }  
    })
   }

   ngAfterViewInit() {
    window.componentHandler.upgradeAllRegistered();
}
ngOnDestroy()
{
  this.mainnews=[];
  // this.subscription.unsbscribe();
}


//  StartDatabaseQueries(source) {
  
//   var self=this;  
//   self.mainnews=[];
//   var date=new Date();
//   var today=date.getDay()+'/'+date.getMonth()+"/"+date.getFullYear();
//   var recentPostsRef = firebase.database().ref('posts/music/'+source+'/'+today).limitToLast(100);
//  var fetchPosts = function(postsRef) {
//  postsRef.on('child_added', function(data) {
//  var obj=data.val();
//  obj.id=data.key; 
//  self.mainnews.push(obj);     
//     });
//     postsRef.on('child_changed', function(data) {  
//   var object=data.val();
//   object.id=data.key;
   
//   var array= self.mainnews.filter((obj,index)=>
//   {
//       if(obj.id==data.key)
//         {
//           self.mainnews.splice(index,1,object);
//         }
//   })

    
//     });
//     postsRef.on('child_removed', function(data) {
      
//     });
//   };

// fetchPosts(recentPostsRef);




// }
 }
