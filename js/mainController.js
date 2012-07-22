
var MainController = function(model){
	var that = this;
	this.model = model;
	this.view;
	
	this.searchEvents = function(filters) {
		if(filters==null) {
			that.view.visibleEvents = mainPlaylist;
			that.view.updateSearchResults()
		}
		else {
			if(filters.parameter_event!=null) {
				that.view.setEventVisible(mainPlaylist,false);
				that.view.setEventVisible(filters.parameter_event,true);
			}
		}
	}
}

var EventController = function(eventview) {
	var that = this;
	this.view = eventview;
	this.hide = function() {
		that.view.css("display","none");
		//that.view.toggle();
	}
	this.view.click(function(){that.hide();});
}

var EventController2 = function() {
	var that = this;
	this.view;
	this.initiateControls = function(eventview) {
		that.view = eventview;
		that.view.jdelm.click(function(){that.hide();});
	}
	this.hide = function(){that.view.visible = false; that.view.jdelm.css("display","none");}
}

