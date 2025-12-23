import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AuthService } from '../../../core/services/auth.service';

interface images{
  href: string;
}

@Component({
  selector: 'app-lesson1',
  imports: [RouterLink],
  templateUrl: './lesson1.html',
  styleUrl: './lesson1.css',
})
export class Lesson1 {
  private authServe = inject(AuthService);
  lessonId = 1;
  
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
