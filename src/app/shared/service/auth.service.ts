import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(payload: any): Observable<{ token: string }> {

    return of({ token: 'token here' });
  }

  logout(token: string): Observable<any> {

    return of(null);
  }

}
