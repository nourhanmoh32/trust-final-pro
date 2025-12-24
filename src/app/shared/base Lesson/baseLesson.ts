import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

export class BaseLesson {
  protected router = inject(Router);
  protected authServe = inject(AuthService);

//   submittedLesson = false;
  lessonsOrder = [1, 2, 3, 4, 5, 6];

  //   to next lesson
  nextLesson(lessonId: number) {
    const currentIndex = this.lessonsOrder.indexOf(lessonId);
    if (currentIndex < this.lessonsOrder.length - 1) {
      const nextId = this.lessonsOrder[currentIndex + 1];
      this.router.navigate(['/lesson' + nextId]);
    } else {
      this.router.navigate(['/lessonsDash']);
    }
  }

  //   to previous lesson
  preLesson(lessonId: number){
    const currentIndex = this.lessonsOrder.indexOf(lessonId);
    if (currentIndex < this.lessonsOrder.length && currentIndex > 0) {
      const preId = this.lessonsOrder[currentIndex - 1];
      this.router.navigate(['/lesson' + preId]);
    } else {
      this.router.navigate(['/lessonsDash']);
    }
  }

  //   finishing lesson func.
//   finishLesson(currentLessonId: number) {
//   if (this.submittedLesson) {
//     return;
//   }

//   this.submittedLesson = true;

//   // نرسل رقم الدرس فقط (مثلاً 1) وليس المصفوفة كاملة
//   const result = {
//     lessonId: currentLessonId, 
//   };

//   this.authServe.saveLessonProg(result).subscribe({
//     next: () => {
//       console.log('lesson saved successfully');
//     },
//     error: (err) => {
//       this.submittedLesson = false; // إعادة التفعيل في حال فشل الطلب
//       console.error('lesson saving error', err);
//     },
//   });
// }
}
