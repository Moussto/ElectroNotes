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

    save: function (str) {
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
        this.el = (this.template(this.model.toJSON()));
        var that = this;

    },

    chosen: function () {
        new NoteView({model: this.model, el: $("#wrap")});
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
        $('#ButtonSave' + this.model.id).click(function () {
            that.save();
        });
    },

    save: function () {

        var text = $("#writingpane").val();
        this.model.save(text);

    }


});

var NoteCollection = Backbone.Collection.extend({

    model: NoteModel,

    initialize: function () {
    },

    addNote: function (value, title) {
        var n = new NoteModel({value:value, title:title});
        this.add(n);

    },

    addNote2: function (note) {
        //note.save();
        this.collection.add(note)
    },

    suppr: function (id) {
        var n = this.get(id);
        this.remove(n);
        this.trigger('change', this);
    }

});

var NoteCollectionView =Backbone.View.extend({

    container : "#ulentries",

    initialize:function(){

        $("#ulentries").html("");
        this.collection.on('change', this.render, this);
        this.render();
    },

    render:function(){
        var ncv = this;
        var search = '<li class="list-group-header"><input class="form-control" type="text" placeholder="Search for a note"> </li>';
        $(ncv.container).html("");
        $(ncv.container).append(search);
        this.collection.each(function(n){
            var Nview = new NoteEntryView({model:n});
            $(ncv.container).append(Nview.el);
            $('#Note' + n.get("id")).click(function () {
                console.log("KBN")
                new NoteView({model: n, el: $("#wrap")});
            });
        });

       // $(ncv.container).append(ncv.el);

    }

});

