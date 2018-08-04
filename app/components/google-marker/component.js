import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
  marker: computed('context.map', function() {
    const image = {
      url: '/images/carMarker.png',
      size: new google.maps.Size(114, 62),
      scaledSize: new google.maps.Size(57, 31)
    };

    const map = get(this, 'context.map');
    const rider = get(this, 'rider');
    const lat = rider.lat;
    const lng = rider.lng;
    const marker = new google.maps.Marker({
      map: map,
      icon: image,
      position: { lat: lat, lng: lng }
    });

    const infowindow = new google.maps.InfoWindow({
      content: 'Pick up ' + rider.name + '?'
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  })
});
