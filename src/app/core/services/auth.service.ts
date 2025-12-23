import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly baseUrl = 'https://693f43b012c964ee6b6f8455.mockapi.io/api/v/users';

  //current user Signal
  private _currentUser = signal<any | null>(this.getUserFromStorage());

  currentUser = computed(() => this._currentUser());

  constructor(private http: HttpClient) {}

  // loging
  login(data: any, rememberMe: boolean) {
    const params = new HttpParams().set('email', data.email).set('password', data.password);

    return this.http.get<any[]>(this.baseUrl, { params }).pipe(
      map((users) => (users.length ? users[0] : null)),
      tap((user) => {
        if (user) {
          //fake token
          const userWithToken = { ...user, token: 'fake-token-' + user.id };
          if (rememberMe) {
            localStorage.setItem('currentUser', JSON.stringify(userWithToken));
          }
          this._currentUser.set(userWithToken);
        }
      })
    );
  }

  // register
  register(dto: any) {
    return this.http.post<any>(this.baseUrl, dto).pipe(
      tap((user) => {
        if (user) {
          const userWithToken = { ...user, token: 'fake-token-' + user.id };
          localStorage.setItem('currentUser', JSON.stringify(userWithToken));
          this._currentUser.set(userWithToken);
        }
      })
    );
  }

  // جلب المستخدم من localStorage عند بداية التطبيق
  private getUserFromStorage(): any | null {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  // التحقق من وجود token
  isLoggedIn(): boolean {
    const user = this._currentUser();
    return !!user?.token;
  }

  // log out
  logout(): void {
    localStorage.removeItem('currentUser');
    this._currentUser.set(null);
  }

  // save exams degree
  // saveExamDegree(result: any) {
  //   const user = this._currentUser();

  //   if (!user) {
  //     return throwError(() => new Error('User not logged in'));
  //   }

  //   const updatedUser = {
  //     ...user,
  //     progress: {
  //       lessonsCompleted: user.progress?.lessonsCompleted || [],
  //       exams: [...(user.progress?.exams || []), result],
  //     },
  //   };
  //   const { token, ...userDataToSave } = updatedUser; // حذف التوكن قبل الحفظ
  //   return this.http.put(`${this.baseUrl}/${user.id}`, userDataToSave).pipe(
  //     tap(() => {
  //       localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  //       this._currentUser.set(updatedUser);
  //     })
  //   );
  // }
  saveExamDegree(result: any) {
  const user = this._currentUser();
  if (!user) return throwError(() => new Error('User not logged in'));

  const updatedUser = {
    ...user,
    progress: {
      ...user.progress,
      exams: [...(user.progress?.exams || []), result]
    }
  };

  const { token, ...payload } = updatedUser;

  return this.http.put(`${this.baseUrl}/${user.id}`, payload).pipe(
    tap((response: any) => {
      const userWithToken = { ...response, token: user.token };
      this._currentUser.set(userWithToken);
      localStorage.setItem('currentUser', JSON.stringify(userWithToken));
    })
  );
}
}
