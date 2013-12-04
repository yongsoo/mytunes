// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  initialize: function(initializedSong) {
    arguments.length === 0 ? this.queue = [] : this.queue = this.add(initializedSong);

    this.on('add', function(songData) {
      this.queue.push(songData);
      if (this.queue.length === 1) { this.playFirst(); }
    });

    this.on('ended', function() {
      this.queue.remove(MyTunes.Collections.SongQueue.at(0));
      if (this.queue.length > 0) { this.playFirst(); }
    });

    this.on('dequeue', function() {
      this.queue.shift();
      // this.render(); // add a render function here to re-render song queue
    });
  },

  playFirst: function() {
    this.at(0).play();
  }

});
