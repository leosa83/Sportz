var mainView = function(parent,model) {
	var _this=this;
	this.parent = parent;
	this.model = model;
	
	this.update = function() {
		
		restaurants = _this.model.getRestaurants();
		for(var i=0,j=restaurants.length; i<j; i++){
		  parent.append($("</p>").html(restaurants[i].name));
		  parent.append($("</p>").html(restaurants[i].getEvents()[0]));
		  debugger;
		};
	}
	
};



