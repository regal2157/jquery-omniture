$.omniture = function( config ) {
  var defaults = {
    // Generic Defaults
    pageName : "Home"
    // Define what defaults you want here, if you want.
    /*
    channel : "",
    pageType : "",
    prop1 : "",
    prop2 : "",
    
    // ECOM Variables
    state : "",
    zip : "",
    events : "",
    products : "",
    purchaseID : "",
    eVar1 : "",
    eVar2 : ""
    */
  };

  if( config )
    $.extend(defaults, config);

  /**
   * Provides the capability to apply pageview metrics to a particular action.
   * @param { obj } config
   */
  this.view = function( viewConfig ) {
    if( typeof(s) == 'undefined' || !s ) return false;

    if( viewConfig )
      $.extend(defaults, viewConfig);

    var properties = defaults;
    
    $.extend(s, properties);

    var s_code = s.t();
    /*
    if( s_code ) document.write(s_code);
    if( navigator.appVersion.indexOf('MSIE') >= 0) document.write(unescape('%3C')+'\!-'+'-');
    */
  }

  /**
   * Provides the capability to execute pseudo synchronous requests (img) to Omniture.
   * @param { obj } linkConfig
   * @param { string } linkName
   * @param { string } linkType : options are e, o, d [exit, other, download]
   */
  this.link = function ( linkConfig, linkName, linkType ) {
    if(typeof(s) == 'undefined' || !s) return false;

    if( linkConfig )
      $.extend(defaults, linkConfig);

    var properties = defaults;
    var linkVars = [];
    var linkEvents = [];
    var tmp = {};

    for( key in properties ) {
      if( key.indexOf("prop" == 0) || key.indexOf("eVar" == 0))
        linkVars.push(key);
      if( key.indexOf("event") == 0)
        linkEvents.push(key);
      tmp[key] = s[key];
      s[key] = properties[key];
    }

    if( linkEvents.length )
      linkVars.push('events');

    s.linkTrackVars = linkVars.length ? linkVars.join(",") : "None";
    s.linkTrackEvents = linkEvents.length ? linkEvents.join(",") : "None";

    var lt = this.href!=null?s.lt(this.href):"";
    if(lt == "") { s.tl(this, linkType, linkName) }

    for (key in tmp) {
      s[key] = tmp[key];
    }
  }
  return this;
}