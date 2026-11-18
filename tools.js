// Style BFF free style tools: body shape calculator, style archetype quiz, outfit generator and Style Blueprint.
// Everything runs in the browser. The only storage is the visitor's own localStorage (key: sbff-blueprint).
(() => {
  const dataEl = document.getElementById('sbff-tools-data');
  if (!dataEl) return;
  const D = JSON.parse(dataEl.textContent);
  const KEY = 'sbff-blueprint';
  const track = (name, props = {}) => { try { window.plausible?.(name, { props }); } catch (e) {} };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } };
  const save = patch => { const next = { ...load(), ...patch }; try { localStorage.setItem(KEY, JSON.stringify(next)); } catch (e) {} renderJourney(); return next; };
  const $ = s => document.querySelector(s);
  const seasonName = slug => slug ? slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ') : '';
  const NEIGHBOR = { classic: 'minimalist', minimalist: 'classic', romantic: 'bohemian', relaxed: 'sporty', bold: 'edgy', sporty: 'relaxed', bohemian: 'romantic', edgy: 'bold' };

  // ---------- Journey progress (shown on every tool page) ----------
  function blueprintUrl(s = load()) {
    const p = new URLSearchParams();
    if (s.shape) p.set('shape', s.shape);
    if (s.season) p.set('season', s.season);
    if (s.archetype) p.set('arch', s.archetype);
    if (s.archetype2) p.set('arch2', s.archetype2);
    const q = p.toString();
    return '/tools/style-blueprint/' + (q ? '?' + q : '');
  }
  function renderJourney() {
    const el = $('[data-journey]');
    if (!el) return;
    const s = load();
    const steps = [
      ['shape', 'Body shape', '/tools/body-shape-calculator/', s.shape && D.shapes[s.shape]?.name],
      ['season', 'Color season', '/quiz/', s.season && seasonName(s.season)],
      ['archetype', 'Style archetype', '/tools/style-archetype-quiz/', s.archetype && D.archetypes[s.archetype]?.name],
      ['outfit', 'Outfits', '/tools/outfit-generator/', s.outfit && 'Generated']
    ];
    const done = steps.filter(x => x[3]).length;
    el.innerHTML = '<p class="journey-title">Your Style Blueprint · ' + done + ' of 4 steps</p><ol class="journey-steps">' +
      steps.map((x, i) => '<li class="' + (x[3] ? 'is-done' : '') + (location.pathname === x[2] ? ' is-here' : '') + '"><a href="' + x[2] + '"><span>' + (x[3] ? '✓' : i + 1) + '</span><b>' + x[1] + '</b><small>' + esc(x[3] || 'Not started') + '</small></a></li>').join('') +
      '</ol><a class="button journey-cta" href="' + blueprintUrl(s) + '">' + (done ? 'See my Style Blueprint' : 'Preview the Style Blueprint') + '</a>';
  }
  renderJourney();

  // ---------- Body shape calculator ----------
  const shapeForm = $('#shape-calc');
  if (shapeForm) shapeForm.addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(shapeForm);
    const b = parseFloat(f.get('bust')), w = parseFloat(f.get('waist')), h = parseFloat(f.get('hips'));
    const out = $('#shape-result');
    if (![b, w, h].every(n => n > 0 && n < 400)) { out.innerHTML = '<p class="tool-error">Enter all three measurements as positive numbers.</p>'; return; }
    const big = Math.max(b, h), diff = (b - h) / h, waistDef = 1 - w / big;
    let shape;
    if (w >= Math.min(b, h)) shape = 'apple';
    else if (Math.abs(diff) <= 0.05) shape = waistDef >= 0.25 ? 'hourglass' : 'rectangle';
    else shape = h > b ? 'pear' : 'inverted-triangle';
    const S = D.shapes[shape];
    save({ shape });
    track('Tool Complete', { tool: 'body-shape', result: shape });
    out.innerHTML = '<div class="tool-result"><p class="eyebrow">Your body shape</p><h2>' + esc(S.name) + '</h2><p>' + esc(S.summary) + ' <b>Goal:</b> ' + esc(S.goal) + '</p><ul>' + S.tips.map(t => '<li>' + esc(t) + '</li>').join('') +
      '</ul><p class="tool-ratio">Bust ' + b + ' · Waist ' + w + ' · Hips ' + h + ' (waist is ' + Math.round(waistDef * 100) + '% smaller than your widest point; bust and hips differ by ' + Math.abs(Math.round(diff * 100)) + '%)</p>' +
      '<div class="tool-actions"><a href="' + S.guide + '">How to dress a ' + esc(S.name.split(' ')[0].toLowerCase()) + ' shape</a><a class="button" href="/quiz/">Next: find your color season</a></div><p class="tool-saved">Saved to your Style Blueprint on this device.</p></div>';
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // ---------- Color season: save from result pages ----------
  const seasonEl = $('[data-season-save]');
  if (seasonEl) {
    const season = seasonEl.dataset.seasonSave;
    const fromQuiz = /\/quiz\/?$/.test((() => { try { return new URL(document.referrer).pathname; } catch (e) { return ''; } })());
    const paint = saved => { seasonEl.innerHTML = saved ? '<p class="tool-saved">' + esc(seasonName(season)) + ' is saved to your Style Blueprint.</p><a class="button" href="/tools/style-archetype-quiz/">Next: find your style archetype</a>' : '<button class="button" type="button">This is my season: add it to my Style Blueprint</button>'; };
    if (fromQuiz) { save({ season }); track('Tool Complete', { tool: 'color-season', result: season }); }
    paint(load().season === season);
    seasonEl.addEventListener('click', ev => { if (ev.target.closest('button')) { save({ season }); paint(true); } });
  }

  // ---------- Style archetype quiz ----------
  const archForm = $('#archetype-quiz');
  if (archForm) archForm.addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(archForm);
    const score = Object.fromEntries(Object.keys(D.archetypes).map(k => [k, 0]));
    let answered = 0;
    D.quiz.forEach(([id, , opts]) => { const v = f.get(id); if (v !== null) { answered++; opts[+v][1].forEach(a => score[a]++); } });
    if (answered < D.quiz.length) { archForm.querySelector('.tool-error').textContent = 'Answer all ' + D.quiz.length + ' questions to see your archetype (' + answered + ' done).'; return; }
    const ranked = Object.entries(score).sort((a, b) => b[1] - a[1]);
    const [first, second] = [ranked[0][0], ranked[1][1] > 0 ? ranked[1][0] : NEIGHBOR[ranked[0][0]]];
    save({ archetype: first, archetype2: second });
    track('Tool Complete', { tool: 'archetype', result: first });
    location.href = '/tools/style-archetype-quiz/' + first + '/?second=' + second + '&from=quiz';
  });
  const archResult = $('[data-archetype-result]');
  if (archResult) {
    const arch = archResult.dataset.archetypeResult;
    const p = new URLSearchParams(location.search);
    const second = p.get('second');
    const s = load();
    let html = '';
    if (p.get('from') === 'quiz' && D.archetypes[second]) html += '<p class="tool-saved">Your result: <b>' + esc(D.archetypes[arch].name) + '</b>, with a second side of <a href="/tools/style-archetype-quiz/' + second + '/">' + esc(D.archetypes[second].name) + '</a>. Saved to your Style Blueprint.</p>';
    else if (s.archetype !== arch) html += '<button class="button button-quiet" type="button" data-arch-save>This is me: add it to my Style Blueprint</button> ';
    html += '<a class="button" href="/tools/outfit-generator/">Next: generate outfits</a>';
    archResult.innerHTML = html;
    archResult.addEventListener('click', ev => { if (ev.target.closest('[data-arch-save]')) { save({ archetype: arch, archetype2: NEIGHBOR[arch] }); ev.target.outerHTML = '<span class="tool-saved">Saved.</span>'; } });
  }

  // ---------- Outfit generator ----------
  function colorPlan(season, i) {
    const S = D.seasons[season];
    if (!S) return '';
    const c1 = S.best[i % S.best.length], c2 = S.best[(i + 1) % S.best.length];
    return '<p class="tool-colors"><span class="swatch" style="background:' + c1[0] + '"></span><span class="swatch" style="background:' + c2[0] + '"></span><b>Colors:</b> ' + esc(c1[1]) + ' near your face, ' + esc(c2[1]) + ' as the accent. Base: ' + esc(S.neutrals.replace(/\.$/, '').toLowerCase()) + '.</p>';
  }
  function outfitCards({ occasion, weatherKey, arch, arch2, season, shape }) {
    const A = D.archetypes[arch] || D.archetypes.classic;
    const B = D.archetypes[arch2] || D.archetypes[NEIGHBOR[arch] || 'minimalist'];
    const M = D.archetypes[['minimalist', 'relaxed', 'classic'].find(k => k !== arch && k !== (arch2 || NEIGHBOR[arch]))];
    const S = D.seasons[season];
    const extras = [shape && D.shapes[shape] ? '<p><b>For your shape:</b> ' + esc(D.shapes[shape].rule) + '</p>' : '', weatherKey && D.weather[weatherKey] ? '<p><b>Weather:</b> ' + esc(D.weather[weatherKey]) + '</p>' : ''].join('');
    const cards = [
      ['Option 1 · ' + A.name, A.formulas[occasion], colorPlan(season, 0)],
      ['Option 2 · ' + B.name, B.formulas[occasion], colorPlan(season, 2)],
      ['Option 3 · One-color outfit', M.formulas[occasion] + (S ? ', all in shades of ' + S.best[4 % S.best.length][1].toLowerCase() : ''), S ? '<p class="tool-colors"><span class="swatch" style="background:' + S.best[4 % S.best.length][0] + '"></span>Head-to-toe in one color looks deliberate and lengthens you.</p>' : '']
    ];
    return cards.map(([t, f, c]) => '<article class="outfit-card"><p class="eyebrow">' + esc(t) + '</p><h3>' + esc(f) + '</h3>' + c + extras + '</article>').join('');
  }
  const outForm = $('#outfit-gen');
  if (outForm) {
    const s = load();
    const setIf = (name, v) => { if (v && outForm.elements[name]) outForm.elements[name].value = v; };
    setIf('archetype', s.archetype); setIf('season', s.season); setIf('shape', s.shape);
    outForm.addEventListener('submit', e => {
      e.preventDefault();
      const f = new FormData(outForm);
      const opts = { occasion: f.get('occasion'), weatherKey: f.get('weather'), arch: f.get('archetype') || load().archetype || 'classic', arch2: load().archetype2, season: f.get('season'), shape: f.get('shape') };
      const patch = { outfit: true };
      if (opts.season) patch.season = opts.season;
      if (opts.shape) patch.shape = opts.shape;
      if (f.get('archetype') && f.get('archetype') !== load().archetype) { patch.archetype = f.get('archetype'); patch.archetype2 = NEIGHBOR[f.get('archetype')]; opts.arch2 = patch.archetype2; }
      save(patch);
      track('Tool Complete', { tool: 'outfit-generator', occasion: opts.occasion });
      const out = $('#outfit-result');
      out.innerHTML = '<div class="outfit-grid">' + outfitCards(opts) + '</div><div class="tool-actions"><a class="button" href="' + blueprintUrl() + '">See my full Style Blueprint</a><a href="/download/">See these outfits on your own photo in the app</a></div>';
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // ---------- Style Blueprint ----------
  const bp = $('#blueprint');
  if (bp) {
    const p = new URLSearchParams(location.search);
    const fromLink = p.has('shape') || p.has('season') || p.has('arch');
    const st = fromLink ? { shape: p.get('shape'), season: p.get('season'), archetype: p.get('arch'), archetype2: p.get('arch2') } : load();
    const shape = D.shapes[st.shape], S = D.seasons[st.season], A = D.archetypes[st.archetype];
    const missing = [];
    if (!shape) missing.push(['Find your body shape', '/tools/body-shape-calculator/']);
    if (!S) missing.push(['Find your color season', '/quiz/']);
    if (!A) missing.push(['Find your style archetype', '/tools/style-archetype-quiz/']);
    let html = '';
    if (fromLink && JSON.stringify(load()) === '{}') html += '<p class="tool-saved">You are viewing a friend’s Style Blueprint. <a href="/tools/">Make your own in about five minutes</a>.</p>';
    html += '<div class="bp-chips">' +
      '<a class="bp-chip" href="' + (shape ? shape.guide : '/tools/body-shape-calculator/') + '"><small>Body shape</small><b>' + esc(shape ? shape.name : 'Not yet') + '</b></a>' +
      '<a class="bp-chip" href="' + (S ? '/quiz/result/' + st.season + '/' : '/quiz/') + '"><small>Color season</small><b>' + esc(S ? seasonName(st.season) : 'Not yet') + '</b></a>' +
      '<a class="bp-chip" href="' + (A ? '/tools/style-archetype-quiz/' + st.archetype + '/' : '/tools/style-archetype-quiz/') + '"><small>Style archetype</small><b>' + esc(A ? A.name : 'Not yet') + '</b></a></div>';
    if (missing.length) html += '<div class="bp-missing"><p>Complete your Blueprint:</p>' + missing.map(m => '<a class="button button-quiet" href="' + m[1] + '">' + m[0] + '</a>').join('') + '</div>';
    const rules = [shape && shape.rule, S && 'Wear your best colors near your face (' + S.best.slice(0, 3).map(c => c[1].toLowerCase()).join(', ') + ') and keep ' + S.neutrals.replace(/\.$/, '').toLowerCase() + ' as your base.', A && A.rule].filter(Boolean);
    if (rules.length) html += '<section class="bp-block"><h2>Your ' + (rules.length === 3 ? 'three' : rules.length === 2 ? 'two' : 'first') + ' style rule' + (rules.length > 1 ? 's' : '') + '</h2><ol class="bp-rules">' + rules.map(r => '<li>' + esc(r) + '</li>').join('') + '</ol></section>';
    if (S) html += '<section class="bp-block"><h2>Your palette</h2><div class="bp-swatches">' + S.best.map(c => '<figure><span style="background:' + c[0] + '"></span><figcaption>' + esc(c[1]) + '</figcaption></figure>').join('') + '</div><p><b>Neutrals:</b> ' + esc(S.neutrals) + '</p><p><b>Go easy on:</b> ' + esc(S.avoid) + '</p></section>';
    if (A) html += '<section class="bp-block"><h2>Your signature pieces</h2><p>' + esc(A.name) + ': ' + esc(A.words) + '.</p><ul class="bp-pieces">' + A.pieces.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul></section>' +
      '<section class="bp-block"><h2>Outfit formulas</h2><div class="outfit-grid">' + [['work', 'Work'], ['casual', 'Everyday'], [st.season && /autumn|winter/.test(st.season) ? 'festive' : 'wedding', 'Special occasion']].map(([o, label], i) => '<article class="outfit-card"><p class="eyebrow">' + label + '</p><h3>' + esc(A.formulas[o]) + '</h3>' + colorPlan(st.season, i * 2) + (shape ? '<p><b>For your shape:</b> ' + esc(shape.tips[i % shape.tips.length]) + '</p>' : '') + '</article>').join('') + '</div><p><a href="/tools/outfit-generator/">Generate outfits for another occasion</a></p></section>';
    html += '<div class="tool-actions bp-actions"><button class="button" type="button" data-share>Share my Blueprint</button><button class="button button-quiet" type="button" data-print>Print or save as PDF</button></div>' +
      '<aside class="bp-app"><h2>See your Blueprint on you</h2><p>Style BFF uses the same three ideas to build a daily outfit from the clothes you own and shows it on your own photo.</p><a class="button" href="/download/">Get Style BFF</a></aside><p class="bp-print-footer">Made free at stylebff.ai/tools</p>';
    bp.innerHTML = html;
    if (!fromLink) history.replaceState(null, '', blueprintUrl(st));
    track('Blueprint View', { complete: String(!missing.length), shared: String(fromLink) });
    bp.addEventListener('click', async ev => {
      if (ev.target.closest('[data-print]')) { track('Blueprint Print'); window.print(); }
      if (ev.target.closest('[data-share]')) {
        const url = location.origin + blueprintUrl(st), text = 'My Style Blueprint: ' + [shape?.name, S && seasonName(st.season), A?.name].filter(Boolean).join(' · ');
        track('Blueprint Share');
        try { if (navigator.share) { await navigator.share({ title: 'My Style Blueprint', text, url }); return; } } catch (e) { return; }
        try { await navigator.clipboard.writeText(url); ev.target.textContent = 'Link copied'; } catch (e) { prompt('Copy your Blueprint link', url); }
      }
    });
  }

  // ---------- Quiz stepper: one question at a time, with progress (forms marked data-stepper) ----------
  document.querySelectorAll('form[data-stepper]').forEach(form => {
    const sets = [...form.querySelectorAll('fieldset')];
    if (sets.length < 2) return;
    form.classList.add('is-stepper');
    const head = document.createElement('div');
    head.className = 'tl-qhead';
    head.innerHTML = '<div class="tl-qmeta"><span data-q-count></span><span data-q-pct></span></div><div class="tl-qbar"><i></i></div>';
    const label = form.querySelector('.tl-quiz-label');
    if (label) label.after(head); else form.prepend(head);
    const nav = document.createElement('div');
    nav.className = 'tl-qnav';
    nav.innerHTML = '<button type="button" class="tl-qbtn" data-q-back>← Back</button><button type="button" class="tl-qbtn tl-qnext" data-q-next>Next →</button>';
    const actions = form.querySelector('.tl-quiz-actions');
    actions.before(nav);
    const submit = actions.querySelector('[type=submit]');
    let i = 0, viaKeys = false;
    const answered = () => sets.filter(s => s.querySelector('input:checked')).length;
    const show = n => {
      i = Math.max(0, Math.min(n, sets.length - 1));
      sets.forEach((s, k) => { s.hidden = k !== i; });
      const pct = Math.round(answered() / sets.length * 100);
      head.querySelector('[data-q-count]').textContent = 'Question ' + (i + 1) + ' of ' + sets.length;
      head.querySelector('[data-q-pct]').textContent = pct + '%';
      head.querySelector('i').style.width = pct + '%';
      nav.querySelector('[data-q-back]').disabled = i === 0;
      const last = i === sets.length - 1;
      nav.querySelector('[data-q-next]').hidden = last;
      nav.querySelector('[data-q-next]').disabled = !sets[i].querySelector('input:checked');
      actions.hidden = !(last && answered() === sets.length);
    };
    const finish = () => { actions.hidden = false; if (form.requestSubmit) form.requestSubmit(); else submit.click(); };
    const advance = () => { if (!sets[i].querySelector('input:checked')) return; if (i < sets.length - 1) { show(i + 1); sets[i].querySelector('input')?.focus({ preventScroll: true }); } else if (answered() === sets.length) finish(); };
    form.addEventListener('keydown', e => { if (/^Arrow/.test(e.key)) viaKeys = true; if (e.key === 'Enter' && e.target.matches('input[type=radio]')) { e.preventDefault(); advance(); } });
    form.addEventListener('change', e => {
      if (!e.target.matches('input[type=radio]')) return;
      show(i);
      if (viaKeys) { viaKeys = false; return; }
      setTimeout(advance, 220);
    });
    nav.addEventListener('click', e => { if (e.target.closest('[data-q-back]')) show(i - 1); if (e.target.closest('[data-q-next]')) advance(); });
    form.addEventListener('reset', () => setTimeout(() => show(0)));
    show(0);
  });

  // ---------- Archetype quiz (12 archetypes) ----------
  const a12 = $('#arch12-quiz');
  if (a12 && D.arch12) {
    const out = $('#arch12-result');
    const nameOnly = n => n.replace(/^The /, '');
    const render = (key, scores) => {
      const A = D.arch12[key];
      const style = D.archetypes[A.style];
      const top = scores ? Math.max(...Object.values(scores)) : 0;
      const also = scores ? Object.entries(scores).filter(([k, v]) => k !== key && v >= top - 1 && v >= 4).sort((x, y) => y[1] - x[1]).slice(0, 2).map(([k]) => D.arch12[k].name.replace(/^The /, 'the ')) : [];
      out.innerHTML = '<div class="tl-result" id="your-archetype"><p class="tl-result-kicker">' + (scores ? 'Your archetype' : 'Shared result') + '</p><h2>' + esc(A.name) + '</h2>' +
        '<p class="tl-result-desire"><b>Core desire:</b> ' + esc(A.desire) + '</p>' +
        (also.length ? '<p class="tl-result-also">You also scored highly as ' + esc(also.join(' and ')) + '.</p>' : '') +
        '<h3>How ' + esc(A.name.replace(/^The /, 'the ')) + ' dresses</h3><p>' + esc(A.dress) + '</p><ul class="tl-pieces">' + A.pieces.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul>' +
        '<p class="tl-result-style">Your style match: <a href="/tools/style-archetype-quiz/' + A.style + '/"><b>' + esc(nameOnly(style.name)) + '</b></a>, ' + esc(style.words) + '.</p>' +
        '<div class="tl-result-actions"><a class="button" href="/tools/style-archetype-quiz/' + A.style + '/">See ' + esc(nameOnly(style.name)) + ' outfits</a><button class="button button-quiet" type="button" data-a12-save>Add ' + esc(nameOnly(style.name)) + ' to my Style Blueprint</button><button class="tl-link" type="button" data-a12-retake>Retake the quiz</button></div>' +
        '<p class="tl-result-note">The style match is Style BFF’s editorial suggestion. This is a reflection tool, not a validated personality test.</p></div>';
      out.querySelector('[data-a12-save]').addEventListener('click', ev => { save({ archetype: A.style, archetype2: NEIGHBOR[A.style], jung: key }); ev.target.outerHTML = '<span class="tool-saved">Saved to your Style Blueprint.</span>'; });
      out.querySelector('[data-a12-retake]').addEventListener('click', () => { a12.reset(); a12.hidden = false; out.innerHTML = ''; history.replaceState(null, '', location.pathname); a12.scrollIntoView({ behavior: 'smooth', block: 'center' }); });
    };
    a12.addEventListener('submit', e => {
      e.preventDefault();
      const f = new FormData(a12);
      const scores = {};
      let n = 0;
      D.statements.forEach(([k]) => { const v = f.get('a-' + k); if (v !== null) { n++; scores[k] = +v; } });
      if (n < D.statements.length) { a12.querySelector('.tool-error').textContent = 'Answer all ' + D.statements.length + ' statements to see your archetype (' + n + ' done).'; return; }
      const order = D.statements.map(([k]) => k);
      const best = order.reduce((b, k) => (scores[k] > scores[b] ? k : b), order[0]);
      a12.hidden = true;
      render(best, scores);
      history.replaceState(null, '', location.pathname + '?result=' + best);
      track('Tool Complete', { tool: 'archetype-12', result: best });
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    const shared = new URLSearchParams(location.search).get('result');
    if (shared && D.arch12[shared]) { a12.hidden = true; render(shared, null); }
  }

  // ---------- Tools hub search ----------
  const search = $('[data-tool-search]');
  if (search) {
    const tiles = [...document.querySelectorAll('.tl-hub .tl-grid .tl-tile')];
    const empty = $('.tl-empty');
    const run = () => {
      const q = search.q.value.trim().toLowerCase();
      let shown = 0;
      tiles.forEach(t => { const hit = !q || q.split(/\s+/).every(w => t.dataset.keywords.includes(w)); t.hidden = !hit; if (hit) shown++; });
      if (empty) empty.hidden = shown > 0;
    };
    search.addEventListener('input', run);
    search.addEventListener('submit', e => { e.preventDefault(); run(); const first = tiles.find(t => !t.hidden); if (first && search.q.value.trim()) first.focus(); });
  }
})();
