import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherInterface } from '../interfaces/weathers.interface';

@Injectable({
  providedIn: 'root'
})
export class WeathersService {

  url = environment.apiUrl
  key = environment.apiKey
  lang = environment.apiLang
  search = environment.apiSearch
  parametro = environment.apiParametre

  constructor(private http: HttpClient) { }

  getWeathersWithSearch(s: string): Observable<WeatherInterface[]> {
    return this.http.get<WeatherInterface[]>(this.url+this.search+this.key+this.lang+this.parametro+s).pipe(
      map((data: WeatherInterface[]) => {
        return data
      }))
  }
}
