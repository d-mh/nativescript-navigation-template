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

  ngOnInit() {
    console.log('[LoginComponent] ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log('[LoginComponent] ngOnDestroy()');
  }

  login() {
    console.log('login()');

    const payload: { username: string; password: string; } = { username: 'admin', password: 'password' };
    this.store.dispatch(new Login(payload));
  }

}
