// Song.js - Defines a backbone model class for songs.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Models = window.MyTunes.Models || {};

MyTunes.Models.SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  ended: function() {
    this.get(queue).shift();
    this.playFirst();
  }

});

// Does the method "ended" belong in the SongModel or SongQueue (collection)?
// If it belongs in the SongModel, how do we access the queue, and can we use shift / what's an alternative?
// If it belongs in the SongQueue, how do we make it an available method to songs in the queue?
// Why do the specs call .trigger('ended') on line 45, but then call .ended() on line 53 (of SongQueueSpec.js). Don't these do the same thing?
