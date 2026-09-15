(function(){
  function ready(){
    document.body.classList.add('is-ready');
    document.querySelectorAll('.site-page').forEach(function(page){page.classList.add('is-ready');});

    document.querySelectorAll('a[href]').forEach(function(a){
      var href=a.getAttribute('href');
      if(!href || href.charAt(0)==='#' || /^(https?:|mailto:|tel:|javascript:|data:)/i.test(href) || a.target==='_blank') return;
      a.addEventListener('click',function(e){
        if(e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.hasAttribute('download')) return;
        e.preventDefault();
        document.body.classList.add('is-leaving');
        document.querySelectorAll('.site-page').forEach(function(page){page.classList.add('is-leaving');});
        setTimeout(function(){window.location.href=href;},240);
      });
    });

    document.querySelectorAll('.course-card,.area-card,.benefit-card,.course,.benefit').forEach(function(card){
      card.addEventListener('mousemove',function(e){
        if(window.matchMedia('(pointer: coarse)').matches) return;
        var r=card.getBoundingClientRect();
        var x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
        card.style.transform='translateY(-8px) perspective(1000px) rotateX('+(-y*1.6).toFixed(2)+'deg) rotateY('+(x*1.6).toFixed(2)+'deg)';
      });
      card.addEventListener('mouseleave',function(){card.style.transform='';});
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',ready); else ready();
})();
