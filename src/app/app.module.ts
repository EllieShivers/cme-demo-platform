import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { UnitComponent } from './components/unit/unit.component';
import { VideoLessonComponent } from './components/video-lesson/video-lesson.component';
import { TextLessonComponent } from './components/text-lesson/text-lesson.component';
import { QuizLessonComponent } from './components/quiz-lesson/quiz-lesson.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material';
import { ModuleSelectorComponent } from './components/module-selector/module-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    MainPageComponent,
    UnitComponent,
    VideoLessonComponent,
    TextLessonComponent,
    QuizLessonComponent,
    ModuleSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
