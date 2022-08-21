import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ServiceDisruption } from '../models/service-disruption';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceDisruptionsService {
  baseUrl: string = environment.DISRUPTIONS_HOST;

  constructor(private http: HttpClient) {}

  getDisruptions(): Observable<ServiceDisruption[]> {
    let url = this.baseUrl + '/v1/disruptions';
    return this.http.get<ServiceDisruption[]>(url);
  }
}
