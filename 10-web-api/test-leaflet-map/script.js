const map = L.map('map').setView([0 , 0], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition(position => {
     const lat = position.coords.latitude;
     const lng = position.coords.longitude;

     marker.setLatLng([lat, lng]).update();
     map.setView([lat, lng], 15);
     marker.bindPopup('<strong>Hello, </strong><br> It\'s your location.' );
})