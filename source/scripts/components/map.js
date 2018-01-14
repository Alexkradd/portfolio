var image = './../../images/map_marker.svg';
import GoogleMapsLoader from 'google-maps';

const initMap = GoogleMapsLoader.load(function(google) {
  new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 59.854802, lng: 30.350385},
    mapTypeControl: false,
    disableDefaultUI: true,
    styles: style.forest,
  }),
  new google.maps.Marker({position: {lat: 59.854802, lng: 30.350385}, map: google.maps.Map, icon: image});
});
var style = {
  default: null,
  forest: [
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

export default initMap;

