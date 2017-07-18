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
Ext.data.JsonP.Ext_DomQuery({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/DomQuery.html#Ext-DomQuery' target='_blank'>DomQuery.js</a></div></pre><div class='doc-contents'><p>Provides high performance selector/xpath processing by compiling queries into reusable functions. New pseudo classes and matchers can be plugged. It works on HTML and XML documents (if a content node is passed in).</p>\n\n<p>\nDomQuery supports most of the <a href=\"http://www.w3.org/TR/2005/WD-css3-selectors-20051215/#selectors\">CSS3 selectors spec</a>, along with some custom selectors and basic XPath.</p>\n\n\n\n\n<p>\nAll selectors, attribute filters and pseudos below can be combined infinitely in any order. For example \"div.foo:nth-child(odd)[@foo=bar].bar:first\" would be a perfectly valid selector. Node filters are processed in the order in which they appear, which allows you to optimize your queries for your document structure.\n</p>\n\n\n<h4>Element Selectors:</h4>\n\n\n<ul class=\"list\">\n    <li> <b>*</b> any element</li>\n    <li> <b>E</b> an element with the tag E</li>\n    <li> <b>E F</b> All descendent elements of E that have the tag F</li>\n    <li> <b>E > F</b> or <b>E/F</b> all direct children elements of E that have the tag F</li>\n    <li> <b>E + F</b> all elements with the tag F that are immediately preceded by an element with the tag E</li>\n    <li> <b>E ~ F</b> all elements with the tag F that are preceded by a sibling element with the tag E</li>\n</ul>\n\n\n<h4>Attribute Selectors:</h4>\n\n\n<p>The use of &#64; and quotes are optional. For example, div[&#64;foo='bar'] is also a valid attribute selector.</p>\n\n\n<ul class=\"list\">\n    <li> <b>E[foo]</b> has an attribute \"foo\"</li>\n    <li> <b>E[foo=bar]</b> has an attribute \"foo\" that equals \"bar\"</li>\n    <li> <b>E[foo^=bar]</b> has an attribute \"foo\" that starts with \"bar\"</li>\n    <li> <b>E[foo$=bar]</b> has an attribute \"foo\" that ends with \"bar\"</li>\n    <li> <b>E[foo*=bar]</b> has an attribute \"foo\" that contains the substring \"bar\"</li>\n    <li> <b>E[foo%=2]</b> has an attribute \"foo\" that is evenly divisible by 2</li>\n    <li> <b>E[foo!=bar]</b> attribute \"foo\" does not equal \"bar\"</li>\n</ul>\n\n\n<h4>Pseudo Classes:</h4>\n\n\n<ul class=\"list\">\n    <li> <b>E:first-child</b> E is the first child of its parent</li>\n    <li> <b>E:last-child</b> E is the last child of its parent</li>\n    <li> <b>E:nth-child(<i>n</i>)</b> E is the <i>n</i>th child of its parent (1 based as per the spec)</li>\n    <li> <b>E:nth-child(odd)</b> E is an odd child of its parent</li>\n    <li> <b>E:nth-child(even)</b> E is an even child of its parent</li>\n    <li> <b>E:only-child</b> E is the only child of its parent</li>\n    <li> <b>E:checked</b> E is an element that is has a checked attribute that is true (e.g. a radio or checkbox) </li>\n    <li> <b>E:first</b> the first E in the resultset</li>\n    <li> <b>E:last</b> the last E in the resultset</li>\n    <li> <b>E:nth(<i>n</i>)</b> the <i>n</i>th E in the resultset (1 based)</li>\n    <li> <b>E:odd</b> shortcut for :nth-child(odd)</li>\n    <li> <b>E:even</b> shortcut for :nth-child(even)</li>\n    <li> <b>E:contains(foo)</b> E's innerHTML contains the substring \"foo\"</li>\n    <li> <b>E:nodeValue(foo)</b> E contains a textNode with a nodeValue that equals \"foo\"</li>\n    <li> <b>E:not(S)</b> an E element that does not match simple selector S</li>\n    <li> <b>E:has(S)</b> an E element that has a descendent that matches simple selector S</li>\n    <li> <b>E:next(S)</b> an E element whose next sibling matches simple selector S</li>\n    <li> <b>E:prev(S)</b> an E element whose previous sibling matches simple selector S</li>\n    <li> <b>E:any(S1|S2|S2)</b> an E element which matches any of the simple selectors S1, S2 or S3//\\\\</li>\n</ul>\n\n\n<h4>CSS Value Selectors:</h4>\n\n\n<ul class=\"list\">\n    <li> <b>E{display=none}</b> css value \"display\" that equals \"none\"</li>\n    <li> <b>E{display^=none}</b> css value \"display\" that starts with \"none\"</li>\n    <li> <b>E{display$=none}</b> css value \"display\" that ends with \"none\"</li>\n    <li> <b>E{display*=none}</b> css value \"display\" that contains the substring \"none\"</li>\n    <li> <b>E{display%=2}</b> css value \"display\" that is evenly divisible by 2</li>\n    <li> <b>E{display!=none}</b> css value \"display\" that does not equal \"none\"</li>\n</ul>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-matchers' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomQuery'>Ext.DomQuery</span><br/><a href='source/DomQuery.html#Ext-DomQuery-property-matchers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomQuery-property-matchers' class='name expandable'>matchers</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span></div><div class='description'><div class='short'>Collection of matching regular expressions and code snippets. ...</div><div class='long'><p>Collection of matching regular expressions and code snippets.\nEach capture group within () will be replace the {} in the select\nstatement as specified by their index.</p>\n<p>Defaults to: <code>[{re: /^\\.([\\w\\-]+)/, select: 'n = byClassName(n, &quot; {1} &quot;);'}, {re: /^\\:([\\w\\-]+)(?:\\(((?:[^\\s&gt;\\/]*|.*?))\\))?/, select: 'n = byPseudo(n, &quot;{1}&quot;, &quot;{2}&quot;);'}, {re: /^(?:([\\[\\{])(?:@)?([\\w\\-]+)\\s?(?:(=|.=)\\s?([&quot;']?)(.*?)\\4)?[\\]\\}])/, select: 'n = byAttribute(n, &quot;{2}&quot;, &quot;{5}&quot;, &quot;{3}&quot;, &quot;{1}&quot;);'}, {re: /^#([\\w\\-]+)/, select: 'n = byId(n, &quot;{1}&quot;);'}, {re: /^@([\\w\\-]+)/, select: 'return {firstChild:{nodeValue:attrValue(n, &quot;{1}&quot;)}};'}]</code></p></div></div></div><div id='property-operators' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomQuery'>Ext.DomQuery</span><br/><a href='source/DomQuery.html#Ext-DomQuery-property-operators' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomQuery-property-operators' class='name expandable'>operators</a><span> : Object</span></div><div class='description'><div class='short'>Collection of operator comparison functions. ...</div><div class='long'><p>Collection of operator comparison functions. The default operators are =, !=, ^=, $=, *=, %=, |= and ~=.\nNew operators can be added as long as the match the format <i>c</i>= where <i>c</i> is any character other than space, &gt; &lt;.</p>\n</div></div></div><div id='property-pseudos' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomQuery'>Ext.DomQuery</span><br/><a href='source/DomQuery.html#Ext-DomQuery-property-pseudos' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomQuery-property-pseudos' class='name expandable'>pseudos</a><span> : Object</span></div><div class='description'><div class='short'>Object hash of \"pseudo class\" filter functions which are used when filtering selections. ...</div><div class='long'><p>Object hash of \"pseudo class\" filter functions which are used when filtering selections. Each function is passed\ntwo parameters:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><b>c</b> : Array<div class=\"sub-desc\">An Array of DOM elements to filter.</div></li>\n<li><b>v</b> : String<div class=\"sub-desc\">The argument (if any) supplied in the selector.</div></li>\n</ul></div>\n\n\n<p>A filter function returns an Array of DOM elements which conform to the pseudo class.</p>\n\n\n<p>In addition to the provided pseudo classes listed above such as <code>first-child</code> and <code>nth-child</code>,\ndevelopers may add additional, custom psuedo class filters to select elements according to application-specific requirements.</p>\n\n\n<p>For example, to filter <code>&lt;a></code> elements to only return links to <i>external</i> resources:</p>\n\n\n<p><code></p>\n\n<pre>Ext.DomQuery.pseudos.external = function(c, v){\n    var r = [], ri = -1;\n    for(var i = 0, ci; ci = c[i]; i++){\n//      Include in result set only if it's a link to an external resource\n        if(ci.hostname != location.hostname){\n            r[++ri] = ci;\n        }\n    }\n    return r;\n};</pre>\n\n\n<p></code>\nThen external links could be gathered with the following statement:<code></p>\n\n<pre>var externalLinks = <a href=\"#!/api/Ext-method-select\" rel=\"Ext-method-select\" class=\"docClass\">Ext.select</a>(\"a:external\");\n</code></pre>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-compile' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomQuery'>Ext.DomQuery</span><br/><a href='source/DomQuery.html#Ext-DomQuery-method-compile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomQuery-method-compile' class='name expandable'>compile</a>( <span class='pre'>selector, [type]</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></div><div class='description'><div class='short'>Compiles a selector/xpath query into a reusable function. ...</div><div class='long'><p>Compiles a selector/xpath query into a reusable function. The returned function\ntakes one parameter \"root\" (optional), which is the context node from where the query should start.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The selector/xpath query</p>\n</div></li><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>Either \"select\" (the default) or \"simple\" for a simple selector match</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-filter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomQuery'>Ext.DomQuery</span><br/><a href='source/DomQuery.html#Ext-DomQuery-method-filter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomQuery-method-filter' class='name expandable'>filter</a>( <span class='pre'>el, selector, nonMatches</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></div><div class='description'><div class='short'>Filters an array of elements to only include matches of a simple selector (e.g. ...</div><div class='long'><p>Filters an array of elements to only include matches of a simple selector (e.g. div.some-class or span:first-child)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>An array of elements to filter</p>\n</div></li><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The simple selector to test</p>\n</div></li><li><span class='pre'>nonMatches</span> : Boolean<div class='sub-desc'><p>If true, it returns the elements that DON'T match\nthe selector instead of the ones that match</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>An Array of DOM elements which match the selector. If there are\nno matches, and empty Array is returned.</p>\n</div></li></ul></div></div></div><div id='method-is' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomQuery'>Ext.DomQuery</span><br/><a href='source/DomQuery.html#Ext-DomQuery-method-is' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomQuery-method-is' class='name expandable'>is</a>( <span class='pre'>el, selector</span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the passed element(s) match the passed simple selector (e.g. ...</div><div class='long'><p>Returns true if the passed element(s) match the passed simple selector (e.g. div.some-class or span:first-child)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>An element id, element or array of elements</p>\n</div></li><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The simple selector to test</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-jsSelect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomQuery'>Ext.DomQuery</span><br/><a href='source/DomQuery.html#Ext-DomQuery-method-jsSelect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomQuery-method-jsSelect' class='name expandable'>jsSelect</a>( <span class='pre'>selector, [root]</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></div><div class='description'><div class='short'>Selects a group of elements. ...</div><div class='long'><p>Selects a group of elements.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The selector/xpath query (can be a comma separated list of selectors)</p>\n</div></li><li><span class='pre'>root</span> : Node/String (optional)<div class='sub-desc'><p>The start of the query (defaults to document).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>An Array of DOM elements which match the selector. If there are\nno matches, and empty Array is returned.</p>\n</div></li></ul></div></div></div><div id='method-selectNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomQuery'>Ext.DomQuery</span><br/><a href='source/DomQuery.html#Ext-DomQuery-method-selectNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomQuery-method-selectNode' class='name expandable'>selectNode</a>( <span class='pre'>selector, [root]</span> ) : Element</div><div class='description'><div class='short'>Selects a single element. ...</div><div class='long'><p>Selects a single element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The selector/xpath query</p>\n</div></li><li><span class='pre'>root</span> : Node (optional)<div class='sub-desc'><p>The start of the query (defaults to document).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Element</span><div class='sub-desc'><p>The DOM element which matched the selector.</p>\n</div></li></ul></div></div></div><div id='method-selectNumber' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomQuery'>Ext.DomQuery</span><br/><a href='source/DomQuery.html#Ext-DomQuery-method-selectNumber' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomQuery-method-selectNumber' class='name expandable'>selectNumber</a>( <span class='pre'>selector, [root], [defaultValue]</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Selects the value of a node, parsing integers and floats. ...</div><div class='long'><p>Selects the value of a node, parsing integers and floats. Returns the defaultValue, or 0 if none is specified.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The selector/xpath query</p>\n</div></li><li><span class='pre'>root</span> : Node (optional)<div class='sub-desc'><p>The start of the query (defaults to document).</p>\n</div></li><li><span class='pre'>defaultValue</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-selectValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.DomQuery'>Ext.DomQuery</span><br/><a href='source/DomQuery.html#Ext-DomQuery-method-selectValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.DomQuery-method-selectValue' class='name expandable'>selectValue</a>( <span class='pre'>selector, [root], [defaultValue]</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Selects the value of a node, optionally replacing null with the defaultValue. ...</div><div class='long'><p>Selects the value of a node, optionally replacing null with the defaultValue.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The selector/xpath query</p>\n</div></li><li><span class='pre'>root</span> : Node (optional)<div class='sub-desc'><p>The start of the query (defaults to document).</p>\n</div></li><li><span class='pre'>defaultValue</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "DomQuery.html#Ext-DomQuery",
        "filename": "DomQuery.js"
    }],
    "linenr": 5,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.DomQuery",
            "meta": {},
            "name": "matchers",
            "id": "property-matchers"
        }, {
            "tagname": "property",
            "owner": "Ext.DomQuery",
            "meta": {},
            "name": "operators",
            "id": "property-operators"
        }, {
            "tagname": "property",
            "owner": "Ext.DomQuery",
            "meta": {},
            "name": "pseudos",
            "id": "property-pseudos"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.DomQuery",
            "meta": {},
            "name": "compile",
            "id": "method-compile"
        }, {
            "tagname": "method",
            "owner": "Ext.DomQuery",
            "meta": {},
            "name": "filter",
            "id": "method-filter"
        }, {
            "tagname": "method",
            "owner": "Ext.DomQuery",
            "meta": {},
            "name": "is",
            "id": "method-is"
        }, {
            "tagname": "method",
            "owner": "Ext.DomQuery",
            "meta": {},
            "name": "jsSelect",
            "id": "method-jsSelect"
        }, {
            "tagname": "method",
            "owner": "Ext.DomQuery",
            "meta": {},
            "name": "selectNode",
            "id": "method-selectNode"
        }, {
            "tagname": "method",
            "owner": "Ext.DomQuery",
            "meta": {},
            "name": "selectNumber",
            "id": "method-selectNumber"
        }, {
            "tagname": "method",
            "owner": "Ext.DomQuery",
            "meta": {},
            "name": "selectValue",
            "id": "method-selectValue"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.DomQuery",
    "singleton": true,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.DomQuery",
    "mixins": [],
    "mixedInto": []
});