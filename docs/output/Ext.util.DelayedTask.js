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
Ext.data.JsonP.Ext_util_DelayedTask({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/DelayedTask.html#Ext-util-DelayedTask' target='_blank'>DelayedTask.js</a></div></pre><div class='doc-contents'><p> The DelayedTask class provides a convenient way to \"buffer\" the execution of a method,\nperforming setTimeout where a new timeout cancels the old timeout. When called, the\ntask will wait the specified time period before executing. If durng that time period,\nthe task is called again, the original call will be cancelled. This continues so that\nthe function is only called a single time for each iteration.</p>\n\n\n<p>This method is especially useful for things like detecting whether a user has finished\ntyping in a text field. An example would be performing validation on a keypress. You can\nuse this class to buffer the keypress events for a certain number of milliseconds, and\nperform only if they stop for that amount of time.  Usage:</p>\n\n\n<pre><code>var task = new <a href=\"#!/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a>(function(){\n    alert(<a href=\"#!/api/Ext-method-getDom\" rel=\"Ext-method-getDom\" class=\"docClass\">Ext.getDom</a>('myInputField').value.length);\n});\n// Wait 500ms before calling our function. If the user presses another key \n// during that 500ms, it will be cancelled and we'll wait another 500ms.\n<a href=\"#!/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a>('myInputField').on('keypress', function(){\n    task.<a href=\"#!/api/Ext.util.DelayedTask-method-delay\" rel=\"Ext.util.DelayedTask-method-delay\" class=\"docClass\">delay</a>(500); \n});\n</code></pre>\n\n\n<p></p>\n\n<p>Note that we are using a DelayedTask here to illustrate a point. The configuration\noption <tt>buffer</tt> for <a href=\"#!/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener/on</a> will\nalso setup a delayed task for you to buffer events.</p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.DelayedTask'>Ext.util.DelayedTask</span><br/><a href='source/DelayedTask.html#Ext-util-DelayedTask-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.util.DelayedTask-method-constructor' class='name expandable'>Ext.util.DelayedTask</a>( <span class='pre'>[fn], [scope], [args]</span> ) : <a href=\"#!/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a></div><div class='description'><div class='short'>The parameters to this constructor serve as defaults and are not required. ...</div><div class='long'><p>The parameters to this constructor serve as defaults and are not required.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>The default function to call.</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The default scope (The <code><b>this</b></code> reference) in which the\nfunction is called. If not specified, <code>this</code> will refer to the browser window.</p>\n</div></li><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> (optional)<div class='sub-desc'><p>The default Array of arguments.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-cancel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.DelayedTask'>Ext.util.DelayedTask</span><br/><a href='source/DelayedTask.html#Ext-util-DelayedTask-method-cancel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.DelayedTask-method-cancel' class='name expandable'>cancel</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Cancel the last queued timeout ...</div><div class='long'><p>Cancel the last queued timeout</p>\n</div></div></div><div id='method-delay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.DelayedTask'>Ext.util.DelayedTask</span><br/><a href='source/DelayedTask.html#Ext-util-DelayedTask-method-delay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.DelayedTask-method-delay' class='name expandable'>delay</a>( <span class='pre'>delay, [newFn], [newScope], [newArgs]</span> )</div><div class='description'><div class='short'>Cancels any pending timeout and queues a new one ...</div><div class='long'><p>Cancels any pending timeout and queues a new one</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>delay</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The milliseconds to delay</p>\n</div></li><li><span class='pre'>newFn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>Overrides function passed to constructor</p>\n</div></li><li><span class='pre'>newScope</span> : Object (optional)<div class='sub-desc'><p>Overrides scope passed to constructor. Remember that if no scope\nis specified, <code>this</code> will refer to the browser window.</p>\n</div></li><li><span class='pre'>newArgs</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> (optional)<div class='sub-desc'><p>Overrides args passed to constructor</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "DelayedTask.html#Ext-util-DelayedTask",
        "filename": "DelayedTask.js"
    }],
    "linenr": 1,
    "members": {
        "property": [],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.util.DelayedTask",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.util.DelayedTask",
            "meta": {},
            "name": "cancel",
            "id": "method-cancel"
        }, {
            "tagname": "method",
            "owner": "Ext.util.DelayedTask",
            "meta": {},
            "name": "delay",
            "id": "method-delay"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.util.DelayedTask",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.util.DelayedTask",
    "mixins": [],
    "mixedInto": []
});