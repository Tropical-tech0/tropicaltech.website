import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//import languages
import pt from "./languages/pt";//portuguese
import en from "./languages/en";//english
import es from "./languages/es";//spanish

//multi language system
i18next.use(initReactI18next).init({
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    },
    resources: {
        pt: pt,
        en: en,
        es: es
    }
})

export default i18next