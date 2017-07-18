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
Ext.data.JsonP.Ext_dd_DragDropMgr({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/DDCore.html#Ext-dd-DragDropMgr' target='_blank'>DDCore.js</a></div></pre><div class='doc-contents'><p>DragDropMgr is a singleton that tracks the element interaction for\nall DragDrop items in the window.  Generally, you will not call\nthis class directly, but it does have helper methods that could\nbe useful in your DragDrop implementations.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-INTERSECT' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-INTERSECT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-INTERSECT' class='name expandable'>INTERSECT</a><span> : int</span></div><div class='description'><div class='short'>In intersect mode, drag and drop interaction is defined by the\noverlap of two or more drag and drop objects. ...</div><div class='long'><p>In intersect mode, drag and drop interaction is defined by the\noverlap of two or more drag and drop objects.</p>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='property-POINT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-POINT' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-POINT' class='name expandable'>POINT</a><span> : int</span></div><div class='description'><div class='short'>In point mode, drag and drop interaction is defined by the\nlocation of the cursor during the drag/drop ...</div><div class='long'><p>In point mode, drag and drop interaction is defined by the\nlocation of the cursor during the drag/drop</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-clickPixelThresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-clickPixelThresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-clickPixelThresh' class='name expandable'>clickPixelThresh</a><span> : int</span></div><div class='description'><div class='short'>The number of pixels that the mouse needs to move after the\nmousedown before the drag is initiated. ...</div><div class='long'><p>The number of pixels that the mouse needs to move after the\nmousedown before the drag is initiated.  Default=3;</p>\n<p>Defaults to: <code>3</code></p></div></div></div><div id='property-clickTimeThresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-clickTimeThresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-clickTimeThresh' class='name expandable'>clickTimeThresh</a><span> : int</span></div><div class='description'><div class='short'>The number of milliseconds after the mousedown event to initiate the\ndrag if we don't get a mouseup event. ...</div><div class='long'><p>The number of milliseconds after the mousedown event to initiate the\ndrag if we don't get a mouseup event. Default=350</p>\n<p>Defaults to: <code>350</code></p></div></div></div><div id='property-clickTimeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-clickTimeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-clickTimeout' class='name not-expandable'>clickTimeout</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>Timeout used for the click time threshold</p>\n</div><div class='long'><p>Timeout used for the click time threshold</p>\n</div></div></div><div id='property-deltaX' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-deltaX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-deltaX' class='name expandable'>deltaX</a><span> : int</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>the X distance between the cursor and the object being dragged ...</div><div class='long'><p>the X distance between the cursor and the object being dragged</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-deltaY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-deltaY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-deltaY' class='name expandable'>deltaY</a><span> : int</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>the Y distance between the cursor and the object being dragged ...</div><div class='long'><p>the Y distance between the cursor and the object being dragged</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-dragCurrent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-dragCurrent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-dragCurrent' class='name not-expandable'>dragCurrent</a><span> : DragDrop</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>the DragDrop object that is currently being dragged</p>\n</div><div class='long'><p>the DragDrop object that is currently being dragged</p>\n</div></div></div><div id='property-dragOvers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-dragOvers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-dragOvers' class='name expandable'>dragOvers</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>the DragDrop object(s) that are being hovered over ...</div><div class='long'><p>the DragDrop object(s) that are being hovered over</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-dragThreshMet' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-dragThreshMet' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-dragThreshMet' class='name expandable'>dragThreshMet</a><span> : boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Flag that indicates that either the drag pixel threshold or the\nmousdown time threshold has been met ...</div><div class='long'><p>Flag that indicates that either the drag pixel threshold or the\nmousdown time threshold has been met</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-elementCache' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-elementCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-elementCache' class='name expandable'>elementCache</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>A cache of DOM elements ...</div><div class='long'><p>A cache of DOM elements</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-handleIds' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-handleIds' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-handleIds' class='name expandable'>handleIds</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Array of element ids defined as drag handles. ...</div><div class='long'><p>Array of element ids defined as drag handles.  Used to determine\nif the element that generated the mousedown event is actually the\nhandle and not the html element itself.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-ids' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-ids' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-ids' class='name expandable'>ids</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>[]</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Two dimensional Array of registered DragDrop objects. ...</div><div class='long'><p>Two dimensional Array of registered DragDrop objects.  The first\ndimension is the DragDrop item group, the second the DragDrop\nobject.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-initialized' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-initialized' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-initialized' class='name expandable'>initialized</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Internal flag that is set to true when drag and drop has been\nintialized ...</div><div class='long'><p>Internal flag that is set to true when drag and drop has been\nintialized</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-locationCache' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-locationCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-locationCache' class='name expandable'>locationCache</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Location cache that is set for all drag drop objects when a drag is\ninitiated, cleared when the drag is finished. ...</div><div class='long'><p>Location cache that is set for all drag drop objects when a drag is\ninitiated, cleared when the drag is finished.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-locked' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-locked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-locked' class='name expandable'>locked</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>All drag and drop can be disabled. ...</div><div class='long'><p>All drag and drop can be disabled.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-mode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-mode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-mode' class='name expandable'>mode</a><span> : int</span></div><div class='description'><div class='short'>The current drag and drop mode. ...</div><div class='long'><p>The current drag and drop mode.  Default: POINT</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-notifyOccluded' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-notifyOccluded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-notifyOccluded' class='name expandable'>notifyOccluded</a><span> : Boolean</span></div><div class='description'><div class='short'>This config is only provided to provide old, usually unwanted drag/drop behaviour. ...</div><div class='long'><p>This config is only provided to provide old, usually unwanted drag/drop behaviour.</p>\n\n<p>From ExtJS 4.1.0 onwards, when drop targets are contained in floating, absolutely positioned elements\nsuch as in Windows, which may overlap each other, <code>over</code> and <code>drop</code> events\nare only delivered to the topmost drop target at the mouse position.</p>\n\n<p>If all targets below that in zIndex order should also receive notifications, set\n<code>notifyOccluded</code> to <code>true</code>.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-preventDefault' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-preventDefault' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-preventDefault' class='name expandable'>preventDefault</a><span> : boolean</span></div><div class='description'><div class='short'>Flag to determine if we should prevent the default behavior of the\nevents we define. ...</div><div class='long'><p>Flag to determine if we should prevent the default behavior of the\nevents we define. By default this is true, but this can be set to\nfalse if you need the default behavior (not recommended)</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-startX' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-startX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-startX' class='name expandable'>startX</a><span> : int</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>The X position of the mousedown event stored for later use when a\ndrag threshold is met. ...</div><div class='long'><p>The X position of the mousedown event stored for later use when a\ndrag threshold is met.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-startY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-startY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-startY' class='name expandable'>startY</a><span> : int</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>The Y position of the mousedown event stored for later use when a\ndrag threshold is met. ...</div><div class='long'><p>The Y position of the mousedown event stored for later use when a\ndrag threshold is met.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-stopPropagation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-stopPropagation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-stopPropagation' class='name expandable'>stopPropagation</a><span> : boolean</span></div><div class='description'><div class='short'>Flag to determine if we should stop the propagation of the events\nwe generate. ...</div><div class='long'><p>Flag to determine if we should stop the propagation of the events\nwe generate. This is true by default but you may want to set it to\nfalse if the html element contains other features that require the\nmouse click.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-useCache' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-property-useCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-property-useCache' class='name expandable'>useCache</a><span> : boolean</span></div><div class='description'><div class='short'>Set useCache to false if you want to force object the lookup of each\ndrag and drop linked element constantly during a...</div><div class='long'><p>Set useCache to false if you want to force object the lookup of each\ndrag and drop linked element constantly during a drag.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_execOnAll' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-_execOnAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-_execOnAll' class='name expandable'>_execOnAll</a>( <span class='pre'>sMethod, args</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Runs method on all drag and drop objects ...</div><div class='long'><p>Runs method on all drag and drop objects</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sMethod</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_onLoad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-_onLoad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-_onLoad' class='name expandable'>_onLoad</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Drag and drop initialization. ...</div><div class='long'><p>Drag and drop initialization.  Sets up the global event handlers</p>\n</div></div></div><div id='method-_onResize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-_onResize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-_onResize' class='name expandable'>_onResize</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Reset constraints on all drag and drop objs ...</div><div class='long'><p>Reset constraints on all drag and drop objs</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_onUnload' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-_onUnload' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-_onUnload' class='name expandable'>_onUnload</a>( <span class='pre'>e, me</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>unload event handler ...</div><div class='long'><p>unload event handler</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>me</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-_remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-_remove' class='name expandable'>_remove</a>( <span class='pre'>oDD</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Unregisters a drag and drop item. ...</div><div class='long'><p>Unregisters a drag and drop item.  This is executed in\nDragDrop.unreg, use that method instead of calling this directly.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>oDD</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-byZIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-byZIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-byZIndex' class='name expandable'>byZIndex</a>( <span class='pre'>d1, d2</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Utility method to pass to Ext.Array.sort when sorting potential drop targets by z-index. ...</div><div class='long'><p>Utility method to pass to Ext.Array.sort when sorting potential drop targets by z-index.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>d1</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>d2</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-fireEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-fireEvents' class='name expandable'>fireEvents</a>( <span class='pre'>e, isDrop</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Iterates over all of the DragDrop elements to find ones we are\nhovering over or dropping on ...</div><div class='long'><p>Iterates over all of the DragDrop elements to find ones we are\nhovering over or dropping on</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>the event</p>\n</div></li><li><span class='pre'>isDrop</span> : boolean<div class='sub-desc'><p>is this a drop op or a mouseover op?</p>\n</div></li></ul></div></div></div><div id='method-getBestMatch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-getBestMatch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-getBestMatch' class='name expandable'>getBestMatch</a>( <span class='pre'>dds</span> ) : DragDrop</div><div class='description'><div class='short'>Helper function for getting the best match from the list of drag\nand drop objects returned by the drag and drop event...</div><div class='long'><p>Helper function for getting the best match from the list of drag\nand drop objects returned by the drag and drop events when we are\nin INTERSECT mode.  It returns either the first object that the\ncursor is over, or the object that has the greatest overlap with\nthe dragged element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dds</span> : DragDrop[]<div class='sub-desc'><p>The array of drag and drop objects\ntargeted</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>DragDrop</span><div class='sub-desc'><p>The best single match</p>\n</div></li></ul></div></div></div><div id='method-getCss' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-getCss' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-getCss' class='name expandable'>getCss</a>( <span class='pre'>id</span> ) : Object<strong class='deprecated signature' >deprecated</strong></div><div class='description'><div class='short'>Returns the style property for the DOM element (i.e.,\ndocument.getElById(id).style) ...</div><div class='long'><p>Returns the style property for the DOM element (i.e.,\ndocument.getElById(id).style)</p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>use Ext.lib.Dom instead</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>the id of the elment to get</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The style property of the element</p>\n</div></li></ul></div></div></div><div id='method-getDDById' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-getDDById' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-getDDById' class='name expandable'>getDDById</a>( <span class='pre'>id</span> ) : DragDrop</div><div class='description'><div class='short'>Returns the DragDrop instance for a given id ...</div><div class='long'><p>Returns the DragDrop instance for a given id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>the id of the DragDrop object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>DragDrop</span><div class='sub-desc'><p>the drag drop object, null if it is not found</p>\n</div></li></ul></div></div></div><div id='method-getElWrapper' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-getElWrapper' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-getElWrapper' class='name expandable'>getElWrapper</a>( <span class='pre'>id</span> ) : Ext.dd.DDM.ElementWrapper<strong class='deprecated signature' >deprecated</strong><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Get the wrapper for the DOM element specified ...</div><div class='long'><p>Get the wrapper for the DOM element specified</p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>This wrapper isn't that useful</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>the id of the element to get</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.dd.DDM.ElementWrapper</span><div class='sub-desc'><p>the wrapped element</p>\n</div></li></ul></div></div></div><div id='method-getElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-getElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-getElement' class='name expandable'>getElement</a>( <span class='pre'>id</span> ) : Object<strong class='deprecated signature' >deprecated</strong></div><div class='description'><div class='short'>Returns the actual DOM element ...</div><div class='long'><p>Returns the actual DOM element</p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>use Ext.lib.Ext.getDom instead</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>the id of the elment to get</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The element</p>\n</div></li></ul></div></div></div><div id='method-getLocation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-getLocation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-getLocation' class='name expandable'>getLocation</a>( <span class='pre'>oDD</span> )</div><div class='description'><div class='short'>Returns a Region object containing the drag and drop element's position\nand size, including the padding configured fo...</div><div class='long'><p>Returns a Region object containing the drag and drop element's position\nand size, including the padding configured for it</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>oDD</span> : DragDrop<div class='sub-desc'><p>the drag and drop object to get the</p>\n\n<pre><code>                  location for\n</code></pre>\n\n<p>@return {Ext.lib.Region} a Region object representing the total area</p>\n\n<pre><code>                        the element occupies, including any padding\n                        the instance is configured for.\n</code></pre>\n</div></li></ul></div></div></div><div id='method-getRelated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-getRelated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-getRelated' class='name expandable'>getRelated</a>( <span class='pre'>p_oDD, bTargetsOnly</span> ) : DragDrop[]</div><div class='description'><div class='short'>Returns the drag and drop instances that are in all groups the\npassed in instance belongs to. ...</div><div class='long'><p>Returns the drag and drop instances that are in all groups the\npassed in instance belongs to.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>p_oDD</span> : DragDrop<div class='sub-desc'><p>the obj to get related data for</p>\n</div></li><li><span class='pre'>bTargetsOnly</span> : boolean<div class='sub-desc'><p>if true, only return targetable objs</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>DragDrop[]</span><div class='sub-desc'><p>the related instances</p>\n</div></li></ul></div></div></div><div id='method-getZIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-getZIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-getZIndex' class='name expandable'>getZIndex</a>( <span class='pre'>element</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Collects the z-index of the passed element, looking up the parentNode axis to find an absolutely positioned ancestor\n...</div><div class='long'><p>Collects the z-index of the passed element, looking up the parentNode axis to find an absolutely positioned ancestor\nwhich is able to yield a z-index. If found to be not absolutely positionedm returns -1.</p>\n\n<p>This is used when sorting potential drop targets into z-index order so that only the topmost receives <code>over</code> and <code>drop</code> events.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The z-index of the element, or of its topmost absolutely positioned ancestor. Returns -1 if the element is not\nabsolutely positioned.</p>\n</div></li></ul></div></div></div><div id='method-handleMouseDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-handleMouseDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-handleMouseDown' class='name expandable'>handleMouseDown</a>( <span class='pre'>e, oDD</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Fired after a registered DragDrop object gets the mousedown event. ...</div><div class='long'><p>Fired after a registered DragDrop object gets the mousedown event.\nSets up the events required to track the object being dragged</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>the event</p>\n</div></li><li><span class='pre'>oDD</span> : Object<div class='sub-desc'><p>the DragDrop object being dragged</p>\n</div></li></ul></div></div></div><div id='method-handleMouseMove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-handleMouseMove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-handleMouseMove' class='name expandable'>handleMouseMove</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Internal function to handle the mousemove event. ...</div><div class='long'><p>Internal function to handle the mousemove event.  Will be invoked\nfrom the context of the html element.</p>\n\n<p>@TODO figure out what we can do about mouse events lost when the\nuser drags objects beyond the window boundary.  Currently we can\ndetect this in internet explorer by verifying that the mouse is\ndown during the mousemove event.  Firefox doesn't give us the\nbutton state on the mousemove event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>the event</p>\n</div></li></ul></div></div></div><div id='method-handleMouseUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-handleMouseUp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-handleMouseUp' class='name expandable'>handleMouseUp</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Internal function to handle the mouseup event. ...</div><div class='long'><p>Internal function to handle the mouseup event.  Will be invoked\nfrom the context of the document.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>the event</p>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-init' class='name expandable'>init</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Called the first time an element is registered. ...</div><div class='long'><p>Called the first time an element is registered.</p>\n</div></div></div><div id='method-isDragDrop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-isDragDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-isDragDrop' class='name expandable'>isDragDrop</a>( <span class='pre'>id</span> ) : boolean</div><div class='description'><div class='short'>Utility function to determine if a given element has been\nregistered as a drag drop item. ...</div><div class='long'><p>Utility function to determine if a given element has been\nregistered as a drag drop item.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>the element id to check</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if this element is a DragDrop item,\nfalse otherwise</p>\n</div></li></ul></div></div></div><div id='method-isHandle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-isHandle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-isHandle' class='name expandable'>isHandle</a>( <span class='pre'>id</span> ) : boolean</div><div class='description'><div class='short'>Utility function to determine if a given element has been\nregistered as a drag drop handle for the given Drag Drop ob...</div><div class='long'><p>Utility function to determine if a given element has been\nregistered as a drag drop handle for the given Drag Drop object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>the element id to check</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if this element is a DragDrop handle, false\notherwise</p>\n</div></li></ul></div></div></div><div id='method-isLegalTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-isLegalTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-isLegalTarget' class='name expandable'>isLegalTarget</a>( <span class='pre'>oDD, oTargetDD</span> ) : boolean</div><div class='description'><div class='short'>Returns true if the specified dd target is a legal target for\nthe specifice drag obj ...</div><div class='long'><p>Returns true if the specified dd target is a legal target for\nthe specifice drag obj</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>oDD</span> : DragDrop<div class='sub-desc'><p>the drag obj</p>\n</div></li><li><span class='pre'>oTargetDD</span> : DragDrop<div class='sub-desc'><p>the target</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if the target is a legal target for the\ndd obj</p>\n</div></li></ul></div></div></div><div id='method-isLocked' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-isLocked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-isLocked' class='name expandable'>isLocked</a>( <span class='pre'></span> ) : boolean</div><div class='description'><div class='short'>Is drag and drop locked? ...</div><div class='long'><p>Is drag and drop locked?</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>True if drag and drop is locked, false otherwise.</p>\n</div></li></ul></div></div></div><div id='method-isOverTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-isOverTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-isOverTarget' class='name expandable'>isOverTarget</a>( <span class='pre'>pt, oTarget</span> ) : boolean<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Checks the cursor location to see if it over the target ...</div><div class='long'><p>Checks the cursor location to see if it over the target</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pt</span> : Ext.lib.Point<div class='sub-desc'><p>The point to evaluate</p>\n</div></li><li><span class='pre'>oTarget</span> : DragDrop<div class='sub-desc'><p>the DragDrop object we are inspecting</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if the mouse is over the target</p>\n</div></li></ul></div></div></div><div id='method-isTypeOfDD' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-isTypeOfDD' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-isTypeOfDD' class='name expandable'>isTypeOfDD</a>( <span class='pre'>the</span> ) : boolean</div><div class='description'><div class='short'>My goal is to be able to transparently determine if an object is\ntypeof DragDrop, and the exact subclass of DragDrop. ...</div><div class='long'><p>My goal is to be able to transparently determine if an object is\ntypeof DragDrop, and the exact subclass of DragDrop.  typeof\nreturns \"object\", oDD.constructor.toString() always returns\n\"DragDrop\" and not the name of the subclass.  So for now it just\nevaluates a well-known variable in DragDrop.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>the</span> : Object<div class='sub-desc'><p>object to evaluate</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if typeof oDD = DragDrop</p>\n</div></li></ul></div></div></div><div id='method-lock' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-lock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-lock' class='name expandable'>lock</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Lock all drag and drop functionality ...</div><div class='long'><p>Lock all drag and drop functionality</p>\n</div></div></div><div id='method-refreshCache' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-refreshCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-refreshCache' class='name expandable'>refreshCache</a>( <span class='pre'>groups</span> )</div><div class='description'><div class='short'>Refreshes the cache of the top-left and bottom-right points of the\ndrag and drop objects in the specified group(s). ...</div><div class='long'><p>Refreshes the cache of the top-left and bottom-right points of the\ndrag and drop objects in the specified group(s).  This is in the\nformat that is stored in the drag and drop instance, so typical\nusage is:\n<code>\n<a href=\"#!/api/Ext.dd.DragDropMgr-method-refreshCache\" rel=\"Ext.dd.DragDropMgr-method-refreshCache\" class=\"docClass\">Ext.dd.DragDropMgr.refreshCache</a>(ddinstance.groups);\n</code>\nAlternatively:\n<code>\n<a href=\"#!/api/Ext.dd.DragDropMgr-method-refreshCache\" rel=\"Ext.dd.DragDropMgr-method-refreshCache\" class=\"docClass\">Ext.dd.DragDropMgr.refreshCache</a>({group1:true, group2:true});\n</code>\n@TODO this really should be an indexed array.  Alternatively this\nmethod could accept both.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>groups</span> : Object<div class='sub-desc'><p>an associative array of groups to refresh</p>\n</div></li></ul></div></div></div><div id='method-regDragDrop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-regDragDrop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-regDragDrop' class='name expandable'>regDragDrop</a>( <span class='pre'>oDD, sGroup</span> )</div><div class='description'><div class='short'>Each DragDrop instance must be registered with the DragDropMgr. ...</div><div class='long'><p>Each DragDrop instance must be registered with the DragDropMgr.\nThis is executed in DragDrop.init()</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>oDD</span> : DragDrop<div class='sub-desc'><p>the DragDrop object to register</p>\n</div></li><li><span class='pre'>sGroup</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>the name of the group this element belongs to</p>\n</div></li></ul></div></div></div><div id='method-regHandle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-regHandle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-regHandle' class='name expandable'>regHandle</a>( <span class='pre'>sDDId, sHandleId</span> )</div><div class='description'><div class='short'>Each DragDrop handle element must be registered. ...</div><div class='long'><p>Each DragDrop handle element must be registered.  This is done\nautomatically when executing DragDrop.setHandleElId()</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sDDId</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>the DragDrop id this element is a handle for</p>\n</div></li><li><span class='pre'>sHandleId</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>the id of the element that is the drag\nhandle</p>\n</div></li></ul></div></div></div><div id='method-removeDDFromGroup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-removeDDFromGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-removeDDFromGroup' class='name expandable'>removeDDFromGroup</a>( <span class='pre'>oDD, sGroup</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Removes the supplied dd instance from the supplied group. ...</div><div class='long'><p>Removes the supplied dd instance from the supplied group. Executed\nby DragDrop.removeFromGroup, so don't call this function directly.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>oDD</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>sGroup</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-startDrag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-startDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-startDrag' class='name expandable'>startDrag</a>( <span class='pre'>x, y</span> )</div><div class='description'><div class='short'>Fired when either the drag pixel threshol or the mousedown hold\ntime threshold has been met. ...</div><div class='long'><p>Fired when either the drag pixel threshol or the mousedown hold\ntime threshold has been met.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'><p>{int} the X position of the original mousedown</p>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'><p>{int} the Y position of the original mousedown</p>\n</div></li></ul></div></div></div><div id='method-stopDrag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-stopDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-stopDrag' class='name expandable'>stopDrag</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Internal function to clean up event handlers after the drag\noperation is complete ...</div><div class='long'><p>Internal function to clean up event handlers after the drag\noperation is complete</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>the event</p>\n</div></li></ul></div></div></div><div id='method-stopEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-stopEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-stopEvent' class='name expandable'>stopEvent</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Utility to stop event propagation and event default, if these\nfeatures are turned on. ...</div><div class='long'><p>Utility to stop event propagation and event default, if these\nfeatures are turned on.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>the event as returned by this.getEvent()</p>\n</div></li></ul></div></div></div><div id='method-unlock' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-unlock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-unlock' class='name expandable'>unlock</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Unlock all drag and drop functionality ...</div><div class='long'><p>Unlock all drag and drop functionality</p>\n</div></div></div><div id='method-unregAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-unregAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-unregAll' class='name expandable'>unregAll</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Cleans up the drag and drop events and objects. ...</div><div class='long'><p>Cleans up the drag and drop events and objects.</p>\n</div></div></div><div id='method-verifyEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr'>Ext.dd.DragDropMgr</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-method-verifyEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr-method-verifyEl' class='name expandable'>verifyEl</a>( <span class='pre'>el</span> ) : boolean</div><div class='description'><div class='short'>This checks to make sure an element exists and is in the DOM. ...</div><div class='long'><p>This checks to make sure an element exists and is in the DOM.  The\nmain purpose is to handle cases where innerHTML is used to remove\ndrag and drop objects from the DOM.  IE provides an 'unspecified\nerror' when trying to access the offsetParent of such an element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'><p>the element to check</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if the element looks usable</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "DDCore.html#Ext-dd-DragDropMgr",
        "filename": "DDCore.js"
    }],
    "linenr": 1197,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "INTERSECT",
            "id": "property-INTERSECT"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "POINT",
            "id": "property-POINT"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "clickPixelThresh",
            "id": "property-clickPixelThresh"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "clickTimeThresh",
            "id": "property-clickTimeThresh"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "clickTimeout",
            "id": "property-clickTimeout"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "deltaX",
            "id": "property-deltaX"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "deltaY",
            "id": "property-deltaY"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "dragCurrent",
            "id": "property-dragCurrent"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "dragOvers",
            "id": "property-dragOvers"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "dragThreshMet",
            "id": "property-dragThreshMet"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "elementCache",
            "id": "property-elementCache"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "handleIds",
            "id": "property-handleIds"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "ids",
            "id": "property-ids"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "initialized",
            "id": "property-initialized"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "locationCache",
            "id": "property-locationCache"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "locked",
            "id": "property-locked"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "mode",
            "id": "property-mode"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "notifyOccluded",
            "id": "property-notifyOccluded"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "preventDefault",
            "id": "property-preventDefault"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "startX",
            "id": "property-startX"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "startY",
            "id": "property-startY"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "stopPropagation",
            "id": "property-stopPropagation"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "useCache",
            "id": "property-useCache"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "_execOnAll",
            "id": "method-_execOnAll"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "_onLoad",
            "id": "method-_onLoad"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "_onResize",
            "id": "method-_onResize"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "_onUnload",
            "id": "method-_onUnload"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "_remove",
            "id": "method-_remove"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "byZIndex",
            "id": "method-byZIndex"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "fireEvents",
            "id": "method-fireEvents"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "getBestMatch",
            "id": "method-getBestMatch"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "deprecated": {
                    "text": "use Ext.lib.Dom instead"
                }
            },
            "name": "getCss",
            "id": "method-getCss"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "getDDById",
            "id": "method-getDDById"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true,
                "deprecated": {
                    "text": "This wrapper isn't that useful"
                }
            },
            "name": "getElWrapper",
            "id": "method-getElWrapper"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "deprecated": {
                    "text": "use Ext.lib.Ext.getDom instead"
                }
            },
            "name": "getElement",
            "id": "method-getElement"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "getLocation",
            "id": "method-getLocation"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "getRelated",
            "id": "method-getRelated"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "getZIndex",
            "id": "method-getZIndex"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "handleMouseDown",
            "id": "method-handleMouseDown"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "handleMouseMove",
            "id": "method-handleMouseMove"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "handleMouseUp",
            "id": "method-handleMouseUp"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "init",
            "id": "method-init"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "isDragDrop",
            "id": "method-isDragDrop"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "isHandle",
            "id": "method-isHandle"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "isLegalTarget",
            "id": "method-isLegalTarget"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "isLocked",
            "id": "method-isLocked"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "isOverTarget",
            "id": "method-isOverTarget"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "isTypeOfDD",
            "id": "method-isTypeOfDD"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "lock",
            "id": "method-lock"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "refreshCache",
            "id": "method-refreshCache"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "regDragDrop",
            "id": "method-regDragDrop"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "regHandle",
            "id": "method-regHandle"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "removeDDFromGroup",
            "id": "method-removeDDFromGroup"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "startDrag",
            "id": "method-startDrag"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "stopDrag",
            "id": "method-stopDrag"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "stopEvent",
            "id": "method-stopEvent"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "unlock",
            "id": "method-unlock"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {
                "private": true
            },
            "name": "unregAll",
            "id": "method-unregAll"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr",
            "meta": {},
            "name": "verifyEl",
            "id": "method-verifyEl"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.dd.DragDropMgr",
    "singleton": true,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.dd.DragDropMgr",
    "mixins": [],
    "mixedInto": []
});