(function () {
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-site-nav]');

  if (toggle && nav) {
    var closeNav = function (restoreFocus) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('site-nav--open');
      document.body.classList.remove('nav-open');
      if (restoreFocus) toggle.focus();
    };

    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('site-nav--open', !open);
      document.body.classList.toggle('nav-open', !open);
      if (!open) {
        var firstLink = nav.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });

    nav.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        closeNav(false);
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeNav(true);
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 820) closeNav(false);
    });
  }

  var header = document.querySelector('[data-site-header]');
  if (header) {
    var updateHeader = function () {
      header.classList.toggle('site-header--scrolled', window.scrollY > 12);
    };
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }
})();
