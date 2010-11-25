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
(function($) {
  $.omniture('pageview', /^/, { pageName: "company:home" });
  $.omniture('pageview', /about/, function(params) {
    return {
      
    };
  });

  $.omniture('link', '#btn-register', 'click', function() {
    return {
      eVar2: "evar2 is set",
      prop1: "prop1 is set to"
    };
  });
  
  /*
  $.omniture({
    pages: [
      { //homepage
        pattern: /^/, 
        properties: function() {
          return {
            pageName: "companyName:home"
          };
        }
      },
      { //about 
        pattern: /about/,
        properties: {
          pageName: "companyName:about"
        }
      },
      { //register 
        pattern: /register/,
        properties: {
          pageName: "companyName:register"
        }
      }
    ],
    links: [
      {
        pattern: "a.btn-register",
        event: "click",
        properties: function(caller) {
          return {
            prop1: caller.title,
            eVar2: caller.href
          };
        }
      }
    ]
  });
  
  */
})(jQuery);