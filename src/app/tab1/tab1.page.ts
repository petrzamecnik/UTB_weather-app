import {Component} from '@angular/core';
import {ApiService} from '../services/api/api.service';
import {Observable, Subject} from 'rxjs';
import {OnDestroy} from '@angular/core';
import {Weather} from '../models/weather.model';
import {ModalController} from '@ionic/angular';
import {SettingsPage} from '../pages/settings/settings.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  weather$: Observable<Weather>[] = [];

  constructor(
    private apiService: ApiService,
    private modalCtrl: ModalController
  ) {
    this.weather$.push(this.apiService.getWeather(49.231117480192495, 17.65725611161196));
    this.weather$.push(this.apiService.getWeather(49.20097624827957, 17.49025452997935));


  }


  openSettings() {
    this.openModal();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SettingsPage,
    });

    await modal.present();
  }

}
