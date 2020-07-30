function loadData(){
  fetch('http://localhost:3000/data')
  .then(result => {
    return result.json();
  })
  .then (data => {
    console.log(data);
  });
};
loadData();


function openPestInfo(){
  document.getElementById("pestInfo").style.display = "block";
  document.getElementById("pestInfo").style.opacity = 1;
}
function closePestInfo(){
  document.getElementById("pestInfo").style.display = "none";
  document.getElementById("pestInfo").style.opacity = 0;
}
function openNotifications(){
  document.getElementById("notifications").style.display = "block";
  document.getElementById("notifications").style.opacity = 1;
}
function closeNotifications(){
  document.getElementById("notifications").style.display = "none";
  document.getElementById("notifications").style.opacity = 0;
}
function openSettings(){
  document.getElementById("settings").style.display = "block";
  document.getElementById("settings").style.opacity = 1;
  document.getElementById("settings").style.zindex = 1009;
}
function closeSettings(){
  document.getElementById("settings").style.display = "none";
  document.getElementById("settings").style.opacity = 0;
  document.getElementById("settings").style.zindex = 1006;
}
function openAddFarm(){
  document.getElementById("addFarm").style.display = "block";
  document.getElementById("addFarm").style.opacity = 1;
}
function closeAddFarm(){
  document.getElementById("addFarm").style.display = "none";
  document.getElementById("addFarm").style.opacity = 0;
}
function openMultPests(){
  document.getElementById("multPests").style.display = "block";
  document.getElementById("multPests").style.opacity = 1;
}
function closeMultPests(){
  document.getElementById("multPests").style.display = "none";
  document.getElementById("multPests").style.opacity = 0;
}
mapboxgl.accessToken = 'pk.eyJ1IjoidmVydGlqZSIsImEiOiJjazA3cHNsYXUwMzVrM2xxbnpxejBiaDNxIn0.JE3H0cRRmgby4jXQ5-uf2A';
var map = new mapboxgl.Map({
container: 'mapArea',
style: 'mapbox://styles/mapbox/light-v10', // stylesheet location
center: [0.121346, 52.205608], // starting position [lng, lat]
zoom: 13 // starting zoom
});
var marker = new mapboxgl.Marker({"color": "#de6a6a"})
.setLngLat([0.121346, 52.205608])
.setPopup(new mapboxgl.Popup().setHTML("<div class='mapDetails'><b><div class='mapDetHeader'>Sam's Farm</div></b>Russian Aphid<br>Common Fruit Fly<br><div onclick='openMultPests();' class='rightAlign'>Details</div></div>"))
.addTo(map);
var marker2 = new mapboxgl.Marker({
  "color": "#81e389",
})
.setLngLat([0.122346, 52.209608])
.addTo(map);
var marker3 = new mapboxgl.Marker({
  "color": "#ebb778",
})
.setLngLat([0.120346, 52.219608])
.addTo(map);
