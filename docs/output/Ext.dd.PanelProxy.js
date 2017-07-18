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
Ext.data.JsonP.Ext_dd_PanelProxy({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/PanelDD.html#Ext-dd-PanelProxy' target='_blank'>PanelDD.js</a></div></pre><div class='doc-contents'><p>A custom drag proxy implementation specific to <a href=\"#!/api/Ext.Panel\" rel=\"Ext.Panel\" class=\"docClass\">Ext.Panel</a>s. This class is primarily used internally\nfor the Panel's drag drop implementation, and should never need to be created directly.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-insertProxy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.PanelProxy'>Ext.dd.PanelProxy</span><br/><a href='source/PanelDD.html#Ext-dd-PanelProxy-cfg-insertProxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.PanelProxy-cfg-insertProxy' class='name expandable'>insertProxy</a><span> : Boolean</span></div><div class='description'><div class='short'>True to insert a placeholder proxy element while dragging the panel,\nfalse to drag with no proxy (defaults to true). ...</div><div class='long'><p>True to insert a placeholder proxy element while dragging the panel,\nfalse to drag with no proxy (defaults to true).</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.PanelProxy'>Ext.dd.PanelProxy</span><br/><a href='source/PanelDD.html#Ext-dd-PanelProxy-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.dd.PanelProxy-method-constructor' class='name expandable'>Ext.dd.PanelProxy</a>( <span class='pre'>panel, config</span> ) : <a href=\"#!/api/Ext.dd.PanelProxy\" rel=\"Ext.dd.PanelProxy\" class=\"docClass\">Ext.dd.PanelProxy</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>panel</span> : Object<div class='sub-desc'><p>The <a href=\"#!/api/Ext.Panel\" rel=\"Ext.Panel\" class=\"docClass\">Ext.Panel</a> to proxy for</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>Configuration options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.dd.PanelProxy\" rel=\"Ext.dd.PanelProxy\" class=\"docClass\">Ext.dd.PanelProxy</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.PanelProxy'>Ext.dd.PanelProxy</span><br/><a href='source/PanelDD.html#Ext-dd-PanelProxy-method-getEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.PanelProxy-method-getEl' class='name expandable'>getEl</a>( <span class='pre'></span> ) : Element</div><div class='description'><div class='short'>Gets the proxy's element ...</div><div class='long'><p>Gets the proxy's element</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Element</span><div class='sub-desc'><p>The proxy's element</p>\n</div></li></ul></div></div></div><div id='method-getGhost' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.PanelProxy'>Ext.dd.PanelProxy</span><br/><a href='source/PanelDD.html#Ext-dd-PanelProxy-method-getGhost' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.PanelProxy-method-getGhost' class='name expandable'>getGhost</a>( <span class='pre'></span> ) : Element</div><div class='description'><div class='short'>Gets the proxy's ghost element ...</div><div class='long'><p>Gets the proxy's ghost element</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Element</span><div class='sub-desc'><p>The proxy's ghost element</p>\n</div></li></ul></div></div></div><div id='method-getProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.PanelProxy'>Ext.dd.PanelProxy</span><br/><a href='source/PanelDD.html#Ext-dd-PanelProxy-method-getProxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.PanelProxy-method-getProxy' class='name expandable'>getProxy</a>( <span class='pre'></span> ) : Element</div><div class='description'><div class='short'>Gets the proxy's element ...</div><div class='long'><p>Gets the proxy's element</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Element</span><div class='sub-desc'><p>The proxy's element</p>\n</div></li></ul></div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.PanelProxy'>Ext.dd.PanelProxy</span><br/><a href='source/PanelDD.html#Ext-dd-PanelProxy-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.PanelProxy-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Hides the proxy ...</div><div class='long'><p>Hides the proxy</p>\n</div></div></div><div id='method-moveProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.PanelProxy'>Ext.dd.PanelProxy</span><br/><a href='source/PanelDD.html#Ext-dd-PanelProxy-method-moveProxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.PanelProxy-method-moveProxy' class='name expandable'>moveProxy</a>( <span class='pre'>parentNode, [before]</span> )</div><div class='description'><div class='short'>Moves the proxy to a different position in the DOM. ...</div><div class='long'><p>Moves the proxy to a different position in the DOM.  This is typically called while dragging the Panel\nto keep the proxy sync'd to the Panel's location.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parentNode</span> : HTMLElement<div class='sub-desc'><p>The proxy's parent DOM node</p>\n</div></li><li><span class='pre'>before</span> : HTMLElement (optional)<div class='sub-desc'><p>The sibling node before which the proxy should be inserted (defaults\nto the parent's last child if not specified)</p>\n</div></li></ul></div></div></div><div id='method-repair' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.PanelProxy'>Ext.dd.PanelProxy</span><br/><a href='source/PanelDD.html#Ext-dd-PanelProxy-method-repair' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.PanelProxy-method-repair' class='name expandable'>repair</a>( <span class='pre'>xy, callback, scope</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xy</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-reset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.PanelProxy'>Ext.dd.PanelProxy</span><br/><a href='source/PanelDD.html#Ext-dd-PanelProxy-method-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.PanelProxy-method-reset' class='name expandable'>reset</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.PanelProxy'>Ext.dd.PanelProxy</span><br/><a href='source/PanelDD.html#Ext-dd-PanelProxy-method-setStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.PanelProxy-method-setStatus' class='name expandable'>setStatus</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private overrides ...</div><div class='long'><p>private overrides</p>\n</div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.PanelProxy'>Ext.dd.PanelProxy</span><br/><a href='source/PanelDD.html#Ext-dd-PanelProxy-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.PanelProxy-method-show' class='name expandable'>show</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Shows the proxy ...</div><div class='long'><p>Shows the proxy</p>\n</div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.PanelProxy'>Ext.dd.PanelProxy</span><br/><a href='source/PanelDD.html#Ext-dd-PanelProxy-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.PanelProxy-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-sync' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.PanelProxy'>Ext.dd.PanelProxy</span><br/><a href='source/PanelDD.html#Ext-dd-PanelProxy-method-sync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.PanelProxy-method-sync' class='name expandable'>sync</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.PanelProxy'>Ext.dd.PanelProxy</span><br/><a href='source/PanelDD.html#Ext-dd-PanelProxy-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.PanelProxy-method-update' class='name expandable'>update</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>",
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
        "href": "PanelDD.html#Ext-dd-PanelProxy",
        "filename": "PanelDD.js"
    }],
    "linenr": 1,
    "members": {
        "property": [],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.dd.PanelProxy",
            "meta": {},
            "name": "insertProxy",
            "id": "cfg-insertProxy"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.dd.PanelProxy",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.PanelProxy",
            "meta": {},
            "name": "getEl",
            "id": "method-getEl"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.PanelProxy",
            "meta": {},
            "name": "getGhost",
            "id": "method-getGhost"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.PanelProxy",
            "meta": {},
            "name": "getProxy",
            "id": "method-getProxy"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.PanelProxy",
            "meta": {},
            "name": "hide",
            "id": "method-hide"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.PanelProxy",
            "meta": {},
            "name": "moveProxy",
            "id": "method-moveProxy"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.PanelProxy",
            "meta": {
                "private": true
            },
            "name": "repair",
            "id": "method-repair"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.PanelProxy",
            "meta": {
                "private": true
            },
            "name": "reset",
            "id": "method-reset"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.PanelProxy",
            "meta": {
                "private": true
            },
            "name": "setStatus",
            "id": "method-setStatus"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.PanelProxy",
            "meta": {},
            "name": "show",
            "id": "method-show"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.PanelProxy",
            "meta": {
                "private": true
            },
            "name": "stop",
            "id": "method-stop"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.PanelProxy",
            "meta": {
                "private": true
            },
            "name": "sync",
            "id": "method-sync"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.PanelProxy",
            "meta": {
                "private": true
            },
            "name": "update",
            "id": "method-update"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.dd.PanelProxy",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.dd.PanelProxy",
    "mixins": [],
    "mixedInto": []
});