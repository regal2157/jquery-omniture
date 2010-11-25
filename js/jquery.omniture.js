(function( $ ) {
  $.fn.Omniture = function( config ) {
    var defaults = {
      /* Generic defaults */
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
      if (typeof(s) == 'undefined' || !s) return false;
      if (typeof(pattern) != 'string') return false;

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
      if (typeof(s) == 'undefined' || !s) return false;
      if (typeof(element) != 'object') return false;
      if (typeof(event) != 'string') return false;
      if (typeof(fn) != 'function' || typeof(fn) != 'object') return false;
      
      $(element).bind(event, function() {

        var properties = null;
        if (typeof(fn) == 'function') {
          var clicked = $(this);
          properties = fn(clicked);
        } else if (typeof(fn) == 'object') {
          properties = fn;
        }
        
        var linkVars = [];
        var linkEvents = [];

        var tmp = {};
        for (key in properties) {
          if (key.indexOf("prop" == 0) || key.indexOf("eVar" == 0)) linkVars.push(key);
          if (key.indexOf("event") == 0) linkEvents.push(key);          
          tmp[key] = s[key];
          s[key] = properties[key];
        }
        
        s.linkTrackVars = linkVars.length ? linkVars.join(",") : "None";
        s.linkTrackEvents = linkEvents.length ? linkEvents.join(",") : "None";
          
        if (typeof(clicked) != 'undefined' || clicked.attr("href")) {
          s.tl(this.href, 'o');
        } else {
          s.tl();
        }
        
        for (key in tmp) {
          s[key] = tmp[key];
        }
        
      });



    };
    
    return this;
  };
})( jQuery );