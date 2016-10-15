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

	save : function (str) {
		this.set('value', str);
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
		new NoteView({model:this.model, el: $("#wrap")});
	}

});

var NoteView = Backbone.View.extend({
	template: _.template($('#WritingTemplate').html()),

	initialize: function () {
		this.render();

	},
	render: function () {
		var that = this;
		this.$el.html(this.template(this.model.toJSON()));
		$('#ButtonSave'+this.model.id).click(function(){
			that.save();
		});
	},

	save:function () {

		var text = $("#writingpane").val();
		console.log(this.model.get("value"));
		this.model.save(text);
		console.log(this.model.get("value"));

	}


});
