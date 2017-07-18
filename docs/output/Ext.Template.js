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
Ext.data.JsonP.Ext_Template({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": ["Ext.XTemplate"],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.XTemplate' rel='Ext.XTemplate' class='docClass'>Ext.XTemplate</a></div><h4>Files</h4><div class='dependency'><a href='source/Template-more.html#Ext-Template' target='_blank'>Template-more.js</a></div><div class='dependency'><a href='source/Template.html#Ext-Template' target='_blank'>Template.js</a></div></pre><div class='doc-contents'><p>Represents an HTML fragment template. Templates may be <a href=\"#!/api/Ext.Template-method-compile\" rel=\"Ext.Template-method-compile\" class=\"docClass\">precompiled</a>\nfor greater performance.</p>\n\n\n<p>For example usage see the constructor.</p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-compiled' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template.html#Ext-Template-cfg-compiled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Template-cfg-compiled' class='name expandable'>compiled</a><span> : Boolean</span></div><div class='description'><div class='short'>Specify true to compile the template\nimmediately (see compile). ...</div><div class='long'><p>Specify <tt>true</tt> to compile the template\nimmediately (see <code><a href=\"#!/api/Ext.Template-method-compile\" rel=\"Ext.Template-method-compile\" class=\"docClass\">compile</a></code>).\nDefaults to <tt>false</tt>.</p>\n</div></div></div><div id='cfg-disableFormats' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template-more.html#Ext-Template-cfg-disableFormats' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Template-cfg-disableFormats' class='name expandable'>disableFormats</a><span> : Boolean</span></div><div class='description'><div class='short'>Specify true to disable format\nfunctions in the template. ...</div><div class='long'><p>Specify <tt>true</tt> to disable format\nfunctions in the template. If the template does not contain\n<a href=\"#!/api/Ext.util.Format\" rel=\"Ext.util.Format\" class=\"docClass\">format functions</a>, setting <code>disableFormats</code>\nto true will reduce <code><a href=\"#!/api/Ext.Template-method-apply\" rel=\"Ext.Template-method-apply\" class=\"docClass\">apply</a></code> time. Defaults to <tt>false</tt>.</p>\n\n<pre><code>var t = new <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a>(\n    '&lt;div name=\"{id}\"&gt;',\n        '&lt;span class=\"{cls}\"&gt;{name} {value}&lt;/span&gt;',\n    '&lt;/div&gt;',\n    {\n        compiled: true,      // <a href=\"#!/api/Ext.Template-method-compile\" rel=\"Ext.Template-method-compile\" class=\"docClass\">compile</a> immediately\n        disableFormats: true // reduce <code><a href=\"#!/api/Ext.Template-method-apply\" rel=\"Ext.Template-method-apply\" class=\"docClass\">apply</a></code> time since no formatting\n    }\n);\n</code></pre>\n\n\n<p>For a list of available format functions, see <a href=\"#!/api/Ext.util.Format\" rel=\"Ext.util.Format\" class=\"docClass\">Ext.util.Format</a>.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-re' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template.html#Ext-Template-cfg-re' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Template-cfg-re' class='name expandable'>re</a><span> : RegExp</span></div><div class='description'><div class='short'>The regular expression used to match template variables. ...</div><div class='long'><p>The regular expression used to match template variables.\nDefaults to:</p>\n\n<pre><code>re : /\\{([\\w\\-]+)\\}/g                                     // for Ext Core\nre : /\\{([\\w\\-]+)(?:\\:([\\w\\.]*)(?:\\((.*?)?\\))?)?\\}/g      // for Ext JS\n</code></pre>\n\n<p>Defaults to: <code>/\\{([\\w\\-]+)\\}/g</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-disableFormats' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template-more.html#Ext-Template-property-disableFormats' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Template-property-disableFormats' class='name not-expandable'>disableFormats</a><span> : Boolean</span></div><div class='description'><div class='short'><p>See <code><a href=\"#!/api/Ext.Template-property-disableFormats\" rel=\"Ext.Template-property-disableFormats\" class=\"docClass\">disableFormats</a></code>.</p>\n</div><div class='long'><p>See <code><a href=\"#!/api/Ext.Template-property-disableFormats\" rel=\"Ext.Template-property-disableFormats\" class=\"docClass\">disableFormats</a></code>.</p>\n</div></div></div><div id='property-html' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template.html#Ext-Template-property-html' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Template-property-html' class='name not-expandable'>html</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-re' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template.html#Ext-Template-property-re' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Template-property-re' class='name not-expandable'>re</a><span> : RegExp</span></div><div class='description'><div class='short'><p>See <code><a href=\"#!/api/Ext.Template-cfg-re\" rel=\"Ext.Template-cfg-re\" class=\"docClass\">re</a></code>.</p>\n</div><div class='long'><p>See <code><a href=\"#!/api/Ext.Template-cfg-re\" rel=\"Ext.Template-cfg-re\" class=\"docClass\">re</a></code>.</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template.html#Ext-Template-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.Template-method-constructor' class='name expandable'>Ext.Template</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></div><div class='description'><div class='short'>An instance of this class may be created by passing to the constructor either\na single argument, or multiple argument...</div><div class='long'><p>An instance of this class may be created by passing to the constructor either\na single argument, or multiple arguments:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>single argument</b> : String/Array\n<div class=\"sub-desc\">\nThe single argument may be either a String or an Array:<ul>\n<li><tt>String</tt> : </li>\n<pre><code>var t = new <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a>(\"&lt;div>Hello {0}.&lt;/div>\");\nt.<a href=\"#!/api/Ext.Template-method-append\" rel=\"Ext.Template-method-append\" class=\"docClass\">append</a>('some-element', ['foo']);\n</code></pre>\n<li><tt>Array</tt> : </li>\nAn Array will be combined with <code>join('')</code>.\n<pre><code>var t = new <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a>([\n    '&lt;div name=\"{id}\"&gt;',\n        '&lt;span class=\"{cls}\"&gt;{name:trim} {value:ellipsis(10)}&lt;/span&gt;',\n    '&lt;/div&gt;',\n]);\nt.<a href=\"#!/api/Ext.Template-method-compile\" rel=\"Ext.Template-method-compile\" class=\"docClass\">compile</a>();\nt.<a href=\"#!/api/Ext.Template-method-append\" rel=\"Ext.Template-method-append\" class=\"docClass\">append</a>('some-element', {id: 'myid', cls: 'myclass', name: 'foo', value: 'bar'});\n</code></pre>\n</ul></div></li>\n<li><b>multiple arguments</b> : String, Object, Array, ...\n<div class=\"sub-desc\">\nMultiple arguments will be combined with <code>join('')</code>.\n<pre><code>var t = new <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a>(\n    '&lt;div name=\"{id}\"&gt;',\n        '&lt;span class=\"{cls}\"&gt;{name} {value}&lt;/span&gt;',\n    '&lt;/div&gt;',\n    // a configuration object:\n    {\n        compiled: true,      // <a href=\"#!/api/Ext.Template-method-compile\" rel=\"Ext.Template-method-compile\" class=\"docClass\">compile</a> immediately\n        disableFormats: true // See Notes below.\n    }\n);\n</code></pre>\n<p><b>Notes</b>:</p>\n<div class=\"mdetail-params\"><ul>\n<li>Formatting and <code>disableFormats</code> are not applicable for Ext Core.</li>\n<li>For a list of available format functions, see <a href=\"#!/api/Ext.util.Format\" rel=\"Ext.util.Format\" class=\"docClass\">Ext.util.Format</a>.</li>\n<li><code>disableFormats</code> reduces <code><a href=\"#!/api/Ext.Template-method-apply\" rel=\"Ext.Template-method-apply\" class=\"docClass\">apply</a></code> time\nwhen no formatting is required.</li>\n</ul></div>\n</div></li>\n</ul></div>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Mixed<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-append' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template.html#Ext-Template-method-append' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Template-method-append' class='name expandable'>append</a>( <span class='pre'>el, values, [returnElement]</span> ) : HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Applies the supplied values to the template and appends\nthe new node(s) to the specified el. ...</div><div class='long'><p>Applies the supplied <code>values</code> to the template and appends\nthe new node(s) to the specified <code>el</code>.</p>\n\n<p>For example usage see the constructor.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed<div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>values</span> : Object/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The template values. Can be an array if the params are numeric (i.e. <code>{0}</code>)\nor an object (i.e. <code>{foo: 'bar'}</code>).</p>\n</div></li><li><span class='pre'>returnElement</span> : Boolean (optional)<div class='sub-desc'><p>true to return an <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> (defaults to undefined)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The new node or Element</p>\n</div></li></ul></div></div></div><div id='method-apply' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template.html#Ext-Template-method-apply' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Template-method-apply' class='name expandable'>apply</a>( <span class='pre'>values</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Alias for applyTemplate\nReturns an HTML fragment of this template with the specified values applied. ...</div><div class='long'><p>Alias for <a href=\"#!/api/Ext.Template-method-applyTemplate\" rel=\"Ext.Template-method-applyTemplate\" class=\"docClass\">applyTemplate</a>\nReturns an HTML fragment of this template with the specified <code>values</code> applied.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Object/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The template values. Can be an array if the params are numeric (i.e. <code>{0}</code>)\nor an object (i.e. <code>{foo: 'bar'}</code>).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The HTML fragment</p>\n</div></li></ul></div></div></div><div id='method-applyTemplate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template.html#Ext-Template-method-applyTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Template-method-applyTemplate' class='name expandable'>applyTemplate</a>( <span class='pre'>values</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Returns an HTML fragment of this template with the specified values applied. ...</div><div class='long'><p>Returns an HTML fragment of this template with the specified <code>values</code> applied.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>values</span> : Object/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The template values. Can be an array if the params are numeric (i.e. <code>{0}</code>)\nor an object (i.e. <code>{foo: 'bar'}</code>).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The HTML fragment</p>\n</div></li></ul></div></div></div><div id='method-compile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template.html#Ext-Template-method-compile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Template-method-compile' class='name expandable'>compile</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Compiles the template into an internal function, eliminating the RegEx overhead. ...</div><div class='long'><p>Compiles the template into an internal function, eliminating the RegEx overhead.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-insertAfter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template.html#Ext-Template-method-insertAfter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Template-method-insertAfter' class='name expandable'>insertAfter</a>( <span class='pre'>el, values, [returnElement]</span> ) : HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Applies the supplied values to the template and inserts the new node(s) after el. ...</div><div class='long'><p>Applies the supplied values to the template and inserts the new node(s) after el.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed<div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>values</span> : Object/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n</div></li><li><span class='pre'>returnElement</span> : Boolean (optional)<div class='sub-desc'><p>true to return a <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> (defaults to undefined)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The new node or Element</p>\n</div></li></ul></div></div></div><div id='method-insertBefore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template.html#Ext-Template-method-insertBefore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Template-method-insertBefore' class='name expandable'>insertBefore</a>( <span class='pre'>el, values, [returnElement]</span> ) : HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Applies the supplied values to the template and inserts the new node(s) before el. ...</div><div class='long'><p>Applies the supplied values to the template and inserts the new node(s) before el.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed<div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>values</span> : Object/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n</div></li><li><span class='pre'>returnElement</span> : Boolean (optional)<div class='sub-desc'><p>true to return a <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> (defaults to undefined)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The new node or Element</p>\n</div></li></ul></div></div></div><div id='method-insertFirst' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template.html#Ext-Template-method-insertFirst' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Template-method-insertFirst' class='name expandable'>insertFirst</a>( <span class='pre'>el, values, [returnElement]</span> ) : HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Applies the supplied values to the template and inserts the new node(s) as the first child of el. ...</div><div class='long'><p>Applies the supplied values to the template and inserts the new node(s) as the first child of el.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed<div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>values</span> : Object/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n</div></li><li><span class='pre'>returnElement</span> : Boolean (optional)<div class='sub-desc'><p>true to return a <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> (defaults to undefined)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The new node or Element</p>\n</div></li></ul></div></div></div><div id='method-overwrite' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template.html#Ext-Template-method-overwrite' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Template-method-overwrite' class='name expandable'>overwrite</a>( <span class='pre'>el, values, [returnElement]</span> ) : HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Applies the supplied values to the template and overwrites the content of el with the new node(s). ...</div><div class='long'><p>Applies the supplied values to the template and overwrites the content of el with the new node(s).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed<div class='sub-desc'><p>The context element</p>\n</div></li><li><span class='pre'>values</span> : Object/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n</div></li><li><span class='pre'>returnElement</span> : Boolean (optional)<div class='sub-desc'><p>true to return a <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> (defaults to undefined)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement/<a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The new node or Element</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template.html#Ext-Template-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Template-method-set' class='name expandable'>set</a>( <span class='pre'>html, [compile]</span> ) : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Sets the HTML used as the template and optionally compiles it. ...</div><div class='long'><p>Sets the HTML used as the template and optionally compiles it.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>html</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>compile</span> : Boolean (optional)<div class='sub-desc'><p>True to compile the template (defaults to undefined)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-from' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Template'>Ext.Template</span><br/><a href='source/Template.html#Ext-Template-static-method-from' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Template-static-method-from' class='name expandable'>from</a>( <span class='pre'>el, config</span> ) : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a><strong class='static signature' >static</strong></div><div class='description'><div class='short'>Creates a template from the passed element's value (display:none textarea, preferred) or innerHTML. ...</div><div class='long'><p>Creates a template from the passed element's value (<i>display:none</i> textarea, preferred) or innerHTML.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>A DOM element or its id</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>A configuration object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span><div class='sub-desc'><p>The created template</p>\n</div></li></ul></div></div></div></div></div></div></div>",
    "superclasses": [],
    "meta": {},
    "requires": [],
    "html_meta": {},
    "statics": {
        "property": [],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.Template",
            "meta": {
                "static": true
            },
            "name": "from",
            "id": "static-method-from"
        }],
        "event": [],
        "css_mixin": []
    },
    "files": [{
        "href": "Template-more.html#Ext-Template",
        "filename": "Template-more.js"
    }, {
        "href": "Template.html#Ext-Template",
        "filename": "Template.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.Template",
            "meta": {},
            "name": "disableFormats",
            "id": "property-disableFormats"
        }, {
            "tagname": "property",
            "owner": "Ext.Template",
            "meta": {
                "private": true
            },
            "name": "html",
            "id": "property-html"
        }, {
            "tagname": "property",
            "owner": "Ext.Template",
            "meta": {},
            "name": "re",
            "id": "property-re"
        }],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.Template",
            "meta": {},
            "name": "compiled",
            "id": "cfg-compiled"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Template",
            "meta": {},
            "name": "disableFormats",
            "id": "cfg-disableFormats"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Template",
            "meta": {},
            "name": "re",
            "id": "cfg-re"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.Template",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.Template",
            "meta": {},
            "name": "append",
            "id": "method-append"
        }, {
            "tagname": "method",
            "owner": "Ext.Template",
            "meta": {},
            "name": "apply",
            "id": "method-apply"
        }, {
            "tagname": "method",
            "owner": "Ext.Template",
            "meta": {},
            "name": "applyTemplate",
            "id": "method-applyTemplate"
        }, {
            "tagname": "method",
            "owner": "Ext.Template",
            "meta": {
                "chainable": true
            },
            "name": "compile",
            "id": "method-compile"
        }, {
            "tagname": "method",
            "owner": "Ext.Template",
            "meta": {},
            "name": "insertAfter",
            "id": "method-insertAfter"
        }, {
            "tagname": "method",
            "owner": "Ext.Template",
            "meta": {},
            "name": "insertBefore",
            "id": "method-insertBefore"
        }, {
            "tagname": "method",
            "owner": "Ext.Template",
            "meta": {},
            "name": "insertFirst",
            "id": "method-insertFirst"
        }, {
            "tagname": "method",
            "owner": "Ext.Template",
            "meta": {},
            "name": "overwrite",
            "id": "method-overwrite"
        }, {
            "tagname": "method",
            "owner": "Ext.Template",
            "meta": {
                "chainable": true
            },
            "name": "set",
            "id": "method-set"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.Template",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.Template",
    "mixins": [],
    "mixedInto": []
});