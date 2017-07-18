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
Ext.data.JsonP.Ext_dd_DragDropMgr_ElementWrapper({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/DDCore.html#Ext-dd-DragDropMgr-ElementWrapper' target='_blank'>DDCore.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>Inner class for cached elements @for DragDropMgr</p>\n        <div class='signature-box deprecated'>\n        <p>This class has been <strong>deprecated</strong> </p>\n        \n\n        </div>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_timeoutCount' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr.ElementWrapper'>Ext.dd.DragDropMgr.ElementWrapper</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-ElementWrapper-property-_timeoutCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr.ElementWrapper-property-_timeoutCount' class='name expandable'>_timeoutCount</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Internal counter ...</div><div class='long'><p>Internal counter</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-css' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr.ElementWrapper'>Ext.dd.DragDropMgr.ElementWrapper</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-ElementWrapper-property-css' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr.ElementWrapper-property-css' class='name not-expandable'>css</a><span> : Object</span></div><div class='description'><div class='short'><p>A reference to the style property</p>\n</div><div class='long'><p>A reference to the style property</p>\n</div></div></div><div id='property-el' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr.ElementWrapper'>Ext.dd.DragDropMgr.ElementWrapper</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-ElementWrapper-property-el' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr.ElementWrapper-property-el' class='name not-expandable'>el</a><span> : Object</span></div><div class='description'><div class='short'><p>The element</p>\n</div><div class='long'><p>The element</p>\n</div></div></div><div id='property-id' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr.ElementWrapper'>Ext.dd.DragDropMgr.ElementWrapper</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-ElementWrapper-property-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr.ElementWrapper-property-id' class='name not-expandable'>id</a><span> : Object</span></div><div class='description'><div class='short'><p>The element id</p>\n</div><div class='long'><p>The element id</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_addListeners' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr.ElementWrapper'>Ext.dd.DragDropMgr.ElementWrapper</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-ElementWrapper-method-_addListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr.ElementWrapper-method-_addListeners' class='name expandable'>_addListeners</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Trying to make the load order less important. ...</div><div class='long'><p>Trying to make the load order less important.  Without this we get\nan error if this file is loaded before the Event Utility.</p>\n</div></div></div><div id='method-getPosX' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr.ElementWrapper'>Ext.dd.DragDropMgr.ElementWrapper</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-ElementWrapper-method-getPosX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr.ElementWrapper-method-getPosX' class='name expandable'>getPosX</a>( <span class='pre'>el</span> ) : int<strong class='deprecated signature' >deprecated</strong></div><div class='description'><div class='short'>Returns the X position of an html element ...</div><div class='long'><p>Returns the X position of an html element</p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>use Ext.lib.Dom.getX instead</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'><p>the element for which to get the position</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>int</span><div class='sub-desc'><p>the X coordinate\n@for DragDropMgr</p>\n</div></li></ul></div></div></div><div id='method-getPosY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr.ElementWrapper'>Ext.dd.DragDropMgr.ElementWrapper</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-ElementWrapper-method-getPosY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr.ElementWrapper-method-getPosY' class='name expandable'>getPosY</a>( <span class='pre'>el</span> ) : int<strong class='deprecated signature' >deprecated</strong></div><div class='description'><div class='short'>Returns the Y position of an html element ...</div><div class='long'><p>Returns the Y position of an html element</p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>use Ext.lib.Dom.getY instead</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : Object<div class='sub-desc'><p>the element for which to get the position</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>int</span><div class='sub-desc'><p>the Y coordinate</p>\n</div></li></ul></div></div></div><div id='method-getScroll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr.ElementWrapper'>Ext.dd.DragDropMgr.ElementWrapper</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-ElementWrapper-method-getScroll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr.ElementWrapper-method-getScroll' class='name expandable'>getScroll</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Returns the current scroll position ...</div><div class='long'><p>Returns the current scroll position</p>\n</div></div></div><div id='method-getScrollLeft' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr.ElementWrapper'>Ext.dd.DragDropMgr.ElementWrapper</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-ElementWrapper-method-getScrollLeft' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr.ElementWrapper-method-getScrollLeft' class='name expandable'>getScrollLeft</a>( <span class='pre'></span> ) : int</div><div class='description'><div class='short'>Gets the scrollLeft ...</div><div class='long'><p>Gets the scrollLeft</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>int</span><div class='sub-desc'><p>the document's scrollTop</p>\n</div></li></ul></div></div></div><div id='method-getScrollTop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr.ElementWrapper'>Ext.dd.DragDropMgr.ElementWrapper</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-ElementWrapper-method-getScrollTop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr.ElementWrapper-method-getScrollTop' class='name expandable'>getScrollTop</a>( <span class='pre'></span> ) : int</div><div class='description'><div class='short'>Gets the scrollTop ...</div><div class='long'><p>Gets the scrollTop</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>int</span><div class='sub-desc'><p>the document's scrollTop</p>\n</div></li></ul></div></div></div><div id='method-getStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr.ElementWrapper'>Ext.dd.DragDropMgr.ElementWrapper</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-ElementWrapper-method-getStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr.ElementWrapper-method-getStyle' class='name expandable'>getStyle</a>( <span class='pre'>el, styleProp</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a><strong class='deprecated signature' >deprecated</strong></div><div class='description'><div class='short'>Returns the specified element style property ...</div><div class='long'><p>Returns the specified element style property</p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>use Ext.lib.Dom.getStyle</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : HTMLElement<div class='sub-desc'><p>the element</p>\n</div></li><li><span class='pre'>styleProp</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a><div class='sub-desc'><p>the style property</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">string</a></span><div class='sub-desc'><p>The value of the style property</p>\n</div></li></ul></div></div></div><div id='method-handleWasClicked' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr.ElementWrapper'>Ext.dd.DragDropMgr.ElementWrapper</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-ElementWrapper-method-handleWasClicked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr.ElementWrapper-method-handleWasClicked' class='name expandable'>handleWasClicked</a>( <span class='pre'>node</span> )</div><div class='description'><div class='short'>Recursively searches the immediate parent and all child nodes for\nthe handle element in order to determine wheter or ...</div><div class='long'><p>Recursively searches the immediate parent and all child nodes for\nthe handle element in order to determine wheter or not it was\nclicked.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'><p>the html element to inspect</p>\n</div></li></ul></div></div></div><div id='method-moveToEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr.ElementWrapper'>Ext.dd.DragDropMgr.ElementWrapper</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-ElementWrapper-method-moveToEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr.ElementWrapper-method-moveToEl' class='name expandable'>moveToEl</a>( <span class='pre'>moveEl, targetEl</span> )</div><div class='description'><div class='short'>Sets the x/y position of an element to the location of the\ntarget element. ...</div><div class='long'><p>Sets the x/y position of an element to the location of the\ntarget element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>moveEl</span> : HTMLElement<div class='sub-desc'><p>The element to move</p>\n</div></li><li><span class='pre'>targetEl</span> : HTMLElement<div class='sub-desc'><p>The position reference element</p>\n</div></li></ul></div></div></div><div id='method-numericSort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr.ElementWrapper'>Ext.dd.DragDropMgr.ElementWrapper</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-ElementWrapper-method-numericSort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr.ElementWrapper-method-numericSort' class='name expandable'>numericSort</a>( <span class='pre'>a, b</span> )</div><div class='description'><div class='short'>Numeric array sort function ...</div><div class='long'><p>Numeric array sort function</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>a</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>b</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-swapNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.DragDropMgr.ElementWrapper'>Ext.dd.DragDropMgr.ElementWrapper</span><br/><a href='source/DDCore.html#Ext-dd-DragDropMgr-ElementWrapper-method-swapNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.DragDropMgr.ElementWrapper-method-swapNode' class='name expandable'>swapNode</a>( <span class='pre'>n1, n2</span> )</div><div class='description'><div class='short'>Swap two nodes. ...</div><div class='long'><p>Swap two nodes.  In IE, we use the native method, for others we\nemulate the IE behavior</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>n1</span> : Object<div class='sub-desc'><p>the first node to swap</p>\n</div></li><li><span class='pre'>n2</span> : Object<div class='sub-desc'><p>the other node to swap</p>\n</div></li></ul></div></div></div></div></div></div></div>",
    "superclasses": [],
    "meta": {
        "private": true,
        "deprecated": {
            "text": ""
        }
    },
    "requires": [],
    "html_meta": {
        "private": null,
        "deprecated": "        <div class='signature-box deprecated'>\n        <p>This class has been <strong>deprecated</strong> </p>\n        \n\n        </div>\n"
    },
    "statics": {
        "property": [],
        "cfg": [],
        "css_var": [],
        "method": [],
        "event": [],
        "css_mixin": []
    },
    "files": [{
        "href": "DDCore.html#Ext-dd-DragDropMgr-ElementWrapper",
        "filename": "DDCore.js"
    }],
    "linenr": 2296,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr.ElementWrapper",
            "meta": {
                "private": true
            },
            "name": "_timeoutCount",
            "id": "property-_timeoutCount"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr.ElementWrapper",
            "meta": {},
            "name": "css",
            "id": "property-css"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr.ElementWrapper",
            "meta": {},
            "name": "el",
            "id": "property-el"
        }, {
            "tagname": "property",
            "owner": "Ext.dd.DragDropMgr.ElementWrapper",
            "meta": {},
            "name": "id",
            "id": "property-id"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr.ElementWrapper",
            "meta": {
                "private": true
            },
            "name": "_addListeners",
            "id": "method-_addListeners"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr.ElementWrapper",
            "meta": {
                "deprecated": {
                    "text": "use Ext.lib.Dom.getX instead"
                }
            },
            "name": "getPosX",
            "id": "method-getPosX"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr.ElementWrapper",
            "meta": {
                "deprecated": {
                    "text": "use Ext.lib.Dom.getY instead"
                }
            },
            "name": "getPosY",
            "id": "method-getPosY"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr.ElementWrapper",
            "meta": {
                "private": true
            },
            "name": "getScroll",
            "id": "method-getScroll"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr.ElementWrapper",
            "meta": {},
            "name": "getScrollLeft",
            "id": "method-getScrollLeft"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr.ElementWrapper",
            "meta": {},
            "name": "getScrollTop",
            "id": "method-getScrollTop"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr.ElementWrapper",
            "meta": {
                "deprecated": {
                    "text": "use Ext.lib.Dom.getStyle"
                }
            },
            "name": "getStyle",
            "id": "method-getStyle"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr.ElementWrapper",
            "meta": {},
            "name": "handleWasClicked",
            "id": "method-handleWasClicked"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr.ElementWrapper",
            "meta": {},
            "name": "moveToEl",
            "id": "method-moveToEl"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr.ElementWrapper",
            "meta": {},
            "name": "numericSort",
            "id": "method-numericSort"
        }, {
            "tagname": "method",
            "owner": "Ext.dd.DragDropMgr.ElementWrapper",
            "meta": {},
            "name": "swapNode",
            "id": "method-swapNode"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": true,
    "component": false,
    "name": "Ext.dd.DragDropMgr.ElementWrapper",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.dd.DragDropMgr.ElementWrapper",
    "mixins": [],
    "mixedInto": []
});