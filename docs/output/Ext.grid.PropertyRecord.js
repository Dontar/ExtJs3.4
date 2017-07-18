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
Ext.data.JsonP.Ext_grid_PropertyRecord({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/PropertyGrid.html#Ext-grid-PropertyRecord' target='_blank'>PropertyGrid.js</a></div></pre><div class='doc-contents'><p>A specific <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a> type that represents a name/value pair and is made to work with the\n<a href=\"#!/api/Ext.grid.PropertyGrid\" rel=\"Ext.grid.PropertyGrid\" class=\"docClass\">Ext.grid.PropertyGrid</a>.  Typically, PropertyRecords do not need to be created directly as they can be\ncreated implicitly by simply using the appropriate data configs either via the <a href=\"#!/api/Ext.grid.PropertyGrid-cfg-source\" rel=\"Ext.grid.PropertyGrid-cfg-source\" class=\"docClass\">Ext.grid.PropertyGrid.source</a>\nconfig property or by calling <a href=\"#!/api/Ext.grid.PropertyGrid-method-setSource\" rel=\"Ext.grid.PropertyGrid-method-setSource\" class=\"docClass\">Ext.grid.PropertyGrid.setSource</a>.  However, if the need arises, these records\ncan also be created explicitly as shwon below.  Example usage:</p>\n\n<pre><code>var rec = new <a href=\"#!/api/Ext.grid.PropertyRecord\" rel=\"Ext.grid.PropertyRecord\" class=\"docClass\">Ext.grid.PropertyRecord</a>({\n    name: 'Birthday',\n    value: new Date(Date.parse('05/26/1972'))\n});\n// Add record to an already populated grid\ngrid.store.addSorted(rec);\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.PropertyRecord'>Ext.grid.PropertyRecord</span><br/><a href='source/PropertyGrid.html#Ext-grid-PropertyRecord-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.grid.PropertyRecord-method-constructor' class='name expandable'>Ext.grid.PropertyRecord</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.grid.PropertyRecord\" rel=\"Ext.grid.PropertyRecord\" class=\"docClass\">Ext.grid.PropertyRecord</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>A data object in the format: {name: [name], value: [value]}.  The specified value's type\nwill be read automatically by the grid to determine the type of editor to use when displaying it.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.grid.PropertyRecord\" rel=\"Ext.grid.PropertyRecord\" class=\"docClass\">Ext.grid.PropertyRecord</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "PropertyGrid.html#Ext-grid-PropertyRecord",
        "filename": "PropertyGrid.js"
    }],
    "linenr": 1,
    "members": {
        "property": [],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.grid.PropertyRecord",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.grid.PropertyRecord",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.grid.PropertyRecord",
    "mixins": [],
    "mixedInto": []
});