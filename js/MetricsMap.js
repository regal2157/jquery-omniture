//mock object for omniture api, usually, they call it "s"
var s = {
  tl: function() {
    console.log("Pseudo Page Request");
  },
  t: function() {
    console.log("Page View");
  }
};
//new way of thinking about omniture routing


$(document).ready(function() {
    var defaultOmnitureParams = {
      pageName: "Home",
      server: "",
      channel: "",
      pageType: "",
      prop1: "",
      prop2: "",
      /* eCommerce Variables */
      state: "",
      zip: "",
      events: "",
      products: "",
      purchaseID: "",
      eVar1: "",
      eVar2: ""
    };
  
    var omniture = $(document).Omniture(defaultOmnitureParams);
    //sinatra-style + express-style routing!
    omniture.view("index.html", function() {
      return { pageName: "CompanySite:Home", eVar1: "This is eVar1",eVar2: "This is eVar2" };
    });
    omniture.view("about.html", function() {
      return { pageName: "CompanySite:About", eVar1: "This is eVar1",eVar2: "This is eVar2" };
    });
    omniture.view("register.html", function() {
      return { pageName: "CompanySite:Register", eVar1: "This is eVar1",eVar2: "This is eVar2" };
    });
    
    omniture.link($(".btn"), "click", function() {
      console.log(this);
    });

});