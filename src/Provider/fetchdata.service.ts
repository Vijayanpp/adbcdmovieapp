import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FetchdataService {

  constructor(private http:Http) { }

  _fetchNews(api): Observable<any> {
    return this.http.get(api)
      .map(res => res.json());
  }


}
