import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedService {

  public sharedvalue={signin:false,currentUser:null,category:"Mollywood",type:"Movie"}
  constructor(private http:Http) { }

  updatetheViewCount(postref)
  {
    postref.transaction(function(post)
    {
   post.views++;
  
    })
  }
  RatethePost(postRef,count,currentRating,newRating,uid)
  {
     postRef.transaction(function(post) {
       
      if(post)
      {
      if(post.ratingsByUser&&post.ratingsByUser[uid])
      {
   
  
  let newcount=parseInt(count); 
  let adbcd=post.ratingsByUser[uid]['rating'];
  
  let rating=(post.totalRating-adbcd+newRating)/newcount;
  
  post.rating=rating.toFixed(2); 
   post.ratingsByUser[uid]['rating']=newRating;
   post.totalRating=post.totalRating-adbcd+newRating;
      }
      else
      {        
  
  let newcount=parseInt(count)+1;
  var d=(newRating-currentRating)/newcount
  let rating=currentRating+d;
  post.rating=rating.toFixed(2);
  post.ratingCount++;
  if (!post.totalRating)
  {
  post.totalRating=newRating+rating; 
  }
  else
   {     
    post.totalRating=post.totalRating+newRating;
   }
  if (!post.ratingsByUser) {
          post.ratingsByUser = {};
        }
        post.ratingsByUser[uid] ={};
        post.ratingsByUser[uid]['rating']=newRating

      }
      }
      return post;
     })
     
  }
  favourite(uid,postRef)
  {
    console.log('kkk')
    postRef.transaction(function(post) {
    console.log(post);
   if (!post.favourite) {
          post.favourite = {};
          console.log("kkk")
        }
        post.favourite[uid] = true;
        console.log(post.favourite[uid])
        return post;
    })

  }

LikethePost(postRef, uid) {
  
  postRef.transaction(function(post) {
    
    if (post) {
  
      if (post.stars && post.stars[uid]) {
        post.starCount--;
        post.stars[uid] = null;
      } else {
        post.starCount++;
        if (!post.stars) {
          post.stars = {};
        }
        post.stars[uid] = true;
      }
    }

   // postRef.on('value', function(snapshot) {

    

   // })


    return post;
  });
}

  private API_PATH: string ='/mainnews';

   searchNews(api): Observable<any> {
    return this.http.get(api)
      .map(res => res.json());
  }

  retrieveOffer(volumeId: string): Observable<any> {
    return this.http.get(`${this.API_PATH}/${volumeId}`)
      .map(res => res.json());
  }




}


