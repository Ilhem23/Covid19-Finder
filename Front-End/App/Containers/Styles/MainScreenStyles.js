import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    left: 10,
  },
   TextFeel: {
      ...Fonts.style.h2,
      fontSize: 25,
      color: Colors.text
    },
    TextMain: {
    marginTop: 60,
 alignItems: 'center'
  },
rounded: {
    marginTop: 20,
 
  },
round: {
    marginTop: 30,

  }
})
