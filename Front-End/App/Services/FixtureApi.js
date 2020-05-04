export default {
  // auth fixtures
  setAuthHeaders: () => { },
  removeAuthHeaders: () => { },
  login: (authObj) => {
    if (
      authObj.username === 'user@email.com' &&
      authObj.password === 'password' &&
      ['sms', 'email'].includes(authObj.confirmation_method)
    ) {
      return {
        ok: true,
        data: require('../Fixtures/login.json')
      }
    } else {
      return {
        ok: false,
        status: 400,
        data: 'Invalid credentials'
      }
    }
  },
  confirmPinCode: (data) => {
    if (
      data.pin_code === '1234' &&
      data.temporary_token === require('../Fixtures/login.json').temporary_token
    ) {
      return {
        ok: true,
        data: require('../Fixtures/pinCode.json')
      }
    } else {
      return {
        ok: false,
        status: 400,
        data: 'Invalid pin code'
      }
    }
  },
   getProfile: data => {
    return {
      ok: true,
      data: require('../Fixtures/profile.json')
    }
  },
  requestNewAccount: type => {
    return {
      ok: true,
      data: {
        "saved": true,
        "commission": 210
      }
    }
  }
}
