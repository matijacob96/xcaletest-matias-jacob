import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LandRoverService } from '../../services/land-rover.service';
import { Photo } from '../../models/landrover.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-land-rover',
  templateUrl: './land-rover.component.html',
  styleUrls: ['./land-rover.component.scss'],
})
export class LandRoverComponent implements OnInit {
  subscription = new Subscription();
  rovers: Photo[];
  showSpinner = false;
  lrName = 'C';
  roverName = 'spirit';

  constructor(private lrService: LandRoverService) {}

  ngOnInit(): void {
    this.getRoverPictures();
  }

  getRoverPictures(name?: string) {
    this.roverName = name;
    this.showSpinner = true;
    this.lrService
      .getLandRoverImageByName(name)
      .pipe(take(1))
      .subscribe((resp) => {
        this.rovers = resp.photos;
        this.showSpinner = false;
      });
  }
}
