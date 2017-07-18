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
Ext.data.JsonP.Ext_layout_AccordionLayout({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": "Ext.layout.FitLayout",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='docClass'>Ext.layout.ContainerLayout</a><div class='subclass '><a href='#!/api/Ext.layout.FitLayout' rel='Ext.layout.FitLayout' class='docClass'>Ext.layout.FitLayout</a><div class='subclass '><strong>Ext.layout.AccordionLayout</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/AccordionLayout.html#Ext-layout-AccordionLayout' target='_blank'>AccordionLayout.js</a></div></pre><div class='doc-contents'><p>This is a layout that manages multiple Panels in an expandable accordion style such that only\n<b>one Panel can be expanded at any given time</b>. Each Panel has built-in support for expanding and collapsing.</p>\n\n\n<p>Note: Only Ext.Panels <b>and all subclasses of <a href=\"#!/api/Ext.Panel\" rel=\"Ext.Panel\" class=\"docClass\">Ext.Panel</a></b> may be used in an accordion layout Container.</p>\n\n\n<p>This class is intended to be extended or created via the <tt><b><a href=\"#!/api/Ext.Container-cfg-layout\" rel=\"Ext.Container-cfg-layout\" class=\"docClass\">layout</a></b></tt>\nconfiguration property.  See <tt><b><a href=\"#!/api/Ext.Container-cfg-layout\" rel=\"Ext.Container-cfg-layout\" class=\"docClass\">Ext.Container.layout</a></b></tt> for additional details.</p>\n\n\n<p>Example usage:</p>\n\n\n<pre><code>var accordion = new <a href=\"#!/api/Ext.Panel\" rel=\"Ext.Panel\" class=\"docClass\">Ext.Panel</a>({\n    title: 'Accordion Layout',\n    layout:'accordion',\n    defaults: {\n        // applied to each contained panel\n        bodyStyle: 'padding:15px'\n    },\n    layoutConfig: {\n        // layout-specific configs go here\n        titleCollapse: false,\n        animate: true,\n        activeOnTop: true\n    },\n    items: [{\n        title: 'Panel 1',\n        html: '&lt;p&gt;Panel content!&lt;/p&gt;'\n    },{\n        title: 'Panel 2',\n        html: '&lt;p&gt;Panel content!&lt;/p&gt;'\n    },{\n        title: 'Panel 3',\n        html: '&lt;p&gt;Panel content!&lt;/p&gt;'\n    }]\n});\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-activeOnTop' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AccordionLayout'>Ext.layout.AccordionLayout</span><br/><a href='source/AccordionLayout.html#Ext-layout-AccordionLayout-cfg-activeOnTop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AccordionLayout-cfg-activeOnTop' class='name expandable'>activeOnTop</a><span> : Boolean</span></div><div class='description'><div class='short'>True to swap the position of each panel as it is expanded so that it becomes the first item in the container,\nfalse t...</div><div class='long'><p>True to swap the position of each panel as it is expanded so that it becomes the first item in the container,\nfalse to keep the panels in the rendered order. <b>This is NOT compatible with \"animate:true\"</b> (defaults to false).</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-animate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AccordionLayout'>Ext.layout.AccordionLayout</span><br/><a href='source/AccordionLayout.html#Ext-layout-AccordionLayout-cfg-animate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AccordionLayout-cfg-animate' class='name expandable'>animate</a><span> : Boolean</span></div><div class='description'><div class='short'>True to slide the contained panels open and closed during expand/collapse using animation, false to open and\nclose di...</div><div class='long'><p>True to slide the contained panels open and closed during expand/collapse using animation, false to open and\nclose directly with no animation (defaults to false).  Note: to defer to the specific config setting of each\ncontained panel for this property, set this to undefined at the layout level.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-autoWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AccordionLayout'>Ext.layout.AccordionLayout</span><br/><a href='source/AccordionLayout.html#Ext-layout-AccordionLayout-cfg-autoWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AccordionLayout-cfg-autoWidth' class='name expandable'>autoWidth</a><span> : Boolean</span></div><div class='description'><div class='short'>True to set each contained item's width to 'auto', false to use the item's current width (defaults to true). ...</div><div class='long'><p>True to set each contained item's width to 'auto', false to use the item's current width (defaults to true).\nNote that some components, in particular the <a href=\"#!/api/Ext.grid.GridPanel\" rel=\"Ext.grid.GridPanel\" class=\"docClass\">grid</a>, will not function properly within\nlayouts if they have auto width, so in such cases this config should be set to false.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-collapseFirst' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AccordionLayout'>Ext.layout.AccordionLayout</span><br/><a href='source/AccordionLayout.html#Ext-layout-AccordionLayout-cfg-collapseFirst' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AccordionLayout-cfg-collapseFirst' class='name expandable'>collapseFirst</a><span> : Boolean</span></div><div class='description'><div class='short'>True to make sure the collapse/expand toggle button always renders first (to the left of) any other tools\nin the cont...</div><div class='long'><p>True to make sure the collapse/expand toggle button always renders first (to the left of) any other tools\nin the contained panels' title bars, false to render it last (defaults to false).</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-extraCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-cfg-extraCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-cfg-extraCls' class='name expandable'>extraCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>An optional extra CSS class that will be added to the container. ...</div><div class='long'><p>An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to the container or any of its children using standard CSS rules. See\n<a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#!/api/Ext.Component-cfg-ctCls\" rel=\"Ext.Component-cfg-ctCls\" class=\"docClass\">ctCls</a> also.</p>\n\n\n<p><b>Note</b>: <tt>extraCls</tt> defaults to <tt>''</tt> except for the following classes\nwhich assign a value by default:\n<div class=\"mdetail-params\"><ul>\n<li><a href=\"#!/api/Ext.layout.AbsoluteLayout\" rel=\"Ext.layout.AbsoluteLayout\" class=\"docClass\">Absolute Layout</a> : <tt>'x-abs-layout-item'</tt></li>\n<li>Box Layout : <tt>'x-box-item'</tt></li>\n<li><a href=\"#!/api/Ext.layout.ColumnLayout\" rel=\"Ext.layout.ColumnLayout\" class=\"docClass\">Column Layout</a> : <tt>'x-column'</tt></li>\n</ul></div>\nTo configure the above Classes with an extra CSS class append to the default.  For example,\nfor ColumnLayout:\n<pre><code>extraCls: 'x-column custom-class'\n</code></pre>\n</p>\n\n</div></div></div><div id='cfg-fill' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AccordionLayout'>Ext.layout.AccordionLayout</span><br/><a href='source/AccordionLayout.html#Ext-layout-AccordionLayout-cfg-fill' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AccordionLayout-cfg-fill' class='name expandable'>fill</a><span> : Boolean</span></div><div class='description'><div class='short'>True to adjust the active item's height to fill the available space in the container, false to use the\nitem's current...</div><div class='long'><p>True to adjust the active item's height to fill the available space in the container, false to use the\nitem's current height, or auto height if not explicitly set (defaults to true).</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-hideCollapseTool' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AccordionLayout'>Ext.layout.AccordionLayout</span><br/><a href='source/AccordionLayout.html#Ext-layout-AccordionLayout-cfg-hideCollapseTool' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AccordionLayout-cfg-hideCollapseTool' class='name expandable'>hideCollapseTool</a><span> : Boolean</span></div><div class='description'><div class='short'>True to hide the contained panels' collapse/expand toggle buttons, false to display them (defaults to false). ...</div><div class='long'><p>True to hide the contained panels' collapse/expand toggle buttons, false to display them (defaults to false).\nWhen set to true, <a href=\"#!/api/Ext.layout.AccordionLayout-cfg-titleCollapse\" rel=\"Ext.layout.AccordionLayout-cfg-titleCollapse\" class=\"docClass\">titleCollapse</a> should be true also.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-renderHidden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-cfg-renderHidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-cfg-renderHidden' class='name not-expandable'>renderHidden</a><span> : Boolean</span></div><div class='description'><div class='short'><p>True to hide each contained item on render (defaults to false).</p>\n</div><div class='long'><p>True to hide each contained item on render (defaults to false).</p>\n</div></div></div><div id='cfg-sequence' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AccordionLayout'>Ext.layout.AccordionLayout</span><br/><a href='source/AccordionLayout.html#Ext-layout-AccordionLayout-cfg-sequence' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AccordionLayout-cfg-sequence' class='name expandable'>sequence</a><span> : Boolean</span></div><div class='description'><div class='short'>Experimental. ...</div><div class='long'><p><b>Experimental</b>. If animate is set to true, this will result in each animation running in sequence.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-titleCollapse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AccordionLayout'>Ext.layout.AccordionLayout</span><br/><a href='source/AccordionLayout.html#Ext-layout-AccordionLayout-cfg-titleCollapse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AccordionLayout-cfg-titleCollapse' class='name expandable'>titleCollapse</a><span> : Boolean</span></div><div class='description'><div class='short'>True to allow expand/collapse of each contained panel by clicking anywhere on the title bar, false to allow\nexpand/co...</div><div class='long'><p>True to allow expand/collapse of each contained panel by clicking anywhere on the title bar, false to allow\nexpand/collapse only when the toggle tool button is clicked (defaults to true).  When set to false,\n<a href=\"#!/api/Ext.layout.AccordionLayout-cfg-hideCollapseTool\" rel=\"Ext.layout.AccordionLayout-cfg-hideCollapseTool\" class=\"docClass\">hideCollapseTool</a> should be false also.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-activeItem' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-property-activeItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-activeItem' class='name not-expandable'>activeItem</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>private</p>\n</div><div class='long'><p>private</p>\n</div></div></div><div id='property-fieldTpl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-property-fieldTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-fieldTpl' class='name expandable'>fieldTpl</a><span> : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span></div><div class='description'><div class='short'>The Ext.Template used by Field rendering layout classes (such as\nExt.layout.FormLayout) to create the DOM structure o...</div><div class='long'><p>The <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a> used by Field rendering layout classes (such as\n<a href=\"#!/api/Ext.layout.FormLayout\" rel=\"Ext.layout.FormLayout\" class=\"docClass\">Ext.layout.FormLayout</a>) to create the DOM structure of a fully wrapped,\nlabeled and styled form Field. A default Template is supplied, but this may be\noverriden to create custom field structures. The template processes values returned from\n<a href=\"#!/api/Ext.layout.FormLayout-method-getTemplateArgs\" rel=\"Ext.layout.FormLayout-method-getTemplateArgs\" class=\"docClass\">Ext.layout.FormLayout.getTemplateArgs</a>.</p>\n</div></div></div><div id='property-getLayoutTargetSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-property-getLayoutTargetSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-getLayoutTargetSize' class='name not-expandable'>getLayoutTargetSize</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>Placeholder for the derived layouts</p>\n</div><div class='long'><p>Placeholder for the derived layouts</p>\n</div></div></div><div id='property-monitorResize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.FitLayout' rel='Ext.layout.FitLayout' class='defined-in docClass'>Ext.layout.FitLayout</a><br/><a href='source/FitLayout.html#Ext-layout-FitLayout-property-monitorResize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FitLayout-property-monitorResize' class='name expandable'>monitorResize</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<p>Defaults to: <code>true</code></p><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-property-monitorResize' rel='Ext.layout.ContainerLayout-property-monitorResize' class='docClass'>Ext.layout.ContainerLayout.monitorResize</a></p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AccordionLayout'>Ext.layout.AccordionLayout</span><br/><a href='source/AccordionLayout.html#Ext-layout-AccordionLayout-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AccordionLayout-property-type' class='name expandable'>type</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'accordion'</code></p><p>Overrides: <a href='#!/api/Ext.layout.FitLayout-property-type' rel='Ext.layout.FitLayout-property-type' class='docClass'>Ext.layout.FitLayout.type</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.layout.ContainerLayout-method-constructor' class='name expandable'>Ext.layout.AccordionLayout</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.layout.ContainerLayout\" rel=\"Ext.layout.ContainerLayout\" class=\"docClass\">Ext.layout.ContainerLayout</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.layout.ContainerLayout\" rel=\"Ext.layout.ContainerLayout\" class=\"docClass\">Ext.layout.ContainerLayout</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-IEMeasureHack' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-IEMeasureHack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-IEMeasureHack' class='name expandable'>IEMeasureHack</a>( <span class='pre'>target, viewFlag</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Workaround for how IE measures autoWidth elements. ...</div><div class='long'><p>Workaround for how IE measures autoWidth elements.  It prefers bottom-up measurements</p>\n\n<pre><code> whereas other browser prefer top-down.  We will hide all target child elements before we measure and\n put them back to get an accurate measurement.\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>viewFlag</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-afterRemove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-afterRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-afterRemove' class='name expandable'>afterRemove</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-beforeExpand' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AccordionLayout'>Ext.layout.AccordionLayout</span><br/><a href='source/AccordionLayout.html#Ext-layout-AccordionLayout-method-beforeExpand' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AccordionLayout-method-beforeExpand' class='name expandable'>beforeExpand</a>( <span class='pre'>p, anim</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>p</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>anim</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-configureItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-configureItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-configureItem' class='name expandable'>configureItem</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Applies extraCls and hides the item if renderHidden is true ...</div><div class='long'><p>Applies extraCls and hides the item if renderHidden is true</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Destroys this layout. ...</div><div class='long'><p>Destroys this layout. This is a template method that is empty by default, but should be implemented\nby subclasses that require explicit destruction to purge event handlers or remove DOM nodes.</p>\n</div></div></div><div id='method-getLayoutTargetSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.FitLayout' rel='Ext.layout.FitLayout' class='defined-in docClass'>Ext.layout.FitLayout</a><br/><a href='source/FitLayout.html#Ext-layout-FitLayout-method-getLayoutTargetSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FitLayout-method-getLayoutTargetSize' class='name expandable'>getLayoutTargetSize</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getRenderedItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-getRenderedItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-getRenderedItems' class='name expandable'>getRenderedItems</a>( <span class='pre'>ct</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private. ...</div><div class='long'><p>private.\nGet all rendered items to lay out.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isValidParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-isValidParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-isValidParent' class='name expandable'>isValidParent</a>( <span class='pre'>c, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-layout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-layout' class='name expandable'>layout</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-onLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.FitLayout' rel='Ext.layout.FitLayout' class='defined-in docClass'>Ext.layout.FitLayout</a><br/><a href='source/FitLayout.html#Ext-layout-FitLayout-method-onLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FitLayout-method-onLayout' class='name expandable'>onLayout</a>( <span class='pre'>ct, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-onLayout' rel='Ext.layout.ContainerLayout-method-onLayout' class='docClass'>Ext.layout.ContainerLayout.onLayout</a></p></div></div></div><div id='method-onRemove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AccordionLayout'>Ext.layout.AccordionLayout</span><br/><a href='source/AccordionLayout.html#Ext-layout-AccordionLayout-method-onRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AccordionLayout-method-onRemove' class='name expandable'>onRemove</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-onRemove' rel='Ext.layout.ContainerLayout-method-onRemove' class='docClass'>Ext.layout.ContainerLayout.onRemove</a></p></div></div></div><div id='method-onResize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-onResize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-onResize' class='name expandable'>onResize</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-parseMargins' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-parseMargins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-parseMargins' class='name expandable'>parseMargins</a>( <span class='pre'>v</span> ) : Object</div><div class='description'><div class='short'>Parses a number or string representing margin sizes into an object. ...</div><div class='long'><p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The encoded margins</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object with margin sizes for top, right, bottom and left</p>\n</div></li></ul></div></div></div><div id='method-renderAll' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-renderAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-renderAll' class='name expandable'>renderAll</a>( <span class='pre'>ct, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-renderItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AccordionLayout'>Ext.layout.AccordionLayout</span><br/><a href='source/AccordionLayout.html#Ext-layout-AccordionLayout-method-renderItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AccordionLayout-method-renderItem' class='name expandable'>renderItem</a>( <span class='pre'>c, position, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Renders the given Component into the target Element. ...</div><div class='long'><p>Renders the given Component into the target Element. If the Component is already rendered,\nit is moved to the provided target instead.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The Component to render</p>\n</div></li><li><span class='pre'>position</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The position within the target to render the item to</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The target Element</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-renderItem' rel='Ext.layout.ContainerLayout-method-renderItem' class='docClass'>Ext.layout.ContainerLayout.renderItem</a></p></div></div></div><div id='method-runLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-runLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-runLayout' class='name expandable'>runLayout</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setActive' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AccordionLayout'>Ext.layout.AccordionLayout</span><br/><a href='source/AccordionLayout.html#Ext-layout-AccordionLayout-method-setActive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AccordionLayout-method-setActive' class='name expandable'>setActive</a>( <span class='pre'>item, expand</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>expand</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setActiveItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AccordionLayout'>Ext.layout.AccordionLayout</span><br/><a href='source/AccordionLayout.html#Ext-layout-AccordionLayout-method-setActiveItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AccordionLayout-method-setActiveItem' class='name expandable'>setActiveItem</a>( <span class='pre'>item</span> )</div><div class='description'><div class='short'>Sets the active (expanded) item in the layout. ...</div><div class='long'><p>Sets the active (expanded) item in the layout.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The string component id or numeric index of the item to activate</p>\n</div></li></ul></div></div></div><div id='method-setContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-setContainer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-setContainer' class='name expandable'>setContainer</a>( <span class='pre'>ct</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setItemSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.AccordionLayout'>Ext.layout.AccordionLayout</span><br/><a href='source/AccordionLayout.html#Ext-layout-AccordionLayout-method-setItemSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AccordionLayout-method-setItemSize' class='name expandable'>setItemSize</a>( <span class='pre'>item, size</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>size</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.FitLayout-method-setItemSize' rel='Ext.layout.FitLayout-method-setItemSize' class='docClass'>Ext.layout.FitLayout.setItemSize</a></p></div></div></div></div></div></div></div>",
    "superclasses": ["Ext.layout.ContainerLayout", "Ext.layout.FitLayout"],
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
        "href": "AccordionLayout.html#Ext-layout-AccordionLayout",
        "filename": "AccordionLayout.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {
                "private": true
            },
            "name": "activeItem",
            "id": "property-activeItem"
        }, {
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
            "owner": "Ext.layout.FitLayout",
            "meta": {
                "private": true
            },
            "name": "monitorResize",
            "id": "property-monitorResize"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.AccordionLayout",
            "meta": {
                "private": true
            },
            "name": "type",
            "id": "property-type"
        }],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.layout.AccordionLayout",
            "meta": {},
            "name": "activeOnTop",
            "id": "cfg-activeOnTop"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.AccordionLayout",
            "meta": {},
            "name": "animate",
            "id": "cfg-animate"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.AccordionLayout",
            "meta": {},
            "name": "autoWidth",
            "id": "cfg-autoWidth"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.AccordionLayout",
            "meta": {},
            "name": "collapseFirst",
            "id": "cfg-collapseFirst"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {},
            "name": "extraCls",
            "id": "cfg-extraCls"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.AccordionLayout",
            "meta": {},
            "name": "fill",
            "id": "cfg-fill"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.AccordionLayout",
            "meta": {},
            "name": "hideCollapseTool",
            "id": "cfg-hideCollapseTool"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {},
            "name": "renderHidden",
            "id": "cfg-renderHidden"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.AccordionLayout",
            "meta": {},
            "name": "sequence",
            "id": "cfg-sequence"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.AccordionLayout",
            "meta": {},
            "name": "titleCollapse",
            "id": "cfg-titleCollapse"
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
            "owner": "Ext.layout.AccordionLayout",
            "meta": {
                "private": true
            },
            "name": "beforeExpand",
            "id": "method-beforeExpand"
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
            "owner": "Ext.layout.ContainerLayout",
            "meta": {
                "protected": true,
                "private": true
            },
            "name": "destroy",
            "id": "method-destroy"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.FitLayout",
            "meta": {
                "private": true
            },
            "name": "getLayoutTargetSize",
            "id": "method-getLayoutTargetSize"
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
            "owner": "Ext.layout.ContainerLayout",
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
            "owner": "Ext.layout.FitLayout",
            "meta": {
                "private": true
            },
            "name": "onLayout",
            "id": "method-onLayout"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.AccordionLayout",
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
            "owner": "Ext.layout.AccordionLayout",
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
            "owner": "Ext.layout.AccordionLayout",
            "meta": {
                "private": true
            },
            "name": "setActive",
            "id": "method-setActive"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.AccordionLayout",
            "meta": {},
            "name": "setActiveItem",
            "id": "method-setActiveItem"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {
                "private": true
            },
            "name": "setContainer",
            "id": "method-setContainer"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.AccordionLayout",
            "meta": {
                "private": true
            },
            "name": "setItemSize",
            "id": "method-setItemSize"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.layout.AccordionLayout",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.layout.AccordionLayout",
    "mixins": [],
    "mixedInto": []
});