import { Component, OnInit } from '@angular/core';

import {MoviesService} from '../movies.service';
@Component({
  selector: 'app-popularmovies',
  templateUrl: './popularmovies.component.html',
  styleUrls: ['./popularmovies.component.css']
})
export class PopularmoviesComponent implements OnInit {

  popularList: Array<Object>;
  theatersList: Array<Object>; 
  searchRes: Array<Object>;
  searchStr: string;
  constructor(private _moviesService: MoviesService) {
    this._moviesService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });
    }

  ngOnInit() {
  }

  searchMovies() {
    this._moviesService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    })
  }
}
