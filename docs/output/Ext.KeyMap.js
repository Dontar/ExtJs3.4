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
Ext.data.JsonP.Ext_KeyMap({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/KeyMap.html#Ext-KeyMap' target='_blank'>KeyMap.js</a></div></pre><div class='doc-contents'><p>Handles mapping keys to actions for an element. One key map can be used for multiple actions.\nThe constructor accepts the same config object as defined by <a href=\"#!/api/Ext.KeyMap-method-addBinding\" rel=\"Ext.KeyMap-method-addBinding\" class=\"docClass\">addBinding</a>.\nIf you bind a callback function to a KeyMap, anytime the KeyMap handles an expected key\ncombination it will call the function with this signature (if the match is a multi-key\ncombination the callback will still be called only once): (String key, <a href=\"#!/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> e)\nA KeyMap can also handle a string representation of keys.<br />\nUsage:</p>\n\n<pre><code>// map one key by key code\nvar map = new <a href=\"#!/api/Ext.KeyMap\" rel=\"Ext.KeyMap\" class=\"docClass\">Ext.KeyMap</a>(\"my-element\", {\n    key: 13, // or Ext.EventObject.ENTER\n    fn: myHandler,\n    scope: myObject\n});\n\n// map multiple keys to one action by string\nvar map = new <a href=\"#!/api/Ext.KeyMap\" rel=\"Ext.KeyMap\" class=\"docClass\">Ext.KeyMap</a>(\"my-element\", {\n    key: \"a\\r\\n\\t\",\n    fn: myHandler,\n    scope: myObject\n});\n\n// map multiple keys to multiple actions by strings and array of codes\nvar map = new <a href=\"#!/api/Ext.KeyMap\" rel=\"Ext.KeyMap\" class=\"docClass\">Ext.KeyMap</a>(\"my-element\", [\n    {\n        key: [10,13],\n        fn: function(){ alert(\"Return was pressed\"); }\n    }, {\n        key: \"abc\",\n        fn: function(){ alert('a, b or c was pressed'); }\n    }, {\n        key: \"\\t\",\n        ctrl:true,\n        shift:true,\n        fn: function(){ alert('Control + shift + tab was pressed.'); }\n    }\n]);\n</code></pre>\n\n\n<p><b>Note: A KeyMap starts enabled</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-stopEvent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.KeyMap'>Ext.KeyMap</span><br/><a href='source/KeyMap.html#Ext-KeyMap-property-stopEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.KeyMap-property-stopEvent' class='name expandable'>stopEvent</a><span> : Boolean</span></div><div class='description'><div class='short'>True to stop the event from bubbling and prevent the default browser action if the\nkey was handled by the KeyMap (def...</div><div class='long'><p>True to stop the event from bubbling and prevent the default browser action if the\nkey was handled by the KeyMap (defaults to false)</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.KeyMap'>Ext.KeyMap</span><br/><a href='source/KeyMap.html#Ext-KeyMap-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.KeyMap-method-constructor' class='name expandable'>Ext.KeyMap</a>( <span class='pre'>el, config, [eventName]</span> ) : <a href=\"#!/api/Ext.KeyMap\" rel=\"Ext.KeyMap\" class=\"docClass\">Ext.KeyMap</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed<div class='sub-desc'><p>The element to bind to</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The config (see <a href=\"#!/api/Ext.KeyMap-method-addBinding\" rel=\"Ext.KeyMap-method-addBinding\" class=\"docClass\">addBinding</a>)</p>\n</div></li><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The event to bind to (defaults to \"keydown\")</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.KeyMap\" rel=\"Ext.KeyMap\" class=\"docClass\">Ext.KeyMap</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addBinding' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.KeyMap'>Ext.KeyMap</span><br/><a href='source/KeyMap.html#Ext-KeyMap-method-addBinding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.KeyMap-method-addBinding' class='name expandable'>addBinding</a>( <span class='pre'>config</span> )</div><div class='description'><div class='short'>Add a new binding to this KeyMap. ...</div><div class='long'><p>Add a new binding to this KeyMap. The following config object properties are supported:</p>\n\n<pre>Property    Type             Description\n----------  ---------------  ----------------------------------------------------------------------\nkey         String/Array     A single keycode or an array of keycodes to handle\nshift       Boolean          True to handle key only when shift is pressed, False to handle the key only when shift is not pressed (defaults to undefined)\nctrl        Boolean          True to handle key only when ctrl is pressed, False to handle the key only when ctrl is not pressed (defaults to undefined)\nalt         Boolean          True to handle key only when alt is pressed, False to handle the key only when alt is not pressed (defaults to undefined)\nhandler     Function         The function to call when KeyMap finds the expected key combination\nfn          Function         Alias of handler (for backwards-compatibility)\nscope       Object           The scope of the callback function\nstopEvent   Boolean          True to stop the event from bubbling and prevent the default browser action if the key was handled by the KeyMap (defaults to false)\n</pre>\n\n\n<p>Usage:</p>\n\n<pre><code>// Create a KeyMap\nvar map = new <a href=\"#!/api/Ext.KeyMap\" rel=\"Ext.KeyMap\" class=\"docClass\">Ext.KeyMap</a>(document, {\n    key: Ext.EventObject.ENTER,\n    fn: handleKey,\n    scope: this\n});\n\n//Add a new binding to the existing KeyMap later\nmap.addBinding({\n    key: 'abc',\n    shift: true,\n    fn: handleKey,\n    scope: this\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>A single KeyMap config or an array of configs</p>\n</div></li></ul></div></div></div><div id='method-disable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.KeyMap'>Ext.KeyMap</span><br/><a href='source/KeyMap.html#Ext-KeyMap-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.KeyMap-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Disable this KeyMap ...</div><div class='long'><p>Disable this KeyMap</p>\n</div></div></div><div id='method-enable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.KeyMap'>Ext.KeyMap</span><br/><a href='source/KeyMap.html#Ext-KeyMap-method-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.KeyMap-method-enable' class='name expandable'>enable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Enables this KeyMap ...</div><div class='long'><p>Enables this KeyMap</p>\n</div></div></div><div id='method-isEnabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.KeyMap'>Ext.KeyMap</span><br/><a href='source/KeyMap.html#Ext-KeyMap-method-isEnabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.KeyMap-method-isEnabled' class='name expandable'>isEnabled</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns true if this KeyMap is enabled ...</div><div class='long'><p>Returns true if this KeyMap is enabled</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.KeyMap'>Ext.KeyMap</span><br/><a href='source/KeyMap.html#Ext-KeyMap-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.KeyMap-method-on' class='name expandable'>on</a>( <span class='pre'>key, fn, [scope]</span> )</div><div class='description'><div class='short'>Shorthand for adding a single key listener ...</div><div class='long'><p>Shorthand for adding a single key listener</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a>/Object<div class='sub-desc'><p>Either the numeric key code, array of key codes or an object with the\nfollowing options:\n{key: (number or array), shift: (true/false), ctrl: (true/false), alt: (true/false)}</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The function to call</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the function is executed. Defaults to the browser window.</p>\n</div></li></ul></div></div></div><div id='method-setDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.KeyMap'>Ext.KeyMap</span><br/><a href='source/KeyMap.html#Ext-KeyMap-method-setDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.KeyMap-method-setDisabled' class='name expandable'>setDisabled</a>( <span class='pre'>disabled</span> )</div><div class='description'><div class='short'>Convenience function for setting disabled/enabled by boolean. ...</div><div class='long'><p>Convenience function for setting disabled/enabled by boolean.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>disabled</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "KeyMap.html#Ext-KeyMap",
        "filename": "KeyMap.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.KeyMap",
            "meta": {},
            "name": "stopEvent",
            "id": "property-stopEvent"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.KeyMap",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.KeyMap",
            "meta": {},
            "name": "addBinding",
            "id": "method-addBinding"
        }, {
            "tagname": "method",
            "owner": "Ext.KeyMap",
            "meta": {},
            "name": "disable",
            "id": "method-disable"
        }, {
            "tagname": "method",
            "owner": "Ext.KeyMap",
            "meta": {},
            "name": "enable",
            "id": "method-enable"
        }, {
            "tagname": "method",
            "owner": "Ext.KeyMap",
            "meta": {},
            "name": "isEnabled",
            "id": "method-isEnabled"
        }, {
            "tagname": "method",
            "owner": "Ext.KeyMap",
            "meta": {},
            "name": "on",
            "id": "method-on"
        }, {
            "tagname": "method",
            "owner": "Ext.KeyMap",
            "meta": {},
            "name": "setDisabled",
            "id": "method-setDisabled"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.KeyMap",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.KeyMap",
    "mixins": [],
    "mixedInto": []
});