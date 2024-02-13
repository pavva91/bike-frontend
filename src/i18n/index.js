import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            contacts: 'Contacts'
        },
        home: {
            header: 'Welcome to the Vue 3 I18n tutorial!',
            created_by: 'This tutorial was brought to you by Lokalise.'
        },
        about: {
            header: 'About us'
        },
        contacts: {
            header: 'Contacts'
        },
        footer: {
            title: 'This is a footer'
        }
    },
    nl: {
        nav: {
            home: 'Homepagina',
            about: 'Over ons',
            contacts: 'Contact'
        },
        home: {
            header: 'Welkom alemaal',
            created_by: 'Dit is een',
        },
        about: {
            title: 'Over ons'
        },
        contacts: {
            title: 'Contact'
        },
        footer: {
            title: 'Heel belang footer'
        }
    },
    ru: {
        nav: {
            home: 'Главная',
            about: 'О нас',
            contacts: 'Sticazzi'
        },
        home: {
            header: 'Добро пожаловать в руководство Vue 3 I18n!',
            created_by: 'Это руководство создано для вас компанией Lokalise.',
            footer_title: 'Footer Title in Russian'
        },
        about: {
            header: 'О нас'
        },
        footer: {
            title: 'Russian footer'
        }

    }
}

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LOCALE, // <--- 1
    fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE, // <--- 2
    legacy: false, // <--- 3
    globalInjection: true,
    messages
})
