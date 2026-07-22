
const body=document.body;const sidebar=document.getElementById('sidebar');const sideToggle=document.getElementById('sidebarToggle');
if(localStorage.getItem('sidebar-collapsed')==='true'){sidebar.classList.add('collapsed');body.classList.add('sidebar-collapsed');sideToggle.textContent='⇥'}
sideToggle?.addEventListener('click',()=>{sidebar.classList.toggle('collapsed');body.classList.toggle('sidebar-collapsed');const collapsed=sidebar.classList.contains('collapsed');localStorage.setItem('sidebar-collapsed',collapsed);sideToggle.textContent=collapsed?'⇥':'⇤'});
document.querySelectorAll('.side-nav a').forEach(a=>{if(a.dataset.page===body.dataset.page)a.classList.add('active')});
const topBtn=document.getElementById('learningTopBtn');const topDrop=topBtn?.closest('.top-dropdown');topBtn?.addEventListener('click',(e)=>{e.stopPropagation();topDrop.classList.toggle('open')});document.addEventListener('click',()=>topDrop?.classList.remove('open'));
const theme=document.getElementById('themeToggle');if(localStorage.getItem('theme')==='dark')body.classList.add('dark');theme?.addEventListener('click',()=>{body.classList.toggle('dark');localStorage.setItem('theme',body.classList.contains('dark')?'dark':'light')});
