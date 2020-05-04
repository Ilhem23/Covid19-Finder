import { StyleSheet } from 'react-native'
import FormStyles from './FormStyle'
import { Colors, Fonts } from '../../../Themes'

export default StyleSheet.create({
  ...FormStyles,
  loginBtn: {
    paddingHorizontal: 70,
    marginTop: 30,
    alignSelf: 'center',
    height: 40,
    borderColor: Colors.button,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'transparent'
  },
  signupBtn: {
    alignSelf: 'center',
    marginTop: 40
  },
  TextLog: {
      ...Fonts.style.h3,
      fontSize: 14,
      color: Colors.text
    }
})
