import { Component } from '@angular/core';
import {Unit} from './models/unit';
import {unit01} from '../assets/lessons/unit01';
import {unit06} from '../assets/lessons/unit06';
import {unit02} from '../assets/lessons/unit02';
import {unit03} from '../assets/lessons/unit03';
import {unit07} from '../assets/lessons/unit07';
import {unit04} from '../assets/lessons/unit04';
import {unit05} from '../assets/lessons/unit05';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cme-demo-platform';
  course: Unit[] = [unit01, unit02, unit03, unit04, unit05, unit06, unit07];
  selectedUnit: Unit;

  selectUnit(unit: Unit) {
    this.selectedUnit = unit;
  }
}
