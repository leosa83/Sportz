
var restaurantNames = [ "Bjork", "Tall", "Ek"];
var sportevents = ["test1","test2","test3"];
var mainPlaylist = {};
var nrOfEvents =-1;

function nextEventId() {nrOfEvents++; return nrOfEvents;}

var SportEvent = function() {
	debugger;
	var that = this;
	this.id= nextEventId();
	this.description ="nada";
	this.type = "nada";
	this.date="2010";
	this.subscribers = [];
	this.subscribe = function(subscriber) {
		that.subscribers.push(subscriber);
	}
}



function setDate(date) {this.date=date;};
function setType(type) {this.type=type};

var SoccerEvent= function() {
	var sportevent = new SportEvent();
	sportevent.type="soccer";
	sportevent.team = {hometeam:"manchester",visitingteam:"united"};
	mainPlaylist[sportevent.id]=sportevent;
	return sportevent;
}


var Campaign = function() {
	this.id;
	this.owner_id;
	this.description;
}


var restaurant = function(name) {
	var that=this;
	this.name =name;
	this.adress ="";
	this.website="";
	this.playlist = [];
	this.campaigns = [];
	
	this.pushEvent = function(sportEvent) {that.playlist.push(sportEvent); sportEvent.subscribe(that); return that;};
	this.getEvents = function() {return that.playlist;}
	this.pushCampaign = function(campaign) {that.campaigns.push(campaign); return that;};
	this.getCampaigns = function(){return that.campaigns};
}

var model = function() {
	var that = this;
	this.playlist = [];
	this.listeners = [];
	this.restaurants = [];
	this.pushRestaurant = function(restaurant){that.restaurants.push(restaurant);};
	this.getRestaurants = function(){return that.restaurants;}
	this.getCampaigns = function() {
		var out = new Array();
		var temp=null;
		for(var i=0,j=that.restaurants.length; i<j; i++){
		  temp=that.restaurants[i].getCampaigns();
		  for(var i=0,j=temp.length; i<j; i++){
			out.push(temp[i]);
		  };
		};
		return out;
	}
	this.getEvents = function() {
		return that.playlist;
	}
	
	this.attach = function(observer) {that.listeners.push(observer);}
	this.notifyChange = function(param) {
		for(var i=0,j=that.listeners.length; i<j; i++){
		  that.listeners[i].update(that,param);
		}
	}	
}


var createTestData = function(model) {
	for(var i=0,j=restaurantNames.length; i<j; i++){
	  model.pushRestaurant(new restaurant(restaurantNames[i]).pushEvent(new SoccerEvent()));
	}
}
