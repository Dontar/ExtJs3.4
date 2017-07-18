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
Ext.data.JsonP.Ext_data_Api({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Api.html#Ext-data-Api' target='_blank'>Api.js</a></div></pre><div class='doc-contents'><p><a href=\"#!/api/Ext.data.Api\" rel=\"Ext.data.Api\" class=\"docClass\">Ext.data.Api</a> is a singleton designed to manage the data API including methods\nfor validating a developer's DataProxy API.  Defines variables for CRUD actions\ncreate, read, update and destroy in addition to a mapping of RESTful HTTP methods\nGET, POST, PUT and DELETE to CRUD actions.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-actions' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Api'>Ext.data.Api</span><br/><a href='source/Api.html#Ext-data-Api-property-actions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Api-property-actions' class='name expandable'>actions</a><span> : Object</span></div><div class='description'><div class='short'>Defined actions corresponding to remote actions:\n\nactions: {\n    create  : 'create',  // Text representing the remote...</div><div class='long'><p>Defined actions corresponding to remote actions:</p>\n\n<pre><code>actions: {\n    create  : 'create',  // Text representing the remote-action to create records on server.\n    read    : 'read',    // Text representing the remote-action to read/load data from server.\n    update  : 'update',  // Text representing the remote-action to update records on server.\n    destroy : 'destroy'  // Text representing the remote-action to destroy records on server.\n}\n</code></pre>\n\n<p>Defaults to: <code>{create: 'create', read: 'read', update: 'update', destroy: 'destroy'}</code></p></div></div></div><div id='property-restActions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Api'>Ext.data.Api</span><br/><a href='source/Api.html#Ext-data-Api-property-restActions' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Api-property-restActions' class='name expandable'>restActions</a><span> : Object</span></div><div class='description'><div class='short'>Defined {CRUD action}:{HTTP method} pairs to associate HTTP methods with the\ncorresponding actions for RESTful proxies. ...</div><div class='long'><p>Defined {CRUD action}:{HTTP method} pairs to associate HTTP methods with the\ncorresponding actions for <a href=\"#!/api/Ext.data.DataProxy-cfg-restful\" rel=\"Ext.data.DataProxy-cfg-restful\" class=\"docClass\">RESTful proxies</a>.\nDefaults to:</p>\n\n<pre><code>restActions : {\n    create  : 'POST',\n    read    : 'GET',\n    update  : 'PUT',\n    destroy : 'DELETE'\n},\n</code></pre>\n\n<p>Defaults to: <code>{create: 'POST', read: 'GET', update: 'PUT', destroy: 'DELETE'}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getVerb' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Api'>Ext.data.Api</span><br/><a href='source/Api.html#Ext-data-Api-method-getVerb' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Api-method-getVerb' class='name expandable'>getVerb</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/null</div><div class='description'><div class='short'>Returns the actual CRUD action KEY \"create\", \"read\", \"update\" or \"destroy\" from the supplied action-name. ...</div><div class='long'><p>Returns the actual CRUD action KEY \"create\", \"read\", \"update\" or \"destroy\" from the supplied action-name.  This method is used internally and shouldn't generally\nneed to be used directly.  The key/value pair of <a href=\"#!/api/Ext.data.Api-property-actions\" rel=\"Ext.data.Api-property-actions\" class=\"docClass\">Ext.data.Api.actions</a> will often be identical but this is not necessarily true.  A developer can override this naming\nconvention if desired.  However, the framework internally calls methods based upon the KEY so a way of retreiving the the words \"create\", \"read\", \"update\" and \"destroy\" is\nrequired.  This method will cache discovered KEYS into the private validActions hash.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The runtime name of the action.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/null</span><div class='sub-desc'><p>returns the action-key, or verb of the user-action or null if invalid.\n@nodoc</p>\n</div></li></ul></div></div></div><div id='method-hasUniqueUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Api'>Ext.data.Api</span><br/><a href='source/Api.html#Ext-data-Api-method-hasUniqueUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Api-method-hasUniqueUrl' class='name expandable'>hasUniqueUrl</a>( <span class='pre'>proxy, verb</span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the supplied verb upon the supplied proxy points to a unique url in that none of the other api-action...</div><div class='long'><p>Returns true if the supplied verb upon the supplied proxy points to a unique url in that none of the other api-actions\npoint to the same url.  The question is important for deciding whether to insert the \"xaction\" HTTP parameter within an\nAjax request.  This method is used internally and shouldn't generally need to be called directly.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>proxy</span> : <a href=\"#!/api/Ext.data.DataProxy\" rel=\"Ext.data.DataProxy\" class=\"docClass\">Ext.data.DataProxy</a><div class='sub-desc'>\n</div></li><li><span class='pre'>verb</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isAction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Api'>Ext.data.Api</span><br/><a href='source/Api.html#Ext-data-Api-method-isAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Api-method-isAction' class='name expandable'>isAction</a>( <span class='pre'>action</span> ) : Boolean</div><div class='description'><div class='short'>Returns true if supplied action-name is a valid API action defined in actions constants ...</div><div class='long'><p>Returns true if supplied action-name is a valid API action defined in <code><a href=\"#!/api/Ext.data.Api-property-actions\" rel=\"Ext.data.Api-property-actions\" class=\"docClass\">actions</a></code> constants</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>action</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Action to test for availability.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isValid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Api'>Ext.data.Api</span><br/><a href='source/Api.html#Ext-data-Api-method-isValid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Api-method-isValid' class='name expandable'>isValid</a>( <span class='pre'>api</span> ) : String[]|true</div><div class='description'><div class='short'>Returns true if the supplied API is valid; that is, check that all keys match defined actions\notherwise returns an ar...</div><div class='long'><p>Returns true if the supplied API is valid; that is, check that all keys match defined actions\notherwise returns an array of mistakes.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>api</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]|true</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-prepare' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Api'>Ext.data.Api</span><br/><a href='source/Api.html#Ext-data-Api-method-prepare' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Api-method-prepare' class='name expandable'>prepare</a>( <span class='pre'>proxy</span> )</div><div class='description'><div class='short'>This method is used internally by DataProxy and should not generally need to be used directly. ...</div><div class='long'><p>This method is used internally by <tt><a href=\"#!/api/Ext.data.DataProxy\" rel=\"Ext.data.DataProxy\" class=\"docClass\">DataProxy</a></tt> and should not generally need to be used directly.\nEach action of a DataProxy api can be initially defined as either a String or an Object.  When specified as an object,\none can explicitly define the HTTP method (GET|POST) to use for each CRUD action.  This method will prepare the supplied API, setting\neach action to the Object form.  If your API-actions do not explicitly define the HTTP method, the \"method\" configuration-parameter will\nbe used.  If the method configuration parameter is not specified, POST will be used.</p>\n\n<pre><code>new <a href=\"#!/api/Ext.data.HttpProxy\" rel=\"Ext.data.HttpProxy\" class=\"docClass\">Ext.data.HttpProxy</a>({\n    method: \"POST\",     // <-- default HTTP method when not specified.\n    api: {\n        create: 'create.php',\n        load: 'read.php',\n        save: 'save.php',\n        destroy: 'destroy.php'\n    }\n});\n\n// Alternatively, one can use the object-form to specify the API\nnew <a href=\"#!/api/Ext.data.HttpProxy\" rel=\"Ext.data.HttpProxy\" class=\"docClass\">Ext.data.HttpProxy</a>({\n    api: {\n        load: {url: 'read.php', method: 'GET'},\n        create: 'create.php',\n        destroy: 'destroy.php',\n        save: 'update.php'\n    }\n});\n        </code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>proxy</span> : <a href=\"#!/api/Ext.data.DataProxy\" rel=\"Ext.data.DataProxy\" class=\"docClass\">Ext.data.DataProxy</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-restify' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Api'>Ext.data.Api</span><br/><a href='source/Api.html#Ext-data-Api-method-restify' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Api-method-restify' class='name expandable'>restify</a>( <span class='pre'>proxy</span> )</div><div class='description'><div class='short'>Prepares a supplied Proxy to be RESTful. ...</div><div class='long'><p>Prepares a supplied Proxy to be RESTful.  Sets the HTTP method for each api-action to be one of\nGET, POST, PUT, DELETE according to the defined <a href=\"#!/api/Ext.data.Api-property-restActions\" rel=\"Ext.data.Api-property-restActions\" class=\"docClass\">restActions</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>proxy</span> : <a href=\"#!/api/Ext.data.DataProxy\" rel=\"Ext.data.DataProxy\" class=\"docClass\">Ext.data.DataProxy</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "Api.html#Ext-data-Api",
        "filename": "Api.js"
    }],
    "linenr": 2,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.data.Api",
            "meta": {},
            "name": "actions",
            "id": "property-actions"
        }, {
            "tagname": "property",
            "owner": "Ext.data.Api",
            "meta": {},
            "name": "restActions",
            "id": "property-restActions"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.data.Api",
            "meta": {},
            "name": "getVerb",
            "id": "method-getVerb"
        }, {
            "tagname": "method",
            "owner": "Ext.data.Api",
            "meta": {},
            "name": "hasUniqueUrl",
            "id": "method-hasUniqueUrl"
        }, {
            "tagname": "method",
            "owner": "Ext.data.Api",
            "meta": {},
            "name": "isAction",
            "id": "method-isAction"
        }, {
            "tagname": "method",
            "owner": "Ext.data.Api",
            "meta": {},
            "name": "isValid",
            "id": "method-isValid"
        }, {
            "tagname": "method",
            "owner": "Ext.data.Api",
            "meta": {},
            "name": "prepare",
            "id": "method-prepare"
        }, {
            "tagname": "method",
            "owner": "Ext.data.Api",
            "meta": {},
            "name": "restify",
            "id": "method-restify"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.data.Api",
    "singleton": true,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.data.Api",
    "mixins": [],
    "mixedInto": []
});