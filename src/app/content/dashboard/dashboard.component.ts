import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Logout } from '../../shared/state/auth.actions';

@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store,
  ) { }

  ngOnInit() { }

  ngOnDestroy(): void { }

  logout() {
    this.store.dispatch(new Logout());
  }

}
