import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { LessonsService } from '../../core/services/lessons-service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  private authApi = inject(AuthService);
  private lessonServe = inject(LessonsService);
  private router = inject(Router);

  user = this.authApi.currentUser;

  lessonstable = this.lessonServe.lessons;

  constructor() {
    this.lessonServe.loadLessons();
  }
}
