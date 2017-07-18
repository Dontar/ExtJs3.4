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
Ext.data.JsonP.Ext_data_XmlWriter({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": "Ext.data.DataWriter",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.data.DataWriter' rel='Ext.data.DataWriter' class='docClass'>Ext.data.DataWriter</a><div class='subclass '><strong>Ext.data.XmlWriter</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/XmlWriter.html#Ext-data-XmlWriter' target='_blank'>XmlWriter.js</a></div></pre><div class='doc-contents'><p>DataWriter extension for writing an array or single <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a> object(s) in preparation for executing a remote CRUD action via XML.\nXmlWriter uses an instance of <a href=\"#!/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a> for maximum flexibility in defining your own custom XML schema if the default schema is not appropriate for your needs.\nSee the <a href=\"#!/api/Ext.data.XmlWriter-cfg-tpl\" rel=\"Ext.data.XmlWriter-cfg-tpl\" class=\"docClass\">tpl</a> configuration-property.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-createRecord' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataWriter' rel='Ext.data.DataWriter' class='defined-in docClass'>Ext.data.DataWriter</a><br/><a href='source/DataWriter.html#Ext-data-DataWriter-cfg-createRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-cfg-createRecord' class='name not-expandable'>createRecord</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'><p>Abstract method that should be implemented in all subclasses\n(e.g.: <a href=\"#!/api/Ext.data.JsonWriter-method-createRecord\" rel=\"Ext.data.JsonWriter-method-createRecord\" class=\"docClass\">JsonWriter.createRecord</a>)</p>\n</div><div class='long'><p>Abstract method that should be implemented in all subclasses\n(e.g.: <a href=\"#!/api/Ext.data.JsonWriter-method-createRecord\" rel=\"Ext.data.JsonWriter-method-createRecord\" class=\"docClass\">JsonWriter.createRecord</a>)</p>\n</div></div></div><div id='cfg-destroyRecord' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataWriter' rel='Ext.data.DataWriter' class='defined-in docClass'>Ext.data.DataWriter</a><br/><a href='source/DataWriter.html#Ext-data-DataWriter-cfg-destroyRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-cfg-destroyRecord' class='name not-expandable'>destroyRecord</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'><p>Abstract method that should be implemented in all subclasses\n(e.g.: <a href=\"#!/api/Ext.data.JsonWriter-cfg-destroyRecord\" rel=\"Ext.data.JsonWriter-cfg-destroyRecord\" class=\"docClass\">JsonWriter.destroyRecord</a>)</p>\n</div><div class='long'><p>Abstract method that should be implemented in all subclasses\n(e.g.: <a href=\"#!/api/Ext.data.JsonWriter-cfg-destroyRecord\" rel=\"Ext.data.JsonWriter-cfg-destroyRecord\" class=\"docClass\">JsonWriter.destroyRecord</a>)</p>\n</div></div></div><div id='cfg-documentRoot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.XmlWriter'>Ext.data.XmlWriter</span><br/><a href='source/XmlWriter.html#Ext-data-XmlWriter-cfg-documentRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.XmlWriter-cfg-documentRoot' class='name expandable'>documentRoot</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>[xrequest] (Optional) The name of the XML document root-node. ...</div><div class='long'><p>[xrequest] (Optional) The name of the XML document root-node.  <b>Note:</b>\nthis parameter is required </b>only when</b> sending extra <a href=\"#!/api/Ext.data.Store-property-baseParams\" rel=\"Ext.data.Store-property-baseParams\" class=\"docClass\">baseParams</a> to the server\nduring a write-request -- if no baseParams are set, the <a href=\"#!/api/Ext.data.XmlReader-cfg-record\" rel=\"Ext.data.XmlReader-cfg-record\" class=\"docClass\">Ext.data.XmlReader.record</a> meta-property can\nsuffice as the XML document root-node for write-actions involving just a <b>single record</b>.  For requests\ninvolving <b>multiple</b> records and <b>NO</b> baseParams, the <a href=\"#!/api/Ext.data.XmlWriter-cfg-root\" rel=\"Ext.data.XmlWriter-cfg-root\" class=\"docClass\">root</a> property can\nact as the XML document root.</p>\n<p>Defaults to: <code>'xrequest'</code></p></div></div></div><div id='cfg-forceDocumentRoot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.XmlWriter'>Ext.data.XmlWriter</span><br/><a href='source/XmlWriter.html#Ext-data-XmlWriter-cfg-forceDocumentRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.XmlWriter-cfg-forceDocumentRoot' class='name expandable'>forceDocumentRoot</a><span> : Boolean</span></div><div class='description'><div class='short'>[false] Set to true to force XML documents having a root-node as defined\nby documentRoot, even with no baseParams def...</div><div class='long'><p>[false] Set to <tt>true</tt> to force XML documents having a root-node as defined\nby <a href=\"#!/api/Ext.data.XmlWriter-cfg-documentRoot\" rel=\"Ext.data.XmlWriter-cfg-documentRoot\" class=\"docClass\">documentRoot</a>, even with no baseParams defined.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-listful' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataWriter' rel='Ext.data.DataWriter' class='defined-in docClass'>Ext.data.DataWriter</a><br/><a href='source/DataWriter.html#Ext-data-DataWriter-cfg-listful' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-cfg-listful' class='name expandable'>listful</a><span> : Boolean</span></div><div class='description'><div class='short'>false by default. ...</div><div class='long'><p><tt>false</tt> by default.  Set <tt>true</tt> to have the DataWriter <b>always</b> write HTTP params as a list,\neven when acting upon a single record.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-root' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.XmlWriter'>Ext.data.XmlWriter</span><br/><a href='source/XmlWriter.html#Ext-data-XmlWriter-cfg-root' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.XmlWriter-cfg-root' class='name expandable'>root</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>[records] The name of the containing element which will contain the nodes of an write-action involving multiple records. ...</div><div class='long'><p>[records] The name of the containing element which will contain the nodes of an write-action involving <b>multiple</b> records.  Each\nxml-record written to the server will be wrapped in an element named after <a href=\"#!/api/Ext.data.XmlReader-cfg-record\" rel=\"Ext.data.XmlReader-cfg-record\" class=\"docClass\">Ext.data.XmlReader.record</a> property.\neg:\n<code></p>\n\n<pre>&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?>\n&lt;user>&lt;first>Barney&lt;/first>&lt;/user>\n</code></pre>\n\n\n<p>However, when <b>multiple</b> records are written in a batch-operation, these records must be wrapped in a containing\nElement.\neg:\n<code></p>\n\n<pre>&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?>\n    &lt;records>\n        &lt;first>Barney&lt;/first>&lt;/user>\n        &lt;records>&lt;first>Barney&lt;/first>&lt;/user>\n    &lt;/records>\n</code></pre>\n\n\n<p>Defaults to <tt>records</tt>.  Do not confuse the nature of this property with that of <a href=\"#!/api/Ext.data.XmlWriter-cfg-documentRoot\" rel=\"Ext.data.XmlWriter-cfg-documentRoot\" class=\"docClass\">documentRoot</a></p>\n<p>Defaults to: <code>'records'</code></p></div></div></div><div id='cfg-tpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.XmlWriter'>Ext.data.XmlWriter</span><br/><a href='source/XmlWriter.html#Ext-data-XmlWriter-cfg-tpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.XmlWriter-cfg-tpl' class='name expandable'>tpl</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Ext.XTemplate\" rel=\"Ext.XTemplate\" class=\"docClass\">Ext.XTemplate</a></span></div><div class='description'><div class='short'>The XML template used to render write-actions to your server. ...</div><div class='long'><p>The XML template used to render <a href=\"#!/api/Ext.data.Api-property-actions\" rel=\"Ext.data.Api-property-actions\" class=\"docClass\">write-actions</a> to your server.</p>\n\n<p>One can easily provide his/her own custom <a href=\"#!/api/Ext.XTemplate-method-constructor\" rel=\"Ext.XTemplate-method-constructor\" class=\"docClass\">template-definition</a> if the default does not suffice.</p>\n\n\n<p>Defaults to:</p>\n\n\n<p><code></p>\n\n<pre>&lt;?xml version=\"{version}\" encoding=\"{encoding}\"?>\n    &lt;tpl if=\"documentRoot\">&lt;{documentRoot}>\n    &lt;tpl for=\"baseParams\">\n        &lt;tpl for=\".\">\n            &lt;{name}>{value}&lt;/{name}>\n        &lt;/tpl>\n    &lt;/tpl>\n    &lt;tpl if=\"records.length &gt; 1\">&lt;{root}>',\n    &lt;tpl for=\"records\">\n        &lt;{parent.record}>\n        &lt;tpl for=\".\">\n            &lt;{name}>{value}&lt;/{name}>\n        &lt;/tpl>\n        &lt;/{parent.record}>\n    &lt;/tpl>\n    &lt;tpl if=\"records.length &gt; 1\">&lt;/{root}>&lt;/tpl>\n    &lt;tpl if=\"documentRoot\">&lt;/{documentRoot}>&lt;/tpl>\n</pre>\n\n\n<p></code></p>\n\n<p>Templates will be called with the following API</p>\n\n\n<ul>\n<li>{String} version [1.0] The xml version.</li>\n<li>{String} encoding [ISO-8859-15] The xml encoding.</li>\n<li>{String/false} documentRoot The XML document root-node name or <tt>false</tt> if not required.  See <a href=\"#!/api/Ext.data.XmlWriter-cfg-documentRoot\" rel=\"Ext.data.XmlWriter-cfg-documentRoot\" class=\"docClass\">documentRoot</a> and <a href=\"#!/api/Ext.data.XmlWriter-cfg-forceDocumentRoot\" rel=\"Ext.data.XmlWriter-cfg-forceDocumentRoot\" class=\"docClass\">forceDocumentRoot</a>.</li>\n<li>{String} record The meta-data parameter defined on your <a href=\"#!/api/Ext.data.XmlReader-cfg-record\" rel=\"Ext.data.XmlReader-cfg-record\" class=\"docClass\">Ext.data.XmlReader.record</a> configuration represents the name of the xml-tag containing each record.</li>\n<li>{String} root The meta-data parameter defined by <a href=\"#!/api/Ext.data.XmlWriter-cfg-root\" rel=\"Ext.data.XmlWriter-cfg-root\" class=\"docClass\">root</a> configuration-parameter.  Represents the name of the xml root-tag when sending <b>multiple</b> records to the server.</li>\n<li>{Array} records The records being sent to the server, ie: the subject of the write-action being performed.  The records parameter will be always be an array, even when only a single record is being acted upon.\n    Each item within the records array will contain an array of field objects having the following properties:\n    <ul>\n        <li>{String} name The field-name of the record as defined by your <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record definition</a>.  The \"mapping\" property will be used, otherwise it will match the \"name\" property.  Use this parameter to define the XML tag-name of the property.</li>\n        <li>{Mixed} value The record value of the field enclosed within XML tags specified by name property above.</li>\n    </ul></li>\n<li>{Array} baseParams.  The baseParams as defined upon <a href=\"#!/api/Ext.data.Store-property-baseParams\" rel=\"Ext.data.Store-property-baseParams\" class=\"docClass\">Ext.data.Store.baseParams</a>.  Note that the baseParams have been converted into an array of [{name : \"foo\", value: \"bar\"}, ...] pairs in the same manner as the <b>records</b> parameter above.  See <a href=\"#!/api/Ext.data.XmlWriter-cfg-documentRoot\" rel=\"Ext.data.XmlWriter-cfg-documentRoot\" class=\"docClass\">documentRoot</a> and <a href=\"#!/api/Ext.data.XmlWriter-cfg-forceDocumentRoot\" rel=\"Ext.data.XmlWriter-cfg-forceDocumentRoot\" class=\"docClass\">forceDocumentRoot</a>.</li>\n</ul>\n\n</div></div></div><div id='cfg-updateRecord' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataWriter' rel='Ext.data.DataWriter' class='defined-in docClass'>Ext.data.DataWriter</a><br/><a href='source/DataWriter.html#Ext-data-DataWriter-cfg-updateRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-cfg-updateRecord' class='name not-expandable'>updateRecord</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'><p>Abstract method that should be implemented in all subclasses\n(e.g.: <a href=\"#!/api/Ext.data.JsonWriter-cfg-updateRecord\" rel=\"Ext.data.JsonWriter-cfg-updateRecord\" class=\"docClass\">JsonWriter.updateRecord</a></p>\n</div><div class='long'><p>Abstract method that should be implemented in all subclasses\n(e.g.: <a href=\"#!/api/Ext.data.JsonWriter-cfg-updateRecord\" rel=\"Ext.data.JsonWriter-cfg-updateRecord\" class=\"docClass\">JsonWriter.updateRecord</a></p>\n</div></div></div><div id='cfg-writeAllFields' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataWriter' rel='Ext.data.DataWriter' class='defined-in docClass'>Ext.data.DataWriter</a><br/><a href='source/DataWriter.html#Ext-data-DataWriter-cfg-writeAllFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-cfg-writeAllFields' class='name expandable'>writeAllFields</a><span> : Boolean</span></div><div class='description'><div class='short'>false by default. ...</div><div class='long'><p><tt>false</tt> by default.  Set <tt>true</tt> to have DataWriter return ALL fields of a modified\nrecord -- not just those that changed.\n<tt>false</tt> to have DataWriter only request modified fields from a record.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-xmlEncoding' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.XmlWriter'>Ext.data.XmlWriter</span><br/><a href='source/XmlWriter.html#Ext-data-XmlWriter-cfg-xmlEncoding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.XmlWriter-cfg-xmlEncoding' class='name expandable'>xmlEncoding</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>[ISO-8859-15] The encoding written to header of xml documents. ...</div><div class='long'><p>[ISO-8859-15] The <tt>encoding</tt> written to header of xml documents.\n<code></p>\n\n<pre>&lt;?xml version=\"1.0\" encoding=\"ISO-8859-15\"?></pre>\n\n\n<p></code></p>\n<p>Defaults to: <code>'ISO-8859-15'</code></p></div></div></div><div id='cfg-xmlVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.XmlWriter'>Ext.data.XmlWriter</span><br/><a href='source/XmlWriter.html#Ext-data-XmlWriter-cfg-xmlVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.XmlWriter-cfg-xmlVersion' class='name expandable'>xmlVersion</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>[1.0] The version written to header of xml documents. ...</div><div class='long'><p>[1.0] The <tt>version</tt> written to header of xml documents.\n<code></p>\n\n<pre>&lt;?xml version=\"1.0\" encoding=\"ISO-8859-15\"?></pre>\n\n\n<p></code></p>\n<p>Defaults to: <code>'1.0'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataWriter' rel='Ext.data.DataWriter' class='defined-in docClass'>Ext.data.DataWriter</a><br/><a href='source/DataWriter.html#Ext-data-DataWriter-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.data.DataWriter-method-constructor' class='name expandable'>Ext.data.XmlWriter</a>( <span class='pre'>meta, recordType</span> ) : <a href=\"#!/api/Ext.data.DataWriter\" rel=\"Ext.data.DataWriter\" class=\"docClass\">Ext.data.DataWriter</a></div><div class='description'><div class='short'>Create a new DataWriter ...</div><div class='long'><p>Create a new DataWriter</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>meta</span> : Object<div class='sub-desc'><p>Metadata configuration options (implementation-specific)</p>\n</div></li><li><span class='pre'>recordType</span> : Object<div class='sub-desc'><p>Either an Array of field definition objects as specified\nin <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>, or an <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a> object created\nusing <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.data.DataWriter\" rel=\"Ext.data.DataWriter\" class=\"docClass\">Ext.data.DataWriter</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-apply' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataWriter' rel='Ext.data.DataWriter' class='defined-in docClass'>Ext.data.DataWriter</a><br/><a href='source/DataWriter.html#Ext-data-DataWriter-method-apply' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-method-apply' class='name expandable'>apply</a>( <span class='pre'>params, baseParams, action, rs</span> )</div><div class='description'><div class='short'>Compiles a Store recordset into a data-format defined by an extension such as Ext.data.JsonWriter or Ext.data.XmlWrit...</div><div class='long'><p>Compiles a Store recordset into a data-format defined by an extension such as <a href=\"#!/api/Ext.data.JsonWriter\" rel=\"Ext.data.JsonWriter\" class=\"docClass\">Ext.data.JsonWriter</a> or <a href=\"#!/api/Ext.data.XmlWriter\" rel=\"Ext.data.XmlWriter\" class=\"docClass\">Ext.data.XmlWriter</a> in preparation for a <a href=\"#!/api/Ext.data.Api-property-actions\" rel=\"Ext.data.Api-property-actions\" class=\"docClass\">server-write action</a>.  The first two params are similar similar in nature to <a href=\"#!/api/Ext-method-apply\" rel=\"Ext-method-apply\" class=\"docClass\">Ext.apply</a>,\nWhere the first parameter is the <i>receiver</i> of paramaters and the second, baseParams, <i>the source</i>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : Object<div class='sub-desc'><p>The request-params receiver.</p>\n</div></li><li><span class='pre'>baseParams</span> : Object<div class='sub-desc'><p>as defined by <a href=\"#!/api/Ext.data.Store-property-baseParams\" rel=\"Ext.data.Store-property-baseParams\" class=\"docClass\">Ext.data.Store.baseParams</a>.  The baseParms must be encoded by the extending class, eg: <a href=\"#!/api/Ext.data.JsonWriter\" rel=\"Ext.data.JsonWriter\" class=\"docClass\">Ext.data.JsonWriter</a>, <a href=\"#!/api/Ext.data.XmlWriter\" rel=\"Ext.data.XmlWriter\" class=\"docClass\">Ext.data.XmlWriter</a>.</p>\n</div></li><li><span class='pre'>action</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>[<a href=\"#!/api/Ext.data.Api-property-actions\" rel=\"Ext.data.Api-property-actions\" class=\"docClass\">create|update|destroy</a>]</p>\n</div></li><li><span class='pre'>rs</span> : Record/Record[]<div class='sub-desc'><p>The recordset to write, the subject(s) of the write action.</p>\n</div></li></ul></div></div></div><div id='method-createRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.XmlWriter'>Ext.data.XmlWriter</span><br/><a href='source/XmlWriter.html#Ext-data-XmlWriter-method-createRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.XmlWriter-method-createRecord' class='name expandable'>createRecord</a>( <span class='pre'>rec</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>createRecord ...</div><div class='long'><p>createRecord</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rec</span> : <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>Array of <tt>name:value</tt> pairs for attributes of the <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a>.  See <a href=\"#!/api/Ext.data.DataWriter-method-toHash\" rel=\"Ext.data.DataWriter-method-toHash\" class=\"docClass\">Ext.data.DataWriter.toHash</a>.</p>\n</div></li></ul></div></div></div><div id='method-destroyRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.XmlWriter'>Ext.data.XmlWriter</span><br/><a href='source/XmlWriter.html#Ext-data-XmlWriter-method-destroyRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.XmlWriter-method-destroyRecord' class='name expandable'>destroyRecord</a>( <span class='pre'>rec</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>destroyRecord ...</div><div class='long'><p>destroyRecord</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rec</span> : <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>Array containing a attribute-object (name/value pair) representing the idProperty.</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.XmlWriter'>Ext.data.XmlWriter</span><br/><a href='source/XmlWriter.html#Ext-data-XmlWriter-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.XmlWriter-method-render' class='name expandable'>render</a>( <span class='pre'>params, baseParams, data</span> )</div><div class='description'><div class='short'>XmlWriter implementation of the final stage of a write action. ...</div><div class='long'><p>XmlWriter implementation of the final stage of a write action.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : Object<div class='sub-desc'><p>Transport-proxy's (eg: <a href=\"#!/api/Ext.Ajax-method-request\" rel=\"Ext.Ajax-method-request\" class=\"docClass\">Ext.Ajax.request</a>) params-object to write-to.</p>\n</div></li><li><span class='pre'>baseParams</span> : Object<div class='sub-desc'><p>as defined by <a href=\"#!/api/Ext.data.Store-property-baseParams\" rel=\"Ext.data.Store-property-baseParams\" class=\"docClass\">Ext.data.Store.baseParams</a>.  The baseParms must be encoded by the extending class, eg: <a href=\"#!/api/Ext.data.JsonWriter\" rel=\"Ext.data.JsonWriter\" class=\"docClass\">Ext.data.JsonWriter</a>, <a href=\"#!/api/Ext.data.XmlWriter\" rel=\"Ext.data.XmlWriter\" class=\"docClass\">Ext.data.XmlWriter</a>.</p>\n</div></li><li><span class='pre'>data</span> : Object/Object[]<div class='sub-desc'><p>Data-object representing the compiled Store-recordset.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.data.DataWriter-method-render' rel='Ext.data.DataWriter-method-render' class='docClass'>Ext.data.DataWriter.render</a></p></div></div></div><div id='method-toArray' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataWriter' rel='Ext.data.DataWriter' class='defined-in docClass'>Ext.data.DataWriter</a><br/><a href='source/DataWriter.html#Ext-data-DataWriter-method-toArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-method-toArray' class='name expandable'>toArray</a>( <span class='pre'>data</span> ) : Object[]<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Converts a Hashed Ext.data.Record to fields-array array suitable\nfor encoding to xml via XTemplate, eg:\n\n\n&lt;tpl for...</div><div class='long'><p>Converts a <a href=\"#!/api/Ext.data.DataWriter-method-toHash\" rel=\"Ext.data.DataWriter-method-toHash\" class=\"docClass\">Hashed</a> <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a> to fields-array array suitable\nfor encoding to xml via XTemplate, eg:\n<code></p>\n\n<pre>&lt;tpl for=\".\">&lt;{name}>{value}&lt;/{name}&lt;/tpl></pre>\n\n\n<p></code>\neg, <b>non-phantom</b>:\n<code></p>\n\n<pre>{id: 1, first: 'foo', last: 'bar'} --> [{name: 'id', value: 1}, {name: 'first', value: 'foo'}, {name: 'last', value: 'bar'}]</pre>\n\n\n<p></code>\n<a href=\"#!/api/Ext.data.Record-property-phantom\" rel=\"Ext.data.Record-property-phantom\" class=\"docClass\">Phantom</a> records will have had their idProperty omitted in <a href=\"#!/api/Ext.data.DataWriter-method-toHash\" rel=\"Ext.data.DataWriter-method-toHash\" class=\"docClass\">toHash</a> if determined to be auto-generated.\nNon AUTOINCREMENT pks should have been protected.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Hash<div class='sub-desc'><p>Hashed by <a href=\"#!/api/Ext.data.DataWriter-method-toHash\" rel=\"Ext.data.DataWriter-method-toHash\" class=\"docClass\">Ext.data.DataWriter.toHash</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'><p>Array of attribute-objects.</p>\n</div></li></ul></div></div></div><div id='method-toHash' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataWriter' rel='Ext.data.DataWriter' class='defined-in docClass'>Ext.data.DataWriter</a><br/><a href='source/DataWriter.html#Ext-data-DataWriter-method-toHash' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataWriter-method-toHash' class='name expandable'>toHash</a>( <span class='pre'>rec, config</span> ) : Object<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Converts a Record to a hash, taking into account the state of the Ext.data.Record along with configuration properties...</div><div class='long'><p>Converts a Record to a hash, taking into account the state of the <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a> along with configuration properties\nrelated to its rendering, such as <a href=\"#!/api/Ext.data.DataWriter-cfg-writeAllFields\" rel=\"Ext.data.DataWriter-cfg-writeAllFields\" class=\"docClass\">writeAllFields</a>, <a href=\"#!/api/Ext.data.Record-property-phantom\" rel=\"Ext.data.Record-property-phantom\" class=\"docClass\">phantom</a>, <a href=\"#!/api/Ext.data.Record-method-getChanges\" rel=\"Ext.data.Record-method-getChanges\" class=\"docClass\">getChanges</a> and\nidProperty</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rec</span> : <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a><div class='sub-desc'><p>The Record from which to create a hash.</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p><b>NOT YET IMPLEMENTED</b>.  Will implement an exlude/only configuration for fine-control over which fields do/don't get rendered.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>TODO Implement excludes/only configuration with 2nd param?</p>\n</div></li></ul></div></div></div><div id='method-updateRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.XmlWriter'>Ext.data.XmlWriter</span><br/><a href='source/XmlWriter.html#Ext-data-XmlWriter-method-updateRecord' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.XmlWriter-method-updateRecord' class='name expandable'>updateRecord</a>( <span class='pre'>rec</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>updateRecord ...</div><div class='long'><p>updateRecord</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rec</span> : <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>Array of {name:value} pairs for attributes of the <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a>.  See <a href=\"#!/api/Ext.data.DataWriter-method-toHash\" rel=\"Ext.data.DataWriter-method-toHash\" class=\"docClass\">Ext.data.DataWriter.toHash</a>.</p>\n</div></li></ul></div></div></div></div></div></div></div>",
    "superclasses": ["Ext.data.DataWriter"],
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
        "href": "XmlWriter.html#Ext-data-XmlWriter",
        "filename": "XmlWriter.js"
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
            "owner": "Ext.data.XmlWriter",
            "meta": {},
            "name": "documentRoot",
            "id": "cfg-documentRoot"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.XmlWriter",
            "meta": {},
            "name": "forceDocumentRoot",
            "id": "cfg-forceDocumentRoot"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.DataWriter",
            "meta": {},
            "name": "listful",
            "id": "cfg-listful"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.XmlWriter",
            "meta": {},
            "name": "root",
            "id": "cfg-root"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.XmlWriter",
            "meta": {},
            "name": "tpl",
            "id": "cfg-tpl"
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
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.XmlWriter",
            "meta": {},
            "name": "xmlEncoding",
            "id": "cfg-xmlEncoding"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.XmlWriter",
            "meta": {},
            "name": "xmlVersion",
            "id": "cfg-xmlVersion"
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
            "owner": "Ext.data.XmlWriter",
            "meta": {
                "protected": true
            },
            "name": "createRecord",
            "id": "method-createRecord"
        }, {
            "tagname": "method",
            "owner": "Ext.data.XmlWriter",
            "meta": {
                "protected": true
            },
            "name": "destroyRecord",
            "id": "method-destroyRecord"
        }, {
            "tagname": "method",
            "owner": "Ext.data.XmlWriter",
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
        }, {
            "tagname": "method",
            "owner": "Ext.data.XmlWriter",
            "meta": {
                "protected": true
            },
            "name": "updateRecord",
            "id": "method-updateRecord"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.data.XmlWriter",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.data.XmlWriter",
    "mixins": [],
    "mixedInto": []
});