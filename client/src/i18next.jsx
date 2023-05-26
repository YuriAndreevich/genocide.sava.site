import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"


import ru from "./locales/ru.json"
import bel from "./locales/bel.json"

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                translations: ru,
            },
            bel: {
                translations: bel,
            },
        },
        fallbackLng: "bel",
        lng:
            (localStorage.getItem("i18nextLng")) || "bel",
        debug: false,
        ns: ["translations"],
        defaultNS: "translations",
        keySeparator: false,
        nsSeparator: false,
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
