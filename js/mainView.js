var mainView = function(jdelm,model,controller) {
	var that=this;
	this.jdelm = jdelm;
	this.model = model;
	model.attach(this);
	this.eventviews = [];
	
	this.initiate = function() {
		debugger;
		that.jdelm.html("");
		that.eventviews = [];
		for(var key in mainPlaylist){
			temp1=$("</p>");
			that.eventviews.push(new EventView(temp1,mainPlaylist[key],null,new EventController2()));
			that.jdelm.append(temp1);
		  	//that.jdelm.append($("</p>").html(restaurants[i].getEvents()[0]).click(function(){alert("hej");}));
		}
	}
	this.update = function(param) {
		for(var key in that.eventviews) {
			that.eventviews[key].update();
		}
	}
	
}

var EventView = function(jdelm,sportevent,model,controller) {
	var that=this;
	this.jdelm = jdelm;
	this.visible = true;
	this.sportevent = sportevent;
	this.controller = controller;
	this.jdelm.prop({"id":"sportevent_"+sportevent.id,"class":"eventview"});
	this.jdelm.html(that.sportevent.description);
	this.restaurantviews = [];
	this.controller.initiateControls(this);
	
	this.update = function() {
		that.jdelm.html("");
		that.jdelm.prop("id","sportevent_"+that.sportevent.id);
		that.jdelm.append($("<div>").prop("class","header eventinfo_short "+that.sportevent.type+"_event").html(that.sportevent.description+"  "+that.sportevent.team["hometeam"]+"VS"+that.sportevent.team["visitingteam"]));
		that.jdelm.append(that.createListView());
	}
	
	this.createListView = function() {
		var listview = $("<ul>").prop("class","restaurant_listview");
		for(var key in that.sportevent.subscribers) {
			listview.append(that.createRestaurantView(that.sportevent.subscribers[key]));
		}
		return listview;
	}
	
	this.createRestaurantView = function(restaurant) {
		var restaurantview = $("<li>").prop("id",restaurant.id).html(restaurant.name);
		restaurantview.append(that.createCampaignView(restaurant.campaigns));
		return restaurantview;
	}
	
	this.createCampaignView = function(campaigns) {
		return $("<span>").prop("class","campaignview");
	}
}

var RestaurantInListView = function(jdelm,restaurant,controller) {
	
}


