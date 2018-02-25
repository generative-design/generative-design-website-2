var currentLocale = navigator.browserLanguage || navigator.language;

var textReplacements = {
    de: {
        'title': 'Generative Gestaltung',
        'intro': 'Diese Website ergänzt das Buch »Generative Gestaltung, Creative Coding im Web« (erschienen im Verlag Hermann Schmidt, 2018) und bietet direkten Zugriff auf alle Quellcodes der im Buch beschriebenen Programme.',
        'slide-book-store-link-herman-schmidt-verlag': 'Buch kaufen @ Herman Schmidt Verlag',
        'slide-book-store-link-amazon-de': 'Buch kaufen @ Amazon Deutschland',
        'imprint-title': 'Impressum'
    },
    en: {
        'title': 'Generative Design',
        'intro': 'Hello and welcome to Generative Design, Creative Coding on the Web. Here, you will find all of the sketches from the book and their associated code. Run the sketches directly in the browser with the p5.js-web-editor or locally on your machine by downloading the code package below.',
        'slide-book-store-link-herman-schmidt-verlag': 'Order now @ Herman Schmidt Verlag',
        'slide-book-store-link-amazon-de': 'Order now @ Amazon.de',
        'imprint-title': 'Imprint'
    }
};

// Add click listeners.
var langSwitcherElements = document.body.querySelectorAll('.js-set-lang');
for (var i = 0; i < langSwitcherElements.length; i++) {
    langSwitcherElements[i].addEventListener('click', setLocale);
}

setLocale();

function setLocale(e) {

    if (e && e.target) {
        currentLocale = e.target.getAttribute('data-lang');
    }

    // Default locale to 'en' if current locale does not match 'de'.
    currentLocale = currentLocale !== 'de' ? 'en' : 'de';

    // Set document language
    document.documentElement.lang = currentLocale;

    // Remove and set langSwitcherElements state.
    for (var i = 0; i < langSwitcherElements.length; i++) {
        if (langSwitcherElements[i].getAttribute('data-lang') === currentLocale) {
            langSwitcherElements[i].setAttribute('data-lang-current', '');
        } else {
            langSwitcherElements[i].removeAttribute('data-lang-current');
        }
    }

    // Set page title.
    document.title = textReplacements[currentLocale]['title'];

    // Replace innerHTML with new language.
    var i18nPlaceholderElements = document.body.querySelectorAll('[data-i18n]');
    for (var i = 0; i < i18nPlaceholderElements.length; i++) {
        var placeHolderLabel = i18nPlaceholderElements[i].getAttribute('data-i18n');
        i18nPlaceholderElements[i].innerHTML = textReplacements[currentLocale][placeHolderLabel];
    }

}
