var sketchPath = document.location.search.replace(/\?/, '');
var sketchName = sketchPath.replace(/^.+\//, '');

if (!sketchPath) {
    // TODO show warning if no valid sketch is found, go back to home.
    console.log('no sketch found');
} else {
    var sketchNameHeaderElement = document.querySelector('.js-sketch-name');
    sketchNameHeaderElement.innerText = sketchName;

    var editorLink = document.querySelector('.js-editor-link');
    editorLink.setAttribute('href', 'https://editor.p5js.org/generative-design/sketches/' + sketchName);

    var sourceLink = document.querySelector('.js-source-link');
    sourceLink.setAttribute('href', 'https://github.com/generative-design/Code-Package-p5.js/blob/master/' + sketchPath + '/sketch.js');

    // Create embedded sketch
    var iframeElement = document.createElement('iframe');
    iframeElement.setAttribute('src', sketchPath);
    iframeElement.setAttribute('frameborder', 0);
    document.body.appendChild(iframeElement);
}
