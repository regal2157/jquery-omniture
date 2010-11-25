(function($) {
  $.extend({
    stack: null,
    //trackPages: communicates with s.t() (page view transaction in Omniture)
    trackPages: function(pages) {
      var metricsProperties = {};      
      $(pages).each(function(index, page) {
        var pattern = page.pattern;
        var properties = page.properties;
        if (typeof(pattern) == "string") {
          //We're a css selector, so we try to find the selector on the current page, match it, map it.
          var currentPage = $(pattern);
          if(currentPage) {
            metricsProperties = properties;
          }
        } else if (typeof(pattern) == "function" || typeof(pattern) == "object") {
          var regex = new RegExp(pattern);
          if(regex.test(window.location.href)) {
            if(typeof(properties) == "function") {
              properties = properties();
            }
            metricsProperties = properties;
          }
        } else {
          throw new Error("ERROR: Pages contains invalid pattern");
        }
      });
      for (key in metricsProperties) {
        s[key] = metricsProperties[key];
      }
      s.t();
    },
    //trackLinks: communication with s.tl() (pseudo transaction) for omniture
    trackLinks: function(links) {
      console.log("------ LINK TRACKING ------");
      $(links).each(function(index, link) {


      });
    },
    omniture: function(map) {
      if (!map.pages || !map.links) return false;
      this.trackPages(map.pages);
      this.trackLinks(map.links);      
      return this;

    }
  });
})(jQuery);