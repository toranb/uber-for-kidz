import Component from '@ember/component';

export default Component.extend({
  classNames: ['ui-layout'],
  actions: {
    stop() {
      this.set('riders', []);
    },
    start() {
      this.set('riders', [
        {lat: 41.5911, lng: -93.611, name: 'Toran'},
        {lat: 41.5822, lng: -93.608, name: 'Michelle'},
        {lat: 41.5879, lng: -93.613, name: 'Tim'}
      ]);
    }
  }
});
