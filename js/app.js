var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/1413379559_412a540d29_z.jpg');
	this.imgAttribution = ko.observable('https:www.flickr.com/photos/');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
	var self = this;

    self.nickNames = ko.observableArray([
        { nickName: 'Bart' },
        { nickName: 'Henri' },
        { nickName: 'Fluffy' },
        { nickName: 'Olan' },
        { nickName: 'Fern' },
    ]);

}
ko.applyBindings(new ViewModel());
