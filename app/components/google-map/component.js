import Component from '@ember/component';

export default Component.extend({
  classNames: ['g-map'],
  didInsertElement() {
    this._super(...arguments);
    const canvas = document.querySelector('.g-map-canvas');
    this.set('map', new google.maps.Map(canvas, {
      zoom: 15,
      streetViewControl: false,
      rotateControl: false,
      mapTypeControl: false,
      center: { lat: 41.5911033, lng: -93.6115254 }
    }));
  }
});
