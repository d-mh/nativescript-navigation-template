import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ns-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {

  constructor(
    private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('[ContentComponent] ngOnInit()');

    // navigate to default page
    this.routerExtension.navigate(['/app/content', { outlets: { contentRouterOutlet: ['dashboard'] } }], { relativeTo: this.activeRoute });
  }

  ngOnDestroy(): void {
    console.log('[ContentComponent] ngOnDestroy()');
  }

}
