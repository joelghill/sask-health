import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ServiceDisruptionsService } from 'src/app/core/services/service-disruptions.service';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ServiceDisruption } from 'src/app/core/models/service-disruption';

@Component({
  selector: 'disruptions-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  apiLoaded: Observable<boolean>;
  apiUrl: string = 'https://maps.googleapis.com/maps/api/js?key=' + environment.GOOGLE_API_KEY;

  disruptions: ServiceDisruption[] = [];

  @ViewChild('googleMap') map!: GoogleMap;


  mapOptions: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    restriction: {
      latLngBounds: {
        north: 60.1,
        south: 48.9,
        west: -110,
        east: -101
      }
    }
  }

  constructor(
    private http: HttpClient,
    private disruptionsService: ServiceDisruptionsService
  ) {
    this.apiLoaded = http.jsonp(this.apiUrl, 'callback').pipe(
      map(() => true),
      catchError(() => of(false)),
    );
  }

  ngOnInit(): void {

    this.disruptionsService.getDisruptions().subscribe({

      next: result => {
        this.disruptions = result;
      },
      error: e => {
        console.log(e);
      }
    });
  }
}
