const chillan = [-36.6066, -72.1034];
const mapEl = document.getElementById('map');
if (mapEl && window.L) {
  const map = L.map('map', { zoomControl: true }).setView(chillan, 14);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  L.marker(chillan).addTo(map).bindPopup('<strong>Chillán, Ñuble</strong><br>Vista inicial de la plataforma.').openPopup();
}
