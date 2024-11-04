import { Component, OnInit } from '@angular/core';
import { WeathersService } from '../../services/weathers.service';
import { WeatherInterface } from '../../interfaces/weathers.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {

  busqueda: string = ''
  filteredWeathers: WeatherInterface[] = []

  constructor(private weathersService: WeathersService) {}

  ngOnInit() {}

  getWeathers() {
    if (this.busqueda != '') {
      this.weathersService.getWeathersWithSearch(this.busqueda).subscribe((weathers: WeatherInterface[]) => {
        this.filteredWeathers = weathers
      })
    }
  }
}
