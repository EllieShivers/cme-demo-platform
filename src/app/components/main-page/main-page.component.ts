import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css',  '../lesson/lesson.component.css']
})
export class MainPageComponent implements OnInit {

  @Input() course;

  constructor() { }

  ngOnInit() {
  }

}
