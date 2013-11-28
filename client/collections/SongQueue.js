// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  initialize: function(){
    this.on('add', this.playFirst);
  },

  playFirst: function(){
    // console.log('playFirst this is', this);
    // console.log('playFirst - this.length is', this.length);
    if (this.length > 0) {
      // this should add song to the queue, and not play immediately
      // for MONDAY, see if 'add' actually adds to the collection and see what data type/object is being added
    } else {
      this.at(0).play();
    }
  }

});
