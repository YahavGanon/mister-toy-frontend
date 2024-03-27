import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './RootCmp.jsx'
import i18next from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'

import global_en from "./translations/en/global.json"
import global_he from "./translations/he/global.json"


i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    he: {
      global: global_he,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>

)
