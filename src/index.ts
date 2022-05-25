import {Plugins} from '@capacitor/core';

const {registerPlugin} = Plugins;

import type { RateAppPlugin } from './definitions';

const RateApp = registerPlugin<RateAppPlugin>('RateApp', {
  web: () => import('./web').then(m => new m.RateAppWeb()),
});

export * from './definitions';
export { RateApp };
