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


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    gestureHandling: 'cooperative',
    fullscreenControl: 'false',
    center: {lat: -37.816630, lng: 144.899130},
    zoom: 15,
    styles:[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
  });
  var pos = {lat: -37.816630, lng: 144.899130};
  var redPin = {
    url: 'https://i.ibb.co/Yk4X9BH/redPin.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(50, 50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 25)
  };
  var yellowPin = {
    url: ' https://i.ibb.co/9v9qyYK/yellow-Pin.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(50, 50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 25)
  };
  var greenPin = {
    url: 'https://i.ibb.co/cLxK88w/greenPin.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(50, 50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 25)
  };
	var marker = new google.maps.Marker({
			position: pos,
			map: map,
			title: 'The Commercial Hotel',
      animation: google.maps.Animation.DROP,
      icon: redPin,
			});
  var pos2 = {lat: -37.826630, lng: 144.909130};
  var marker2 = new google.maps.Marker({
    	position: pos2,
  		map: map,
  		title: 'The Commercial Hotel',
      animation: google.maps.Animation.DROP,
      icon: yellowPin,
  		});
    var pos3 = {lat: -37.815030, lng: 144.893130};
    var marker3 = new google.maps.Marker({
      	position: pos3,
    		map: map,
    		title: 'The Commercial Hotel',
        animation: google.maps.Animation.DROP,
        icon: greenPin,
    		});
}
