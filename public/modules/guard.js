(function(){
  const key = 'thecode_paid_v1';
  function hasLocal(cat){
    try { return JSON.parse(localStorage.getItem(key) || '[]').some(p=>p.id===cat); } catch(e){ return false; }
  }
  const url = new URL(location.href);
  const cat = url.searchParams.get('category') || location.pathname.split('/').pop().replace('.html','');
  if (!hasLocal(cat)) {
    location.href = `/pay/index.html?category=${encodeURIComponent(cat)}`;
  }
})();
