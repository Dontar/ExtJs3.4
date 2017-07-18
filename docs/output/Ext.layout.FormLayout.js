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
Ext.data.JsonP.Ext_layout_FormLayout({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": "Ext.layout.AnchorLayout",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='docClass'>Ext.layout.ContainerLayout</a><div class='subclass '><a href='#!/api/Ext.layout.AnchorLayout' rel='Ext.layout.AnchorLayout' class='docClass'>Ext.layout.AnchorLayout</a><div class='subclass '><strong>Ext.layout.FormLayout</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/FormLayout.html#Ext-layout-FormLayout' target='_blank'>FormLayout.js</a></div></pre><div class='doc-contents'><p>This layout manager is specifically designed for rendering and managing child Components of\n<a href=\"#!/api/Ext.form.FormPanel\" rel=\"Ext.form.FormPanel\" class=\"docClass\">forms</a>. It is responsible for rendering the labels of\n<a href=\"#!/api/Ext.form.Field\" rel=\"Ext.form.Field\" class=\"docClass\">Field</a>s.</p>\n\n\n\n\n<p>This layout manager is used when a Container is configured with the <tt>layout:'form'</tt>\n<a href=\"#!/api/Ext.Container-cfg-layout\" rel=\"Ext.Container-cfg-layout\" class=\"docClass\">layout</a> config option, and should generally not need to be created directly\nvia the new keyword. See <tt><b><a href=\"#!/api/Ext.Container-cfg-layout\" rel=\"Ext.Container-cfg-layout\" class=\"docClass\">Ext.Container.layout</a></b></tt> for additional details.</p>\n\n\n\n\n<p>In an application, it will usually be preferrable to use a <a href=\"#!/api/Ext.form.FormPanel\" rel=\"Ext.form.FormPanel\" class=\"docClass\">FormPanel</a>\n(which is configured with FormLayout as its layout class by default) since it also provides built-in\nfunctionality for <a href=\"#!/api/Ext.form.BasicForm-method-doAction\" rel=\"Ext.form.BasicForm-method-doAction\" class=\"docClass\">loading, validating and submitting</a> the form.</p>\n\n\n\n\n<p>A <a href=\"#!/api/Ext.Container\" rel=\"Ext.Container\" class=\"docClass\">Container</a> <i>using</i> the FormLayout layout manager (e.g.\n<a href=\"#!/api/Ext.form.FormPanel\" rel=\"Ext.form.FormPanel\" class=\"docClass\">Ext.form.FormPanel</a> or specifying <tt>layout:'form'</tt>) can also accept the following\nlayout-specific config properties:<div class=\"mdetail-params\"><ul>\n<li><b><tt><a href=\"#!/api/Ext.form.FormPanel-cfg-hideLabels\" rel=\"Ext.form.FormPanel-cfg-hideLabels\" class=\"docClass\">hideLabels</a></tt></b></li>\n<li><b><tt><a href=\"#!/api/Ext.form.FormPanel-cfg-labelAlign\" rel=\"Ext.form.FormPanel-cfg-labelAlign\" class=\"docClass\">labelAlign</a></tt></b></li>\n<li><b><tt><a href=\"#!/api/Ext.form.FormPanel-cfg-labelPad\" rel=\"Ext.form.FormPanel-cfg-labelPad\" class=\"docClass\">labelPad</a></tt></b></li>\n<li><b><tt><a href=\"#!/api/Ext.form.FormPanel-cfg-labelSeparator\" rel=\"Ext.form.FormPanel-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a></tt></b></li>\n<li><b><tt><a href=\"#!/api/Ext.form.FormPanel-cfg-labelWidth\" rel=\"Ext.form.FormPanel-cfg-labelWidth\" class=\"docClass\">labelWidth</a></tt></b></li>\n</ul></div></p>\n\n\n\n\n<p>Any Component (including Fields) managed by FormLayout accepts the following as a config option:\n<div class=\"mdetail-params\"><ul>\n<li><b><tt>anchor</tt></b></li>\n</ul></div></p>\n\n\n\n\n<p>Any Component managed by FormLayout may be rendered as a form field (with an associated label) by\nconfiguring it with a non-null <b><tt><a href=\"#!/api/Ext.Component-cfg-fieldLabel\" rel=\"Ext.Component-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a></tt></b>. Components configured\nin this way may be configured with the following options which affect the way the FormLayout renders them:\n<div class=\"mdetail-params\"><ul>\n<li><b><tt><a href=\"#!/api/Ext.Component-cfg-clearCls\" rel=\"Ext.Component-cfg-clearCls\" class=\"docClass\">clearCls</a></tt></b></li>\n<li><b><tt><a href=\"#!/api/Ext.Component-cfg-fieldLabel\" rel=\"Ext.Component-cfg-fieldLabel\" class=\"docClass\">fieldLabel</a></tt></b></li>\n<li><b><tt><a href=\"#!/api/Ext.Component-cfg-hideLabel\" rel=\"Ext.Component-cfg-hideLabel\" class=\"docClass\">hideLabel</a></tt></b></li>\n<li><b><tt><a href=\"#!/api/Ext.Component-cfg-itemCls\" rel=\"Ext.Component-cfg-itemCls\" class=\"docClass\">itemCls</a></tt></b></li>\n<li><b><tt><a href=\"#!/api/Ext.Component-cfg-labelSeparator\" rel=\"Ext.Component-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a></tt></b></li>\n<li><b><tt><a href=\"#!/api/Ext.Component-cfg-labelStyle\" rel=\"Ext.Component-cfg-labelStyle\" class=\"docClass\">labelStyle</a></tt></b></li>\n</ul></div></p>\n\n\n\n\n<p>Example usage:</p>\n\n\n<pre><code>// Required if showing validation messages\n<a href=\"#!/api/Ext.QuickTips-method-init\" rel=\"Ext.QuickTips-method-init\" class=\"docClass\">Ext.QuickTips.init</a>();\n\n// While you can create a basic Panel with layout:'form', practically\n// you should usually use a FormPanel to also get its form functionality\n// since it already creates a FormLayout internally.\nvar form = new <a href=\"#!/api/Ext.form.FormPanel\" rel=\"Ext.form.FormPanel\" class=\"docClass\">Ext.form.FormPanel</a>({\n    title: 'Form Layout',\n    bodyStyle: 'padding:15px',\n    width: 350,\n    defaultType: 'textfield',\n    defaults: {\n        // applied to each contained item\n        width: 230,\n        msgTarget: 'side'\n    },\n    items: [{\n            fieldLabel: 'First Name',\n            name: 'first',\n            allowBlank: false,\n            <a href=\"#!/api/Ext.Component-cfg-labelSeparator\" rel=\"Ext.Component-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>: ':' // override labelSeparator layout config\n        },{\n            fieldLabel: 'Last Name',\n            name: 'last'\n        },{\n            fieldLabel: 'Email',\n            name: 'email',\n            vtype:'email'\n        }, {\n            xtype: 'textarea',\n            hideLabel: true,     // override hideLabels layout config\n            name: 'msg',\n            anchor: '100% -53'\n        }\n    ],\n    buttons: [\n        {text: 'Save'},\n        {text: 'Cancel'}\n    ],\n    layoutConfig: {\n        <a href=\"#!/api/Ext.layout.FormLayout-cfg-labelSeparator\" rel=\"Ext.layout.FormLayout-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>: '~' // superseded by assignment below\n    },\n    // config options applicable to container when layout='form':\n    hideLabels: false,\n    labelAlign: 'left',   // or 'right' or 'top'\n    <a href=\"#!/api/Ext.form.FormPanel-cfg-labelSeparator\" rel=\"Ext.form.FormPanel-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>: '>>', // takes precedence over layoutConfig value\n    labelWidth: 65,       // defaults to 100\n    labelPad: 8           // defaults to 5, must specify labelWidth to be honored\n});\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-anchor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.AnchorLayout' rel='Ext.layout.AnchorLayout' class='defined-in docClass'>Ext.layout.AnchorLayout</a><br/><a href='source/AnchorLayout.html#Ext-layout-AnchorLayout-cfg-anchor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AnchorLayout-cfg-anchor' class='name expandable'>anchor</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>This configuation option is to be applied to child items of a container managed by\nthis layout (ie. ...</div><div class='long'><p>This configuation option is to be applied to <b>child <tt>items</tt></b> of a container managed by\nthis layout (ie. configured with <tt>layout:'anchor'</tt>).</p>\n\n\n<br/>\n\n\n\n\n<p>This value is what tells the layout how an item should be anchored to the container. <tt>items</tt>\nadded to an AnchorLayout accept an anchoring-specific config property of <b>anchor</b> which is a string\ncontaining two values: the horizontal anchor value and the vertical anchor value (for example, '100% 50%').\nThe following types of anchor values are supported:<div class=\"mdetail-params\"><ul>\n\n<li><b>Percentage</b> : Any value between 1 and 100, expressed as a percentage.<div class=\"sub-desc\">\nThe first anchor is the percentage width that the item should take up within the container, and the\nsecond is the percentage height.  For example:\n<pre><code>// two values specified\nanchor: '100% 50%' // render item complete width of the container and\n                   // 1/2 height of the container\n// one value specified\nanchor: '100%'     // the width value; the height will default to auto\n</code></pre></div></li>\n\n<li><b>Offsets</b> : Any positive or negative integer value.<div class=\"sub-desc\">\nThis is a raw adjustment where the first anchor is the offset from the right edge of the container,\nand the second is the offset from the bottom edge. For example:\n<pre><code>// two values specified\nanchor: '-50 -100' // render item the complete width of the container\n                   // minus 50 pixels and\n                   // the complete height minus 100 pixels.\n// one value specified\nanchor: '-50'      // anchor value is assumed to be the right offset value\n                   // bottom offset will default to 0\n</code></pre></div></li>\n\n<li><b>Sides</b> : Valid values are <tt>'right'</tt> (or <tt>'r'</tt>) and <tt>'bottom'</tt>\n(or <tt>'b'</tt>).<div class=\"sub-desc\">\nEither the container must have a fixed size or an anchorSize config value defined at render time in\norder for these to have any effect.</div></li>\n\n<li><b>Mixed</b> : <div class=\"sub-desc\">\nAnchor values can also be mixed as needed.  For example, to render the width offset from the container\nright edge by 50 pixels and 75% of the container's height use:\n<pre><code>anchor: '-50 75%'\n</code></pre></div></li>\n\n\n</ul></div>\n\n</p></div></div></div><div id='cfg-defaultAnchor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.AnchorLayout' rel='Ext.layout.AnchorLayout' class='defined-in docClass'>Ext.layout.AnchorLayout</a><br/><a href='source/AnchorLayout.html#Ext-layout-AnchorLayout-cfg-defaultAnchor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AnchorLayout-cfg-defaultAnchor' class='name expandable'>defaultAnchor</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>default anchor for all child container items applied if no anchor or specific width is set on the child item. ...</div><div class='long'><p>default anchor for all child container items applied if no anchor or specific width is set on the child item.  Defaults to '100%'.</p>\n<p>Defaults to: <code>'100%'</code></p></div></div></div><div id='cfg-extraCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-cfg-extraCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-cfg-extraCls' class='name expandable'>extraCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>An optional extra CSS class that will be added to the container. ...</div><div class='long'><p>An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to the container or any of its children using standard CSS rules. See\n<a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#!/api/Ext.Component-cfg-ctCls\" rel=\"Ext.Component-cfg-ctCls\" class=\"docClass\">ctCls</a> also.</p>\n\n\n<p><b>Note</b>: <tt>extraCls</tt> defaults to <tt>''</tt> except for the following classes\nwhich assign a value by default:\n<div class=\"mdetail-params\"><ul>\n<li><a href=\"#!/api/Ext.layout.AbsoluteLayout\" rel=\"Ext.layout.AbsoluteLayout\" class=\"docClass\">Absolute Layout</a> : <tt>'x-abs-layout-item'</tt></li>\n<li>Box Layout : <tt>'x-box-item'</tt></li>\n<li><a href=\"#!/api/Ext.layout.ColumnLayout\" rel=\"Ext.layout.ColumnLayout\" class=\"docClass\">Column Layout</a> : <tt>'x-column'</tt></li>\n</ul></div>\nTo configure the above Classes with an extra CSS class append to the default.  For example,\nfor ColumnLayout:\n<pre><code>extraCls: 'x-column custom-class'\n</code></pre>\n</p>\n\n</div></div></div><div id='cfg-fieldTpl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.FormLayout'>Ext.layout.FormLayout</span><br/><a href='source/FormLayout.html#Ext-layout-FormLayout-cfg-fieldTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FormLayout-cfg-fieldTpl' class='name expandable'>fieldTpl</a><span> : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span></div><div class='description'><div class='short'>A compiled Ext.Template for rendering\nthe fully wrapped, labeled and styled form Field. ...</div><div class='long'><p>A <a href=\"#!/api/Ext.Template-method-compile\" rel=\"Ext.Template-method-compile\" class=\"docClass\">compile</a>d <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a> for rendering\nthe fully wrapped, labeled and styled form Field. Defaults to:</p></p>\n\n<pre><code>new <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a>(\n    &#39;&lt;div class=\"x-form-item {itemCls}\" tabIndex=\"-1\">&#39;,\n        &#39;&lt;&#108;abel for=\"{id}\" style=\"{labelStyle}\" class=\"x-form-item-&#108;abel\">{&#108;abel}{labelSeparator}&lt;/&#108;abel>&#39;,\n        &#39;&lt;div class=\"x-form-element\" id=\"x-form-el-{id}\" style=\"{elementStyle}\">&#39;,\n        &#39;&lt;/div>&lt;div class=\"{clearCls}\">&lt;/div>&#39;,\n    '&lt;/div>'\n);\n</code></pre>\n\n\n<p>This may be specified to produce a different DOM structure when rendering form Fields.</p>\n\n\n<p>A description of the properties within the template follows:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><b><tt>itemCls</tt></b> : String<div class=\"sub-desc\">The CSS class applied to the outermost div wrapper\nthat contains this field label and field element (the default class is <tt>'x-form-item'</tt> and <tt>itemCls</tt>\nwill be added to that). If supplied, <tt>itemCls</tt> at the field level will override the default <tt>itemCls</tt>\nsupplied at the container level.</div></li>\n<li><b><tt>id</tt></b> : String<div class=\"sub-desc\">The id of the Field</div></li>\n<li><b><tt><a href=\"#!/api/Ext.layout.FormLayout-property-labelStyle\" rel=\"Ext.layout.FormLayout-property-labelStyle\" class=\"docClass\">labelStyle</a></tt></b> : String<div class=\"sub-desc\">\nA CSS style specification string to add to the field label for this field (defaults to <tt>''</tt> or the\n<a href=\"#!/api/Ext.layout.FormLayout-property-labelStyle\" rel=\"Ext.layout.FormLayout-property-labelStyle\" class=\"docClass\">layout's value for &lt;tt&gt;labelStyle&lt;/tt&gt;</a>).</div></li>\n<li><b><tt>label</tt></b> : String<div class=\"sub-desc\">The text to display as the label for this\nfield (defaults to <tt>''</tt>)</div></li>\n<li><b><tt><a href=\"#!/api/Ext.layout.FormLayout-cfg-labelSeparator\" rel=\"Ext.layout.FormLayout-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a></tt></b> : String<div class=\"sub-desc\">The separator to display after\nthe text of the label for this field (defaults to a colon <tt>':'</tt> or the\n<a href=\"#!/api/Ext.layout.FormLayout-cfg-labelSeparator\" rel=\"Ext.layout.FormLayout-cfg-labelSeparator\" class=\"docClass\">layout's value for labelSeparator</a>). To hide the separator use empty string ''.</div></li>\n<li><b><tt>elementStyle</tt></b> : String<div class=\"sub-desc\">The styles text for the input element's wrapper.</div></li>\n<li><b><tt>clearCls</tt></b> : String<div class=\"sub-desc\">The CSS class to apply to the special clearing div\nrendered directly after each form field wrapper (defaults to <tt>'x-form-clear-left'</tt>)</div></li>\n</ul></div>\n\n\n<p>Also see <tt><a href=\"#!/api/Ext.layout.FormLayout-method-getTemplateArgs\" rel=\"Ext.layout.FormLayout-method-getTemplateArgs\" class=\"docClass\">getTemplateArgs</a></tt></p>\n\n</div></div></div><div id='cfg-labelSeparator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.FormLayout'>Ext.layout.FormLayout</span><br/><a href='source/FormLayout.html#Ext-layout-FormLayout-cfg-labelSeparator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FormLayout-cfg-labelSeparator' class='name expandable'>labelSeparator</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>See Ext.form.FormPanel.labelSeparator. ...</div><div class='long'><p>See <a href=\"#!/api/Ext.form.FormPanel\" rel=\"Ext.form.FormPanel\" class=\"docClass\">Ext.form.FormPanel</a>.<a href=\"#!/api/Ext.form.FormPanel-cfg-labelSeparator\" rel=\"Ext.form.FormPanel-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a>.  Configuration\nof this property at the <b>container</b> level takes precedence.</p>\n<p>Defaults to: <code>':'</code></p></div></div></div><div id='cfg-renderHidden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-cfg-renderHidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-cfg-renderHidden' class='name not-expandable'>renderHidden</a><span> : Boolean</span></div><div class='description'><div class='short'><p>True to hide each contained item on render (defaults to false).</p>\n</div><div class='long'><p>True to hide each contained item on render (defaults to false).</p>\n</div></div></div><div id='cfg-trackLabels' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.FormLayout'>Ext.layout.FormLayout</span><br/><a href='source/FormLayout.html#Ext-layout-FormLayout-cfg-trackLabels' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FormLayout-cfg-trackLabels' class='name expandable'>trackLabels</a><span> : Boolean</span></div><div class='description'><div class='short'>True to show/hide the field label when the field is hidden. ...</div><div class='long'><p>True to show/hide the field label when the field is hidden. Defaults to <tt>true</tt>.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-fieldTpl' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-property-fieldTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-fieldTpl' class='name expandable'>fieldTpl</a><span> : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span></div><div class='description'><div class='short'>The Ext.Template used by Field rendering layout classes (such as\nExt.layout.FormLayout) to create the DOM structure o...</div><div class='long'><p>The <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a> used by Field rendering layout classes (such as\n<a href=\"#!/api/Ext.layout.FormLayout\" rel=\"Ext.layout.FormLayout\" class=\"docClass\">Ext.layout.FormLayout</a>) to create the DOM structure of a fully wrapped,\nlabeled and styled form Field. A default Template is supplied, but this may be\noverriden to create custom field structures. The template processes values returned from\n<a href=\"#!/api/Ext.layout.FormLayout-method-getTemplateArgs\" rel=\"Ext.layout.FormLayout-method-getTemplateArgs\" class=\"docClass\">Ext.layout.FormLayout.getTemplateArgs</a>.</p>\n</div></div></div><div id='property-getLayoutTargetSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-property-getLayoutTargetSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-getLayoutTargetSize' class='name not-expandable'>getLayoutTargetSize</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>Placeholder for the derived layouts</p>\n</div><div class='long'><p>Placeholder for the derived layouts</p>\n</div></div></div><div id='property-labelStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.FormLayout'>Ext.layout.FormLayout</span><br/><a href='source/FormLayout.html#Ext-layout-FormLayout-property-labelStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FormLayout-property-labelStyle' class='name expandable'>labelStyle</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Read only. ...</div><div class='long'><p>Read only. The CSS style specification string added to field labels in this layout if not\notherwise <a href=\"#!/api/Ext.Component-cfg-labelStyle\" rel=\"Ext.Component-cfg-labelStyle\" class=\"docClass\">specified by each contained field</a>.</p>\n</div></div></div><div id='property-monitorResize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.AnchorLayout' rel='Ext.layout.AnchorLayout' class='defined-in docClass'>Ext.layout.AnchorLayout</a><br/><a href='source/AnchorLayout.html#Ext-layout-AnchorLayout-property-monitorResize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AnchorLayout-property-monitorResize' class='name expandable'>monitorResize</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<p>Defaults to: <code>true</code></p><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-property-monitorResize' rel='Ext.layout.ContainerLayout-property-monitorResize' class='docClass'>Ext.layout.ContainerLayout.monitorResize</a></p></div></div></div><div id='property-parseAnchorRE' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.AnchorLayout' rel='Ext.layout.AnchorLayout' class='defined-in docClass'>Ext.layout.AnchorLayout</a><br/><a href='source/AnchorLayout.html#Ext-layout-AnchorLayout-property-parseAnchorRE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AnchorLayout-property-parseAnchorRE' class='name expandable'>parseAnchorRE</a><span> : RegExp</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/^(r|right|b|bottom)$/i</code></p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.FormLayout'>Ext.layout.FormLayout</span><br/><a href='source/FormLayout.html#Ext-layout-FormLayout-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FormLayout-property-type' class='name expandable'>type</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'form'</code></p><p>Overrides: <a href='#!/api/Ext.layout.AnchorLayout-property-type' rel='Ext.layout.AnchorLayout-property-type' class='docClass'>Ext.layout.AnchorLayout.type</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.layout.ContainerLayout-method-constructor' class='name expandable'>Ext.layout.FormLayout</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.layout.ContainerLayout\" rel=\"Ext.layout.ContainerLayout\" class=\"docClass\">Ext.layout.ContainerLayout</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.layout.ContainerLayout\" rel=\"Ext.layout.ContainerLayout\" class=\"docClass\">Ext.layout.ContainerLayout</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-IEMeasureHack' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-IEMeasureHack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-IEMeasureHack' class='name expandable'>IEMeasureHack</a>( <span class='pre'>target, viewFlag</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Workaround for how IE measures autoWidth elements. ...</div><div class='long'><p>Workaround for how IE measures autoWidth elements.  It prefers bottom-up measurements</p>\n\n<pre><code> whereas other browser prefer top-down.  We will hide all target child elements before we measure and\n put them back to get an accurate measurement.\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>viewFlag</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-adjustHeightAnchor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.FormLayout'>Ext.layout.FormLayout</span><br/><a href='source/FormLayout.html#Ext-layout-FormLayout-method-adjustHeightAnchor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FormLayout-method-adjustHeightAnchor' class='name expandable'>adjustHeightAnchor</a>( <span class='pre'>value, c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.AnchorLayout-method-adjustHeightAnchor' rel='Ext.layout.AnchorLayout-method-adjustHeightAnchor' class='docClass'>Ext.layout.AnchorLayout.adjustHeightAnchor</a></p></div></div></div><div id='method-adjustWidthAnchor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.FormLayout'>Ext.layout.FormLayout</span><br/><a href='source/FormLayout.html#Ext-layout-FormLayout-method-adjustWidthAnchor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FormLayout-method-adjustWidthAnchor' class='name expandable'>adjustWidthAnchor</a>( <span class='pre'>value, c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.AnchorLayout-method-adjustWidthAnchor' rel='Ext.layout.AnchorLayout-method-adjustWidthAnchor' class='docClass'>Ext.layout.AnchorLayout.adjustWidthAnchor</a></p></div></div></div><div id='method-afterRemove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-afterRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-afterRemove' class='name expandable'>afterRemove</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-configureItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-configureItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-configureItem' class='name expandable'>configureItem</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Applies extraCls and hides the item if renderHidden is true ...</div><div class='long'><p>Applies extraCls and hides the item if renderHidden is true</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong><strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Destroys this layout. ...</div><div class='long'><p>Destroys this layout. This is a template method that is empty by default, but should be implemented\nby subclasses that require explicit destruction to purge event handlers or remove DOM nodes.</p>\n</div></div></div><div id='method-getLabelStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.FormLayout'>Ext.layout.FormLayout</span><br/><a href='source/FormLayout.html#Ext-layout-FormLayout-method-getLabelStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FormLayout-method-getLabelStyle' class='name expandable'>getLabelStyle</a>( <span class='pre'>s</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>s</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLayoutTargetSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.AnchorLayout' rel='Ext.layout.AnchorLayout' class='defined-in docClass'>Ext.layout.AnchorLayout</a><br/><a href='source/AnchorLayout.html#Ext-layout-AnchorLayout-method-getLayoutTargetSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AnchorLayout-method-getLayoutTargetSize' class='name expandable'>getLayoutTargetSize</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getRenderedItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-getRenderedItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-getRenderedItems' class='name expandable'>getRenderedItems</a>( <span class='pre'>ct</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private. ...</div><div class='long'><p>private.\nGet all rendered items to lay out.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTemplateArgs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.FormLayout'>Ext.layout.FormLayout</span><br/><a href='source/FormLayout.html#Ext-layout-FormLayout-method-getTemplateArgs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FormLayout-method-getTemplateArgs' class='name expandable'>getTemplateArgs</a>( <span class='pre'>field</span> ) : Object</div><div class='description'><div class='short'>Provides template arguments for rendering the fully wrapped, labeled and styled form Field. ...</div><div class='long'><p>Provides template arguments for rendering the fully wrapped, labeled and styled form Field.</p>\n\n\n<p>This method returns an object hash containing properties used by the layout's <a href=\"#!/api/Ext.layout.FormLayout-property-fieldTpl\" rel=\"Ext.layout.FormLayout-property-fieldTpl\" class=\"docClass\">fieldTpl</a>\nto create a correctly wrapped, labeled and styled form Field. This may be overriden to\ncreate custom layouts. The properties which must be returned are:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li><b><tt>itemCls</tt></b> : String<div class=\"sub-desc\">The CSS class applied to the outermost div wrapper\nthat contains this field label and field element (the default class is <tt>'x-form-item'</tt> and <tt>itemCls</tt>\nwill be added to that). If supplied, <tt>itemCls</tt> at the field level will override the default <tt>itemCls</tt>\nsupplied at the container level.</div></li>\n<li><b><tt>id</tt></b> : String<div class=\"sub-desc\">The id of the Field</div></li>\n<li><b><tt><a href=\"#!/api/Ext.layout.FormLayout-property-labelStyle\" rel=\"Ext.layout.FormLayout-property-labelStyle\" class=\"docClass\">labelStyle</a></tt></b> : String<div class=\"sub-desc\">\nA CSS style specification string to add to the field label for this field (defaults to <tt>''</tt> or the\n<a href=\"#!/api/Ext.layout.FormLayout-property-labelStyle\" rel=\"Ext.layout.FormLayout-property-labelStyle\" class=\"docClass\">layout's value for &lt;tt&gt;labelStyle&lt;/tt&gt;</a>).</div></li>\n<li><b><tt>label</tt></b> : String<div class=\"sub-desc\">The text to display as the label for this\nfield (defaults to the field's configured fieldLabel property)</div></li>\n<li><b><tt><a href=\"#!/api/Ext.layout.FormLayout-cfg-labelSeparator\" rel=\"Ext.layout.FormLayout-cfg-labelSeparator\" class=\"docClass\">labelSeparator</a></tt></b> : String<div class=\"sub-desc\">The separator to display after\nthe text of the label for this field (defaults to a colon <tt>':'</tt> or the\n<a href=\"#!/api/Ext.layout.FormLayout-cfg-labelSeparator\" rel=\"Ext.layout.FormLayout-cfg-labelSeparator\" class=\"docClass\">layout's value for labelSeparator</a>). To hide the separator use empty string ''.</div></li>\n<li><b><tt>elementStyle</tt></b> : String<div class=\"sub-desc\">The styles text for the input element's wrapper.</div></li>\n<li><b><tt>clearCls</tt></b> : String<div class=\"sub-desc\">The CSS class to apply to the special clearing div\nrendered directly after each form field wrapper (defaults to <tt>'x-form-clear-left'</tt>)</div></li>\n</ul></div>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : Object<div class='sub-desc'><p>(<a href=\"#!/api/Ext.form.Field\" rel=\"Ext.form.Field\" class=\"docClass\">Ext.form.Field</a>} field The <a href=\"#!/api/Ext.form.Field\" rel=\"Ext.form.Field\" class=\"docClass\">Field</a> being rendered.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object hash containing the properties required to render the Field.</p>\n</div></li></ul></div></div></div><div id='method-isHide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.FormLayout'>Ext.layout.FormLayout</span><br/><a href='source/FormLayout.html#Ext-layout-FormLayout-method-isHide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FormLayout-method-isHide' class='name expandable'>isHide</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isValidParent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.FormLayout'>Ext.layout.FormLayout</span><br/><a href='source/FormLayout.html#Ext-layout-FormLayout-method-isValidParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FormLayout-method-isValidParent' class='name expandable'>isValidParent</a>( <span class='pre'>c, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-isValidParent' rel='Ext.layout.ContainerLayout-method-isValidParent' class='docClass'>Ext.layout.ContainerLayout.isValidParent</a></p></div></div></div><div id='method-layout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-layout' class='name expandable'>layout</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-onFieldHide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.FormLayout'>Ext.layout.FormLayout</span><br/><a href='source/FormLayout.html#Ext-layout-FormLayout-method-onFieldHide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FormLayout-method-onFieldHide' class='name expandable'>onFieldHide</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onFieldShow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.FormLayout'>Ext.layout.FormLayout</span><br/><a href='source/FormLayout.html#Ext-layout-FormLayout-method-onFieldShow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FormLayout-method-onFieldShow' class='name expandable'>onFieldShow</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.AnchorLayout' rel='Ext.layout.AnchorLayout' class='defined-in docClass'>Ext.layout.AnchorLayout</a><br/><a href='source/AnchorLayout.html#Ext-layout-AnchorLayout-method-onLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AnchorLayout-method-onLayout' class='name expandable'>onLayout</a>( <span class='pre'>container, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>container</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-onLayout' rel='Ext.layout.ContainerLayout-method-onLayout' class='docClass'>Ext.layout.ContainerLayout.onLayout</a></p></div></div></div><div id='method-onRemove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.FormLayout'>Ext.layout.FormLayout</span><br/><a href='source/FormLayout.html#Ext-layout-FormLayout-method-onRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FormLayout-method-onRemove' class='name expandable'>onRemove</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-onRemove' rel='Ext.layout.ContainerLayout-method-onRemove' class='docClass'>Ext.layout.ContainerLayout.onRemove</a></p></div></div></div><div id='method-onResize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-onResize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-onResize' class='name expandable'>onResize</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-parseAnchor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.AnchorLayout' rel='Ext.layout.AnchorLayout' class='defined-in docClass'>Ext.layout.AnchorLayout</a><br/><a href='source/AnchorLayout.html#Ext-layout-AnchorLayout-method-parseAnchor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.AnchorLayout-method-parseAnchor' class='name expandable'>parseAnchor</a>( <span class='pre'>a, start, cstart</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>a</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>start</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cstart</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parseMargins' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-parseMargins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-parseMargins' class='name expandable'>parseMargins</a>( <span class='pre'>v</span> ) : Object</div><div class='description'><div class='short'>Parses a number or string representing margin sizes into an object. ...</div><div class='long'><p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The encoded margins</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object with margin sizes for top, right, bottom and left</p>\n</div></li></ul></div></div></div><div id='method-renderAll' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-renderAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-renderAll' class='name expandable'>renderAll</a>( <span class='pre'>ct, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-renderItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.FormLayout'>Ext.layout.FormLayout</span><br/><a href='source/FormLayout.html#Ext-layout-FormLayout-method-renderItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FormLayout-method-renderItem' class='name expandable'>renderItem</a>( <span class='pre'>c, position, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>position</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-renderItem' rel='Ext.layout.ContainerLayout-method-renderItem' class='docClass'>Ext.layout.ContainerLayout.renderItem</a></p></div></div></div><div id='method-runLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-runLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-runLayout' class='name expandable'>runLayout</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setContainer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.FormLayout'>Ext.layout.FormLayout</span><br/><a href='source/FormLayout.html#Ext-layout-FormLayout-method-setContainer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.FormLayout-method-setContainer' class='name expandable'>setContainer</a>( <span class='pre'>ct</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-setContainer' rel='Ext.layout.ContainerLayout-method-setContainer' class='docClass'>Ext.layout.ContainerLayout.setContainer</a></p></div></div></div></div></div></div></div>",
    "superclasses": ["Ext.layout.ContainerLayout", "Ext.layout.AnchorLayout"],
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
        "href": "FormLayout.html#Ext-layout-FormLayout",
        "filename": "FormLayout.js"
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
            "owner": "Ext.layout.FormLayout",
            "meta": {},
            "name": "labelStyle",
            "id": "property-labelStyle"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.AnchorLayout",
            "meta": {
                "private": true
            },
            "name": "monitorResize",
            "id": "property-monitorResize"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.AnchorLayout",
            "meta": {
                "private": true
            },
            "name": "parseAnchorRE",
            "id": "property-parseAnchorRE"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.FormLayout",
            "meta": {
                "private": true
            },
            "name": "type",
            "id": "property-type"
        }],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.layout.AnchorLayout",
            "meta": {},
            "name": "anchor",
            "id": "cfg-anchor"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.AnchorLayout",
            "meta": {},
            "name": "defaultAnchor",
            "id": "cfg-defaultAnchor"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {},
            "name": "extraCls",
            "id": "cfg-extraCls"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.FormLayout",
            "meta": {},
            "name": "fieldTpl",
            "id": "cfg-fieldTpl"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.FormLayout",
            "meta": {},
            "name": "labelSeparator",
            "id": "cfg-labelSeparator"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {},
            "name": "renderHidden",
            "id": "cfg-renderHidden"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.FormLayout",
            "meta": {},
            "name": "trackLabels",
            "id": "cfg-trackLabels"
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
            "owner": "Ext.layout.FormLayout",
            "meta": {
                "private": true
            },
            "name": "adjustHeightAnchor",
            "id": "method-adjustHeightAnchor"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.FormLayout",
            "meta": {
                "private": true
            },
            "name": "adjustWidthAnchor",
            "id": "method-adjustWidthAnchor"
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
            "owner": "Ext.layout.ContainerLayout",
            "meta": {
                "protected": true,
                "private": true
            },
            "name": "destroy",
            "id": "method-destroy"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.FormLayout",
            "meta": {
                "private": true
            },
            "name": "getLabelStyle",
            "id": "method-getLabelStyle"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.AnchorLayout",
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
            "owner": "Ext.layout.FormLayout",
            "meta": {},
            "name": "getTemplateArgs",
            "id": "method-getTemplateArgs"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.FormLayout",
            "meta": {
                "private": true
            },
            "name": "isHide",
            "id": "method-isHide"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.FormLayout",
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
            "owner": "Ext.layout.FormLayout",
            "meta": {
                "private": true
            },
            "name": "onFieldHide",
            "id": "method-onFieldHide"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.FormLayout",
            "meta": {
                "private": true
            },
            "name": "onFieldShow",
            "id": "method-onFieldShow"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.AnchorLayout",
            "meta": {
                "private": true
            },
            "name": "onLayout",
            "id": "method-onLayout"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.FormLayout",
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
            "owner": "Ext.layout.AnchorLayout",
            "meta": {
                "private": true
            },
            "name": "parseAnchor",
            "id": "method-parseAnchor"
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
            "owner": "Ext.layout.FormLayout",
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
            "owner": "Ext.layout.FormLayout",
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
    "name": "Ext.layout.FormLayout",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.layout.FormLayout",
    "mixins": [],
    "mixedInto": []
});