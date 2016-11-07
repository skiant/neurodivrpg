import { Component, OnInit } from '@angular/core';
import Storage, {storageChange} from './storage.model';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {
  storage: Storage;
  pointsDelta: number = 1;
  settingsOpen: Boolean = false;

  constructor() { }

  toggleSettingsVisibility () {
    this.settingsOpen = !this.settingsOpen;
  }

  ngOnInit () {
    this.storage = new Storage();
  }

  losePoints () {
    this.storage.changeAmount(storageChange.loss, this.pointsDelta);
  }

  refillCounter () {
    this.storage.changeAmount(storageChange.gain, 10);
  }
}
