import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(
    private activeRoute: ActivatedRoute,
    private routerExtension: RouterExtensions) {
  }

  ngOnInit() {
    console.log('[DashboardComponent] ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log('[DashboardComponent] ngOnDestroy()');
  }

  navigateToLogin() {
    this.routerExtension.navigate(
      ['/login'],
      {
        clearHistory: true,
        relativeTo: this.activeRoute.root,
        animated: true,
        transition: { name: 'slideRight' }
      });
  }

}
