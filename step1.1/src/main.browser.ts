import './polyfills.browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Our1stModule } from './app/app.module';

export const platformRef = platformBrowserDynamic();

export function main() {
  return platformRef.bootstrapModule(Our1stModule)
    .catch(err => console.error(err));
}

// support async tag or hmrstep3.1
switch (document.readyState) {
  case 'interactive':
  case 'complete':
    main();
    break;
  case 'loading':
  default:
    document.addEventListener('DOMContentLoaded', () => main());
}
