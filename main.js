// Navigation
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelector(`[data-page="${id}"]`).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.pushState(null, '', '#' + id);
}

document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    showPage(a.dataset.page);
  });
});

// Hash routing
const hash = location.hash.replace('#', '');
if (hash && document.getElementById('page-' + hash)) showPage(hash);

// Accordion
document.querySelectorAll('.semana-header').forEach(h => {
  h.addEventListener('click', () => {
    h.closest('.semana-card').classList.toggle('open');
  });
});

// Calendar filter
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const bloque = btn.dataset.bloque;
    document.querySelectorAll('.semana-card').forEach(card => {
      if (bloque === '0' || card.dataset.bloque === bloque) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
    document.querySelectorAll('.bloque-label').forEach(bl => {
      if (bloque === '0' || bl.dataset.bloque === bloque) {
        bl.style.display = '';
      } else {
        bl.style.display = 'none';
      }
    });
  });
});
