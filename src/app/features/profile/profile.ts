import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { LessonsService } from '../../core/services/lessons-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [DatePipe],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  private authApi = inject(AuthService);
  private lessonServe = inject(LessonsService);
  private router = inject(Router);

  user = this.authApi.currentUser;

  //lessons
  lessonstable = this.lessonServe.lessons;

  // exams
  examTable = computed(() => this.authApi.currentUser()?.progress?.exams || []);

  // get lesson's exam الاختبار الخاص بكل درس لوحده بدون باقي الاختبارات
  getExamForLesson(lessonId: any) {
    const exams = this.examTable();
    if (!exams) return null;

    return exams.reverse().find((exam: any) => Number(exam.lessonId) === Number(lessonId));
  }

  constructor() {
    this.lessonServe.loadLessons();
  }
}
