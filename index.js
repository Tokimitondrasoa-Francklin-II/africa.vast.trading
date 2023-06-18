
// Leaflet map code
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('http://{s}.google.com/vt?lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution:`<a href="https://policies.google.com/privacy" target="_blank" rel="noopener" style="text-decoration: none; cursor: pointer; color: rgb(0, 0, 0);">Règle de confidentialité</a> | <a href="https://www.google.com/intl/fr-FR_US/help/terms_maps.html" target="_blank" rel="noopener" style="text-decoration: none; cursor: pointer; color: rgb(0, 0, 0);">Conditions d'utilisation</a>`
    }).addTo(map);


 // create a marker and add it to the map
var marker = L.marker([51.5, -0.09]).addTo(map);
 // create a popup with an image and add it to the marker
var popup = L.popup().setContent('<img src="./img/avt.png" class="img-fluid" alt="image">');
marker.bindPopup(popup);

 // open the popup automatically when the map is shown
marker.openPopup();