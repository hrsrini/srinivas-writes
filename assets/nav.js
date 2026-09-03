(function () {
  var SECTIONS = ['india', 'ai', 'insurance', 'startups', 'leadership'];

  function getRootPath() {
    var path = window.location.pathname.replace(/\\/g, '/');
    for (var i = 0; i < SECTIONS.length; i++) {
      if (new RegExp('/' + SECTIONS[i] + '(/|$)').test(path)) {
        return '../';
      }
    }
    return '';
  }

  function getActiveSection() {
    var path = window.location.pathname.replace(/\\/g, '/');
    for (var i = 0; i < SECTIONS.length; i++) {
      if (new RegExp('/' + SECTIONS[i] + '(/|$)').test(path)) {
        return SECTIONS[i];
      }
    }
    if (/\/about(\.html)?/.test(path)) return 'about';
    return '';
  }

  var root = getRootPath();
  var active = getActiveSection();

  var links = [
    { key: 'india',      label: 'India',      href: root + 'india/index.html' },
    { key: 'ai',         label: 'AI',         href: root + 'ai/index.html' },
    { key: 'insurance',  label: 'Insurance',  href: root + 'insurance/index.html' },
    { key: 'startups',   label: 'Startups',   href: root + 'startups/index.html' },
    { key: 'leadership', label: 'Leadership', href: root + 'leadership/index.html' },
    { key: 'about',      label: 'About',      href: root + 'about.html' },
  ];

  var liItems = links.map(function (l) {
    var cls = active === l.key ? ' class="active"' : '';
    return '<li><a href="' + l.href + '"' + cls + '>' + l.label + '</a></li>';
  }).join('');

  var navHTML = [
    '<nav class="site-nav">',
    '  <div class="nav-inner">',
    '    <a href="' + root + 'index.html" class="nav-brand">HR Srinivas</a>',
    '    <button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">',
    '      <span></span><span></span><span></span>',
    '    </button>',
    '    <ul class="nav-links">' + liItems + '</ul>',
    '  </div>',
    '</nav>',
  ].join('');

  document.body.insertAdjacentHTML('afterbegin', navHTML);

  var hamburger = document.querySelector('.nav-hamburger');
  var navLinks  = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function () {
    var isOpen = navLinks.classList.contains('open');
    navLinks.classList.toggle('open');
    this.setAttribute('aria-expanded', String(!isOpen));
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.site-nav') && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
})();
