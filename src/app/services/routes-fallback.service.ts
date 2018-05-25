import { Injectable } from '@angular/core';
import { ROUTES_FALLBACK } from '../constants/routes-fallback';

@Injectable({
  providedIn: 'root'
})
export class RoutesFallbackService {
  _fallbackRoutes = ROUTES_FALLBACK;
  constructor() { }

  /**
   * @author Ahsan Ayaz, Akash Agrawal
   * @desc Checkes the fallback routes and matches if the current url is an old
   * url and so the new url should b triggered with correct parameters.
   * @returns an object containing the new route and the route params map
   */
  getFallbackRoute(routeUrl) {
    const fallbackParamsMap = [];
    const fallbackRoute = this._fallbackRoutes.find(fallback => {
      let parsedFallbackUrl, parsedCurrentUrl;
      parsedFallbackUrl = fallback.old.split('/').filter(chunk => (chunk !== ''));
      parsedCurrentUrl = routeUrl.split('/').filter(chunk => (chunk !== ''));
      if (parsedFallbackUrl.length === parsedCurrentUrl.length) {
        let perfectMatch = true;
        for (let i = 0, len = parsedCurrentUrl.length; i < len; ++i) {
          if (parsedFallbackUrl[i].startsWith(':')) {
            fallbackParamsMap.push({
              param: parsedFallbackUrl[i],
              value: parsedCurrentUrl[i]
            });
          } else if (parsedCurrentUrl[i] !== parsedFallbackUrl[i]) {
            perfectMatch = false;
            break;
          }
        }
        return perfectMatch;
      } else {
        return false;
      }
    });
    return {
      route: fallbackRoute,
      paramMap: fallbackParamsMap
    };
  }
}
