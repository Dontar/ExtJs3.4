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
Ext.data.JsonP.Ext_util_Functions({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Function.html#Ext-util-Functions' target='_blank'>Function.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createDelegate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Functions'>Ext.util.Functions</span><br/><a href='source/Function.html#Ext-util-Functions-method-createDelegate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Functions-method-createDelegate' class='name expandable'>createDelegate</a>( <span class='pre'>[scope], [args], [appendArgs]</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></div><div class='description'><div class='short'>Creates a delegate (callback) that sets the scope to obj. ...</div><div class='long'><p>Creates a delegate (callback) that sets the scope to obj.\nCall directly on any function. Example: <code><a href=\"#!/api/Ext-method-createDelegate\" rel=\"Ext-method-createDelegate\" class=\"docClass\">Ext.createDelegate</a>(this.myFunction, this, [arg1, arg2])</code>\nWill create a function that is automatically scoped to obj so that the <tt>this</tt> variable inside the\ncallback points to obj. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    // Note this use of \"this.text\" here.  This function expects to\n    // execute within a scope that contains a text property.  In this\n    // example, the \"this\" variable is pointing to the btn object that\n    // was passed in createDelegate below.\n    alert('Hi, ' + name + '. You clicked the \"' + this.text + '\" button.');\n}\n\nvar btn = new <a href=\"#!/api/Ext.Button\" rel=\"Ext.Button\" class=\"docClass\">Ext.Button</a>({\n    text: 'Say Hi',\n    renderTo: <a href=\"#!/api/Ext-method-getBody\" rel=\"Ext-method-getBody\" class=\"docClass\">Ext.getBody</a>()\n});\n\n// This callback will execute in the scope of the\n// button instance. Clicking the button alerts\n// \"Hi, Fred. You clicked the \"Say Hi\" button.\"\nbtn.on('click', <a href=\"#!/api/Ext-method-createDelegate\" rel=\"Ext-method-createDelegate\" class=\"docClass\">Ext.createDelegate</a>(sayHi, btn, ['Fred']));\n       </code></pre>\n\n\n<p>@param {Function} fn The function to delegate.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the function is executed.\n<b>If omitted, defaults to the browser window.</b></p>\n</div></li><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> (optional)<div class='sub-desc'><p>Overrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n</div></li><li><span class='pre'>appendArgs</span> : Boolean/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'><p>The new function</p>\n</div></li></ul></div></div></div><div id='method-createInterceptor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Functions'>Ext.util.Functions</span><br/><a href='source/Function.html#Ext-util-Functions-method-createInterceptor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Functions-method-createInterceptor' class='name expandable'>createInterceptor</a>( <span class='pre'>newFn, [scope]</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></div><div class='description'><div class='short'>Creates an interceptor function. ...</div><div class='long'><p>Creates an interceptor function. The passed function is called before the original one. If it returns false,\nthe original one is not called. The resulting function returns the results of the original function.\nThe passed function is called with the parameters of the original function. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\nsayHi('Fred'); // alerts \"Hi, Fred\"\n\n// create a new function that validates input without\n// directly modifying the original function:\nvar sayHiToFriend = <a href=\"#!/api/Ext-method-createInterceptor\" rel=\"Ext-method-createInterceptor\" class=\"docClass\">Ext.createInterceptor</a>(sayHi, function(name){\n    return name == 'Brian';\n});\n\nsayHiToFriend('Fred');  // no alert\nsayHiToFriend('Brian'); // alerts \"Hi, Brian\"\n       </code></pre>\n\n\n<p>@param {Function} origFn The original function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newFn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The function to call before the original</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the passed function is executed.\n<b>If omitted, defaults to the scope in which the original function is called or the browser window.</b></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'><p>The new function</p>\n</div></li></ul></div></div></div><div id='method-createSequence' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Functions'>Ext.util.Functions</span><br/><a href='source/Function.html#Ext-util-Functions-method-createSequence' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Functions-method-createSequence' class='name expandable'>createSequence</a>( <span class='pre'>origFn, newFn, [scope]</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></div><div class='description'><div class='short'>Create a combined function call sequence of the original function + the passed function. ...</div><div class='long'><p>Create a combined function call sequence of the original function + the passed function.\nThe resulting function returns the results of the original function.\nThe passed fcn is called with the parameters of the original function. Example usage:</p>\n\n<p>var sayHi = function(name){</p>\n\n<pre><code>alert('Hi, ' + name);\n</code></pre>\n\n<p>}</p>\n\n<p>sayHi('Fred'); // alerts \"Hi, Fred\"</p>\n\n<p>var sayGoodbye = <a href=\"#!/api/Ext-method-createSequence\" rel=\"Ext-method-createSequence\" class=\"docClass\">Ext.createSequence</a>(sayHi, function(name){</p>\n\n<pre><code>alert('Bye, ' + name);\n</code></pre>\n\n<p>});</p>\n\n<p>sayGoodbye('Fred'); // both alerts show</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>origFn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The original function.</p>\n</div></li><li><span class='pre'>newFn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The function to sequence</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (this reference) in which the passed function is executed.\nIf omitted, defaults to the scope in which the original function is called or the browser window.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'><p>The new function</p>\n</div></li></ul></div></div></div><div id='method-defer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Functions'>Ext.util.Functions</span><br/><a href='source/Function.html#Ext-util-Functions-method-defer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Functions-method-defer' class='name expandable'>defer</a>( <span class='pre'>millis, [scope], [args], [appendArgs]</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Calls this function after the number of millseconds specified, optionally in a specific scope. ...</div><div class='long'><p>Calls this function after the number of millseconds specified, optionally in a specific scope. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\n// executes immediately:\nsayHi('Fred');\n\n// executes after 2 seconds:\n<a href=\"#!/api/Ext-method-defer\" rel=\"Ext-method-defer\" class=\"docClass\">Ext.defer</a>(sayHi, 2000, this, ['Fred']);\n\n// this syntax is sometimes useful for deferring\n// execution of an anonymous function:\n<a href=\"#!/api/Ext-method-defer\" rel=\"Ext-method-defer\" class=\"docClass\">Ext.defer</a>(function(){\n    alert('Anonymous');\n}, 100);\n       </code></pre>\n\n\n<p>@param {Function} fn The function to defer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>millis</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The number of milliseconds for the setTimeout call (if less than or equal to 0 the function is executed immediately)</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the function is executed.\n<b>If omitted, defaults to the browser window.</b></p>\n</div></li><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> (optional)<div class='sub-desc'><p>Overrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n</div></li><li><span class='pre'>appendArgs</span> : Boolean/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The timeout id that can be used with clearTimeout</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "Function.html#Ext-util-Functions",
        "filename": "Function.js"
    }],
    "linenr": 1,
    "members": {
        "property": [],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.util.Functions",
            "meta": {},
            "name": "createDelegate",
            "id": "method-createDelegate"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Functions",
            "meta": {},
            "name": "createInterceptor",
            "id": "method-createInterceptor"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Functions",
            "meta": {},
            "name": "createSequence",
            "id": "method-createSequence"
        }, {
            "tagname": "method",
            "owner": "Ext.util.Functions",
            "meta": {},
            "name": "defer",
            "id": "method-defer"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.util.Functions",
    "singleton": true,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.util.Functions",
    "mixins": [],
    "mixedInto": []
});