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
Ext.data.JsonP.Ext_state_Manager({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/StateManager.html#Ext-state-Manager' target='_blank'>StateManager.js</a></div></pre><div class='doc-contents'><p>This is the global state manager. By default all components that are \"state aware\" check this class\nfor state information if you don't pass them a custom state provider. In order for this class\nto be useful, it must be initialized with a provider when your application initializes. Example usage:</p>\n\n<pre><code>// in your initialization function\ninit : function(){\n   <a href=\"#!/api/Ext.state.Manager-method-setProvider\" rel=\"Ext.state.Manager-method-setProvider\" class=\"docClass\">Ext.state.Manager.setProvider</a>(new <a href=\"#!/api/Ext.state.CookieProvider\" rel=\"Ext.state.CookieProvider\" class=\"docClass\">Ext.state.CookieProvider</a>());\n   var win = new Window(...);\n   win.restoreState();\n}\n </code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clear' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.state.Manager'>Ext.state.Manager</span><br/><a href='source/StateManager.html#Ext-state-Manager-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.state.Manager-method-clear' class='name expandable'>clear</a>( <span class='pre'>name</span> )</div><div class='description'><div class='short'>Clears a value from the state ...</div><div class='long'><p>Clears a value from the state</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The key name</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.state.Manager'>Ext.state.Manager</span><br/><a href='source/StateManager.html#Ext-state-Manager-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.state.Manager-method-get' class='name expandable'>get</a>( <span class='pre'>name, defaultValue</span> ) : Mixed</div><div class='description'><div class='short'>Returns the current value for a key ...</div><div class='long'><p>Returns the current value for a key</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The key name</p>\n</div></li><li><span class='pre'>defaultValue</span> : Mixed<div class='sub-desc'><p>The default value to return if the key lookup does not match</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'><p>The state data</p>\n</div></li></ul></div></div></div><div id='method-getProvider' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.state.Manager'>Ext.state.Manager</span><br/><a href='source/StateManager.html#Ext-state-Manager-method-getProvider' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.state.Manager-method-getProvider' class='name expandable'>getProvider</a>( <span class='pre'></span> ) : Provider</div><div class='description'><div class='short'>Gets the currently configured state provider ...</div><div class='long'><p>Gets the currently configured state provider</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Provider</span><div class='sub-desc'><p>The state provider</p>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.state.Manager'>Ext.state.Manager</span><br/><a href='source/StateManager.html#Ext-state-Manager-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.state.Manager-method-set' class='name expandable'>set</a>( <span class='pre'>name, value</span> )</div><div class='description'><div class='short'>Sets the value for a key ...</div><div class='long'><p>Sets the value for a key</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The key name</p>\n</div></li><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>The state data</p>\n</div></li></ul></div></div></div><div id='method-setProvider' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.state.Manager'>Ext.state.Manager</span><br/><a href='source/StateManager.html#Ext-state-Manager-method-setProvider' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.state.Manager-method-setProvider' class='name expandable'>setProvider</a>( <span class='pre'>stateProvider</span> )</div><div class='description'><div class='short'>Configures the default state provider for your application ...</div><div class='long'><p>Configures the default state provider for your application</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>stateProvider</span> : Provider<div class='sub-desc'><p>The state provider to set</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "StateManager.html#Ext-state-Manager",
        "filename": "StateManager.js"
    }],
    "linenr": 1,
    "members": {
        "property": [],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.state.Manager",
            "meta": {},
            "name": "clear",
            "id": "method-clear"
        }, {
            "tagname": "method",
            "owner": "Ext.state.Manager",
            "meta": {},
            "name": "get",
            "id": "method-get"
        }, {
            "tagname": "method",
            "owner": "Ext.state.Manager",
            "meta": {},
            "name": "getProvider",
            "id": "method-getProvider"
        }, {
            "tagname": "method",
            "owner": "Ext.state.Manager",
            "meta": {},
            "name": "set",
            "id": "method-set"
        }, {
            "tagname": "method",
            "owner": "Ext.state.Manager",
            "meta": {},
            "name": "setProvider",
            "id": "method-setProvider"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.state.Manager",
    "singleton": true,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.state.Manager",
    "mixins": [],
    "mixedInto": []
});