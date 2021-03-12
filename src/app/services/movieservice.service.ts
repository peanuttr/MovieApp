import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export enum SearchType {
  all = '',
  moive = 'movie',
  series = 'series',
  episode = 'episode',
}
@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  url = 'http://www.omdbapi.com/';
  API_KEY = 'a9b43309';
  constructor(private http: HttpClient) { }

  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.API_KEY}`)
      .pipe(
        map(results => {
          console.log('Raw :', results);
          return results['Search'];
        })
      );
  }
  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.API_KEY}`);
  }
  getData(name) {
    return this.http.get(`${this.url}?s=${name}&apikey=${this.API_KEY}`);
  }
}
