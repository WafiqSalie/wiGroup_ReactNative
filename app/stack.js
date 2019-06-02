
import { createStackNavigator } from 'react-navigation';


import HomeScreen from './Home';
import WebView from './Webview'

export default createStackNavigator(
    {
        Home: HomeScreen,
        WebView: WebView
    }
);
