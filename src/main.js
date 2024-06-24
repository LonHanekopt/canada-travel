import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import router from './router.js'
//localisations
import { defaultLocale, languages } from './locale'
import { createI18n, useI18n } from 'vue-i18n'

const messages = Object.assign(languages)

const i18n = createI18n({
    fallbackLocale: 'en',
    locale: defaultLocale,
    messages
})

createApp(App, {
    setup() {
        const {t} = useI18n({useScope: 'global'})
        return {t, i18n}
    }
}).use(router).use(i18n).mount('#app')
