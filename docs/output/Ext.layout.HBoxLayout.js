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
Ext.data.JsonP.Ext_layout_HBoxLayout({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": "Ext.layout.BoxLayout",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='docClass'>Ext.layout.ContainerLayout</a><div class='subclass '><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='docClass'>Ext.layout.BoxLayout</a><div class='subclass '><strong>Ext.layout.HBoxLayout</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/HBoxLayout.html#Ext-layout-HBoxLayout' target='_blank'>HBoxLayout.js</a></div></pre><div class='doc-contents'><p>A layout that arranges items horizontally across a Container. This layout optionally divides available horizontal\nspace between child items containing a numeric <code>flex</code> configuration.</p>\n\n\n<p>This layout may also be used to set the heights of child items by configuring it with the <a href=\"#!/api/Ext.layout.HBoxLayout-cfg-align\" rel=\"Ext.layout.HBoxLayout-cfg-align\" class=\"docClass\">align</a> option.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-align' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.HBoxLayout'>Ext.layout.HBoxLayout</span><br/><a href='source/HBoxLayout.html#Ext-layout-HBoxLayout-cfg-align' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.HBoxLayout-cfg-align' class='name expandable'>align</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Controls how the child items of the container are aligned. ...</div><div class='long'><p>Controls how the child items of the container are aligned. Acceptable configuration values for this\nproperty are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b><tt>top</tt></b> : <b>Default</b><div class=\"sub-desc\">child items are aligned vertically\nat the <b>top</b> of the container</div></li>\n<li><b><tt>middle</tt></b> : <div class=\"sub-desc\">child items are aligned vertically in the\n<b>middle</b> of the container</div></li>\n<li><b><tt>stretch</tt></b> : <div class=\"sub-desc\">child items are stretched vertically to fill\nthe height of the container</div></li>\n<li><b><tt>stretchmax</tt></b> : <div class=\"sub-desc\">child items are stretched vertically to\nthe height of the largest item.</div></li>\n</ul></div>\n\n<p>Defaults to: <code>'top'</code></p></div></div></div><div id='cfg-defaultMargins' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-cfg-defaultMargins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-cfg-defaultMargins' class='name expandable'>defaultMargins</a><span> : Object</span></div><div class='description'><div class='short'>If the individual contained items do not have a margins\nproperty specified, the default margins from this property wi...</div><div class='long'><p>If the individual contained items do not have a <tt>margins</tt>\nproperty specified, the default margins from this property will be\napplied to each item.</p>\n\n\n<br><p>This property may be specified as an object containing margins\n\n\n<p>to apply in the format:</p></p>\n\n<pre><code>{\n    top: (top margin),\n    right: (right margin),\n    bottom: (bottom margin),\n    left: (left margin)\n}</code></pre>\n\n\n<p>This property may also be specified as a string containing\nspace-separated, numeric margin values. The order of the sides associated\nwith each value matches the way CSS processes margin values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>If there is only one value, it applies to all sides.</li>\n<li>If there are two values, the top and bottom borders are set to the\nfirst value and the right and left are set to the second.</li>\n<li>If there are three values, the top is set to the first value, the left\nand right are set to the second, and the bottom is set to the third.</li>\n<li>If there are four values, they apply to the top, right, bottom, and\nleft, respectively.</li>\n</ul></div>\n\n\n<p>Defaults to:</p>\n\n\n<pre><code>{top:0, right:0, bottom:0, left:0}\n</code></pre>\n\n<p>Defaults to: <code>{left: 0, top: 0, right: 0, bottom: 0}</code></p></div></div></div><div id='cfg-extraCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-cfg-extraCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-cfg-extraCls' class='name expandable'>extraCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>An optional extra CSS class that will be added to the container. ...</div><div class='long'><p>An optional extra CSS class that will be added to the container. This can be useful for adding\ncustomized styles to the container or any of its children using standard CSS rules. See\n<a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#!/api/Ext.Component-cfg-ctCls\" rel=\"Ext.Component-cfg-ctCls\" class=\"docClass\">ctCls</a> also.</p>\n\n\n<p><b>Note</b>: <tt>extraCls</tt> defaults to <tt>''</tt> except for the following classes\nwhich assign a value by default:\n<div class=\"mdetail-params\"><ul>\n<li><a href=\"#!/api/Ext.layout.AbsoluteLayout\" rel=\"Ext.layout.AbsoluteLayout\" class=\"docClass\">Absolute Layout</a> : <tt>'x-abs-layout-item'</tt></li>\n<li>Box Layout : <tt>'x-box-item'</tt></li>\n<li><a href=\"#!/api/Ext.layout.ColumnLayout\" rel=\"Ext.layout.ColumnLayout\" class=\"docClass\">Column Layout</a> : <tt>'x-column'</tt></li>\n</ul></div>\nTo configure the above Classes with an extra CSS class append to the default.  For example,\nfor ColumnLayout:\n<pre><code>extraCls: 'x-column custom-class'\n</code></pre>\n</p>\n\n<p>Defaults to: <code>'x-box-item'</code></p><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-cfg-extraCls' rel='Ext.layout.ContainerLayout-cfg-extraCls' class='docClass'>Ext.layout.ContainerLayout.extraCls</a></p></div></div></div><div id='cfg-flex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.HBoxLayout'>Ext.layout.HBoxLayout</span><br/><a href='source/HBoxLayout.html#Ext-layout-HBoxLayout-cfg-flex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.HBoxLayout-cfg-flex' class='name expandable'>flex</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>This configuation option is to be applied to child items of the container managed\nby this layout. ...</div><div class='long'><p>This configuation option is to be applied to <b>child <tt>items</tt></b> of the container managed\nby this layout. Each child item with a <tt>flex</tt> property will be flexed <b>horizontally</b>\naccording to each item's <b>relative</b> <tt>flex</tt> value compared to the sum of all items with\na <tt>flex</tt> value specified.  Any child items that have either a <tt>flex = 0</tt> or\n<tt>flex = undefined</tt> will not be 'flexed' (the initial size will not be changed).</p>\n</div></div></div><div id='cfg-pack' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.HBoxLayout'>Ext.layout.HBoxLayout</span><br/><a href='source/HBoxLayout.html#Ext-layout-HBoxLayout-cfg-pack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.HBoxLayout-cfg-pack' class='name expandable'>pack</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Controls how the child items of the container are packed together. ...</div><div class='long'><p>Controls how the child items of the container are packed together. Acceptable configuration values\nfor this property are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b><tt>start</tt></b> : <b>Default</b><div class=\"sub-desc\">child items are packed together at\n<b>left</b> side of container</div></li>\n<li><b><tt>center</tt></b> : <div class=\"sub-desc\">child items are packed together at\n<b>mid-width</b> of container</div></li>\n<li><b><tt>end</tt></b> : <div class=\"sub-desc\">child items are packed together at <b>right</b>\nside of container</div></li>\n</ul></div>\n\n</div></div></div><div id='cfg-padding' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-cfg-padding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-cfg-padding' class='name expandable'>padding</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Sets the padding to be applied to all child items managed by this layout. ...</div><div class='long'><p>Sets the padding to be applied to all child items managed by this layout.</p>\n\n\n<p>This property must be specified as a string containing\nspace-separated, numeric padding values. The order of the sides associated\nwith each value matches the way CSS processes padding values:</p>\n\n\n<div class=\"mdetail-params\"><ul>\n<li>If there is only one value, it applies to all sides.</li>\n<li>If there are two values, the top and bottom borders are set to the\nfirst value and the right and left are set to the second.</li>\n<li>If there are three values, the top is set to the first value, the left\nand right are set to the second, and the bottom is set to the third.</li>\n<li>If there are four values, they apply to the top, right, bottom, and\nleft, respectively.</li>\n</ul></div>\n\n\n<p>Defaults to: <code>\"0\"</code></p>\n\n<p>Defaults to: <code>'0'</code></p></div></div></div><div id='cfg-renderHidden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-cfg-renderHidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-cfg-renderHidden' class='name not-expandable'>renderHidden</a><span> : Boolean</span></div><div class='description'><div class='short'><p>True to hide each contained item on render (defaults to false).</p>\n</div><div class='long'><p>True to hide each contained item on render (defaults to false).</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-activeItem' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-property-activeItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-activeItem' class='name not-expandable'>activeItem</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>private</p>\n</div><div class='long'><p>private</p>\n</div></div></div><div id='property-childBoxCache' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-property-childBoxCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-property-childBoxCache' class='name expandable'>childBoxCache</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Array of the last calculated height, width, top and left positions of each visible rendered component\nwithin the Box ...</div><div class='long'><p>Array of the last calculated height, width, top and left positions of each visible rendered component\nwithin the Box layout.</p>\n</div></div></div><div id='property-fieldTpl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-property-fieldTpl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-fieldTpl' class='name expandable'>fieldTpl</a><span> : <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a></span></div><div class='description'><div class='short'>The Ext.Template used by Field rendering layout classes (such as\nExt.layout.FormLayout) to create the DOM structure o...</div><div class='long'><p>The <a href=\"#!/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a> used by Field rendering layout classes (such as\n<a href=\"#!/api/Ext.layout.FormLayout\" rel=\"Ext.layout.FormLayout\" class=\"docClass\">Ext.layout.FormLayout</a>) to create the DOM structure of a fully wrapped,\nlabeled and styled form Field. A default Template is supplied, but this may be\noverriden to create custom field structures. The template processes values returned from\n<a href=\"#!/api/Ext.layout.FormLayout-method-getTemplateArgs\" rel=\"Ext.layout.FormLayout-method-getTemplateArgs\" class=\"docClass\">Ext.layout.FormLayout.getTemplateArgs</a>.</p>\n</div></div></div><div id='property-getLayoutTargetSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-property-getLayoutTargetSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-property-getLayoutTargetSize' class='name not-expandable'>getLayoutTargetSize</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>Placeholder for the derived layouts</p>\n</div><div class='long'><p>Placeholder for the derived layouts</p>\n</div></div></div><div id='property-innerCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-property-innerCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-property-innerCls' class='name expandable'>innerCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'x-box-inner'</code></p></div></div></div><div id='property-layoutTargetLastSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-property-layoutTargetLastSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-property-layoutTargetLastSize' class='name expandable'>layoutTargetLastSize</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Private cache of the last measured size of the layout target. ...</div><div class='long'><p>Private cache of the last measured size of the layout target. This should never be used except by\nBoxLayout subclasses during their onLayout run.</p>\n</div></div></div><div id='property-monitorResize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-property-monitorResize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-property-monitorResize' class='name expandable'>monitorResize</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<p>Defaults to: <code>true</code></p><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-property-monitorResize' rel='Ext.layout.ContainerLayout-property-monitorResize' class='docClass'>Ext.layout.ContainerLayout.monitorResize</a></p></div></div></div><div id='property-pack' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-property-pack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-property-pack' class='name expandable'>pack</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>documented in subclasses ...</div><div class='long'><p>documented in subclasses</p>\n<p>Defaults to: <code>'start'</code></p></div></div></div><div id='property-scrollOffset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-property-scrollOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-property-scrollOffset' class='name expandable'>scrollOffset</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-targetCls' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-property-targetCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-property-targetCls' class='name expandable'>targetCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'x-box-layout-ct'</code></p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.HBoxLayout'>Ext.layout.HBoxLayout</span><br/><a href='source/HBoxLayout.html#Ext-layout-HBoxLayout-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.HBoxLayout-property-type' class='name expandable'>type</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>top, middle, stretch, strechmax ...</div><div class='long'><p>top, middle, stretch, strechmax</p>\n<p>Defaults to: <code>'hbox'</code></p><p>Overrides: <a href='#!/api/Ext.layout.BoxLayout-property-type' rel='Ext.layout.BoxLayout-property-type' class='docClass'>Ext.layout.BoxLayout.type</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.layout.BoxLayout-method-constructor' class='name expandable'>Ext.layout.HBoxLayout</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.layout.BoxLayout\" rel=\"Ext.layout.BoxLayout\" class=\"docClass\">Ext.layout.BoxLayout</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.layout.BoxLayout\" rel=\"Ext.layout.BoxLayout\" class=\"docClass\">Ext.layout.BoxLayout</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-constructor' rel='Ext.layout.ContainerLayout-method-constructor' class='docClass'>Ext.layout.ContainerLayout.constructor</a></p></div></div></div><div id='method-IEMeasureHack' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-IEMeasureHack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-IEMeasureHack' class='name expandable'>IEMeasureHack</a>( <span class='pre'>target, viewFlag</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Workaround for how IE measures autoWidth elements. ...</div><div class='long'><p>Workaround for how IE measures autoWidth elements.  It prefers bottom-up measurements</p>\n\n<pre><code> whereas other browser prefer top-down.  We will hide all target child elements before we measure and\n put them back to get an accurate measurement.\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>viewFlag</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-afterRemove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-afterRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-afterRemove' class='name expandable'>afterRemove</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-calculateChildBoxes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.HBoxLayout'>Ext.layout.HBoxLayout</span><br/><a href='source/HBoxLayout.html#Ext-layout-HBoxLayout-method-calculateChildBoxes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.HBoxLayout-method-calculateChildBoxes' class='name expandable'>calculateChildBoxes</a>( <span class='pre'>visibleItems, targetSize</span> ) : Object<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Calculates the size and positioning of each item in the HBox. ...</div><div class='long'><p>Calculates the size and positioning of each item in the HBox. This iterates over all of the rendered,\nvisible items and returns a height, width, top and left for each, as well as a reference to each. Also\nreturns meta data such as maxHeight which are useful when resizing layout wrappers such as this.innerCt.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>visibleItems</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The array of all rendered, visible items to be calculated for</p>\n</div></li><li><span class='pre'>targetSize</span> : Object<div class='sub-desc'><p>Object containing target size and height</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Object containing box measurements for each child, plus meta data</p>\n</div></li></ul></div></div></div><div id='method-configureItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-configureItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-configureItem' class='name expandable'>configureItem</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Applies extraCls and hides the item if renderHidden is true ...</div><div class='long'><p>Applies extraCls and hides the item if renderHidden is true</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-destroy' rel='Ext.layout.ContainerLayout-method-destroy' class='docClass'>Ext.layout.ContainerLayout.destroy</a></p></div></div></div><div id='method-getLayoutTargetSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-method-getLayoutTargetSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-method-getLayoutTargetSize' class='name expandable'>getLayoutTargetSize</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getRenderedItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-getRenderedItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-getRenderedItems' class='name expandable'>getRenderedItems</a>( <span class='pre'>ct</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private. ...</div><div class='long'><p>private.\nGet all rendered items to lay out.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getVisibleItems' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-method-getVisibleItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-method-getVisibleItems' class='name expandable'>getVisibleItems</a>( <span class='pre'>ct</span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Returns all items that are both rendered and visible ...</div><div class='long'><p>Returns all items that are both rendered and visible</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>All matching items</p>\n</div></li></ul></div></div></div><div id='method-handleTargetOverflow' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-method-handleTargetOverflow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-method-handleTargetOverflow' class='name expandable'>handleTargetOverflow</a>( <span class='pre'>previousTargetSize, container, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>This should be called after onLayout of any BoxLayout subclass. ...</div><div class='long'><p>This should be called after onLayout of any BoxLayout subclass. If the target's overflow is not set to 'hidden',\nwe need to lay out a second time because the scrollbars may have modified the height and width of the layout\ntarget. Having a Box layout inside such a target is therefore not recommended.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>previousTargetSize</span> : Object<div class='sub-desc'><p>The size and height of the layout target before we just laid out</p>\n</div></li><li><span class='pre'>container</span> : <a href=\"#!/api/Ext.Container\" rel=\"Ext.Container\" class=\"docClass\">Ext.Container</a><div class='sub-desc'><p>The container</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The target element</p>\n</div></li></ul></div></div></div><div id='method-isValidParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-method-isValidParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-method-isValidParent' class='name expandable'>isValidParent</a>( <span class='pre'>c, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-isValidParent' rel='Ext.layout.ContainerLayout-method-isValidParent' class='docClass'>Ext.layout.ContainerLayout.isValidParent</a></p></div></div></div><div id='method-layout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-layout' class='name expandable'>layout</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-onLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-method-onLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-method-onLayout' class='name expandable'>onLayout</a>( <span class='pre'>container, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Runs the child box calculations and caches them in childBoxCache. ...</div><div class='long'><p>Runs the child box calculations and caches them in childBoxCache. Subclasses can used these cached values\nwhen laying out</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>container</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-onLayout' rel='Ext.layout.ContainerLayout-method-onLayout' class='docClass'>Ext.layout.ContainerLayout.onLayout</a></p></div></div></div><div id='method-onRemove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-onRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-onRemove' class='name expandable'>onRemove</a>( <span class='pre'>c</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onResize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-onResize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-onResize' class='name expandable'>onResize</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-parseMargins' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-parseMargins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-parseMargins' class='name expandable'>parseMargins</a>( <span class='pre'>v</span> ) : Object</div><div class='description'><div class='short'>Parses a number or string representing margin sizes into an object. ...</div><div class='long'><p>Parses a number or string representing margin sizes into an object. Supports CSS-style margin declarations\n(e.g. 10, \"10\", \"10 10\", \"10 10 10\" and \"10 10 10 10\" are all valid options and would return the same result)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The encoded margins</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object with margin sizes for top, right, bottom and left</p>\n</div></li></ul></div></div></div><div id='method-renderAll' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-method-renderAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-method-renderAll' class='name expandable'>renderAll</a>( <span class='pre'>ct, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-renderAll' rel='Ext.layout.ContainerLayout-method-renderAll' class='docClass'>Ext.layout.ContainerLayout.renderAll</a></p></div></div></div><div id='method-renderItem' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-method-renderItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-method-renderItem' class='name expandable'>renderItem</a>( <span class='pre'>c, position, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private\n\nRenders the given Component into the target Element. ...</div><div class='long'><p>private</p>\n\n<p>Renders the given Component into the target Element. If the Component is already rendered,\nit is moved to the provided target instead.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The Component to render</p>\n</div></li><li><span class='pre'>position</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The position within the target to render the item to</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The target Element</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.ContainerLayout-method-renderItem' rel='Ext.layout.ContainerLayout-method-renderItem' class='docClass'>Ext.layout.ContainerLayout.renderItem</a></p></div></div></div><div id='method-runLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-runLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-runLayout' class='name expandable'>runLayout</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.ContainerLayout' rel='Ext.layout.ContainerLayout' class='defined-in docClass'>Ext.layout.ContainerLayout</a><br/><a href='source/ContainerLayout.html#Ext-layout-ContainerLayout-method-setContainer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.ContainerLayout-method-setContainer' class='name expandable'>setContainer</a>( <span class='pre'>ct</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ct</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateChildBoxes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-method-updateChildBoxes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-method-updateChildBoxes' class='name expandable'>updateChildBoxes</a>( <span class='pre'>boxes</span> )</div><div class='description'><div class='short'>Resizes and repositions each child component ...</div><div class='long'><p>Resizes and repositions each child component</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>boxes</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The box measurements</p>\n</div></li></ul></div></div></div><div id='method-updateInnerCtSize' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.BoxLayout' rel='Ext.layout.BoxLayout' class='defined-in docClass'>Ext.layout.BoxLayout</a><br/><a href='source/BoxLayout.html#Ext-layout-BoxLayout-method-updateInnerCtSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.BoxLayout-method-updateInnerCtSize' class='name expandable'>updateInnerCtSize</a>( <span class='pre'>currentSize, calculations</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Called by onRender just before the child components are sized and positioned. ...</div><div class='long'><p>Called by onRender just before the child components are sized and positioned. This resizes the innerCt\nto make sure all child items fit within it. We call this before sizing the children because if our child\nitems are larger than the previous innerCt size the browser will insert scrollbars and then remove them\nagain immediately afterwards, giving a performance hit.\nSubclasses should provide an implementation.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>currentSize</span> : Object<div class='sub-desc'><p>The current height and width of the innerCt</p>\n</div></li><li><span class='pre'>calculations</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The new box calculations of all items to be laid out</p>\n</div></li></ul></div></div></div></div></div></div></div>",
    "superclasses": ["Ext.layout.ContainerLayout", "Ext.layout.BoxLayout"],
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
        "href": "HBoxLayout.html#Ext-layout-HBoxLayout",
        "filename": "HBoxLayout.js"
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
            "owner": "Ext.layout.BoxLayout",
            "meta": {
                "private": true
            },
            "name": "childBoxCache",
            "id": "property-childBoxCache"
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
            "owner": "Ext.layout.BoxLayout",
            "meta": {
                "private": true
            },
            "name": "innerCls",
            "id": "property-innerCls"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.BoxLayout",
            "meta": {
                "private": true
            },
            "name": "layoutTargetLastSize",
            "id": "property-layoutTargetLastSize"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.BoxLayout",
            "meta": {
                "private": true
            },
            "name": "monitorResize",
            "id": "property-monitorResize"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.BoxLayout",
            "meta": {
                "private": true
            },
            "name": "pack",
            "id": "property-pack"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.BoxLayout",
            "meta": {
                "private": true
            },
            "name": "scrollOffset",
            "id": "property-scrollOffset"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.BoxLayout",
            "meta": {
                "private": true
            },
            "name": "targetCls",
            "id": "property-targetCls"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.HBoxLayout",
            "meta": {
                "private": true
            },
            "name": "type",
            "id": "property-type"
        }],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.layout.HBoxLayout",
            "meta": {},
            "name": "align",
            "id": "cfg-align"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.BoxLayout",
            "meta": {},
            "name": "defaultMargins",
            "id": "cfg-defaultMargins"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.BoxLayout",
            "meta": {},
            "name": "extraCls",
            "id": "cfg-extraCls"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.HBoxLayout",
            "meta": {},
            "name": "flex",
            "id": "cfg-flex"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.HBoxLayout",
            "meta": {},
            "name": "pack",
            "id": "cfg-pack"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.BoxLayout",
            "meta": {},
            "name": "padding",
            "id": "cfg-padding"
        }, {
            "tagname": "cfg",
            "owner": "Ext.layout.ContainerLayout",
            "meta": {},
            "name": "renderHidden",
            "id": "cfg-renderHidden"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.layout.BoxLayout",
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
            "owner": "Ext.layout.HBoxLayout",
            "meta": {
                "private": true
            },
            "name": "calculateChildBoxes",
            "id": "method-calculateChildBoxes"
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
            "owner": "Ext.layout.BoxLayout",
            "meta": {
                "private": true
            },
            "name": "destroy",
            "id": "method-destroy"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.BoxLayout",
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
            "owner": "Ext.layout.BoxLayout",
            "meta": {
                "private": true
            },
            "name": "getVisibleItems",
            "id": "method-getVisibleItems"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.BoxLayout",
            "meta": {
                "private": true
            },
            "name": "handleTargetOverflow",
            "id": "method-handleTargetOverflow"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.BoxLayout",
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
            "owner": "Ext.layout.BoxLayout",
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
            "owner": "Ext.layout.BoxLayout",
            "meta": {
                "private": true
            },
            "name": "renderAll",
            "id": "method-renderAll"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.BoxLayout",
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
            "owner": "Ext.layout.ContainerLayout",
            "meta": {
                "private": true
            },
            "name": "setContainer",
            "id": "method-setContainer"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.BoxLayout",
            "meta": {},
            "name": "updateChildBoxes",
            "id": "method-updateChildBoxes"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.BoxLayout",
            "meta": {
                "private": true
            },
            "name": "updateInnerCtSize",
            "id": "method-updateInnerCtSize"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.layout.HBoxLayout",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.layout.HBoxLayout",
    "mixins": [],
    "mixedInto": []
});