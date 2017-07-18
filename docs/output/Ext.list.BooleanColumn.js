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
Ext.data.JsonP.Ext_list_BooleanColumn({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": "Ext.list.Column",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.list.Column' rel='Ext.list.Column' class='docClass'>Ext.list.Column</a><div class='subclass '><strong>Ext.list.BooleanColumn</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Column2.html#Ext-list-BooleanColumn' target='_blank'>Column.js</a></div></pre><div class='doc-contents'><p>A Column definition class which renders boolean data fields.  See the xtype\nconfig option of <a href=\"#!/api/Ext.list.Column\" rel=\"Ext.list.Column\" class=\"docClass\">Ext.list.Column</a> for more details.</p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-align' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.list.Column' rel='Ext.list.Column' class='defined-in docClass'>Ext.list.Column</a><br/><a href='source/Column2.html#Ext-list-Column-cfg-align' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-align' class='name expandable'>align</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Set the CSS text-align property of the column. ...</div><div class='long'><p>Set the CSS text-align property of the column. Defaults to <tt>'left'</tt>.</p>\n<p>Defaults to: <code>'left'</code></p></div></div></div><div id='cfg-cls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.list.Column' rel='Ext.list.Column' class='defined-in docClass'>Ext.list.Column</a><br/><a href='source/Column2.html#Ext-list-Column-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-cls' class='name expandable'>cls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Optional. ...</div><div class='long'><p>Optional. This option can be used to add a CSS class to the cell of each\nrow for this column.</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='cfg-dataIndex' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.list.Column' rel='Ext.list.Column' class='defined-in docClass'>Ext.list.Column</a><br/><a href='source/Column2.html#Ext-list-Column-cfg-dataIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-dataIndex' class='name expandable'>dataIndex</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Required. ...</div><div class='long'><p><b>Required</b>. The name of the field in the\nListViews's <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>'s <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a> definition from\nwhich to draw the column's value.</p>\n\n</div></div></div><div id='cfg-falseText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.list.BooleanColumn'>Ext.list.BooleanColumn</span><br/><a href='source/Column2.html#Ext-list-BooleanColumn-cfg-falseText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.BooleanColumn-cfg-falseText' class='name expandable'>falseText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The string returned by the renderer when the column value is falsey (but not undefined) (defaults to\n'false'). ...</div><div class='long'><p>The string returned by the renderer when the column value is falsey (but not undefined) (defaults to\n<tt>'false'</tt>).</p>\n<p>Defaults to: <code>'false'</code></p></div></div></div><div id='cfg-header' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.list.Column' rel='Ext.list.Column' class='defined-in docClass'>Ext.list.Column</a><br/><a href='source/Column2.html#Ext-list-Column-cfg-header' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-header' class='name expandable'>header</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Optional. ...</div><div class='long'><p>Optional. The header text to be used as innerHTML\n(html tags are accepted) to display in the ListView.  <b>Note</b>: to\nhave a clickable header with no text displayed use <tt>'&#160;'</tt>.</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='cfg-isColumn' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.list.Column' rel='Ext.list.Column' class='defined-in docClass'>Ext.list.Column</a><br/><a href='source/Column2.html#Ext-list-Column-cfg-isColumn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-isColumn' class='name expandable'>isColumn</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Used by ListView constructor method to avoid reprocessing a Column\nif isColumn is not set ListView will recreate a ne...</div><div class='long'><p>Used by ListView constructor method to avoid reprocessing a Column\nif <code>isColumn</code> is not set ListView will recreate a new <a href=\"#!/api/Ext.list.Column\" rel=\"Ext.list.Column\" class=\"docClass\">Ext.list.Column</a>\nDefaults to true.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-tpl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.list.Column' rel='Ext.list.Column' class='defined-in docClass'>Ext.list.Column</a><br/><a href='source/Column2.html#Ext-list-Column-cfg-tpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-tpl' class='name expandable'>tpl</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Optional. ...</div><div class='long'><p>Optional. Specify a string to pass as the\nconfiguration string for <a href=\"#!/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a>.  By default an <a href=\"#!/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a>\nwill be implicitly created using the <tt>dataIndex</tt>.</p>\n</div></div></div><div id='cfg-trueText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.list.BooleanColumn'>Ext.list.BooleanColumn</span><br/><a href='source/Column2.html#Ext-list-BooleanColumn-cfg-trueText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.BooleanColumn-cfg-trueText' class='name expandable'>trueText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The string returned by the renderer when the column value is not falsey (defaults to 'true'). ...</div><div class='long'><p>The string returned by the renderer when the column value is not falsey (defaults to <tt>'true'</tt>).</p>\n<p>Defaults to: <code>'true'</code></p></div></div></div><div id='cfg-undefinedText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.list.BooleanColumn'>Ext.list.BooleanColumn</span><br/><a href='source/Column2.html#Ext-list-BooleanColumn-cfg-undefinedText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.BooleanColumn-cfg-undefinedText' class='name expandable'>undefinedText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The string returned by the renderer when the column value is undefined (defaults to '&#160;'). ...</div><div class='long'><p>The string returned by the renderer when the column value is undefined (defaults to <tt>'&#160;'</tt>).</p>\n<p>Defaults to: <code>'&amp;#160;'</code></p></div></div></div><div id='cfg-width' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.list.Column' rel='Ext.list.Column' class='defined-in docClass'>Ext.list.Column</a><br/><a href='source/Column2.html#Ext-list-Column-cfg-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-width' class='name expandable'>width</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Optional. ...</div><div class='long'><p>Optional. Percentage of the container width\nthis column should be allocated.  Columns that have no width specified will be\nallocated with an equal percentage to fill 100% of the container width.  To easily take\nadvantage of the full container width, leave the width of at least one column undefined.\nNote that if you do not want to take up the full width of the container, the width of\nevery column needs to be explicitly defined.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.list.BooleanColumn'>Ext.list.BooleanColumn</span><br/><a href='source/Column2.html#Ext-list-BooleanColumn-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.list.BooleanColumn-method-constructor' class='name expandable'>Ext.list.BooleanColumn</a>( <span class='pre'>c</span> ) : <a href=\"#!/api/Ext.list.BooleanColumn\" rel=\"Ext.list.BooleanColumn\" class=\"docClass\">Ext.list.BooleanColumn</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.list.BooleanColumn\" rel=\"Ext.list.BooleanColumn\" class=\"docClass\">Ext.list.BooleanColumn</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>",
    "superclasses": ["Ext.list.Column"],
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
        "href": "Column2.html#Ext-list-BooleanColumn",
        "filename": "Column.js"
    }],
    "linenr": 110,
    "members": {
        "property": [],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.list.Column",
            "meta": {},
            "name": "align",
            "id": "cfg-align"
        }, {
            "tagname": "cfg",
            "owner": "Ext.list.Column",
            "meta": {},
            "name": "cls",
            "id": "cfg-cls"
        }, {
            "tagname": "cfg",
            "owner": "Ext.list.Column",
            "meta": {},
            "name": "dataIndex",
            "id": "cfg-dataIndex"
        }, {
            "tagname": "cfg",
            "owner": "Ext.list.BooleanColumn",
            "meta": {},
            "name": "falseText",
            "id": "cfg-falseText"
        }, {
            "tagname": "cfg",
            "owner": "Ext.list.Column",
            "meta": {},
            "name": "header",
            "id": "cfg-header"
        }, {
            "tagname": "cfg",
            "owner": "Ext.list.Column",
            "meta": {
                "private": true
            },
            "name": "isColumn",
            "id": "cfg-isColumn"
        }, {
            "tagname": "cfg",
            "owner": "Ext.list.Column",
            "meta": {},
            "name": "tpl",
            "id": "cfg-tpl"
        }, {
            "tagname": "cfg",
            "owner": "Ext.list.BooleanColumn",
            "meta": {},
            "name": "trueText",
            "id": "cfg-trueText"
        }, {
            "tagname": "cfg",
            "owner": "Ext.list.BooleanColumn",
            "meta": {},
            "name": "undefinedText",
            "id": "cfg-undefinedText"
        }, {
            "tagname": "cfg",
            "owner": "Ext.list.Column",
            "meta": {},
            "name": "width",
            "id": "cfg-width"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.list.BooleanColumn",
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
    "name": "Ext.list.BooleanColumn",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.list.BooleanColumn",
    "mixins": [],
    "mixedInto": []
});