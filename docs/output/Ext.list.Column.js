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
Ext.data.JsonP.Ext_list_Column({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": ["Ext.list.BooleanColumn", "Ext.list.DateColumn",
        "Ext.list.NumberColumn"],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.list.BooleanColumn' rel='Ext.list.BooleanColumn' class='docClass'>Ext.list.BooleanColumn</a></div><div class='dependency'><a href='#!/api/Ext.list.DateColumn' rel='Ext.list.DateColumn' class='docClass'>Ext.list.DateColumn</a></div><div class='dependency'><a href='#!/api/Ext.list.NumberColumn' rel='Ext.list.NumberColumn' class='docClass'>Ext.list.NumberColumn</a></div><h4>Files</h4><div class='dependency'><a href='source/Column2.html#Ext-list-Column' target='_blank'>Column.js</a></div></pre><div class='doc-contents'><p>This class encapsulates column configuration data to be used in the initialization of a\n<a href=\"#!/api/Ext.list.ListView\" rel=\"Ext.list.ListView\" class=\"docClass\">ListView</a>.</p>\n\n\n<p>While subclasses are provided to render data in different ways, this class renders a passed\ndata field unchanged and is usually used for textual columns.</p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-align' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.list.Column'>Ext.list.Column</span><br/><a href='source/Column2.html#Ext-list-Column-cfg-align' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-align' class='name expandable'>align</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Set the CSS text-align property of the column. ...</div><div class='long'><p>Set the CSS text-align property of the column. Defaults to <tt>'left'</tt>.</p>\n<p>Defaults to: <code>'left'</code></p></div></div></div><div id='cfg-cls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.list.Column'>Ext.list.Column</span><br/><a href='source/Column2.html#Ext-list-Column-cfg-cls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-cls' class='name expandable'>cls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Optional. ...</div><div class='long'><p>Optional. This option can be used to add a CSS class to the cell of each\nrow for this column.</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='cfg-dataIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.list.Column'>Ext.list.Column</span><br/><a href='source/Column2.html#Ext-list-Column-cfg-dataIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-dataIndex' class='name expandable'>dataIndex</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Required. ...</div><div class='long'><p><b>Required</b>. The name of the field in the\nListViews's <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>'s <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a> definition from\nwhich to draw the column's value.</p>\n\n</div></div></div><div id='cfg-header' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.list.Column'>Ext.list.Column</span><br/><a href='source/Column2.html#Ext-list-Column-cfg-header' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-header' class='name expandable'>header</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Optional. ...</div><div class='long'><p>Optional. The header text to be used as innerHTML\n(html tags are accepted) to display in the ListView.  <b>Note</b>: to\nhave a clickable header with no text displayed use <tt>'&#160;'</tt>.</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='cfg-isColumn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.list.Column'>Ext.list.Column</span><br/><a href='source/Column2.html#Ext-list-Column-cfg-isColumn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-isColumn' class='name expandable'>isColumn</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Used by ListView constructor method to avoid reprocessing a Column\nif isColumn is not set ListView will recreate a ne...</div><div class='long'><p>Used by ListView constructor method to avoid reprocessing a Column\nif <code>isColumn</code> is not set ListView will recreate a new <a href=\"#!/api/Ext.list.Column\" rel=\"Ext.list.Column\" class=\"docClass\">Ext.list.Column</a>\nDefaults to true.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-tpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.list.Column'>Ext.list.Column</span><br/><a href='source/Column2.html#Ext-list-Column-cfg-tpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-tpl' class='name expandable'>tpl</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Optional. ...</div><div class='long'><p>Optional. Specify a string to pass as the\nconfiguration string for <a href=\"#!/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a>.  By default an <a href=\"#!/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a>\nwill be implicitly created using the <tt>dataIndex</tt>.</p>\n</div></div></div><div id='cfg-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.list.Column'>Ext.list.Column</span><br/><a href='source/Column2.html#Ext-list-Column-cfg-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.list.Column-cfg-width' class='name expandable'>width</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Optional. ...</div><div class='long'><p>Optional. Percentage of the container width\nthis column should be allocated.  Columns that have no width specified will be\nallocated with an equal percentage to fill 100% of the container width.  To easily take\nadvantage of the full container width, leave the width of at least one column undefined.\nNote that if you do not want to take up the full width of the container, the width of\nevery column needs to be explicitly defined.</p>\n</div></div></div></div></div></div></div>",
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
        "href": "Column2.html#Ext-list-Column",
        "filename": "Column.js"
    }],
    "linenr": 1,
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
            "owner": "Ext.list.Column",
            "meta": {},
            "name": "width",
            "id": "cfg-width"
        }],
        "css_var": [],
        "method": [],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.list.Column",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.list.Column",
    "mixins": [],
    "mixedInto": []
});