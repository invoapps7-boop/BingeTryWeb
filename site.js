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

  const download=document.querySelector('[data-download-page]');
  if(download){const params=new URLSearchParams(location.search);const preset=download.dataset.preset||'default';const ppid=download.dataset.ppid||params.get('ppid')||'';const ct=params.get('ct')||params.get('ref')||'';const pt=params.get('pt')||'';const apple=new URL('https://apps.apple.com/app/id6767003047');if(ppid)apple.searchParams.set('ppid',ppid);if(ct)apple.searchParams.set('ct',ct);if(pt)apple.searchParams.set('pt',pt);const play=new URL('https://play.google.com/store/apps/details?id=com.bingetry.vitualtryon');const campaign=[ct&&'utm_campaign='+ct,pt&&'utm_source='+pt,preset!=='default'&&'utm_content='+preset].filter(Boolean).join('&');if(campaign)play.searchParams.set('referrer',campaign);document.querySelectorAll('[data-store="apple"]').forEach(a=>a.href=apple);document.querySelectorAll('[data-store="google"]').forEach(a=>a.href=play);track('Download Page View',{preset});const agent=navigator.userAgent;if(/iPhone|iPad|iPod/i.test(agent)){track('Download Redirect',{store:'apple',preset});setTimeout(()=>location.replace(apple),900)}else if(/Android/i.test(agent)){track('Download Redirect',{store:'google',preset});setTimeout(()=>location.replace(play),900)}else if(download.dataset.redirectDesktop==='true'){location.replace('/download/'+location.search)}}
});
