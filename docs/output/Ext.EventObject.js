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
Ext.data.JsonP.Ext_EventObject({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/EventManager.html#Ext-EventObject' target='_blank'>EventManager.js</a></div></pre><div class='doc-contents'><p>Just as <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> wraps around a native DOM node, <a href=\"#!/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a>\nwraps the browser's native event-object normalizing cross-browser differences,\nsuch as which mouse button is clicked, keys pressed, mechanisms to stop\nevent-propagation along with a method to prevent default actions from taking place.</p>\n\n<p>For example:</p>\n\n\n<pre><code>function handleClick(e, t){ // e is not a standard event object, it is a <a href=\"#!/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a>\n    e.preventDefault();\n    var target = e.getTarget(); // same as t (the target HTMLElement)\n    ...\n}\nvar myDiv = <a href=\"#!/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a>(\"myDiv\");  // get reference to an <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>\nmyDiv.on(         // 'on' is shorthand for addListener\n    \"click\",      // perform an action on click of myDiv\n    handleClick   // reference to the action handler\n);\n// other methods to do the same:\n<a href=\"#!/api/Ext.EventManager-method-on\" rel=\"Ext.EventManager-method-on\" class=\"docClass\">Ext.EventManager.on</a>(\"myDiv\", 'click', handleClick);\n<a href=\"#!/api/Ext.EventManager-method-addListener\" rel=\"Ext.EventManager-method-addListener\" class=\"docClass\">Ext.EventManager.addListener</a>(\"myDiv\", 'click', handleClick);\n </code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getCharCode' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventObject'>Ext.EventObject</span><br/><a href='source/EventManager.html#Ext-EventObject-method-getCharCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventObject-method-getCharCode' class='name expandable'>getCharCode</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Gets the character code for the event. ...</div><div class='long'><p>Gets the character code for the event.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventObject'>Ext.EventObject</span><br/><a href='source/EventManager.html#Ext-EventObject-method-getKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventObject-method-getKey' class='name expandable'>getKey</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Returns a normalized keyCode for the event. ...</div><div class='long'><p>Returns a normalized keyCode for the event.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The key code</p>\n</div></li></ul></div></div></div><div id='method-getPageX' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventObject'>Ext.EventObject</span><br/><a href='source/EventManager.html#Ext-EventObject-method-getPageX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventObject-method-getPageX' class='name expandable'>getPageX</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Gets the x coordinate of the event. ...</div><div class='long'><p>Gets the x coordinate of the event.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPageY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventObject'>Ext.EventObject</span><br/><a href='source/EventManager.html#Ext-EventObject-method-getPageY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventObject-method-getPageY' class='name expandable'>getPageY</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Gets the y coordinate of the event. ...</div><div class='long'><p>Gets the y coordinate of the event.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRelatedTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventObject'>Ext.EventObject</span><br/><a href='source/EventManager.html#Ext-EventObject-method-getRelatedTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventObject-method-getRelatedTarget' class='name expandable'>getRelatedTarget</a>( <span class='pre'></span> ) : HTMLElement</div><div class='description'><div class='short'>Gets the related target. ...</div><div class='long'><p>Gets the related target.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLElement</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventObject'>Ext.EventObject</span><br/><a href='source/EventManager.html#Ext-EventObject-method-getTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventObject-method-getTarget' class='name expandable'>getTarget</a>( <span class='pre'>[selector], [maxDepth]</span> ) : HTMLelement</div><div class='description'><div class='short'>Gets the target for the event. ...</div><div class='long'><p>Gets the target for the event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>A simple selector to filter the target or look for an ancestor of the target</p>\n</div></li><li><span class='pre'>maxDepth</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>/Mixed (optional)<div class='sub-desc'><p>The max depth to</p>\n\n<pre><code>            search as a number or element (defaults to 10 || document.body)\n</code></pre>\n\n<p>@param {Boolean} returnEl (optional) True to return a <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> object instead of DOM node</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>HTMLelement</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getWheelDelta' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventObject'>Ext.EventObject</span><br/><a href='source/EventManager.html#Ext-EventObject-method-getWheelDelta' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventObject-method-getWheelDelta' class='name expandable'>getWheelDelta</a>( <span class='pre'></span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Normalizes mouse wheel delta across browsers ...</div><div class='long'><p>Normalizes mouse wheel delta across browsers</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The delta</p>\n</div></li></ul></div></div></div><div id='method-getXY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventObject'>Ext.EventObject</span><br/><a href='source/EventManager.html#Ext-EventObject-method-getXY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventObject-method-getXY' class='name expandable'>getXY</a>( <span class='pre'></span> ) : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></div><div class='description'><div class='short'>Gets the page coordinates of the event. ...</div><div class='long'><p>Gets the page coordinates of the event.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><div class='sub-desc'><p>The xy values like [x, y]</p>\n</div></li></ul></div></div></div><div id='method-preventDefault' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventObject'>Ext.EventObject</span><br/><a href='source/EventManager.html#Ext-EventObject-method-preventDefault' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventObject-method-preventDefault' class='name expandable'>preventDefault</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Prevents the browsers default handling of the event. ...</div><div class='long'><p>Prevents the browsers default handling of the event.</p>\n</div></div></div><div id='method-setEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventObject'>Ext.EventObject</span><br/><a href='source/EventManager.html#Ext-EventObject-method-setEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventObject-method-setEvent' class='name expandable'>setEvent</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stopEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventObject'>Ext.EventObject</span><br/><a href='source/EventManager.html#Ext-EventObject-method-stopEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventObject-method-stopEvent' class='name expandable'>stopEvent</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Stop the event (preventDefault and stopPropagation) ...</div><div class='long'><p>Stop the event (preventDefault and stopPropagation)</p>\n</div></div></div><div id='method-stopPropagation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventObject'>Ext.EventObject</span><br/><a href='source/EventManager.html#Ext-EventObject-method-stopPropagation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventObject-method-stopPropagation' class='name expandable'>stopPropagation</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Cancels bubbling of the event. ...</div><div class='long'><p>Cancels bubbling of the event.</p>\n</div></div></div><div id='method-within' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.EventObject'>Ext.EventObject</span><br/><a href='source/EventManager.html#Ext-EventObject-method-within' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.EventObject-method-within' class='name expandable'>within</a>( <span class='pre'>[related], [allowEl]</span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the target of this event is a child of el. ...</div><div class='long'><p>Returns true if the target of this event is a child of el.  Unless the allowEl parameter is set, it will return false if if the target is el.\nExample usage:</p>\n\n<pre><code>        // Handle click on any child of an element\n        <a href=\"#!/api/Ext-method-getBody\" rel=\"Ext-method-getBody\" class=\"docClass\">Ext.getBody</a>().on('click', function(e){\n            if(e.within('some-el')){\n                alert('Clicked on a child of some-el!');\n            }\n        });\n\n        // Handle click directly on an element, ignoring clicks on child nodes\n        <a href=\"#!/api/Ext-method-getBody\" rel=\"Ext-method-getBody\" class=\"docClass\">Ext.getBody</a>().on('click', function(e,t){\n            if((t.id == 'some-el') && !e.within(t, true)){\n                alert('Clicked directly on some-el!');\n            }\n        });\n        </code></pre>\n\n\n<p>@param {Mixed} el The id, DOM element or <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> to check</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>related</span> : Boolean (optional)<div class='sub-desc'><p>true to test if the related target is within el instead of the target</p>\n</div></li><li><span class='pre'>allowEl</span> : Boolean (optional)<div class='sub-desc'><p>true to also check if the passed element is the target or related target</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "EventManager.html#Ext-EventObject",
        "filename": "EventManager.js"
    }],
    "linenr": 741,
    "members": {
        "property": [],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.EventObject",
            "meta": {},
            "name": "getCharCode",
            "id": "method-getCharCode"
        }, {
            "tagname": "method",
            "owner": "Ext.EventObject",
            "meta": {},
            "name": "getKey",
            "id": "method-getKey"
        }, {
            "tagname": "method",
            "owner": "Ext.EventObject",
            "meta": {},
            "name": "getPageX",
            "id": "method-getPageX"
        }, {
            "tagname": "method",
            "owner": "Ext.EventObject",
            "meta": {},
            "name": "getPageY",
            "id": "method-getPageY"
        }, {
            "tagname": "method",
            "owner": "Ext.EventObject",
            "meta": {},
            "name": "getRelatedTarget",
            "id": "method-getRelatedTarget"
        }, {
            "tagname": "method",
            "owner": "Ext.EventObject",
            "meta": {},
            "name": "getTarget",
            "id": "method-getTarget"
        }, {
            "tagname": "method",
            "owner": "Ext.EventObject",
            "meta": {},
            "name": "getWheelDelta",
            "id": "method-getWheelDelta"
        }, {
            "tagname": "method",
            "owner": "Ext.EventObject",
            "meta": {},
            "name": "getXY",
            "id": "method-getXY"
        }, {
            "tagname": "method",
            "owner": "Ext.EventObject",
            "meta": {},
            "name": "preventDefault",
            "id": "method-preventDefault"
        }, {
            "tagname": "method",
            "owner": "Ext.EventObject",
            "meta": {
                "private": true
            },
            "name": "setEvent",
            "id": "method-setEvent"
        }, {
            "tagname": "method",
            "owner": "Ext.EventObject",
            "meta": {},
            "name": "stopEvent",
            "id": "method-stopEvent"
        }, {
            "tagname": "method",
            "owner": "Ext.EventObject",
            "meta": {},
            "name": "stopPropagation",
            "id": "method-stopPropagation"
        }, {
            "tagname": "method",
            "owner": "Ext.EventObject",
            "meta": {},
            "name": "within",
            "id": "method-within"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.EventObject",
    "singleton": true,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.EventObject",
    "mixins": [],
    "mixedInto": []
});