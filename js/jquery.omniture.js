(function( $ ) {
  $.fn.Omniture = function( config ) {
    var defaults = {
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
    
    if ( config ) $.extend(defaults, config);
    
    this.view = function(pattern, fn) {
      if(!s || typeof(s) == 'undefined') throw new Error("omniture tracking object does not exist");      
      if (typeof(pattern) != 'string') throw new Error("invalid 'pattern': this argument must be a string");

      var properties = null;
      if (typeof(fn) == 'function') {
        properties = fn();
      } else if (typeof(fn) == 'object') {
        properties = fn;
      }
      
      pattern = new RegExp(pattern);
      
      if (pattern.test(window.location.href)) {
        $.extend(s, properties);
        s.t();
      }
    };
    
    this.link = function(element, event, fn) {
      if(!s || typeof(s) == 'undefined') throw new Error("omniture tracking object does not exist");
      
      return function(pattern) {
        console.debug("s.tl() pseudo request has been invoked.");
      };
    };
    return this;
  };
})( jQuery );