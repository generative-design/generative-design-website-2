var currentLocale = navigator.browserLanguage || navigator.language;

// List of strings to replace for each locale. For expanding the localisation,
// add the attribute data-i18n="example" to the relevant HTML tag and add  a
// key 'example' with a value to each locale that needs to be localised below.
var textReplacements = {
    de: {
        'title': 'Generative Gestaltung',
        'intro': 'Diese Website ergänzt das Buch »Generative Gestaltung, Creative Coding im Web« (erschienen im Verlag Hermann Schmidt, 2018) und bietet direkten Zugriff auf alle Quellcodes der im Buch beschriebenen Programme.',
        'slide-book-store-link-herman-schmidt-verlag': 'Buch kaufen<br>@ Herman Schmidt Verlag',
        'slide-book-store-link-amazon-de': 'Buch kaufen<br>@ Amazon Deutschland',
        'p-1-color': 'P.1. Farbe',
        'p-2-shape': 'P.2. Form',
        'p-3-type': 'P.3. Typo',
        'p-4-image': 'P.4. Bild',
        'm-1-random-and-noise': 'M.1. Zufall und Rauschen',
        'm-2-oscillation-figures': 'M.2. Schwingungsfiguren',
        'm-5-data-trees': 'M.5. Baumdiagramme',
        'm-6-dynamic-data-structure': 'M.6. Dynamische Datenstrukturen',
        'imprint-title': 'Impressum'
    },
    en: {
        'title': 'Generative Design',
        'intro': '<aside>Generative Design: Visualize, Program, and Create with JavaScript in p5.js. Will be available in October 2018 from Princeton Architectural Press!</aside>Hello and welcome to Generative Design, Creative Coding on the Web. Here, you will find all of the sketches from the book and their associated code. Run the sketches directly in the browser with the p5.js-web-editor or locally on your machine by downloading the code package below.',
        'slide-book-store-link-herman-schmidt-verlag': 'Order now<br>@ Herman Schmidt Verlag',
        'slide-book-store-link-amazon-de': 'Order now<br>@ Amazon.de',
        'p-1-color': 'P.1. Color',
        'p-2-shape': 'P.2. Shape',
        'p-3-type': 'P.3. Type',
        'p-4-image': 'P.4. Image',
        'm-1-random-and-noise': 'M.1. Random and noice',
        'm-2-oscillation-figures': 'M.2. Oscillation figures',
        'm-5-data-trees': 'M.5. Data trees',
        'm-6-dynamic-data-structure': 'M.6. Dynamic data structure',
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
