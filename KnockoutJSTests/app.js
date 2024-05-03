// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    var that = this;
    that.firstName = ko.observable("Bert");
    that.lastName = ko.observable("Bertington");
    that.friends = ko.observableArray([new Friend("Scott"), new Friend("Annie")]);
    that.addFriend = function(){
        that.friends.unshift(new Friend());
    };
    
    function Friend(name){
        var self = this;
        self.name = ko.observable(name);
        self.remove = function(friend){
            this.friends.remove(friend);
        }.bind(that);
    }
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());

$('body').on('click', (ev) => {
    if($(ev.target).attr('class') === 'popover'){
        $(ev.target).find('#closeBtn').click();
    }
});