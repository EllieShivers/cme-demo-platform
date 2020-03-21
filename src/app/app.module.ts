import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UnitComponent } from './unit/unit.component';
import { VideoLessonComponent } from './components/video-lesson/video-lesson.component';
import { TextLessonComponent } from './components/text-lesson/text-lesson.component';
import { QuizLessonComponent } from './components/quiz-lesson/quiz-lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    MainPageComponent,
    UnitComponent,
    VideoLessonComponent,
    TextLessonComponent,
    QuizLessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
