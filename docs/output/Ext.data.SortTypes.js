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
Ext.data.JsonP.Ext_data_SortTypes({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/SortTypes.html#Ext-data-SortTypes' target='_blank'>SortTypes.js</a></div></pre><div class='doc-contents'><p>Defines the default sorting (casting?) comparison functions used when sorting data.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-stripTagsRE' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.SortTypes'>Ext.data.SortTypes</span><br/><a href='source/SortTypes.html#Ext-data-SortTypes-property-stripTagsRE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.SortTypes-property-stripTagsRE' class='name expandable'>stripTagsRE</a><span> : RegExp</span></div><div class='description'><div class='short'>The regular expression used to strip tags ...</div><div class='long'><p>The regular expression used to strip tags</p>\n<p>Defaults to: <code>/&lt;\\/?[^&gt;]+&gt;/gi</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-asDate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.SortTypes'>Ext.data.SortTypes</span><br/><a href='source/SortTypes.html#Ext-data-SortTypes-method-asDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.SortTypes-method-asDate' class='name expandable'>asDate</a>( <span class='pre'>s</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Date sorting ...</div><div class='long'><p>Date sorting</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : Mixed<div class='sub-desc'><p>The value being converted</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The comparison value</p>\n</div></li></ul></div></div></div><div id='method-asFloat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.SortTypes'>Ext.data.SortTypes</span><br/><a href='source/SortTypes.html#Ext-data-SortTypes-method-asFloat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.SortTypes-method-asFloat' class='name expandable'>asFloat</a>( <span class='pre'>s</span> ) : Float</div><div class='description'><div class='short'>Float sorting ...</div><div class='long'><p>Float sorting</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : Mixed<div class='sub-desc'><p>The value being converted</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Float</span><div class='sub-desc'><p>The comparison value</p>\n</div></li></ul></div></div></div><div id='method-asInt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.SortTypes'>Ext.data.SortTypes</span><br/><a href='source/SortTypes.html#Ext-data-SortTypes-method-asInt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.SortTypes-method-asInt' class='name expandable'>asInt</a>( <span class='pre'>s</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Integer sorting ...</div><div class='long'><p>Integer sorting</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : Mixed<div class='sub-desc'><p>The value being converted</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The comparison value</p>\n</div></li></ul></div></div></div><div id='method-asText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.SortTypes'>Ext.data.SortTypes</span><br/><a href='source/SortTypes.html#Ext-data-SortTypes-method-asText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.SortTypes-method-asText' class='name expandable'>asText</a>( <span class='pre'>s</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Strips all HTML tags to sort on text only ...</div><div class='long'><p>Strips all HTML tags to sort on text only</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : Mixed<div class='sub-desc'><p>The value being converted</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The comparison value</p>\n</div></li></ul></div></div></div><div id='method-asUCString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.SortTypes'>Ext.data.SortTypes</span><br/><a href='source/SortTypes.html#Ext-data-SortTypes-method-asUCString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.SortTypes-method-asUCString' class='name expandable'>asUCString</a>( <span class='pre'>s</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Case insensitive string ...</div><div class='long'><p>Case insensitive string</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : Mixed<div class='sub-desc'><p>The value being converted</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The comparison value</p>\n</div></li></ul></div></div></div><div id='method-asUCText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.SortTypes'>Ext.data.SortTypes</span><br/><a href='source/SortTypes.html#Ext-data-SortTypes-method-asUCText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.SortTypes-method-asUCText' class='name expandable'>asUCText</a>( <span class='pre'>s</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Strips all HTML tags to sort on text only - Case insensitive ...</div><div class='long'><p>Strips all HTML tags to sort on text only - Case insensitive</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : Mixed<div class='sub-desc'><p>The value being converted</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The comparison value</p>\n</div></li></ul></div></div></div><div id='method-none' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.SortTypes'>Ext.data.SortTypes</span><br/><a href='source/SortTypes.html#Ext-data-SortTypes-method-none' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.SortTypes-method-none' class='name expandable'>none</a>( <span class='pre'>s</span> ) : Mixed</div><div class='description'><div class='short'>Default sort that does nothing ...</div><div class='long'><p>Default sort that does nothing</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : Mixed<div class='sub-desc'><p>The value being converted</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'><p>The comparison value</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "SortTypes.html#Ext-data-SortTypes",
        "filename": "SortTypes.js"
    }],
    "linenr": 2,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.data.SortTypes",
            "meta": {},
            "name": "stripTagsRE",
            "id": "property-stripTagsRE"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.data.SortTypes",
            "meta": {},
            "name": "asDate",
            "id": "method-asDate"
        }, {
            "tagname": "method",
            "owner": "Ext.data.SortTypes",
            "meta": {},
            "name": "asFloat",
            "id": "method-asFloat"
        }, {
            "tagname": "method",
            "owner": "Ext.data.SortTypes",
            "meta": {},
            "name": "asInt",
            "id": "method-asInt"
        }, {
            "tagname": "method",
            "owner": "Ext.data.SortTypes",
            "meta": {},
            "name": "asText",
            "id": "method-asText"
        }, {
            "tagname": "method",
            "owner": "Ext.data.SortTypes",
            "meta": {},
            "name": "asUCString",
            "id": "method-asUCString"
        }, {
            "tagname": "method",
            "owner": "Ext.data.SortTypes",
            "meta": {},
            "name": "asUCText",
            "id": "method-asUCText"
        }, {
            "tagname": "method",
            "owner": "Ext.data.SortTypes",
            "meta": {},
            "name": "none",
            "id": "method-none"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.data.SortTypes",
    "singleton": true,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.data.SortTypes",
    "mixins": [],
    "mixedInto": []
});