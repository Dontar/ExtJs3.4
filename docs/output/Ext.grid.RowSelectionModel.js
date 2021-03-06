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
Ext.data.JsonP.Ext_grid_RowSelectionModel({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": ["Ext.grid.CheckboxSelectionModel"],
    "extends": "Ext.grid.AbstractSelectionModel",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='docClass'>Ext.util.Observable</a><div class='subclass '><a href='#!/api/Ext.grid.AbstractSelectionModel' rel='Ext.grid.AbstractSelectionModel' class='docClass'>Ext.grid.AbstractSelectionModel</a><div class='subclass '><strong>Ext.grid.RowSelectionModel</strong></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.grid.CheckboxSelectionModel' rel='Ext.grid.CheckboxSelectionModel' class='docClass'>Ext.grid.CheckboxSelectionModel</a></div><h4>Files</h4><div class='dependency'><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel' target='_blank'>RowSelectionModel.js</a></div></pre><div class='doc-contents'><p>The default SelectionModel used by <a href=\"#!/api/Ext.grid.GridPanel\" rel=\"Ext.grid.GridPanel\" class=\"docClass\">Ext.grid.GridPanel</a>.\nIt supports multiple selections and keyboard selection/navigation. The objects stored\nas selections and returned by <a href=\"#!/api/Ext.grid.RowSelectionModel-method-getSelected\" rel=\"Ext.grid.RowSelectionModel-method-getSelected\" class=\"docClass\">getSelected</a>, and <a href=\"#!/api/Ext.grid.RowSelectionModel-method-getSelections\" rel=\"Ext.grid.RowSelectionModel-method-getSelections\" class=\"docClass\">getSelections</a> are\nthe <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Record</a>s which provide the data for the selected rows.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-listeners' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-cfg-listeners' class='name expandable'>listeners</a><span> : Object</span></div><div class='description'><div class='short'>(optional) A config object containing one or more event handlers to be added to this\nobject during initialization. ...</div><div class='long'><p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#!/api/Ext.DataView\" rel=\"Ext.DataView\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#!/api/Ext.DataView-event-click\" rel=\"Ext.DataView-event-click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a Component's HTMLElement, listeners must be added to the <i><a href=\"#!/api/Ext.Component-method-getEl\" rel=\"Ext.Component-method-getEl\" class=\"docClass\">Element</a></i> after the Component\nhas been rendered. A plugin can simplify this step:</p>\n\n<pre><code>// Plugin is configured with a listeners config object.\n// The Component is appended to the argument list of all handler functions.\nExt.DomObserver = <a href=\"#!/api/Ext-method-extend\" rel=\"Ext-method-extend\" class=\"docClass\">Ext.extend</a>(Object, {\n    constructor: function(config) {\n        this.listeners = config.listeners ? config.listeners : config;\n    },\n\n    // Component passes itself into plugin&#39;s init method\n    init: function(c) {\n        var p, l = this.listeners;\n        for (p in l) {\n            if (<a href=\"#!/api/Ext-method-isFunction\" rel=\"Ext-method-isFunction\" class=\"docClass\">Ext.isFunction</a>(l[p])) {\n                l[p] = this.createHandler(l[p], c);\n            } else {\n                l[p].fn = this.createHandler(l[p].fn, c);\n            }\n        }\n\n        // Add the listeners to the Element immediately following the render call\n        c.render = c.render.<a href=\"#!/api/Function-method-createSequence\" rel=\"Function-method-createSequence\" class=\"docClass\">createSequence</a>(function() {\n            var e = c.getEl();\n            if (e) {\n                e.on(l);\n            }\n        });\n    },\n\n    createHandler: function(fn, c) {\n        return function(e) {\n            fn.call(this, e, c);\n        };\n    }\n});\n\nvar combo = new <a href=\"#!/api/Ext.form.ComboBox\" rel=\"Ext.form.ComboBox\" class=\"docClass\">Ext.form.ComboBox</a>({\n\n    // Collapse combo when its element is clicked on\n    plugins: [ new Ext.DomObserver({\n        click: function(evt, comp) {\n            comp.collapse();\n        }\n    })],\n    store: myStore,\n    typeAhead: true,\n    mode: 'local',\n    triggerAction: 'all'\n});\n</code></pre>\n\n\n<p></p></p>\n</div></div></div><div id='cfg-moveEditorOnEnter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-cfg-moveEditorOnEnter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-cfg-moveEditorOnEnter' class='name expandable'>moveEditorOnEnter</a><span> : Boolean</span></div><div class='description'><div class='short'>false to turn off moving the editor to the next row down when the enter key is pressed\nor the next row up when shift ...</div><div class='long'><p><tt>false</tt> to turn off moving the editor to the next row down when the enter key is pressed\nor the next row up when shift + enter keys are pressed.</p>\n</div></div></div><div id='cfg-singleSelect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-cfg-singleSelect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-cfg-singleSelect' class='name expandable'>singleSelect</a><span> : Boolean</span></div><div class='description'><div class='short'>true to allow selection of only one row at a time (defaults to false\nallowing multiple selections) ...</div><div class='long'><p><tt>true</tt> to allow selection of only one row at a time (defaults to <tt>false</tt>\nallowing multiple selections)</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-grid' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.AbstractSelectionModel' rel='Ext.grid.AbstractSelectionModel' class='defined-in docClass'>Ext.grid.AbstractSelectionModel</a><br/><a href='source/AbstractSelectionModel.html#Ext-grid-AbstractSelectionModel-property-grid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.AbstractSelectionModel-property-grid' class='name expandable'>grid</a><span> : Object</span></div><div class='description'><div class='short'>The GridPanel for which this SelectionModel is handling selection. ...</div><div class='long'><p>The GridPanel for which this SelectionModel is handling selection. Read-only.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.grid.RowSelectionModel-method-constructor' class='name expandable'>Ext.grid.RowSelectionModel</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.grid.RowSelectionModel\" rel=\"Ext.grid.RowSelectionModel\" class=\"docClass\">Ext.grid.RowSelectionModel</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.grid.RowSelectionModel\" rel=\"Ext.grid.RowSelectionModel\" class=\"docClass\">Ext.grid.RowSelectionModel</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.grid.AbstractSelectionModel-method-constructor' rel='Ext.grid.AbstractSelectionModel-method-constructor' class='docClass'>Ext.grid.AbstractSelectionModel.constructor</a></p></div></div></div><div id='method-acceptsNav' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-acceptsNav' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-acceptsNav' class='name expandable'>acceptsNav</a>( <span class='pre'>row, col, cm</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>col</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cm</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-addEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-addEvents' class='name expandable'>addEvents</a>( <span class='pre'>o, Optional</span> )</div><div class='description'><div class='short'>Adds the specified events to the list of events which this Observable may fire. ...</div><div class='long'><p>Adds the specified events to the list of events which this Observable may fire.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Either an object with event names as properties with a value of <code>true</code>\nor the first event name string if multiple event names are being passed as separate parameters.</p>\n</div></li><li><span class='pre'>Optional</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a><div class='sub-desc'><p>. Event name if multiple event names are being passed as separate parameters.\nUsage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n\n</div></li></ul></div></div></div><div id='method-addListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-addListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-addListener' class='name expandable'>addListener</a>( <span class='pre'>eventName, handler, [scope], [options]</span> )</div><div class='description'><div class='short'>Appends an event handler to this object. ...</div><div class='long'><p>Appends an event handler to this object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to listen for.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The method the event invokes.</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An object containing handler configuration.\nproperties. This may contain any of the following properties:<ul>\n<li><b>scope</b> : Object<div class=\"sub-desc\">The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></div></li>\n<li><b>delay</b> : Number<div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after the event fires.</div></li>\n<li><b>single</b> : Boolean<div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li><b>buffer</b> : Number<div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#!/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n<li><b>target</b> : Observable<div class=\"sub-desc\">Only call the handler if the event was fired on the target Observable, <i>not</i>\nif the event was bubbled up from a child Observable.</div></li>\n</ul><br></p>\n\n<p>\n<b>Combining Options</b><br>\nUsing the options argument, it is possible to combine different types of listeners:<br>\n<br>\nA delayed, one-time listener.\n<pre><code>myDataView.on('click', this.onClick, this, {\nsingle: true,\ndelay: 100\n});</code></pre>\n<p>\n<b>Attaching multiple handlers in 1 call</b><br>\nThe method also allows for a single argument to be passed which is a config object containing properties\nwhich specify multiple handlers.\n<p>\n<pre><code>myGridPanel.on({\n'click' : {\n    fn: this.onClick,\n    scope: this,\n    delay: 100\n},\n'mouseover' : {\n    fn: this.onMouseOver,\n    scope: this\n},\n'mouseout' : {\n    fn: this.onMouseOut,\n    scope: this\n}\n});</code></pre>\n<p>\nOr a shorthand syntax:<br>\n<pre><code>myGridPanel.on({\n'click' : this.onClick,\n'mouseover' : this.onMouseOver,\n'mouseout' : this.onMouseOut,\n scope: this\n});</code></pre>\n\n</p></p></p></p></div></li></ul></div></div></div><div id='method-clearSelections' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-clearSelections' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-clearSelections' class='name expandable'>clearSelections</a>( <span class='pre'>[fast]</span> )</div><div class='description'><div class='short'>Clears all selections if the selection model\nis not locked. ...</div><div class='long'><p>Clears all selections if the selection model\n<a href=\"#!/api/Ext.grid.AbstractSelectionModel-method-isLocked\" rel=\"Ext.grid.AbstractSelectionModel-method-isLocked\" class=\"docClass\">is not locked</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fast</span> : Boolean (optional)<div class='sub-desc'><p><tt>true</tt> to bypass the\nconditional checks and events described in <a href=\"#!/api/Ext.grid.RowSelectionModel-method-deselectRow\" rel=\"Ext.grid.RowSelectionModel-method-deselectRow\" class=\"docClass\">deselectRow</a>.</p>\n</div></li></ul></div></div></div><div id='method-deselectRange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-deselectRange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-deselectRange' class='name expandable'>deselectRange</a>( <span class='pre'>startRow, endRow</span> )</div><div class='description'><div class='short'>Deselects a range of rows if the selection model\nis not locked. ...</div><div class='long'><p>Deselects a range of rows if the selection model\n<a href=\"#!/api/Ext.grid.AbstractSelectionModel-method-isLocked\" rel=\"Ext.grid.AbstractSelectionModel-method-isLocked\" class=\"docClass\">is not locked</a>.<br/>\nAll rows in between startRow and endRow are also deselected.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>startRow</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of the first row in the range</p>\n</div></li><li><span class='pre'>endRow</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of the last row in the range</p>\n</div></li></ul></div></div></div><div id='method-deselectRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-deselectRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-deselectRow' class='name expandable'>deselectRow</a>( <span class='pre'>row, [preventViewNotify]</span> )</div><div class='description'><div class='short'>Deselects a row. ...</div><div class='long'><p>Deselects a row.  Before deselecting a row, checks if the selection model\n<a href=\"#!/api/Ext.grid.AbstractSelectionModel-method-isLocked\" rel=\"Ext.grid.AbstractSelectionModel-method-isLocked\" class=\"docClass\">is locked</a>.\nIf this check is satisfied the row will be deselected and followed up by\nfiring the <a href=\"#!/api/Ext.grid.RowSelectionModel-event-rowdeselect\" rel=\"Ext.grid.RowSelectionModel-event-rowdeselect\" class=\"docClass\">rowdeselect</a> and <a href=\"#!/api/Ext.grid.RowSelectionModel-event-selectionchange\" rel=\"Ext.grid.RowSelectionModel-event-selectionchange\" class=\"docClass\">selectionchange</a> events.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of the row to deselect</p>\n</div></li><li><span class='pre'>preventViewNotify</span> : Boolean (optional)<div class='sub-desc'><p>Specify <tt>true</tt> to\nprevent notifying the view (disables updating the selected appearance)</p>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Overrides: <a href='#!/api/Ext.grid.AbstractSelectionModel-method-destroy' rel='Ext.grid.AbstractSelectionModel-method-destroy' class='docClass'>Ext.grid.AbstractSelectionModel.destroy</a></p></div></div></div><div id='method-each' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-each' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-each' class='name expandable'>each</a>( <span class='pre'>fn, [scope]</span> ) : Boolean</div><div class='description'><div class='short'>Calls the passed function with each selection. ...</div><div class='long'><p>Calls the passed function with each selection. If the function returns\n<tt>false</tt>, iteration is stopped and this function returns\n<tt>false</tt>. Otherwise it returns <tt>true</tt>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The function to call upon each iteration. It is passed the selected <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Record</a>.</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the function is executed. Defaults to this RowSelectionModel.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if all selections were iterated</p>\n</div></li></ul></div></div></div><div id='method-enableBubble' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable-more.html#Ext-util-Observable-method-enableBubble' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-enableBubble' class='name expandable'>enableBubble</a>( <span class='pre'>events</span> )</div><div class='description'><div class='short'>Enables events fired by this Observable to bubble up an owner hierarchy by calling\nthis.getBubbleTarget() if present. ...</div><div class='long'><p>Enables events fired by this Observable to bubble up an owner hierarchy by calling\n<code>this.getBubbleTarget()</code> if present. There is no implementation in the Observable base class.</p>\n\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers. See Ext.Component.getBubbleTarget. The default\nimplementation in <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the Component's immediate owner. But if a known target is required, this can be overridden to\naccess the required target more quickly.</p>\n\n\n<p>Example:</p>\n\n\n<pre><code><a href=\"#!/api/Ext-method-override\" rel=\"Ext-method-override\" class=\"docClass\">Ext.override</a>(<a href=\"#!/api/Ext.form.Field\" rel=\"Ext.form.Field\" class=\"docClass\">Ext.form.Field</a>, {\n    //  Add functionality to Field&#39;s initComponent to enable the change event to bubble\n    initComponent : Ext.form.Field.prototype.initComponent.createSequence(function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field&#39;s events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>events</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The event name to bubble, or an Array of event names.</p>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>eventName, args</span> ) : Boolean</div><div class='description'><div class='short'>Fires the specified event with the passed parameters (minus the event name). ...</div><div class='long'><p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#!/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#!/api/Ext.util.Observable-method-enableBubble\" rel=\"Ext.util.Observable-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to fire.</p>\n</div></li><li><span class='pre'>args</span> : Object...<div class='sub-desc'><p>Variable number of parameters are passed to handlers.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>returns false if any of the handlers return false otherwise it returns true.</p>\n</div></li></ul></div></div></div><div id='method-getCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-getCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-getCount' class='name expandable'>getCount</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Gets the number of selected rows. ...</div><div class='long'><p>Gets the number of selected rows.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSelected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-getSelected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-getSelected' class='name expandable'>getSelected</a>( <span class='pre'></span> ) : Record</div><div class='description'><div class='short'>Returns the first selected record. ...</div><div class='long'><p>Returns the first selected record.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Record</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSelections' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-getSelections' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-getSelections' class='name expandable'>getSelections</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></div><div class='description'><div class='short'>Returns the selected records ...</div><div class='long'><p>Returns the selected records</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>Array of selected records</p>\n</div></li></ul></div></div></div><div id='method-handleMouseDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-handleMouseDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-handleMouseDown' class='name expandable'>handleMouseDown</a>( <span class='pre'>g, rowIndex, e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>g</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>rowIndex</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-hasListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-hasListener' class='name expandable'>hasListener</a>( <span class='pre'>eventName</span> ) : Boolean</div><div class='description'><div class='short'>Checks to see if this object has any listeners for a specified event ...</div><div class='long'><p>Checks to see if this object has any listeners for a specified event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to check for</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the event is being listened for, else false</p>\n</div></li></ul></div></div></div><div id='method-hasNext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-hasNext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-hasNext' class='name expandable'>hasNext</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns true if there is a next record to select ...</div><div class='long'><p>Returns true if there is a next record to select</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasPrevious' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-hasPrevious' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-hasPrevious' class='name expandable'>hasPrevious</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns true if there is a previous record to select ...</div><div class='long'><p>Returns true if there is a previous record to select</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasSelection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-hasSelection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-hasSelection' class='name expandable'>hasSelection</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns true if there is a selection. ...</div><div class='long'><p>Returns <tt>true</tt> if there is a selection.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-initEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-initEvents' class='name expandable'>initEvents</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-isIdSelected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-isIdSelected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-isIdSelected' class='name expandable'>isIdSelected</a>( <span class='pre'>id</span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the specified record id is selected. ...</div><div class='long'><p>Returns <tt>true</tt> if the specified record id is selected.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The id of record to check</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isLocked' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.AbstractSelectionModel' rel='Ext.grid.AbstractSelectionModel' class='defined-in docClass'>Ext.grid.AbstractSelectionModel</a><br/><a href='source/AbstractSelectionModel.html#Ext-grid-AbstractSelectionModel-method-isLocked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.AbstractSelectionModel-method-isLocked' class='name expandable'>isLocked</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the selections are locked. ...</div><div class='long'><p>Returns true if the selections are locked.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isSelected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-isSelected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-isSelected' class='name expandable'>isSelected</a>( <span class='pre'>index</span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the specified row is selected. ...</div><div class='long'><p>Returns <tt>true</tt> if the specified row is selected.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number/Record<div class='sub-desc'><p>The record or index of the record to check</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-lock' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.AbstractSelectionModel' rel='Ext.grid.AbstractSelectionModel' class='defined-in docClass'>Ext.grid.AbstractSelectionModel</a><br/><a href='source/AbstractSelectionModel.html#Ext-grid-AbstractSelectionModel-method-lock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.AbstractSelectionModel-method-lock' class='name expandable'>lock</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Locks the selections. ...</div><div class='long'><p>Locks the selections.</p>\n</div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-on' class='name expandable'>on</a>( <span class='pre'>eventName, handler, [scope], [options]</span> )</div><div class='description'><div class='short'>Appends an event handler to this object (shorthand for addListener.) ...</div><div class='long'><p>Appends an event handler to this object (shorthand for <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event to listen for</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The method the event invokes</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An object containing handler configuration.</p>\n</div></li></ul></div></div></div><div id='method-onEditorKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-onEditorKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-onEditorKey' class='name expandable'>onEditorKey</a>( <span class='pre'>field, e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onEditorSelect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-onEditorSelect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-onEditorSelect' class='name expandable'>onEditorSelect</a>( <span class='pre'>row, lastRow</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>lastRow</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onKeyPress' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-onKeyPress' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-onKeyPress' class='name expandable'>onKeyPress</a>( <span class='pre'>e, name</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRefresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-onRefresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-onRefresh' class='name expandable'>onRefresh</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-onRemove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-onRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-onRemove' class='name expandable'>onRemove</a>( <span class='pre'>v, index, r</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>r</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRowUpdated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-onRowUpdated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-onRowUpdated' class='name expandable'>onRowUpdated</a>( <span class='pre'>v, index, r</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>r</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-purgeListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-purgeListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-purgeListeners' class='name expandable'>purgeListeners</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Removes all listeners for this object ...</div><div class='long'><p>Removes all listeners for this object</p>\n</div></div></div><div id='method-relayEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable-more.html#Ext-util-Observable-method-relayEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-relayEvents' class='name expandable'>relayEvents</a>( <span class='pre'>o, events</span> )</div><div class='description'><div class='short'>Relays selected events from the specified Observable as if the events were fired by this. ...</div><div class='long'><p>Relays selected events from the specified Observable as if the events were fired by <tt><b>this</b></tt>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>The Observable whose events this object is to relay.</p>\n</div></li><li><span class='pre'>events</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>Array of event names to relay.</p>\n</div></li></ul></div></div></div><div id='method-removeListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-removeListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-removeListener' class='name expandable'>removeListener</a>( <span class='pre'>eventName, handler, [scope]</span> )</div><div class='description'><div class='short'>Removes an event handler. ...</div><div class='long'><p>Removes an event handler.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event the handler was associated with.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope originally specified for the handler.</p>\n</div></li></ul></div></div></div><div id='method-resumeEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-resumeEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-resumeEvents' class='name expandable'>resumeEvents</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Resume firing events. ...</div><div class='long'><p>Resume firing events. (see <a href=\"#!/api/Ext.util.Observable-method-suspendEvents\" rel=\"Ext.util.Observable-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <tt><b>queueSuspended</b></tt> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n</div></div></div><div id='method-selectAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-selectAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-selectAll' class='name expandable'>selectAll</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Selects all rows if the selection model\nis not locked. ...</div><div class='long'><p>Selects all rows if the selection model\n<a href=\"#!/api/Ext.grid.AbstractSelectionModel-method-isLocked\" rel=\"Ext.grid.AbstractSelectionModel-method-isLocked\" class=\"docClass\">is not locked</a>.</p>\n</div></div></div><div id='method-selectFirstRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-selectFirstRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-selectFirstRow' class='name expandable'>selectFirstRow</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Selects the first row in the grid. ...</div><div class='long'><p>Selects the first row in the grid.</p>\n</div></div></div><div id='method-selectLastRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-selectLastRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-selectLastRow' class='name expandable'>selectLastRow</a>( <span class='pre'>[keepExisting]</span> )</div><div class='description'><div class='short'>Select the last row. ...</div><div class='long'><p>Select the last row.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>keepExisting</span> : Boolean (optional)<div class='sub-desc'><p><tt>true</tt> to keep existing selections</p>\n</div></li></ul></div></div></div><div id='method-selectNext' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-selectNext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-selectNext' class='name expandable'>selectNext</a>( <span class='pre'>[keepExisting]</span> ) : Boolean</div><div class='description'><div class='short'>Selects the row immediately following the last selected row. ...</div><div class='long'><p>Selects the row immediately following the last selected row.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>keepExisting</span> : Boolean (optional)<div class='sub-desc'><p><tt>true</tt> to keep existing selections</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><tt>true</tt> if there is a next row, else <tt>false</tt></p>\n</div></li></ul></div></div></div><div id='method-selectPrevious' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-selectPrevious' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-selectPrevious' class='name expandable'>selectPrevious</a>( <span class='pre'>[keepExisting]</span> ) : Boolean</div><div class='description'><div class='short'>Selects the row that precedes the last selected row. ...</div><div class='long'><p>Selects the row that precedes the last selected row.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>keepExisting</span> : Boolean (optional)<div class='sub-desc'><p><tt>true</tt> to keep existing selections</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><tt>true</tt> if there is a previous row, else <tt>false</tt></p>\n</div></li></ul></div></div></div><div id='method-selectRange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-selectRange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-selectRange' class='name expandable'>selectRange</a>( <span class='pre'>startRow, endRow, [keepExisting]</span> )</div><div class='description'><div class='short'>Selects a range of rows if the selection model\nis not locked. ...</div><div class='long'><p>Selects a range of rows if the selection model\n<a href=\"#!/api/Ext.grid.AbstractSelectionModel-method-isLocked\" rel=\"Ext.grid.AbstractSelectionModel-method-isLocked\" class=\"docClass\">is not locked</a>.\nAll rows in between startRow and endRow are also selected.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>startRow</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of the first row in the range</p>\n</div></li><li><span class='pre'>endRow</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of the last row in the range</p>\n</div></li><li><span class='pre'>keepExisting</span> : Boolean (optional)<div class='sub-desc'><p>True to retain existing selections</p>\n</div></li></ul></div></div></div><div id='method-selectRecords' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-selectRecords' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-selectRecords' class='name expandable'>selectRecords</a>( <span class='pre'>records, [keepExisting]</span> )</div><div class='description'><div class='short'>Select records. ...</div><div class='long'><p>Select records.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>records</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The records to select</p>\n</div></li><li><span class='pre'>keepExisting</span> : Boolean (optional)<div class='sub-desc'><p><tt>true</tt> to keep existing selections</p>\n</div></li></ul></div></div></div><div id='method-selectRow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-selectRow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-selectRow' class='name expandable'>selectRow</a>( <span class='pre'>row, [keepExisting], [preventViewNotify]</span> )</div><div class='description'><div class='short'>Selects a row. ...</div><div class='long'><p>Selects a row.  Before selecting a row, checks if the selection model\n<a href=\"#!/api/Ext.grid.AbstractSelectionModel-method-isLocked\" rel=\"Ext.grid.AbstractSelectionModel-method-isLocked\" class=\"docClass\">is locked</a> and fires the\n<a href=\"#!/api/Ext.grid.RowSelectionModel-event-beforerowselect\" rel=\"Ext.grid.RowSelectionModel-event-beforerowselect\" class=\"docClass\">beforerowselect</a> event.  If these checks are satisfied the row\nwill be selected and followed up by  firing the <a href=\"#!/api/Ext.grid.RowSelectionModel-event-rowselect\" rel=\"Ext.grid.RowSelectionModel-event-rowselect\" class=\"docClass\">rowselect</a> and\n<a href=\"#!/api/Ext.grid.RowSelectionModel-event-selectionchange\" rel=\"Ext.grid.RowSelectionModel-event-selectionchange\" class=\"docClass\">selectionchange</a> events.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of the row to select</p>\n</div></li><li><span class='pre'>keepExisting</span> : Boolean (optional)<div class='sub-desc'><p><tt>true</tt> to keep existing selections</p>\n</div></li><li><span class='pre'>preventViewNotify</span> : Boolean (optional)<div class='sub-desc'><p>Specify <tt>true</tt> to\nprevent notifying the view (disables updating the selected appearance)</p>\n</div></li></ul></div></div></div><div id='method-selectRows' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-method-selectRows' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-method-selectRows' class='name expandable'>selectRows</a>( <span class='pre'>rows, [keepExisting]</span> )</div><div class='description'><div class='short'>Selects multiple rows. ...</div><div class='long'><p>Selects multiple rows.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rows</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>Array of the indexes of the row to select</p>\n</div></li><li><span class='pre'>keepExisting</span> : Boolean (optional)<div class='sub-desc'><p><tt>true</tt> to keep\nexisting selections (defaults to <tt>false</tt>)</p>\n</div></li></ul></div></div></div><div id='method-sortLock' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.AbstractSelectionModel' rel='Ext.grid.AbstractSelectionModel' class='defined-in docClass'>Ext.grid.AbstractSelectionModel</a><br/><a href='source/AbstractSelectionModel.html#Ext-grid-AbstractSelectionModel-method-sortLock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.AbstractSelectionModel-method-sortLock' class='name expandable'>sortLock</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>set the lock states before and after a view refresh ...</div><div class='long'><p>set the lock states before and after a view refresh</p>\n</div></div></div><div id='method-sortUnLock' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.AbstractSelectionModel' rel='Ext.grid.AbstractSelectionModel' class='defined-in docClass'>Ext.grid.AbstractSelectionModel</a><br/><a href='source/AbstractSelectionModel.html#Ext-grid-AbstractSelectionModel-method-sortUnLock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.AbstractSelectionModel-method-sortUnLock' class='name expandable'>sortUnLock</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>set the lock states before and after a view refresh ...</div><div class='long'><p>set the lock states before and after a view refresh</p>\n</div></div></div><div id='method-suspendEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-suspendEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-suspendEvents' class='name expandable'>suspendEvents</a>( <span class='pre'>queueSuspended</span> )</div><div class='description'><div class='short'>Suspend the firing of all events. ...</div><div class='long'><p>Suspend the firing of all events. (see <a href=\"#!/api/Ext.util.Observable-method-resumeEvents\" rel=\"Ext.util.Observable-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>queueSuspended</span> : Boolean<div class='sub-desc'><p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#!/api/Ext.util.Observable-method-resumeEvents\" rel=\"Ext.util.Observable-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n</div></li></ul></div></div></div><div id='method-un' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-un' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-un' class='name expandable'>un</a>( <span class='pre'>eventName, handler, [scope]</span> )</div><div class='description'><div class='short'>Removes an event handler (shorthand for removeListener.) ...</div><div class='long'><p>Removes an event handler (shorthand for <a href=\"#!/api/Ext.util.Observable-method-removeListener\" rel=\"Ext.util.Observable-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event the handler was associated with.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope originally specified for the handler.</p>\n</div></li></ul></div></div></div><div id='method-unlock' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.AbstractSelectionModel' rel='Ext.grid.AbstractSelectionModel' class='defined-in docClass'>Ext.grid.AbstractSelectionModel</a><br/><a href='source/AbstractSelectionModel.html#Ext-grid-AbstractSelectionModel-method-unlock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.AbstractSelectionModel-method-unlock' class='name expandable'>unlock</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Unlocks the selections. ...</div><div class='long'><p>Unlocks the selections.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-beforerowselect' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-event-beforerowselect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-event-beforerowselect' class='name expandable'>beforerowselect</a>( <span class='pre'>this, rowIndex, keepExisting, record</span> )</div><div class='description'><div class='short'>Fires before a row is selected, return false to cancel the selection. ...</div><div class='long'><p>Fires before a row is selected, return false to cancel the selection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : SelectionModel<div class='sub-desc'>\n</div></li><li><span class='pre'>rowIndex</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index to be selected</p>\n</div></li><li><span class='pre'>keepExisting</span> : Boolean<div class='sub-desc'><p>False if other selections will be cleared</p>\n</div></li><li><span class='pre'>record</span> : Record<div class='sub-desc'><p>The record to be selected</p>\n</div></li></ul></div></div></div><div id='event-rowdeselect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-event-rowdeselect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-event-rowdeselect' class='name expandable'>rowdeselect</a>( <span class='pre'>this, rowIndex, record</span> )</div><div class='description'><div class='short'>Fires when a row is deselected. ...</div><div class='long'><p>Fires when a row is deselected.  To prevent deselection\n<a href=\"#!/api/Ext.grid.AbstractSelectionModel-method-lock\" rel=\"Ext.grid.AbstractSelectionModel-method-lock\" class=\"docClass\">lock the selections</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : SelectionModel<div class='sub-desc'>\n</div></li><li><span class='pre'>rowIndex</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'>\n</div></li><li><span class='pre'>record</span> : Record<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='event-rowselect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-event-rowselect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-event-rowselect' class='name expandable'>rowselect</a>( <span class='pre'>this, rowIndex, r</span> )</div><div class='description'><div class='short'>Fires when a row is selected. ...</div><div class='long'><p>Fires when a row is selected.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : SelectionModel<div class='sub-desc'>\n</div></li><li><span class='pre'>rowIndex</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The selected index</p>\n</div></li><li><span class='pre'>r</span> : <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a><div class='sub-desc'><p>The selected record</p>\n</div></li></ul></div></div></div><div id='event-selectionchange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.RowSelectionModel'>Ext.grid.RowSelectionModel</span><br/><a href='source/RowSelectionModel.html#Ext-grid-RowSelectionModel-event-selectionchange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.RowSelectionModel-event-selectionchange' class='name expandable'>selectionchange</a>( <span class='pre'>this</span> )</div><div class='description'><div class='short'>Fires when the selection changes ...</div><div class='long'><p>Fires when the selection changes</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : SelectionModel<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>",
    "superclasses": ["Ext.util.Observable", "Ext.grid.AbstractSelectionModel"],
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
        "href": "RowSelectionModel.html#Ext-grid-RowSelectionModel",
        "filename": "RowSelectionModel.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.grid.AbstractSelectionModel",
            "meta": {},
            "name": "grid",
            "id": "property-grid"
        }],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "listeners",
            "id": "cfg-listeners"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "moveEditorOnEnter",
            "id": "cfg-moveEditorOnEnter"
        }, {
            "tagname": "cfg",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "singleSelect",
            "id": "cfg-singleSelect"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {
                "private": true
            },
            "name": "acceptsNav",
            "id": "method-acceptsNav"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "addEvents",
            "id": "method-addEvents"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "addListener",
            "id": "method-addListener"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "clearSelections",
            "id": "method-clearSelections"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "deselectRange",
            "id": "method-deselectRange"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "deselectRow",
            "id": "method-deselectRow"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {
                "private": true
            },
            "name": "destroy",
            "id": "method-destroy"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "each",
            "id": "method-each"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "enableBubble",
            "id": "method-enableBubble"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "fireEvent",
            "id": "method-fireEvent"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "getCount",
            "id": "method-getCount"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "getSelected",
            "id": "method-getSelected"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "getSelections",
            "id": "method-getSelections"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {
                "private": true
            },
            "name": "handleMouseDown",
            "id": "method-handleMouseDown"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "hasListener",
            "id": "method-hasListener"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "hasNext",
            "id": "method-hasNext"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "hasPrevious",
            "id": "method-hasPrevious"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "hasSelection",
            "id": "method-hasSelection"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {
                "private": true
            },
            "name": "initEvents",
            "id": "method-initEvents"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "isIdSelected",
            "id": "method-isIdSelected"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.AbstractSelectionModel",
            "meta": {},
            "name": "isLocked",
            "id": "method-isLocked"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "isSelected",
            "id": "method-isSelected"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.AbstractSelectionModel",
            "meta": {},
            "name": "lock",
            "id": "method-lock"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "on",
            "id": "method-on"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {
                "private": true
            },
            "name": "onEditorKey",
            "id": "method-onEditorKey"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {
                "private": true
            },
            "name": "onEditorSelect",
            "id": "method-onEditorSelect"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {
                "private": true
            },
            "name": "onKeyPress",
            "id": "method-onKeyPress"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {
                "private": true
            },
            "name": "onRefresh",
            "id": "method-onRefresh"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {
                "private": true
            },
            "name": "onRemove",
            "id": "method-onRemove"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {
                "private": true
            },
            "name": "onRowUpdated",
            "id": "method-onRowUpdated"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "purgeListeners",
            "id": "method-purgeListeners"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "relayEvents",
            "id": "method-relayEvents"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "removeListener",
            "id": "method-removeListener"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "resumeEvents",
            "id": "method-resumeEvents"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "selectAll",
            "id": "method-selectAll"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "selectFirstRow",
            "id": "method-selectFirstRow"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "selectLastRow",
            "id": "method-selectLastRow"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "selectNext",
            "id": "method-selectNext"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "selectPrevious",
            "id": "method-selectPrevious"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "selectRange",
            "id": "method-selectRange"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "selectRecords",
            "id": "method-selectRecords"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "selectRow",
            "id": "method-selectRow"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "selectRows",
            "id": "method-selectRows"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.AbstractSelectionModel",
            "meta": {
                "private": true
            },
            "name": "sortLock",
            "id": "method-sortLock"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.AbstractSelectionModel",
            "meta": {
                "private": true
            },
            "name": "sortUnLock",
            "id": "method-sortUnLock"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "suspendEvents",
            "id": "method-suspendEvents"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "un",
            "id": "method-un"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.AbstractSelectionModel",
            "meta": {},
            "name": "unlock",
            "id": "method-unlock"
        }],
        "event": [{
            "tagname": "event",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "beforerowselect",
            "id": "event-beforerowselect"
        }, {
            "tagname": "event",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "rowdeselect",
            "id": "event-rowdeselect"
        }, {
            "tagname": "event",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "rowselect",
            "id": "event-rowselect"
        }, {
            "tagname": "event",
            "owner": "Ext.grid.RowSelectionModel",
            "meta": {},
            "name": "selectionchange",
            "id": "event-selectionchange"
        }],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.grid.RowSelectionModel",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.grid.RowSelectionModel",
    "mixins": [],
    "mixedInto": []
});