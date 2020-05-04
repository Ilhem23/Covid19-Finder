import { StackNavigator } from 'react-navigation'
import {
  RegisterScreen,
  PinCodeScreen,
  LoginScreen,
  LaunchScreen
} from '../Containers'

import styles from './Styles/NavigationStyles'

const headerHidden = { navigationOptions: { header: null } }

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    RegisterScreen: { screen: RegisterScreen, ...headerHidden },
    PinCodeScreen: { screen: PinCodeScreen, ...headerHidden },
    LoginScreen: { screen: LoginScreen, ...headerHidden },
    LaunchScreen: { screen: LaunchScreen, ...headerHidden }
    
  }, {
    // Default config for all screens
    // initialRouteName: 'NfcPendingScreen',
    initialRouteName: 'LaunchScreen',
    navigationOptions: {
      headerStyle: styles.header
    }
  }
)

export default PrimaryNav
