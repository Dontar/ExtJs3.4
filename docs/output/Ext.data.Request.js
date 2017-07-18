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
Ext.data.JsonP.Ext_data_Request({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Request.html#Ext-data-Request' target='_blank'>Request.js</a></div></pre><div class='doc-contents'><p>A simple Request class used internally to the data package to provide more generalized remote-requests\nto a DataProxy.\nTODO Not yet implemented.  Implement in <a href=\"#!/api/Ext.data.Store-method-execute\" rel=\"Ext.data.Store-method-execute\" class=\"docClass\">Ext.data.Store.execute</a></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-action' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Request'>Ext.data.Request</span><br/><a href='source/Request.html#Ext-data-Request-cfg-action' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Request-cfg-action' class='name not-expandable'>action</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-callback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Request'>Ext.data.Request</span><br/><a href='source/Request.html#Ext-data-Request-cfg-callback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Request-cfg-callback' class='name not-expandable'>callback</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'><p>The function to call when request is complete</p>\n</div><div class='long'><p>The function to call when request is complete</p>\n</div></div></div><div id='cfg-params' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Request'>Ext.data.Request</span><br/><a href='source/Request.html#Ext-data-Request-cfg-params' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Request-cfg-params' class='name not-expandable'>params</a><span> : Object</span></div><div class='description'><div class='short'><p>HTTP request params</p>\n</div><div class='long'><p>HTTP request params</p>\n</div></div></div><div id='cfg-reader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Request'>Ext.data.Request</span><br/><a href='source/Request.html#Ext-data-Request-cfg-reader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Request-cfg-reader' class='name not-expandable'>reader</a><span> : <a href=\"#!/api/Ext.data.DataReader\" rel=\"Ext.data.DataReader\" class=\"docClass\">Ext.data.DataReader</a></span></div><div class='description'><div class='short'><p>The DataReader instance which will parse the received response</p>\n</div><div class='long'><p>The DataReader instance which will parse the received response</p>\n</div></div></div><div id='cfg-rs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Request'>Ext.data.Request</span><br/><a href='source/Request.html#Ext-data-Request-cfg-rs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Request-cfg-rs' class='name not-expandable'>rs</a><span> : <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a>[]/<a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a></span></div><div class='description'><div class='short'><p>The Store recordset associated with the request.</p>\n</div><div class='long'><p>The Store recordset associated with the request.</p>\n</div></div></div><div id='cfg-scope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Request'>Ext.data.Request</span><br/><a href='source/Request.html#Ext-data-Request-cfg-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Request-cfg-scope' class='name not-expandable'>scope</a><span> : Object</span></div><div class='description'><div class='short'><p>The scope of the callback funtion</p>\n</div><div class='long'><p>The scope of the callback funtion</p>\n</div></div></div></div></div></div></div>",
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
        "href": "Request.html#Ext-data-Request",
        "filename": "Request.js"
    }],
    "linenr": 1,
    "members": {
        "property": [],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.data.Request",
            "meta": {},
            "name": "action",
            "id": "cfg-action"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.Request",
            "meta": {},
            "name": "callback",
            "id": "cfg-callback"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.Request",
            "meta": {},
            "name": "params",
            "id": "cfg-params"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.Request",
            "meta": {},
            "name": "reader",
            "id": "cfg-reader"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.Request",
            "meta": {},
            "name": "rs",
            "id": "cfg-rs"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.Request",
            "meta": {},
            "name": "scope",
            "id": "cfg-scope"
        }],
        "css_var": [],
        "method": [],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.data.Request",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.data.Request",
    "mixins": [],
    "mixedInto": []
});