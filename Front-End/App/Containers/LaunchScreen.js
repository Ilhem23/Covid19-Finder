import React, { Component } from 'react'
import { ActivityIndicator, Text, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'
const LogoImage = () => {
  return <Image source={Images.logo} style={styles.logo} />
}

export default class LaunchScreen extends Component {
  render () {
    return (
      
      <View style={styles.centered}>
        <LogoImage />
        <ActivityIndicator size={'large'} />
      </View>
    )
    
  }
}
