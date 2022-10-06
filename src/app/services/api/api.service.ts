/* eslint-disable @typescript-eslint/naming-convention */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Weather} from '../../models/weather.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  /**
   *
   * @param latitude
   * @param longtitude
   */
  public getWeather(latitude: number, longtitude: number) {
    const url = `${environment.api.baseUrl}/weather?lat=${latitude}&lon=${longtitude}&appid=${environment.api.key}`;
    return this.http.get<Weather>(url);
  }
}
