import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit, OnDestroy {
  navigationSubscription;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialise();
      }
    });
  }

  initialise() {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
