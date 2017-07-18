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
Ext.data.JsonP.Ext_data_Field({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/DataField.html#Ext-data-Field' target='_blank'>DataField.js</a></div></pre><div class='doc-contents'><p>This class encapsulates the field definition information specified in the field definition objects\npassed to <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>.</p>\n\n\n<p>Developers do not need to instantiate this class. Instances are created by Ext.data.Record.create\nand cached in the <a href=\"#!/api/Ext.data.Record-property-fields\" rel=\"Ext.data.Record-property-fields\" class=\"docClass\">fields</a> property of the created Record constructor's <b>prototype.</b></p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-allowBlank' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Field'>Ext.data.Field</span><br/><a href='source/DataField.html#Ext-data-Field-cfg-allowBlank' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Field-cfg-allowBlank' class='name expandable'>allowBlank</a><span> : Boolean</span></div><div class='description'><div class='short'>(Optional) Used for validating a record, defaults to true. ...</div><div class='long'><p>(Optional) Used for validating a <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">record</a>, defaults to <code>true</code>.\nAn empty value here will cause <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a>.<a href=\"#!/api/Ext.data.Record-method-isValid\" rel=\"Ext.data.Record-method-isValid\" class=\"docClass\">isValid</a>\nto evaluate to <code>false</code>.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-convert' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Field'>Ext.data.Field</span><br/><a href='source/DataField.html#Ext-data-Field-cfg-convert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Field-cfg-convert' class='name expandable'>convert</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'>(Optional) A function which converts the value provided by the Reader into an object that will be stored\nin the Record. ...</div><div class='long'><p>(Optional) A function which converts the value provided by the Reader into an object that will be stored\nin the Record. It is passed the following parameters:<div class=\"mdetail-params\"><ul>\n<li><b>v</b> : Mixed<div class=\"sub-desc\">The data value as read by the Reader, if undefined will use\nthe configured <code><a href=\"#!/api/Ext.data.Field-cfg-defaultValue\" rel=\"Ext.data.Field-cfg-defaultValue\" class=\"docClass\">defaultValue</a></code>.</div></li>\n<li><b>rec</b> : Mixed<div class=\"sub-desc\">The data object containing the row as read by the Reader.\nDepending on the Reader type, this could be an Array (<a href=\"#!/api/Ext.data.ArrayReader\" rel=\"Ext.data.ArrayReader\" class=\"docClass\">ArrayReader</a>), an object\n (<a href=\"#!/api/Ext.data.JsonReader\" rel=\"Ext.data.JsonReader\" class=\"docClass\">JsonReader</a>), or an XML element (XMLReader).</div></li>\n</ul></div></p>\n\n<pre><code>// example of convert function\nfunction fullName(v, record){\n    return record.name.last + ', ' + record.name.first;\n}\n\nfunction location(v, record){\n    return !record.city ? '' : (record.city + ', ' + record.state);\n}\n\nvar Dude = <a href=\"#!/api/Ext.data.Record-static-method-create\" rel=\"Ext.data.Record-static-method-create\" class=\"docClass\">Ext.data.Record.create</a>([\n    {name: 'fullname',  convert: fullName},\n    {name: 'firstname', mapping: 'name.first'},\n    {name: 'lastname',  mapping: 'name.last'},\n    {name: 'city', defaultValue: 'homeless'},\n    'state',\n    {name: 'location',  convert: location}\n]);\n\n// create the data store\nvar store = new <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>({\n    reader: new <a href=\"#!/api/Ext.data.JsonReader\" rel=\"Ext.data.JsonReader\" class=\"docClass\">Ext.data.JsonReader</a>(\n        {\n            idProperty: 'key',\n            root: 'daRoot',\n            totalProperty: 'total'\n        },\n        Dude  // recordType\n    )\n});\n\nvar myData = [\n    { key: 1,\n      name: { first: 'Fat',    last:  'Albert' }\n      // notice no city, state provided in data object\n    },\n    { key: 2,\n      name: { first: 'Barney', last:  'Rubble' },\n      city: 'Bedrock', state: 'Stoneridge'\n    },\n    { key: 3,\n      name: { first: 'Cliff',  last:  'Claven' },\n      city: 'Boston',  state: 'MA'\n    }\n];\n</code></pre>\n\n</div></div></div><div id='cfg-dateFormat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Field'>Ext.data.Field</span><br/><a href='source/DataField.html#Ext-data-Field-cfg-dateFormat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Field-cfg-dateFormat' class='name expandable'>dateFormat</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>(Optional) Used when converting received data into a Date when the type is specified as \"date\". ...</div><div class='long'><p>(Optional) Used when converting received data into a Date when the <a href=\"#!/api/Ext.data.Field-cfg-type\" rel=\"Ext.data.Field-cfg-type\" class=\"docClass\">type</a> is specified as <code>\"date\"</code>.</p>\n\n\n<p>A format string for the <a href=\"#!/api/Date-static-method-parseDate\" rel=\"Date-static-method-parseDate\" class=\"docClass\">Date.parseDate</a> function, or \"timestamp\" if the\nvalue provided by the Reader is a UNIX timestamp, or \"time\" if the value provided by the Reader is a\njavascript millisecond timestamp. See <a href=\"#!/api/Date\" rel=\"Date\" class=\"docClass\">Date</a></p>\n\n</div></div></div><div id='cfg-defaultValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Field'>Ext.data.Field</span><br/><a href='source/DataField.html#Ext-data-Field-cfg-defaultValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Field-cfg-defaultValue' class='name expandable'>defaultValue</a><span> : Mixed</span></div><div class='description'><div class='short'>(Optional) The default value used when a Record is being created by a Reader\nwhen the item referenced by the mapping ...</div><div class='long'><p>(Optional) The default value used <b>when a Record is being created by a Reader</b>\nwhen the item referenced by the <code><a href=\"#!/api/Ext.data.Field-cfg-mapping\" rel=\"Ext.data.Field-cfg-mapping\" class=\"docClass\">mapping</a></code> does not exist in the data\nobject (i.e. undefined). (defaults to \"\")</p>\n<p>Defaults to: <code>&quot;&quot;</code></p></div></div></div><div id='cfg-mapping' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Field'>Ext.data.Field</span><br/><a href='source/DataField.html#Ext-data-Field-cfg-mapping' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Field-cfg-mapping' class='name expandable'>mapping</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>(Optional) A path expression for use by the Ext.data.DataReader implementation\nthat is creating the Record to extract...</div><div class='long'><p>(Optional) A path expression for use by the <a href=\"#!/api/Ext.data.DataReader\" rel=\"Ext.data.DataReader\" class=\"docClass\">Ext.data.DataReader</a> implementation\nthat is creating the <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Record</a> to extract the Field value from the data object.\nIf the path expression is the same as the field name, the mapping may be omitted.</p>\n\n\n<p>The form of the mapping expression depends on the Reader being used.</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><a href=\"#!/api/Ext.data.JsonReader\" rel=\"Ext.data.JsonReader\" class=\"docClass\">Ext.data.JsonReader</a><div class=\"sub-desc\">The mapping is a string containing the javascript\nexpression to reference the data from an element of the data item's <a href=\"#!/api/Ext.data.JsonReader-cfg-root\" rel=\"Ext.data.JsonReader-cfg-root\" class=\"docClass\">root</a> Array. Defaults to the field name.</div></li>\n<li><a href=\"#!/api/Ext.data.XmlReader\" rel=\"Ext.data.XmlReader\" class=\"docClass\">Ext.data.XmlReader</a><div class=\"sub-desc\">The mapping is an <a href=\"#!/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">Ext.DomQuery</a> path to the data\nitem relative to the DOM element that represents the <a href=\"#!/api/Ext.data.XmlReader-cfg-record\" rel=\"Ext.data.XmlReader-cfg-record\" class=\"docClass\">record</a>. Defaults to the field name.</div></li>\n<li><a href=\"#!/api/Ext.data.ArrayReader\" rel=\"Ext.data.ArrayReader\" class=\"docClass\">Ext.data.ArrayReader</a><div class=\"sub-desc\">The mapping is a number indicating the Array index\nof the field's value. Defaults to the field specification's Array position.</div></li>\n</ul></div>\n\n\n<p>If a more complex value extraction strategy is required, then configure the Field with a <a href=\"#!/api/Ext.data.Field-cfg-convert\" rel=\"Ext.data.Field-cfg-convert\" class=\"docClass\">convert</a>\nfunction. This is passed the whole row object, and may interrogate it in whatever way is necessary in order to\nreturn the desired data.</p>\n\n</div></div></div><div id='cfg-name' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Field'>Ext.data.Field</span><br/><a href='source/DataField.html#Ext-data-Field-cfg-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Field-cfg-name' class='name expandable'>name</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The name by which the field is referenced within the Record. ...</div><div class='long'><p>The name by which the field is referenced within the Record. This is referenced by, for example,\nthe <code>dataIndex</code> property in column definition objects passed to <a href=\"#!/api/Ext.grid.ColumnModel\" rel=\"Ext.grid.ColumnModel\" class=\"docClass\">Ext.grid.ColumnModel</a>.</p>\n\n<p>Note: In the simplest case, if no properties other than <code>name</code> are required, a field\ndefinition may consist of just a String for the field name.</p>\n\n</div></div></div><div id='cfg-sortDir' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Field'>Ext.data.Field</span><br/><a href='source/DataField.html#Ext-data-Field-cfg-sortDir' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Field-cfg-sortDir' class='name expandable'>sortDir</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>(Optional) Initial direction to sort (\"ASC\" or  \"DESC\"). ...</div><div class='long'><p>(Optional) Initial direction to sort (<code>\"ASC\"</code> or  <code>\"DESC\"</code>).  Defaults to\n<code>\"ASC\"</code>.</p>\n<p>Defaults to: <code>&quot;ASC&quot;</code></p></div></div></div><div id='cfg-sortType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Field'>Ext.data.Field</span><br/><a href='source/DataField.html#Ext-data-Field-cfg-sortType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Field-cfg-sortType' class='name expandable'>sortType</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'>(Optional) A function which converts a Field's value to a comparable value in order to ensure\ncorrect sort ordering. ...</div><div class='long'><p>(Optional) A function which converts a Field's value to a comparable value in order to ensure\ncorrect sort ordering. Predefined functions are provided in <a href=\"#!/api/Ext.data.SortTypes\" rel=\"Ext.data.SortTypes\" class=\"docClass\">Ext.data.SortTypes</a>. A custom\nsort example:</p>\n\n<pre><code>// current sort     after sort we want\n// +-+------+          +-+------+\n// |1|First |          |1|First |\n// |2|Last  |          |3|Second|\n// |3|Second|          |2|Last  |\n// +-+------+          +-+------+\n\nsortType: function(value) {\n   switch (value.toLowerCase()) // native toLowerCase():\n   {\n      case 'first': return 1;\n      case 'second': return 2;\n      default: return 3;\n   }\n}\n</code></pre>\n\n</div></div></div><div id='cfg-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Field'>Ext.data.Field</span><br/><a href='source/DataField.html#Ext-data-Field-cfg-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Field-cfg-type' class='name expandable'>type</a><span> : Mixed</span></div><div class='description'><div class='short'>(Optional) The data type for automatic conversion from received data to the stored value if convert\nhas not been spec...</div><div class='long'><p>(Optional) The data type for automatic conversion from received data to the <i>stored</i> value if <code><a href=\"#!/api/Ext.data.Field-cfg-convert\" rel=\"Ext.data.Field-cfg-convert\" class=\"docClass\">convert</a></code>\nhas not been specified. This may be specified as a string value. Possible values are</p>\n\n<div class=\"mdetail-params\"><ul>\n<li>auto (Default, implies no conversion)</li>\n<li>string</li>\n<li>int</li>\n<li>float</li>\n<li>boolean</li>\n<li>date</li></ul></div>\n\n\n<p>This may also be specified by referencing a member of the <a href=\"#!/api/Ext.data.Types\" rel=\"Ext.data.Types\" class=\"docClass\">Ext.data.Types</a> class.</p>\n\n\n<p>Developers may create their own application-specific data types by defining new members of the\n<a href=\"#!/api/Ext.data.Types\" rel=\"Ext.data.Types\" class=\"docClass\">Ext.data.Types</a> class.</p>\n\n</div></div></div><div id='cfg-useNull' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Field'>Ext.data.Field</span><br/><a href='source/DataField.html#Ext-data-Field-cfg-useNull' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.Field-cfg-useNull' class='name expandable'>useNull</a><span> : Boolean</span></div><div class='description'><div class='short'>(Optional) Use when converting received data into a Number type (either int or float). ...</div><div class='long'><p>(Optional) Use when converting received data into a Number type (either int or float). If the value cannot be parsed,\nnull will be used if useNull is true, otherwise the value will be 0. Defaults to <tt>false</tt>\n\n</p><p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.Field'>Ext.data.Field</span><br/><a href='source/DataField.html#Ext-data-Field-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.data.Field-method-constructor' class='name expandable'>Ext.data.Field</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Ext.data.Field</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Ext.data.Field</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "DataField.html#Ext-data-Field",
        "filename": "DataField.js"
    }],
    "linenr": 1,
    "members": {
        "property": [],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.data.Field",
            "meta": {},
            "name": "allowBlank",
            "id": "cfg-allowBlank"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.Field",
            "meta": {},
            "name": "convert",
            "id": "cfg-convert"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.Field",
            "meta": {},
            "name": "dateFormat",
            "id": "cfg-dateFormat"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.Field",
            "meta": {},
            "name": "defaultValue",
            "id": "cfg-defaultValue"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.Field",
            "meta": {},
            "name": "mapping",
            "id": "cfg-mapping"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.Field",
            "meta": {},
            "name": "name",
            "id": "cfg-name"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.Field",
            "meta": {},
            "name": "sortDir",
            "id": "cfg-sortDir"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.Field",
            "meta": {},
            "name": "sortType",
            "id": "cfg-sortType"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.Field",
            "meta": {},
            "name": "type",
            "id": "cfg-type"
        }, {
            "tagname": "cfg",
            "owner": "Ext.data.Field",
            "meta": {},
            "name": "useNull",
            "id": "cfg-useNull"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.data.Field",
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
    "name": "Ext.data.Field",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.data.Field",
    "mixins": [],
    "mixedInto": []
});