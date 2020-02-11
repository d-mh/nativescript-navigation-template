import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Login } from '../shared/state/auth.actions';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store,
  ) { }

  ngOnInit() { }

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
