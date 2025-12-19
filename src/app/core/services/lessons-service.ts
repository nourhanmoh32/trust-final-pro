import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  private readonly apiUrl = 'https://693f43b012c964ee6b6f8455.mockapi.io/api/v/lessons';
  private http = inject(HttpClient);
  lessons = signal<any[]>([]);

  loadLessons() {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: data => {
        console.log('Data from API:', data); 
        const sorted = data.sort((a, b) => a.order - b.order);
        this.lessons.set(sorted);
      },
      error: () => {
        console.error('Error in loading lessons');
      }
    });
  }

}
