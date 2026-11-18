// "Style tracking" journey for /how-it-works/: the three app steps told as an order-tracking
// timeline (order placed -> packed -> shipped -> out for delivery -> delivered), from
// "nothing to wear" to a confident you. Final state renders without JavaScript; site.js only
// replays it as an animation when it scrolls into view (and skips that for reduced motion).
const icon = d => '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
const CHECK = '<svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true"><path d="M4.5 10.5 8.3 14 15.5 6.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICONS = {
  clueless: icon('<circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1.1.8-1.1 1.5v.5"/><path d="M12 16.9h.01"/>'),
  profile: icon('<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M8.5 7 10 4.5h4L15.5 7"/><circle cx="12" cy="13.5" r="3.4"/>'),
  closet: icon('<path d="M10 6a2 2 0 1 1 2.8 1.8c-.5.3-.8.7-.8 1.3V10"/><path d="m12 10-8.6 6.3c-.8.6-.4 1.7.6 1.7h16c1 0 1.4-1.1.6-1.7z"/>'),
  outfit: icon('<path d="M12 3.5 13.9 8l4.6 1.8-4.6 1.9L12 16.2l-1.9-4.5L5.5 9.8 10.1 8z"/><path d="m18.5 15 .8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z"/>'),
  confident: icon('<path d="m12 3.2 2.6 5.4 5.9.9-4.3 4.1 1 5.9L12 16.7l-5.2 2.8 1-5.9-4.3-4.1 5.9-.9z"/>')
};

const STEPS = [
  { key: 'clueless', status: 'Order placed', title: 'Nothing to wear', text: 'A full closet, a real day ahead and no clear idea what to put on.', details: [] },
  { key: 'profile', status: 'Packed', title: 'Your Style Profile', text: 'Your BFF learns what suits you.', details: ['Take one clear selfie in natural light.', 'Answer a few questions about your preferences and everyday life.', 'Get your color season, proportion guidance and personal style direction.'] },
  { key: 'closet', status: 'Shipped', title: 'Your real wardrobe', text: 'The clothes you already own come along.', details: ['Add individual pieces or scan selected gallery photos.', 'Organize clothes into a visual closet.', 'Create smaller capsules for a trip, season or workweek.'] },
  { key: 'outfit', status: 'Out for delivery', title: 'Today’s outfit', text: 'Tell your BFF what the day looks like.', details: ['Choose work, everyday, travel, a date or another occasion.', 'See a complete look on your own photo.'] },
  { key: 'confident', status: 'Delivered', title: 'The confident you', text: 'Dressed, sure of it and out the door.', details: ['Restyle, save or share the look.', 'Fill a genuine wardrobe gap only when it earns its place.'] }
];

export function styleTrackHtml() {
  const steps = STEPS.map((s, i) => '<li class="st-step st-' + s.key + '" style="--i:' + i + '">'
    + '<span class="st-node">' + ICONS[s.key] + '</span>'
    + '<div class="st-copy"><p class="st-status">' + CHECK + '<span>' + s.status + '</span></p><h3>' + s.title + '</h3><p class="st-text">' + s.text + '</p>'
    + (s.details.length ? '<ul class="st-details">' + s.details.map(d => '<li>' + d + '</li>').join('') + '</ul>' : '')
    + (i === STEPS.length - 1 ? '<span class="st-confetti" aria-hidden="true">' + '<i></i>'.repeat(10) + '</span>' : '')
    + '</div></li>').join('');
  return '<section class="st" data-style-track aria-labelledby="st-title"><div class="st-card">'
    + '<header class="st-head"><div><p class="st-kicker"><span class="st-live" aria-hidden="true"></span>Style tracking</p><h2 id="st-title">From clueless to confident, tracked</h2></div>'
    + '<dl class="st-meta"><div><dt>Tracking ID</dt><dd class="st-mono">BFF-YOU-0001</dd></div><div><dt>Delivery window</dt><dd>Before you leave the house</dd></div><div><dt>Status</dt><dd><span class="st-pill"><span class="st-pill-way">On the way</span><span class="st-pill-done">' + CHECK + 'Delivered</span></span></dd></div></dl></header>'
    + '<div class="st-body"><span class="st-rider" aria-hidden="true"><img src="/assets/mascot-small.webp" alt="" width="30" height="30" loading="lazy" decoding="async"></span><ol class="st-steps">' + steps + '</ol></div>'
    + '<footer class="st-foot"><p class="st-sign"><span>Signed for by</span><b>You</b></p><p class="st-box"><b>In the box:</b> your colors, your proportions, your own closet and today’s outfit, on your photo.</p><a class="button" href="/download/">Start your free Style Profile</a></footer>'
    + '</div></section>';
}
