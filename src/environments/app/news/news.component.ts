import { Component, OnInit } from '@angular/core';
import {FetchdataService } from '../../Provider/fetchdata.service';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import {AdbcdConfig} from '../../Global/variables';
declare var window:any;
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
	 private mainnews=[];
  private subscription;

  
  constructor(private fetchdata:FetchdataService ) { }

  ngOnInit() {

    this.fetchNewsFromSource("usa-today");
  }
  
  fetchNewsFromSource(source)
  {
  /*Generated the URL*/
  let url=AdbcdConfig.API_URL+source+"&sortBy=top&apiKey="+AdbcdConfig.API_KEY;
  var postData = {    
    viewCount: 0,
    like:0    
  };
  this.subscription=this.fetchdata._fetchNews(url).subscribe(news=>
   {

   this.mainnews=[];
   this.mainnews=this.mainnews.concat(news.articles);
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



}
