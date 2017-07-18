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
Ext.data.JsonP.Ext_SplitBar({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": "Ext.util.Observable",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='docClass'>Ext.util.Observable</a><div class='subclass '><strong>Ext.SplitBar</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/SplitBar.html#Ext-SplitBar' target='_blank'>SplitBar.js</a></div></pre><div class='doc-contents'><p>Creates draggable splitter bar functionality from two elements (element to be dragged and element to be resized).</p>\n\n<br><br>\n\n\n<p>Usage:</p>\n\n<pre><code>var split = new <a href=\"#!/api/Ext.SplitBar\" rel=\"Ext.SplitBar\" class=\"docClass\">Ext.SplitBar</a>(\"elementToDrag\", \"elementToSize\",\n                   Ext.SplitBar.HORIZONTAL, Ext.SplitBar.LEFT);\nsplit.setAdapter(new <a href=\"#!/api/Ext.SplitBar.AbsoluteLayoutAdapter\" rel=\"Ext.SplitBar.AbsoluteLayoutAdapter\" class=\"docClass\">Ext.SplitBar.AbsoluteLayoutAdapter</a>(\"container\"));\nsplit.minSize = 100;\nsplit.maxSize = 600;\nsplit.animate = true;\nsplit.on('moved', splitterMoved);\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-listeners' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-cfg-listeners' class='name expandable'>listeners</a><span> : Object</span></div><div class='description'><div class='short'>(optional) A config object containing one or more event handlers to be added to this\nobject during initialization. ...</div><div class='long'><p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#!/api/Ext.DataView\" rel=\"Ext.DataView\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#!/api/Ext.DataView-event-click\" rel=\"Ext.DataView-event-click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a Component's HTMLElement, listeners must be added to the <i><a href=\"#!/api/Ext.Component-method-getEl\" rel=\"Ext.Component-method-getEl\" class=\"docClass\">Element</a></i> after the Component\nhas been rendered. A plugin can simplify this step:</p>\n\n<pre><code>// Plugin is configured with a listeners config object.\n// The Component is appended to the argument list of all handler functions.\nExt.DomObserver = <a href=\"#!/api/Ext-method-extend\" rel=\"Ext-method-extend\" class=\"docClass\">Ext.extend</a>(Object, {\n    constructor: function(config) {\n        this.listeners = config.listeners ? config.listeners : config;\n    },\n\n    // Component passes itself into plugin&#39;s init method\n    init: function(c) {\n        var p, l = this.listeners;\n        for (p in l) {\n            if (<a href=\"#!/api/Ext-method-isFunction\" rel=\"Ext-method-isFunction\" class=\"docClass\">Ext.isFunction</a>(l[p])) {\n                l[p] = this.createHandler(l[p], c);\n            } else {\n                l[p].fn = this.createHandler(l[p].fn, c);\n            }\n        }\n\n        // Add the listeners to the Element immediately following the render call\n        c.render = c.render.<a href=\"#!/api/Function-method-createSequence\" rel=\"Function-method-createSequence\" class=\"docClass\">createSequence</a>(function() {\n            var e = c.getEl();\n            if (e) {\n                e.on(l);\n            }\n        });\n    },\n\n    createHandler: function(fn, c) {\n        return function(e) {\n            fn.call(this, e, c);\n        };\n    }\n});\n\nvar combo = new <a href=\"#!/api/Ext.form.ComboBox\" rel=\"Ext.form.ComboBox\" class=\"docClass\">Ext.form.ComboBox</a>({\n\n    // Collapse combo when its element is clicked on\n    plugins: [ new Ext.DomObserver({\n        click: function(evt, comp) {\n            comp.collapse();\n        }\n    })],\n    store: myStore,\n    typeAhead: true,\n    mode: 'local',\n    triggerAction: 'all'\n});\n</code></pre>\n\n\n<p></p></p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-adapter' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-property-adapter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-property-adapter' class='name not-expandable'>adapter</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>The adapter to use to positon and resize elements</p>\n</div><div class='long'><p>The adapter to use to positon and resize elements</p>\n</div></div></div><div id='property-animate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-property-animate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-property-animate' class='name expandable'>animate</a><span> : Boolean</span></div><div class='description'><div class='short'>Whether to animate the transition to the new size ...</div><div class='long'><p>Whether to animate the transition to the new size</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-b4StartDrag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-property-b4StartDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-property-b4StartDrag' class='name not-expandable'>b4StartDrag</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-dd' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-property-dd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-property-dd' class='name not-expandable'>dd</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-dragSpecs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-property-dragSpecs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-property-dragSpecs' class='name expandable'>dragSpecs</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-el' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-property-el' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-property-el' class='name not-expandable'>el</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-endDrag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-property-endDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-property-endDrag' class='name not-expandable'>endDrag</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-maxSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-property-maxSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-property-maxSize' class='name expandable'>maxSize</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The maximum size of the resizing element. ...</div><div class='long'><p>The maximum size of the resizing element. (Defaults to 2000)</p>\n<p>Defaults to: <code>2000</code></p></div></div></div><div id='property-minSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-property-minSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-property-minSize' class='name expandable'>minSize</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The minimum size of the resizing element. ...</div><div class='long'><p>The minimum size of the resizing element. (Defaults to 0)</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-orientation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-property-orientation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-property-orientation' class='name expandable'>orientation</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>The orientation of the split. ...</div><div class='long'><p>The orientation of the split. Either Ext.SplitBar.HORIZONTAL or Ext.SplitBar.VERTICAL. (Defaults to HORIZONTAL)\nNote: If this is changed after creating the SplitBar, the placement property must be manually updated</p>\n</div></div></div><div id='property-proxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-property-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-property-proxy' class='name not-expandable'>proxy</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-resizingEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-property-resizingEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-property-resizingEl' class='name not-expandable'>resizingEl</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-shim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-property-shim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-property-shim' class='name not-expandable'>shim</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-tickSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-property-tickSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-property-tickSize' class='name expandable'>tickSize</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The increment, in pixels by which to move this SplitBar. ...</div><div class='long'><p>The increment, in pixels by which to move this SplitBar. When <i>undefined</i>, the SplitBar moves smoothly.</p>\n</div></div></div><div id='property-useShim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-property-useShim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-property-useShim' class='name expandable'>useShim</a><span> : Boolean</span></div><div class='description'><div class='short'>Whether to create a transparent shim that overlays the page when dragging, enables dragging across iframes. ...</div><div class='long'><p>Whether to create a transparent shim that overlays the page when dragging, enables dragging across iframes.</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.SplitBar-method-constructor' class='name expandable'>Ext.SplitBar</a>( <span class='pre'>dragElement, resizingElement, [orientation], [placement]</span> ) : <a href=\"#!/api/Ext.SplitBar\" rel=\"Ext.SplitBar\" class=\"docClass\">Ext.SplitBar</a></div><div class='description'><div class='short'>Create a new SplitBar ...</div><div class='long'><p>Create a new SplitBar</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dragElement</span> : Mixed<div class='sub-desc'><p>The element to be dragged and act as the SplitBar.</p>\n</div></li><li><span class='pre'>resizingElement</span> : Mixed<div class='sub-desc'><p>The element to be resized based on where the SplitBar element is dragged</p>\n</div></li><li><span class='pre'>orientation</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>Either Ext.SplitBar.HORIZONTAL or Ext.SplitBar.VERTICAL. (Defaults to HORIZONTAL)</p>\n</div></li><li><span class='pre'>placement</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>Either Ext.SplitBar.LEFT or Ext.SplitBar.RIGHT for horizontal or</p>\n\n<pre><code>                    Ext.SplitBar.TOP or Ext.SplitBar.BOTTOM for vertical. (By default, this is determined automatically by the initial\n                    position of the SplitBar).\n</code></pre>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.SplitBar\" rel=\"Ext.SplitBar\" class=\"docClass\">Ext.SplitBar</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-addEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-addEvents' class='name expandable'>addEvents</a>( <span class='pre'>o, Optional</span> )</div><div class='description'><div class='short'>Adds the specified events to the list of events which this Observable may fire. ...</div><div class='long'><p>Adds the specified events to the list of events which this Observable may fire.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Either an object with event names as properties with a value of <code>true</code>\nor the first event name string if multiple event names are being passed as separate parameters.</p>\n</div></li><li><span class='pre'>Optional</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a><div class='sub-desc'><p>. Event name if multiple event names are being passed as separate parameters.\nUsage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n\n</div></li></ul></div></div></div><div id='method-addListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-addListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-addListener' class='name expandable'>addListener</a>( <span class='pre'>eventName, handler, [scope], [options]</span> )</div><div class='description'><div class='short'>Appends an event handler to this object. ...</div><div class='long'><p>Appends an event handler to this object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to listen for.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The method the event invokes.</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An object containing handler configuration.\nproperties. This may contain any of the following properties:<ul>\n<li><b>scope</b> : Object<div class=\"sub-desc\">The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></div></li>\n<li><b>delay</b> : Number<div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after the event fires.</div></li>\n<li><b>single</b> : Boolean<div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li><b>buffer</b> : Number<div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#!/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n<li><b>target</b> : Observable<div class=\"sub-desc\">Only call the handler if the event was fired on the target Observable, <i>not</i>\nif the event was bubbled up from a child Observable.</div></li>\n</ul><br></p>\n\n<p>\n<b>Combining Options</b><br>\nUsing the options argument, it is possible to combine different types of listeners:<br>\n<br>\nA delayed, one-time listener.\n<pre><code>myDataView.on('click', this.onClick, this, {\nsingle: true,\ndelay: 100\n});</code></pre>\n<p>\n<b>Attaching multiple handlers in 1 call</b><br>\nThe method also allows for a single argument to be passed which is a config object containing properties\nwhich specify multiple handlers.\n<p>\n<pre><code>myGridPanel.on({\n'click' : {\n    fn: this.onClick,\n    scope: this,\n    delay: 100\n},\n'mouseover' : {\n    fn: this.onMouseOver,\n    scope: this\n},\n'mouseout' : {\n    fn: this.onMouseOut,\n    scope: this\n}\n});</code></pre>\n<p>\nOr a shorthand syntax:<br>\n<pre><code>myGridPanel.on({\n'click' : this.onClick,\n'mouseover' : this.onMouseOver,\n'mouseout' : this.onMouseOut,\n scope: this\n});</code></pre>\n\n</p></p></p></p></div></li></ul></div></div></div><div id='method-createProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-method-createProxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-method-createProxy' class='name expandable'>createProxy</a>( <span class='pre'>dir</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>static Create our own proxy element element. ...</div><div class='long'><p>static Create our own proxy element element. So it will be the same same size on all browsers, we won't use borders. Instead we use a background color.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dir</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-method-destroy' class='name expandable'>destroy</a>( <span class='pre'>removeEl</span> )</div><div class='description'><div class='short'>Destroy this splitbar. ...</div><div class='long'><p>Destroy this splitbar.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>removeEl</span> : Boolean<div class='sub-desc'><p>True to remove the element</p>\n</div></li></ul></div></div></div><div id='method-enableBubble' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable-more.html#Ext-util-Observable-method-enableBubble' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-enableBubble' class='name expandable'>enableBubble</a>( <span class='pre'>events</span> )</div><div class='description'><div class='short'>Enables events fired by this Observable to bubble up an owner hierarchy by calling\nthis.getBubbleTarget() if present. ...</div><div class='long'><p>Enables events fired by this Observable to bubble up an owner hierarchy by calling\n<code>this.getBubbleTarget()</code> if present. There is no implementation in the Observable base class.</p>\n\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers. See Ext.Component.getBubbleTarget. The default\nimplementation in <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the Component's immediate owner. But if a known target is required, this can be overridden to\naccess the required target more quickly.</p>\n\n\n<p>Example:</p>\n\n\n<pre><code><a href=\"#!/api/Ext-method-override\" rel=\"Ext-method-override\" class=\"docClass\">Ext.override</a>(<a href=\"#!/api/Ext.form.Field\" rel=\"Ext.form.Field\" class=\"docClass\">Ext.form.Field</a>, {\n    //  Add functionality to Field&#39;s initComponent to enable the change event to bubble\n    initComponent : Ext.form.Field.prototype.initComponent.createSequence(function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field&#39;s events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>events</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The event name to bubble, or an Array of event names.</p>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>eventName, args</span> ) : Boolean</div><div class='description'><div class='short'>Fires the specified event with the passed parameters (minus the event name). ...</div><div class='long'><p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#!/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#!/api/Ext.util.Observable-method-enableBubble\" rel=\"Ext.util.Observable-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to fire.</p>\n</div></li><li><span class='pre'>args</span> : Object...<div class='sub-desc'><p>Variable number of parameters are passed to handlers.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>returns false if any of the handlers return false otherwise it returns true.</p>\n</div></li></ul></div></div></div><div id='method-getAdapter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-method-getAdapter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-method-getAdapter' class='name expandable'>getAdapter</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Get the adapter this SplitBar uses ...</div><div class='long'><p>Get the adapter this SplitBar uses</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The adapter object</p>\n</div></li></ul></div></div></div><div id='method-getMaximumSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-method-getMaximumSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-method-getMaximumSize' class='name expandable'>getMaximumSize</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Gets the maximum size for the resizing element ...</div><div class='long'><p>Gets the maximum size for the resizing element</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The maximum size</p>\n</div></li></ul></div></div></div><div id='method-getMinimumSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-method-getMinimumSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-method-getMinimumSize' class='name expandable'>getMinimumSize</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Gets the minimum size for the resizing element ...</div><div class='long'><p>Gets the minimum size for the resizing element</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The minimum size</p>\n</div></li></ul></div></div></div><div id='method-hasListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-hasListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-hasListener' class='name expandable'>hasListener</a>( <span class='pre'>eventName</span> ) : Boolean</div><div class='description'><div class='short'>Checks to see if this object has any listeners for a specified event ...</div><div class='long'><p>Checks to see if this object has any listeners for a specified event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the event to check for</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the event is being listened for, else false</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-on' class='name expandable'>on</a>( <span class='pre'>eventName, handler, [scope], [options]</span> )</div><div class='description'><div class='short'>Appends an event handler to this object (shorthand for addListener.) ...</div><div class='long'><p>Appends an event handler to this object (shorthand for <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event to listen for</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The method the event invokes</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>An object containing handler configuration.</p>\n</div></li></ul></div></div></div><div id='method-onEndProxyDrag' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-method-onEndProxyDrag' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-method-onEndProxyDrag' class='name expandable'>onEndProxyDrag</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Called after the drag operation by the DDProxy ...</div><div class='long'><p>Called after the drag operation by the DDProxy</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-purgeListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-purgeListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-purgeListeners' class='name expandable'>purgeListeners</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Removes all listeners for this object ...</div><div class='long'><p>Removes all listeners for this object</p>\n</div></div></div><div id='method-relayEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable-more.html#Ext-util-Observable-method-relayEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-relayEvents' class='name expandable'>relayEvents</a>( <span class='pre'>o, events</span> )</div><div class='description'><div class='short'>Relays selected events from the specified Observable as if the events were fired by this. ...</div><div class='long'><p>Relays selected events from the specified Observable as if the events were fired by <tt><b>this</b></tt>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>The Observable whose events this object is to relay.</p>\n</div></li><li><span class='pre'>events</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>Array of event names to relay.</p>\n</div></li></ul></div></div></div><div id='method-removeListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-removeListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-removeListener' class='name expandable'>removeListener</a>( <span class='pre'>eventName, handler, [scope]</span> )</div><div class='description'><div class='short'>Removes an event handler. ...</div><div class='long'><p>Removes an event handler.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event the handler was associated with.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope originally specified for the handler.</p>\n</div></li></ul></div></div></div><div id='method-resumeEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-resumeEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-resumeEvents' class='name expandable'>resumeEvents</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Resume firing events. ...</div><div class='long'><p>Resume firing events. (see <a href=\"#!/api/Ext.util.Observable-method-suspendEvents\" rel=\"Ext.util.Observable-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <tt><b>queueSuspended</b></tt> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n</div></div></div><div id='method-setAdapter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-method-setAdapter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-method-setAdapter' class='name expandable'>setAdapter</a>( <span class='pre'>adapter</span> )</div><div class='description'><div class='short'>Set the adapter this SplitBar uses ...</div><div class='long'><p>Set the adapter this SplitBar uses</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>adapter</span> : Object<div class='sub-desc'><p>A SplitBar adapter object</p>\n</div></li></ul></div></div></div><div id='method-setCurrentSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-method-setCurrentSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-method-setCurrentSize' class='name expandable'>setCurrentSize</a>( <span class='pre'>size</span> )</div><div class='description'><div class='short'>Sets the initialize size for the resizing element ...</div><div class='long'><p>Sets the initialize size for the resizing element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>size</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The initial size</p>\n</div></li></ul></div></div></div><div id='method-setMaximumSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-method-setMaximumSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-method-setMaximumSize' class='name expandable'>setMaximumSize</a>( <span class='pre'>maxSize</span> )</div><div class='description'><div class='short'>Sets the maximum size for the resizing element ...</div><div class='long'><p>Sets the maximum size for the resizing element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>maxSize</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The maximum size</p>\n</div></li></ul></div></div></div><div id='method-setMinimumSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-method-setMinimumSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-method-setMinimumSize' class='name expandable'>setMinimumSize</a>( <span class='pre'>minSize</span> )</div><div class='description'><div class='short'>Sets the minimum size for the resizing element ...</div><div class='long'><p>Sets the minimum size for the resizing element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>minSize</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The minimum size</p>\n</div></li></ul></div></div></div><div id='method-suspendEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-suspendEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-suspendEvents' class='name expandable'>suspendEvents</a>( <span class='pre'>queueSuspended</span> )</div><div class='description'><div class='short'>Suspend the firing of all events. ...</div><div class='long'><p>Suspend the firing of all events. (see <a href=\"#!/api/Ext.util.Observable-method-resumeEvents\" rel=\"Ext.util.Observable-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>queueSuspended</span> : Boolean<div class='sub-desc'><p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#!/api/Ext.util.Observable-method-resumeEvents\" rel=\"Ext.util.Observable-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n</div></li></ul></div></div></div><div id='method-un' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable.html#Ext-util-Observable-method-un' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-un' class='name expandable'>un</a>( <span class='pre'>eventName, handler, [scope]</span> )</div><div class='description'><div class='short'>Removes an event handler (shorthand for removeListener.) ...</div><div class='long'><p>Removes an event handler (shorthand for <a href=\"#!/api/Ext.util.Observable-method-removeListener\" rel=\"Ext.util.Observable-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The type of event the handler was associated with.</p>\n</div></li><li><span class='pre'>handler</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope originally specified for the handler.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-beforeresize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-event-beforeresize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-event-beforeresize' class='name expandable'>beforeresize</a>( <span class='pre'>this</span> )</div><div class='description'><div class='short'>Fires before the splitter is dragged ...</div><div class='long'><p>Fires before the splitter is dragged</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.SplitBar\" rel=\"Ext.SplitBar\" class=\"docClass\">Ext.SplitBar</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='event-moved' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-event-moved' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-event-moved' class='name expandable'>moved</a>( <span class='pre'>this, newSize</span> )</div><div class='description'><div class='short'>Fires when the splitter is moved ...</div><div class='long'><p>Fires when the splitter is moved</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.SplitBar\" rel=\"Ext.SplitBar\" class=\"docClass\">Ext.SplitBar</a><div class='sub-desc'>\n</div></li><li><span class='pre'>newSize</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>the new width or height</p>\n</div></li></ul></div></div></div><div id='event-resize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.SplitBar'>Ext.SplitBar</span><br/><a href='source/SplitBar.html#Ext-SplitBar-event-resize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.SplitBar-event-resize' class='name expandable'>resize</a>( <span class='pre'>this, newSize</span> )</div><div class='description'><div class='short'>Fires when the splitter is moved (alias for moved) ...</div><div class='long'><p>Fires when the splitter is moved (alias for <a href=\"#!/api/Ext.SplitBar-event-moved\" rel=\"Ext.SplitBar-event-moved\" class=\"docClass\">moved</a>)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.SplitBar\" rel=\"Ext.SplitBar\" class=\"docClass\">Ext.SplitBar</a><div class='sub-desc'>\n</div></li><li><span class='pre'>newSize</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>the new width or height</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "SplitBar.html#Ext-SplitBar",
        "filename": "SplitBar.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.SplitBar",
            "meta": {
                "private": true
            },
            "name": "adapter",
            "id": "property-adapter"
        }, {
            "tagname": "property",
            "owner": "Ext.SplitBar",
            "meta": {},
            "name": "animate",
            "id": "property-animate"
        }, {
            "tagname": "property",
            "owner": "Ext.SplitBar",
            "meta": {
                "private": true
            },
            "name": "b4StartDrag",
            "id": "property-b4StartDrag"
        }, {
            "tagname": "property",
            "owner": "Ext.SplitBar",
            "meta": {
                "private": true
            },
            "name": "dd",
            "id": "property-dd"
        }, {
            "tagname": "property",
            "owner": "Ext.SplitBar",
            "meta": {
                "private": true
            },
            "name": "dragSpecs",
            "id": "property-dragSpecs"
        }, {
            "tagname": "property",
            "owner": "Ext.SplitBar",
            "meta": {
                "private": true
            },
            "name": "el",
            "id": "property-el"
        }, {
            "tagname": "property",
            "owner": "Ext.SplitBar",
            "meta": {
                "private": true
            },
            "name": "endDrag",
            "id": "property-endDrag"
        }, {
            "tagname": "property",
            "owner": "Ext.SplitBar",
            "meta": {},
            "name": "maxSize",
            "id": "property-maxSize"
        }, {
            "tagname": "property",
            "owner": "Ext.SplitBar",
            "meta": {},
            "name": "minSize",
            "id": "property-minSize"
        }, {
            "tagname": "property",
            "owner": "Ext.SplitBar",
            "meta": {
                "private": true
            },
            "name": "orientation",
            "id": "property-orientation"
        }, {
            "tagname": "property",
            "owner": "Ext.SplitBar",
            "meta": {
                "private": true
            },
            "name": "proxy",
            "id": "property-proxy"
        }, {
            "tagname": "property",
            "owner": "Ext.SplitBar",
            "meta": {
                "private": true
            },
            "name": "resizingEl",
            "id": "property-resizingEl"
        }, {
            "tagname": "property",
            "owner": "Ext.SplitBar",
            "meta": {
                "private": true
            },
            "name": "shim",
            "id": "property-shim"
        }, {
            "tagname": "property",
            "owner": "Ext.SplitBar",
            "meta": {},
            "name": "tickSize",
            "id": "property-tickSize"
        }, {
            "tagname": "property",
            "owner": "Ext.SplitBar",
            "meta": {},
            "name": "useShim",
            "id": "property-useShim"
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
            "owner": "Ext.SplitBar",
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
            "owner": "Ext.SplitBar",
            "meta": {
                "private": true
            },
            "name": "createProxy",
            "id": "method-createProxy"
        }, {
            "tagname": "method",
            "owner": "Ext.SplitBar",
            "meta": {},
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
            "owner": "Ext.SplitBar",
            "meta": {},
            "name": "getAdapter",
            "id": "method-getAdapter"
        }, {
            "tagname": "method",
            "owner": "Ext.SplitBar",
            "meta": {},
            "name": "getMaximumSize",
            "id": "method-getMaximumSize"
        }, {
            "tagname": "method",
            "owner": "Ext.SplitBar",
            "meta": {},
            "name": "getMinimumSize",
            "id": "method-getMinimumSize"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "hasListener",
            "id": "method-hasListener"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Observable",
            "meta": {},
            "name": "on",
            "id": "method-on"
        }, {
            "tagname": "method",
            "owner": "Ext.SplitBar",
            "meta": {
                "private": true
            },
            "name": "onEndProxyDrag",
            "id": "method-onEndProxyDrag"
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
            "owner": "Ext.SplitBar",
            "meta": {},
            "name": "setAdapter",
            "id": "method-setAdapter"
        }, {
            "tagname": "method",
            "owner": "Ext.SplitBar",
            "meta": {},
            "name": "setCurrentSize",
            "id": "method-setCurrentSize"
        }, {
            "tagname": "method",
            "owner": "Ext.SplitBar",
            "meta": {},
            "name": "setMaximumSize",
            "id": "method-setMaximumSize"
        }, {
            "tagname": "method",
            "owner": "Ext.SplitBar",
            "meta": {},
            "name": "setMinimumSize",
            "id": "method-setMinimumSize"
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
        }],
        "event": [{
            "tagname": "event",
            "owner": "Ext.SplitBar",
            "meta": {},
            "name": "beforeresize",
            "id": "event-beforeresize"
        }, {
            "tagname": "event",
            "owner": "Ext.SplitBar",
            "meta": {},
            "name": "moved",
            "id": "event-moved"
        }, {
            "tagname": "event",
            "owner": "Ext.SplitBar",
            "meta": {},
            "name": "resize",
            "id": "event-resize"
        }],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.SplitBar",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.SplitBar",
    "mixins": [],
    "mixedInto": []
});