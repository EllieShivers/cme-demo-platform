import {Component, Input, OnInit} from '@angular/core';
import {VideoLesson} from '../../models/video-lesson';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {LessonComponent} from '../lesson/lesson.component';

@Component({
  selector: 'app-video-lesson',
  templateUrl: './video-lesson.component.html',
  styleUrls: ['./video-lesson.component.css', '../lesson/lesson.component.css']
})

export class VideoLessonComponent extends LessonComponent implements OnInit {

  @Input() lesson: VideoLesson;
  videoEmbedCode: SafeHtml;

  constructor(private domSanitizer: DomSanitizer) { super(); }

  ngOnInit() {
    this.videoEmbedCode = this.domSanitizer.bypassSecurityTrustHtml(this.lesson.videoEmbedCode);
  }

}
