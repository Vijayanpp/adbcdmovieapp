import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-addpostsample',
  templateUrl: './addpostsample.component.html',
  styleUrls: ['./addpostsample.component.css']
})
export class AddpostsampleComponent implements OnInit {
    private imagepath:string;
  	private title:string;
    private hero:string;
    private heroine:string;
    private heroImg:string;
    private heroineImg:string;
    private director:string;
    private directorsImg:string;
    private producer:string;
    private producerImg:string;
    private musicdirector:string;
    private musicdirectorImg:string;
    private editor:string;
    private editorImg:string;
    private screenplay:string;
    private screenplayImg:string;
    private productioncompany:string;
    private productioncompanyimg:string;
    private distribution:string;
    private trailers:string;
    private musicvideos:string;
    private overview:string;
    private actors:string;
    private actorsImg:string;
    private rating:number
    private postForm:FormGroup;
    private posttype:any;
    private postindustry:string;
    private camera:string;
    private cameraImg:string;
    private listeningFirebaseRefs = [];
    private titleData;
    private releasedate;
    private category;
    private songtitle

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  	this.postForm = this.fb.group({
        posttype: [this.posttype],
        postindustry: [this.postindustry],
        title: [this.title, [Validators.required, Validators.minLength(5)]],
        imagepath: [this.imagepath, [Validators.required, Validators.minLength(5)]],
        hero: [this.hero, [Validators.required, Validators.minLength(5)]],
        heroImg: [this.heroImg, [Validators.required, Validators.minLength(5)]],
        heroine: [this.heroine, [Validators.required, Validators.minLength(5)]],
        heroineImg: [this.heroineImg, [Validators.required, Validators.minLength(5)]],
        director: [this.director, [Validators.required, Validators.minLength(5)]],
        directorImg: [this.directorsImg, [Validators.required, Validators.minLength(5)]],
        producer: [this.producer, [Validators.required, Validators.minLength(5)]],
        producerImg: [this.producerImg, [Validators.required, Validators.minLength(5)]],
        musicdirector: [this.musicdirector, [Validators.required, Validators.minLength(5)]],
        musicdirectorImg: [this.musicdirectorImg, [Validators.required, Validators.minLength(5)]],
        editor: [this.editor, [Validators.required, Validators.minLength(5)]],
        editorImg: [this.editorImg, [Validators.required, Validators.minLength(5)]],
        actors: [this.actors, [Validators.required, Validators.minLength(5)]],
        actorsImg: [this.actorsImg, [Validators.required, Validators.minLength(5)]],
        screenplay: [this.screenplay, [Validators.required, Validators.minLength(5)]],
        screenplayImg: [this.screenplayImg, [Validators.required, Validators.minLength(5)]],
        productioncompany: [this.productioncompany, [Validators.required, Validators.minLength(5)]],
        distribution: [this.distribution, [Validators.required, Validators.minLength(5)]],
        trailers: [this.trailers, [Validators.required, Validators.minLength(5)]],
        musicvideos: [this.musicvideos, [Validators.required, Validators.minLength(5)]],
        camera: [this.camera, [Validators.required, Validators.minLength(5)]],
        cameraImg: [this.cameraImg, [Validators.required, Validators.minLength(5)]],
        overview: [this.overview, [Validators.required, Validators.minLength(5)]],
        rating: [this.rating, [Validators.required, Validators.minLength(5)]],
        releasedate: [this.releasedate, [Validators.required, Validators.minLength(5)]],
        category: [this.category, [Validators.required, Validators.minLength(5)]],
        songtitle: [this.songtitle, [Validators.required, Validators.minLength(5)]]
        
       
      
    });

    //  firebase.database().ref().remove();

  }

  writeNewPost(uid, username, picture, title,imagepath) {
  // A post entry.
 
  var postData = {
    author: username,
    uid: uid,
    imagepath:imagepath,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
};

newPostForCurrentUser(title, text) {
  // [START single_value_read]
  var self=this
  var userId = firebase.auth().currentUser.uid;
   return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
    
    var username = snapshot.val().username; 
    

    return self.writeNewPost(firebase.auth().currentUser.uid, username,
        firebase.auth().currentUser.photoURL,
        title, text);
    // [END_EXCLUDE]
  });
  // [END single_value_read]
};



createObject(d1,d2)
{
if(d1!=null&&d2!=null)
{
  console.log('kdkk')
let array1=d1.split(",");
let array2=d2.split(",");

let k=[];
var self=this;
for(let i=0;i<array1.length;i++)
{
let r={"name":array1[i],"imgUrl":array2[i]}
k.push(r)
}
return k;

}
else
{
  return null;
}
}
createArray(d1)
{
  
  if(d1!=null)
  {

   
 let array1=d1.split(",");
 let k=[];
 for(let i=0;i<array1.length;i++)
{

k.push(array1[i])
}
return k;
}
else
{
  return null;
}

}

 writeNewMovieData(username,uid,posttype,postindustry,title,imagepath,releasedate,category,hero,heroImg,heroine,heroineImg,director,musicdirector,editor,camera,distribution,productioncompany,overview,screenplay,rating,actors,trailers,musicvideos,songtitle)
{
  var postData = {
    author: username,
    uid: uid,
    imagepath:imagepath,
    title: title,
    starCount: 0,
    ratingCount:1,   
    views:0,
    comment:0,
    releasedate:releasedate,
    category:category,
    posttype:posttype,
    postindustry:postindustry,
    hero:hero,
    heroImg:heroImg,
    heroine:heroine,
    heroineImg:heroineImg,
    director:director,
    musicdirector:musicdirector,
    eidtor:editor,
    screenplay:screenplay,
    camera:camera,   
    distribution:distribution,
    productioncompany:productioncompany,
    rating:rating,
    overview:overview,
    actors:actors,
    trailers:trailers,
    musicvideos:musicvideos,
    songtitle:songtitle
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' +posttype+"/"+postindustry+"/"+newPostKey] = postData;
  updates['/posts/' +posttype+"/dev/"+newPostKey] = postData;
  return firebase.database().ref().update(updates);
}
submitPost(model) {
    var posttype=model.value.posttype;
    console.log('hi'+posttype);
    var postindustry=model.value.postindustry;
    var title =model.value.title;
    var img=model.value.imagepath;
    var hero=model.value.hero;
    var heroImg=model.value.heroImg;
    var heroine=model.value.heroine;
    var heroineImg=model.value.heroineImg;
    var director=this.createObject(model.value.director,model.value.directorImg);
    var musicdirector=this.createObject(model.value.musicdirector,model.value.musicdirectorImg);
    var editor=this.createObject(model.value.editor,model.value.editorImg);    
    var trailers=this.createArray(model.value.trailers);
    var musicvideos=this.createArray(model.value.musicvideos);
    var screenplay=this.createObject(model.value.screenplay,model.value.screenplayImg)
    var rating=model.value.rating;
    var overview=model.value.overview;
    var camera=this.createObject(model.value.camera,model.value.cameraImg)
    var actors=this.createObject(model.value.actors,model.value.actorsImg)
    var productioncompany=model.value.productioncompany;
    var distribution=model.value.distribution;
    var releasedate=model.value.releasedate;
    var category=model.value.category;
   var songtitle=model.value.songtitle
   console.log("posin started")
  if (title &&img) {   
  var userId = firebase.auth().currentUser.uid;
  var username="admin"
  this.writeNewMovieData(username,userId,posttype,postindustry,title,img,releasedate,category,hero,heroImg,heroine,heroineImg,director,musicdirector,editor,camera,distribution,productioncompany,overview,screenplay,rating,actors,trailers,musicvideos,songtitle);
  }
  };


}
