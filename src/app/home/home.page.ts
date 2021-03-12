import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieserviceService, SearchType } from '../services/movieservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  result = [];
  searchTerm = ['harry potter', 'batman', 'Sherlock Holmes'];
  constructor(private movieservice: MovieserviceService) {
  }
  ionViewWillEnter() {
    this.getData();
  }
  getData() {
    this.movieservice.getData(this.searchTerm[0]).subscribe(results => {
      console.log('list : ', results);
      this.result[0] = results['Search'];
    })
    this.movieservice.getData(this.searchTerm[1]).subscribe(results => {
      console.log('list : ', results)
      this.result[1] = results['Search'];
    })
    this.movieservice.getData(this.searchTerm[2]).subscribe(results => {
      console.log('list : ', results)
      this.result[2] = results['Search'];
    })
  }
}