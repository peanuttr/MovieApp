import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieserviceService } from 'src/app/services/movieservice.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.page.html',
  styleUrls: ['./movies-details.page.scss'],
})
export class MoviesDetailsPage implements OnInit {
  information = null;

  constructor(private activate: ActivatedRoute, private movieservice: MovieserviceService) {
    let id = this.activate.snapshot.paramMap.get('id');

    this.movieservice.getDetails(id).subscribe(result => {
      console.log('detail: ', result);
      this.information = result;
    });
  }

  ngOnInit() {
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }
}
