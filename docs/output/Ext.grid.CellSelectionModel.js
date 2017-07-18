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
Ext.data.JsonP.Ext_grid_CellSelectionModel({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": "Ext.grid.AbstractSelectionModel",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='docClass'>Ext.util.Observable</a><div class='subclass '><a href='#!/api/Ext.grid.AbstractSelectionModel' rel='Ext.grid.AbstractSelectionModel' class='docClass'>Ext.grid.AbstractSelectionModel</a><div class='subclass '><strong>Ext.grid.CellSelectionModel</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/CellSelectionModel.html#Ext-grid-CellSelectionModel' target='_blank'>CellSelectionModel.js</a></div></pre><div class='doc-contents'><p>This class provides the basic implementation for <i>single</i> <b>cell</b> selection in a grid.\nThe object stored as the selection contains the following properties:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>cell</b> : see <a href=\"#!/api/Ext.grid.CellSelectionModel-method-getSelectedCell\" rel=\"Ext.grid.CellSelectionModel-method-getSelectedCell\" class=\"docClass\">getSelectedCell</a> \n<li><b>record</b> : Ext.data.record The <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Record</a>\nwhich provides the data for the row containing the selection</li>\n</ul></div>\n\n</li></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-listeners' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-cfg-listeners' class='name expandable'>listeners</a><span> : Object</span></div><div class='description'><div class='short'>(optional) A config object containing one or more event handlers to be added to this\nobject during initialization. ...</div><div class='long'><p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#!/api/Ext.DataView\" rel=\"Ext.DataView\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#!/api/Ext.DataView-event-click\" rel=\"Ext.DataView-event-click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a Component's HTMLElement, listeners must be added to the <i><a href=\"#!/api/Ext.Component-method-getEl\" rel=\"Ext.Component-method-getEl\" class=\"docClass\">Element</a></i> after the Component\nhas been rendered. A plugin can simplify this step:</p>\n\n<pre><code>// Plugin is configured with a listeners config object.\n// The Component is appended to the argument list of all handler functions.\nExt.DomObserver = <a href=\"#!/api/Ext-method-extend\" rel=\"Ext-method-extend\" class=\"docClass\">Ext.extend</a>(Object, {\n    constructor: function(config) {\n        this.listeners = config.listeners ? config.listeners : config;\n    },\n\n    // Component passes itself into plugin&#39;s init method\n    init: function(c) {\n        var p, l = this.listeners;\n        for (p in l) {\n            if (<a href=\"#!/api/Ext-method-isFunction\" rel=\"Ext-method-isFunction\" class=\"docClass\">Ext.isFunction</a>(l[p])) {\n                l[p] = this.createHandler(l[p], c);\n            } else {\n                l[p].fn = this.createHandler(l[p].fn, c);\n            }\n        }\n\n        // Add the listeners to the Element immediately following the render call\n        c.render = c.render.<a href=\"#!/api/Function-method-createSequence\" rel=\"Function-method-createSequence\" class=\"docClass\">createSequence</a>(function() {\n            var e = c.getEl();\n            if (e) {\n                e.on(l);\n            }\n        });\n    },\n\n    createHandler: function(fn, c) {\n        return function(e) {\n            fn.call(this, e, c);\n        };\n    }\n});\n\nvar combo = new <a href=\"#!/api/Ext.form.ComboBox\" rel=\"Ext.form.ComboBox\" class=\"docClass\">Ext.form.ComboBox</a>({\n\n    // Collapse combo when its element is clicked on\n    plugins: [ new Ext.DomObserver({\n        click: function(evt, comp) {\n            comp.collapse();\n        }\n    })],\n    store: myStore,\n    typeAhead: true,\n    mode: 'local',\n    triggerAction: 'all'\n});\n</code></pre>\n\n\n<p></p></p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-grid' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.AbstractSelectionModel' rel='Ext.grid.AbstractSelectionModel' class='defined-in docClass'>Ext.grid.AbstractSelectionModel</a><br/><a href='source/AbstractSelectionModel.html#Ext-grid-AbstractSelectionModel-property-grid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.AbstractSelectionModel-property-grid' class='name expandable'>grid</a><span> : Object</span></div><div class='description'><div class='short'>The GridPanel for which this SelectionModel is handling selection. ...</div><div class='long'><p>The GridPanel for which this SelectionModel is handling selection. Read-only.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.CellSelectionModel'>Ext.grid.CellSelectionModel</span><br/><a href='source/CellSelectionModel.html#Ext-grid-CellSelectionModel-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.grid.CellSelectionModel-method-constructor' class='name expandable'>Ext.grid.CellSelectionModel</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.grid.CellSelectionModel\" rel=\"Ext.grid.CellSelectionModel\" class=\"docClass\">Ext.grid.CellSelectionModel</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The object containing the configuration of this model.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.grid.CellSelectionModel\" rel=\"Ext.grid.CellSelectionModel\" class=\"docClass\">Ext.grid.CellSelectionModel</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.grid.AbstractSelectionModel-method-constructor' rel='Ext.grid.AbstractSelectionModel-method-constructor' class='docClass'>Ext.grid.AbstractSelectionModel.constructor</a></p></div></div></div><div id='method-acceptsNav' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.CellSelectionModel'>Ext.grid.CellSelectionModel</span><br/><a href='source/CellSelectionModel.html#Ext-grid-CellSelectionModel-method-acceptsNav' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.CellSelectionModel-method-acceptsNav' class='name expandable'>acceptsNav</a>( <span class='pre'>row, col, cm</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>row</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>col</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cm</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-addEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-addEvents' class='name expandable'>addEvents</a>( <span class='pre'>o, Optional</span> )</div><div class='description'><div class='short'>Adds the specified events to the list of events which this Observable may fire. ...</div><div class='long'><p>Adds the specified events to the list of events which this Observable may fire.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Either an object with event names as properties with a value of <code>true</code>\nor the first event name string if multiple event names are being passed as separate parameters.</p>\n</div></li><li><span class='pre'>Optional</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a><div class='sub-desc'><p>. Event name if multiple event names are being passed as separate parameters.\nUsage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n\n</div></li></ul></div></div></div><div id='method-addListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-addListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-addListener' class='name expandable'>addListener</a>( <span class='pre'>eventName, handler, [scope], [options]</span> )</div><div class='description'><div class='short'>Appends an event handler to this object. ...</div><div class='long'><p>Appends an event handler to this object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to listen for.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The method the event invokes.</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An object containing handler configuration.\nproperties. This may contain any of the following properties:<ul>\n<li><b>scope</b> : Object<div class=\"sub-desc\">The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></div></li>\n<li><b>delay</b> : Number<div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after the event fires.</div></li>\n<li><b>single</b> : Boolean<div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li><b>buffer</b> : Number<div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#!/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n<li><b>target</b> : Observable<div class=\"sub-desc\">Only call the handler if the event was fired on the target Observable, <i>not</i>\nif the event was bubbled up from a child Observable.</div></li>\n</ul><br></p>\n\n<p>\n<b>Combining Options</b><br>\nUsing the options argument, it is possible to combine different types of listeners:<br>\n<br>\nA delayed, one-time listener.\n<pre><code>myDataView.on('click', this.onClick, this, {\nsingle: true,\ndelay: 100\n});</code></pre>\n<p>\n<b>Attaching multiple handlers in 1 call</b><br>\nThe method also allows for a single argument to be passed which is a config object containing properties\nwhich specify multiple handlers.\n<p>\n<pre><code>myGridPanel.on({\n'click' : {\n    fn: this.onClick,\n    scope: this,\n    delay: 100\n},\n'mouseover' : {\n    fn: this.onMouseOver,\n    scope: this\n},\n'mouseout' : {\n    fn: this.onMouseOut,\n    scope: this\n}\n});</code></pre>\n<p>\nOr a shorthand syntax:<br>\n<pre><code>myGridPanel.on({\n'click' : this.onClick,\n'mouseover' : this.onMouseOver,\n'mouseout' : this.onMouseOut,\n scope: this\n});</code></pre>\n\n</p></p></p></p></div></li></ul></div></div></div><div id='method-beforeEdit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.CellSelectionModel'>Ext.grid.CellSelectionModel</span><br/><a href='source/CellSelectionModel.html#Ext-grid-CellSelectionModel-method-beforeEdit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.CellSelectionModel-method-beforeEdit' class='name expandable'>beforeEdit</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-clearSelections' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.CellSelectionModel'>Ext.grid.CellSelectionModel</span><br/><a href='source/CellSelectionModel.html#Ext-grid-CellSelectionModel-method-clearSelections' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.CellSelectionModel-method-clearSelections' class='name expandable'>clearSelections</a>( <span class='pre'>preventNotify</span> )</div><div class='description'><div class='short'>If anything is selected, clears all selections and fires the selectionchange event. ...</div><div class='long'><p>If anything is selected, clears all selections and fires the selectionchange event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>preventNotify</span> : Boolean<div class='sub-desc'><p><tt>true</tt> to prevent the gridview from\nbeing notified about the change.</p>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.AbstractSelectionModel' rel='Ext.grid.AbstractSelectionModel' class='defined-in docClass'>Ext.grid.AbstractSelectionModel</a><br/><a href='source/AbstractSelectionModel.html#Ext-grid-AbstractSelectionModel-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.AbstractSelectionModel-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-enableBubble' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable-more.html#Ext-util-Observable-method-enableBubble' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-enableBubble' class='name expandable'>enableBubble</a>( <span class='pre'>events</span> )</div><div class='description'><div class='short'>Enables events fired by this Observable to bubble up an owner hierarchy by calling\nthis.getBubbleTarget() if present. ...</div><div class='long'><p>Enables events fired by this Observable to bubble up an owner hierarchy by calling\n<code>this.getBubbleTarget()</code> if present. There is no implementation in the Observable base class.</p>\n\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers. See Ext.Component.getBubbleTarget. The default\nimplementation in <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the Component's immediate owner. But if a known target is required, this can be overridden to\naccess the required target more quickly.</p>\n\n\n<p>Example:</p>\n\n\n<pre><code><a href=\"#!/api/Ext-method-override\" rel=\"Ext-method-override\" class=\"docClass\">Ext.override</a>(<a href=\"#!/api/Ext.form.Field\" rel=\"Ext.form.Field\" class=\"docClass\">Ext.form.Field</a>, {\n    //  Add functionality to Field&#39;s initComponent to enable the change event to bubble\n    initComponent : Ext.form.Field.prototype.initComponent.createSequence(function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field&#39;s events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>events</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The event name to bubble, or an Array of event names.</p>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>eventName, args</span> ) : Boolean</div><div class='description'><div class='short'>Fires the specified event with the passed parameters (minus the event name). ...</div><div class='long'><p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#!/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#!/api/Ext.util.Observable-method-enableBubble\" rel=\"Ext.util.Observable-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to fire.</p>\n</div></li><li><span class='pre'>args</span> : Object...<div class='sub-desc'><p>Variable number of parameters are passed to handlers.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>returns false if any of the handlers return false otherwise it returns true.</p>\n</div></li></ul></div></div></div><div id='method-getSelectedCell' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.CellSelectionModel'>Ext.grid.CellSelectionModel</span><br/><a href='source/CellSelectionModel.html#Ext-grid-CellSelectionModel-method-getSelectedCell' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.CellSelectionModel-method-getSelectedCell' class='name expandable'>getSelectedCell</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></div><div class='description'><div class='short'>Returns an array containing the row and column indexes of the currently selected cell\n(e.g., [0, 0]), or null if none...</div><div class='long'><p>Returns an array containing the row and column indexes of the currently selected cell\n(e.g., [0, 0]), or null if none selected. The array has elements:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>rowIndex</b> : Number<p class=\"sub-desc\">The index of the selected row</p></li>\n<li><b>cellIndex</b> : Number<p class=\"sub-desc\">The index of the selected cell. \nDue to possible column reordering, the cellIndex should <b>not</b> be used as an\nindex into the Record's data. Instead, use the cellIndex to determine the <i>name</i>\nof the selected cell and use the field name to retrieve the data value from the record:\n<pre><code>// get name\nvar fieldName = grid.getColumnModel().getDataIndex(cellIndex);\n// get data value based on name\nvar data = record.get(fieldName);\n</code></pre></p></li>\n</ul></div>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>An array containing the row and column indexes of the selected cell, or null if none selected.</p>\n</div></li></ul></div></div></div><div id='method-hasListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-hasListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-hasListener' class='name expandable'>hasListener</a>( <span class='pre'>eventName</span> ) : Boolean</div><div class='description'><div class='short'>Checks to see if this object has any listeners for a specified event ...</div><div class='long'><p>Checks to see if this object has any listeners for a specified event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to check for</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the event is being listened for, else false</p>\n</div></li></ul></div></div></div><div id='method-hasSelection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.CellSelectionModel'>Ext.grid.CellSelectionModel</span><br/><a href='source/CellSelectionModel.html#Ext-grid-CellSelectionModel-method-hasSelection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.CellSelectionModel-method-hasSelection' class='name expandable'>hasSelection</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns true if there is a selection. ...</div><div class='long'><p>Returns <tt>true</tt> if there is a selection.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isLocked' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.AbstractSelectionModel' rel='Ext.grid.AbstractSelectionModel' class='defined-in docClass'>Ext.grid.AbstractSelectionModel</a><br/><a href='source/AbstractSelectionModel.html#Ext-grid-AbstractSelectionModel-method-isLocked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.AbstractSelectionModel-method-isLocked' class='name expandable'>isLocked</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the selections are locked. ...</div><div class='long'><p>Returns true if the selections are locked.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isSelectable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.CellSelectionModel'>Ext.grid.CellSelectionModel</span><br/><a href='source/CellSelectionModel.html#Ext-grid-CellSelectionModel-method-isSelectable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.CellSelectionModel-method-isSelectable' class='name expandable'>isSelectable</a>( <span class='pre'>rowIndex, colIndex, cm</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rowIndex</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>colIndex</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cm</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-lock' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.AbstractSelectionModel' rel='Ext.grid.AbstractSelectionModel' class='defined-in docClass'>Ext.grid.AbstractSelectionModel</a><br/><a href='source/AbstractSelectionModel.html#Ext-grid-AbstractSelectionModel-method-lock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.AbstractSelectionModel-method-lock' class='name expandable'>lock</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Locks the selections. ...</div><div class='long'><p>Locks the selections.</p>\n</div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-on' class='name expandable'>on</a>( <span class='pre'>eventName, handler, [scope], [options]</span> )</div><div class='description'><div class='short'>Appends an event handler to this object (shorthand for addListener.) ...</div><div class='long'><p>Appends an event handler to this object (shorthand for <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event to listen for</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The method the event invokes</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An object containing handler configuration.</p>\n</div></li></ul></div></div></div><div id='method-onEditorKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.CellSelectionModel'>Ext.grid.CellSelectionModel</span><br/><a href='source/CellSelectionModel.html#Ext-grid-CellSelectionModel-method-onEditorKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.CellSelectionModel-method-onEditorKey' class='name expandable'>onEditorKey</a>( <span class='pre'>field, e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onRowUpdated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.CellSelectionModel'>Ext.grid.CellSelectionModel</span><br/><a href='source/CellSelectionModel.html#Ext-grid-CellSelectionModel-method-onRowUpdated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.CellSelectionModel-method-onRowUpdated' class='name expandable'>onRowUpdated</a>( <span class='pre'>v, index, r</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>r</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onViewChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.CellSelectionModel'>Ext.grid.CellSelectionModel</span><br/><a href='source/CellSelectionModel.html#Ext-grid-CellSelectionModel-method-onViewChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.CellSelectionModel-method-onViewChange' class='name expandable'>onViewChange</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n</div></div></div><div id='method-purgeListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-purgeListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-purgeListeners' class='name expandable'>purgeListeners</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Removes all listeners for this object ...</div><div class='long'><p>Removes all listeners for this object</p>\n</div></div></div><div id='method-relayEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable-more.html#Ext-util-Observable-method-relayEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-relayEvents' class='name expandable'>relayEvents</a>( <span class='pre'>o, events</span> )</div><div class='description'><div class='short'>Relays selected events from the specified Observable as if the events were fired by this. ...</div><div class='long'><p>Relays selected events from the specified Observable as if the events were fired by <tt><b>this</b></tt>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>The Observable whose events this object is to relay.</p>\n</div></li><li><span class='pre'>events</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>Array of event names to relay.</p>\n</div></li></ul></div></div></div><div id='method-removeListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-removeListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-removeListener' class='name expandable'>removeListener</a>( <span class='pre'>eventName, handler, [scope]</span> )</div><div class='description'><div class='short'>Removes an event handler. ...</div><div class='long'><p>Removes an event handler.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event the handler was associated with.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope originally specified for the handler.</p>\n</div></li></ul></div></div></div><div id='method-resumeEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-resumeEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-resumeEvents' class='name expandable'>resumeEvents</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Resume firing events. ...</div><div class='long'><p>Resume firing events. (see <a href=\"#!/api/Ext.util.Observable-method-suspendEvents\" rel=\"Ext.util.Observable-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <tt><b>queueSuspended</b></tt> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n</div></div></div><div id='method-select' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.CellSelectionModel'>Ext.grid.CellSelectionModel</span><br/><a href='source/CellSelectionModel.html#Ext-grid-CellSelectionModel-method-select' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.CellSelectionModel-method-select' class='name expandable'>select</a>( <span class='pre'>rowIndex, colIndex, [preventViewNotify], [preventFocus], [r]</span> )</div><div class='description'><div class='short'>Selects a cell. ...</div><div class='long'><p>Selects a cell.  Before selecting a cell, fires the\n<a href=\"#!/api/Ext.grid.CellSelectionModel-event-beforecellselect\" rel=\"Ext.grid.CellSelectionModel-event-beforecellselect\" class=\"docClass\">beforecellselect</a> event.  If this check is satisfied the cell\nwill be selected and followed up by  firing the <a href=\"#!/api/Ext.grid.CellSelectionModel-event-cellselect\" rel=\"Ext.grid.CellSelectionModel-event-cellselect\" class=\"docClass\">cellselect</a> and\n<a href=\"#!/api/Ext.grid.CellSelectionModel-event-selectionchange\" rel=\"Ext.grid.CellSelectionModel-event-selectionchange\" class=\"docClass\">selectionchange</a> events.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rowIndex</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of the row to select</p>\n</div></li><li><span class='pre'>colIndex</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The index of the column to select</p>\n</div></li><li><span class='pre'>preventViewNotify</span> : Boolean (optional)<div class='sub-desc'><p>Specify <tt>true</tt> to\nprevent notifying the view (disables updating the selected appearance)</p>\n</div></li><li><span class='pre'>preventFocus</span> : Boolean (optional)<div class='sub-desc'><p>Whether to prevent the cell at\nthe specified rowIndex / colIndex from being focused.</p>\n</div></li><li><span class='pre'>r</span> : <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Ext.data.Record</a> (optional)<div class='sub-desc'><p>The record to select</p>\n</div></li></ul></div></div></div><div id='method-sortLock' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.AbstractSelectionModel' rel='Ext.grid.AbstractSelectionModel' class='defined-in docClass'>Ext.grid.AbstractSelectionModel</a><br/><a href='source/AbstractSelectionModel.html#Ext-grid-AbstractSelectionModel-method-sortLock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.AbstractSelectionModel-method-sortLock' class='name expandable'>sortLock</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>set the lock states before and after a view refresh ...</div><div class='long'><p>set the lock states before and after a view refresh</p>\n</div></div></div><div id='method-sortUnLock' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.AbstractSelectionModel' rel='Ext.grid.AbstractSelectionModel' class='defined-in docClass'>Ext.grid.AbstractSelectionModel</a><br/><a href='source/AbstractSelectionModel.html#Ext-grid-AbstractSelectionModel-method-sortUnLock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.AbstractSelectionModel-method-sortUnLock' class='name expandable'>sortUnLock</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>set the lock states before and after a view refresh ...</div><div class='long'><p>set the lock states before and after a view refresh</p>\n</div></div></div><div id='method-suspendEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-suspendEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-suspendEvents' class='name expandable'>suspendEvents</a>( <span class='pre'>queueSuspended</span> )</div><div class='description'><div class='short'>Suspend the firing of all events. ...</div><div class='long'><p>Suspend the firing of all events. (see <a href=\"#!/api/Ext.util.Observable-method-resumeEvents\" rel=\"Ext.util.Observable-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>queueSuspended</span> : Boolean<div class='sub-desc'><p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#!/api/Ext.util.Observable-method-resumeEvents\" rel=\"Ext.util.Observable-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n</div></li></ul></div></div></div><div id='method-un' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-un' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-un' class='name expandable'>un</a>( <span class='pre'>eventName, handler, [scope]</span> )</div><div class='description'><div class='short'>Removes an event handler (shorthand for removeListener.) ...</div><div class='long'><p>Removes an event handler (shorthand for <a href=\"#!/api/Ext.util.Observable-method-removeListener\" rel=\"Ext.util.Observable-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event the handler was associated with.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope originally specified for the handler.</p>\n</div></li></ul></div></div></div><div id='method-unlock' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.grid.AbstractSelectionModel' rel='Ext.grid.AbstractSelectionModel' class='defined-in docClass'>Ext.grid.AbstractSelectionModel</a><br/><a href='source/AbstractSelectionModel.html#Ext-grid-AbstractSelectionModel-method-unlock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.AbstractSelectionModel-method-unlock' class='name expandable'>unlock</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Unlocks the selections. ...</div><div class='long'><p>Unlocks the selections.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-beforecellselect' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.CellSelectionModel'>Ext.grid.CellSelectionModel</span><br/><a href='source/CellSelectionModel.html#Ext-grid-CellSelectionModel-event-beforecellselect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.CellSelectionModel-event-beforecellselect' class='name expandable'>beforecellselect</a>( <span class='pre'>this, rowIndex, colIndex</span> )</div><div class='description'><div class='short'>Fires before a cell is selected, return false to cancel the selection. ...</div><div class='long'><p>Fires before a cell is selected, return false to cancel the selection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : SelectionModel<div class='sub-desc'>\n</div></li><li><span class='pre'>rowIndex</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The selected row index</p>\n</div></li><li><span class='pre'>colIndex</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The selected cell index</p>\n</div></li></ul></div></div></div><div id='event-cellselect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.CellSelectionModel'>Ext.grid.CellSelectionModel</span><br/><a href='source/CellSelectionModel.html#Ext-grid-CellSelectionModel-event-cellselect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.CellSelectionModel-event-cellselect' class='name expandable'>cellselect</a>( <span class='pre'>this, rowIndex, colIndex</span> )</div><div class='description'><div class='short'>Fires when a cell is selected. ...</div><div class='long'><p>Fires when a cell is selected.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : SelectionModel<div class='sub-desc'>\n</div></li><li><span class='pre'>rowIndex</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The selected row index</p>\n</div></li><li><span class='pre'>colIndex</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The selected cell index</p>\n</div></li></ul></div></div></div><div id='event-selectionchange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.grid.CellSelectionModel'>Ext.grid.CellSelectionModel</span><br/><a href='source/CellSelectionModel.html#Ext-grid-CellSelectionModel-event-selectionchange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.grid.CellSelectionModel-event-selectionchange' class='name expandable'>selectionchange</a>( <span class='pre'>this, selection</span> )</div><div class='description'><div class='short'>Fires when the active selection changes. ...</div><div class='long'><p>Fires when the active selection changes.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : SelectionModel<div class='sub-desc'>\n</div></li><li><span class='pre'>selection</span> : Object<div class='sub-desc'><p>null for no selection or an object with two properties</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>cell</b> : see <a href=\"#!/api/Ext.grid.CellSelectionModel-method-getSelectedCell\" rel=\"Ext.grid.CellSelectionModel-method-getSelectedCell\" class=\"docClass\">getSelectedCell</a> \n<li><b>record</b> : Ext.data.record<p class=\"sub-desc\">The <a href=\"#!/api/Ext.data.Record\" rel=\"Ext.data.Record\" class=\"docClass\">Record</a>\nwhich provides the data for the row containing the selection</p></li>\n</ul></div>\n\n</li></div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "CellSelectionModel.html#Ext-grid-CellSelectionModel",
        "filename": "CellSelectionModel.js"
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
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.grid.CellSelectionModel",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.CellSelectionModel",
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
            "owner": "Ext.grid.CellSelectionModel",
            "meta": {
                "private": true
            },
            "name": "beforeEdit",
            "id": "method-beforeEdit"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.CellSelectionModel",
            "meta": {},
            "name": "clearSelections",
            "id": "method-clearSelections"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.AbstractSelectionModel",
            "meta": {
                "private": true
            },
            "name": "destroy",
            "id": "method-destroy"
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
            "owner": "Ext.grid.CellSelectionModel",
            "meta": {},
            "name": "getSelectedCell",
            "id": "method-getSelectedCell"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "hasListener",
            "id": "method-hasListener"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.CellSelectionModel",
            "meta": {},
            "name": "hasSelection",
            "id": "method-hasSelection"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.AbstractSelectionModel",
            "meta": {},
            "name": "isLocked",
            "id": "method-isLocked"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.CellSelectionModel",
            "meta": {
                "private": true
            },
            "name": "isSelectable",
            "id": "method-isSelectable"
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
            "owner": "Ext.grid.CellSelectionModel",
            "meta": {
                "private": true
            },
            "name": "onEditorKey",
            "id": "method-onEditorKey"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.CellSelectionModel",
            "meta": {
                "private": true
            },
            "name": "onRowUpdated",
            "id": "method-onRowUpdated"
        }, {
            "tagname": "method",
            "owner": "Ext.grid.CellSelectionModel",
            "meta": {
                "private": true
            },
            "name": "onViewChange",
            "id": "method-onViewChange"
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
            "owner": "Ext.grid.CellSelectionModel",
            "meta": {},
            "name": "select",
            "id": "method-select"
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
            "owner": "Ext.grid.CellSelectionModel",
            "meta": {},
            "name": "beforecellselect",
            "id": "event-beforecellselect"
        }, {
            "tagname": "event",
            "owner": "Ext.grid.CellSelectionModel",
            "meta": {},
            "name": "cellselect",
            "id": "event-cellselect"
        }, {
            "tagname": "event",
            "owner": "Ext.grid.CellSelectionModel",
            "meta": {},
            "name": "selectionchange",
            "id": "event-selectionchange"
        }],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.grid.CellSelectionModel",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.grid.CellSelectionModel",
    "mixins": [],
    "mixedInto": []
});