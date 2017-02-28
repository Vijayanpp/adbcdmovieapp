import { Component, OnInit } from '@angular/core';
import {FetchdataService } from '../../Provider/fetchdata.service';
import { InfiniteScroll } from 'angular2-infinite-scroll';
import {AdbcdConfig} from '../../Global/variables';
declare var window:any;

@Component({
  selector: 'app-sportscomponent',
  templateUrl: './sportscomponent.component.html',
  styleUrls: ['./sportscomponent.component.css']
})
export class SportscomponentComponent implements OnInit {

  private mainnews=[];
  private subscription;
  
  constructor(private fetchdata:FetchdataService ) { }

  ngOnInit() {

    this.fetchNewsFromSource("espn-cric-info");
  }
  
  fetchNewsFromSource(source)
  {
  /*Generated the URL*/
  let url=AdbcdConfig.API_URL+source+"&sortBy=top&apiKey="+AdbcdConfig.API_KEY;
  this.subscription=this.fetchdata._fetchNews(url).subscribe(news=>
   {

   this.mainnews=[];
   this.mainnews=this.mainnews.concat(news.articles);
   for(let i=0;i<=this.mainnews.length;i++)
   {
     this.mainnews[i].source=news.source;
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

}
