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
Ext.data.JsonP.Ext_layout_TableLayout({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": "Ext.layout.ContainerLayout",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='docClass'>Ext.layout.ContainerLayout</a><div class='subclass '><strong>Ext.layout.TableLayout</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/TableLayout.html#Ext-layout-TableLayout' target='_blank'>TableLayout.js</a></div></pre><div class='doc-contents'><p>This layout allows you to easily render content into an HTML table.  The total number of columns can be\nspecified, and rowspan and colspan can be used to create complex layouts within the table.\nThis class is intended to be extended or created via the layout:'table' <a href=\"#!/api/Ext.Container-cfg-layout\" rel=\"Ext.Container-cfg-layout\" class=\"docClass\">Ext.Container.layout</a> config,\nand should generally not need to be created directly via the new keyword.</p>\n\n\n<p>Note that when creating a layout via config, the layout-specific config properties must be passed in via\nthe <a href=\"#!/api/Ext.Container-cfg-layoutConfig\" rel=\"Ext.Container-cfg-layoutConfig\" class=\"docClass\">Ext.Container.layoutConfig</a> object which will then be applied internally to the layout.  In the\ncase of TableLayout, the only valid layout config property is <a href=\"#!/api/Ext.layout.TableLayout-cfg-columns\" rel=\"Ext.layout.TableLayout-cfg-columns\" class=\"docClass\">columns</a>.  However, the items added to a\nTableLayout can supply the following table-specific config properties:</p>\n\n\n<ul>\n<li><b>rowspan</b> Applied to the table cell containing the item.</li>\n<li><b>colspan</b> Applied to the table cell containing the item.</li>\n<li><b>cellId</b> An id applied to the table cell containing the item.</li>\n<li><b>cellCls</b> A CSS class name added to the table cell containing the item.</li>\n</ul>\n\n\n<p>The basic concept of building up a TableLayout is conceptually very similar to building up a standard\nHTML table.  You simply add each panel (or \"cell\") that you want to include along with any span attributes\nspecified as the special config properties of rowspan and colspan which work exactly like their HTML counterparts.\nRather than explicitly creating and nesting rows and columns as you would in HTML, you simply specify the\ntotal column count in the layoutConfig and start adding panels in their natural order from left to right,\ntop to bottom.  The layout will automatically figure out, based on the column count, rowspans and colspans,\nhow to position each panel within the table.  Just like with HTML tables, your rowspans and colspans must add\nup correctly in your overall layout or you'll end up with missing and/or extra cells!  Example usage:</p>\n\n\n<pre><code>// This code will generate a layout table that is 3 columns by 2 rows\n// with some spanning included.  The basic layout will be:\n// +--------+-----------------+\n// |   A    |   B             |\n// |        |--------+--------|\n// |        |   C    |   D    |\n// +--------+--------+--------+\nvar table = new <a href=\"#!/api/Ext.Panel\" rel=\"Ext.Panel\" class=\"docClass\">Ext.Panel</a>({\n    title: 'Table Layout',\n    layout:'table',\n    defaults: {\n        // applied to each contained panel\n        bodyStyle:'padding:20px'\n    },\n    layoutConfig: {\n        // The total column count must be specified here\n        columns: 3\n    },\n    items: [{\n        html: '&lt;p&gt;Cell A content&lt;/p&gt;',\n        rowspan: 2\n    },{\n        html: '&lt;p&gt;Cell B content&lt;/p&gt;',\n        colspan: 2\n    },{\n        html: '&lt;p&gt;Cell C content&lt;/p&gt;',\n        cellCls: 'highlight'\n    },{\n        html: '&lt;p&gt;Cell D content&lt;/p&gt;'\n    }]\n});\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-columns' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.TableLayout'>Ext.layout.TableLayout</span><br/><a href='source/TableLayout.html#Ext-layout-TableLayout-cfg-columns' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.TableLayout-cfg-columns' class='name expandable'>columns</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The total number of columns to create in the table for this layout. ...</div><div class='long'><p>The total number of columns to create in the table for this layout.  If not specified, all Components added to\nthis layout will be rendered into a single row using one column per Component.</p>\n</div></div></div><div id='cfg-extraCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-cfg-extraCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-cfg-extraCls' class='name expandable'>extraCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>An optional extra CSS class that will be added to the container. ...</div><div class='long'><p>An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to the container or any of its children using standard CSS rules. See\n<a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#!/api/Ext.Component-cfg-ctCls\" rel=\"Ext.Component-cfg-ctCls\" class=\"docClass\">ctCls</a> also.</p>\n\n\n<p><b>Note</b>: <tt>extraCls</tt> defaults to <tt>''</tt> except for the following classes\nwhich assign a value by default:\n<div class=\"mdetail-params\"><ul>\n<li><a href=\"#!/api/Ext.layout.AbsoluteLayout\" rel=\"Ext.layout.AbsoluteLayout\" class=\"docClass\">Absolute Layout</a> : <tt>'x-abs-layout-item'</tt></li>\n<li>Box Layout : <tt>'x-box-item'</tt></li>\n<li><a href=\"#!/api/Ext.layout.ColumnLayout\" rel=\"Ext.layout.ColumnLayout\" class=\"docClass\">Column Layout</a> : <tt>'x-column'</tt></li>\n</ul></div>\nTo configure the above Classes with an extra CSS class append to the default.  For example,\nfor ColumnLayout:\n<pre><code>extraCls: 'x-column custom-class'\n</code></pre>\n</p>\n\n</div></div></div><div id='cfg-renderHidden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-cfg-renderHidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-cfg-renderHidden' class='name not-expandable'>renderHidden</a><span> : Boolean</span></div><div class='description'><div class='short'><p>True to hide each contained item on render (defaults to false).</p>\n</div><div class='long'><p>True to hide each contained item on render (defaults to false).</p>\n</div></div></div><div id='cfg-tableAttrs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.TableLayout'>Ext.layout.TableLayout</span><br/><a href='source/TableLayout.html#Ext-layout-TableLayout-cfg-tableAttrs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.TableLayout-cfg-tableAttrs' class='name expandable'>tableAttrs</a><span> : Object</span></div><div class='description'><div class='short'>An object containing properties which are added to the DomHelper specification\nused to create the layout's &lt;table&...</div><div class='long'><p>An object containing properties which are added to the <a href=\"#!/api/Ext.DomHelper\" rel=\"Ext.DomHelper\" class=\"docClass\">DomHelper</a> specification\nused to create the layout's <tt>&lt;table&gt;</tt> element. Example:</p>\n\n\n<pre><code>{\n    xtype: 'panel',\n    layout: 'table',\n    layoutConfig: {\n        tableAttrs: {\n            style: {\n                width: '100%'\n            }\n        },\n        columns: 3\n    }\n}</code></pre>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-fieldTpl' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-property-fieldTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-fieldTpl' class='name expandable'>fieldTpl</a><span> : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span></div><div class='description'><div class='short'>The Ext.Template used by Field rendering layout classes (such as\nExt.layout.FormLayout) to create the DOM structure o...</div><div class='long'><p>The <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a> used by Field rendering layout classes (such as\n<a href=\"#!/api/Ext.layout.FormLayout\" rel=\"Ext.layout.FormLayout\" class=\"docClass\">Ext.layout.FormLayout</a>) to create the DOM structure of a fully wrapped,\nlabeled and styled form Field. A default Template is supplied, but this may be\noverriden to create custom field structures. The template processes values returned from\n<a href=\"#!/api/Ext.layout.FormLayout-method-getTemplateArgs\" rel=\"Ext.layout.FormLayout-method-getTemplateArgs\" class=\"docClass\">Ext.layout.FormLayout.getTemplateArgs</a>.</p>\n</div></div></div><div id='property-getLayoutTargetSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-property-getLayoutTargetSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-getLayoutTargetSize' class='name not-expandable'>getLayoutTargetSize</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>Placeholder for the derived layouts</p>\n</div><div class='long'><p>Placeholder for the derived layouts</p>\n</div></div></div><div id='property-monitorResize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.TableLayout'>Ext.layout.TableLayout</span><br/><a href='source/TableLayout.html#Ext-layout-TableLayout-property-monitorResize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.TableLayout-property-monitorResize' class='name expandable'>monitorResize</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<p>Defaults to: <code>false</code></p><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-property-monitorResize' rel='Ext.layout.ContainerLayout-property-monitorResize' class='docClass'>Ext.layout.ContainerLayout.monitorResize</a></p></div></div></div><div id='property-targetCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.TableLayout'>Ext.layout.TableLayout</span><br/><a href='source/TableLayout.html#Ext-layout-TableLayout-property-targetCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.TableLayout-property-targetCls' class='name expandable'>targetCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'x-table-layout-ct'</code></p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.TableLayout'>Ext.layout.TableLayout</span><br/><a href='source/TableLayout.html#Ext-layout-TableLayout-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.TableLayout-property-type' class='name expandable'>type</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'table'</code></p><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-property-type' rel='Ext.layout.ContainerLayout-property-type' class='docClass'>Ext.layout.ContainerLayout.type</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.layout.ContainerLayout-method-constructor' class='name expandable'>Ext.layout.TableLayout</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.layout.ContainerLayout\" rel=\"Ext.layout.ContainerLayout\" class=\"docClass\">Ext.layout.ContainerLayout</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.layout.ContainerLayout\" rel=\"Ext.layout.ContainerLayout\" class=\"docClass\">Ext.layout.ContainerLayout</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-IEMeasureHack' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-IEMeasureHack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-IEMeasureHack' class='name expandable'>IEMeasureHack</a>( <span class='pre'>target, viewFlag</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Workaround for how IE measures autoWidth elements. ...</div><div class='long'><p>Workaround for how IE measures autoWidth elements.  It prefers bottom-up measurements</p>\n\n<pre><code> whereas other browser prefer top-down.  We will hide all target child elements before we measure and\n put them back to get an accurate measurement.\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>viewFlag</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-afterRemove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-afterRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-afterRemove' class='name expandable'>afterRemove</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-configureItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-configureItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-configureItem' class='name expandable'>configureItem</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Applies extraCls and hides the item if renderHidden is true ...</div><div class='long'><p>Applies extraCls and hides the item if renderHidden is true</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.TableLayout'>Ext.layout.TableLayout</span><br/><a href='source/TableLayout.html#Ext-layout-TableLayout-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.TableLayout-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-destroy' rel='Ext.layout.ContainerLayout-method-destroy' class='docClass'>Ext.layout.ContainerLayout.destroy</a></p></div></div></div><div id='method-getNextCell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.TableLayout'>Ext.layout.TableLayout</span><br/><a href='source/TableLayout.html#Ext-layout-TableLayout-method-getNextCell' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.TableLayout-method-getNextCell' class='name expandable'>getNextCell</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getNextNonSpan' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.TableLayout'>Ext.layout.TableLayout</span><br/><a href='source/TableLayout.html#Ext-layout-TableLayout-method-getNextNonSpan' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.TableLayout-method-getNextNonSpan' class='name expandable'>getNextNonSpan</a>( <span class='pre'>colIndex, rowIndex</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>colIndex</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>rowIndex</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRenderedItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-getRenderedItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-getRenderedItems' class='name expandable'>getRenderedItems</a>( <span class='pre'>ct</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private. ...</div><div class='long'><p>private.\nGet all rendered items to lay out.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.TableLayout'>Ext.layout.TableLayout</span><br/><a href='source/TableLayout.html#Ext-layout-TableLayout-method-getRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.TableLayout-method-getRow' class='name expandable'>getRow</a>( <span class='pre'>index</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isValidParent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.TableLayout'>Ext.layout.TableLayout</span><br/><a href='source/TableLayout.html#Ext-layout-TableLayout-method-isValidParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.TableLayout-method-isValidParent' class='name expandable'>isValidParent</a>( <span class='pre'>c, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-isValidParent' rel='Ext.layout.ContainerLayout-method-isValidParent' class='docClass'>Ext.layout.ContainerLayout.isValidParent</a></p></div></div></div><div id='method-layout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-layout' class='name expandable'>layout</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-onLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.TableLayout'>Ext.layout.TableLayout</span><br/><a href='source/TableLayout.html#Ext-layout-TableLayout-method-onLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.TableLayout-method-onLayout' class='name expandable'>onLayout</a>( <span class='pre'>ct, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-onLayout' rel='Ext.layout.ContainerLayout-method-onLayout' class='docClass'>Ext.layout.ContainerLayout.onLayout</a></p></div></div></div><div id='method-onRemove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-onRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-onRemove' class='name expandable'>onRemove</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onResize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-onResize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-onResize' class='name expandable'>onResize</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-parseMargins' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-parseMargins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-parseMargins' class='name expandable'>parseMargins</a>( <span class='pre'>v</span> ) : Object</div><div class='description'><div class='short'>Parses a number or string representing margin sizes into an object. ...</div><div class='long'><p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The encoded margins</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object with margin sizes for top, right, bottom and left</p>\n</div></li></ul></div></div></div><div id='method-renderAll' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-renderAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-renderAll' class='name expandable'>renderAll</a>( <span class='pre'>ct, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-renderItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.TableLayout'>Ext.layout.TableLayout</span><br/><a href='source/TableLayout.html#Ext-layout-TableLayout-method-renderItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.TableLayout-method-renderItem' class='name expandable'>renderItem</a>( <span class='pre'>c, position, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private\n\nRenders the given Component into the target Element. ...</div><div class='long'><p>private</p>\n\n<p>Renders the given Component into the target Element. If the Component is already rendered,\nit is moved to the provided target instead.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The Component to render</p>\n\n\n\n</div></li><li><span class='pre'>position</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The position within the target to render the item to</p>\n\n\n\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The target Element</p>\n\n\n\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-renderItem' rel='Ext.layout.ContainerLayout-method-renderItem' class='docClass'>Ext.layout.ContainerLayout.renderItem</a></p></div></div></div><div id='method-runLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-runLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-runLayout' class='name expandable'>runLayout</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setContainer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.TableLayout'>Ext.layout.TableLayout</span><br/><a href='source/TableLayout.html#Ext-layout-TableLayout-method-setContainer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.TableLayout-method-setContainer' class='name expandable'>setContainer</a>( <span class='pre'>ct</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-setContainer' rel='Ext.layout.ContainerLayout-method-setContainer' class='docClass'>Ext.layout.ContainerLayout.setContainer</a></p></div></div></div></div></div></div></div>",
    "superclasses": ["Ext.layout.ContainerLayout"],
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
        "href": "TableLayout.html#Ext-layout-TableLayout",
        "filename": "TableLayout.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {},
            "name": "fieldTpl",
            "id": "property-fieldTpl"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {
                "private": true
            },
            "name": "getLayoutTargetSize",
            "id": "property-getLayoutTargetSize"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.TableLayout",
            "meta": {
                "private": true
            },
            "name": "monitorResize",
            "id": "property-monitorResize"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.TableLayout",
            "meta": {
                "private": true
            },
            "name": "targetCls",
            "id": "property-targetCls"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.TableLayout",
            "meta": {
                "private": true
            },
            "name": "type",
            "id": "property-type"
        }],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.layout.TableLayout",
            "meta": {},
            "name": "columns",
            "id": "cfg-columns"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {},
            "name": "extraCls",
            "id": "cfg-extraCls"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {},
            "name": "renderHidden",
            "id": "cfg-renderHidden"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.TableLayout",
            "meta": {},
            "name": "tableAttrs",
            "id": "cfg-tableAttrs"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {
                "private": true
            },
            "name": "IEMeasureHack",
            "id": "method-IEMeasureHack"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {
                "private": true
            },
            "name": "afterRemove",
            "id": "method-afterRemove"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {
                "private": true
            },
            "name": "configureItem",
            "id": "method-configureItem"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.TableLayout",
            "meta": {
                "private": true
            },
            "name": "destroy",
            "id": "method-destroy"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.TableLayout",
            "meta": {
                "private": true
            },
            "name": "getNextCell",
            "id": "method-getNextCell"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.TableLayout",
            "meta": {
                "private": true
            },
            "name": "getNextNonSpan",
            "id": "method-getNextNonSpan"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {
                "private": true
            },
            "name": "getRenderedItems",
            "id": "method-getRenderedItems"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.TableLayout",
            "meta": {
                "private": true
            },
            "name": "getRow",
            "id": "method-getRow"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.TableLayout",
            "meta": {
                "private": true
            },
            "name": "isValidParent",
            "id": "method-isValidParent"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {
                "private": true
            },
            "name": "layout",
            "id": "method-layout"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.TableLayout",
            "meta": {
                "private": true
            },
            "name": "onLayout",
            "id": "method-onLayout"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {
                "private": true
            },
            "name": "onRemove",
            "id": "method-onRemove"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {
                "private": true
            },
            "name": "onResize",
            "id": "method-onResize"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {},
            "name": "parseMargins",
            "id": "method-parseMargins"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {
                "private": true
            },
            "name": "renderAll",
            "id": "method-renderAll"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.TableLayout",
            "meta": {
                "private": true
            },
            "name": "renderItem",
            "id": "method-renderItem"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {
                "private": true
            },
            "name": "runLayout",
            "id": "method-runLayout"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.TableLayout",
            "meta": {
                "private": true
            },
            "name": "setContainer",
            "id": "method-setContainer"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.layout.TableLayout",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.layout.TableLayout",
    "mixins": [],
    "mixedInto": []
});