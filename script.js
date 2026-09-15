document.addEventListener("DOMContentLoaded",()=>{
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const loader=document.querySelector(".loader"), loaderLine=document.querySelector(".loader-line span"), loaderNumber=document.querySelector(".loader-number");
  if(!reduced && loader){let p=0;const timer=setInterval(()=>{p=Math.min(100,p+Math.random()*13);loaderLine.style.width=`${p}%`;loaderNumber.textContent=Math.round(p).toString().padStart(2,"0");if(p>=100){clearInterval(timer);gsap.to(loader,{yPercent:-100,duration:1,ease:"power4.inOut",delay:.15});}},55)}else if(loader)loader.style.display="none";

  let lenis;
  if(!reduced && window.Lenis){lenis=new Lenis({duration:1.1,smoothWheel:true,touchMultiplier:1.2});const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf)}

  if(window.gsap){gsap.registerPlugin(ScrollTrigger);if(!reduced){
    const tl=gsap.timeline({delay:.85});
    tl.from(".hero-title .line",{yPercent:115,duration:1.15,stagger:.09,ease:"power4.out"})
      .fromTo(".hero-reveal",{y:22,opacity:0},{y:0,opacity:1,duration:.75,stagger:.08,ease:"power3.out"},"-=.65")
      .from(".hero-car",{xPercent:10,scale:1.04,opacity:0,duration:1.25,ease:"power4.out"},"-=.9");
    gsap.to(".hero-car",{yPercent:8,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:true}});
    gsap.to(".final-cta-bg",{yPercent:-8,ease:"none",scrollTrigger:{trigger:".final-cta",start:"top bottom",end:"bottom top",scrub:true}});
    document.querySelectorAll(".section-meta, .about-heading, .about-copy, .trust-grid article, .section-header, .course-card, .why-intro, .why-story, .help-head, .benefit-grid article, .explainer-copy, .review-grid article, .location-header, .location-list, .area-copy, .faq-item, .contact-copy, .contact-form").forEach(el=>{gsap.from(el,{scrollTrigger:{trigger:el,start:"top 88%",once:true},y:36,opacity:0,duration:.85,ease:"power3.out"})});
  }}

  const progress=document.querySelector(".page-progress span"), header=document.querySelector(".site-header");let lastY=0;
  window.addEventListener("scroll",()=>{const y=window.scrollY,max=document.documentElement.scrollHeight-innerHeight;if(progress)progress.style.width=`${max?y/max*100:0}%`;if(header){if(y>lastY&&y>160)header.classList.add("nav-hidden");else header.classList.remove("nav-hidden")}lastY=y;},{passive:true});

  const cursor=document.querySelector(".cursor");if(cursor&&innerWidth>900&&!reduced){let mx=0,my=0,cx=0,cy=0;addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY});const loop=()=>{cx+=(mx-cx)*.18;cy+=(my-cy)*.18;cursor.style.left=`${cx}px`;cursor.style.top=`${cy}px`;requestAnimationFrame(loop)};loop();document.querySelectorAll("a,button,input,select,textarea,.course-card,.benefit-grid article").forEach(el=>{el.addEventListener("mouseenter",()=>cursor.classList.add("is-active"));el.addEventListener("mouseleave",()=>cursor.classList.remove("is-active"))})}else if(cursor){cursor.style.display="none"}

  if(!reduced&&innerWidth>900&&window.gsap){document.querySelectorAll(".magnetic").forEach(btn=>{btn.addEventListener("mousemove",e=>{const r=btn.getBoundingClientRect();gsap.to(btn,{x:(e.clientX-r.left-r.width/2)*.14,y:(e.clientY-r.top-r.height/2)*.14,duration:.3,ease:"power3.out"})});btn.addEventListener("mouseleave",()=>gsap.to(btn,{x:0,y:0,duration:.6,ease:"elastic.out(1,.45)"}))});document.querySelectorAll(".course-card").forEach(card=>{card.addEventListener("mousemove",e=>{const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;card.style.setProperty("--mx",`${x}px`);card.style.setProperty("--my",`${y}px`);gsap.to(card,{rotateY:(x/r.width-.5)*2.2,rotateX:(y/r.height-.5)*-2.2,transformPerspective:1100,duration:.35,ease:"power2.out"})});card.addEventListener("mouseleave",()=>gsap.to(card,{rotateX:0,rotateY:0,duration:.6,ease:"power3.out"}))})}

  document.querySelectorAll("[data-counter]").forEach(counter=>{const target=+counter.dataset.counter;if(reduced||!window.gsap){counter.textContent=target;return}const obj={v:0};gsap.to(obj,{v:target,duration:1.8,ease:"power2.out",scrollTrigger:{trigger:counter,start:"top 88%",once:true},onUpdate:()=>counter.textContent=Math.round(obj.v)})});

  document.querySelectorAll(".faq-item").forEach(item=>{const q=item.querySelector(".faq-question"),a=item.querySelector(".faq-answer");q.addEventListener("click",()=>{const active=item.classList.contains("active");document.querySelectorAll(".faq-item").forEach(o=>{o.classList.remove("active");o.querySelector(".faq-answer").style.maxHeight=null});if(!active){item.classList.add("active");a.style.maxHeight=`${a.scrollHeight}px`}})});

  const toggle=document.querySelector(".menu-toggle"),menu=document.querySelector(".mobile-menu");if(toggle&&menu){toggle.addEventListener("click",()=>{const open=document.body.classList.toggle("menu-open");toggle.setAttribute("aria-expanded",open);menu.setAttribute("aria-hidden",!open);menu.style.display=open?"flex":"none";if(open&&window.gsap&&!reduced)gsap.from(".mobile-menu-inner a",{y:30,opacity:0,stagger:.05,duration:.55,ease:"power3.out"})});menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{document.body.classList.remove("menu-open");toggle.setAttribute("aria-expanded","false");menu.style.display="none"}))}

  document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener("click",e=>{const id=link.getAttribute("href");if(id==="#")return;const target=document.querySelector(id);if(!target)return;e.preventDefault();lenis?lenis.scrollTo(target,{offset:-95}):target.scrollIntoView({behavior:reduced?"auto":"smooth"})}));

  const navLinks=[...document.querySelectorAll('.nav-links a[href^="#"]')];const sections=navLinks.map(a=>document.querySelector(a.getAttribute("href"))).filter(Boolean);if("IntersectionObserver"in window){const obs=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")===`#${entry.target.id}`))}}),{rootMargin:"-42% 0px -50% 0px"});sections.forEach(s=>obs.observe(s))}

  document.querySelectorAll(".registration-form,.contact-form").forEach(form=>form.addEventListener("submit",e=>{e.preventDefault();const btn=form.querySelector(".submit-button"),old=btn.innerHTML;btn.innerHTML='<span>Received — Thank You</span><i class="ri-check-line"></i>';setTimeout(()=>btn.innerHTML=old,3200)}));

  const reg=document.querySelector(".registration-form");if(reg){const fields=[...reg.querySelectorAll("input,select")],steps=[...reg.querySelectorAll(".form-progress span")];const update=()=>{const filled=fields.filter(f=>f.type==="radio"?reg.querySelector(`input[name="${f.name}"]:checked`):f.value).length;const pct=filled/fields.length;steps.forEach((s,i)=>s.classList.toggle("active",pct>i/4))};fields.forEach(f=>f.addEventListener("change",update));fields.forEach(f=>f.addEventListener("input",update))}
  if(window.ScrollTrigger)setTimeout(()=>ScrollTrigger.refresh(),800);
});
