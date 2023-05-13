import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        // Set a default  style for enter and leave
        query(':enter, :leave', [
          style({
            position: 'absolute',
            width: '100%',
            opacity: 0,
            transform: 'scale(0) translateY(100%)',
          }),
        ]),
        // Animate the new page in
        query(':enter', [
          animate('500ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)'})),
        ])
      ])
    ])
  ]

})
export class AppComponent {
  title = 'app';
/**
 *
 */
constructor() {


}

prepareRoute(outlet: RouterOutlet) {
  return (
    outlet &&
    outlet.activatedRouteData &&
    outlet.activatedRouteData['animation']
  )
}
}


