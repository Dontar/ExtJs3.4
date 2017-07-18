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
Ext.data.JsonP.Ext_ComponentMgr({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ComponentMgr.html#Ext-ComponentMgr' target='_blank'>ComponentMgr.js</a></div></pre><div class='doc-contents'><p>Provides a registry of all Components (instances of <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> or any subclass\nthereof) on a page so that they can be easily accessed by <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">component</a>\n<a href=\"#!/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a> (see <a href=\"#!/api/Ext.ComponentMgr-method-get\" rel=\"Ext.ComponentMgr-method-get\" class=\"docClass\">get</a>, or the convenience method <a href=\"#!/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a>).</p>\n\n\n<p>This object also provides a registry of available Component <i>classes</i>\nindexed by a mnemonic code known as the Component's <a href=\"#!/api/Ext.Component-cfg-xtype\" rel=\"Ext.Component-cfg-xtype\" class=\"docClass\">xtype</a>.\nThe <code><a href=\"#!/api/Ext.Component-cfg-xtype\" rel=\"Ext.Component-cfg-xtype\" class=\"docClass\">xtype</a></code> provides a way to avoid instantiating child Components\nwhen creating a full, nested config object for a complete Ext page.</p>\n\n\n<p>A child Component may be specified simply as a <i>config object</i>\nas long as the correct <code><a href=\"#!/api/Ext.Component-cfg-xtype\" rel=\"Ext.Component-cfg-xtype\" class=\"docClass\">xtype</a></code> is specified so that if and when the Component\nneeds rendering, the correct type can be looked up for lazy instantiation.</p>\n\n\n<p>For a list of all available <code><a href=\"#!/api/Ext.Component-cfg-xtype\" rel=\"Ext.Component-cfg-xtype\" class=\"docClass\">xtypes</a></code>, see <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.</p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-all' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ComponentMgr'>Ext.ComponentMgr</span><br/><a href='source/ComponentMgr.html#Ext-ComponentMgr-property-all' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ComponentMgr-property-all' class='name expandable'>all</a><span> : MixedCollection</span></div><div class='description'><div class='short'>The MixedCollection used internally for the component cache. ...</div><div class='long'><p>The MixedCollection used internally for the component cache. An example usage may be subscribing to\nevents on the MixedCollection to monitor addition or removal.  Read-only.</p>\n</div></div></div><div id='property-ptypes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ComponentMgr'>Ext.ComponentMgr</span><br/><a href='source/ComponentMgr.html#Ext-ComponentMgr-property-ptypes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ComponentMgr-property-ptypes' class='name not-expandable'>ptypes</a><span> : Object</span></div><div class='description'><div class='short'><p>The ptypes that have been registered with the component manager.</p>\n</div><div class='long'><p>The ptypes that have been registered with the component manager.</p>\n</div></div></div><div id='property-types' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ComponentMgr'>Ext.ComponentMgr</span><br/><a href='source/ComponentMgr.html#Ext-ComponentMgr-property-types' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ComponentMgr-property-types' class='name not-expandable'>types</a><span> : Object</span></div><div class='description'><div class='short'><p>The xtypes that have been registered with the component manager.</p>\n</div><div class='long'><p>The xtypes that have been registered with the component manager.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-create' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ComponentMgr'>Ext.ComponentMgr</span><br/><a href='source/ComponentMgr.html#Ext-ComponentMgr-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ComponentMgr-method-create' class='name expandable'>create</a>( <span class='pre'>config, defaultType</span> ) : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a></div><div class='description'><div class='short'>Creates a new Component from the specified config object using the\nconfig object's xtype to determine the class to in...</div><div class='long'><p>Creates a new Component from the specified config object using the\nconfig object's xtype to determine the class to instantiate.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>A configuration object for the Component you wish to create.</p>\n</div></li><li><span class='pre'>defaultType</span> : Constructor<div class='sub-desc'><p>The constructor to provide the default Component type if\nthe config object does not contain a <code>xtype</code>. (Optional if the config contains a <code>xtype</code>).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a></span><div class='sub-desc'><p>The newly instantiated Component.</p>\n</div></li></ul></div></div></div><div id='method-createPlugin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ComponentMgr'>Ext.ComponentMgr</span><br/><a href='source/ComponentMgr.html#Ext-ComponentMgr-method-createPlugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ComponentMgr-method-createPlugin' class='name expandable'>createPlugin</a>( <span class='pre'>config, defaultType</span> ) : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a></div><div class='description'><div class='short'>Creates a new Plugin from the specified config object using the\nconfig object's ptype to determine the class to insta...</div><div class='long'><p>Creates a new Plugin from the specified config object using the\nconfig object's ptype to determine the class to instantiate.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>A configuration object for the Plugin you wish to create.</p>\n</div></li><li><span class='pre'>defaultType</span> : Constructor<div class='sub-desc'><p>The constructor to provide the default Plugin type if\nthe config object does not contain a <code>ptype</code>. (Optional if the config contains a <code>ptype</code>).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a></span><div class='sub-desc'><p>The newly instantiated Plugin.</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ComponentMgr'>Ext.ComponentMgr</span><br/><a href='source/ComponentMgr.html#Ext-ComponentMgr-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ComponentMgr-method-get' class='name expandable'>get</a>( <span class='pre'>id</span> ) : Object</div><div class='description'><div class='short'>Returns a component by id. ...</div><div class='long'><p>Returns a component by <a href=\"#!/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a>.\nFor additional details see <a href=\"#!/api/Ext.util.MixedCollection-method-get\" rel=\"Ext.util.MixedCollection-method-get\" class=\"docClass\">Ext.util.MixedCollection.get</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The component <a href=\"#!/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p><a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> The Component, <code>undefined</code> if not found, or <code>null</code> if a\nClass was found.</p>\n</div></li></ul></div></div></div><div id='method-isPluginRegistered' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ComponentMgr'>Ext.ComponentMgr</span><br/><a href='source/ComponentMgr.html#Ext-ComponentMgr-method-isPluginRegistered' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ComponentMgr-method-isPluginRegistered' class='name expandable'>isPluginRegistered</a>( <span class='pre'>ptype</span> ) : Boolean</div><div class='description'><div class='short'>Checks if a Plugin type is registered. ...</div><div class='long'><p>Checks if a Plugin type is registered.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ptype</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The mnemonic string by which the Plugin class may be looked up</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether the type is registered.</p>\n</div></li></ul></div></div></div><div id='method-isRegistered' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ComponentMgr'>Ext.ComponentMgr</span><br/><a href='source/ComponentMgr.html#Ext-ComponentMgr-method-isRegistered' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ComponentMgr-method-isRegistered' class='name expandable'>isRegistered</a>( <span class='pre'>xtype</span> ) : Boolean</div><div class='description'><div class='short'>Checks if a Component type is registered. ...</div><div class='long'><p>Checks if a Component type is registered.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xtype</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The mnemonic string by which the Component class may be looked up</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether the type is registered.</p>\n</div></li></ul></div></div></div><div id='method-onAvailable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ComponentMgr'>Ext.ComponentMgr</span><br/><a href='source/ComponentMgr.html#Ext-ComponentMgr-method-onAvailable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ComponentMgr-method-onAvailable' class='name expandable'>onAvailable</a>( <span class='pre'>id, fn, scope</span> )</div><div class='description'><div class='short'>Registers a function that will be called when a Component with the specified id is added to ComponentMgr. ...</div><div class='long'><p>Registers a function that will be called when a Component with the specified id is added to ComponentMgr. This will happen on instantiation.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The component <a href=\"#!/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a></p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The callback function</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the callback is executed. Defaults to the Component.</p>\n</div></li></ul></div></div></div><div id='method-register' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ComponentMgr'>Ext.ComponentMgr</span><br/><a href='source/ComponentMgr.html#Ext-ComponentMgr-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ComponentMgr-method-register' class='name expandable'>register</a>( <span class='pre'>c</span> )</div><div class='description'><div class='short'>Registers a component. ...</div><div class='long'><p>Registers a component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The component</p>\n</div></li></ul></div></div></div><div id='method-registerPlugin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ComponentMgr'>Ext.ComponentMgr</span><br/><a href='source/ComponentMgr.html#Ext-ComponentMgr-method-registerPlugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ComponentMgr-method-registerPlugin' class='name expandable'>registerPlugin</a>( <span class='pre'>ptype, cls</span> )</div><div class='description'><div class='short'>Registers a new Plugin constructor, keyed by a new\nExt.Component.ptype. ...</div><div class='long'><p>Registers a new Plugin constructor, keyed by a new\n<a href=\"#!/api/Ext.Component-cfg-ptype\" rel=\"Ext.Component-cfg-ptype\" class=\"docClass\">Ext.Component.ptype</a>.</p>\n\n\n<p>Use this method (or its alias <a href=\"#!/api/Ext-method-preg\" rel=\"Ext-method-preg\" class=\"docClass\">Ext.preg</a>) to register new\nplugins for <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>s so that lazy instantiation may be used when specifying\nPlugins.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ptype</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The mnemonic string by which the Plugin class may be looked up.</p>\n</div></li><li><span class='pre'>cls</span> : Constructor<div class='sub-desc'><p>The new Plugin class.</p>\n</div></li></ul></div></div></div><div id='method-registerType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ComponentMgr'>Ext.ComponentMgr</span><br/><a href='source/ComponentMgr.html#Ext-ComponentMgr-method-registerType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ComponentMgr-method-registerType' class='name expandable'>registerType</a>( <span class='pre'>xtype, cls</span> )</div><div class='description'><div class='short'>Registers a new Component constructor, keyed by a new\nExt.Component.xtype. ...</div><div class='long'><p>Registers a new Component constructor, keyed by a new\n<a href=\"#!/api/Ext.Component-cfg-xtype\" rel=\"Ext.Component-cfg-xtype\" class=\"docClass\">Ext.Component.xtype</a>.</p>\n\n\n<p>Use this method (or its alias <a href=\"#!/api/Ext-method-reg\" rel=\"Ext-method-reg\" class=\"docClass\">Ext.reg</a>) to register new\nsubclasses of <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> so that lazy instantiation may be used when specifying\nchild Components.\nsee <a href=\"#!/api/Ext.Container-property-items\" rel=\"Ext.Container-property-items\" class=\"docClass\">Ext.Container.items</a></p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xtype</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The mnemonic string by which the Component class may be looked up.</p>\n</div></li><li><span class='pre'>cls</span> : Constructor<div class='sub-desc'><p>The new Component class.</p>\n</div></li></ul></div></div></div><div id='method-unregister' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ComponentMgr'>Ext.ComponentMgr</span><br/><a href='source/ComponentMgr.html#Ext-ComponentMgr-method-unregister' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ComponentMgr-method-unregister' class='name expandable'>unregister</a>( <span class='pre'>c</span> )</div><div class='description'><div class='short'>Unregisters a component. ...</div><div class='long'><p>Unregisters a component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>c</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The component</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "ComponentMgr.html#Ext-ComponentMgr",
        "filename": "ComponentMgr.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.ComponentMgr",
            "meta": {},
            "name": "all",
            "id": "property-all"
        }, {
            "tagname": "property",
            "owner": "Ext.ComponentMgr",
            "meta": {},
            "name": "ptypes",
            "id": "property-ptypes"
        }, {
            "tagname": "property",
            "owner": "Ext.ComponentMgr",
            "meta": {},
            "name": "types",
            "id": "property-types"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.ComponentMgr",
            "meta": {},
            "name": "create",
            "id": "method-create"
        }, {
            "tagname": "method",
            "owner": "Ext.ComponentMgr",
            "meta": {},
            "name": "createPlugin",
            "id": "method-createPlugin"
        }, {
            "tagname": "method",
            "owner": "Ext.ComponentMgr",
            "meta": {},
            "name": "get",
            "id": "method-get"
        }, {
            "tagname": "method",
            "owner": "Ext.ComponentMgr",
            "meta": {},
            "name": "isPluginRegistered",
            "id": "method-isPluginRegistered"
        }, {
            "tagname": "method",
            "owner": "Ext.ComponentMgr",
            "meta": {},
            "name": "isRegistered",
            "id": "method-isRegistered"
        }, {
            "tagname": "method",
            "owner": "Ext.ComponentMgr",
            "meta": {},
            "name": "onAvailable",
            "id": "method-onAvailable"
        }, {
            "tagname": "method",
            "owner": "Ext.ComponentMgr",
            "meta": {},
            "name": "register",
            "id": "method-register"
        }, {
            "tagname": "method",
            "owner": "Ext.ComponentMgr",
            "meta": {},
            "name": "registerPlugin",
            "id": "method-registerPlugin"
        }, {
            "tagname": "method",
            "owner": "Ext.ComponentMgr",
            "meta": {},
            "name": "registerType",
            "id": "method-registerType"
        }, {
            "tagname": "method",
            "owner": "Ext.ComponentMgr",
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
    "name": "Ext.ComponentMgr",
    "singleton": true,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.ComponentMgr",
    "mixins": [],
    "mixedInto": []
});