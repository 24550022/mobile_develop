import { registerRootComponent } from 'expo';

import BTTH5Navigator from './app/BTTH5/BTTH5Navigator';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(BTTH5Navigator);
