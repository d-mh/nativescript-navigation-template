import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private activeRoute: ActivatedRoute,
    private routerExtension: RouterExtensions) {
  }

  ngOnInit() {
    console.log('[LoginComponent] ngOnInit()');
  }

  ngOnDestroy(): void {
    console.log('[LoginComponent] ngOnDestroy()');
  }

  navigateToApp() {
    console.log('navigateToApp()');
    this.routerExtension.navigate(
      ['/app/content'],
      {
        clearHistory: true,
        relativeTo: this.activeRoute,
        animated: true,
        transition: { name: 'slideLeft' }
      });
  }

}
