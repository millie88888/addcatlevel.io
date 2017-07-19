var Cat = function() {

	var self = this;

	self.clickCount = ko.observable(0);
	self.name = ko.observable('Tabby');
	self.catlevel = ko.observable('NewBorn');
	self.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
	self.imgAttribution = ko.observable('22252709_010df3379e_z.jpg');
	
	self.nickName = ko.observableArray([ 'Jojo', 'Tobby', 'Marco', 'Daisy' ]);

	self.catlevel = ko.computed(function(){
		
		var clicks = self.clickCount();
		var title = self.catlevel();

		if (clicks < 10) {
			return "NewBorn ";
		} else if(clicks>=10 && clicks < 15){
			return "Infant";
		}

	});

};






var ViewModel = function() {

	var self = this;

	self.currenCat = ko.observable( new Cat() );

	self.incrementCounter = function() {
		//self.clickCount(self.clickCount() +1);
		self.currenCat().clickCount(self.currenCat().clickCount() +1);
	};


}

ko.applyBindings(new ViewModel);














/*
var ViewModel = function() {

	var self = this;

	self.clickCount = ko.observable(0);
	self.name = ko.observable('Tabby');
	self.catlevel = ko.observable('NewBorn');
	self.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
	self.imgAttribution = ko.observable('22252709_010df3379e_z.jpg');
	
	self.cats = ko.observableArray([ 'Jojo', 'Tobby', 'Marco', 'Daisy' ]);

	self.catlevel = ko.computed(function(){
		
		var clicks = self.clickCount();
		var title = self.catlevel();

		if (clicks < 10) {
			return " ";
		} else if(clicks>=10 && clicks < 15){
			return "Infant";
		}

	});

	self.incrementCounter = function() {
		self.clickCount(self.clickCount() +1);
		var count = 0;
		count++;	
	};



}

ko.applyBindings(new ViewModel);


*/



