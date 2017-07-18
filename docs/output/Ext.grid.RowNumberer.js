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
Ext.data.JsonP.Ext_grid_RowNumberer({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/RowNumberer.html#Ext-grid-RowNumberer' target='_blank'>RowNumberer.js</a></div></pre><div class='doc-contents'><p>This is a utility class that can be passed into a <a href=\"#!/api/Ext.grid.ColumnModel\" rel=\"Ext.grid.ColumnModel\" class=\"docClass\">Ext.grid.ColumnModel</a> as a column config that provides\nan automatic row numbering column.</p>\n\n<br>Usage:<br>\n\n\n\n\n<pre><code> // This is a typical column config with the first column providing row numbers\n var colModel = new <a href=\"#!/api/Ext.grid.ColumnModel\" rel=\"Ext.grid.ColumnModel\" class=\"docClass\">Ext.grid.ColumnModel</a>([\n    new <a href=\"#!/api/Ext.grid.RowNumberer\" rel=\"Ext.grid.RowNumberer\" class=\"docClass\">Ext.grid.RowNumberer</a>(),\n    {header: \"Name\", width: 80, sortable: true},\n    {header: \"Code\", width: 50, sortable: true},\n    {header: \"Description\", width: 200, sortable: true}\n ]);\n </code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-header' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowNumberer'>Ext.grid.RowNumberer</span><br/><a href='source/RowNumberer.html#Ext-grid-RowNumberer-cfg-header' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowNumberer-cfg-header' class='name expandable'>header</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Any valid text or HTML fragment to display in the header cell for the row\nnumber column (defaults to ''). ...</div><div class='long'><p>Any valid text or HTML fragment to display in the header cell for the row\nnumber column (defaults to '').</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div><div id='cfg-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowNumberer'>Ext.grid.RowNumberer</span><br/><a href='source/RowNumberer.html#Ext-grid-RowNumberer-cfg-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowNumberer-cfg-width' class='name expandable'>width</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The default width in pixels of the row number column (defaults to 23). ...</div><div class='long'><p>The default width in pixels of the row number column (defaults to 23).</p>\n<p>Defaults to: <code>23</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-dataIndex' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowNumberer'>Ext.grid.RowNumberer</span><br/><a href='source/RowNumberer.html#Ext-grid-RowNumberer-property-dataIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowNumberer-property-dataIndex' class='name expandable'>dataIndex</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='property-fixed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowNumberer'>Ext.grid.RowNumberer</span><br/><a href='source/RowNumberer.html#Ext-grid-RowNumberer-property-fixed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowNumberer-property-fixed' class='name expandable'>fixed</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-hideable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowNumberer'>Ext.grid.RowNumberer</span><br/><a href='source/RowNumberer.html#Ext-grid-RowNumberer-property-hideable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowNumberer-property-hideable' class='name expandable'>hideable</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-id' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowNumberer'>Ext.grid.RowNumberer</span><br/><a href='source/RowNumberer.html#Ext-grid-RowNumberer-property-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowNumberer-property-id' class='name expandable'>id</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'numberer'</code></p></div></div></div><div id='property-menuDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowNumberer'>Ext.grid.RowNumberer</span><br/><a href='source/RowNumberer.html#Ext-grid-RowNumberer-property-menuDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowNumberer-property-menuDisabled' class='name expandable'>menuDisabled</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-rowspan' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowNumberer'>Ext.grid.RowNumberer</span><br/><a href='source/RowNumberer.html#Ext-grid-RowNumberer-property-rowspan' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowNumberer-property-rowspan' class='name not-expandable'>rowspan</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowNumberer'>Ext.grid.RowNumberer</span><br/><a href='source/RowNumberer.html#Ext-grid-RowNumberer-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.grid.RowNumberer-method-constructor' class='name expandable'>Ext.grid.RowNumberer</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.grid.RowNumberer\" rel=\"Ext.grid.RowNumberer\" class=\"docClass\">Ext.grid.RowNumberer</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The configuration options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.grid.RowNumberer\" rel=\"Ext.grid.RowNumberer\" class=\"docClass\">Ext.grid.RowNumberer</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-renderer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowNumberer'>Ext.grid.RowNumberer</span><br/><a href='source/RowNumberer.html#Ext-grid-RowNumberer-method-renderer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowNumberer-method-renderer' class='name expandable'>renderer</a>( <span class='pre'>v, p, record, rowIndex</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>p</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>record</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>rowIndex</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "RowNumberer.html#Ext-grid-RowNumberer",
        "filename": "RowNumberer.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.grid.RowNumberer",
            "meta": {
                "private": true
            },
            "name": "dataIndex",
            "id": "property-dataIndex"
        }, {
            "tagname": "property",
            "owner": "Ext.grid.RowNumberer",
            "meta": {
                "private": true
            },
            "name": "fixed",
            "id": "property-fixed"
        }, {
            "tagname": "property",
            "owner": "Ext.grid.RowNumberer",
            "meta": {
                "private": true
            },
            "name": "hideable",
            "id": "property-hideable"
        }, {
            "tagname": "property",
            "owner": "Ext.grid.RowNumberer",
            "meta": {
                "private": true
            },
            "name": "id",
            "id": "property-id"
        }, {
            "tagname": "property",
            "owner": "Ext.grid.RowNumberer",
            "meta": {
                "private": true
            },
            "name": "menuDisabled",
            "id": "property-menuDisabled"
        }, {
            "tagname": "property",
            "owner": "Ext.grid.RowNumberer",
            "meta": {
                "private": true
            },
            "name": "rowspan",
            "id": "property-rowspan"
        }],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.grid.RowNumberer",
            "meta": {},
            "name": "header",
            "id": "cfg-header"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.RowNumberer",
            "meta": {},
            "name": "width",
            "id": "cfg-width"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.grid.RowNumberer",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowNumberer",
            "meta": {
                "private": true
            },
            "name": "renderer",
            "id": "method-renderer"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.grid.RowNumberer",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.grid.RowNumberer",
    "mixins": [],
    "mixedInto": []
});