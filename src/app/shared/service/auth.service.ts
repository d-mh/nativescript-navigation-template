import { Injectable } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(payload: { username: string, password: string }): Observable<{ token: string }> {

    if (payload.username === 'admin' && payload.password === 'password') {

      return of({ token: 'token here' });
    } else {

      // throw Error('Wrong login credentials!');
      return throwError('Wrong login credentials!');
    }

  }

  logout(token: string): Observable<any> {

    return of(null);
  }

}
