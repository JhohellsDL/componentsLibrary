/**
 * @format
 */

import {AppRegistry} from 'react-native';
import ComponentsLibrary from './storybook/ComponentsLibrary';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ComponentsLibrary);
