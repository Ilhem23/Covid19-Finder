import React, { Component } from 'react'
import I18n from 'react-native-i18n'
import { Image, Text, View, ActivityIndicator } from 'react-native'
import { Images } from '../Themes'
import {RoundedButton, RoundBot} from '../Components'

// Styles
import styles from './Styles/MainScreenStyles'
const LogoImage = () => {
  return <Image source={Images.logo} style={styles.logo} />
}

export default class MainScreen extends Component {
    

  render () {
    return (
       <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
           <View style={styles.TextMain}>
          <Text style={styles.TextFeel}>{I18n.t('questionfeel')}</Text>
          </View>
          <View style={styles.rounded}>
          <RoundedButton text={I18n.t('getchecked')}/>
          </View>
           <View style={styles.round}>
          <RoundBot text={I18n.t('numberUpdate')}/>
          </View>
      </View>
     
    )
    
  }
  
}