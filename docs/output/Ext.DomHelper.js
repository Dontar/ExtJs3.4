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
Ext.data.JsonP.Ext_DomHelper({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/DomHelper-more.html#Ext-DomHelper' target='_blank'>DomHelper-more.js</a></div><div class='dependency'><a href='source/DomHelper.html#Ext-DomHelper' target='_blank'>DomHelper.js</a></div></pre><div class='doc-contents'><p>The DomHelper class provides a layer of abstraction from DOM and transparently supports creating\nelements via DOM or using HTML fragments. It also has the ability to create HTML fragment templates\nfrom your DOM building code.</p>\n\n\n\n\n<p><b><u>DomHelper element specification object</u></b></p>\n\n\n<p>A specification object is used when creating elements. Attributes of this object\nare assumed to be element attributes, except for 4 special attributes:\n<div class=\"mdetail-params\"><ul>\n<li><b><tt>tag</tt></b> : <div class=\"sub-desc\">The tag name of the element</div></li>\n<li><b><tt>children</tt></b> : or <tt>cn</tt><div class=\"sub-desc\">An array of the\nsame kind of element definition objects to be created and appended. These can be nested\nas deep as you want.</div></li>\n<li><b><tt>cls</tt></b> : <div class=\"sub-desc\">The class attribute of the element.\nThis will end up being either the \"class\" attribute on a HTML fragment or className\nfor a DOM node, depending on whether DomHelper is using fragments or DOM.</div></li>\n<li><b><tt>html</tt></b> : <div class=\"sub-desc\">The innerHTML for the element</div></li>\n</ul></div></p>\n\n\n\n\n<p><b><u>Insertion methods</u></b></p>\n\n\n<p>Commonly used insertion methods:\n<div class=\"mdetail-params\"><ul>\n<li><b><tt><a href=\"#!/api/Ext.DomHelper-method-append\" rel=\"Ext.DomHelper-method-append\" class=\"docClass\">append</a></tt></b> : <div class=\"sub-desc\"></div></li>\n<li><b><tt><a href=\"#!/api/Ext.DomHelper-method-insertBefore\" rel=\"Ext.DomHelper-method-insertBefore\" class=\"docClass\">insertBefore</a></tt></b> : <div class=\"sub-desc\"></div></li>\n<li><b><tt><a href=\"#!/api/Ext.DomHelper-method-insertAfter\" rel=\"Ext.DomHelper-method-insertAfter\" class=\"docClass\">insertAfter</a></tt></b> : <div class=\"sub-desc\"></div></li>\n<li><b><tt><a href=\"#!/api/Ext.DomHelper-method-overwrite\" rel=\"Ext.DomHelper-method-overwrite\" class=\"docClass\">overwrite</a></tt></b> : <div class=\"sub-desc\"></div></li>\n<li><b><tt><a href=\"#!/api/Ext.DomHelper-method-createTemplate\" rel=\"Ext.DomHelper-method-createTemplate\" class=\"docClass\">createTemplate</a></tt></b> : <div class=\"sub-desc\"></div></li>\n<li><b><tt><a href=\"#!/api/Ext.DomHelper-method-insertHtml\" rel=\"Ext.DomHelper-method-insertHtml\" class=\"docClass\">insertHtml</a></tt></b> : <div class=\"sub-desc\"></div></li>\n</ul></div></p>\n\n\n\n\n<p><b><u>Example</u></b></p>\n\n\n<p>This is an example, where an unordered list with 3 children items is appended to an existing\nelement with id <tt>'my-div'</tt>:<br>\n \n<pre><code>var dh = <a href=\"#!/api/Ext.DomHelper\" rel=\"Ext.DomHelper\" class=\"docClass\">Ext.DomHelper</a>; // create shorthand alias\n// specification object\nvar spec = {\n    id: 'my-ul',\n    tag: 'ul',\n    cls: 'my-list',\n    // append children after creating\n    children: [     // may also specify 'cn' instead of 'children'\n        {tag: 'li', id: 'item0', html: 'List Item 0'},\n        {tag: 'li', id: 'item1', html: 'List Item 1'},\n        {tag: 'li', id: 'item2', html: 'List Item 2'}\n    ]\n};\nvar list = dh.append(\n    'my-div', // the context element 'my-div' can either be the id or the actual node\n    spec      // the specification object\n);\n </code></pre></p>\n\n\n<p>Element creation specification parameters in this class may also be passed as an Array of\nspecification objects. This can be used to insert multiple sibling nodes into an existing\ncontainer very efficiently. For example, to add more list items to the example above:\n<pre><code>dh.append('my-ul', [\n    {tag: 'li', id: 'item3', html: 'List Item 3'},\n    {tag: 'li', id: 'item4', html: 'List Item 4'}\n]);\n</code></pre></p>\n\n\n\n\n<p><b><u>Templating</u></b></p>\n\n\n<p>The real power is in the built-in templating. Instead of creating or appending any elements,\n<tt><a href=\"#!/api/Ext.DomHelper-method-createTemplate\" rel=\"Ext.DomHelper-method-createTemplate\" class=\"docClass\">createTemplate</a></tt> returns a Template object which can be used over and over to\ninsert new elements. Revisiting the example above, we could utilize templating this time:\n<pre><code>// create the node\nvar list = dh.append('my-div', {tag: 'ul', cls: 'my-list'});\n// get template\nvar tpl = dh.createTemplate({tag: 'li', id: 'item{0}', html: 'List Item {0}'});\n\nfor(var i = 0; i < 5, i++){\n    tpl.append(list, [i]); // use template to append to the actual node\n}\n</code></pre></p>\n<p>An example using a template:\n<pre><code>var html = '<a id=\"{0}\" href=\"{1}\" class=\"nav\">{2}</a>';\n\nvar tpl = new <a href=\"#!/api/Ext.DomHelper-method-createTemplate\" rel=\"Ext.DomHelper-method-createTemplate\" class=\"docClass\">Ext.DomHelper.createTemplate</a>(html);\ntpl.append('blog-roll', ['link1', 'http://www.jackslocum.com/', \"Jack&#39;s Site\"]);\ntpl.append('blog-roll', ['link2', 'http://www.dustindiaz.com/', \"Dustin&#39;s Site\"]);\n</code></pre></p>\n\n<p>The same example using named parameters:\n<pre><code>var html = '<a id=\"{id}\" href=\"{url}\" class=\"nav\">{text}</a>';\n\nvar tpl = new <a href=\"#!/api/Ext.DomHelper-method-createTemplate\" rel=\"Ext.DomHelper-method-createTemplate\" class=\"docClass\">Ext.DomHelper.createTemplate</a>(html);\ntpl.append('blog-roll', {\n    id: 'link1',\n    url: 'http://www.jackslocum.com/',\n    text: \"Jack&#39;s Site\"\n});\ntpl.append('blog-roll', {\n    id: 'link2',\n    url: 'http://www.dustindiaz.com/',\n    text: \"Dustin&#39;s Site\"\n});\n</code></pre></p>\n\n<p><b><u>Compiling Templates</u></b></p>\n<p>Templates are applied using regular expressions. The performance is great, but if\nyou are adding a bunch of DOM elements using the same template, you can increase\nperformance even further by <a href=\"#!/api/Ext.Template-method-compile\" rel=\"Ext.Template-method-compile\" class=\"docClass\">&quot;compiling&quot;</a> the template.\nThe way \"<a href=\"#!/api/Ext.Template-method-compile\" rel=\"Ext.Template-method-compile\" class=\"docClass\">compile()</a>\" works is the template is parsed and\nbroken up at the different variable points and a dynamic function is created and eval'ed.\nThe generated function performs string concatenation of these parts and the passed\nvariables instead of using regular expressions.\n<pre><code>var html = '<a id=\"{id}\" href=\"{url}\" class=\"nav\">{text}</a>';\n\nvar tpl = new <a href=\"#!/api/Ext.DomHelper-method-createTemplate\" rel=\"Ext.DomHelper-method-createTemplate\" class=\"docClass\">Ext.DomHelper.createTemplate</a>(html);\ntpl.compile();\n\n//... use template like normal\n</code></pre></p>\n\n<p><b><u>Performance Boost</u></b></p>\n<p>DomHelper will transparently create HTML fragments when it can. Using HTML fragments instead\nof DOM can significantly boost performance.</p>\n<p>Element creation specification parameters may also be strings. If <a href=\"#!/api/Ext.DomHelper-property-useDom\" rel=\"Ext.DomHelper-property-useDom\" class=\"docClass\">useDom</a> is <tt>false</tt>,\nthen the string is used as innerHTML. If <a href=\"#!/api/Ext.DomHelper-property-useDom\" rel=\"Ext.DomHelper-property-useDom\" class=\"docClass\">useDom</a> is <tt>true</tt>, a string specification\nresults in the creation of a text node. Usage:</p>\n<pre><code><a href=\"#!/api/Ext.DomHelper-property-useDom\" rel=\"Ext.DomHelper-property-useDom\" class=\"docClass\">Ext.DomHelper.useDom</a> = true; // force it to use DOM; reduces performance\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-lastIndex' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/DomHelper.html#Ext-DomHelper-property-lastIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-property-lastIndex' class='name expandable'>lastIndex</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Since we're using the g flag on the regex, we need to set the lastIndex. ...</div><div class='long'><p>Since we're using the g flag on the regex, we need to set the lastIndex.\nThis automatically happens on some implementations, but not others, see:\nhttp://stackoverflow.com/questions/2645273/javascript-regular-expression-literal-persists-between-function-calls\nhttp://blog.stevenlevithan.com/archives/fixing-javascript-regexp</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-useDom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/DomHelper-more.html#Ext-DomHelper-property-useDom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-property-useDom' class='name expandable'>useDom</a><span> : Boolean</span></div><div class='description'><div class='short'>True to force the use of DOM instead of html fragments ...</div><div class='long'><p>True to force the use of DOM instead of html fragments</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-append' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/DomHelper.html#Ext-DomHelper-method-append' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-append' class='name expandable'>append</a>( <span class='pre'>el, o, [returnElement]</span> ) : HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Creates new DOM element(s) and appends them to el. ...</div><div class='long'><p>Creates new DOM element(s) and appends them to el.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed<div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>o</span> : Object/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The DOM object spec (and children) or raw HTML blob</p>\n</div></li><li><span class='pre'>returnElement</span> : Boolean (optional)<div class='sub-desc'><p>true to return a <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The new node</p>\n</div></li></ul></div></div></div><div id='method-applyStyles' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/DomHelper.html#Ext-DomHelper-method-applyStyles' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-applyStyles' class='name expandable'>applyStyles</a>( <span class='pre'>el, styles</span> )</div><div class='description'><div class='short'>Applies a style specification to an element. ...</div><div class='long'><p>Applies a style specification to an element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>The element to apply styles to</p>\n</div></li><li><span class='pre'>styles</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/Object/<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>A style specification string e.g. 'width:100px', or object in the form {width:'100px'}, or\na function which returns such a specification.</p>\n</div></li></ul></div></div></div><div id='method-createDom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/DomHelper-more.html#Ext-DomHelper-method-createDom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-createDom' class='name expandable'>createDom</a>( <span class='pre'>o</span> ) : HTMLElement</div><div class='description'><div class='short'>Creates new DOM element(s) without inserting them to the document. ...</div><div class='long'><p>Creates new DOM element(s) without inserting them to the document.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The DOM object spec (and children) or raw HTML blob</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'><p>The new uninserted node</p>\n</div></li></ul></div></div></div><div id='method-createTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/DomHelper-more.html#Ext-DomHelper-method-createTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-createTemplate' class='name expandable'>createTemplate</a>( <span class='pre'>o</span> ) : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></div><div class='description'><div class='short'>Creates a new Ext.Template from the DOM object spec. ...</div><div class='long'><p>Creates a new <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a> from the DOM object spec.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>The DOM object spec (and children)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span><div class='sub-desc'><p>The new template</p>\n</div></li></ul></div></div></div><div id='method-insertAfter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/DomHelper.html#Ext-DomHelper-method-insertAfter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-insertAfter' class='name expandable'>insertAfter</a>( <span class='pre'>el, o, [returnElement]</span> ) : HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Creates new DOM element(s) and inserts them after el. ...</div><div class='long'><p>Creates new DOM element(s) and inserts them after el.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed<div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>The DOM object spec (and children)</p>\n</div></li><li><span class='pre'>returnElement</span> : Boolean (optional)<div class='sub-desc'><p>true to return a <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The new node</p>\n</div></li></ul></div></div></div><div id='method-insertBefore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/DomHelper.html#Ext-DomHelper-method-insertBefore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-insertBefore' class='name expandable'>insertBefore</a>( <span class='pre'>el, o, [returnElement]</span> ) : HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Creates new DOM element(s) and inserts them before el. ...</div><div class='long'><p>Creates new DOM element(s) and inserts them before el.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed<div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>o</span> : Object/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The DOM object spec (and children) or raw HTML blob</p>\n</div></li><li><span class='pre'>returnElement</span> : Boolean (optional)<div class='sub-desc'><p>true to return a <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The new node</p>\n</div></li></ul></div></div></div><div id='method-insertFirst' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/DomHelper.html#Ext-DomHelper-method-insertFirst' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-insertFirst' class='name expandable'>insertFirst</a>( <span class='pre'>el, o, [returnElement]</span> ) : HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Creates new DOM element(s) and inserts them as the first child of el. ...</div><div class='long'><p>Creates new DOM element(s) and inserts them as the first child of el.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed<div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>o</span> : Object/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The DOM object spec (and children) or raw HTML blob</p>\n</div></li><li><span class='pre'>returnElement</span> : Boolean (optional)<div class='sub-desc'><p>true to return a <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The new node</p>\n</div></li></ul></div></div></div><div id='method-insertHtml' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/DomHelper.html#Ext-DomHelper-method-insertHtml' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-insertHtml' class='name expandable'>insertHtml</a>( <span class='pre'>where, el, html</span> ) : HTMLElement</div><div class='description'><div class='short'>Inserts an HTML fragment into the DOM. ...</div><div class='long'><p>Inserts an HTML fragment into the DOM.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>where</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Where to insert the html in relation to el - beforeBegin, afterBegin, beforeEnd, afterEnd.</p>\n</div></li><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>html</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The HTML fragment</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'><p>The new node</p>\n</div></li></ul></div></div></div><div id='method-markup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/DomHelper.html#Ext-DomHelper-method-markup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-markup' class='name expandable'>markup</a>( <span class='pre'>o</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Returns the markup for the passed Element(s) config. ...</div><div class='long'><p>Returns the markup for the passed Element(s) config.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>The DOM object spec (and children)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-overwrite' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomHelper'>Ext.DomHelper</span><br/><a href='source/DomHelper.html#Ext-DomHelper-method-overwrite' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomHelper-method-overwrite' class='name expandable'>overwrite</a>( <span class='pre'>el, o, [returnElement]</span> ) : HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Creates new DOM element(s) and overwrites the contents of el with them. ...</div><div class='long'><p>Creates new DOM element(s) and overwrites the contents of el with them.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed<div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>o</span> : Object/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The DOM object spec (and children) or raw HTML blob</p>\n</div></li><li><span class='pre'>returnElement</span> : Boolean (optional)<div class='sub-desc'><p>true to return a <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The new node</p>\n</div></li></ul></div></div></div></div></div></div></div>",
    "superclasses": [],
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
        "href": "DomHelper-more.html#Ext-DomHelper",
        "filename": "DomHelper-more.js"
    }, {
        "href": "DomHelper.html#Ext-DomHelper",
        "filename": "DomHelper.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.DomHelper",
            "meta": {},
            "name": "lastIndex",
            "id": "property-lastIndex"
        }, {
            "tagname": "property",
            "owner": "Ext.DomHelper",
            "meta": {},
            "name": "useDom",
            "id": "property-useDom"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.DomHelper",
            "meta": {},
            "name": "append",
            "id": "method-append"
        }, {
            "tagname": "method",
            "owner": "Ext.DomHelper",
            "meta": {},
            "name": "applyStyles",
            "id": "method-applyStyles"
        }, {
            "tagname": "method",
            "owner": "Ext.DomHelper",
            "meta": {},
            "name": "createDom",
            "id": "method-createDom"
        }, {
            "tagname": "method",
            "owner": "Ext.DomHelper",
            "meta": {},
            "name": "createTemplate",
            "id": "method-createTemplate"
        }, {
            "tagname": "method",
            "owner": "Ext.DomHelper",
            "meta": {},
            "name": "insertAfter",
            "id": "method-insertAfter"
        }, {
            "tagname": "method",
            "owner": "Ext.DomHelper",
            "meta": {},
            "name": "insertBefore",
            "id": "method-insertBefore"
        }, {
            "tagname": "method",
            "owner": "Ext.DomHelper",
            "meta": {},
            "name": "insertFirst",
            "id": "method-insertFirst"
        }, {
            "tagname": "method",
            "owner": "Ext.DomHelper",
            "meta": {},
            "name": "insertHtml",
            "id": "method-insertHtml"
        }, {
            "tagname": "method",
            "owner": "Ext.DomHelper",
            "meta": {},
            "name": "markup",
            "id": "method-markup"
        }, {
            "tagname": "method",
            "owner": "Ext.DomHelper",
            "meta": {},
            "name": "overwrite",
            "id": "method-overwrite"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.DomHelper",
    "singleton": true,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.DomHelper",
    "mixins": [],
    "mixedInto": []
});