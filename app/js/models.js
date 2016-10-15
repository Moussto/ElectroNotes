/**
 * Created by mouss on 14/10/16.
 */




var NoteModel = Backbone.Model.extend({

	defaults: {
		id: 0,
		title: 'Note n1',
		value: 'This is a new note',
		teaser: ''
	},
	idAttribute: "id",

});

var NoteEntryView = Backbone.View.extend({
	template: _.template($('.NoteEntryTemplate').html()),

	events: {
		"click .media-body" : "chosen"
	},

	initialize: function () {
		this.model.on('change', this.render, this);
		this.render();
	},
	render: function () {
		this.$el.append(this.template(this.model.toJSON()));
	},

	chosen: function () {
		console.log("bim");
		console.log(this.model.toJSON());
	}

});

