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
Ext.data.JsonP.Ext_dd_DropZone({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": ["Ext.tree.TreeDropZone"],
    "extends": "Ext.dd.DropTarget",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='docClass'>Ext.dd.DragDrop</a><div class='subclass '><a href='#!/api/Ext.dd.DDTarget' rel='Ext.dd.DDTarget' class='docClass'>Ext.dd.DDTarget</a><div class='subclass '><a href='#!/api/Ext.dd.DropTarget' rel='Ext.dd.DropTarget' class='docClass'>Ext.dd.DropTarget</a><div class='subclass '><strong>Ext.dd.DropZone</strong></div></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.tree.TreeDropZone' rel='Ext.tree.TreeDropZone' class='docClass'>Ext.tree.TreeDropZone</a></div><h4>Files</h4><div class='dependency'><a href='source/DropZone.html#Ext-dd-DropZone' target='_blank'>DropZone.js</a></div></pre><div class='doc-contents'><p>This class provides a container DD instance that allows dropping on multiple child target nodes.</p>\n\n\n<p>By default, this class requires that child nodes accepting drop are registered with <a href=\"#!/api/Ext.dd.Registry\" rel=\"Ext.dd.Registry\" class=\"docClass\">Ext.dd.Registry</a>.\nHowever a simpler way to allow a DropZone to manage any number of target elements is to configure the\nDropZone with an implementation of <a href=\"#!/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a> which interrogates the passed\nmouse event to see if it has taken place within an element, or class of elements. This is easily done\nby using the event's <a href=\"#!/api/Ext.EventObject-method-getTarget\" rel=\"Ext.EventObject-method-getTarget\" class=\"docClass\">getTarget</a> method to identify a node based on a\n<a href=\"#!/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">Ext.DomQuery</a> selector.</p>\n\n\n<p>Once the DropZone has detected through calling getTargetFromEvent, that the mouse is over\na drop target, that target is passed as the first parameter to <a href=\"#!/api/Ext.dd.DropZone-method-onNodeEnter\" rel=\"Ext.dd.DropZone-method-onNodeEnter\" class=\"docClass\">onNodeEnter</a>, <a href=\"#!/api/Ext.dd.DropZone-method-onNodeOver\" rel=\"Ext.dd.DropZone-method-onNodeOver\" class=\"docClass\">onNodeOver</a>,\n<a href=\"#!/api/Ext.dd.DropZone-method-onNodeOut\" rel=\"Ext.dd.DropZone-method-onNodeOut\" class=\"docClass\">onNodeOut</a>, <a href=\"#!/api/Ext.dd.DropZone-method-onNodeDrop\" rel=\"Ext.dd.DropZone-method-onNodeDrop\" class=\"docClass\">onNodeDrop</a>. You may configure the instance of DropZone with implementations\nof these methods to provide application-specific behaviour for these events to update both\napplication state, and UI state.</p>\n\n\n<p>For example to make a GridPanel a cooperating target with the example illustrated in\n<a href=\"#!/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>, the following technique might be used:</p>\n\n\n<pre><code>myGridPanel.on('render', function() {\n    myGridPanel.dropZone = new <a href=\"#!/api/Ext.dd.DropZone\" rel=\"Ext.dd.DropZone\" class=\"docClass\">Ext.dd.DropZone</a>(myGridPanel.getView().scroller, {\n\n//      If the mouse is over a grid row, return that node. This is\n//      provided as the \"target\" parameter in all \"onNodeXXXX\" node event handling functions\n        getTargetFromEvent: function(e) {\n            return e.getTarget(myGridPanel.getView().rowSelector);\n        },\n\n//      On entry into a target node, highlight that node.\n        onNodeEnter : function(target, dd, e, data){ \n            <a href=\"#!/api/Ext-method-fly\" rel=\"Ext-method-fly\" class=\"docClass\">Ext.fly</a>(target).addClass('my-row-highlight-class');\n        },\n\n//      On exit from a target node, unhighlight that node.\n        onNodeOut : function(target, dd, e, data){ \n            <a href=\"#!/api/Ext-method-fly\" rel=\"Ext-method-fly\" class=\"docClass\">Ext.fly</a>(target).removeClass('my-row-highlight-class');\n        },\n\n//      While over a target node, return the default drop allowed class which\n//      places a \"tick\" icon into the drag proxy.\n        onNodeOver : function(target, dd, e, data){ \n            return Ext.dd.DropZone.prototype.dropAllowed;\n        },\n\n//      On node drop we can interrogate the target to find the underlying\n//      application object that is the real target of the dragged data.\n//      In this case, it is a Record in the GridPanel's Store.\n//      We can use the data set up by the DragZone's getDragData method to read\n//      any data we decided to attach in the DragZone's getDragData method.\n        onNodeDrop : function(target, dd, e, data){\n            var rowIndex = myGridPanel.getView().findRowIndex(target);\n            var r = myGridPanel.getStore().getAt(rowIndex);\n            Ext.Msg.alert('Drop gesture', 'Dropped Record id ' + data.draggedRecord.id +\n                ' on Record id ' + r.id);\n            return true;\n        }\n    });\n}\n</code></pre>\n\n\n<p>See the <a href=\"#!/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a> documentation for details about building a DragZone which\ncooperates with this DropZone.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-ddGroup' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DropTarget' rel='Ext.dd.DropTarget' class='defined-in docClass'>Ext.dd.DropTarget</a><br/><a href='source/DropTarget.html#Ext-dd-DropTarget-cfg-ddGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropTarget-cfg-ddGroup' class='name expandable'>ddGroup</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>A named drag drop group to which this object belongs. ...</div><div class='long'><p>A named drag drop group to which this object belongs.  If a group is specified, then this object will only\ninteract with other drag drop objects in the same group (defaults to undefined).</p>\n</div></div></div><div id='cfg-dropAllowed' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DropTarget' rel='Ext.dd.DropTarget' class='defined-in docClass'>Ext.dd.DropTarget</a><br/><a href='source/DropTarget.html#Ext-dd-DropTarget-cfg-dropAllowed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropTarget-cfg-dropAllowed' class='name expandable'>dropAllowed</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The CSS class returned to the drag source when drop is allowed (defaults to \"x-dd-drop-ok\"). ...</div><div class='long'><p>The CSS class returned to the drag source when drop is allowed (defaults to \"x-dd-drop-ok\").</p>\n<p>Defaults to: <code>&quot;x-dd-drop-ok&quot;</code></p></div></div></div><div id='cfg-dropNotAllowed' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DropTarget' rel='Ext.dd.DropTarget' class='defined-in docClass'>Ext.dd.DropTarget</a><br/><a href='source/DropTarget.html#Ext-dd-DropTarget-cfg-dropNotAllowed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropTarget-cfg-dropNotAllowed' class='name expandable'>dropNotAllowed</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The CSS class returned to the drag source when drop is not allowed (defaults to \"x-dd-drop-nodrop\"). ...</div><div class='long'><p>The CSS class returned to the drag source when drop is not allowed (defaults to \"x-dd-drop-nodrop\").</p>\n<p>Defaults to: <code>&quot;x-dd-drop-nodrop&quot;</code></p></div></div></div><div id='cfg-overClass' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DropTarget' rel='Ext.dd.DropTarget' class='defined-in docClass'>Ext.dd.DropTarget</a><br/><a href='source/DropTarget.html#Ext-dd-DropTarget-cfg-overClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropTarget-cfg-overClass' class='name not-expandable'>overClass</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The CSS class applied to the drop target element while the drag source is over it (defaults to \"\").</p>\n</div><div class='long'><p>The CSS class applied to the drop target element while the drag source is over it (defaults to \"\").</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-__ygDragDrop' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-__ygDragDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-__ygDragDrop' class='name expandable'>__ygDragDrop</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Internal typeof flag ...</div><div class='long'><p>Internal typeof flag</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-_domRef' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-_domRef' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-_domRef' class='name not-expandable'>_domRef</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>Cached reference to the linked element</p>\n</div><div class='long'><p>Cached reference to the linked element</p>\n</div></div></div><div id='property-available' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-available' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-available' class='name expandable'>available</a><span> : boolean</span></div><div class='description'><div class='short'>The available property is false until the linked dom element is accessible. ...</div><div class='long'><p>The available property is false until the linked dom element is accessible.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-config' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-config' class='name not-expandable'>config</a><span> : object</span></div><div class='description'><div class='short'><p>Configuration attributes passed into the constructor</p>\n</div><div class='long'><p>Configuration attributes passed into the constructor</p>\n</div></div></div><div id='property-constrainX' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-constrainX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-constrainX' class='name expandable'>constrainX</a><span> : boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Set to true when horizontal contraints are applied ...</div><div class='long'><p>Set to true when horizontal contraints are applied</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-constrainY' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-constrainY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-constrainY' class='name expandable'>constrainY</a><span> : boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Set to true when vertical contraints are applied ...</div><div class='long'><p>Set to true when vertical contraints are applied</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-defaultPadding' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-defaultPadding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-defaultPadding' class='name expandable'>defaultPadding</a><span> : Object</span></div><div class='description'><div class='short'>Provides default constraint padding to \"constrainTo\" elements (defaults to {left: 0, right:0, top:0, bottom:0}). ...</div><div class='long'><p>Provides default constraint padding to \"constrainTo\" elements (defaults to {left: 0, right:0, top:0, bottom:0}).</p>\n<p>Defaults to: <code>{left: 0, right: 0, top: 0, bottom: 0}</code></p></div></div></div><div id='property-dragElId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-dragElId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-dragElId' class='name expandable'>dragElId</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>The id of the element that will be dragged. ...</div><div class='long'><p>The id of the element that will be dragged.  By default this is same\nas the linked element, but could be changed to another element. Ex:\n<a href=\"#!/api/Ext.dd.DDProxy\" rel=\"Ext.dd.DDProxy\" class=\"docClass\">Ext.dd.DDProxy</a></p>\n</div></div></div><div id='property-groups' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-groups' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-groups' class='name expandable'>groups</a><span> : object</span></div><div class='description'><div class='short'>The group defines a logical collection of DragDrop objects that are\nrelated. ...</div><div class='long'><p>The group defines a logical collection of DragDrop objects that are\nrelated.  Instances only get events when interacting with other\nDragDrop object in the same group.  This lets us define multiple\ngroups using a single DragDrop subclass if we want. An object in the format {'group1':true, 'group2':true}</p>\n</div></div></div><div id='property-handleElId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-handleElId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-handleElId' class='name expandable'>handleElId</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>The ID of the element that initiates the drag operation. ...</div><div class='long'><p>The ID of the element that initiates the drag operation.  By default\nthis is the linked element, but could be changed to be a child of this\nelement.  This lets us do things like only starting the drag when the\nheader element within the linked html element is clicked.</p>\n</div></div></div><div id='property-hasOuterHandles' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-hasOuterHandles' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-hasOuterHandles' class='name expandable'>hasOuterHandles</a><span> : boolean</span></div><div class='description'><div class='short'>By default, drags can only be initiated if the mousedown occurs in the\nregion the linked element is. ...</div><div class='long'><p>By default, drags can only be initiated if the mousedown occurs in the\nregion the linked element is.  This is done in part to work around a\nbug in some browsers that mis-report the mousedown if the previous\nmouseup happened outside of the window.  This property is set to true\nif outer handles are defined. @default false</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-id' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-id' class='name expandable'>id</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The id of the element associated with this object. ...</div><div class='long'><p>The id of the element associated with this object.  This is what we\nrefer to as the \"linked element\" because the size and position of\nthis element is used to determine when the drag and drop objects have\ninteracted.</p>\n</div></div></div><div id='property-ignoreSelf' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-ignoreSelf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-ignoreSelf' class='name expandable'>ignoreSelf</a><span> : Boolean</span></div><div class='description'><div class='short'>Set to false to enable a DragDrop object to fire drag events while dragging\nover its own Element. ...</div><div class='long'><p>Set to false to enable a DragDrop object to fire drag events while dragging\nover its own Element. Defaults to true - DragDrop objects do not by default\nfire drag events to themselves.</p>\n</div></div></div><div id='property-invalidHandleClasses' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-invalidHandleClasses' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-invalidHandleClasses' class='name not-expandable'>invalidHandleClasses</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span></div><div class='description'><div class='short'><p>An Array of CSS class names for elements to be considered in valid as drag handles.</p>\n</div><div class='long'><p>An Array of CSS class names for elements to be considered in valid as drag handles.</p>\n</div></div></div><div id='property-invalidHandleIds' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-invalidHandleIds' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-invalidHandleIds' class='name expandable'>invalidHandleIds</a><span> : Object</span></div><div class='description'><div class='short'>An object who's property names identify the IDs of elements to be considered invalid as drag handles. ...</div><div class='long'><p>An object who's property names identify the IDs of elements to be considered invalid as drag handles.\nA non-null property value identifies the ID as invalid. For example, to prevent\ndragging from being initiated on element ID \"foo\", use:</p>\n\n<pre><code>{\n    foo: true\n}</code></pre>\n\n</div></div></div><div id='property-invalidHandleTypes' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-invalidHandleTypes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-invalidHandleTypes' class='name expandable'>invalidHandleTypes</a><span> : Object</span></div><div class='description'><div class='short'>An object who's property names identify HTML tags to be considered invalid as drag handles. ...</div><div class='long'><p>An object who's property names identify HTML tags to be considered invalid as drag handles.\nA non-null property value identifies the tag as invalid. Defaults to the\nfollowing value which prevents drag operations from being initiated by &lt;a> elements:</p>\n\n<pre><code>{\n    A: \"A\"\n}</code></pre>\n\n</div></div></div><div id='property-isNotifyTarget' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DropTarget' rel='Ext.dd.DropTarget' class='defined-in docClass'>Ext.dd.DropTarget</a><br/><a href='source/DropTarget.html#Ext-dd-DropTarget-property-isNotifyTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropTarget-property-isNotifyTarget' class='name expandable'>isNotifyTarget</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-isTarget' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DropTarget' rel='Ext.dd.DropTarget' class='defined-in docClass'>Ext.dd.DropTarget</a><br/><a href='source/DropTarget.html#Ext-dd-DropTarget-property-isTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropTarget-property-isTarget' class='name expandable'>isTarget</a><span> : boolean</span></div><div class='description'><div class='short'>private\n\nBy default, all instances can be a drop target. ...</div><div class='long'><p>private</p>\n\n<p>By default, all instances can be a drop target.  This can be disabled by\nsetting isTarget to false.</p>\n<p>Defaults to: <code>true</code></p><p>Overrides: <a href='#!/api/Ext.dd.DragDrop-property-isTarget' rel='Ext.dd.DragDrop-property-isTarget' class='docClass'>Ext.dd.DragDrop.isTarget</a></p></div></div></div><div id='property-locked' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-locked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-locked' class='name expandable'>locked</a><span> : boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Individual drag/drop instances can be locked. ...</div><div class='long'><p>Individual drag/drop instances can be locked.  This will prevent\nonmousedown start drag.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-maintainOffset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-maintainOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-maintainOffset' class='name expandable'>maintainOffset</a><span> : boolean</span></div><div class='description'><div class='short'>Maintain offsets when we resetconstraints. ...</div><div class='long'><p>Maintain offsets when we resetconstraints.  Set to true when you want\nthe position of the element relative to its parent to stay the same\nwhen the page changes</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-maxX' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-maxX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-maxX' class='name expandable'>maxX</a><span> : int</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>The right constraint ...</div><div class='long'><p>The right constraint</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-maxY' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-maxY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-maxY' class='name expandable'>maxY</a><span> : int</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>The down constraint ...</div><div class='long'><p>The down constraint</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-minX' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-minX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-minX' class='name expandable'>minX</a><span> : int</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>The left constraint ...</div><div class='long'><p>The left constraint</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-minY' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-minY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-minY' class='name expandable'>minY</a><span> : int</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>The up constraint ...</div><div class='long'><p>The up constraint</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-moveOnly' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-moveOnly' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-moveOnly' class='name expandable'>moveOnly</a><span> : boolean</span></div><div class='description'><div class='short'>When set to true, other DD objects in cooperating DDGroups do not receive\nnotification events when this DD object is ...</div><div class='long'><p>When set to true, other DD objects in cooperating DDGroups do not receive\nnotification events when this DD object is dragged over them. Defaults to false.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-padding' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-padding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-padding' class='name expandable'>padding</a><span> : int[]</span></div><div class='description'><div class='short'>The padding configured for this drag and drop object for calculating\nthe drop zone intersection with this object. ...</div><div class='long'><p>The padding configured for this drag and drop object for calculating\nthe drop zone intersection with this object. An array containing the 4 padding values: [top, right, bottom, left]</p>\n</div></div></div><div id='property-primaryButtonOnly' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-primaryButtonOnly' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-primaryButtonOnly' class='name expandable'>primaryButtonOnly</a><span> : boolean</span></div><div class='description'><div class='short'>By default the drag and drop instance will only respond to the primary\nbutton click (left button for a right-handed m...</div><div class='long'><p>By default the drag and drop instance will only respond to the primary\nbutton click (left button for a right-handed mouse).  Set to true to\nallow drag and drop to start with any mouse click that is propogated\nby the browser</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-startPageX' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-startPageX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-startPageX' class='name expandable'>startPageX</a><span> : int</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>The linked element's absolute X position at the time the drag was\nstarted ...</div><div class='long'><p>The linked element's absolute X position at the time the drag was\nstarted</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-startPageY' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-startPageY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-startPageY' class='name expandable'>startPageY</a><span> : int</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>The linked element's absolute X position at the time the drag was\nstarted ...</div><div class='long'><p>The linked element's absolute X position at the time the drag was\nstarted</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-xTicks' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-xTicks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-xTicks' class='name expandable'>xTicks</a><span> : int[]</span></div><div class='description'><div class='short'>Array of pixel locations the element will snap to if we specified a\nhorizontal graduation/interval. ...</div><div class='long'><p>Array of pixel locations the element will snap to if we specified a\nhorizontal graduation/interval.  This array is generated automatically\nwhen you define a tick interval.</p>\n</div></div></div><div id='property-yTicks' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-property-yTicks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-property-yTicks' class='name expandable'>yTicks</a><span> : int[]</span></div><div class='description'><div class='short'>Array of pixel locations the element will snap to if we specified a\nvertical graduation/interval. ...</div><div class='long'><p>Array of pixel locations the element will snap to if we specified a\nvertical graduation/interval.  This array is generated automatically\nwhen you define a tick interval.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DropZone'>Ext.dd.DropZone</span><br/><a href='source/DropZone.html#Ext-dd-DropZone-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.dd.DropZone-method-constructor' class='name expandable'>Ext.dd.DropZone</a>( <span class='pre'>el, config</span> ) : <a href=\"#!/api/Ext.dd.DropZone\" rel=\"Ext.dd.DropZone\" class=\"docClass\">Ext.dd.DropZone</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed<div class='sub-desc'><p>The container element</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.dd.DropZone\" rel=\"Ext.dd.DropZone\" class=\"docClass\">Ext.dd.DropZone</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.dd.DropTarget-method-constructor' rel='Ext.dd.DropTarget-method-constructor' class='docClass'>Ext.dd.DropTarget.constructor</a></p></div></div></div><div id='method-addToGroup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-addToGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-addToGroup' class='name expandable'>addToGroup</a>( <span class='pre'>sGroup</span> )</div><div class='description'><div class='short'>Add this instance to a group of related drag/drop objects. ...</div><div class='long'><p>Add this instance to a group of related drag/drop objects.  All\ninstances belong to at least one group, and can belong to as many\ngroups as needed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sGroup</span> : Object<div class='sub-desc'><p>{string} the name of the group</p>\n</div></li></ul></div></div></div><div id='method-applyConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-applyConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-applyConfig' class='name expandable'>applyConfig</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Applies the configuration parameters that were passed into the constructor. ...</div><div class='long'><p>Applies the configuration parameters that were passed into the constructor.\nThis is supposed to happen at each level through the inheritance chain.  So\na DDProxy implentation will execute apply config on DDProxy, DD, and\nDragDrop in order to get all of the parameters that are available in\neach object.</p>\n</div></div></div><div id='method-b4Drag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-b4Drag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-b4Drag' class='name expandable'>b4Drag</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Code that executes immediately before the onDrag event ...</div><div class='long'><p>Code that executes immediately before the onDrag event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-b4DragDrop' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-b4DragDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-b4DragDrop' class='name expandable'>b4DragDrop</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Code that executes immediately before the onDragDrop event ...</div><div class='long'><p>Code that executes immediately before the onDragDrop event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-b4DragOut' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-b4DragOut' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-b4DragOut' class='name expandable'>b4DragOut</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Code that executes immediately before the onDragOut event ...</div><div class='long'><p>Code that executes immediately before the onDragOut event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-b4DragOver' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-b4DragOver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-b4DragOver' class='name expandable'>b4DragOver</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Code that executes immediately before the onDragOver event ...</div><div class='long'><p>Code that executes immediately before the onDragOver event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-b4EndDrag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-b4EndDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-b4EndDrag' class='name expandable'>b4EndDrag</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Code that executes immediately before the endDrag event ...</div><div class='long'><p>Code that executes immediately before the endDrag event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-b4MouseDown' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-b4MouseDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-b4MouseDown' class='name expandable'>b4MouseDown</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Code executed immediately before the onMouseDown event ...</div><div class='long'><p>Code executed immediately before the onMouseDown event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>the mousedown event</p>\n</div></li></ul></div></div></div><div id='method-b4StartDrag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-b4StartDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-b4StartDrag' class='name expandable'>b4StartDrag</a>( <span class='pre'>x, y</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Code that executes immediately before the startDrag event ...</div><div class='long'><p>Code that executes immediately before the startDrag event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-constrainTo' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-constrainTo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-constrainTo' class='name expandable'>constrainTo</a>( <span class='pre'>constrainTo, [pad], [inContent]</span> )</div><div class='description'><div class='short'>Initializes the drag drop object's constraints to restrict movement to a certain element. ...</div><div class='long'><p>Initializes the drag drop object's constraints to restrict movement to a certain element.</p>\n\n<p>Usage:</p>\n\n<pre><code> var dd = new <a href=\"#!/api/Ext.dd.DDProxy\" rel=\"Ext.dd.DDProxy\" class=\"docClass\">Ext.dd.DDProxy</a>(\"dragDiv1\", \"proxytest\",\n                { dragElId: \"existingProxyDiv\" });\n dd.startDrag = function(){\n     this.constrainTo(\"parent-id\");\n };\n </code></pre>\n\n\n<p>Or you can initalize it using the <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> object:</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a>(\"dragDiv1\").initDDProxy(\"proxytest\", {dragElId: \"existingProxyDiv\"}, {\n     startDrag : function(){\n         this.constrainTo(\"parent-id\");\n     }\n });\n </code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>constrainTo</span> : Mixed<div class='sub-desc'><p>The element to constrain to.</p>\n</div></li><li><span class='pre'>pad</span> : Object/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>Pad provides a way to specify \"padding\" of the constraints,\nand can be either a number for symmetrical padding (4 would be equal to {left:4, right:4, top:4, bottom:4}) or\nan object containing the sides to pad. For example: {right:10, bottom:10}</p>\n</div></li><li><span class='pre'>inContent</span> : Boolean (optional)<div class='sub-desc'><p>Constrain the draggable in the content box of the element (inside padding and borders)</p>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DropTarget' rel='Ext.dd.DropTarget' class='defined-in docClass'>Ext.dd.DropTarget</a><br/><a href='source/DropTarget.html#Ext-dd-DropTarget-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropTarget-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getEl' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-getEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-getEl' class='name expandable'>getEl</a>( <span class='pre'></span> ) : HTMLElement</div><div class='description'><div class='short'>Returns a reference to the linked element ...</div><div class='long'><p>Returns a reference to the linked element</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'><p>the html element</p>\n</div></li></ul></div></div></div><div id='method-getTargetFromEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DropZone'>Ext.dd.DropZone</span><br/><a href='source/DropZone.html#Ext-dd-DropZone-method-getTargetFromEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropZone-method-getTargetFromEvent' class='name expandable'>getTargetFromEvent</a>( <span class='pre'>e</span> ) : Object</div><div class='description'><div class='short'>Returns a custom data object associated with the DOM node that is the target of the event. ...</div><div class='long'><p>Returns a custom data object associated with the DOM node that is the target of the event.  By default\nthis looks up the event target in the <a href=\"#!/api/Ext.dd.Registry\" rel=\"Ext.dd.Registry\" class=\"docClass\">Ext.dd.Registry</a>, although you can override this method to\nprovide your own custom lookup.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>The event</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>data The custom data</p>\n</div></li></ul></div></div></div><div id='method-getTick' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-getTick' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-getTick' class='name expandable'>getTick</a>( <span class='pre'>val, tickArray</span> ) : int<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Normally the drag element is moved pixel by pixel, but we can specify\nthat it move a number of pixels at a time. ...</div><div class='long'><p>Normally the drag element is moved pixel by pixel, but we can specify\nthat it move a number of pixels at a time.  This method resolves the\nlocation when we have it set up like this.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>val</span> : int<div class='sub-desc'><p>where we want to place the object</p>\n</div></li><li><span class='pre'>tickArray</span> : int[]<div class='sub-desc'><p>sorted array of valid points</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>int</span><div class='sub-desc'><p>the closest tick</p>\n</div></li></ul></div></div></div><div id='method-handleMouseDown' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-handleMouseDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-handleMouseDown' class='name expandable'>handleMouseDown</a>( <span class='pre'>e, oDD</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Fired when this object is clicked ...</div><div class='long'><p>Fired when this object is clicked</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li><li><span class='pre'>oDD</span> : <a href=\"#!/api/Ext.dd.DragDrop\" rel=\"Ext.dd.DragDrop\" class=\"docClass\">Ext.dd.DragDrop</a><div class='sub-desc'><p>the clicked dd object (this dd obj)</p>\n</div></li></ul></div></div></div><div id='method-handleOnAvailable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-handleOnAvailable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-handleOnAvailable' class='name expandable'>handleOnAvailable</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Executed when the linked element is available ...</div><div class='long'><p>Executed when the linked element is available</p>\n</div></div></div><div id='method-init' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-init' class='name expandable'>init</a>( <span class='pre'>id, sGroup, config</span> )</div><div class='description'><div class='short'>Sets up the DragDrop object. ...</div><div class='long'><p>Sets up the DragDrop object.  Must be called in the constructor of any\n<a href=\"#!/api/Ext.dd.DragDrop\" rel=\"Ext.dd.DragDrop\" class=\"docClass\">Ext.dd.DragDrop</a> subclass</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'><p>the id of the linked element</p>\n</div></li><li><span class='pre'>sGroup</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>the group of related items</p>\n</div></li><li><span class='pre'>config</span> : object<div class='sub-desc'><p>configuration attributes</p>\n</div></li></ul></div></div></div><div id='method-initTarget' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-initTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-initTarget' class='name expandable'>initTarget</a>( <span class='pre'>id, sGroup, config</span> )</div><div class='description'><div class='short'>Initializes Targeting functionality only... ...</div><div class='long'><p>Initializes Targeting functionality only... the object does not\nget a mousedown handler.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'><p>the id of the linked element</p>\n</div></li><li><span class='pre'>sGroup</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>the group of related items</p>\n</div></li><li><span class='pre'>config</span> : object<div class='sub-desc'><p>configuration attributes</p>\n</div></li></ul></div></div></div><div id='method-isLocked' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-isLocked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-isLocked' class='name expandable'>isLocked</a>( <span class='pre'></span> ) : boolean</div><div class='description'><div class='short'>Returns true if this instance is locked, or the drag drop mgr is locked\n(meaning that all drag/drop is disabled on th...</div><div class='long'><p>Returns true if this instance is locked, or the drag drop mgr is locked\n(meaning that all drag/drop is disabled on the page.)</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if this obj or all drag/drop is locked, else\nfalse</p>\n</div></li></ul></div></div></div><div id='method-lock' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-lock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-lock' class='name expandable'>lock</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Lock this instance ...</div><div class='long'><p>Lock this instance</p>\n</div></div></div><div id='method-notifyDrop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DropZone'>Ext.dd.DropZone</span><br/><a href='source/DropZone.html#Ext-dd-DropZone-method-notifyDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropZone-method-notifyDrop' class='name expandable'>notifyDrop</a>( <span class='pre'>source, e, data</span> ) : Boolean</div><div class='description'><div class='short'>The function a Ext.dd.DragSource calls once to notify this drop zone that the dragged item has\nbeen dropped on it. ...</div><div class='long'><p>The function a <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> calls once to notify this drop zone that the dragged item has\nbeen dropped on it.  The drag zone will look up the target node based on the event passed in, and if there\nis a node registered for that event, it will delegate to <a href=\"#!/api/Ext.dd.DropZone-method-onNodeDrop\" rel=\"Ext.dd.DropZone-method-onNodeDrop\" class=\"docClass\">onNodeDrop</a> for node-specific handling,\notherwise it will call <a href=\"#!/api/Ext.dd.DropZone-method-onContainerDrop\" rel=\"Ext.dd.DropZone-method-onContainerDrop\" class=\"docClass\">onContainerDrop</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a><div class='sub-desc'><p>The drag source that was dragged over this drop zone</p>\n</div></li><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>The event</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>An object containing arbitrary data supplied by the drag source</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the drop was valid, else false</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.dd.DropTarget-method-notifyDrop' rel='Ext.dd.DropTarget-method-notifyDrop' class='docClass'>Ext.dd.DropTarget.notifyDrop</a></p></div></div></div><div id='method-notifyEnter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DropZone'>Ext.dd.DropZone</span><br/><a href='source/DropZone.html#Ext-dd-DropZone-method-notifyEnter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropZone-method-notifyEnter' class='name expandable'>notifyEnter</a>( <span class='pre'>source, e, data</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>The function a Ext.dd.DragSource calls once to notify this drop zone that the source is now over\nthe zone. ...</div><div class='long'><p>The function a <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> calls once to notify this drop zone that the source is now over\nthe zone.  The default implementation returns this.dropNotAllowed and expects that only registered drop\nnodes can process drag drop operations, so if you need the drop zone itself to be able to process drops\nyou should override this method and provide a custom implementation.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a><div class='sub-desc'><p>The drag source that was dragged over this drop zone</p>\n</div></li><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>The event</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>An object containing arbitrary data supplied by the drag source</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>status The CSS class that communicates the drop status back to the source so that the\nunderlying <a href=\"#!/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a> can be updated</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.dd.DropTarget-method-notifyEnter' rel='Ext.dd.DropTarget-method-notifyEnter' class='docClass'>Ext.dd.DropTarget.notifyEnter</a></p></div></div></div><div id='method-notifyOut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DropZone'>Ext.dd.DropZone</span><br/><a href='source/DropZone.html#Ext-dd-DropZone-method-notifyOut' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropZone-method-notifyOut' class='name expandable'>notifyOut</a>( <span class='pre'>source, e, data</span> )</div><div class='description'><div class='short'>The function a Ext.dd.DragSource calls once to notify this drop zone that the source has been dragged\nout of the zone...</div><div class='long'><p>The function a <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> calls once to notify this drop zone that the source has been dragged\nout of the zone without dropping.  If the drag source is currently over a registered node, the notification\nwill be delegated to <a href=\"#!/api/Ext.dd.DropZone-method-onNodeOut\" rel=\"Ext.dd.DropZone-method-onNodeOut\" class=\"docClass\">onNodeOut</a> for node-specific handling, otherwise it will be ignored.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a><div class='sub-desc'><p>The drag source that was dragged over this drop target</p>\n</div></li><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>The event</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>An object containing arbitrary data supplied by the drag zone</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.dd.DropTarget-method-notifyOut' rel='Ext.dd.DropTarget-method-notifyOut' class='docClass'>Ext.dd.DropTarget.notifyOut</a></p></div></div></div><div id='method-notifyOver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DropZone'>Ext.dd.DropZone</span><br/><a href='source/DropZone.html#Ext-dd-DropZone-method-notifyOver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropZone-method-notifyOver' class='name expandable'>notifyOver</a>( <span class='pre'>source, e, data</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>The function a Ext.dd.DragSource calls continuously while it is being dragged over the drop zone. ...</div><div class='long'><p>The function a <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> calls continuously while it is being dragged over the drop zone.\nThis method will be called on every mouse movement while the drag source is over the drop zone.\nIt will call <a href=\"#!/api/Ext.dd.DropZone-method-onNodeOver\" rel=\"Ext.dd.DropZone-method-onNodeOver\" class=\"docClass\">onNodeOver</a> while the drag source is over a registered node, and will also automatically\ndelegate to the appropriate node-specific methods as necessary when the drag source enters and exits\nregistered nodes (<a href=\"#!/api/Ext.dd.DropZone-method-onNodeEnter\" rel=\"Ext.dd.DropZone-method-onNodeEnter\" class=\"docClass\">onNodeEnter</a>, <a href=\"#!/api/Ext.dd.DropZone-method-onNodeOut\" rel=\"Ext.dd.DropZone-method-onNodeOut\" class=\"docClass\">onNodeOut</a>). If the drag source is not currently over a\nregistered node, it will call <a href=\"#!/api/Ext.dd.DropZone-method-onContainerOver\" rel=\"Ext.dd.DropZone-method-onContainerOver\" class=\"docClass\">onContainerOver</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a><div class='sub-desc'><p>The drag source that was dragged over this drop zone</p>\n</div></li><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>The event</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>An object containing arbitrary data supplied by the drag source</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>status The CSS class that communicates the drop status back to the source so that the\nunderlying <a href=\"#!/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a> can be updated</p>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.dd.DropTarget-method-notifyOver' rel='Ext.dd.DropTarget-method-notifyOver' class='docClass'>Ext.dd.DropTarget.notifyOver</a></p></div></div></div><div id='method-onAvailable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-onAvailable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-onAvailable' class='name expandable'>onAvailable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Override the onAvailable method to do what is needed after the initial\nposition was determined. ...</div><div class='long'><p>Override the onAvailable method to do what is needed after the initial\nposition was determined.</p>\n</div></div></div><div id='method-onContainerDrop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DropZone'>Ext.dd.DropZone</span><br/><a href='source/DropZone.html#Ext-dd-DropZone-method-onContainerDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropZone-method-onContainerDrop' class='name expandable'>onContainerDrop</a>( <span class='pre'>source, e, data</span> ) : Boolean</div><div class='description'><div class='short'>Called when the DropZone determines that a Ext.dd.DragSource has been dropped on it,\nbut not on any of its registered...</div><div class='long'><p>Called when the DropZone determines that a <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> has been dropped on it,\nbut not on any of its registered drop nodes.  The default implementation returns false, so it should be\noverridden to provide the appropriate processing of the drop event if you need the drop zone itself to\nbe able to accept drops.  It should return true when valid so that the drag source's repair action does not run.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a><div class='sub-desc'><p>The drag source that was dragged over this drop zone</p>\n</div></li><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>The event</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>An object containing arbitrary data supplied by the drag source</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the drop was valid, else false</p>\n</div></li></ul></div></div></div><div id='method-onContainerOver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DropZone'>Ext.dd.DropZone</span><br/><a href='source/DropZone.html#Ext-dd-DropZone-method-onContainerOver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropZone-method-onContainerOver' class='name expandable'>onContainerOver</a>( <span class='pre'>source, e, data</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Called while the DropZone determines that a Ext.dd.DragSource is being dragged over it,\nbut not over any of its regis...</div><div class='long'><p>Called while the DropZone determines that a <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> is being dragged over it,\nbut not over any of its registered drop nodes.  The default implementation returns this.dropNotAllowed, so\nit should be overridden to provide the proper feedback if necessary.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a><div class='sub-desc'><p>The drag source that was dragged over this drop zone</p>\n</div></li><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>The event</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>An object containing arbitrary data supplied by the drag source</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>status The CSS class that communicates the drop status back to the source so that the\nunderlying <a href=\"#!/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a> can be updated</p>\n</div></li></ul></div></div></div><div id='method-onNodeDrop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DropZone'>Ext.dd.DropZone</span><br/><a href='source/DropZone.html#Ext-dd-DropZone-method-onNodeDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropZone-method-onNodeDrop' class='name expandable'>onNodeDrop</a>( <span class='pre'>nodeData, source, e, data</span> ) : Boolean</div><div class='description'><div class='short'>Called when the DropZone determines that a Ext.dd.DragSource has been dropped onto\nthe drop node. ...</div><div class='long'><p>Called when the DropZone determines that a <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> has been dropped onto\nthe drop node.  The default implementation returns false, so it should be overridden to provide the\nappropriate processing of the drop event and return true so that the drag source's repair action does not run.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>nodeData</span> : Object<div class='sub-desc'><p>The custom data associated with the drop node (this is the same value returned from\n<a href=\"#!/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a> for this node)</p>\n</div></li><li><span class='pre'>source</span> : <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a><div class='sub-desc'><p>The drag source that was dragged over this drop zone</p>\n</div></li><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>The event</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>An object containing arbitrary data supplied by the drag source</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the drop was valid, else false</p>\n</div></li></ul></div></div></div><div id='method-onNodeEnter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DropZone'>Ext.dd.DropZone</span><br/><a href='source/DropZone.html#Ext-dd-DropZone-method-onNodeEnter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropZone-method-onNodeEnter' class='name expandable'>onNodeEnter</a>( <span class='pre'>nodeData, source, e, data</span> )</div><div class='description'><div class='short'>Called when the DropZone determines that a Ext.dd.DragSource has entered a drop node\nthat has either been registered ...</div><div class='long'><p>Called when the DropZone determines that a <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> has entered a drop node\nthat has either been registered or detected by a configured implementation of <a href=\"#!/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a>.\nThis method has no default implementation and should be overridden to provide\nnode-specific processing if necessary.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>nodeData</span> : Object<div class='sub-desc'><p>The custom data associated with the drop node (this is the same value returned from\n<a href=\"#!/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a> for this node)</p>\n</div></li><li><span class='pre'>source</span> : <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a><div class='sub-desc'><p>The drag source that was dragged over this drop zone</p>\n</div></li><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>The event</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>An object containing arbitrary data supplied by the drag source</p>\n</div></li></ul></div></div></div><div id='method-onNodeOut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DropZone'>Ext.dd.DropZone</span><br/><a href='source/DropZone.html#Ext-dd-DropZone-method-onNodeOut' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropZone-method-onNodeOut' class='name expandable'>onNodeOut</a>( <span class='pre'>nodeData, source, e, data</span> )</div><div class='description'><div class='short'>Called when the DropZone determines that a Ext.dd.DragSource has been dragged out of\nthe drop node without dropping. ...</div><div class='long'><p>Called when the DropZone determines that a <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> has been dragged out of\nthe drop node without dropping.  This method has no default implementation and should be overridden to provide\nnode-specific processing if necessary.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>nodeData</span> : Object<div class='sub-desc'><p>The custom data associated with the drop node (this is the same value returned from\n<a href=\"#!/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a> for this node)</p>\n</div></li><li><span class='pre'>source</span> : <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a><div class='sub-desc'><p>The drag source that was dragged over this drop zone</p>\n</div></li><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>The event</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>An object containing arbitrary data supplied by the drag source</p>\n</div></li></ul></div></div></div><div id='method-onNodeOver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DropZone'>Ext.dd.DropZone</span><br/><a href='source/DropZone.html#Ext-dd-DropZone-method-onNodeOver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DropZone-method-onNodeOver' class='name expandable'>onNodeOver</a>( <span class='pre'>nodeData, source, e, data</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Called while the DropZone determines that a Ext.dd.DragSource is over a drop node\nthat has either been registered or ...</div><div class='long'><p>Called while the DropZone determines that a <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> is over a drop node\nthat has either been registered or detected by a configured implementation of <a href=\"#!/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a>.\nThe default implementation returns this.dropNotAllowed, so it should be\noverridden to provide the proper feedback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>nodeData</span> : Object<div class='sub-desc'><p>The custom data associated with the drop node (this is the same value returned from\n<a href=\"#!/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a> for this node)</p>\n</div></li><li><span class='pre'>source</span> : <a href=\"#!/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a><div class='sub-desc'><p>The drag source that was dragged over this drop zone</p>\n</div></li><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>The event</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>An object containing arbitrary data supplied by the drag source</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>status The CSS class that communicates the drop status back to the source so that the\nunderlying <a href=\"#!/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a> can be updated</p>\n</div></li></ul></div></div></div><div id='method-removeFromGroup' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-removeFromGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-removeFromGroup' class='name expandable'>removeFromGroup</a>( <span class='pre'>sGroup</span> )</div><div class='description'><div class='short'>Remove's this instance from the supplied interaction group ...</div><div class='long'><p>Remove's this instance from the supplied interaction group</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sGroup</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a><div class='sub-desc'><p>The group to drop</p>\n</div></li></ul></div></div></div><div id='method-setPadding' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-setPadding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-setPadding' class='name expandable'>setPadding</a>( <span class='pre'>iTop, iRight, iBot, iLeft</span> )</div><div class='description'><div class='short'>Configures the padding for the target zone in px. ...</div><div class='long'><p>Configures the padding for the target zone in px.  Effectively expands\n(or reduces) the virtual object size for targeting calculations.\nSupports css-style shorthand; if only one parameter is passed, all sides\nwill have that padding, and if only two are passed, the top and bottom\nwill have the first param, the left and right the second.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>iTop</span> : int<div class='sub-desc'><p>Top pad</p>\n</div></li><li><span class='pre'>iRight</span> : int<div class='sub-desc'><p>Right pad</p>\n</div></li><li><span class='pre'>iBot</span> : int<div class='sub-desc'><p>Bot pad</p>\n</div></li><li><span class='pre'>iLeft</span> : int<div class='sub-desc'><p>Left pad</p>\n</div></li></ul></div></div></div><div id='method-setStartPosition' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-setStartPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-setStartPosition' class='name expandable'>setStartPosition</a>( <span class='pre'>pos</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Sets the start position of the element. ...</div><div class='long'><p>Sets the start position of the element.  This is set when the obj\nis initialized, the reset when a drag is started.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pos</span> : Object<div class='sub-desc'><p>current position (from previous lookup)</p>\n</div></li></ul></div></div></div><div id='method-setXTicks' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-setXTicks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-setXTicks' class='name expandable'>setXTicks</a>( <span class='pre'>iStartX, iTickSize</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Create the array of horizontal tick marks if an interval was specified\nin setXConstraint(). ...</div><div class='long'><p>Create the array of horizontal tick marks if an interval was specified\nin setXConstraint().</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>iStartX</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>iTickSize</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setYTicks' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-setYTicks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-setYTicks' class='name expandable'>setYTicks</a>( <span class='pre'>iStartY, iTickSize</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Create the array of vertical tick marks if an interval was specified in\nsetYConstraint(). ...</div><div class='long'><p>Create the array of vertical tick marks if an interval was specified in\nsetYConstraint().</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>iStartY</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>iTickSize</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a></div><div class='description'><div class='short'>toString method ...</div><div class='long'><p>toString method</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a></span><div class='sub-desc'><p>string representation of the dd obj</p>\n</div></li></ul></div></div></div><div id='method-unlock' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-unlock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-unlock' class='name expandable'>unlock</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Unlock this instace ...</div><div class='long'><p>Unlock this instace</p>\n</div></div></div><div id='method-unreg' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.dd.DragDrop' rel='Ext.dd.DragDrop' class='defined-in docClass'>Ext.dd.DragDrop</a><br/><a href='source/DDCore.html#Ext-dd-DragDrop-method-unreg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDrop-method-unreg' class='name expandable'>unreg</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Remove all drag and drop hooks for this element ...</div><div class='long'><p>Remove all drag and drop hooks for this element</p>\n</div></div></div></div></div></div></div>",
    "superclasses": ["Ext.dd.DragDrop", "Ext.dd.DDTarget", "Ext.dd.DropTarget"],
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
        "href": "DropZone.html#Ext-dd-DropZone",
        "filename": "DropZone.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "__ygDragDrop",
            "id": "property-__ygDragDrop"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "_domRef",
            "id": "property-_domRef"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "available",
            "id": "property-available"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "config",
            "id": "property-config"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "constrainX",
            "id": "property-constrainX"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "constrainY",
            "id": "property-constrainY"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "defaultPadding",
            "id": "property-defaultPadding"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "dragElId",
            "id": "property-dragElId"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "groups",
            "id": "property-groups"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "handleElId",
            "id": "property-handleElId"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "hasOuterHandles",
            "id": "property-hasOuterHandles"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "id",
            "id": "property-id"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "ignoreSelf",
            "id": "property-ignoreSelf"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "invalidHandleClasses",
            "id": "property-invalidHandleClasses"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "invalidHandleIds",
            "id": "property-invalidHandleIds"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "invalidHandleTypes",
            "id": "property-invalidHandleTypes"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DropTarget",
            "meta": {
                "private": true
            },
            "name": "isNotifyTarget",
            "id": "property-isNotifyTarget"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DropTarget",
            "meta": {},
            "name": "isTarget",
            "id": "property-isTarget"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "locked",
            "id": "property-locked"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "maintainOffset",
            "id": "property-maintainOffset"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "maxX",
            "id": "property-maxX"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "maxY",
            "id": "property-maxY"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "minX",
            "id": "property-minX"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "minY",
            "id": "property-minY"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "moveOnly",
            "id": "property-moveOnly"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "padding",
            "id": "property-padding"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "primaryButtonOnly",
            "id": "property-primaryButtonOnly"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "startPageX",
            "id": "property-startPageX"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "startPageY",
            "id": "property-startPageY"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "xTicks",
            "id": "property-xTicks"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "yTicks",
            "id": "property-yTicks"
        }],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.dd.DropTarget",
            "meta": {},
            "name": "ddGroup",
            "id": "cfg-ddGroup"
        }, {
            "tagname": "cfg",
            "owner": "Ext.dd.DropTarget",
            "meta": {},
            "name": "dropAllowed",
            "id": "cfg-dropAllowed"
        }, {
            "tagname": "cfg",
            "owner": "Ext.dd.DropTarget",
            "meta": {},
            "name": "dropNotAllowed",
            "id": "cfg-dropNotAllowed"
        }, {
            "tagname": "cfg",
            "owner": "Ext.dd.DropTarget",
            "meta": {},
            "name": "overClass",
            "id": "cfg-overClass"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.dd.DropZone",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "addToGroup",
            "id": "method-addToGroup"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "applyConfig",
            "id": "method-applyConfig"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "b4Drag",
            "id": "method-b4Drag"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "b4DragDrop",
            "id": "method-b4DragDrop"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "b4DragOut",
            "id": "method-b4DragOut"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "b4DragOver",
            "id": "method-b4DragOver"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "b4EndDrag",
            "id": "method-b4EndDrag"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "b4MouseDown",
            "id": "method-b4MouseDown"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "b4StartDrag",
            "id": "method-b4StartDrag"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "constrainTo",
            "id": "method-constrainTo"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DropTarget",
            "meta": {
                "private": true
            },
            "name": "destroy",
            "id": "method-destroy"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "getEl",
            "id": "method-getEl"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DropZone",
            "meta": {},
            "name": "getTargetFromEvent",
            "id": "method-getTargetFromEvent"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "getTick",
            "id": "method-getTick"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "handleMouseDown",
            "id": "method-handleMouseDown"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "handleOnAvailable",
            "id": "method-handleOnAvailable"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "init",
            "id": "method-init"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "initTarget",
            "id": "method-initTarget"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "isLocked",
            "id": "method-isLocked"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "lock",
            "id": "method-lock"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DropZone",
            "meta": {},
            "name": "notifyDrop",
            "id": "method-notifyDrop"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DropZone",
            "meta": {},
            "name": "notifyEnter",
            "id": "method-notifyEnter"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DropZone",
            "meta": {},
            "name": "notifyOut",
            "id": "method-notifyOut"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DropZone",
            "meta": {},
            "name": "notifyOver",
            "id": "method-notifyOver"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "onAvailable",
            "id": "method-onAvailable"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DropZone",
            "meta": {},
            "name": "onContainerDrop",
            "id": "method-onContainerDrop"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DropZone",
            "meta": {},
            "name": "onContainerOver",
            "id": "method-onContainerOver"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DropZone",
            "meta": {},
            "name": "onNodeDrop",
            "id": "method-onNodeDrop"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DropZone",
            "meta": {},
            "name": "onNodeEnter",
            "id": "method-onNodeEnter"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DropZone",
            "meta": {},
            "name": "onNodeOut",
            "id": "method-onNodeOut"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DropZone",
            "meta": {},
            "name": "onNodeOver",
            "id": "method-onNodeOver"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "removeFromGroup",
            "id": "method-removeFromGroup"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "setPadding",
            "id": "method-setPadding"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "setStartPosition",
            "id": "method-setStartPosition"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "setXTicks",
            "id": "method-setXTicks"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {
                "private": true
            },
            "name": "setYTicks",
            "id": "method-setYTicks"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "toString",
            "id": "method-toString"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "unlock",
            "id": "method-unlock"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDrop",
            "meta": {},
            "name": "unreg",
            "id": "method-unreg"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.dd.DropZone",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.dd.DropZone",
    "mixins": [],
    "mixedInto": []
});