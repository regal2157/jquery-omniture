# jQuery Omniture Plugin

Provides a convenient way for developers to add SiteCatalyst/Omniture tracking to pages and DOM elements. This is a modification of Jaime Bueza's plugin. More stripped down, and convienent for my use.

## jQuery Omniture Plugin API

### omniture.view()

Provides the capability to apply pageview metrics to a particular route. This is a facade for <code>s.t()</code>.

* <code>{ obj } options

### omniture.link()

Provides the capability to execute pseudo synchronous requests (img) to Omniture. This is a facade for <code>s.tl()</code>.

* <code> @param { obj } linkConfig
* <code> @param { string } linkName
* <code> @param { string } linkType : options are e, o, d [exit, other, download]

## Example on how to use

<pre>
  $(document).ready(function() {
    var omniture = $.omniture();

    $('#link1').click(function(){
      var options = {
        pageName : "about",
        prop4 : "value",
        channel : "PA US"
      }
      omniture.view( options );
    });

    $('#link2').click(function(){
      var options = {
        prop2 : "value",
        eVar23 : "share button"
      }
      omniture.link( options, 'Link Name', 'o');
    });
  });
</pre>
## MIT Licence

jQuery Omniture Plugin

Copyright (c) 2012 John O'Connell
Old version - Copyright (c) 2010 Jaime Bueza

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.