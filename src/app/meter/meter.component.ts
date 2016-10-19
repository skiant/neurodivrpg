import { Component, OnInit } from '@angular/core';
import Meter, {meterChange} from './meter.model';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.css']
})
export class MeterComponent implements OnInit {
  meter: Meter;
  pointsDelta: number = 1;

  constructor() { }

  ngOnInit() {
    this.meter = new Meter();
  }

  losePoints () {
    this.meter.changeAmount(meterChange.loss, this.pointsDelta);
  }

  refillCounter () {
    this.meter.changeAmount(meterChange.gain, 10);
  }
}
