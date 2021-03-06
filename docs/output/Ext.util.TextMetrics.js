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
Ext.data.JsonP.Ext_util_TextMetrics({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/TextMetrics.html#Ext-util-TextMetrics' target='_blank'>TextMetrics.js</a></div></pre><div class='doc-contents'><p>Provides precise pixel measurements for blocks of text so that you can determine exactly how high and\nwide, in pixels, a given block of text will be. Note that when measuring text, it should be plain text and\nshould not contain any HTML, otherwise it may not be measured correctly.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-bind' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TextMetrics'>Ext.util.TextMetrics</span><br/><a href='source/TextMetrics.html#Ext-util-TextMetrics-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TextMetrics-method-bind' class='name expandable'>bind</a>( <span class='pre'>el</span> )</div><div class='description'><div class='short'>Only available on the instance returned from createInstance, not on the singleton. ...</div><div class='long'><p><b>Only available on the instance returned from <a href=\"#!/api/Ext.util.TextMetrics-method-createInstance\" rel=\"Ext.util.TextMetrics-method-createInstance\" class=\"docClass\">createInstance</a>, <u>not</u> on the singleton.</b></p>\n\n\n<p>Binds this TextMetrics instance to an element from which to copy existing CSS styles\nthat can affect the size of the rendered text</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>The element, dom node or id</p>\n</div></li></ul></div></div></div><div id='method-createInstance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TextMetrics'>Ext.util.TextMetrics</span><br/><a href='source/TextMetrics.html#Ext-util-TextMetrics-method-createInstance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TextMetrics-method-createInstance' class='name expandable'>createInstance</a>( <span class='pre'>el, [fixedWidth]</span> ) : Ext.util.TextMetrics.Instance</div><div class='description'><div class='short'>Return a unique TextMetrics instance that can be bound directly to an element and reused. ...</div><div class='long'><p>Return a unique TextMetrics instance that can be bound directly to an element and reused.  This reduces\nthe overhead of multiple calls to initialize the style properties on each measurement.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>The element, dom node or id that the instance will be bound to</p>\n</div></li><li><span class='pre'>fixedWidth</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>If the text will be multiline, you have to set a fixed width\nin order to accurately measure the text height</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.util.TextMetrics.Instance</span><div class='sub-desc'><p>instance The new instance</p>\n</div></li></ul></div></div></div><div id='method-getHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TextMetrics'>Ext.util.TextMetrics</span><br/><a href='source/TextMetrics.html#Ext-util-TextMetrics-method-getHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TextMetrics-method-getHeight' class='name expandable'>getHeight</a>( <span class='pre'>text</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Only available on the instance returned from createInstance, not on the singleton. ...</div><div class='long'><p><b>Only available on the instance returned from <a href=\"#!/api/Ext.util.TextMetrics-method-createInstance\" rel=\"Ext.util.TextMetrics-method-createInstance\" class=\"docClass\">createInstance</a>, <u>not</u> on the singleton.</b></p>\n\n\n<p>Returns the measured height of the specified text.  For multiline text, be sure to call\n<a href=\"#!/api/Ext.util.TextMetrics-method-setFixedWidth\" rel=\"Ext.util.TextMetrics-method-setFixedWidth\" class=\"docClass\">setFixedWidth</a> if necessary.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The text to measure</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>height The height in pixels</p>\n</div></li></ul></div></div></div><div id='method-getSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TextMetrics'>Ext.util.TextMetrics</span><br/><a href='source/TextMetrics.html#Ext-util-TextMetrics-method-getSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TextMetrics-method-getSize' class='name expandable'>getSize</a>( <span class='pre'>text</span> ) : Object</div><div class='description'><div class='short'>Only available on the instance returned from createInstance, not on the singleton. ...</div><div class='long'><p><b>Only available on the instance returned from <a href=\"#!/api/Ext.util.TextMetrics-method-createInstance\" rel=\"Ext.util.TextMetrics-method-createInstance\" class=\"docClass\">createInstance</a>, <u>not</u> on the singleton.</b></p>\n\n\n<p>Returns the size of the specified text based on the internal element's style and width properties</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The text to measure</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object containing the text's size {width: (width), height: (height)}</p>\n</div></li></ul></div></div></div><div id='method-getWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TextMetrics'>Ext.util.TextMetrics</span><br/><a href='source/TextMetrics.html#Ext-util-TextMetrics-method-getWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TextMetrics-method-getWidth' class='name expandable'>getWidth</a>( <span class='pre'>text</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Only available on the instance returned from createInstance, not on the singleton. ...</div><div class='long'><p><b>Only available on the instance returned from <a href=\"#!/api/Ext.util.TextMetrics-method-createInstance\" rel=\"Ext.util.TextMetrics-method-createInstance\" class=\"docClass\">createInstance</a>, <u>not</u> on the singleton.</b></p>\n\n\n<p>Returns the measured width of the specified text</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The text to measure</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>width The width in pixels</p>\n</div></li></ul></div></div></div><div id='method-measure' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TextMetrics'>Ext.util.TextMetrics</span><br/><a href='source/TextMetrics.html#Ext-util-TextMetrics-method-measure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TextMetrics-method-measure' class='name expandable'>measure</a>( <span class='pre'>el, text, [fixedWidth]</span> ) : Object</div><div class='description'><div class='short'>Measures the size of the specified text ...</div><div class='long'><p>Measures the size of the specified text</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>The element, dom node or id from which to copy existing CSS styles\nthat can affect the size of the rendered text</p>\n</div></li><li><span class='pre'>text</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The text to measure</p>\n</div></li><li><span class='pre'>fixedWidth</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>If the text will be multiline, you have to set a fixed width\nin order to accurately measure the text height</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object containing the text's size {width: (width), height: (height)}</p>\n</div></li></ul></div></div></div><div id='method-setFixedWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.TextMetrics'>Ext.util.TextMetrics</span><br/><a href='source/TextMetrics.html#Ext-util-TextMetrics-method-setFixedWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TextMetrics-method-setFixedWidth' class='name expandable'>setFixedWidth</a>( <span class='pre'>width</span> )</div><div class='description'><div class='short'>Only available on the instance returned from createInstance, not on the singleton. ...</div><div class='long'><p><b>Only available on the instance returned from <a href=\"#!/api/Ext.util.TextMetrics-method-createInstance\" rel=\"Ext.util.TextMetrics-method-createInstance\" class=\"docClass\">createInstance</a>, <u>not</u> on the singleton.</b></p>\n\n\n<p>Sets a fixed width on the internal measurement element.  If the text will be multiline, you have\nto set a fixed width in order to accurately measure the text height.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>width</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The width to set on the element</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "TextMetrics.html#Ext-util-TextMetrics",
        "filename": "TextMetrics.js"
    }],
    "linenr": 1,
    "members": {
        "property": [],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.util.TextMetrics",
            "meta": {},
            "name": "bind",
            "id": "method-bind"
        }, {
            "tagname": "method",
            "owner": "Ext.util.TextMetrics",
            "meta": {},
            "name": "createInstance",
            "id": "method-createInstance"
        }, {
            "tagname": "method",
            "owner": "Ext.util.TextMetrics",
            "meta": {},
            "name": "getHeight",
            "id": "method-getHeight"
        }, {
            "tagname": "method",
            "owner": "Ext.util.TextMetrics",
            "meta": {},
            "name": "getSize",
            "id": "method-getSize"
        }, {
            "tagname": "method",
            "owner": "Ext.util.TextMetrics",
            "meta": {},
            "name": "getWidth",
            "id": "method-getWidth"
        }, {
            "tagname": "method",
            "owner": "Ext.util.TextMetrics",
            "meta": {},
            "name": "measure",
            "id": "method-measure"
        }, {
            "tagname": "method",
            "owner": "Ext.util.TextMetrics",
            "meta": {},
            "name": "setFixedWidth",
            "id": "method-setFixedWidth"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.util.TextMetrics",
    "singleton": true,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.util.TextMetrics",
    "mixins": [],
    "mixedInto": []
});