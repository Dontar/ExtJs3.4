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
Ext.data.JsonP.Ext_data_ArrayReader({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": "Ext.data.JsonReader",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='docClass'>Ext.data.DataReader</a><div class='subclass '><a href='#!/api/Ext.data.JsonReader' rel='Ext.data.JsonReader' class='docClass'>Ext.data.JsonReader</a><div class='subclass '><strong>Ext.data.ArrayReader</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/ArrayReader.html#Ext-data-ArrayReader' target='_blank'>ArrayReader.js</a></div></pre><div class='doc-contents'><p>Data reader class to create an Array of <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a> objects from an Array.\nEach element of that Array represents a row of data fields. The\nfields are pulled into a Record object using as a subscript, the <code>mapping</code> property\nof the field definition if it exists, or the field's ordinal position in the definition.</p>\n\n\n<p>Example code:</p>\n\n\n<pre><code>var Employee = <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>([\n    {name: 'name', mapping: 1},         // \"mapping\" only needed if an \"id\" field is present which\n    {name: 'occupation', mapping: 2}    // precludes using the ordinal position as the index.\n]);\nvar myReader = new <a href=\"#!/api/Ext.data.ArrayReader\" rel=\"Ext.data.ArrayReader\" class=\"docClass\">Ext.data.ArrayReader</a>({\n    <a href=\"#!/api/Ext.data.ArrayReader-cfg-idIndex\" rel=\"Ext.data.ArrayReader-cfg-idIndex\" class=\"docClass\">idIndex</a>: 0\n}, Employee);\n</code></pre>\n\n\n<p>This would consume an Array like this:</p>\n\n\n<pre><code>[ [1, 'Bill', 'Gardener'], [2, 'Ben', 'Horticulturalist'] ]\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-fields' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/DataReader.html#Ext-data-DataReader-cfg-fields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-cfg-fields' class='name expandable'>fields</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Object</span></div><div class='description'><div class='short'>Either an Array of Field definition objects (which\nwill be passed to Ext.data.Record.create, or a Record\nconstructor ...</div><div class='long'><p>Either an Array of <a href=\"#!/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Field</a> definition objects (which\nwill be passed to <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>, or a <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Record</a>\nconstructor created from <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>.</p>\n\n</div></div></div><div id='cfg-id' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.ArrayReader'>Ext.data.ArrayReader</span><br/><a href='source/ArrayReader.html#Ext-data-ArrayReader-cfg-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.ArrayReader-cfg-id' class='name expandable'>id</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>(optional) The subscript within row Array that provides an ID for the Record. ...</div><div class='long'><p>(optional) The subscript within row Array that provides an ID for the Record.\nDeprecated. Use <a href=\"#!/api/Ext.data.ArrayReader-cfg-idIndex\" rel=\"Ext.data.ArrayReader-cfg-idIndex\" class=\"docClass\">idIndex</a> instead.</p>\n</div></div></div><div id='cfg-idIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.ArrayReader'>Ext.data.ArrayReader</span><br/><a href='source/ArrayReader.html#Ext-data-ArrayReader-cfg-idIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.ArrayReader-cfg-idIndex' class='name not-expandable'>idIndex</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>(optional) The subscript within row Array that provides an ID for the Record.</p>\n</div><div class='long'><p>(optional) The subscript within row Array that provides an ID for the Record.</p>\n</div></div></div><div id='cfg-idProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.JsonReader' rel='Ext.data.JsonReader' class='defined-in docClass'>Ext.data.JsonReader</a><br/><a href='source/JsonReader.html#Ext-data-JsonReader-cfg-idProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-cfg-idProperty' class='name expandable'>idProperty</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>[id] Name of the property within a row object\nthat contains a record identifier value. ...</div><div class='long'><p>[id] Name of the property within a row object\nthat contains a record identifier value.  Defaults to <tt>id</tt></p>\n</div></div></div><div id='cfg-messageProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/DataReader.html#Ext-data-DataReader-cfg-messageProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-cfg-messageProperty' class='name not-expandable'>messageProperty</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>[undefined] Optional name of a property within a server-response that represents a user-feedback message.</p>\n</div><div class='long'><p>[undefined] Optional name of a property within a server-response that represents a user-feedback message.</p>\n</div></div></div><div id='cfg-root' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.JsonReader' rel='Ext.data.JsonReader' class='defined-in docClass'>Ext.data.JsonReader</a><br/><a href='source/JsonReader.html#Ext-data-JsonReader-cfg-root' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-cfg-root' class='name expandable'>root</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>[undefined] Required. ...</div><div class='long'><p>[undefined] <b>Required</b>.  The name of the property\nwhich contains the Array of row objects.  Defaults to <tt>undefined</tt>.\nAn exception will be thrown if the root property is undefined. The data\npacket value for this property should be an empty array to clear the data\nor show no data.</p>\n</div></div></div><div id='cfg-totalProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.JsonReader' rel='Ext.data.JsonReader' class='defined-in docClass'>Ext.data.JsonReader</a><br/><a href='source/JsonReader.html#Ext-data-JsonReader-cfg-totalProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-cfg-totalProperty' class='name expandable'>totalProperty</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>[total] Name of the property from which to\nretrieve the total number of records in the dataset. ...</div><div class='long'><p>[total] Name of the property from which to\nretrieve the total number of records in the dataset. This is only needed\nif the whole dataset is not passed in one go, but is being paged from\nthe remote server.  Defaults to <tt>total</tt>.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-jsonData' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.JsonReader' rel='Ext.data.JsonReader' class='defined-in docClass'>Ext.data.JsonReader</a><br/><a href='source/JsonReader.html#Ext-data-JsonReader-property-jsonData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-property-jsonData' class='name expandable'>jsonData</a><span> : Object</span></div><div class='description'><div class='short'>After any data loads, the raw JSON data is available for further custom processing. ...</div><div class='long'><p>After any data loads, the raw JSON data is available for further custom processing.  If no data is\nloaded or there is a load exception this property will be undefined.</p>\n</div></div></div><div id='property-meta' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.JsonReader' rel='Ext.data.JsonReader' class='defined-in docClass'>Ext.data.JsonReader</a><br/><a href='source/JsonReader.html#Ext-data-JsonReader-property-meta' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-property-meta' class='name not-expandable'>meta</a><span> : Mixed</span></div><div class='description'><div class='short'><p>This JsonReader's metadata as passed to the constructor, or as passed in\nthe last data packet's <b><tt>metaData</tt></b> property.</p>\n</div><div class='long'><p>This JsonReader's metadata as passed to the constructor, or as passed in\nthe last data packet's <b><tt>metaData</tt></b> property.</p>\n<p>Overrides: <a href='#!/api/Ext.data.DataReader-property-meta' rel='Ext.data.DataReader-property-meta' class='docClass'>Ext.data.DataReader.meta</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.ArrayReader'>Ext.data.ArrayReader</span><br/><a href='source/ArrayReader.html#Ext-data-ArrayReader-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.data.ArrayReader-method-constructor' class='name expandable'>Ext.data.ArrayReader</a>( <span class='pre'>meta, recordType</span> ) : <a href=\"#!/api/Ext.data.ArrayReader\" rel=\"Ext.data.ArrayReader\" class=\"docClass\">Ext.data.ArrayReader</a></div><div class='description'><div class='short'>Create a new ArrayReader ...</div><div class='long'><p>Create a new ArrayReader</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>meta</span> : Object<div class='sub-desc'><p>Metadata configuration options.</p>\n</div></li><li><span class='pre'>recordType</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Object<div class='sub-desc'><p>Either an Array of <a href=\"#!/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Field</a> definition objects (which\nwill be passed to <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>, or a <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Record</a>\nconstructor created from <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.data.ArrayReader\" rel=\"Ext.data.ArrayReader\" class=\"docClass\">Ext.data.ArrayReader</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.data.JsonReader-method-constructor' rel='Ext.data.JsonReader-method-constructor' class='docClass'>Ext.data.JsonReader.constructor</a></p></div></div></div><div id='method-buildExtractors' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/DataReader.html#Ext-data-DataReader-method-buildExtractors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-buildExtractors' class='name expandable'>buildExtractors</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method, overridden in DataReader extensions such as Ext.data.JsonReader and Ext.data.XmlReader ...</div><div class='long'><p>Abstract method, overridden in DataReader extensions such as <a href=\"#!/api/Ext.data.JsonReader\" rel=\"Ext.data.JsonReader\" class=\"docClass\">Ext.data.JsonReader</a> and <a href=\"#!/api/Ext.data.XmlReader\" rel=\"Ext.data.XmlReader\" class=\"docClass\">Ext.data.XmlReader</a></p>\n</div></div></div><div id='method-extractData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/DataReader.html#Ext-data-DataReader-method-extractData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-extractData' class='name expandable'>extractData</a>( <span class='pre'>data-root, returnRecords</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>returns extracted, type-cast rows of data. ...</div><div class='long'><p>returns extracted, type-cast rows of data.  Iterates to call <a href=\"#!/api/Ext.data.DataReader-method-extractValues\" rel=\"Ext.data.DataReader-method-extractValues\" class=\"docClass\">extractValues</a> for each row</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data-root</span> : Object[]/Object<div class='sub-desc'><p>from server response</p>\n</div></li><li><span class='pre'>returnRecords</span> : Boolean<div class='sub-desc'><p>[false] Set true to return instances of <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a></p>\n</div></li></ul></div></div></div><div id='method-extractValues' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.JsonReader' rel='Ext.data.JsonReader' class='defined-in docClass'>Ext.data.JsonReader</a><br/><a href='source/JsonReader.html#Ext-data-JsonReader-method-extractValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-method-extractValues' class='name expandable'>extractValues</a>( <span class='pre'>data, items, len</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>type-casts a single row of raw-data from server ...</div><div class='long'><p>type-casts a single row of raw-data from server</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>items</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'>\n</div></li><li><span class='pre'>len</span> : Integer<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.data.DataReader-method-extractValues' rel='Ext.data.DataReader-method-extractValues' class='docClass'>Ext.data.DataReader.extractValues</a></p></div></div></div><div id='method-getId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/DataReader.html#Ext-data-DataReader-method-getId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-getId' class='name expandable'>getId</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method created in extension's buildExtractors impl. ...</div><div class='long'><p>Abstract method created in extension's buildExtractors impl.</p>\n</div></div></div><div id='method-getMessage' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/DataReader.html#Ext-data-DataReader-method-getMessage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-getMessage' class='name expandable'>getMessage</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method created in extension's buildExtractors impl. ...</div><div class='long'><p>Abstract method created in extension's buildExtractors impl.</p>\n</div></div></div><div id='method-getRoot' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/DataReader.html#Ext-data-DataReader-method-getRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-getRoot' class='name expandable'>getRoot</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method created in extension's buildExtractors impl. ...</div><div class='long'><p>Abstract method created in extension's buildExtractors impl.</p>\n</div></div></div><div id='method-getSuccess' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/DataReader.html#Ext-data-DataReader-method-getSuccess' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-getSuccess' class='name expandable'>getSuccess</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method created in extension's buildExtractors impl. ...</div><div class='long'><p>Abstract method created in extension's buildExtractors impl.</p>\n</div></div></div><div id='method-getTotal' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/DataReader.html#Ext-data-DataReader-method-getTotal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-getTotal' class='name expandable'>getTotal</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract method created in extension's buildExtractors impl. ...</div><div class='long'><p>Abstract method created in extension's buildExtractors impl.</p>\n</div></div></div><div id='method-isData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/DataReader.html#Ext-data-DataReader-method-isData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-isData' class='name expandable'>isData</a>( <span class='pre'>data</span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the supplied data-hash looks and quacks like data. ...</div><div class='long'><p>Returns true if the supplied data-hash <b>looks</b> and quacks like data.  Checks to see if it has a key\ncorresponding to idProperty defined in your DataReader config containing non-empty pk.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-read' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.JsonReader' rel='Ext.data.JsonReader' class='defined-in docClass'>Ext.data.JsonReader</a><br/><a href='source/JsonReader.html#Ext-data-JsonReader-method-read' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-method-read' class='name expandable'>read</a>( <span class='pre'>response</span> ) : Object</div><div class='description'><div class='short'>This method is only used by a DataProxy which has retrieved data from a remote server. ...</div><div class='long'><p>This method is only used by a DataProxy which has retrieved data from a remote server.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>response</span> : Object<div class='sub-desc'><p>The XHR object which contains the JSON data in its responseText.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>data A data block which is used by an <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> object as\na cache of Ext.data.Records.</p>\n</div></li></ul></div></div></div><div id='method-readRecords' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.ArrayReader'>Ext.data.ArrayReader</span><br/><a href='source/ArrayReader.html#Ext-data-ArrayReader-method-readRecords' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.ArrayReader-method-readRecords' class='name expandable'>readRecords</a>( <span class='pre'>o</span> ) : Object</div><div class='description'><div class='short'>Create a data block containing Ext.data.Records from an Array. ...</div><div class='long'><p>Create a data block containing Ext.data.Records from an Array.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>An Array of row objects which represents the dataset.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>data A data block which is used by an <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> object as\na cache of Ext.data.Records.</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.data.JsonReader-method-readRecords' rel='Ext.data.JsonReader-method-readRecords' class='docClass'>Ext.data.JsonReader.readRecords</a></p></div></div></div><div id='method-readResponse' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.JsonReader' rel='Ext.data.JsonReader' class='defined-in docClass'>Ext.data.JsonReader</a><br/><a href='source/JsonReader.html#Ext-data-JsonReader-method-readResponse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.JsonReader-method-readResponse' class='name expandable'>readResponse</a>( <span class='pre'>action, response</span> ) : Response</div><div class='description'><div class='short'>Decode a JSON response from server. ...</div><div class='long'><p>Decode a JSON response from server.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>action</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>[Ext.data.Api.actions.create|read|update|destroy]</p>\n</div></li><li><span class='pre'>response</span> : Object<div class='sub-desc'><p>The XHR object returned through an Ajax server request.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Response</span><div class='sub-desc'><p>A <a href=\"#!/api/Ext.data.Response\" rel=\"Ext.data.Response\" class=\"docClass\">Response</a> object containing the data response, and also status information.</p>\n</div></li></ul></div></div></div><div id='method-realize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/DataReader.html#Ext-data-DataReader-method-realize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-realize' class='name expandable'>realize</a>( <span class='pre'>record, data</span> )</div><div class='description'><div class='short'>Used for un-phantoming a record after a successful database insert. ...</div><div class='long'><p>Used for un-phantoming a record after a successful database insert.  Sets the records pk along with new data from server.\nYou <b>must</b> return at least the database pk using the idProperty defined in your DataReader configuration.  The incoming\ndata from server will be merged with the data in the local record.\nIn addition, you <b>must</b> return record-data from the server in the same order received.\nWill perform a commit as well, un-marking dirty-fields.  Store's \"update\" event will be suppressed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Record/Record[]<div class='sub-desc'><p>The phantom record to be realized.</p>\n</div></li><li><span class='pre'>data</span> : Object/Object[]<div class='sub-desc'><p>The new record data to apply.  Must include the primary-key from database defined in idProperty field.</p>\n</div></li></ul></div></div></div><div id='method-update' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.DataReader' rel='Ext.data.DataReader' class='defined-in docClass'>Ext.data.DataReader</a><br/><a href='source/DataReader.html#Ext-data-DataReader-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DataReader-method-update' class='name expandable'>update</a>( <span class='pre'>rs, data</span> )</div><div class='description'><div class='short'>Used for updating a non-phantom or \"real\" record's data with fresh data from server after remote-save. ...</div><div class='long'><p>Used for updating a non-phantom or \"real\" record's data with fresh data from server after remote-save.\nIf returning data from multiple-records after a batch-update, you <b>must</b> return record-data from the server in\nthe same order received.  Will perform a commit as well, un-marking dirty-fields.  Store's \"update\" event will be\nsuppressed as the record receives fresh new data-hash</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rs</span> : Record/Record[]<div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : Object/Object[]<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>",
    "superclasses": ["Ext.data.DataReader", "Ext.data.JsonReader"],
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
        "href": "ArrayReader.html#Ext-data-ArrayReader",
        "filename": "ArrayReader.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.data.JsonReader",
            "meta": {},
            "name": "jsonData",
            "id": "property-jsonData"
        }, {
            "tagname": "property",
            "owner": "Ext.data.JsonReader",
            "meta": {},
            "name": "meta",
            "id": "property-meta"
        }],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.data.DataReader",
            "meta": {},
            "name": "fields",
            "id": "cfg-fields"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.ArrayReader",
            "meta": {},
            "name": "id",
            "id": "cfg-id"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.ArrayReader",
            "meta": {},
            "name": "idIndex",
            "id": "cfg-idIndex"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.JsonReader",
            "meta": {},
            "name": "idProperty",
            "id": "cfg-idProperty"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.DataReader",
            "meta": {},
            "name": "messageProperty",
            "id": "cfg-messageProperty"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.JsonReader",
            "meta": {},
            "name": "root",
            "id": "cfg-root"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.JsonReader",
            "meta": {},
            "name": "totalProperty",
            "id": "cfg-totalProperty"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.data.ArrayReader",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.data.DataReader",
            "meta": {},
            "name": "buildExtractors",
            "id": "method-buildExtractors"
        }, {
            "tagname": "method",
            "owner": "Ext.data.DataReader",
            "meta": {
                "private": true
            },
            "name": "extractData",
            "id": "method-extractData"
        }, {
            "tagname": "method",
            "owner": "Ext.data.JsonReader",
            "meta": {
                "private": true
            },
            "name": "extractValues",
            "id": "method-extractValues"
        }, {
            "tagname": "method",
            "owner": "Ext.data.DataReader",
            "meta": {},
            "name": "getId",
            "id": "method-getId"
        }, {
            "tagname": "method",
            "owner": "Ext.data.DataReader",
            "meta": {},
            "name": "getMessage",
            "id": "method-getMessage"
        }, {
            "tagname": "method",
            "owner": "Ext.data.DataReader",
            "meta": {},
            "name": "getRoot",
            "id": "method-getRoot"
        }, {
            "tagname": "method",
            "owner": "Ext.data.DataReader",
            "meta": {},
            "name": "getSuccess",
            "id": "method-getSuccess"
        }, {
            "tagname": "method",
            "owner": "Ext.data.DataReader",
            "meta": {},
            "name": "getTotal",
            "id": "method-getTotal"
        }, {
            "tagname": "method",
            "owner": "Ext.data.DataReader",
            "meta": {},
            "name": "isData",
            "id": "method-isData"
        }, {
            "tagname": "method",
            "owner": "Ext.data.JsonReader",
            "meta": {},
            "name": "read",
            "id": "method-read"
        }, {
            "tagname": "method",
            "owner": "Ext.data.ArrayReader",
            "meta": {},
            "name": "readRecords",
            "id": "method-readRecords"
        }, {
            "tagname": "method",
            "owner": "Ext.data.JsonReader",
            "meta": {},
            "name": "readResponse",
            "id": "method-readResponse"
        }, {
            "tagname": "method",
            "owner": "Ext.data.DataReader",
            "meta": {},
            "name": "realize",
            "id": "method-realize"
        }, {
            "tagname": "method",
            "owner": "Ext.data.DataReader",
            "meta": {},
            "name": "update",
            "id": "method-update"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.data.ArrayReader",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.data.ArrayReader",
    "mixins": [],
    "mixedInto": []
});