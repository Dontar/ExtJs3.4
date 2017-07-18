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
Ext.data.JsonP.Ext_dd_Registry({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Registry.html#Ext-dd-Registry' target='_blank'>Registry.js</a></div></pre><div class='doc-contents'><p>Provides easy access to all drag drop components that are registered on a page.  Items can be retrieved either\ndirectly by DOM node id, or by passing in the drag drop event that occurred and looking up the event target.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getHandle' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.Registry'>Ext.dd.Registry</span><br/><a href='source/Registry.html#Ext-dd-Registry-method-getHandle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.Registry-method-getHandle' class='name expandable'>getHandle</a>( <span class='pre'>id</span> ) : Object</div><div class='description'><div class='short'>Returns the handle registered for a DOM Node by id ...</div><div class='long'><p>Returns the handle registered for a DOM Node by id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>The DOM node or id to look up</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>handle The custom handle data</p>\n</div></li></ul></div></div></div><div id='method-getHandleFromEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.Registry'>Ext.dd.Registry</span><br/><a href='source/Registry.html#Ext-dd-Registry-method-getHandleFromEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.Registry-method-getHandleFromEvent' class='name expandable'>getHandleFromEvent</a>( <span class='pre'>e</span> ) : Object</div><div class='description'><div class='short'>Returns the handle that is registered for the DOM node that is the target of the event ...</div><div class='long'><p>Returns the handle that is registered for the DOM node that is the target of the event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>The event</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>handle The custom handle data</p>\n</div></li></ul></div></div></div><div id='method-getTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.Registry'>Ext.dd.Registry</span><br/><a href='source/Registry.html#Ext-dd-Registry-method-getTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.Registry-method-getTarget' class='name expandable'>getTarget</a>( <span class='pre'>id</span> ) : Object</div><div class='description'><div class='short'>Returns a custom data object that is registered for a DOM node by id ...</div><div class='long'><p>Returns a custom data object that is registered for a DOM node by id</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>The DOM node or id to look up</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>data The custom data</p>\n</div></li></ul></div></div></div><div id='method-getTargetFromEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.Registry'>Ext.dd.Registry</span><br/><a href='source/Registry.html#Ext-dd-Registry-method-getTargetFromEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.Registry-method-getTargetFromEvent' class='name expandable'>getTargetFromEvent</a>( <span class='pre'>e</span> ) : Object</div><div class='description'><div class='short'>Returns a custom data object that is registered for the DOM node that is the target of the event ...</div><div class='long'><p>Returns a custom data object that is registered for the DOM node that is the target of the event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'><p>The event</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>data The custom data</p>\n</div></li></ul></div></div></div><div id='method-register' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.Registry'>Ext.dd.Registry</span><br/><a href='source/Registry.html#Ext-dd-Registry-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.Registry-method-register' class='name expandable'>register</a>( <span class='pre'>element, [data]</span> )</div><div class='description'><div class='short'>Resgister a drag drop element ...</div><div class='long'><p>Resgister a drag drop element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>The id or DOM node to register</p>\n</div></li><li><span class='pre'>data</span> : Object (optional)<div class='sub-desc'><p>An custom data object that will be passed between the elements that are involved\nin drag drop operations.  You can populate this object with any arbitrary properties that your own code\nknows how to interpret, plus there are some specific properties known to the Registry that should be\npopulated in the data object (if applicable):</p>\n\n<pre>Value      Description<br />\n---------  ------------------------------------------<br />\nhandles    Array of DOM nodes that trigger dragging<br />\n           for the element being registered<br />\nisHandle   True if the element passed in triggers<br />\n           dragging itself, else false\n</pre>\n\n</div></li></ul></div></div></div><div id='method-unregister' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.Registry'>Ext.dd.Registry</span><br/><a href='source/Registry.html#Ext-dd-Registry-method-unregister' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.Registry-method-unregister' class='name expandable'>unregister</a>( <span class='pre'>element</span> )</div><div class='description'><div class='short'>Unregister a drag drop element ...</div><div class='long'><p>Unregister a drag drop element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>The id or DOM node to unregister</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "Registry.html#Ext-dd-Registry",
        "filename": "Registry.js"
    }],
    "linenr": 1,
    "members": {
        "property": [],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.dd.Registry",
            "meta": {},
            "name": "getHandle",
            "id": "method-getHandle"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.Registry",
            "meta": {},
            "name": "getHandleFromEvent",
            "id": "method-getHandleFromEvent"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.Registry",
            "meta": {},
            "name": "getTarget",
            "id": "method-getTarget"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.Registry",
            "meta": {},
            "name": "getTargetFromEvent",
            "id": "method-getTargetFromEvent"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.Registry",
            "meta": {},
            "name": "register",
            "id": "method-register"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.Registry",
            "meta": {},
            "name": "unregister",
            "id": "method-unregister"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.dd.Registry",
    "singleton": true,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.dd.Registry",
    "mixins": [],
    "mixedInto": []
});