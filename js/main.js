/* ============================================================
   Cassandra's — interaction layer
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- nav scroll state --- */
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* --- mobile menu --- */
  const burger = document.querySelector('.burger');
  const links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open')));
  }

  /* --- scroll reveals --- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = (i % 4 * 0.08) + 's';
    io.observe(el);
  });

  /* --- animated counters --- */
  const counters = document.querySelectorAll('[data-count]');
  const cObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const dur = 1600; const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const val = target % 1 === 0 ? Math.floor(eased * target) : (eased * target).toFixed(1);
        el.textContent = val + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      cObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => cObs.observe(c));

  /* --- before / after slider --- */
  document.querySelectorAll('.ba-slider').forEach(slider => {
    const before = slider.querySelector('.ba-before');
    const handle = slider.querySelector('.ba-handle');
    let dragging = false;
    const setPos = (clientX) => {
      const r = slider.getBoundingClientRect();
      let pct = ((clientX - r.left) / r.width) * 100;
      pct = Math.max(2, Math.min(98, pct));
      before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      handle.style.left = pct + '%';
    };
    const down = () => dragging = true;
    const up = () => dragging = false;
    const move = (x) => { if (dragging) setPos(x); };
    slider.addEventListener('mousedown', e => { down(); setPos(e.clientX); });
    window.addEventListener('mouseup', up);
    window.addEventListener('mousemove', e => move(e.clientX));
    slider.addEventListener('touchstart', e => { down(); setPos(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchend', up);
    window.addEventListener('touchmove', e => { if (dragging) move(e.touches[0].clientX); }, { passive: true });
  });

  /* --- FAQ accordion --- */
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const ans = item.querySelector('.faq-a');
      const open = item.classList.contains('open');
      item.classList.toggle('open');
      ans.style.maxHeight = open ? null : ans.scrollHeight + 'px';
    });
  });

  /* --- gallery filter --- */
  const filters = document.querySelectorAll('.gal-filter');
  const items = document.querySelectorAll('.gal-item');
  filters.forEach(f => {
    f.addEventListener('click', () => {
      filters.forEach(x => x.classList.remove('active'));
      f.classList.add('active');
      const cat = f.dataset.filter;
      items.forEach(it => {
        const show = cat === 'all' || it.dataset.cat === cat;
        it.style.display = show ? '' : 'none';
      });
    });
  });

  /* --- form handling (front-end only; connect to a backend at launch) --- */
  document.querySelectorAll('[data-quote-form]').forEach(form => {
    form.querySelectorAll('button[type="submit"], .js-submit').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const wrap = form.querySelector('[data-form-msg]') || form;
        btn.textContent = 'Request received ✓';
        btn.style.opacity = '.7';
        btn.disabled = true;
        const note = document.createElement('p');
        note.className = 'form-note';
        note.textContent = "Thank you. A member of our team will reach out within one business day.";
        wrap.appendChild(note);
      });
    });
  });

});
