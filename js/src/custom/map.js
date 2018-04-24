var canvas = $("#map");
var longitude = canvas.data("longitude");
var latitude = canvas.data("latitude");
var desktopzoom = canvas.data("desktop-zoom");
var tabletzoom = canvas.data("tablet-zoom");
var mobilezoom = canvas.data("mobile-zoom");
var info = canvas.data("info");
var pin = canvas.data("pin");



var markers = [];

var main_locations = [
    ['Information Window', longitude, latitude]
];

var main_locations_infoWindowContent = [
    [info]
];

var map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(longitude, latitude),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var styles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
];

map.setOptions({
    scaleControl: true, 
    draggable:true,
    scrollwheel: true,
    styles: styles,
    mapTypeControl: true,
    zoomControl: true,
    streetViewControl: true,
    panControl:false,
    disableDefaultUI: true,
});

var infowindow = new google.maps.InfoWindow();

var marker, i;



for (i = 0; i < main_locations.length; i++) {  

    // Create markers
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(main_locations[i][1], main_locations[i][2]),
        icon: pin,
        map: map,
        animation: google.maps.Animation.BOUNCE,
    });

    // Add info window content and click event
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(main_locations_infoWindowContent[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));

    markers.push(marker);

}

function mapZoom() {
    if($(window).innerWidth() < 768) { 
        // mobile
        map.setZoom(mobilezoom);
    } else if($(window).innerWidth() < 1025) { 
        // tablet
        map.setZoom(tabletzoom);
    } else { 
        // desktop
        map.setZoom(desktopzoom);
    }  
}

$(document).ready(function() {
    mapZoom();  
});

$(window).on("resize", function() {
    window.setTimeout(function() {
        map.panTo(new google.maps.LatLng(longitude, latitude));
        mapZoom();
    },1000);          
});