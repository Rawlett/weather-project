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
  selectedWeather?: WeatherInterface

  constructor(private weathersService: WeathersService) {}

  ngOnInit() {}

  getWeathers() {
    if (this.busqueda != '') {
      this.weathersService.getWeathersWithSearch(this.busqueda).subscribe((weathers: WeatherInterface[]) => {
        this.filteredWeathers = weathers
        this.orderLista()
      })
    } else {
      this.filteredWeathers = []
    }
  }

  orderLista() {
    this.filteredWeathers.sort((a, b) => {
      const nameComparison = a.name.localeCompare(b.name)
      if (nameComparison !== 0) return nameComparison
  
      const regionComparison = a.region.localeCompare(b.region)
      if (regionComparison !== 0) return regionComparison
    
      return a.country.localeCompare(b.country)
    })
  }

  onOptionSelected(event: any) {
    const optionSelected = event.option.value

    this.busqueda = `${optionSelected.name}, ${optionSelected.region}, ${optionSelected.country}`

    this.selectedWeather = this.filteredWeathers.find(weather => weather.id === optionSelected.id)
    
    console.log('Objeto seleccionado:', this.selectedWeather)
  }
}
