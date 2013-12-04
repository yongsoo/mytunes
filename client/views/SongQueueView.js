// SongQueueView.js - Defines a backbone view class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();

    var that = this;  // Preserve "this" context because collection doesn't have render function, but we need to listen for "add" under collection
    this.collection.on('add', function() {
      that.render();
    });

    this.collection.on('dequeue', function() {
      that.render();
    });
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new MyTunes.Views.SongQueueEntryView({model: song}).render();
      })
    );
  }

});
