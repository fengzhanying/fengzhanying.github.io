// Both languages are rendered by Jekyll and remain usable without JavaScript.
// Carry the current section to the other language's shareable URL.
(function () {
  'use strict';
  var legacyAnchors = {
    '-news': 'news', '-publications': 'publications',
    '-honors-and-awards': 'awards', '-educations': 'education',
    '-employments': 'experience', '-invited-talks': 'talks',
    '-Software': 'software', '-softwares': 'software'
  };
  var hash = window.location.hash.slice(1);
  if (legacyAnchors[hash]) {
    window.location.replace('#' + legacyAnchors[hash]);
  }
  function updateLinks() {
    document.querySelectorAll('[data-language-link]').forEach(function (link) {
      var url = new URL(link.href);
      url.hash = window.location.hash;
      link.href = url.href;
    });
  }
  updateLinks();
  window.addEventListener('hashchange', updateLinks);
}());
