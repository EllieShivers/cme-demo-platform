import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonComponent } from './components/lesson/lesson.component';
import {MainPageComponent} from './components/main-page/main-page.component';

const routes: Routes = [
  { path: 'lesson/:id', component: LessonComponent,
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
