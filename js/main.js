/* SAHNE ZUM TEE? — DAS KIEZ QUIZ · Interaktion & Animation */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Nav: Schatten beim Scrollen + Burger ---------- */
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScrollNav = function () {
      nav.classList.toggle('scrolled', window.scrollY > 8);
    };
    window.addEventListener('scroll', onScrollNav, { passive: true });
    onScrollNav();
  }
  var burger = document.querySelector('.nav-burger');
  if (burger) {
    burger.addEventListener('click', function () {
      document.querySelector('.nav-links').classList.toggle('open');
    });
  }

  /* ---------- Scroll-Reveals ---------- */
  var revealEls = document.querySelectorAll('.rv, .rv-pop, .rv-left, .rv-right');
  if (document.hidden) {
    /* Hintergrund-Tab: Chrome feuert keine IntersectionObserver — alles sofort zeigen */
    revealEls.forEach(function (el) { el.classList.add('on'); });
  } else if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('on');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('on'); });
  }

  /* ---------- Parallax (Hero-Ebenen: data-depth) ---------- */
  var layers = document.querySelectorAll('[data-depth]');
  if (layers.length && !reduceMotion) {
    var mx = 0, my = 0, sy = 0, raf = null;

    var apply = function () {
      raf = null;
      layers.forEach(function (el) {
        var d = parseFloat(el.dataset.depth) || 0;
        var x = mx * d * 30;
        var y = sy * d + my * d * 18;
        el.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
      });
    };
    var queue = function () { if (!raf) raf = requestAnimationFrame(apply); };

    window.addEventListener('scroll', function () {
      sy = window.scrollY * -0.4;
      queue();
    }, { passive: true });

    window.addEventListener('mousemove', function (e) {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
      queue();
    }, { passive: true });
  }

  /* ---------- Filter-Pills (visuelle Auswahl) ---------- */
  document.querySelectorAll('.pill-group').forEach(function (group) {
    group.addEventListener('click', function (e) {
      var pill = e.target.closest('.pill');
      if (!pill) return;
      group.querySelectorAll('.pill').forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
      var filter = pill.dataset.filter;
      var targets = document.querySelectorAll('[data-tags]');
      targets.forEach(function (t) {
        var show = !filter || filter === 'alle' || t.dataset.tags.split(' ').indexOf(filter) !== -1;
        t.style.transition = 'opacity .35s, transform .35s';
        t.style.opacity = show ? '' : '.15';
        t.style.transform = show ? '' : 'scale(.92)';
        t.style.pointerEvents = show ? '' : 'none';
      });
    });
  });

  /* ---------- Chat-Widget (Cali) — Stub für spätere Anbindung ---------- */
  var chatBtn = document.querySelector('.kiez-chat-btn');
  var chatPanel = document.querySelector('.kiez-chat-panel');
  if (chatBtn && chatPanel) {
    chatBtn.addEventListener('click', function () {
      chatPanel.classList.toggle('open');
      chatBtn.setAttribute('aria-expanded', chatPanel.classList.contains('open'));
    });
    document.addEventListener('click', function (e) {
      if (!chatPanel.contains(e.target) && !chatBtn.contains(e.target)) {
        chatPanel.classList.remove('open');
      }
    });
  }

  /* Öffentlicher Hook: hier später den echten Chatbot einhängen. */
  window.KiezChat = {
    open: function () { chatPanel && chatPanel.classList.add('open'); },
    close: function () { chatPanel && chatPanel.classList.remove('open'); },
    /* sendMessage(text) -> Promise<string> — Platzhalter */
    sendMessage: null
  };
})();
