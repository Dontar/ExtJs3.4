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
Ext.data.JsonP.Ext_data_DataWriter({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": ["Ext.data.JsonWriter", "Ext.data.XmlWriter"],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.data.JsonWriter' rel='Ext.data.JsonWriter' class='docClass'>Ext.data.JsonWriter</a></div><div class='dependency'><a href='#!/api/Ext.data.XmlWriter' rel='Ext.data.XmlWriter' class='docClass'>Ext.data.XmlWriter</a></div><h4>Files</h4><div class='dependency'><a href='source/DataWriter.html#Ext-data-DataWriter' target='_blank'>DataWriter.js</a></div></pre><div class='doc-contents'><p><a href=\"#!/api/Ext.data.DataWriter\" rel=\"Ext.data.DataWriter\" class=\"docClass\">Ext.data.DataWriter</a> facilitates create, update, and destroy actions between\nan <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> and a server-side framework. A Writer enabled Store will\nautomatically manage the Ajax requests to perform CRUD actions on a Store.</p>\n\n\n<p><a href=\"#!/api/Ext.data.DataWriter\" rel=\"Ext.data.DataWriter\" class=\"docClass\">Ext.data.DataWriter</a> is an abstract base class which is intended to be extended\nand should not be created directly. For existing implementations, see\n<a href=\"#!/api/Ext.data.JsonWriter\" rel=\"Ext.data.JsonWriter\" class=\"docClass\">Ext.data.JsonWriter</a>.</p>\n\n\n<p>Creating a writer is simple:</p>\n\n\n<pre><code>var writer = new <a href=\"#!/api/Ext.data.JsonWriter\" rel=\"Ext.data.JsonWriter\" class=\"docClass\">Ext.data.JsonWriter</a>({\n    encode: false   // &lt;--- false causes data to be printed to jsonData config-property of Ext.Ajax#reqeust\n});\n</code></pre>\n\n\n<ul>\n<li><p>Same old JsonReader as Ext-2.x:</p></li>\n</ul>\n\n\n<pre><code>var reader = new <a href=\"#!/api/Ext.data.JsonReader\" rel=\"Ext.data.JsonReader\" class=\"docClass\">Ext.data.JsonReader</a>({idProperty: 'id'}, [{name: 'first'}, {name: 'last'}, {name: 'email'}]);\n</code></pre>\n\n\n\n\n<p>The proxy for a writer enabled store can be configured with a simple <code>url</code>:</p>\n\n\n<pre><code>// Create a standard HttpProxy instance.\nvar proxy = new <a href=\"#!/api/Ext.data.HttpProxy\" rel=\"Ext.data.HttpProxy\" class=\"docClass\">Ext.data.HttpProxy</a>({\n    url: 'app.php/users'    // &lt;--- Supports \"provides\"-type urls, such as '/users.json', '/products.xml' (Hello Rails/Merb)\n});\n</code></pre>\n\n\n<p>For finer grained control, the proxy may also be configured with an <code>API</code>:</p>\n\n\n<pre><code>// Maximum flexibility with the API-configuration\nvar proxy = new <a href=\"#!/api/Ext.data.HttpProxy\" rel=\"Ext.data.HttpProxy\" class=\"docClass\">Ext.data.HttpProxy</a>({\n    api: {\n        read    : 'app.php/users/read',\n        create  : 'app.php/users/create',\n        update  : 'app.php/users/update',\n        destroy : {  // &lt;--- Supports object-syntax as well\n            url: 'app.php/users/destroy',\n            method: \"DELETE\"\n        }\n    }\n});\n</code></pre>\n\n\n<p>Pulling it all together into a Writer-enabled Store:</p>\n\n\n<pre><code>var store = new <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>({\n    proxy: proxy,\n    reader: reader,\n    writer: writer,\n    autoLoad: true,\n    autoSave: true  // -- Cell-level updates.\n});\n</code></pre>\n\n\n<p>Initiating write-actions <b>automatically</b>, using the existing Ext2.0 Store/Record API:</p>\n\n\n<pre><code>var rec = store.getAt(0);\nrec.set('email', 'foo@bar.com');  // &lt;--- Immediately initiates an UPDATE action through configured proxy.\n\nstore.remove(rec);  // &lt;---- Immediately initiates a DESTROY action through configured proxy.\n</code></pre>\n\n\n<p>For <b>record/batch</b> updates, use the Store-configuration <a href=\"#!/api/Ext.data.Store-cfg-autoSave\" rel=\"Ext.data.Store-cfg-autoSave\" class=\"docClass\">autoSave:false</a></p>\n\n\n<pre><code>var store = new <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>({\n    proxy: proxy,\n    reader: reader,\n    writer: writer,\n    autoLoad: true,\n    autoSave: false  // -- disable cell-updates\n});\n\nvar urec = store.getAt(0);\nurec.set('email', 'foo@bar.com');\n\nvar drec = store.getAt(1);\nstore.remove(drec);\n\n// Push the button!\nstore.save();\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-createRecord' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataWriter'>Ext.data.DataWriter</span><br/><a href='source/DataWriter.html#Ext-data-DataWriter-cfg-createRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-cfg-createRecord' class='name not-expandable'>createRecord</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'><p>Abstract method that should be implemented in all subclasses\n(e.g.: <a href=\"#!/api/Ext.data.JsonWriter-method-createRecord\" rel=\"Ext.data.JsonWriter-method-createRecord\" class=\"docClass\">JsonWriter.createRecord</a>)</p>\n</div><div class='long'><p>Abstract method that should be implemented in all subclasses\n(e.g.: <a href=\"#!/api/Ext.data.JsonWriter-method-createRecord\" rel=\"Ext.data.JsonWriter-method-createRecord\" class=\"docClass\">JsonWriter.createRecord</a>)</p>\n</div></div></div><div id='cfg-destroyRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataWriter'>Ext.data.DataWriter</span><br/><a href='source/DataWriter.html#Ext-data-DataWriter-cfg-destroyRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-cfg-destroyRecord' class='name not-expandable'>destroyRecord</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'><p>Abstract method that should be implemented in all subclasses\n(e.g.: <a href=\"#!/api/Ext.data.JsonWriter-cfg-destroyRecord\" rel=\"Ext.data.JsonWriter-cfg-destroyRecord\" class=\"docClass\">JsonWriter.destroyRecord</a>)</p>\n</div><div class='long'><p>Abstract method that should be implemented in all subclasses\n(e.g.: <a href=\"#!/api/Ext.data.JsonWriter-cfg-destroyRecord\" rel=\"Ext.data.JsonWriter-cfg-destroyRecord\" class=\"docClass\">JsonWriter.destroyRecord</a>)</p>\n</div></div></div><div id='cfg-listful' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataWriter'>Ext.data.DataWriter</span><br/><a href='source/DataWriter.html#Ext-data-DataWriter-cfg-listful' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-cfg-listful' class='name expandable'>listful</a><span> : Boolean</span></div><div class='description'><div class='short'>false by default. ...</div><div class='long'><p><tt>false</tt> by default.  Set <tt>true</tt> to have the DataWriter <b>always</b> write HTTP params as a list,\neven when acting upon a single record.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-updateRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataWriter'>Ext.data.DataWriter</span><br/><a href='source/DataWriter.html#Ext-data-DataWriter-cfg-updateRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-cfg-updateRecord' class='name not-expandable'>updateRecord</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'><p>Abstract method that should be implemented in all subclasses\n(e.g.: <a href=\"#!/api/Ext.data.JsonWriter-cfg-updateRecord\" rel=\"Ext.data.JsonWriter-cfg-updateRecord\" class=\"docClass\">JsonWriter.updateRecord</a></p>\n</div><div class='long'><p>Abstract method that should be implemented in all subclasses\n(e.g.: <a href=\"#!/api/Ext.data.JsonWriter-cfg-updateRecord\" rel=\"Ext.data.JsonWriter-cfg-updateRecord\" class=\"docClass\">JsonWriter.updateRecord</a></p>\n</div></div></div><div id='cfg-writeAllFields' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataWriter'>Ext.data.DataWriter</span><br/><a href='source/DataWriter.html#Ext-data-DataWriter-cfg-writeAllFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-cfg-writeAllFields' class='name expandable'>writeAllFields</a><span> : Boolean</span></div><div class='description'><div class='short'>false by default. ...</div><div class='long'><p><tt>false</tt> by default.  Set <tt>true</tt> to have DataWriter return ALL fields of a modified\nrecord -- not just those that changed.\n<tt>false</tt> to have DataWriter only request modified fields from a record.</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataWriter'>Ext.data.DataWriter</span><br/><a href='source/DataWriter.html#Ext-data-DataWriter-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.data.DataWriter-method-constructor' class='name expandable'>Ext.data.DataWriter</a>( <span class='pre'>meta, recordType</span> ) : <a href=\"#!/api/Ext.data.DataWriter\" rel=\"Ext.data.DataWriter\" class=\"docClass\">Ext.data.DataWriter</a></div><div class='description'><div class='short'>Create a new DataWriter ...</div><div class='long'><p>Create a new DataWriter</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>meta</span> : Object<div class='sub-desc'><p>Metadata configuration options (implementation-specific)</p>\n</div></li><li><span class='pre'>recordType</span> : Object<div class='sub-desc'><p>Either an Array of field definition objects as specified\nin <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>, or an <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a> object created\nusing <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.data.DataWriter\" rel=\"Ext.data.DataWriter\" class=\"docClass\">Ext.data.DataWriter</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-apply' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataWriter'>Ext.data.DataWriter</span><br/><a href='source/DataWriter.html#Ext-data-DataWriter-method-apply' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-method-apply' class='name expandable'>apply</a>( <span class='pre'>params, baseParams, action, rs</span> )</div><div class='description'><div class='short'>Compiles a Store recordset into a data-format defined by an extension such as Ext.data.JsonWriter or Ext.data.XmlWrit...</div><div class='long'><p>Compiles a Store recordset into a data-format defined by an extension such as <a href=\"#!/api/Ext.data.JsonWriter\" rel=\"Ext.data.JsonWriter\" class=\"docClass\">Ext.data.JsonWriter</a> or <a href=\"#!/api/Ext.data.XmlWriter\" rel=\"Ext.data.XmlWriter\" class=\"docClass\">Ext.data.XmlWriter</a> in preparation for a <a href=\"#!/api/Ext.data.Api-property-actions\" rel=\"Ext.data.Api-property-actions\" class=\"docClass\">server-write action</a>.  The first two params are similar similar in nature to <a href=\"#!/api/Ext-method-apply\" rel=\"Ext-method-apply\" class=\"docClass\">Ext.apply</a>,\nWhere the first parameter is the <i>receiver</i> of paramaters and the second, baseParams, <i>the source</i>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : Object<div class='sub-desc'><p>The request-params receiver.</p>\n</div></li><li><span class='pre'>baseParams</span> : Object<div class='sub-desc'><p>as defined by <a href=\"#!/api/Ext.data.Store-property-baseParams\" rel=\"Ext.data.Store-property-baseParams\" class=\"docClass\">Ext.data.Store.baseParams</a>.  The baseParms must be encoded by the extending class, eg: <a href=\"#!/api/Ext.data.JsonWriter\" rel=\"Ext.data.JsonWriter\" class=\"docClass\">Ext.data.JsonWriter</a>, <a href=\"#!/api/Ext.data.XmlWriter\" rel=\"Ext.data.XmlWriter\" class=\"docClass\">Ext.data.XmlWriter</a>.</p>\n</div></li><li><span class='pre'>action</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>[<a href=\"#!/api/Ext.data.Api-property-actions\" rel=\"Ext.data.Api-property-actions\" class=\"docClass\">create|update|destroy</a>]</p>\n</div></li><li><span class='pre'>rs</span> : Record/Record[]<div class='sub-desc'><p>The recordset to write, the subject(s) of the write action.</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataWriter'>Ext.data.DataWriter</span><br/><a href='source/DataWriter.html#Ext-data-DataWriter-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-method-render' class='name expandable'>render</a>( <span class='pre'>action, rs, params, data</span> )</div><div class='description'><div class='short'>abstract method meant to be overridden by all DataWriter extensions. ...</div><div class='long'><p>abstract method meant to be overridden by all DataWriter extensions.  It's the extension's job to apply the \"data\" to the \"params\".\nThe data-object provided to render is populated with data according to the meta-info defined in the user's DataReader config,</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>action</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>[Ext.data.Api.actions.create|read|update|destroy]</p>\n</div></li><li><span class='pre'>rs</span> : Record[]<div class='sub-desc'><p>Store recordset</p>\n</div></li><li><span class='pre'>params</span> : Object<div class='sub-desc'><p>Http params to be sent to server.</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>object populated according to DataReader meta-data.</p>\n</div></li></ul></div></div></div><div id='method-toArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataWriter'>Ext.data.DataWriter</span><br/><a href='source/DataWriter.html#Ext-data-DataWriter-method-toArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-method-toArray' class='name expandable'>toArray</a>( <span class='pre'>data</span> ) : Object[]<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Converts a Hashed Ext.data.Record to fields-array array suitable\nfor encoding to xml via XTemplate, eg:\n\n\n&lt;tpl for...</div><div class='long'><p>Converts a <a href=\"#!/api/Ext.data.DataWriter-method-toHash\" rel=\"Ext.data.DataWriter-method-toHash\" class=\"docClass\">Hashed</a> <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a> to fields-array array suitable\nfor encoding to xml via XTemplate, eg:\n<code></p>\n\n<pre>&lt;tpl for=\".\">&lt;{name}>{value}&lt;/{name}&lt;/tpl></pre>\n\n\n<p></code>\neg, <b>non-phantom</b>:\n<code></p>\n\n<pre>{id: 1, first: 'foo', last: 'bar'} --> [{name: 'id', value: 1}, {name: 'first', value: 'foo'}, {name: 'last', value: 'bar'}]</pre>\n\n\n<p></code>\n<a href=\"#!/api/Ext.data.Record-property-phantom\" rel=\"Ext.data.Record-property-phantom\" class=\"docClass\">Phantom</a> records will have had their idProperty omitted in <a href=\"#!/api/Ext.data.DataWriter-method-toHash\" rel=\"Ext.data.DataWriter-method-toHash\" class=\"docClass\">toHash</a> if determined to be auto-generated.\nNon AUTOINCREMENT pks should have been protected.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Hash<div class='sub-desc'><p>Hashed by <a href=\"#!/api/Ext.data.DataWriter-method-toHash\" rel=\"Ext.data.DataWriter-method-toHash\" class=\"docClass\">Ext.data.DataWriter.toHash</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'><p>Array of attribute-objects.</p>\n</div></li></ul></div></div></div><div id='method-toHash' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DataWriter'>Ext.data.DataWriter</span><br/><a href='source/DataWriter.html#Ext-data-DataWriter-method-toHash' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-method-toHash' class='name expandable'>toHash</a>( <span class='pre'>rec, config</span> ) : Object<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Converts a Record to a hash, taking into account the state of the Ext.data.Record along with configuration properties...</div><div class='long'><p>Converts a Record to a hash, taking into account the state of the <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a> along with configuration properties\nrelated to its rendering, such as <a href=\"#!/api/Ext.data.DataWriter-cfg-writeAllFields\" rel=\"Ext.data.DataWriter-cfg-writeAllFields\" class=\"docClass\">writeAllFields</a>, <a href=\"#!/api/Ext.data.Record-property-phantom\" rel=\"Ext.data.Record-property-phantom\" class=\"docClass\">phantom</a>, <a href=\"#!/api/Ext.data.Record-method-getChanges\" rel=\"Ext.data.Record-method-getChanges\" class=\"docClass\">getChanges</a> and\nidProperty</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rec</span> : <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a><div class='sub-desc'><p>The Record from which to create a hash.</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p><b>NOT YET IMPLEMENTED</b>.  Will implement an exlude/only configuration for fine-control over which fields do/don't get rendered.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>TODO Implement excludes/only configuration with 2nd param?</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "DataWriter.html#Ext-data-DataWriter",
        "filename": "DataWriter.js"
    }],
    "linenr": 1,
    "members": {
        "property": [],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.data.DataWriter",
            "meta": {},
            "name": "createRecord",
            "id": "cfg-createRecord"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.DataWriter",
            "meta": {},
            "name": "destroyRecord",
            "id": "cfg-destroyRecord"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.DataWriter",
            "meta": {},
            "name": "listful",
            "id": "cfg-listful"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.DataWriter",
            "meta": {},
            "name": "updateRecord",
            "id": "cfg-updateRecord"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.DataWriter",
            "meta": {},
            "name": "writeAllFields",
            "id": "cfg-writeAllFields"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.data.DataWriter",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.data.DataWriter",
            "meta": {},
            "name": "apply",
            "id": "method-apply"
        }, {
            "tagname": "method",
            "owner": "Ext.data.DataWriter",
            "meta": {},
            "name": "render",
            "id": "method-render"
        }, {
            "tagname": "method",
            "owner": "Ext.data.DataWriter",
            "meta": {
                "protected": true
            },
            "name": "toArray",
            "id": "method-toArray"
        }, {
            "tagname": "method",
            "owner": "Ext.data.DataWriter",
            "meta": {
                "protected": true
            },
            "name": "toHash",
            "id": "method-toHash"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.data.DataWriter",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.data.DataWriter",
    "mixins": [],
    "mixedInto": []
});