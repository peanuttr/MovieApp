import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieserviceService, SearchType } from 'src/app/services/movieservice.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;
  constructor(private movieService: MovieserviceService) { }

  ngOnInit() {
  }
  SearchChanged() {
    this.results = this.movieService.searchData(this.searchTerm, this.type);
    //console.log('My result : ', this.results);
  }

}
