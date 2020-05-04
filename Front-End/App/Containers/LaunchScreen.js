import React, { Component } from 'react'
import I18n from 'react-native-i18n'
import { Image, Text, View, ActivityIndicator } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
const LogoImage = () => {
  return <Image source={Images.logo} style={styles.logo} />
}


export default class LaunchScreen extends Component {
    
   componentDidMount() {
    const { navigate } = this.props.navigation;
    setTimeout(() => navigate('LoginScreen'), 1000)
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
         <View style={styles.centered}>
        <LogoImage />
        <ActivityIndicator size={'large'} />
      </View>
      </View>
     
    )
    
  }
}
