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
    
    /* 
      Provides the capability to apply pageview metrics to a particular route.
      
      @param { String } pattern
      @param { Function | Object } fn
    */
    this.view = function(pattern, fn) {
      if (!s || typeof(s) == 'undefined') throw new Error("omniture tracking object does not exist");
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
    
    /* 
      Provides the capability to execute pseudo synchronous requests (img) to Omniture.
      
      @param { DOM | String } element
      @param { String } event
      @param { Function | Object } fn
    */
    this.link = function(element, event, fn) {
      if (!s || typeof(s) == 'undefined') throw new Error("omniture tracking object does not exist");
      if (typeof(element) != 'object') throw new Error("invalid 'element': this argument must be an object");
      if (typeof(event) != 'string') throw new Error("invalid 'event': this argument must be a string");
      
      var properties = null;
      if (typeof(fn) == 'function') {
        properties = fn();
      } else if (typeof(fn) == 'object') {
        properties = fn;
      }

      
      $(element).bind(event, function() {
        console.log(this);
        var linkVars = [];
        var linkEvents = [];
        var linkProducts = [];
        
        var tmp = {};
        
        for (key in properties) {
          if(key.indexOf("prop" == 0) || key.indexOf("eVar" == 0)) linkVars.push(key);
          if(key.indexOf("event") == 0) linkEvents.push(key);
          tmp[key] = s[key];
          $.extend(s, properties);
        }
        
        s.linkTrackVars = linkVars.length ? linkVars.join(",") : "None";
        s.linkTrackEvents = linkEvents.length ? linkEvents.join(",") : "None";
        
        console.log(s);
        
        if(this.attr("href")) {
          s.tl(this.href, 'o');
        } else {
          s.tl();
        }
        
        return false;
        
      });



    };
    
    return this;
  };
})( jQuery );