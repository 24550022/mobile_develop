import { registerRootComponent } from 'expo';

import KT1Navigator from './app/KT1/KT1Navigator';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(KT1Navigator);
