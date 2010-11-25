//mock object for omniture api, usually, they call it "s"
var s = {
  tl: function() { console.log("Pseudo Page Request: ", s); },
  t: function() { console.log("Page View: ", s); }
};
//new way of thinking about omniture routing (much like express)
$(document).ready(function() {
    var defaultOmnitureParams = {
      pageName: "DunderMifflin:Home"
    };
  
    var omniture = $(document).Omniture(defaultOmnitureParams);
    
    //sinatra-style + express-style routing!
    omniture.view("index.html", function() {
      return { pageName: "DunderMifflin:Home", eVar1: "This is eVar1",eVar2: "This is eVar2" };
    });
    omniture.view("about.html", function() {
      return { pageName: "DunderMifflin:About", eVar1: "This is eVar1",eVar2: "This is eVar2" };
    });
    omniture.view("register.html", function() {
      return { pageName: "DunderMifflin:Register", eVar1: "This is eVar1",eVar2: "This is eVar2" };
    });
    
    omniture.link($("a"), "click", function(element) {
      return { event2: "login", prop3: element.attr('title'), eVar4: "evar4" };
    });

});