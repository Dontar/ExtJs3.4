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
Ext.data.JsonP.Ext_Shadow({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Shadow.html#Ext-Shadow' target='_blank'>Shadow.js</a></div></pre><div class='doc-contents'><p>Simple class that can provide a shadow effect for any element.  Note that the element MUST be absolutely positioned,\nand the shadow does not provide any shimming.  This should be used only in simple cases -- for more advanced\nfunctionality that can also provide the same shadow effect, see the <a href=\"#!/api/Ext.Layer\" rel=\"Ext.Layer\" class=\"docClass\">Ext.Layer</a> class.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-mode' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Shadow'>Ext.Shadow</span><br/><a href='source/Shadow.html#Ext-Shadow-cfg-mode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Shadow-cfg-mode' class='name expandable'>mode</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The shadow display mode. ...</div><div class='long'><p>The shadow display mode.  Supports the following options:<div class=\"mdetail-params\"><ul>\n<li><b><tt>sides</tt></b> : Shadow displays on both sides and bottom only</li>\n<li><b><tt>frame</tt></b> : Shadow displays equally on all four sides</li>\n<li><b><tt>drop</tt></b> : Traditional bottom-right drop shadow</li>\n</ul></div></p>\n</div></div></div><div id='cfg-offset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Shadow'>Ext.Shadow</span><br/><a href='source/Shadow.html#Ext-Shadow-cfg-offset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Shadow-cfg-offset' class='name expandable'>offset</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The number of pixels to offset the shadow from the element (defaults to 4) ...</div><div class='long'><p>The number of pixels to offset the shadow from the element (defaults to <tt>4</tt>)</p>\n<p>Defaults to: <code>4</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Shadow'>Ext.Shadow</span><br/><a href='source/Shadow.html#Ext-Shadow-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.Shadow-method-constructor' class='name expandable'>Ext.Shadow</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.Shadow\" rel=\"Ext.Shadow\" class=\"docClass\">Ext.Shadow</a></div><div class='description'><div class='short'>Create a new Shadow ...</div><div class='long'><p>Create a new Shadow</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The config object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Shadow\" rel=\"Ext.Shadow\" class=\"docClass\">Ext.Shadow</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Shadow'>Ext.Shadow</span><br/><a href='source/Shadow.html#Ext-Shadow-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Shadow-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Hides this shadow ...</div><div class='long'><p>Hides this shadow</p>\n</div></div></div><div id='method-isVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Shadow'>Ext.Shadow</span><br/><a href='source/Shadow.html#Ext-Shadow-method-isVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Shadow-method-isVisible' class='name expandable'>isVisible</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Returns true if the shadow is visible, else false ...</div><div class='long'><p>Returns true if the shadow is visible, else false</p>\n</div></div></div><div id='method-realign' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Shadow'>Ext.Shadow</span><br/><a href='source/Shadow.html#Ext-Shadow-method-realign' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Shadow-method-realign' class='name expandable'>realign</a>( <span class='pre'>left, top, width, height</span> )</div><div class='description'><div class='short'>Direct alignment when values are already available. ...</div><div class='long'><p>Direct alignment when values are already available. Show must be called at least once before\ncalling this method to ensure it is initialized.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>left</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The target element left position</p>\n</div></li><li><span class='pre'>top</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The target element top position</p>\n</div></li><li><span class='pre'>width</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The target element width</p>\n</div></li><li><span class='pre'>height</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The target element height</p>\n</div></li></ul></div></div></div><div id='method-setZIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Shadow'>Ext.Shadow</span><br/><a href='source/Shadow.html#Ext-Shadow-method-setZIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Shadow-method-setZIndex' class='name expandable'>setZIndex</a>( <span class='pre'>zindex</span> )</div><div class='description'><div class='short'>Adjust the z-index of this shadow ...</div><div class='long'><p>Adjust the z-index of this shadow</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>zindex</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The new z-index</p>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Shadow'>Ext.Shadow</span><br/><a href='source/Shadow.html#Ext-Shadow-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Shadow-method-show' class='name expandable'>show</a>( <span class='pre'>targetEl</span> )</div><div class='description'><div class='short'>Displays the shadow under the target element ...</div><div class='long'><p>Displays the shadow under the target element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>targetEl</span> : Mixed<div class='sub-desc'><p>The id or element under which the shadow should display</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "Shadow.html#Ext-Shadow",
        "filename": "Shadow.js"
    }],
    "linenr": 1,
    "members": {
        "property": [],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.Shadow",
            "meta": {},
            "name": "mode",
            "id": "cfg-mode"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Shadow",
            "meta": {},
            "name": "offset",
            "id": "cfg-offset"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.Shadow",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.Shadow",
            "meta": {},
            "name": "hide",
            "id": "method-hide"
        }, {
            "tagname": "method",
            "owner": "Ext.Shadow",
            "meta": {},
            "name": "isVisible",
            "id": "method-isVisible"
        }, {
            "tagname": "method",
            "owner": "Ext.Shadow",
            "meta": {},
            "name": "realign",
            "id": "method-realign"
        }, {
            "tagname": "method",
            "owner": "Ext.Shadow",
            "meta": {},
            "name": "setZIndex",
            "id": "method-setZIndex"
        }, {
            "tagname": "method",
            "owner": "Ext.Shadow",
            "meta": {},
            "name": "show",
            "id": "method-show"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.Shadow",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.Shadow",
    "mixins": [],
    "mixedInto": []
});