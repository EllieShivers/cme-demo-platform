import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonComponent } from './lesson/lesson.component';
import {MainPageComponent} from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'lesson/:id', component: LessonComponent,
    runGuardsAndResolvers: 'always',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
