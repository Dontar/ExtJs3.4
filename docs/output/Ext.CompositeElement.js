/*
 * This file is part of Ext JS 3.4
 * 
 * Copyright (c) 2011-2013 Sencha Inc
 * 
 * Contact: http://www.sencha.com/contact
 * 
 * GNU General Public License Usage This file may be used under the terms of the
 * GNU General Public License version 3.0 as published by the Free Software
 * Foundation and appearing in the file LICENSE included in the packaging of
 * this file.
 * 
 * Please review the following information to ensure the GNU General Public
 * License version 3.0 requirements will be met:
 * http://www.gnu.org/copyleft/gpl.html.
 * 
 * If you are unsure which license is appropriate for your use, please contact
 * the sales department at http://www.sencha.com/contact.
 * 
 * Build date: 2013-04-03 15:07:25
 */
Ext.data.JsonP.Ext_CompositeElement({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": "Ext.CompositeElementLite",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.CompositeElementLite' rel='Ext.CompositeElementLite' class='docClass'>Ext.CompositeElementLite</a><div class='subclass '><strong>Ext.CompositeElement</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/CompositeElement.html#Ext-CompositeElement' target='_blank'>CompositeElement.js</a></div></pre><div class='doc-contents'><p>This class encapsulates a <i>collection</i> of DOM elements, providing methods to filter\nmembers, or to perform collective actions upon the whole set.</p>\n\n\n<p>Although they are not listed, this class supports all of the methods of <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> and\n<a href=\"#!/api/Ext.Fx\" rel=\"Ext.Fx\" class=\"docClass\">Ext.Fx</a>. The methods from these classes will be performed on all the elements in this collection.</p>\n\n\n<p>All methods return <i>this</i> and can be chained.</p>\n\n\n<p>Usage:</p>\n\n<pre><code>var els = <a href=\"#!/api/Ext-method-select\" rel=\"Ext-method-select\" class=\"docClass\">Ext.select</a>(\"#some-el div.some-class\", true);\n// or select directly from an existing element\nvar el = <a href=\"#!/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a>('some-el');\nel.select('div.some-class', true);\n\nels.setWidth(100); // all elements become 100 width\nels.hide(true); // all elements fade out and hide\n// or\nels.setWidth(100).hide(true);\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-elements' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.CompositeElementLite' rel='Ext.CompositeElementLite' class='defined-in docClass'>Ext.CompositeElementLite</a><br/><a href='source/CompositeElementLite.html#Ext-CompositeElementLite-property-elements' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElementLite-property-elements' class='name expandable'>elements</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span></div><div class='description'><div class='short'>The Array of DOM elements which this CompositeElement encapsulates. ...</div><div class='long'><p>The Array of DOM elements which this CompositeElement encapsulates. Read-only.</p>\n\n\n<p>This will not <i>usually</i> be accessed in developers' code, but developers wishing\nto augment the capabilities of the CompositeElementLite class may use it when adding\nmethods to the class.</p>\n\n\n<p>For example to add the <code>nextAll</code> method to the class to <b>add</b> all\nfollowing siblings of selected elements, the code would be</p>\n\n\n<p><code></p>\n\n<pre><a href=\"#!/api/Ext-method-override\" rel=\"Ext-method-override\" class=\"docClass\">Ext.override</a>(<a href=\"#!/api/Ext.CompositeElementLite\" rel=\"Ext.CompositeElementLite\" class=\"docClass\">Ext.CompositeElementLite</a>, {\n    nextAll: function() {\n        var els = this.elements, i, l = els.length, n, r = [], ri = -1;\n\n//      Loop through all elements in this Composite, accumulating\n//      an Array of all siblings.\n        for (i = 0; i < l; i++) {\n            for (n = els[i].nextSibling; n; n = n.nextSibling) {\n                r[++ri] = n;\n            }\n        }\n\n//      Add all found siblings to this Composite\n        return this.add(r);\n    }\n});</pre>\n\n\n<p></code></p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.CompositeElement'>Ext.CompositeElement</span><br/><a href='source/CompositeElement.html#Ext-CompositeElement-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.CompositeElement-method-constructor' class='name expandable'>Ext.CompositeElement</a>( <span class='pre'>els, root</span> ) : <a href=\"#!/api/Ext.CompositeElement\" rel=\"Ext.CompositeElement\" class=\"docClass\">Ext.CompositeElement</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>els</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>root</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.CompositeElement\" rel=\"Ext.CompositeElement\" class=\"docClass\">Ext.CompositeElement</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-add' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.CompositeElementLite' rel='Ext.CompositeElementLite' class='defined-in docClass'>Ext.CompositeElementLite</a><br/><a href='source/CompositeElementLite.html#Ext-CompositeElementLite-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElementLite-method-add' class='name expandable'>add</a>( <span class='pre'>els</span> ) : CompositeElement</div><div class='description'><div class='short'>Adds elements to this Composite object. ...</div><div class='long'><p>Adds elements to this Composite object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>els</span> : Mixed<div class='sub-desc'><p>Either an Array of DOM elements to add, or another Composite object who's elements should be added.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>CompositeElement</span><div class='sub-desc'><p>This Composite object.</p>\n</div></li></ul></div></div></div><div id='method-clear' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.CompositeElementLite' rel='Ext.CompositeElementLite' class='defined-in docClass'>Ext.CompositeElementLite</a><br/><a href='source/CompositeElementLite.html#Ext-CompositeElementLite-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElementLite-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Removes all elements. ...</div><div class='long'><p>Removes all elements.</p>\n</div></div></div><div id='method-contains' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.CompositeElementLite' rel='Ext.CompositeElementLite' class='defined-in docClass'>Ext.CompositeElementLite</a><br/><a href='source/CompositeElementLite-more.html#Ext-CompositeElementLite-method-contains' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElementLite-method-contains' class='name expandable'>contains</a>( <span class='pre'>el</span> ) : Object</div><div class='description'><div class='short'>Returns true if this composite contains the passed element ...</div><div class='long'><p>Returns true if this composite contains the passed element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'><p>{Mixed} The id of an element, or an <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>, or an HtmlElement to find within the composite collection.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Boolean</p>\n</div></li></ul></div></div></div><div id='method-each' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.CompositeElementLite' rel='Ext.CompositeElementLite' class='defined-in docClass'>Ext.CompositeElementLite</a><br/><a href='source/CompositeElementLite.html#Ext-CompositeElementLite-method-each' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElementLite-method-each' class='name expandable'>each</a>( <span class='pre'>fn, [scope]</span> ) : CompositeElement</div><div class='description'><div class='short'>Calls the passed function for each element in this composite. ...</div><div class='long'><p>Calls the passed function for each element in this composite.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The function to call. The function is passed the following parameters:<ul>\n<li><b>el</b> : Element<div class=\"sub-desc\">The current Element in the iteration.\n<b>This is the flyweight (shared) <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> instance, so if you require a\na reference to the dom node, use el.dom.</b></div></li>\n<li><b>c</b> : Composite<div class=\"sub-desc\">This Composite object.</div></li>\n<li><b>idx</b> : Number<div class=\"sub-desc\">The zero-based index in the iteration.</div></li>\n</ul></p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<i>this</i> reference) in which the function is executed. (defaults to the Element)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>CompositeElement</span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-fill' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.CompositeElementLite' rel='Ext.CompositeElementLite' class='defined-in docClass'>Ext.CompositeElementLite</a><br/><a href='source/CompositeElementLite.html#Ext-CompositeElementLite-method-fill' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElementLite-method-fill' class='name expandable'>fill</a>( <span class='pre'>els</span> ) : CompositeElement</div><div class='description'><div class='short'>Clears this Composite and adds the elements passed. ...</div><div class='long'><p>Clears this Composite and adds the elements passed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>els</span> : Mixed<div class='sub-desc'><p>Either an array of DOM elements, or another Composite from which to fill this Composite.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>CompositeElement</span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-filter' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.CompositeElementLite' rel='Ext.CompositeElementLite' class='defined-in docClass'>Ext.CompositeElementLite</a><br/><a href='source/CompositeElementLite.html#Ext-CompositeElementLite-method-filter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElementLite-method-filter' class='name expandable'>filter</a>( <span class='pre'>selector</span> ) : CompositeElement</div><div class='description'><div class='short'>Filters this composite to only elements that match the passed selector. ...</div><div class='long'><p>Filters this composite to only elements that match the passed selector.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>A string CSS selector or a comparison function.\nThe comparison function will be called with the following arguments:<ul>\n<li><code>el</code> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><div class=\"sub-desc\">The current DOM element.</div></li>\n<li><code>index</code> : Number<div class=\"sub-desc\">The current index within the collection.</div></li>\n</ul></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>CompositeElement</span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-first' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.CompositeElementLite' rel='Ext.CompositeElementLite' class='defined-in docClass'>Ext.CompositeElementLite</a><br/><a href='source/CompositeElementLite-more.html#Ext-CompositeElementLite-method-first' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElementLite-method-first' class='name expandable'>first</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Returns the first Element ...</div><div class='long'><p>Returns the first Element</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCount' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.CompositeElementLite' rel='Ext.CompositeElementLite' class='defined-in docClass'>Ext.CompositeElementLite</a><br/><a href='source/CompositeElementLite.html#Ext-CompositeElementLite-method-getCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElementLite-method-getCount' class='name expandable'>getCount</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the number of elements in this Composite. ...</div><div class='long'><p>Returns the number of elements in this Composite.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Number</p>\n</div></li></ul></div></div></div><div id='method-getElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.CompositeElement'>Ext.CompositeElement</span><br/><a href='source/CompositeElement.html#Ext-CompositeElement-method-getElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElement-method-getElement' class='name expandable'>getElement</a>( <span class='pre'>el</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-importElementMethods' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.CompositeElementLite' rel='Ext.CompositeElementLite' class='defined-in docClass'>Ext.CompositeElementLite</a><br/><a href='source/CompositeElementLite.html#Ext-CompositeElementLite-method-importElementMethods' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElementLite-method-importElementMethods' class='name expandable'>importElementMethods</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Copies all of the functions from Ext.Element's prototype onto CompositeElementLite's prototype. ...</div><div class='long'><p>Copies all of the functions from <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>'s prototype onto CompositeElementLite's prototype.\nThis is called twice - once immediately below, and once again after additional <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>\nare added in Ext JS</p>\n</div></div></div><div id='method-indexOf' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.CompositeElementLite' rel='Ext.CompositeElementLite' class='defined-in docClass'>Ext.CompositeElementLite</a><br/><a href='source/CompositeElementLite.html#Ext-CompositeElementLite-method-indexOf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElementLite-method-indexOf' class='name expandable'>indexOf</a>( <span class='pre'>el</span> ) : Object</div><div class='description'><div class='short'>Find the index of the passed element within the composite collection. ...</div><div class='long'><p>Find the index of the passed element within the composite collection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'><p>{Mixed} The id of an element, or an <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>, or an HtmlElement to find within the composite collection.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Number The index of the passed <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> in the composite collection, or -1 if not found.</p>\n</div></li></ul></div></div></div><div id='method-item' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.CompositeElementLite' rel='Ext.CompositeElementLite' class='defined-in docClass'>Ext.CompositeElementLite</a><br/><a href='source/CompositeElementLite.html#Ext-CompositeElementLite-method-item' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElementLite-method-item' class='name expandable'>item</a>( <span class='pre'>index</span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Returns a flyweight Element of the dom element object at the specified index ...</div><div class='long'><p>Returns a flyweight Element of the dom element object at the specified index</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-last' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.CompositeElementLite' rel='Ext.CompositeElementLite' class='defined-in docClass'>Ext.CompositeElementLite</a><br/><a href='source/CompositeElementLite-more.html#Ext-CompositeElementLite-method-last' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElementLite-method-last' class='name expandable'>last</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Returns the last Element ...</div><div class='long'><p>Returns the last Element</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.CompositeElementLite' rel='Ext.CompositeElementLite' class='defined-in docClass'>Ext.CompositeElementLite</a><br/><a href='source/CompositeElementLite-more.html#Ext-CompositeElementLite-method-removeElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElementLite-method-removeElement' class='name expandable'>removeElement</a>( <span class='pre'>el, [removeDom]</span> ) : CompositeElement<strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Removes the specified element(s). ...</div><div class='long'><p>Removes the specified element(s).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed<div class='sub-desc'><p>The id of an element, the Element itself, the index of the element in this composite\nor an array of any of those.</p>\n</div></li><li><span class='pre'>removeDom</span> : Boolean (optional)<div class='sub-desc'><p>True to also remove the element from the document</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>CompositeElement</span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-replaceElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.CompositeElementLite' rel='Ext.CompositeElementLite' class='defined-in docClass'>Ext.CompositeElementLite</a><br/><a href='source/CompositeElementLite.html#Ext-CompositeElementLite-method-replaceElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElementLite-method-replaceElement' class='name expandable'>replaceElement</a>( <span class='pre'>el, replacement, [domReplace]</span> ) : CompositeElement<strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Replaces the specified element with the passed element. ...</div><div class='long'><p>Replaces the specified element with the passed element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed<div class='sub-desc'><p>The id of an element, the Element itself, the index of the element in this composite\nto replace.</p>\n</div></li><li><span class='pre'>replacement</span> : Mixed<div class='sub-desc'><p>The id of an element or the Element itself.</p>\n</div></li><li><span class='pre'>domReplace</span> : Boolean (optional)<div class='sub-desc'><p>True to remove and replace the element in the document too.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>CompositeElement</span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-transformElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.CompositeElement'>Ext.CompositeElement</span><br/><a href='source/CompositeElement.html#Ext-CompositeElement-method-transformElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.CompositeElement-method-transformElement' class='name expandable'>transformElement</a>( <span class='pre'>el</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>",
    "superclasses": ["Ext.CompositeElementLite"],
    "meta": {},
    "requires": [],
    "html_meta": {},
    "statics": {
        "property": [],
        "cfg": [],
        "css_var": [],
        "method": [],
        "event": [],
        "css_mixin": []
    },
    "files": [{
        "href": "CompositeElement.html#Ext-CompositeElement",
        "filename": "CompositeElement.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.CompositeElementLite",
            "meta": {},
            "name": "elements",
            "id": "property-elements"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.CompositeElement",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.CompositeElementLite",
            "meta": {},
            "name": "add",
            "id": "method-add"
        }, {
            "tagname": "method",
            "owner": "Ext.CompositeElementLite",
            "meta": {},
            "name": "clear",
            "id": "method-clear"
        }, {
            "tagname": "method",
            "owner": "Ext.CompositeElementLite",
            "meta": {},
            "name": "contains",
            "id": "method-contains"
        }, {
            "tagname": "method",
            "owner": "Ext.CompositeElementLite",
            "meta": {},
            "name": "each",
            "id": "method-each"
        }, {
            "tagname": "method",
            "owner": "Ext.CompositeElementLite",
            "meta": {},
            "name": "fill",
            "id": "method-fill"
        }, {
            "tagname": "method",
            "owner": "Ext.CompositeElementLite",
            "meta": {},
            "name": "filter",
            "id": "method-filter"
        }, {
            "tagname": "method",
            "owner": "Ext.CompositeElementLite",
            "meta": {},
            "name": "first",
            "id": "method-first"
        }, {
            "tagname": "method",
            "owner": "Ext.CompositeElementLite",
            "meta": {},
            "name": "getCount",
            "id": "method-getCount"
        }, {
            "tagname": "method",
            "owner": "Ext.CompositeElement",
            "meta": {
                "private": true
            },
            "name": "getElement",
            "id": "method-getElement"
        }, {
            "tagname": "method",
            "owner": "Ext.CompositeElementLite",
            "meta": {
                "private": true
            },
            "name": "importElementMethods",
            "id": "method-importElementMethods"
        }, {
            "tagname": "method",
            "owner": "Ext.CompositeElementLite",
            "meta": {},
            "name": "indexOf",
            "id": "method-indexOf"
        }, {
            "tagname": "method",
            "owner": "Ext.CompositeElementLite",
            "meta": {},
            "name": "item",
            "id": "method-item"
        }, {
            "tagname": "method",
            "owner": "Ext.CompositeElementLite",
            "meta": {},
            "name": "last",
            "id": "method-last"
        }, {
            "tagname": "method",
            "owner": "Ext.CompositeElementLite",
            "meta": {
                "chainable": true
            },
            "name": "removeElement",
            "id": "method-removeElement"
        }, {
            "tagname": "method",
            "owner": "Ext.CompositeElementLite",
            "meta": {
                "chainable": true
            },
            "name": "replaceElement",
            "id": "method-replaceElement"
        }, {
            "tagname": "method",
            "owner": "Ext.CompositeElement",
            "meta": {
                "private": true
            },
            "name": "transformElement",
            "id": "method-transformElement"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.CompositeElement",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.CompositeElement",
    "mixins": [],
    "mixedInto": []
});