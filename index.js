/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// requestler network tabinda gozukmedigi icin bu kod satirini ekledim
// (https://preslav.me/2017/03/26/debugging-network-calls-in-react-native-using-the-chrome-debugger/)
XMLHttpRequest = GLOBAL.originalXMLHttpRequest
  ? GLOBAL.originalXMLHttpRequest
  : GLOBAL.XMLHttpRequest;
AppRegistry.registerComponent(appName, () => App);
