import {Component} from '@angular/core';
import {ApiService} from '../services/api/api.service';
import {Observable, Subject} from 'rxjs';
import {OnDestroy} from '@angular/core';
import {Weather} from '../models/weather.model';
import {ModalController} from '@ionic/angular';
import {SettingsPage} from '../pages/settings/settings.page';
import {PlacesService} from '../services/places/places.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  weather$: Observable<Weather>[] = [];

  constructor(
    private apiService: ApiService,
    private modalCtrl: ModalController,
    private placesService: PlacesService
  ) {
    this.initWeather();
  }


  openSettings() {
    this.openModal();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SettingsPage,
    });

    await modal.present();
    console.log('prenset');
    await modal.onWillDismiss();
    console.log('onWillDismiss');
    await modal.onDidDismiss();
    console.log('onDidDismiss');
    this.initWeather();

  }

  openDetail(weather: Weather) {
    this.placesService.detail = weather;
  }

  private initWeather() {
    this.weather$ = [];
    this.placesService.places.forEach(place => {
      if (place.homepage) {
        this.weather$.push(this.apiService.getWeather(place.latitude, place.longitude));
      }
    });
  }


}
