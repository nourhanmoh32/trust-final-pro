import { Component, inject } from '@angular/core';
import { LessonsService } from '../../../core/services/lessons-service';
import {  RouterLink } from '@angular/router';


@Component({
  selector: 'app-lessons-dash',
  imports: [RouterLink],
  templateUrl: './lessons-dash.html',
  styleUrl: './lessons-dash.css',
})
export class LessonsDash {
  private lessonServe = inject(LessonsService);
  lessonCards = this.lessonServe.lessons;
  
  constructor() {
    this.lessonServe.loadLessons();
  }

}
