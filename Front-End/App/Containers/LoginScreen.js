import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import { Container, Content } from 'native-base'
import { connect } from 'react-redux'
import I18n from 'react-native-i18n'
import { DialogButton } from 'react-native-popup-dialog'
import { LoadingDialog } from '../Components'
import { Images } from '../Themes'
import AuthActions from '../Redux/AuthRedux'
import { LoginForm } from './Forms'

// Styles
import styles from './Styles/LoginScreenStyle'

/* istanbul ignore next */
const LogoImage = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={Images.logo} style={styles.logo} />
    </View>
  )
}

class LoginScreen extends Component {
  static propTypes = {
    fetching: PropTypes.bool,
    error: PropTypes.string,
    success: PropTypes.bool,
    attemptLogin: PropTypes.func
  }

  componentWillReceiveProps({ fetching, success }) {
    /* istanbul ignore else */
    if (!fetching && success) {
      this.dialog.dismiss();
     this.goToSignUpPage();
      this.props.reset()
    }
  }

  submit = (confirmationMethod) => {
    this.props.attemptLogin(this.email, this.password, confirmationMethod);
     this.goToSignUpPage()
  }

  loginFormSubmit = (values) => {
    this.email = values.email;
    this.password = values.password;
    this.dialog.show();
  }

  goToPinCodePage = () => {
    this.props.navigation.navigate('PinCodeScreen');
  }

  goToSignUpPage = () => {
    this.props.navigation.navigate('MainScreen');
  }

  renderConfirmationMethod = (fetching) => (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <DialogButton disabled={fetching} text={I18n.t('authDialogPinByEmail')}
        onPress={() => { this.submit('email'); }} />
        <DialogButton disabled={fetching} text={I18n.t('authDialogPinBySms')}
        onPress={() => { this.submit('sms'); }} />
    </View>
  )

  render() {
    const { fetching, error, reset } = this.props;
    return (
      <Container style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <LoadingDialog
          reset={reset}
          init={/* istanbul ignore next */dialog => { this.dialog = dialog }}
          error={error}
          errorTitle={I18n.t('authDialogTitleError')}
          fetching={fetching}
          fetchingTitle={I18n.t('authDialogTitleFetching')}
          fetchingMessage={I18n.t('authDialogDescriptionFetching')}
          defaultTitle={I18n.t('authDialogTitle')}
          defaultMessage={I18n.t('authDialogDescription')}
        >
          {this.renderConfirmationMethod(fetching)}
        </LoadingDialog>
        <Content>
          <LogoImage />
          <LoginForm
            onSubmit={this.loginFormSubmit}
            editable={!fetching}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = ({ auth: { fetching, error, success } }) => {
  return { fetching, error, success };
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (...data) => dispatch(AuthActions.authRequest(...data)),
    reset: () => dispatch(AuthActions.authReset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
