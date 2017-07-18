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
Ext.data.JsonP.Ext_dd_DragTracker({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": "Ext.util.Observable",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='docClass'>Ext.util.Observable</a><div class='subclass '><strong>Ext.dd.DragTracker</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/DragTracker.html#Ext-dd-DragTracker' target='_blank'>DragTracker.js</a></div></pre><div class='doc-contents'><p>A DragTracker listens for drag events on an Element and fires events at the start and end of the drag,\nas well as during the drag. This is useful for components such as <a href=\"#!/api/Ext.slider.MultiSlider\" rel=\"Ext.slider.MultiSlider\" class=\"docClass\">Ext.slider.MultiSlider</a>, where there is\nan element that can be dragged around to change the Slider's value.\nDragTracker provides a series of template methods that should be overridden to provide functionality\nin response to detected drag operations. These are onBeforeStart, onStart, onDrag and onEnd.\nSee <a href=\"#!/api/Ext.slider.MultiSlider\" rel=\"Ext.slider.MultiSlider\" class=\"docClass\">Ext.slider.MultiSlider</a>'s initEvents function for an example implementation.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-active' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-cfg-active' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-cfg-active' class='name expandable'>active</a><span> : Boolean</span></div><div class='description'><div class='short'>Defaults to false. ...</div><div class='long'><p>Defaults to <tt>false</tt>.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-autoStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-cfg-autoStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-cfg-autoStart' class='name expandable'>autoStart</a><span> : Boolean/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Defaults to false. ...</div><div class='long'><p>Defaults to <tt>false</tt>. Specify <tt>true</tt> to defer trigger start by 1000 ms.\nSpecify a Number for the number of milliseconds to defer trigger start.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-listeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-cfg-listeners' class='name expandable'>listeners</a><span> : Object</span></div><div class='description'><div class='short'>(optional) A config object containing one or more event handlers to be added to this\nobject during initialization. ...</div><div class='long'><p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#!/api/Ext.DataView\" rel=\"Ext.DataView\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#!/api/Ext.DataView-event-click\" rel=\"Ext.DataView-event-click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a Component's HTMLElement, listeners must be added to the <i><a href=\"#!/api/Ext.Component-method-getEl\" rel=\"Ext.Component-method-getEl\" class=\"docClass\">Element</a></i> after the Component\nhas been rendered. A plugin can simplify this step:</p>\n\n<pre><code>// Plugin is configured with a listeners config object.\n// The Component is appended to the argument list of all handler functions.\nExt.DomObserver = <a href=\"#!/api/Ext-method-extend\" rel=\"Ext-method-extend\" class=\"docClass\">Ext.extend</a>(Object, {\n    constructor: function(config) {\n        this.listeners = config.listeners ? config.listeners : config;\n    },\n\n    // Component passes itself into plugin&#39;s init method\n    init: function(c) {\n        var p, l = this.listeners;\n        for (p in l) {\n            if (<a href=\"#!/api/Ext-method-isFunction\" rel=\"Ext-method-isFunction\" class=\"docClass\">Ext.isFunction</a>(l[p])) {\n                l[p] = this.createHandler(l[p], c);\n            } else {\n                l[p].fn = this.createHandler(l[p].fn, c);\n            }\n        }\n\n        // Add the listeners to the Element immediately following the render call\n        c.render = c.render.<a href=\"#!/api/Function-method-createSequence\" rel=\"Function-method-createSequence\" class=\"docClass\">createSequence</a>(function() {\n            var e = c.getEl();\n            if (e) {\n                e.on(l);\n            }\n        });\n    },\n\n    createHandler: function(fn, c) {\n        return function(e) {\n            fn.call(this, e, c);\n        };\n    }\n});\n\nvar combo = new <a href=\"#!/api/Ext.form.ComboBox\" rel=\"Ext.form.ComboBox\" class=\"docClass\">Ext.form.ComboBox</a>({\n\n    // Collapse combo when its element is clicked on\n    plugins: [ new Ext.DomObserver({\n        click: function(evt, comp) {\n            comp.collapse();\n        }\n    })],\n    store: myStore,\n    typeAhead: true,\n    mode: 'local',\n    triggerAction: 'all'\n});\n</code></pre>\n\n\n<p></p></p>\n</div></div></div><div id='cfg-tolerance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-cfg-tolerance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-cfg-tolerance' class='name expandable'>tolerance</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Number of pixels the drag target must be moved before dragging is considered to have started. ...</div><div class='long'><p>Number of pixels the drag target must be moved before dragging is considered to have started. Defaults to <tt>5</tt>.</p>\n<p>Defaults to: <code>5</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-constrainModes' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-property-constrainModes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-property-constrainModes' class='name not-expandable'>constrainModes</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.dd.DragTracker-method-constructor' class='name expandable'>Ext.dd.DragTracker</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.dd.DragTracker\" rel=\"Ext.dd.DragTracker\" class=\"docClass\">Ext.dd.DragTracker</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.dd.DragTracker\" rel=\"Ext.dd.DragTracker\" class=\"docClass\">Ext.dd.DragTracker</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-addEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-addEvents' class='name expandable'>addEvents</a>( <span class='pre'>o, Optional</span> )</div><div class='description'><div class='short'>Adds the specified events to the list of events which this Observable may fire. ...</div><div class='long'><p>Adds the specified events to the list of events which this Observable may fire.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Either an object with event names as properties with a value of <code>true</code>\nor the first event name string if multiple event names are being passed as separate parameters.</p>\n</div></li><li><span class='pre'>Optional</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a><div class='sub-desc'><p>. Event name if multiple event names are being passed as separate parameters.\nUsage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n\n</div></li></ul></div></div></div><div id='method-addListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-addListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-addListener' class='name expandable'>addListener</a>( <span class='pre'>eventName, handler, [scope], [options]</span> )</div><div class='description'><div class='short'>Appends an event handler to this object. ...</div><div class='long'><p>Appends an event handler to this object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to listen for.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The method the event invokes.</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An object containing handler configuration.\nproperties. This may contain any of the following properties:<ul>\n<li><b>scope</b> : Object<div class=\"sub-desc\">The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></div></li>\n<li><b>delay</b> : Number<div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after the event fires.</div></li>\n<li><b>single</b> : Boolean<div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li><b>buffer</b> : Number<div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#!/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n<li><b>target</b> : Observable<div class=\"sub-desc\">Only call the handler if the event was fired on the target Observable, <i>not</i>\nif the event was bubbled up from a child Observable.</div></li>\n</ul><br></p>\n\n<p>\n<b>Combining Options</b><br>\nUsing the options argument, it is possible to combine different types of listeners:<br>\n<br>\nA delayed, one-time listener.\n<pre><code>myDataView.on('click', this.onClick, this, {\nsingle: true,\ndelay: 100\n});</code></pre>\n<p>\n<b>Attaching multiple handlers in 1 call</b><br>\nThe method also allows for a single argument to be passed which is a config object containing properties\nwhich specify multiple handlers.\n<p>\n<pre><code>myGridPanel.on({\n'click' : {\n    fn: this.onClick,\n    scope: this,\n    delay: 100\n},\n'mouseover' : {\n    fn: this.onMouseOver,\n    scope: this\n},\n'mouseout' : {\n    fn: this.onMouseOut,\n    scope: this\n}\n});</code></pre>\n<p>\nOr a shorthand syntax:<br>\n<pre><code>myGridPanel.on({\n'click' : this.onClick,\n'mouseover' : this.onMouseOver,\n'mouseout' : this.onMouseOut,\n scope: this\n});</code></pre>\n\n</p></p></p></p></div></li></ul></div></div></div><div id='method-clearStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-clearStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-method-clearStart' class='name expandable'>clearStart</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-enableBubble' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable-more.html#Ext-util-Observable-method-enableBubble' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-enableBubble' class='name expandable'>enableBubble</a>( <span class='pre'>events</span> )</div><div class='description'><div class='short'>Enables events fired by this Observable to bubble up an owner hierarchy by calling\nthis.getBubbleTarget() if present. ...</div><div class='long'><p>Enables events fired by this Observable to bubble up an owner hierarchy by calling\n<code>this.getBubbleTarget()</code> if present. There is no implementation in the Observable base class.</p>\n\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers. See Ext.Component.getBubbleTarget. The default\nimplementation in <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the Component's immediate owner. But if a known target is required, this can be overridden to\naccess the required target more quickly.</p>\n\n\n<p>Example:</p>\n\n\n<pre><code><a href=\"#!/api/Ext-method-override\" rel=\"Ext-method-override\" class=\"docClass\">Ext.override</a>(<a href=\"#!/api/Ext.form.Field\" rel=\"Ext.form.Field\" class=\"docClass\">Ext.form.Field</a>, {\n    //  Add functionality to Field&#39;s initComponent to enable the change event to bubble\n    initComponent : Ext.form.Field.prototype.initComponent.createSequence(function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field&#39;s events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>events</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The event name to bubble, or an Array of event names.</p>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>eventName, args</span> ) : Boolean</div><div class='description'><div class='short'>Fires the specified event with the passed parameters (minus the event name). ...</div><div class='long'><p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#!/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#!/api/Ext.util.Observable-method-enableBubble\" rel=\"Ext.util.Observable-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to fire.</p>\n</div></li><li><span class='pre'>args</span> : Object...<div class='sub-desc'><p>Variable number of parameters are passed to handlers.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>returns false if any of the handlers return false otherwise it returns true.</p>\n</div></li></ul></div></div></div><div id='method-getDragCt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-getDragCt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-method-getDragCt' class='name expandable'>getDragCt</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getDragTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-getDragTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-method-getDragTarget' class='name expandable'>getDragTarget</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Returns the drag target ...</div><div class='long'><p>Returns the drag target</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The element currently being tracked</p>\n</div></li></ul></div></div></div><div id='method-getOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-getOffset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-method-getOffset' class='name expandable'>getOffset</a>( <span class='pre'>constrain</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>constrain</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getXY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-getXY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-method-getXY' class='name expandable'>getXY</a>( <span class='pre'>constrain</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>constrain</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-hasListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-hasListener' class='name expandable'>hasListener</a>( <span class='pre'>eventName</span> ) : Boolean</div><div class='description'><div class='short'>Checks to see if this object has any listeners for a specified event ...</div><div class='long'><p>Checks to see if this object has any listeners for a specified event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to check for</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the event is being listened for, else false</p>\n</div></li></ul></div></div></div><div id='method-initEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-initEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-method-initEl' class='name expandable'>initEl</a>( <span class='pre'>el</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-on' class='name expandable'>on</a>( <span class='pre'>eventName, handler, [scope], [options]</span> )</div><div class='description'><div class='short'>Appends an event handler to this object (shorthand for addListener.) ...</div><div class='long'><p>Appends an event handler to this object (shorthand for <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event to listen for</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The method the event invokes</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An object containing handler configuration.</p>\n</div></li></ul></div></div></div><div id='method-onBeforeStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-onBeforeStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-method-onBeforeStart' class='name expandable'>onBeforeStart</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Template method which should be overridden by each DragTracker instance. ...</div><div class='long'><p>Template method which should be overridden by each DragTracker instance. Called when the user first clicks and\nholds the mouse button down. Return false to disallow the drag</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a><div class='sub-desc'><p>The event object</p>\n</div></li></ul></div></div></div><div id='method-onDrag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-onDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-method-onDrag' class='name expandable'>onDrag</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Template method which should be overridden by each DragTracker instance. ...</div><div class='long'><p>Template method which should be overridden by each DragTracker instance. Called whenever a drag has been detected.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a><div class='sub-desc'><p>The event object</p>\n</div></li></ul></div></div></div><div id='method-onEnd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-onEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-method-onEnd' class='name expandable'>onEnd</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Template method which should be overridden by each DragTracker instance. ...</div><div class='long'><p>Template method which should be overridden by each DragTracker instance. Called when a drag operation has been completed\n(e.g. the user clicked and held the mouse down, dragged the element and then released the mouse button)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a><div class='sub-desc'><p>The event object</p>\n</div></li></ul></div></div></div><div id='method-onMouseDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-onMouseDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-method-onMouseDown' class='name expandable'>onMouseDown</a>( <span class='pre'>e, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onMouseMove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-onMouseMove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-method-onMouseMove' class='name expandable'>onMouseMove</a>( <span class='pre'>e, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onMouseUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-onMouseUp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-method-onMouseUp' class='name expandable'>onMouseUp</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-onStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-method-onStart' class='name expandable'>onStart</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>Template method which should be overridden by each DragTracker instance. ...</div><div class='long'><p>Template method which should be overridden by each DragTracker instance. Called when a drag operation starts\n(e.g. the user has moved the tracked element beyond the specified tolerance)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : <a href=\"#!/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a><div class='sub-desc'><p>The event object</p>\n</div></li></ul></div></div></div><div id='method-purgeListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-purgeListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-purgeListeners' class='name expandable'>purgeListeners</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Removes all listeners for this object ...</div><div class='long'><p>Removes all listeners for this object</p>\n</div></div></div><div id='method-relayEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable-more.html#Ext-util-Observable-method-relayEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-relayEvents' class='name expandable'>relayEvents</a>( <span class='pre'>o, events</span> )</div><div class='description'><div class='short'>Relays selected events from the specified Observable as if the events were fired by this. ...</div><div class='long'><p>Relays selected events from the specified Observable as if the events were fired by <tt><b>this</b></tt>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>The Observable whose events this object is to relay.</p>\n</div></li><li><span class='pre'>events</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>Array of event names to relay.</p>\n</div></li></ul></div></div></div><div id='method-removeListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-removeListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-removeListener' class='name expandable'>removeListener</a>( <span class='pre'>eventName, handler, [scope]</span> )</div><div class='description'><div class='short'>Removes an event handler. ...</div><div class='long'><p>Removes an event handler.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event the handler was associated with.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope originally specified for the handler.</p>\n</div></li></ul></div></div></div><div id='method-resumeEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-resumeEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-resumeEvents' class='name expandable'>resumeEvents</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Resume firing events. ...</div><div class='long'><p>Resume firing events. (see <a href=\"#!/api/Ext.util.Observable-method-suspendEvents\" rel=\"Ext.util.Observable-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <tt><b>queueSuspended</b></tt> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n</div></div></div><div id='method-stopSelect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-stopSelect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-method-stopSelect' class='name expandable'>stopSelect</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-suspendEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-suspendEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-suspendEvents' class='name expandable'>suspendEvents</a>( <span class='pre'>queueSuspended</span> )</div><div class='description'><div class='short'>Suspend the firing of all events. ...</div><div class='long'><p>Suspend the firing of all events. (see <a href=\"#!/api/Ext.util.Observable-method-resumeEvents\" rel=\"Ext.util.Observable-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>queueSuspended</span> : Boolean<div class='sub-desc'><p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#!/api/Ext.util.Observable-method-resumeEvents\" rel=\"Ext.util.Observable-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n</div></li></ul></div></div></div><div id='method-triggerStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-method-triggerStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-method-triggerStart' class='name expandable'>triggerStart</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-un' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-un' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-un' class='name expandable'>un</a>( <span class='pre'>eventName, handler, [scope]</span> )</div><div class='description'><div class='short'>Removes an event handler (shorthand for removeListener.) ...</div><div class='long'><p>Removes an event handler (shorthand for <a href=\"#!/api/Ext.util.Observable-method-removeListener\" rel=\"Ext.util.Observable-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event the handler was associated with.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope originally specified for the handler.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-drag' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-event-drag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-event-drag' class='name expandable'>drag</a>( <span class='pre'>this, e</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'><p>event object</p>\n</div></li></ul></div></div></div><div id='event-dragend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-event-dragend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-event-dragend' class='name expandable'>dragend</a>( <span class='pre'>this, e</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'><p>event object</p>\n</div></li></ul></div></div></div><div id='event-dragstart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-event-dragstart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-event-dragstart' class='name expandable'>dragstart</a>( <span class='pre'>this, e</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'><p>event object</p>\n</div></li></ul></div></div></div><div id='event-mousedown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-event-mousedown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-event-mousedown' class='name expandable'>mousedown</a>( <span class='pre'>this, e</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'><p>event object</p>\n</div></li></ul></div></div></div><div id='event-mousemove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-event-mousemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-event-mousemove' class='name expandable'>mousemove</a>( <span class='pre'>this, e</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'><p>event object</p>\n</div></li></ul></div></div></div><div id='event-mouseup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragTracker'>Ext.dd.DragTracker</span><br/><a href='source/DragTracker.html#Ext-dd-DragTracker-event-mouseup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragTracker-event-mouseup' class='name expandable'>mouseup</a>( <span class='pre'>this, e</span> )</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>e</span> : Object<div class='sub-desc'><p>event object</p>\n</div></li></ul></div></div></div></div></div></div></div>",
    "superclasses": ["Ext.util.Observable"],
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
        "href": "DragTracker.html#Ext-dd-DragTracker",
        "filename": "DragTracker.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.dd.DragTracker",
            "meta": {
                "private": true
            },
            "name": "constrainModes",
            "id": "property-constrainModes"
        }],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.dd.DragTracker",
            "meta": {},
            "name": "active",
            "id": "cfg-active"
        }, {
            "tagname": "cfg",
            "owner": "Ext.dd.DragTracker",
            "meta": {},
            "name": "autoStart",
            "id": "cfg-autoStart"
        }, {
            "tagname": "cfg",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "listeners",
            "id": "cfg-listeners"
        }, {
            "tagname": "cfg",
            "owner": "Ext.dd.DragTracker",
            "meta": {},
            "name": "tolerance",
            "id": "cfg-tolerance"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.dd.DragTracker",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
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
            "owner": "Ext.dd.DragTracker",
            "meta": {
                "private": true
            },
            "name": "clearStart",
            "id": "method-clearStart"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragTracker",
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
            "owner": "Ext.dd.DragTracker",
            "meta": {
                "private": true
            },
            "name": "getDragCt",
            "id": "method-getDragCt"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragTracker",
            "meta": {},
            "name": "getDragTarget",
            "id": "method-getDragTarget"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragTracker",
            "meta": {
                "private": true
            },
            "name": "getOffset",
            "id": "method-getOffset"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragTracker",
            "meta": {
                "private": true
            },
            "name": "getXY",
            "id": "method-getXY"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "hasListener",
            "id": "method-hasListener"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragTracker",
            "meta": {
                "private": true
            },
            "name": "initEl",
            "id": "method-initEl"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "on",
            "id": "method-on"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragTracker",
            "meta": {},
            "name": "onBeforeStart",
            "id": "method-onBeforeStart"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragTracker",
            "meta": {},
            "name": "onDrag",
            "id": "method-onDrag"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragTracker",
            "meta": {},
            "name": "onEnd",
            "id": "method-onEnd"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragTracker",
            "meta": {
                "private": true
            },
            "name": "onMouseDown",
            "id": "method-onMouseDown"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragTracker",
            "meta": {
                "private": true
            },
            "name": "onMouseMove",
            "id": "method-onMouseMove"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragTracker",
            "meta": {
                "private": true
            },
            "name": "onMouseUp",
            "id": "method-onMouseUp"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragTracker",
            "meta": {},
            "name": "onStart",
            "id": "method-onStart"
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
            "owner": "Ext.dd.DragTracker",
            "meta": {
                "private": true
            },
            "name": "stopSelect",
            "id": "method-stopSelect"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "suspendEvents",
            "id": "method-suspendEvents"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragTracker",
            "meta": {
                "private": true
            },
            "name": "triggerStart",
            "id": "method-triggerStart"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "un",
            "id": "method-un"
        }],
        "event": [{
            "tagname": "event",
            "owner": "Ext.dd.DragTracker",
            "meta": {},
            "name": "drag",
            "id": "event-drag"
        }, {
            "tagname": "event",
            "owner": "Ext.dd.DragTracker",
            "meta": {},
            "name": "dragend",
            "id": "event-dragend"
        }, {
            "tagname": "event",
            "owner": "Ext.dd.DragTracker",
            "meta": {},
            "name": "dragstart",
            "id": "event-dragstart"
        }, {
            "tagname": "event",
            "owner": "Ext.dd.DragTracker",
            "meta": {},
            "name": "mousedown",
            "id": "event-mousedown"
        }, {
            "tagname": "event",
            "owner": "Ext.dd.DragTracker",
            "meta": {},
            "name": "mousemove",
            "id": "event-mousemove"
        }, {
            "tagname": "event",
            "owner": "Ext.dd.DragTracker",
            "meta": {},
            "name": "mouseup",
            "id": "event-mouseup"
        }],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.dd.DragTracker",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.dd.DragTracker",
    "mixins": [],
    "mixedInto": []
});