// AppView.js - Defines a backbone view class for the whole music app.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new MyTunes.Views.PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new MyTunes.Views.LibraryView({collection: this.model.get('library')});

    console.log(MyTunes.Views.SongQueueView);
    // ********** MyTunes.Views.SongQueueView is undefined - the two others above are defined

    this.queueView = new MyTunes.Views.SongQueueView({collection: this.model.get('songQueue')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.queueView.$el
    ]);
  }

});
