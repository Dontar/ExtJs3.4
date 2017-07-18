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
Ext.data.JsonP.Ext_dd_ScrollManager({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ScrollManager.html#Ext-dd-ScrollManager' target='_blank'>ScrollManager.js</a></div></pre><div class='doc-contents'><p>Provides automatic scrolling of overflow regions in the page during drag operations.</p>\n\n\n<p>The ScrollManager configs will be used as the defaults for any scroll container registered with it,\nbut you can also override most of the configs per scroll container by adding a \n<tt>ddScrollConfig</tt> object to the target element that contains these properties: <a href=\"#!/api/Ext.dd.ScrollManager-property-hthresh\" rel=\"Ext.dd.ScrollManager-property-hthresh\" class=\"docClass\">hthresh</a>,\n<a href=\"#!/api/Ext.dd.ScrollManager-property-vthresh\" rel=\"Ext.dd.ScrollManager-property-vthresh\" class=\"docClass\">vthresh</a>, <a href=\"#!/api/Ext.dd.ScrollManager-property-increment\" rel=\"Ext.dd.ScrollManager-property-increment\" class=\"docClass\">increment</a> and <a href=\"#!/api/Ext.dd.ScrollManager-property-frequency\" rel=\"Ext.dd.ScrollManager-property-frequency\" class=\"docClass\">frequency</a>.  Example usage:\n<pre><code>var el = <a href=\"#!/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a>('scroll-ct');\nel.ddScrollConfig = {\n    vthresh: 50,\n    hthresh: -1,\n    frequency: 100,\n    increment: 200\n};\n<a href=\"#!/api/Ext.dd.ScrollManager-method-register\" rel=\"Ext.dd.ScrollManager-method-register\" class=\"docClass\">Ext.dd.ScrollManager.register</a>(el);\n</code></pre>\n<b>Note: This class uses \"Point Mode\" and is untested in \"Intersect Mode\".</b>\n\n</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-animDuration' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.ScrollManager'>Ext.dd.ScrollManager</span><br/><a href='source/ScrollManager.html#Ext-dd-ScrollManager-property-animDuration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.ScrollManager-property-animDuration' class='name expandable'>animDuration</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The animation duration in seconds -\nMUST BE less than Ext.dd.ScrollManager.frequency! (defaults to .4) ...</div><div class='long'><p>The animation duration in seconds -\nMUST BE less than <a href=\"#!/api/Ext.dd.ScrollManager-property-frequency\" rel=\"Ext.dd.ScrollManager-property-frequency\" class=\"docClass\">Ext.dd.ScrollManager.frequency</a>! (defaults to .4)</p>\n<p>Defaults to: <code>.4</code></p></div></div></div><div id='property-animate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.ScrollManager'>Ext.dd.ScrollManager</span><br/><a href='source/ScrollManager.html#Ext-dd-ScrollManager-property-animate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.ScrollManager-property-animate' class='name expandable'>animate</a><span> : Boolean</span></div><div class='description'><div class='short'>True to animate the scroll (defaults to true) ...</div><div class='long'><p>True to animate the scroll (defaults to true)</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-ddGroup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.ScrollManager'>Ext.dd.ScrollManager</span><br/><a href='source/ScrollManager.html#Ext-dd-ScrollManager-property-ddGroup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.ScrollManager-property-ddGroup' class='name expandable'>ddGroup</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The named drag drop group to which this container belongs (defaults to undefined). ...</div><div class='long'><p>The named drag drop <a href=\"#!/api/Ext.dd.DragSource-cfg-ddGroup\" rel=\"Ext.dd.DragSource-cfg-ddGroup\" class=\"docClass\">group</a> to which this container belongs (defaults to undefined).\nIf a ddGroup is specified, then container scrolling will only occur when a dragged object is in the same ddGroup.</p>\n</div></div></div><div id='property-frequency' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.ScrollManager'>Ext.dd.ScrollManager</span><br/><a href='source/ScrollManager.html#Ext-dd-ScrollManager-property-frequency' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.ScrollManager-property-frequency' class='name expandable'>frequency</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The frequency of scrolls in milliseconds (defaults to 500) ...</div><div class='long'><p>The frequency of scrolls in milliseconds (defaults to 500)</p>\n<p>Defaults to: <code>500</code></p></div></div></div><div id='property-hthresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.ScrollManager'>Ext.dd.ScrollManager</span><br/><a href='source/ScrollManager.html#Ext-dd-ScrollManager-property-hthresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.ScrollManager-property-hthresh' class='name expandable'>hthresh</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The number of pixels from the right or left edge of a container the pointer needs to be to\ntrigger scrolling (default...</div><div class='long'><p>The number of pixels from the right or left edge of a container the pointer needs to be to\ntrigger scrolling (defaults to 25)</p>\n<p>Defaults to: <code>25</code></p></div></div></div><div id='property-increment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.ScrollManager'>Ext.dd.ScrollManager</span><br/><a href='source/ScrollManager.html#Ext-dd-ScrollManager-property-increment' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.ScrollManager-property-increment' class='name expandable'>increment</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The number of pixels to scroll in each scroll increment (defaults to 100) ...</div><div class='long'><p>The number of pixels to scroll in each scroll increment (defaults to 100)</p>\n<p>Defaults to: <code>100</code></p></div></div></div><div id='property-vthresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.ScrollManager'>Ext.dd.ScrollManager</span><br/><a href='source/ScrollManager.html#Ext-dd-ScrollManager-property-vthresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.ScrollManager-property-vthresh' class='name expandable'>vthresh</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The number of pixels from the top or bottom edge of a container the pointer needs to be to\ntrigger scrolling (default...</div><div class='long'><p>The number of pixels from the top or bottom edge of a container the pointer needs to be to\ntrigger scrolling (defaults to 25)</p>\n<p>Defaults to: <code>25</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-refreshCache' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.ScrollManager'>Ext.dd.ScrollManager</span><br/><a href='source/ScrollManager.html#Ext-dd-ScrollManager-method-refreshCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.ScrollManager-method-refreshCache' class='name expandable'>refreshCache</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Manually trigger a cache refresh. ...</div><div class='long'><p>Manually trigger a cache refresh.</p>\n</div></div></div><div id='method-register' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.ScrollManager'>Ext.dd.ScrollManager</span><br/><a href='source/ScrollManager.html#Ext-dd-ScrollManager-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.ScrollManager-method-register' class='name expandable'>register</a>( <span class='pre'>el</span> )</div><div class='description'><div class='short'>Registers new overflow element(s) to auto scroll ...</div><div class='long'><p>Registers new overflow element(s) to auto scroll</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The id of or the element to be scrolled or an array of either</p>\n</div></li></ul></div></div></div><div id='method-unregister' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.ScrollManager'>Ext.dd.ScrollManager</span><br/><a href='source/ScrollManager.html#Ext-dd-ScrollManager-method-unregister' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.ScrollManager-method-unregister' class='name expandable'>unregister</a>( <span class='pre'>el</span> )</div><div class='description'><div class='short'>Unregisters overflow element(s) so they are no longer scrolled ...</div><div class='long'><p>Unregisters overflow element(s) so they are no longer scrolled</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Mixed/<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>The id of or the element to be removed or an array of either</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "ScrollManager.html#Ext-dd-ScrollManager",
        "filename": "ScrollManager.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.dd.ScrollManager",
            "meta": {},
            "name": "animDuration",
            "id": "property-animDuration"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.ScrollManager",
            "meta": {},
            "name": "animate",
            "id": "property-animate"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.ScrollManager",
            "meta": {},
            "name": "ddGroup",
            "id": "property-ddGroup"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.ScrollManager",
            "meta": {},
            "name": "frequency",
            "id": "property-frequency"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.ScrollManager",
            "meta": {},
            "name": "hthresh",
            "id": "property-hthresh"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.ScrollManager",
            "meta": {},
            "name": "increment",
            "id": "property-increment"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.ScrollManager",
            "meta": {},
            "name": "vthresh",
            "id": "property-vthresh"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.dd.ScrollManager",
            "meta": {},
            "name": "refreshCache",
            "id": "method-refreshCache"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.ScrollManager",
            "meta": {},
            "name": "register",
            "id": "method-register"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.ScrollManager",
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
    "name": "Ext.dd.ScrollManager",
    "singleton": true,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.dd.ScrollManager",
    "mixins": [],
    "mixedInto": []
});