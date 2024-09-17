var currentLocale = navigator.browserLanguage || navigator.language;

// List of strings to replace for each locale. For expanding the localisation,
// add the attribute data-i18n="example" to the relevant HTML tag and add  a
// key 'example' with a value to each locale that needs to be localised below.
var textReplacements = {
    'de-DE': {
        'title': 'Generative Gestaltung',
        'intro': 'Diese Website ergänzt das Buch »Generative Gestaltung, Creative Coding im Web« (erschienen im Verlag Hermann Schmidt, 2018) und bietet direkten Zugriff auf alle Quellcodes der im Buch beschriebenen Programme.',
        'p-1-color': 'P.1. Farbe',
        'p-2-shape': 'P.2. Form',
        'p-3-type': 'P.3. Typo',
        'p-4-image': 'P.4. Bild',
        'm-1-random-and-noise': 'M.1. Zufall und Rauschen',
        'm-2-oscillation-figures': 'M.2. Schwingungsfiguren',
        'm-5-data-trees': 'M.5. Baumdiagramme',
        'm-6-dynamic-data-structure': 'M.6. Dynamische Datenstrukturen',
        'imprint-title': 'Impressum',
        'download-toc' : 'Inhaltsverzeichnis',
        'slide-1': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/GG_Preview_180-181.png" alt="GG_Preview_180-181">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://typografie.de/produkt/generative-gestaltung-creative-coding-im-web/" target="_blank">Buch kaufen<br>@ Herman Schmidt Verlag</a>\
            </div>'
        ),
        'slide-2': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/GG_Preview_40-41.png" alt="GG_Preview_40-41">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://amzn.to/3XN6AOk" target="_blank">Buch kaufen<br>@ Amazon Deutschland</a>\
            </div>'
        ),
        'slide-3': (
            '<div class="slide__inner">\
                <div class="slide__background" style="background-image:url(img/header/9783874399029_Generative-Gestaltung_Creative-Coding-im-Web10.jpg)"></div>\
                <a class="slide__link" href="https://typografie.de/produkt/generative-gestaltung-creative-coding-im-web/" target="_blank">Buch kaufen<br>@ Herman Schmidt Verlag</a>\
            </div>'
        ),
        'slide-4': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/GG_Preview_186-187.png" alt="GG_Preview_186-187">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://amzn.to/3XN6AOk" target="_blank">Buch kaufen<br>@ Amazon Deutschland</a>\
            </div>'
        ),
        'slide-5': (
            '<div class="slide__inner">\
                <div class="slide__background" style="background-image:url(img/header/9783874399029_Generative-Gestaltung_Creative-Coding-im-Web6.jpg)"></div>\
                <a class="slide__link" href="https://typografie.de/produkt/generative-gestaltung-creative-coding-im-web/" target="_blank">Buch kaufen<br>@ Herman Schmidt Verlag</a>\
            </div>'
        ),
        'slide-6': (
            '<div class="slide__inner">\
                <div class="slide__background" style="background-image:url(img/header/9783874399029_Generative-Gestaltung_Creative-Coding-im-Web5.jpg)"></div>\
                <a class="slide__link" href="https://amzn.to/3XN6AOk" target="_blank">Buch kaufen<br>@ Amazon Deutschland</a>\
            </div>'
        ),
        'slide-7': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/GG_Preview_26-27.png" alt="GG_Preview_26-27">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://typografie.de/produkt/generative-gestaltung-creative-coding-im-web/" target="_blank">Buch kaufen<br>@ Herman Schmidt Verlag</a>\
            </div>'
        ),
        'slide-8': (
            '<div class="slide__inner">\
                <div class="slide__background" style="background-image:url(img/header/9783874399029_Generative-Gestaltung_Creative-Coding-im-Web3.jpg)"></div>\
                <a class="slide__link" href="https://amzn.to/3XN6AOk" target="_blank">Buch kaufen<br>@ Amazon Deutschland</a>\
            </div>'
        ),
        'slide-9': (
            '<div class="slide__inner">\
                <div class="slide__background" style="background-image:url(img/header/9783874399029_Generative-Gestaltung_Creative-Coding-im-Web7.jpg)"></div>\
                <a class="slide__link" href="https://typografie.de/produkt/generative-gestaltung-creative-coding-im-web/" target="_blank">Buch kaufen<br>@ Herman Schmidt Verlag</a>\
            </div>'
        ),
        'slide-10': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/GG_Preview_148-149.png" alt="GG_Preview_148-149">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://amzn.to/3XN6AOk" target="_blank">Buch kaufen<br>@ Amazon Deutschland</a>\
            </div>'
        ),
        'slide-11': (
            '<div class="slide__inner">\
                <div class="slide__background" style="background-image:url(img/header/9783874399029_Generative-Gestaltung_Creative-Coding-im-Web9.jpg)"></div>\
                <a class="slide__link" href="https://typografie.de/produkt/generative-gestaltung-creative-coding-im-web/" target="_blank">Buch kaufen<br>@ Herman Schmidt Verlag</a>\
            </div>'
        ),
        'slide-12': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/GG_Preview_222-223.png" alt="GG_Preview_222-223">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://amzn.to/3XN6AOk" target="_blank">Buch kaufen<br>@ Amazon Deutschland</a>\
            </div>'
        )
    },
    'en-US': {
        'title': 'Generative Design',
        'intro': 'Hello and welcome to Generative Design, Creative Coding on the Web. Here, you will find all of the sketches from the book and their associated code. Run the sketches directly in the browser with the p5.js-web-editor or locally on your machine by downloading the code package below.',
        'p-1-color': 'P.1. Color',
        'p-2-shape': 'P.2. Shape',
        'p-3-type': 'P.3. Type',
        'p-4-image': 'P.4. Image',
        'm-1-random-and-noise': 'M.1. Random and noise',
        'm-2-oscillation-figures': 'M.2. Oscillation figures',
        'm-5-data-trees': 'M.5. Data trees',
        'm-6-dynamic-data-structure': 'M.6. Dynamic data structure',
        'imprint-title': 'Imprint',
        'download-toc' : 'Table of Contents',
        'slide-1': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/en/180-181.jpg">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://www.amazon.com/gp/product/1616897589/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1616897589&tag=generativeges-20&linkId=52b74a301a52c167f29d53e38485d0da" target="_blank">Order now<br>@ Amazon.com</a>\
            </div>'
        ),
        'slide-2': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/en/40-41.jpg">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://www.amazon.com/gp/product/1616897589/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1616897589&tag=generativeges-20&linkId=52b74a301a52c167f29d53e38485d0da" target="_blank">Order now<br>@ Amazon.com</a>\
            </div>'
        ),
        'slide-3': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/en/240-241.jpg">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://www.amazon.com/gp/product/1616897589/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1616897589&tag=generativeges-20&linkId=52b74a301a52c167f29d53e38485d0da" target="_blank">Order now<br>@ Amazon.com</a>\
            </div>'
        ),
        'slide-4': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/en/186-187.jpg">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://www.amazon.com/gp/product/1616897589/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1616897589&tag=generativeges-20&linkId=52b74a301a52c167f29d53e38485d0da" target="_blank">Order now<br>@ Amazon.com</a>\
            </div>'
        ),
        'slide-5': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/en/178-179.jpg">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://www.amazon.com/gp/product/1616897589/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1616897589&tag=generativeges-20&linkId=52b74a301a52c167f29d53e38485d0da" target="_blank">Order now<br>@ Amazon.com</a>\
            </div>'
        ),
        'slide-6': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/en/144-145.jpg">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://www.amazon.com/gp/product/1616897589/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1616897589&tag=generativeges-20&linkId=52b74a301a52c167f29d53e38485d0da" target="_blank">Order now<br>@ Amazon.com</a>\
            </div>'
        ),
        'slide-7': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/en/26-27.jpg">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://www.amazon.com/gp/product/1616897589/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1616897589&tag=generativeges-20&linkId=52b74a301a52c167f29d53e38485d0da" target="_blank">Order now<br>@ Amazon.com</a>\
            </div>'
        ),
        'slide-8': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/en/86-87.jpg">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://www.amazon.com/gp/product/1616897589/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1616897589&tag=generativeges-20&linkId=52b74a301a52c167f29d53e38485d0da" target="_blank">Order now<br>@ Amazon.com</a>\
            </div>'
        ),
        'slide-9': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/en/184-185.jpg">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://www.amazon.com/gp/product/1616897589/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1616897589&tag=generativeges-20&linkId=52b74a301a52c167f29d53e38485d0da" target="_blank">Order now<br>@ Amazon.com</a>\
            </div>'
        ),
        'slide-10': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/en/148-149.jpg">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://www.amazon.com/gp/product/1616897589/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1616897589&tag=generativeges-20&linkId=52b74a301a52c167f29d53e38485d0da" target="_blank">Order now<br>@ Amazon.com</a>\
            </div>'
        ),
        'slide-11': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/en/206-207.jpg">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://www.amazon.com/gp/product/1616897589/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1616897589&tag=generativeges-20&linkId=52b74a301a52c167f29d53e38485d0da" target="_blank">Order now<br>@ Amazon.com</a>\
            </div>'
        ),
        'slide-12': (
            '<div class="slide__inner">\
                <div class="slide__background">\
                    <div class="slide__book-img">\
                        <img src="img/header/en/222-223.jpg">\
                    </div>\
                </div>\
                <a class="slide__link" href="https://www.amazon.com/gp/product/1616897589/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1616897589&tag=generativeges-20&linkId=52b74a301a52c167f29d53e38485d0da" target="_blank">Order now<br>@ Amazon.com</a>\
            </div>'
        )
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

    // Default locale to 'en-US' if current locale does not match a German or Japanese language locale.
    if (['de', 'de-DE', 'de-AT', 'de-CH', 'de-LU', 'de-LI', 'de-BE'].indexOf(currentLocale) !== -1) {
        currentLocale = 'de-DE'
    } else if (['jp', 'ja-JP'].indexOf(currentLocale) !== -1) {
        window.location = 'http://www.bnn.co.jp/support/generativedesign_p5js/';
        return false;
    } else {
        currentLocale = 'en-US';
    }

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
