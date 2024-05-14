$(document).ready(function() {
    $('.select-over-select2').select2();
    SetMultiSelectPlaceholder();
});

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
  var that = this;
  that.firstName = ko.observable("Bert");
  that.lastName = ko.observable("Bertington");
  that.friends = ko.observableArray([new Friend("Scott"), new Friend("Annie")]);
  that.addFriend = function () {
    that.friends.unshift(new Friend());
  };

  that.ExportVariables = ko.observableArray();
  that.ExportVariablesSelected = ko.observableArray();

  function Friend(name) {
    var self = this;
    self.name = ko.observable(name);
    self.remove = function (friend) {
      this.friends.remove(friend);
    }.bind(that);
  }

  that.getVariables = async function fetchVariables() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    
    for (const item of data) {
      that.ExportVariables.push(new Variable(item));
    }
  };

  function Variable(obj) {
    var self = this;
    self.id = obj.id || '';
    self.name = `(${obj.id}) ${obj.email} (${obj.phone})`;
    self.description = obj.name || '';
    self.remove = function (item) {
        this.ExportVariablesSelected.remove(item);
        $('.select-over-select2').trigger('change');
        if(!this.ExportVariablesSelected().length){
            SetMultiSelectPlaceholder();
        }
      }.bind(that);
  }
}

uiModel = new AppViewModel();
// Activates knockout.js
ko.applyBindings(uiModel);

$("#app").on("click", (ev) => {
  if ($(ev.target).attr("class") === "popover") {
    $(ev.target).find("#closeBtn").click();
  }
});

// Select the node that will be observed for mutations
const targetNode = document.getElementById("app");

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
const mutationCall = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.addedNodes[0]) {
        for (const key in mutation.addedNodes) {
            if(mutation.addedNodes[key]?.className?.includes("select2-results__message")){
                mutation.addedNodes[key].textContent = "  Няма намерени резултати"
            }
        }
    }
    if(mutation.removedNodes[0]){
        for (const key in mutation.removedNodes) {
            if(mutation.removedNodes[key]?.className?.includes("select2-container--open") && !uiModel.ExportVariablesSelected()?.length){
                SetMultiSelectPlaceholder()
            }
        }
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(mutationCall);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

function SetMultiSelectPlaceholder() {
    $('.select2-search__field').attr("placeholder", "  -- Изберете --");
}
