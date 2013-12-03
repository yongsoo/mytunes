// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      // this.model.play();
      this.model.enqueue(); // enqueue will automatically trigger model.play if no songs in queue already
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
