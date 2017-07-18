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
Ext.data.JsonP.Ext_QuickTips({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/QuickTips.html#Ext-QuickTips' target='_blank'>QuickTips.js</a></div></pre><div class='doc-contents'><p>Provides attractive and customizable tooltips for any element. The QuickTips\nsingleton is used to configure and manage tooltips globally for multiple elements\nin a generic manner.  To create individual tooltips with maximum customizability,\nyou should consider either <a href=\"#!/api/Ext.Tip\" rel=\"Ext.Tip\" class=\"docClass\">Ext.Tip</a> or <a href=\"#!/api/Ext.ToolTip\" rel=\"Ext.ToolTip\" class=\"docClass\">Ext.ToolTip</a>.</p>\n\n\n<p>Quicktips can be configured via tag attributes directly in markup, or by\nregistering quick tips programmatically via the <a href=\"#!/api/Ext.QuickTips-method-register\" rel=\"Ext.QuickTips-method-register\" class=\"docClass\">register</a> method.</p>\n\n\n<p>The singleton's instance of <a href=\"#!/api/Ext.QuickTip\" rel=\"Ext.QuickTip\" class=\"docClass\">Ext.QuickTip</a> is available via\n<a href=\"#!/api/Ext.QuickTips-method-getQuickTip\" rel=\"Ext.QuickTips-method-getQuickTip\" class=\"docClass\">getQuickTip</a>, and supports all the methods, and all the all the\nconfiguration properties of <a href=\"#!/api/Ext.QuickTip\" rel=\"Ext.QuickTip\" class=\"docClass\">Ext.QuickTip</a>. These settings will apply to all\ntooltips shown by the singleton.</p>\n\n\n<p>Below is the summary of the configuration properties which can be used.\nFor detailed descriptions see the config options for the <a href=\"#!/api/Ext.QuickTip\" rel=\"Ext.QuickTip\" class=\"docClass\">QuickTip</a> class</p>\n\n\n<p><b>QuickTips singleton configs (all are optional)</b></p>\n\n\n<div class=\"mdetail-params\"><ul><li>dismissDelay</li>\n<li>hideDelay</li>\n<li>maxWidth</li>\n<li>minWidth</li>\n<li>showDelay</li>\n<li>trackMouse</li></ul></div>\n\n\n<p><b>Target element configs (optional unless otherwise noted)</b></p>\n\n\n<div class=\"mdetail-params\"><ul><li>autoHide</li>\n<li>cls</li>\n<li>dismissDelay (overrides singleton value)</li>\n<li>target (required)</li>\n<li>text (required)</li>\n<li>title</li>\n<li>width</li></ul></div>\n\n\n<p>Here is an example showing how some of these config options could be used:</p>\n\n\n<pre><code>// Init the singleton.  Any tag-based quick tips will start working.\n<a href=\"#!/api/Ext.QuickTips-method-init\" rel=\"Ext.QuickTips-method-init\" class=\"docClass\">Ext.QuickTips.init</a>();\n\n// Apply a set of config properties to the singleton\n<a href=\"#!/api/Ext-method-apply\" rel=\"Ext-method-apply\" class=\"docClass\">Ext.apply</a>(<a href=\"#!/api/Ext.QuickTips-method-getQuickTip\" rel=\"Ext.QuickTips-method-getQuickTip\" class=\"docClass\">Ext.QuickTips.getQuickTip</a>(), {\n    maxWidth: 200,\n    minWidth: 100,\n    showDelay: 50,      // Show 50ms after entering target\n    trackMouse: true\n});\n\n// Manually register a quick tip for a specific element\n<a href=\"#!/api/Ext.QuickTips-method-register\" rel=\"Ext.QuickTips-method-register\" class=\"docClass\">Ext.QuickTips.register</a>({\n    target: 'my-div',\n    title: 'My Tooltip',\n    text: 'This tooltip was added in code',\n    width: 100,\n    dismissDelay: 10000 // Hide after 10 seconds hover\n});\n</code></pre>\n\n\n<p>To register a quick tip in markup, you simply add one or more of the valid QuickTip attributes prefixed with\nthe <b>ext:</b> namespace.  The HTML element itself is automatically set as the quick tip target. Here is the summary\nof supported attributes (optional unless otherwise noted):</p>\n\n\n<ul><li><b>hide</b>: Specifying \"user\" is equivalent to setting autoHide = false.  Any other value will be the\nsame as autoHide = true.</li>\n<li><b>qclass</b>: A CSS class to be applied to the quick tip (equivalent to the 'cls' target element config).</li>\n<li><b>qtip (required)</b>: The quick tip text (equivalent to the 'text' target element config).</li>\n<li><b>qtitle</b>: The quick tip title (equivalent to the 'title' target element config).</li>\n<li><b>qwidth</b>: The quick tip width (equivalent to the 'width' target element config).</li></ul>\n\n\n<p>Here is an example of configuring an HTML element to display a tooltip from markup:</p>\n\n\n<pre><code>// Add a quick tip to an HTML button\n&lt;input type=\"button\" value=\"OK\" ext:qtitle=\"OK Button\" ext:qwidth=\"100\"\n     ext:qtip=\"This is a quick tip from markup!\">&lt;/input>\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-disable' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.QuickTips'>Ext.QuickTips</span><br/><a href='source/QuickTips.html#Ext-QuickTips-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.QuickTips-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Disable quick tips globally. ...</div><div class='long'><p>Disable quick tips globally.</p>\n</div></div></div><div id='method-enable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.QuickTips'>Ext.QuickTips</span><br/><a href='source/QuickTips.html#Ext-QuickTips-method-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.QuickTips-method-enable' class='name expandable'>enable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Enable quick tips globally. ...</div><div class='long'><p>Enable quick tips globally.</p>\n</div></div></div><div id='method-getQuickTip' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.QuickTips'>Ext.QuickTips</span><br/><a href='source/QuickTips.html#Ext-QuickTips-method-getQuickTip' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.QuickTips-method-getQuickTip' class='name expandable'>getQuickTip</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.QuickTip\" rel=\"Ext.QuickTip\" class=\"docClass\">Ext.QuickTip</a></div><div class='description'><div class='short'>Gets the single QuickTip instance used to show tips from all registered elements. ...</div><div class='long'><p>Gets the single <a href=\"#!/api/Ext.QuickTip\" rel=\"Ext.QuickTip\" class=\"docClass\">QuickTip</a> instance used to show tips from all registered elements.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.QuickTip\" rel=\"Ext.QuickTip\" class=\"docClass\">Ext.QuickTip</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.QuickTips'>Ext.QuickTips</span><br/><a href='source/QuickTips.html#Ext-QuickTips-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.QuickTips-method-init' class='name expandable'>init</a>( <span class='pre'>autoRender</span> )</div><div class='description'><div class='short'>Initialize the global QuickTips instance and prepare any quick tips. ...</div><div class='long'><p>Initialize the global QuickTips instance and prepare any quick tips.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>autoRender</span> : Boolean<div class='sub-desc'><p>True to render the QuickTips container immediately to preload images. (Defaults to true)</p>\n</div></li></ul></div></div></div><div id='method-isEnabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.QuickTips'>Ext.QuickTips</span><br/><a href='source/QuickTips.html#Ext-QuickTips-method-isEnabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.QuickTips-method-isEnabled' class='name expandable'>isEnabled</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns true if quick tips are enabled, else false. ...</div><div class='long'><p>Returns true if quick tips are enabled, else false.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-register' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.QuickTips'>Ext.QuickTips</span><br/><a href='source/QuickTips.html#Ext-QuickTips-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.QuickTips-method-register' class='name expandable'>register</a>( <span class='pre'>config</span> )</div><div class='description'><div class='short'>Configures a new quick tip instance and assigns it to a target element. ...</div><div class='long'><p>Configures a new quick tip instance and assigns it to a target element.  See\n<a href=\"#!/api/Ext.QuickTip-method-register\" rel=\"Ext.QuickTip-method-register\" class=\"docClass\">Ext.QuickTip.register</a> for details.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The config object</p>\n</div></li></ul></div></div></div><div id='method-tips' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.QuickTips'>Ext.QuickTips</span><br/><a href='source/QuickTips.html#Ext-QuickTips-method-tips' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.QuickTips-method-tips' class='name expandable'>tips</a>( <span class='pre'>config</span> )</div><div class='description'><div class='short'>Alias of register. ...</div><div class='long'><p>Alias of <a href=\"#!/api/Ext.QuickTips-method-register\" rel=\"Ext.QuickTips-method-register\" class=\"docClass\">register</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The config object</p>\n</div></li></ul></div></div></div><div id='method-unregister' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.QuickTips'>Ext.QuickTips</span><br/><a href='source/QuickTips.html#Ext-QuickTips-method-unregister' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.QuickTips-method-unregister' class='name expandable'>unregister</a>( <span class='pre'>el</span> )</div><div class='description'><div class='short'>Removes any registered quick tip from the target element and destroys it. ...</div><div class='long'><p>Removes any registered quick tip from the target element and destroys it.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : String/HTMLElement/Element<div class='sub-desc'><p>The element from which the quick tip is to be removed.</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "QuickTips.html#Ext-QuickTips",
        "filename": "QuickTips.js"
    }],
    "linenr": 1,
    "members": {
        "property": [],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.QuickTips",
            "meta": {},
            "name": "disable",
            "id": "method-disable"
        }, {
            "tagname": "method",
            "owner": "Ext.QuickTips",
            "meta": {},
            "name": "enable",
            "id": "method-enable"
        }, {
            "tagname": "method",
            "owner": "Ext.QuickTips",
            "meta": {},
            "name": "getQuickTip",
            "id": "method-getQuickTip"
        }, {
            "tagname": "method",
            "owner": "Ext.QuickTips",
            "meta": {},
            "name": "init",
            "id": "method-init"
        }, {
            "tagname": "method",
            "owner": "Ext.QuickTips",
            "meta": {},
            "name": "isEnabled",
            "id": "method-isEnabled"
        }, {
            "tagname": "method",
            "owner": "Ext.QuickTips",
            "meta": {},
            "name": "register",
            "id": "method-register"
        }, {
            "tagname": "method",
            "owner": "Ext.QuickTips",
            "meta": {},
            "name": "tips",
            "id": "method-tips"
        }, {
            "tagname": "method",
            "owner": "Ext.QuickTips",
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
    "name": "Ext.QuickTips",
    "singleton": true,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.QuickTips",
    "mixins": [],
    "mixedInto": []
});