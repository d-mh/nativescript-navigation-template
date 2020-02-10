import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

export const navigateToContentPage = (routerExtension: RouterExtensions, activeRoute: ActivatedRoute) => {
    routerExtension.navigate(
        ['/app/content'],
        {
            clearHistory: true,
            relativeTo: activeRoute,
            animated: true,
            transition: { name: 'slideLeft' }
        }
    );
};

export const navigateToLoginPage = (routerExtension: RouterExtensions, activeRoute: ActivatedRoute) => {
    routerExtension.navigate(
        ['/login'],
        {
            clearHistory: true,
            relativeTo: activeRoute.root,
            animated: true,
            transition: { name: 'slideRight' }
        }
    );
};
