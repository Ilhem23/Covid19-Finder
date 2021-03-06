import React, { Component } from 'react'
import { View } from 'react-native'
import { Text, Item, Input, Icon } from 'native-base'
import styles from '../Styles/FormFieldStyles'

class EmailField extends Component {
  render() {
    const { input, meta, onEnter, placeholder, refField } = this.props;
    return (
      <View>
        <Item regular style={[styles.inputTxt, { marginTop: 10 }]}>
          <Icon name='ios-mail' style={styles.inputIcon} />
          <Input
            placeholder={placeholder}
            ref={refField}
            keyboardType='email-address'
            returnKeyType='next'
            autoCapitalize='none'
            autoCorrect={false}
            onSubmitEditing={onEnter}
            {...input}
            style={styles.whiteColor}
            selectionColor={'#fff'}
            placeholderTextColor={"#ffffff90"} />
          {meta.invalid && meta.touched && <Icon style={styles.alertIcon} name='md-alert' />}
        </Item>
        {meta.invalid && meta.touched && <Text style={styles.errorText}>{meta.error}</Text>}
      </View>
    );
  }
}

export { EmailField }