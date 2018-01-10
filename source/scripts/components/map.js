export default function initMap() {
  var uluru = {lat: 59.854802, lng: 30.350385};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: uluru,
    mapTypeControl: false,
    disableDefaultUI: true,
  });
  var image = './../../images/map_marker.svg';
  var marker = new google.maps.Marker({position: uluru, map: map, icon: image});
  map.setOptions({styles: styles.forest});
}
var styles = {
  default: null,
  forest:[
    {
      'featureType': 'administrative',
      'elementType': 'geometry',
      'stylers': [
        {
          'visibility': 'off',
        },
      ],
    },
    {
      'featureType': 'landscape',
      'stylers': [
        {
          'color': '#f2f2f2',
        },
      ],
    },
    {
      'featureType': 'poi',
      'stylers': [
        {
          'visibility': 'off',
        },
      ],
    },
    {
      'featureType': 'road',
      'stylers': [
        {
          'color': '#ffffff',
        },
      ],
    },
    {
      'featureType': 'road',
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off',
        },
      ],
    },
    {
      'featureType': 'road.arterial',
      'stylers': [
        {
          'color': '#d6d6d6',
        },
      ],
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'off',
        },
      ],
    },
    {
      'featureType': 'road.highway',
      'stylers': [
        {
          'color': '#ffffff',
        },
      ],
    },
    {
      'featureType': 'road.highway',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'off',
        },
      ],
    },
    {
      'featureType': 'road.highway.controlled_access',
      'stylers': [
        {
          'color': '#d6d6d6',
        },
      ],
    },
    {
      'featureType': 'road.local',
      'stylers': [
        {
          'color': '#d6d6d6',
        },
        {
          'visibility': 'off',
        },
      ],
    },
    {
      'featureType': 'transit',
      'stylers': [
        {
          'visibility': 'off',
        },
      ],
    },
    {
      'featureType': 'water',
      'stylers': [
        {
          'color': '#618055',
        },
      ],
    },
  ],
};