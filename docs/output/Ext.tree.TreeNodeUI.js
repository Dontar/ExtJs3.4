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
Ext.data.JsonP.Ext_tree_TreeNodeUI({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": ["Ext.tree.RootTreeNodeUI"],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.tree.RootTreeNodeUI' rel='Ext.tree.RootTreeNodeUI' class='docClass'>Ext.tree.RootTreeNodeUI</a></div><h4>Files</h4><div class='dependency'><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI' target='_blank'>TreeNodeUI.js</a></div></pre><div class='doc-contents'><p>This class provides the default UI implementation for Ext TreeNodes.\nThe TreeNode UI implementation is separate from the\ntree implementation, and allows customizing of the appearance of\ntree nodes.<br></p>\n\n<p>\nIf you are customizing the Tree's user interface, you\nmay need to extend this class, but you should never need to instantiate this class.<br>\n<p>\nThis class provides access to the user interface components of an Ext TreeNode, through\n<a href=\"#!/api/Ext.tree.TreeNode-method-getUI\" rel=\"Ext.tree.TreeNode-method-getUI\" class=\"docClass\">Ext.tree.TreeNode.getUI</a>\n\n</p></p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.tree.TreeNodeUI-method-constructor' class='name expandable'>Ext.tree.TreeNodeUI</a>( <span class='pre'>node</span> ) : <a href=\"#!/api/Ext.tree.TreeNodeUI\" rel=\"Ext.tree.TreeNodeUI\" class=\"docClass\">Ext.tree.TreeNodeUI</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.tree.TreeNodeUI\" rel=\"Ext.tree.TreeNodeUI\" class=\"docClass\">Ext.tree.TreeNodeUI</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-addClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-addClass' class='name expandable'>addClass</a>( <span class='pre'>className</span> )</div><div class='description'><div class='short'>Adds one or more CSS classes to the node's UI element. ...</div><div class='long'><p>Adds one or more CSS classes to the node's UI element.\nDuplicate classes are automatically filtered out.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>className</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The CSS class to add, or an array of classes</p>\n</div></li></ul></div></div></div><div id='method-afterLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-afterLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-afterLoad' class='name expandable'>afterLoad</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-animCollapse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-animCollapse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-animCollapse' class='name expandable'>animCollapse</a>( <span class='pre'>callback</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-animExpand' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-animExpand' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-animExpand' class='name expandable'>animExpand</a>( <span class='pre'>callback</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-appendDDGhost' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-appendDDGhost' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-appendDDGhost' class='name expandable'>appendDDGhost</a>( <span class='pre'>ghostNode</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ghostNode</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-beforeLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-beforeLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-beforeLoad' class='name expandable'>beforeLoad</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-blur' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-blur' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-blur' class='name expandable'>blur</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-collapse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-collapse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-collapse' class='name expandable'>collapse</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-ecClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-ecClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-ecClick' class='name expandable'>ecClick</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-endDrop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-endDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-endDrop' class='name expandable'>endDrop</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>delayed drop so the click event doesn't get fired on a drop ...</div><div class='long'><p>delayed drop so the click event doesn't get fired on a drop</p>\n</div></div></div><div id='method-expand' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-expand' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-expand' class='name expandable'>expand</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-fireEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-focus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-focus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-focus' class='name expandable'>focus</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-getAnchor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-getAnchor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-getAnchor' class='name expandable'>getAnchor</a>( <span class='pre'></span> ) : HtmlElement</div><div class='description'><div class='short'>Returns the &lt;a> element that provides focus for the node's UI. ...</div><div class='long'><p>Returns the &lt;a> element that provides focus for the node's UI.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>HtmlElement</span><div class='sub-desc'><p>The DOM anchor element.</p>\n</div></li></ul></div></div></div><div id='method-getChildIndent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-getChildIndent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-getChildIndent' class='name expandable'>getChildIndent</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-getContainer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-getContainer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-getContainer' class='name expandable'>getContainer</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-getDDHandles' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-getDDHandles' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-getDDHandles' class='name expandable'>getDDHandles</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-getDDRepairXY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-getDDRepairXY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-getDDRepairXY' class='name expandable'>getDDRepairXY</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-getEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-getEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-getEl' class='name expandable'>getEl</a>( <span class='pre'></span> ) : HtmlElement</div><div class='description'><div class='short'>Returns the element which encapsulates this node. ...</div><div class='long'><p>Returns the element which encapsulates this node.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>HtmlElement</span><div class='sub-desc'><p>The DOM element. The default implementation uses a <code>&lt;li></code>.</p>\n</div></li></ul></div></div></div><div id='method-getHref' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-getHref' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-getHref' class='name expandable'>getHref</a>( <span class='pre'>href</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Gets a normalized href for the node. ...</div><div class='long'><p>Gets a normalized href for the node.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>href</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getIconEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-getIconEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-getIconEl' class='name expandable'>getIconEl</a>( <span class='pre'></span> ) : HtmlElement</div><div class='description'><div class='short'>Returns the icon &lt;img> element. ...</div><div class='long'><p>Returns the icon &lt;img> element.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>HtmlElement</span><div class='sub-desc'><p>The DOM image element.</p>\n</div></li></ul></div></div></div><div id='method-getTextEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-getTextEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-getTextEl' class='name expandable'>getTextEl</a>( <span class='pre'></span> ) : HtmlNode</div><div class='description'><div class='short'>Returns the text node. ...</div><div class='long'><p>Returns the text node.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>HtmlNode</span><div class='sub-desc'><p>The DOM text node.</p>\n</div></li></ul></div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Hides this node. ...</div><div class='long'><p>Hides this node.</p>\n</div></div></div><div id='method-highlight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-highlight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-highlight' class='name expandable'>highlight</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-initEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-initEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-initEvents' class='name expandable'>initEvents</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-isChecked' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-isChecked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-isChecked' class='name expandable'>isChecked</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the checked status of the node. ...</div><div class='long'><p>Returns the checked status of the node. If the node was rendered with no\ncheckbox, it returns false.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>The checked flag.</p>\n</div></li></ul></div></div></div><div id='method-onCheckChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onCheckChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onCheckChange' class='name expandable'>onCheckChange</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-onClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onClick' class='name expandable'>onClick</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onClsChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onClsChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onClsChange' class='name expandable'>onClsChange</a>( <span class='pre'>node, cls, oldCls</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cls</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>oldCls</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onContextMenu' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onContextMenu' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onContextMenu' class='name expandable'>onContextMenu</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onDblClick' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onDblClick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onDblClick' class='name expandable'>onDblClick</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onDisableChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onDisableChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onDisableChange' class='name expandable'>onDisableChange</a>( <span class='pre'>node, state</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>state</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onHrefChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onHrefChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onHrefChange' class='name expandable'>onHrefChange</a>( <span class='pre'>node, href, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>href</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onIconChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onIconChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onIconChange' class='name expandable'>onIconChange</a>( <span class='pre'>node, icon</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>icon</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onIconClsChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onIconClsChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onIconClsChange' class='name expandable'>onIconClsChange</a>( <span class='pre'>node, cls, oldCls</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cls</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>oldCls</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onIdChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onIdChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onIdChange' class='name expandable'>onIdChange</a>( <span class='pre'>id</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onMove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onMove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onMove' class='name expandable'>onMove</a>( <span class='pre'>tree, node, oldParent, newParent, index, refNode</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tree</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>oldParent</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>newParent</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>refNode</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onOut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onOut' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onOut' class='name expandable'>onOut</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onOver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onOver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onOver' class='name expandable'>onOver</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRender' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onRender' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onRender' class='name expandable'>onRender</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-onSelectedChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onSelectedChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onSelectedChange' class='name expandable'>onSelectedChange</a>( <span class='pre'>state</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>state</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onTextChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onTextChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onTextChange' class='name expandable'>onTextChange</a>( <span class='pre'>node, text, oldText</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>text</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>oldText</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onTipChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-onTipChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-onTipChange' class='name expandable'>onTipChange</a>( <span class='pre'>node, tip, title</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>tip</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>title</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-remove' class='name expandable'>remove</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-removeChild' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-removeChild' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-removeChild' class='name expandable'>removeChild</a>( <span class='pre'>node</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-removeClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-removeClass' class='name expandable'>removeClass</a>( <span class='pre'>className</span> )</div><div class='description'><div class='short'>Removes one or more CSS classes from the node's UI element. ...</div><div class='long'><p>Removes one or more CSS classes from the node's UI element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>className</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The CSS class to remove, or an array of classes</p>\n</div></li></ul></div></div></div><div id='method-render' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-render' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-render' class='name expandable'>render</a>( <span class='pre'>bulkRender</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bulkRender</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-renderElements' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-renderElements' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-renderElements' class='name expandable'>renderElements</a>( <span class='pre'>n, a, targetNode, bulkRender</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>n</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>a</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>targetNode</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>bulkRender</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-renderIndent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-renderIndent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-renderIndent' class='name expandable'>renderIndent</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-show' class='name expandable'>show</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Shows this node. ...</div><div class='long'><p>Shows this node.</p>\n</div></div></div><div id='method-startDrop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-startDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-startDrop' class='name expandable'>startDrop</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-toggleCheck' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-toggleCheck' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-toggleCheck' class='name expandable'>toggleCheck</a>( <span class='pre'>[value]</span> )</div><div class='description'><div class='short'>Sets the checked status of the tree node to the passed value, or, if no value was passed,\ntoggles the checked status. ...</div><div class='long'><p>Sets the checked status of the tree node to the passed value, or, if no value was passed,\ntoggles the checked status. If the node was rendered with no checkbox, this has no effect.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Boolean (optional)<div class='sub-desc'><p>The new checked status.</p>\n</div></li></ul></div></div></div><div id='method-updateExpandIcon' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.tree.TreeNodeUI'>Ext.tree.TreeNodeUI</span><br/><a href='source/TreeNodeUI.html#Ext-tree-TreeNodeUI-method-updateExpandIcon' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.tree.TreeNodeUI-method-updateExpandIcon' class='name expandable'>updateExpandIcon</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div></div></div></div></div>",
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
        "href": "TreeNodeUI.html#Ext-tree-TreeNodeUI",
        "filename": "TreeNodeUI.js"
    }],
    "linenr": 1,
    "members": {
        "property": [],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {},
            "name": "addClass",
            "id": "method-addClass"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "afterLoad",
            "id": "method-afterLoad"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "animCollapse",
            "id": "method-animCollapse"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "animExpand",
            "id": "method-animExpand"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "appendDDGhost",
            "id": "method-appendDDGhost"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "beforeLoad",
            "id": "method-beforeLoad"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "blur",
            "id": "method-blur"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "collapse",
            "id": "method-collapse"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "destroy",
            "id": "method-destroy"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "ecClick",
            "id": "method-ecClick"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "endDrop",
            "id": "method-endDrop"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "expand",
            "id": "method-expand"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "fireEvent",
            "id": "method-fireEvent"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "focus",
            "id": "method-focus"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {},
            "name": "getAnchor",
            "id": "method-getAnchor"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "getChildIndent",
            "id": "method-getChildIndent"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "getContainer",
            "id": "method-getContainer"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "getDDHandles",
            "id": "method-getDDHandles"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "getDDRepairXY",
            "id": "method-getDDRepairXY"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {},
            "name": "getEl",
            "id": "method-getEl"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "getHref",
            "id": "method-getHref"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {},
            "name": "getIconEl",
            "id": "method-getIconEl"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {},
            "name": "getTextEl",
            "id": "method-getTextEl"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {},
            "name": "hide",
            "id": "method-hide"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "highlight",
            "id": "method-highlight"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "initEvents",
            "id": "method-initEvents"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {},
            "name": "isChecked",
            "id": "method-isChecked"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onCheckChange",
            "id": "method-onCheckChange"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onClick",
            "id": "method-onClick"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onClsChange",
            "id": "method-onClsChange"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onContextMenu",
            "id": "method-onContextMenu"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onDblClick",
            "id": "method-onDblClick"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onDisableChange",
            "id": "method-onDisableChange"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onHrefChange",
            "id": "method-onHrefChange"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onIconChange",
            "id": "method-onIconChange"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onIconClsChange",
            "id": "method-onIconClsChange"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onIdChange",
            "id": "method-onIdChange"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onMove",
            "id": "method-onMove"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onOut",
            "id": "method-onOut"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onOver",
            "id": "method-onOver"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onRender",
            "id": "method-onRender"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onSelectedChange",
            "id": "method-onSelectedChange"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onTextChange",
            "id": "method-onTextChange"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "onTipChange",
            "id": "method-onTipChange"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "remove",
            "id": "method-remove"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "removeChild",
            "id": "method-removeChild"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {},
            "name": "removeClass",
            "id": "method-removeClass"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "render",
            "id": "method-render"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "renderElements",
            "id": "method-renderElements"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "renderIndent",
            "id": "method-renderIndent"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {},
            "name": "show",
            "id": "method-show"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "startDrop",
            "id": "method-startDrop"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {},
            "name": "toggleCheck",
            "id": "method-toggleCheck"
        }, {
            "tagname": "method",
            "owner": "Ext.tree.TreeNodeUI",
            "meta": {
                "private": true
            },
            "name": "updateExpandIcon",
            "id": "method-updateExpandIcon"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.tree.TreeNodeUI",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.tree.TreeNodeUI",
    "mixins": [],
    "mixedInto": []
});