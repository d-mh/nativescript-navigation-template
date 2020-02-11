import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Login, Authenticate } from '../shared/state/auth.actions';
import { AuthState, AuthStateModel } from '../shared/state/auth.state';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  @Select(AuthState) authState$: Observable<AuthStateModel>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    this.authState$
      .pipe(take(1))
      .subscribe(({ token, username }) => {
        if (token && username) {
          this.store.dispatch(new Authenticate());
        }
      });
  }

  ngOnDestroy(): void { }

  login() {
    const payload: { username: string; password: string; } = { username: 'admin', password: 'password' };
    this.store.dispatch(new Login(payload));
  }

  loginWrongCreds() {
    const payload: { username: string; password: string; } = { username: 'admin', password: 'wrongPassword' };
    this.store.dispatch(new Login(payload));
  }

}
