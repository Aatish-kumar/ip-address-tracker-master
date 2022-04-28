
const ip_address = document.getElementById('ip_address');

data();
function data() {
    fetch("https://geo.ipify.org/api/v2/country?apiKey=at_eftZV1a4SvIaYJmpCM9NB4fQJKPQg&ipAddress=8.8.8.8")
    .then(response => response.json())
    .then(data => {ip_address.innerHTML = data.ip})
    .catch(e=> console.log(e));
};









var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2FuZGVlcGthdG9jaCIsImEiOiJjbDJnYjQ0MmUwMjk1M2hsNXB3NWEwbXMzIn0.bTaokj0V1CdP4oszBEXLxw'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);
        