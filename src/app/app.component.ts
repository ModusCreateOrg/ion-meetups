import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';
import { RoutesFallbackService } from './services/routes-fallback.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private routesFallbackService: RoutesFallbackService
  ) {

  }
  ngOnInit() {
    /**
     * Subscribing to router events implementing a fallback mechanism
     * This would make sure our v3 urls work fine with v4 as well (especially the case for)
     * ionic web apps
     */
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        const match = this.routesFallbackService.getFallbackRoute(event.url);
        if (match && match.route) {
          let url = match.route.new;
          match.paramMap.map(mapping => {
            url = url.replace(mapping.param, mapping.value);
          });
          this.router.navigateByUrl(url);
        }
      }
    });
  }
}

