import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { BaseLesson } from '../../../shared/base Lesson/baseLesson';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lesson2',
  imports: [RouterLink],
  templateUrl: './lesson2.html',
  styleUrl: './lesson2.css',
})
export class Lesson2 extends BaseLesson{
  // private authServe = inject(AuthService);
  lessonId = 2;

  submittedLesson = false;
  finishLesson(){
    if (this.submittedLesson) {
      return;
    }

    this.submittedLesson = true;

    const result = {
      lessonId: this.lessonId
    }

    // lesson progress
    this.authServe.saveLessonProg(result).subscribe({
      next: () => {
        console.log('lesson saved successfully');
      },
      error: (err) => {
        console.error('lesson saving exam', err);
      },
    });
  }
}
