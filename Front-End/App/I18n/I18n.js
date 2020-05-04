// @flow

import I18n from 'react-native-i18n'

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

// English language is the main language for fall back:
I18n.translations = {
  fr: require('./languages/fr.json')
}

I18n.defaultLocale = 'fr'

let languageCode = I18n.locale.substr(0, 2)
