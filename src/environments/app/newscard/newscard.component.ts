import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'adbcd-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.css']
})
export class NewscardComponent implements OnInit {
	@Input()
	news;

  constructor() { }

  ngOnInit() {
  }
  

  addFavourite(news)
  {
     var newPostKey = firebase.database().ref().child('posts').push().key;
     var updates = {};
     news.favourite=true; 
     var uid = firebase.auth().currentUser.uid;
     firebase.database().ref().update(updates);     
     updates['/Favourites/news' +uid+'/'+newPostKey]=news; 
     firebase.database().ref().update(updates);     
  }

}
