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
	template: _.template($('#NoteEntryTemplate').html()),

	events: {
	//	"click .media-body" : "chosen"
	},

	initialize: function () {
		//this.model.on('change', this.render, this);
		this.render();

	},
	render: function () {
		this.$el.append(this.template(this.model.toJSON()));
		var that = this;
		$('#Note'+this.model.id).click(function(){
			that.chosen();
		});
	},

	chosen: function () {
		console.log(this.model);
	}

});

var NoteEntryView = Backbone.View.extend({
	template: _.template($('#NoteEntryTemplate').html()),

	events: {
		//	"click .media-body" : "chosen"
	},

	initialize: function () {
		//this.model.on('change', this.render, this);
		this.render();

	},
	render: function () {
		this.$el.append(this.template(this.model.toJSON()));
		var that = this;
		$('#Note'+this.model.id).click(function(){
			that.chosen();
		});
	},

	chosen: function () {
		$("#writingpane").val(this.model.get("value"));
	}

});

var NoteView = Backbone.View.extend({
	template: _.template("<div id=#<%= id %></div>"),

	events: {
		//	"click .media-body" : "chosen"
	},

	initialize: function () {
		//this.model.on('change', this.render, this);
		this.render();

	},
	render: function () {
		var el = $("#writingpane");
		this.el.append(this.template(this.model.toJSON()));
		var that = this;
		$('#Note'+this.model.id).click(function(){
			that.chosen();
		});
	},

	chosen: function () {
		$("#writingpane").val(this.model.get("value"));
	}

});
