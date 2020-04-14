import { Component } from '@angular/core';
import {Unit} from '../../projects/simple-course-core/src/lib/models/unit';
import {unit01} from '../assets/lessons/unit01';
import {unit06} from '../assets/lessons/unit06';
import {unit02} from '../assets/lessons/unit02';
import {unit03} from '../assets/lessons/unit03';
import {unit07} from '../assets/lessons/unit07';
import {unit04} from '../assets/lessons/unit04';
import {unit05} from '../assets/lessons/unit05';
import { Course } from '../../projects/simple-course-core/src/lib/models/course';
import { course } from '../assets/lessons/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Transgender and Nonbinary Care from a Social Perspective';
  course: Course = course;
  selectedUnit: Unit;
  menuHidden: boolean = false;

  selectUnit(unit: Unit) {
    this.selectedUnit = unit;
  }

  openFrontPage() {
    this.selectedUnit = null;
  }

  toggleHideMenu() {
    this.menuHidden = !this.menuHidden;
  }
}
