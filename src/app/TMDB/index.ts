import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { GenresComponent } from './genres/genres.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PopularSeriesComponent } from './popular-series/popular-series.component';
import { SerieComponent } from './serie/serie.component';
import { ActorComponent } from './actor/actor.component';

/*Movie Service*/

import {MoviesService} from './movies.service';
import { MasonryModule } from 'angular2-masonry';
import { DialogueComponent } from './dialogue/dialogue.component';

@NgModule({
  declarations: [
 
    MoviesComponent,
    MovieComponent,
    MovieCardComponent,
    GenresComponent,
    UpcomingComponent,
    PopularSeriesComponent,
    SerieComponent,
    ActorComponent,
    DialogueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule,
    MasonryModule
  ],
  exports:[
   MoviesComponent,
    MovieComponent,
    MovieCardComponent,
    GenresComponent,
    UpcomingComponent,
    PopularSeriesComponent,
    SerieComponent,
    ActorComponent

  ],
  providers: [MoviesService]
 
})
export class TmdbModule { }
