import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import { reducer as form } from 'redux-form'
import { reducer as nav } from './NavigationRedux'
import { reducer as auth } from './AuthRedux'
import { reducer as pinCode } from './PinCodeRedux'
import { reducer as account } from './AccountRedux'


/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  form, nav, auth, pinCode,account
})

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
