// Apple App Analytics provider token (App Store Connect > Analytics > Acquisition > Campaigns > Generate link, the pt= value).
// Required for ct= campaign links to be counted. Leave empty until filled in.
const APPLE_PROVIDER_TOKEN='128872672';
document.addEventListener('DOMContentLoaded',()=>{
  const track=(name,props={})=>{
    window.plausible?.(name,{props});
    window.dataLayer?.push({event:name,...props});
    window.dispatchEvent(new CustomEvent('stylebff:analytics',{detail:{name,props}}));
  };
  const legacyHashes = {
    '#features': '/features/daily-outfits-on-you/',
    '#style-feed': '/features/daily-outfits-on-you/',
    '#glow-feed': '/features/daily-outfits-on-you/',
    '#lookbook': '/features/digital-closet/',
    '#glowbook': '/features/digital-closet/',
    '#how-it-works': '/how-it-works/'
  };
  if (location.hash && legacyHashes[location.hash]) {
    location.replace(legacyHashes[location.hash]);
    return;
  }
  const button=document.querySelector('.menu-toggle');
  const menu=document.querySelector('#mobile-menu');
  button?.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));menu.hidden=open});
  document.querySelectorAll('[data-store]').forEach(link=>link.addEventListener('click',()=>track('Store Badge Click',{store:link.dataset.store,page:location.pathname})));
  document.querySelector('[data-event="video_play"]')?.addEventListener('play',()=>track('Video Play',{page:location.pathname}),{once:true});

  const photo=document.querySelector('#selfie');
  const preview=document.querySelector('#photo-preview');
  photo?.addEventListener('change',()=>{const file=photo.files?.[0];if(!file)return;const img=new Image();img.onload=()=>{const max=1200;const scale=Math.min(1,max/Math.max(img.width,img.height));const canvas=document.createElement('canvas');canvas.width=Math.round(img.width*scale);canvas.height=Math.round(img.height*scale);canvas.getContext('2d').drawImage(img,0,0,canvas.width,canvas.height);preview.innerHTML='<p>Photo ready on this device. Use the six questions for your web result while selfie analysis is being connected.</p><img alt="Local selfie preview" src="'+canvas.toDataURL('image/jpeg',.8)+'" width="180"/>';URL.revokeObjectURL(img.src)};img.src=URL.createObjectURL(file)});

  document.querySelector('#color-quiz')?.addEventListener('submit',event=>{event.preventDefault();const values=[...new FormData(event.currentTarget).values()].map(Number);const warm=values.filter(v=>v===1).length;const cool=values.filter(v=>v===0).length;const depth=values.slice(3).reduce((a,b)=>a+b,0);let season=warm>cool?(depth>3?'deep-autumn':'true-spring'):(depth>3?'deep-winter':'true-summer');track('Quiz Complete',{season});location.href='/quiz/result/'+season+'/'});

  document.querySelectorAll('[data-email-capture]').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();const output=form.querySelector('output');output.textContent='Email capture needs the founder-approved endpoint. Nothing was sent or stored.';track('Quiz Email Submit',{status:'endpoint-missing'})}));

  const globalCountries = [
    ['AL','Albania'],['DZ','Algeria'],['AU','Australia'],['AZ','Azerbaijan'],['BD','Bangladesh'],['BE','Belgium'],['BW','Botswana'],['BR','Brazil'],['KH','Cambodia'],['CA','Canada'],['CO','Colombia'],['CZ','Czechia'],['DK','Denmark'],['EG','Egypt'],['FI','Finland'],['FR','France'],['DE','Germany'],['GU','Guam'],['GT','Guatemala'],['GY','Guyana'],['HK','Hong Kong'],['HU','Hungary'],['IN','India'],['ID','Indonesia'],['IQ','Iraq'],['IE','Ireland'],['IL','Israel'],['IT','Italy'],['CI','Ivory Coast'],['JP','Japan'],['KE','Kenya'],['KW','Kuwait'],['LB','Lebanon'],['LT','Lithuania'],['LU','Luxembourg'],['MY','Malaysia'],['MX','Mexico'],['MA','Morocco'],['MM','Myanmar'],['NL','Netherlands'],['NZ','New Zealand'],['NG','Nigeria'],['PK','Pakistan'],['PH','Philippines'],['PL','Poland'],['PT','Portugal'],['RO','Romania'],['SA','Saudi Arabia'],['RS','Serbia'],['SG','Singapore'],['SO','Somalia'],['ZA','South Africa'],['KR','South Korea'],['ES','Spain'],['LK','Sri Lanka'],['SE','Sweden'],['CH','Switzerland'],['TZ','Tanzania'],['TH','Thailand'],['TT','Trinidad and Tobago'],['TN','Tunisia'],['TR','Turkey'],['UG','Uganda'],['UA','Ukraine'],['AE','United Arab Emirates'],['GB','United Kingdom'],['US','United States'],['UZ','Uzbekistan'],['VE','Venezuela'],['VN','Vietnam'],['ZW','Zimbabwe']
  ];
  const toFlag = code => [...code].map(char=>String.fromCodePoint(127397+char.charCodeAt())).join('');
  const flagRings=[...document.querySelectorAll('[data-flag-ring]')];
  if(flagRings.length){
    const ringSlots=[12,8];
    flagRings.forEach((ring,ringIndex)=>{
      const slotCount=ringSlots[ringIndex]||8;
      for(let index=0;index<slotCount;index+=1){
        const flag=document.createElement('span');
        flag.className='orbit-flag';
        flag.style.setProperty('--flag-angle',(index*360/slotCount)+'deg');
        flag.style.setProperty('--flag-index',index);
        flag.innerHTML='<span class="flag-chip"><i></i><small></small></span>';
        ring.append(flag);
      }
    });
    let flagOffset=0;
    const updateFlagRings=()=>{
      let globalSlot=0;
      flagRings.forEach(ring=>ring.querySelectorAll('.orbit-flag').forEach(flag=>{
        const [code,name]=globalCountries[(flagOffset+globalSlot)%globalCountries.length];
        flag.title=name;
        flag.querySelector('i').textContent=toFlag(code);
        flag.querySelector('small').textContent=name;
        globalSlot+=1;
      }));
      flagOffset=(flagOffset+20)%globalCountries.length;
    };
    updateFlagRings();
    window.setInterval(updateFlagRings,3600);
  }
  document.querySelectorAll('[data-flag-marquee]').forEach(track=>{
    [...globalCountries,...globalCountries].forEach(([code,name])=>{
      const flag=document.createElement('span');
      flag.title=name;
      flag.innerHTML='<i>'+toFlag(code)+'</i><small>'+name+'</small>';
      track.append(flag);
    });
  });

  let lottiePromise;
  const ensureLottie=()=>{
    if(window.lottie)return Promise.resolve();
    if(lottiePromise)return lottiePromise;
    lottiePromise=new Promise((resolve,reject)=>{
      const script=document.createElement('script');
      script.src='/assets/vendor/lottie.min.js';
      script.onload=resolve;
      script.onerror=reject;
      document.head.append(script);
    });
    return lottiePromise;
  };
  const loadLottie=async container=>{
    if(container.dataset.loading==='true'||container.dataset.ready==='true'||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
    container.dataset.loading='true';
    try {
      await ensureLottie();
      const animation=window.lottie.loadAnimation({
        container,
        renderer:'svg',
        loop:true,
        autoplay:true,
        path:container.dataset.lottieSrc,
        rendererSettings:{preserveAspectRatio:'xMidYMid slice'}
      });
      animation.addEventListener('DOMLoaded',()=>container.dataset.ready='true');
    } catch(error) {
      console.warn('Mascot animation could not load; using the static fallback.',error);
    }
  };
  const lottieContainers=[...document.querySelectorAll('[data-lottie-src]')];
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      loadLottie(entry.target);
      observer.unobserve(entry.target);
    }),{rootMargin:'200px'});
    lottieContainers.forEach(container=>observer.observe(container));
  }else{
    lottieContainers.forEach(loadLottie);
  }

  const download=document.querySelector('[data-download-page]');
  if(download){const params=new URLSearchParams(location.search);const preset=download.dataset.preset||'default';const ppid=download.dataset.ppid||params.get('ppid')||'';const ct=(params.get('ct')||params.get('ref')||'').replace(/[^A-Za-z0-9_-]/g,'').slice(0,100);const pt=params.get('pt')||APPLE_PROVIDER_TOKEN;const source=(params.get('utm_source')||(params.get('ref')?'creator':'')).replace(/[^A-Za-z0-9_-]/g,'').slice(0,100);const apple=new URL('https://apps.apple.com/app/apple-store/id6767003047');apple.searchParams.set('mt','8');if(ppid)apple.searchParams.set('ppid',ppid);if(ct){apple.searchParams.set('ct',ct);if(pt)apple.searchParams.set('pt',pt)}const play=new URL('https://play.google.com/store/apps/details?id=com.bingetry.vitualtryon');const campaign=[ct&&'utm_campaign='+ct,source&&'utm_source='+source,ct&&'utm_medium=link',preset!=='default'&&'utm_content='+preset].filter(Boolean).join('&');if(campaign)play.searchParams.set('referrer',campaign);document.querySelectorAll('[data-store="apple"]').forEach(a=>a.href=apple);document.querySelectorAll('[data-store="google"]').forEach(a=>a.href=play);track('Download Page View',{preset});const shouldRedirect=preset!=='default'||download.dataset.redirectMobile==='true';const agent=navigator.userAgent;if(shouldRedirect&&/iPhone|iPad|iPod/i.test(agent)){track('Download Redirect',{store:'apple',preset});setTimeout(()=>location.replace(apple),900)}else if(shouldRedirect&&/Android/i.test(agent)){track('Download Redirect',{store:'google',preset});setTimeout(()=>location.replace(play),900)}else if(download.dataset.redirectDesktop==='true'){location.replace('/download/'+location.search)}}
});

// How it works: replay the "Style tracking" journey as an animation when it scrolls into view.
(()=>{const t=document.querySelector('[data-style-track]');if(!t||!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;t.classList.add('is-armed');const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){io.disconnect();t.classList.add('is-playing');setTimeout(()=>t.classList.add('is-delivered'),4650)}},{threshold:.3});io.observe(t)})();

// Homepage hero: occasion chips synced to the stylist video, typed request and BFF reply.
(()=>{const stage=document.querySelector('[data-hero-stage]');if(!stage)return;
const track=(name,props={})=>{window.plausible?.(name,{props});window.dataLayer?.push({event:name,...props});window.dispatchEvent(new CustomEvent('stylebff:analytics',{detail:{name,props}}))};
document.querySelectorAll('[data-cta="hero-onelink"]').forEach(a=>a.addEventListener('click',()=>track('Hero CTA Click',{cta:'style_me_now',page:location.pathname})));
const vid=stage.querySelector('[data-hero-video]'),chips=stage.querySelector('[data-hero-chips]'),typed=stage.querySelector('[data-hero-typed]'),reply=stage.querySelector('[data-hero-reply]'),replyText=stage.querySelector('[data-hero-reply-text]'),mirror=stage.querySelector('[data-hero-mirror]');
if(!vid||!chips)return;
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Start times (seconds) of each look inside /assets/hero/stylist-looks.mp4
const looks=[
 {k:'Your photo',t:0,end:1.55,ask:'Here’s me. Style me?',rep:'Love it! Tell me the plan and I’ll style you 👀'},
 {k:'Date night',t:1.75,end:4,ask:'Something for date night 💕',rep:'<b>Burgundy satin</b> + camel. Warm, soft, a total head-turner.'},
 {k:'Dinner out',t:4.25,end:6.45,ask:'Dinner with friends, a bit chic',rep:'<b>Emerald silk</b> and sharp black trousers. Easy glam.'},
 {k:'Office',t:6.7,end:8.95,ask:'Big meeting on Monday',rep:'<b>Navy blazer</b>, camel trousers. Polished, never stiff.'}
];
const buttons=looks.map((l,i)=>{const b=document.createElement('button');b.type='button';b.className='hx-chip';b.setAttribute('aria-pressed','false');b.innerHTML=l.k+'<i aria-hidden="true"></i>';
 b.addEventListener('click',()=>{vid.currentTime=l.t+.02;vid.play().catch(()=>{});track('Hero Look Chip',{look:l.k})});chips.append(b);return b});
let cur=-1,typeTimer,replyTimer;
const type=s=>{clearInterval(typeTimer);if(reduce){typed.textContent=s;return}typed.textContent='';const ch=[...s];let i=0;typeTimer=setInterval(()=>{typed.textContent+=ch[i++]||'';if(i>=ch.length)clearInterval(typeTimer)},38)};
const set=i=>{if(i===cur)return;cur=i;const l=looks[i];buttons.forEach((b,j)=>b.setAttribute('aria-pressed',String(j===i)));type(l.ask);reply.classList.remove('is-on');clearTimeout(replyTimer);
 replyTimer=setTimeout(()=>{replyText.innerHTML=l.rep;reply.classList.add('is-on')},reduce?0:650);mirror.classList.remove('is-swap');void mirror.offsetWidth;mirror.classList.add('is-swap')};
const tick=()=>{const t=vid.currentTime;let i=0;looks.forEach((l,j)=>{if(t>=l.t-.12)i=j});set(i);const l=looks[i],p=Math.min(1,Math.max(0,(t-l.t)/(l.end-l.t)));buttons.forEach((b,j)=>b.firstElementChild.style.width=(j===i?p*100:0)+'%');requestAnimationFrame(tick)};
if(reduce){vid.removeAttribute('autoplay');vid.pause()}else vid.play().catch(()=>{});
set(0);requestAnimationFrame(tick);
})();

// Homepage sections: scroll reveals, closet clean-up board, try-on compare slider, final CTA tracking.
(()=>{if(!document.body.classList.contains('home-v2'))return;
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const track=(name,props={})=>{window.plausible?.(name,{props});window.dataLayer?.push({event:name,...props});window.dispatchEvent(new CustomEvent('stylebff:analytics',{detail:{name,props}}))};
document.querySelectorAll('[data-cta="final-onelink"]').forEach(a=>a.addEventListener('click',()=>track('Hero CTA Click',{cta:'final_style_me_now',page:location.pathname})));
const io=(els,cb,opts)=>{if(!('IntersectionObserver' in window)){els.forEach(cb);return}const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){cb(e.target);o.unobserve(e.target)}}),opts);els.forEach(el=>o.observe(el))};
// reveal
const reveals=[...document.querySelectorAll('[data-reveal]')];
if(!reduce&&'IntersectionObserver' in window){document.documentElement.classList.add('hs-armed');io(reveals,el=>el.classList.add('is-in'),{rootMargin:'0px 0px -12% 0px'})}
// closet board: scan each tile from gallery photo to clean piece, then loop
const board=document.querySelector('[data-closet-board]');
if(board){const tiles=[...board.querySelectorAll('.hs-tile')];
 const clean=t=>{t.classList.add('is-scanning');setTimeout(()=>{t.classList.add('is-clean');t.classList.remove('is-scanning')},reduce?0:520)};
 const run=()=>{if(reduce){tiles.forEach(t=>t.classList.add('is-clean'));return}
  tiles.forEach((t,i)=>setTimeout(()=>clean(t),300+i*420));
  setTimeout(()=>{tiles.forEach(t=>t.classList.remove('is-clean'));setTimeout(run,900)},300+tiles.length*420+4200)};
 io([board],run,{threshold:.35})}
// compare slider
const cmp=document.querySelector('[data-compare]');
if(cmp){let drag=false,touched=false;
 const set=x=>{x=Math.min(100,Math.max(0,x));cmp.style.setProperty('--x',x+'%');cmp.setAttribute('aria-valuenow',String(Math.round(x)))};
 const fromEvent=e=>{const r=cmp.getBoundingClientRect();set((e.clientX-r.left)/r.width*100)};
 cmp.addEventListener('pointerdown',e=>{drag=true;touched=true;cmp.setPointerCapture(e.pointerId);fromEvent(e)});
 cmp.addEventListener('pointermove',e=>{if(drag)fromEvent(e)});
 cmp.addEventListener('pointerup',()=>{if(drag)track('Try-on Slider Drag',{page:location.pathname});drag=false});
 cmp.addEventListener('keydown',e=>{const v=+cmp.getAttribute('aria-valuenow');if(e.key==='ArrowLeft'){set(v-5);touched=true;e.preventDefault()}if(e.key==='ArrowRight'){set(v+5);touched=true;e.preventDefault()}});
 if(!reduce)io([cmp],()=>{let t0;const step=ts=>{if(touched)return;t0=t0||ts;const k=(ts-t0)/2600;set(50+40*Math.sin(k*Math.PI*2)*Math.max(0,1-k/1.5));if(k<1.5)requestAnimationFrame(step)};requestAnimationFrame(step)},{threshold:.5})}
})();
