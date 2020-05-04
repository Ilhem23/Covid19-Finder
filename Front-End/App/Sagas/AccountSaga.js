import { call, put } from 'redux-saga/effects'
import I18n from 'react-native-i18n'
import AccountActions from '../Redux/AccountRedux'

export function* getProfile(api) {
  const response = yield call(api.getProfile)
try {
   // success? 
  if (response.ok) {
    yield put(AccountActions.accountSuccess(response.data))
  } else {
    yield put(AccountActions.accountFailure(I18n.t('accountFetchError')))
  }

} catch (e) {
  debugger
}
 
}

export function* requestNewAccount(api, { requestType }) {
  const response = yield call(api.requestNewAccount, requestType)
try {
  // success? 
  if (response.ok) {
    yield put(AccountActions.newAccountSuccess(response.data))
  } else {
    yield put(AccountActions.accountFailure(I18n.t('accountFetchError')))
  }
} catch (e) {
  debugger
}
 
}