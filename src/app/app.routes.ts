import { Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { EntertainmentnewsComponent } from './entertainmentnews/entertainmentnews.component';
import { SportscomponentComponent } from './sportscomponent/sportscomponent.component';
import { BusinesscomponentComponent } from './businesscomponent/businesscomponent.component';
import { SciencecomponentComponent } from './sciencecomponent/sciencecomponent.component';
import { TechnologynewsComponent } from './technologynews/technologynews.component';
import { MusicnewsComponent } from './musicnews/musicnews.component';

/*TMDB*/

import { MoviesComponent } from './TMDB/movies/movies.component';
import { MovieComponent } from './TMDB/movie/movie.component';
import { GenresComponent } from './TMDB/genres/genres.component';
import { UpcomingComponent } from './TMDB/upcoming/upcoming.component';
import { PopularSeriesComponent } from './TMDB/popular-series/popular-series.component';
import { SerieComponent } from './TMDB/serie/serie.component';
import { ActorComponent } from './TMDB/actor/actor.component';
import { PopularmoviesComponent } from './TMDB/popularmovies/popularmovies.component';
import { LoginComponent } from './login/login.component';


/*Movie*/

import { MusicvideosComponent } from './MovieModule/musicvideos/musicvideos.component';
import { ReviewsComponent } from './MovieModule/reviews/reviews.component';
import { TrailersComponent } from './MovieModule/trailers/trailers.component';
import { MovienewsComponent } from './MovieModule/movienews/movienews.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { AddpostsampleComponent } from './addpostsample/addpostsample.component';
import { MovieinnerpageComponent } from './MovieModule/movieinnerpage/movieinnerpage.component';
import { MusicvideoinnerComponent } from './MovieModule/musicvideoinner/musicvideoinner.component';
import { TrailerinnerpageComponent } from './MovieModule/trailerinnerpage/trailerinnerpage.component';
import { ReviewinnerpageComponent } from './MovieModule/reviewinnerpage/reviewinnerpage.component';
import { GalleryinnerpageComponent } from './MovieModule/galleryinnerpage/galleryinnerpage.component';
import { GalleryComponent } from './MovieModule/gallery/gallery.component';

export const appRoutes: Routes = [
        {path:'',component:NewsComponent},
        {path:'News',component:NewsComponent},
        {path:'general',component:NewsComponent},
        {path:'Entertainment',component:EntertainmentnewsComponent},
        {path:'Sports',component:SportscomponentComponent},
        {path:'Business',component:BusinesscomponentComponent},
        {path:'Science',component:SciencecomponentComponent},
        {path:'Technology',component:TechnologynewsComponent},
        {path:'Music',component:MusicnewsComponent},
        {path:'Toprated',component:MoviesComponent},
        {path:'Popular',component:PopularmoviesComponent},
        {path:'Signin',component:LoginComponent},
        {path: 'Movie/:id', component: MovieComponent},
        {path: 'Musicvideos', component:MusicvideosComponent},
        {path: 'Musicvideos/:id', component:MusicvideoinnerComponent},
        {path:'Reviews',component:ReviewsComponent},
        {path:'Trailers',component:TrailersComponent},
        {path:'Movienews',component:MovienewsComponent},
        {path:'About',component:AboutComponent},
        {path:'Contact',component:ContactComponent},
        {path:'Privacypolicy',component:PrivacypolicyComponent },
        {path:'Termsandconditions',component:TermsandconditionsComponent  },
        {path:'addmoviedata',component:AddpostsampleComponent},
        {path:'Movienews/:id',component:MovieinnerpageComponent},
        {path:'Trailers/:id',component:TrailerinnerpageComponent},
        {path:'Reviews/:id',component:ReviewinnerpageComponent},
        {path:'Gallery',component:GalleryComponent},
        {path:'Gallery/:id',component:GalleryinnerpageComponent}
    
];