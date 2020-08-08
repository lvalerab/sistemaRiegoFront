import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import {bmeData} from '../models/bme.data.model';

@Injectable({
  providedIn: 'root'
})
export class MainStationService {
  private baseUrl:string=environment.basePoints.clima.url;
  private endPoints:any=environment.endPoints.clima;
  constructor(
    private http:HttpClient
  ) { }

  getDatosBme():Observable<bmeData> {
    return this.http.get<bmeData>(this.baseUrl+this.endPoints.bme.datos.url);
  }

  getDatosDht():Observable<number> {
    return this.http.get<number>(this.baseUrl+this.endPoints.dht.temperatura.url);
  }

}
