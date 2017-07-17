


var ViewModel = function() {

	var self = this;

	self.clickCount = ko.observable(0);
	self.name = ko.observable('Tabby');
	self.catlevel = ko.observable('NewBorn');
	self.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
	self.imgAttribution = ko.observable('22252709_010df3379e_z.jpg');


	self.incrementCounter = function() {
		self.clickCount(self.clickCount() +1);
		var count = 0;
		count++;	
	};

	self.catlevel = ko.computed(function(){

		var title = self.catlevel;
		var clicks = self.clickCount;
		if (clicks < 10) {
			return title;
		}





	});




}

ko.applyBindings(new ViewModel)