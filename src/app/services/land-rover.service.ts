import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import LandRoverData from '../models/landrover.model';
import { environment } from '../../environments/environment';

const ROVERS_URI = environment.nasaAPI + environment.adresses.rovers;
const NASA_API_KEY = environment.nasaApiKey;

@Injectable({
  providedIn: 'root',
})
export class LandRoverService {
  constructor(private http: HttpClient) {}

  getLandRoverImageByName(name?: string): Observable<LandRoverData> {
    const rover_name = name ? name : 'spirit';
    return this.http.get<LandRoverData>(
      ROVERS_URI + `/${rover_name}/photos?sol=1000&api_key=${NASA_API_KEY}`
    );
  }
}
