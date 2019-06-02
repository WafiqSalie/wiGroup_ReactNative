
import { createStackNavigator } from 'react-navigation';

import SignInScreen from './SignIn';
import Walkthrough from './walkthrough';

export default createStackNavigator(
    {
        SignIn: SignInScreen,
        Walkthrough: Walkthrough
    },
    {
        headerMode: "none"
    }
);
