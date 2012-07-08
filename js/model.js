
var restaurantNames = [ "Bjork", "Tall", "Ek"];
var sportevents = ["test1","test2","test3"];

var sportEvent = function() {
	var _this = this;
	this.id="";
	this.description ="";
	this.type = type;
	this.date = date;
	this.time="";
	
	this.setDate = function(date) {_this.date=date;};
	this.setType = function(type){_this.type=type;};
	
};


var campaign = function() {
	this.description="";
};


var restaurant = function(name) {
	var _this=this;
	this.name =name;
	this.adress ="";
	this.website="";
	this.playlist = new Array();
	this.campaigns = new Array();
	
	this.pushEvent = function(sportEvent) {_this.playlist.push(sportEvent); return _this;};
	this.getEvents = function() {return _this.playlist;}
	this.pushCampaign = function(campaign) {_this.campaigns.push(campaign); return _this;};
	this.getCampaigns = function(){return _this.campaigns};
}

var model = function() {
	var _this = this;
	this.restaurants = new Array();
	this.pushRestaurant = function(restaurant){_this.restaurants.push(restaurant);};
	this.getRestaurants = function(){return _this.restaurants;};
	this.getCampaigns = function() {
		var out = new Array();
		var temp=null;
		for(var i=0,j=_this.restaurants.length; i<j; i++){
		  temp=_this.restaurants[i].getCampaigns();
		  for(var i=0,j=temp.length; i<j; i++){
			out.push(temp[i]);
		  };
		};
		return out;
	};
};

var createTestData = function(model) {
	for(var i=0,j=restaurantNames.length; i<j; i++){
	  model.pushRestaurant(new restaurant(restaurantNames[i]).pushEvent(sportevents[i%2]));
	};
}
