import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    height: 70,
    width: 200,
    left: 30,
    borderRadius: 30,
    marginTop: 20,
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin,
    backgroundColor: Colors.snow,
    justifyContent: 'center'
  },
  buttonText: {
    color: Colors.verte,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.medium,
    fontSize: 15,
    marginVertical: Metrics.baseMargin
  },
   inputIcon: {
    color: Colors.verte,
    fontSize: 30
  },
   inputTxt: {
    // marginTop: 10,
    height: 80,
    borderColor: Colors.transparent,

  }
})
