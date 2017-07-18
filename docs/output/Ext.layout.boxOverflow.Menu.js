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
Ext.data.JsonP.Ext_layout_boxOverflow_Menu({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": ["Ext.layout.boxOverflow.HorizontalMenu"],
    "extends": "Ext.layout.boxOverflow.None",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.layout.boxOverflow.None' rel='Ext.layout.boxOverflow.None' class='docClass'>Ext.layout.boxOverflow.None</a><div class='subclass '><strong>Ext.layout.boxOverflow.Menu</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.layout.boxOverflow.HorizontalMenu' rel='Ext.layout.boxOverflow.HorizontalMenu' class='docClass'>Ext.layout.boxOverflow.HorizontalMenu</a></div><h4>Files</h4><div class='dependency'><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu' target='_blank'>MenuOverflow.js</a></div></pre><div class='doc-contents'><p>Description</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-afterCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Menu'>Ext.layout.boxOverflow.Menu</span><br/><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu-property-afterCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Menu-property-afterCls' class='name expandable'>afterCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>CSS class added to the afterCt element. ...</div><div class='long'><p>CSS class added to the afterCt element. This is the element that holds any special items such as scrollers,\nwhich must always be present at the rightmost edge of the Container</p>\n<p>Defaults to: <code>'x-strip-right'</code></p></div></div></div><div id='property-menu' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Menu'>Ext.layout.boxOverflow.Menu</span><br/><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu-property-menu' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Menu-property-menu' class='name not-expandable'>menu</a><span> : <a href=\"#!/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Ext.menu.Menu</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>The expand menu - holds items for every item that cannot be shown\nbecause the container is currently not large enough.</p>\n</div><div class='long'><p>The expand menu - holds items for every item that cannot be shown\nbecause the container is currently not large enough.</p>\n</div></div></div><div id='property-menuItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Menu'>Ext.layout.boxOverflow.Menu</span><br/><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu-property-menuItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Menu-property-menuItems' class='name not-expandable'>menuItems</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span></div><div class='description'><div class='short'><p>Array of all items that are currently hidden and should go into the dropdown menu</p>\n</div><div class='long'><p>Array of all items that are currently hidden and should go into the dropdown menu</p>\n</div></div></div><div id='property-menuTrigger' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Menu'>Ext.layout.boxOverflow.Menu</span><br/><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu-property-menuTrigger' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Menu-property-menuTrigger' class='name not-expandable'>menuTrigger</a><span> : <a href=\"#!/api/Ext.Button\" rel=\"Ext.Button\" class=\"docClass\">Ext.Button</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'><p>The expand button which triggers the overflow menu to be shown</p>\n</div><div class='long'><p>The expand button which triggers the overflow menu to be shown</p>\n</div></div></div><div id='property-noItemsMenuText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Menu'>Ext.layout.boxOverflow.Menu</span><br/><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu-property-noItemsMenuText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Menu-property-noItemsMenuText' class='name expandable'>noItemsMenuText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>HTML fragment to render into the toolbar overflow menu if there are no items to display ...</div><div class='long'><p>HTML fragment to render into the toolbar overflow menu if there are no items to display</p>\n<p>Defaults to: <code>'&lt;div class=&quot;x-toolbar-no-items&quot;&gt;(None)&lt;/div&gt;'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Menu'>Ext.layout.boxOverflow.Menu</span><br/><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.layout.boxOverflow.Menu-method-constructor' class='name expandable'>Ext.layout.boxOverflow.Menu</a>( <span class='pre'>layout</span> ) : <a href=\"#!/api/Ext.layout.boxOverflow.Menu\" rel=\"Ext.layout.boxOverflow.Menu\" class=\"docClass\">Ext.layout.boxOverflow.Menu</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layout</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.layout.boxOverflow.Menu\" rel=\"Ext.layout.boxOverflow.Menu\" class=\"docClass\">Ext.layout.boxOverflow.Menu</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.boxOverflow.None-method-constructor' rel='Ext.layout.boxOverflow.None-method-constructor' class='docClass'>Ext.layout.boxOverflow.None.constructor</a></p></div></div></div><div id='method-addComponentToMenu' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Menu'>Ext.layout.boxOverflow.Menu</span><br/><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu-method-addComponentToMenu' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Menu-method-addComponentToMenu' class='name expandable'>addComponentToMenu</a>( <span class='pre'>menu, component</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Adds the given Toolbar item to the given menu. ...</div><div class='long'><p>Adds the given Toolbar item to the given menu. Buttons inside a buttongroup are added individually.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>menu</span> : <a href=\"#!/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Ext.menu.Menu</a><div class='sub-desc'><p>The menu to add to</p>\n</div></li><li><span class='pre'>component</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The component to add</p>\n</div></li></ul></div></div></div><div id='method-beforeMenuShow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Menu'>Ext.layout.boxOverflow.Menu</span><br/><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu-method-beforeMenuShow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Menu-method-beforeMenuShow' class='name expandable'>beforeMenuShow</a>( <span class='pre'>menu</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Called before the overflow menu is shown. ...</div><div class='long'><p>Called before the overflow menu is shown. This constructs the menu's items, caching them for as long as it can.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>menu</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-clearMenu' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Menu'>Ext.layout.boxOverflow.Menu</span><br/><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu-method-clearMenu' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Menu-method-clearMenu' class='name expandable'>clearMenu</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Deletes the sub-menu of each item in the expander menu. ...</div><div class='long'><p>Deletes the sub-menu of each item in the expander menu. Submenus are created for items such as\nsplitbuttons and buttongroups, where the Toolbar item cannot be represented by a single menu item</p>\n</div></div></div><div id='method-clearOverflow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Menu'>Ext.layout.boxOverflow.Menu</span><br/><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu-method-clearOverflow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Menu-method-clearOverflow' class='name expandable'>clearOverflow</a>( <span class='pre'>calculations, targetSize</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>calculations</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>targetSize</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.layout.boxOverflow.None-method-clearOverflow' rel='Ext.layout.boxOverflow.None-method-clearOverflow' class='docClass'>Ext.layout.boxOverflow.None.clearOverflow</a></p></div></div></div><div id='method-createInnerElements' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Menu'>Ext.layout.boxOverflow.Menu</span><br/><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu-method-createInnerElements' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Menu-method-createInnerElements' class='name expandable'>createInnerElements</a>( <span class='pre'>container, target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Creates the beforeCt, innerCt and afterCt elements if they have not already been created ...</div><div class='long'><p>Creates the beforeCt, innerCt and afterCt elements if they have not already been created</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>container</span> : <a href=\"#!/api/Ext.Container\" rel=\"Ext.Container\" class=\"docClass\">Ext.Container</a><div class='sub-desc'><p>The Container attached to this Layout instance</p>\n</div></li><li><span class='pre'>target</span> : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><div class='sub-desc'><p>The target Element</p>\n</div></li></ul></div></div></div><div id='method-createMenu' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Menu'>Ext.layout.boxOverflow.Menu</span><br/><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu-method-createMenu' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Menu-method-createMenu' class='name expandable'>createMenu</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Creates the overflow trigger and menu used when enableOverflow is set to true and the items\nin the layout are too wid...</div><div class='long'><p>Creates the overflow trigger and menu used when enableOverflow is set to true and the items\nin the layout are too wide to fit in the space available</p>\n</div></div></div><div id='method-createMenuConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Menu'>Ext.layout.boxOverflow.Menu</span><br/><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu-method-createMenuConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Menu-method-createMenuConfig' class='name expandable'>createMenuConfig</a>( <span class='pre'>component, hideOnClick</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Returns a menu config for a given component. ...</div><div class='long'><p>Returns a menu config for a given component. This config is used to create a menu item\nto be added to the expander menu</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a><div class='sub-desc'><p>The component to create the config for</p>\n</div></li><li><span class='pre'>hideOnClick</span> : Boolean<div class='sub-desc'><p>Passed through to the menu item</p>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Menu'>Ext.layout.boxOverflow.Menu</span><br/><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Menu-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-handleOverflow' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.layout.boxOverflow.None' rel='Ext.layout.boxOverflow.None' class='defined-in docClass'>Ext.layout.boxOverflow.None</a><br/><a href='source/BoxLayout.html#Ext-layout-boxOverflow-None-method-handleOverflow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.None-method-handleOverflow' class='name expandable'>handleOverflow</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-hideTrigger' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Menu'>Ext.layout.boxOverflow.Menu</span><br/><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu-method-hideTrigger' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Menu-method-hideTrigger' class='name expandable'>hideTrigger</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-showTrigger' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.boxOverflow.Menu'>Ext.layout.boxOverflow.Menu</span><br/><a href='source/MenuOverflow.html#Ext-layout-boxOverflow-Menu-method-showTrigger' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.boxOverflow.Menu-method-showTrigger' class='name expandable'>showTrigger</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>",
    "superclasses": ["Ext.layout.boxOverflow.None"],
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
        "href": "MenuOverflow.html#Ext-layout-boxOverflow-Menu",
        "filename": "MenuOverflow.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.layout.boxOverflow.Menu",
            "meta": {},
            "name": "afterCls",
            "id": "property-afterCls"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.boxOverflow.Menu",
            "meta": {
                "private": true
            },
            "name": "menu",
            "id": "property-menu"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.boxOverflow.Menu",
            "meta": {},
            "name": "menuItems",
            "id": "property-menuItems"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.boxOverflow.Menu",
            "meta": {
                "private": true
            },
            "name": "menuTrigger",
            "id": "property-menuTrigger"
        }, {
            "tagname": "property",
            "owner": "Ext.layout.boxOverflow.Menu",
            "meta": {},
            "name": "noItemsMenuText",
            "id": "property-noItemsMenuText"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.layout.boxOverflow.Menu",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.boxOverflow.Menu",
            "meta": {
                "private": true
            },
            "name": "addComponentToMenu",
            "id": "method-addComponentToMenu"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.boxOverflow.Menu",
            "meta": {
                "private": true
            },
            "name": "beforeMenuShow",
            "id": "method-beforeMenuShow"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.boxOverflow.Menu",
            "meta": {
                "private": true
            },
            "name": "clearMenu",
            "id": "method-clearMenu"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.boxOverflow.Menu",
            "meta": {
                "private": true
            },
            "name": "clearOverflow",
            "id": "method-clearOverflow"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.boxOverflow.Menu",
            "meta": {
                "private": true
            },
            "name": "createInnerElements",
            "id": "method-createInnerElements"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.boxOverflow.Menu",
            "meta": {
                "private": true
            },
            "name": "createMenu",
            "id": "method-createMenu"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.boxOverflow.Menu",
            "meta": {
                "private": true
            },
            "name": "createMenuConfig",
            "id": "method-createMenuConfig"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.boxOverflow.Menu",
            "meta": {
                "private": true
            },
            "name": "destroy",
            "id": "method-destroy"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.boxOverflow.None",
            "meta": {
                "private": true
            },
            "name": "handleOverflow",
            "id": "method-handleOverflow"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.boxOverflow.Menu",
            "meta": {
                "private": true
            },
            "name": "hideTrigger",
            "id": "method-hideTrigger"
        }, {
            "tagname": "method",
            "owner": "Ext.layout.boxOverflow.Menu",
            "meta": {
                "private": true
            },
            "name": "showTrigger",
            "id": "method-showTrigger"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.layout.boxOverflow.Menu",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.layout.boxOverflow.Menu",
    "mixins": [],
    "mixedInto": []
});