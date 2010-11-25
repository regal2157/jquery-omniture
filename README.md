# jQuery Omniture Plugin

Provides a convenient way for developers to add SiteCatalyst/Omniture tracking to pages and DOM elements.

## Tutorial

All you need to do is pass an object into $.omniture({}) with your specifications. 

"pages" is an array of pages that you want track. As you can see there's an item for home, about, and register. These entries correspond to regex being used against the window.location. In the end, this calls s.t(), which is Omniture API call for a page view.

"links" is a mapping for DOM elements that you want to track. For example, if a user clicked a promotion module, you'd want to track this in Omniture through their pseudo request API call (s.tl).

<code>
$(document).ready(function() {
  var omniture = $(document).Omniture();
});
</code>

## Limitations

* Does not provide the ability to observe custom objects or events

## MIT Licence

jQuery Omniture Plugin

Copyright (c) 2010 Jaime Bueza

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