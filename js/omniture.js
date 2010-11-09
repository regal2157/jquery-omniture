//mock object for omniture api, usually, they call it "s"
var s = {
  tl: function() {
    console.log("Pseudo Page Request");
  },
  t: function() {
    console.log("Page View");
  }
};

(function($) {
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
})(jQuery);