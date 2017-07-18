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
Ext.data.JsonP.Function({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Ext-more.html#Function' target='_blank'>Ext-more.js</a></div><div class='dependency'><a href='source/Ext.html#Function' target='_blank'>Ext.js</a></div></pre><div class='doc-contents'><p>These functions are available on every Function object (any JavaScript function).</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createCallback' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Function'>Function</span><br/><a href='source/Ext.html#Function-method-createCallback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Function-method-createCallback' class='name expandable'>createCallback</a>( <span class='pre'></span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></div><div class='description'><div class='short'>Creates a callback that passes arguments[0], arguments[1], arguments[2], ... ...</div><div class='long'><p>Creates a callback that passes arguments[0], arguments[1], arguments[2], ...\nCall directly on any function. Example: <code>myFunction.createCallback(arg1, arg2)</code>\nWill create a function that is bound to those 2 args. <b>If a specific scope is required in the\ncallback, use <a href=\"#!/api/Function-method-createDelegate\" rel=\"Function-method-createDelegate\" class=\"docClass\">createDelegate</a> instead.</b> The function returned by createCallback always\nexecutes in the window scope.</p>\n\n<p>This method is required when you want to pass arguments to a callback function.  If no arguments\nare needed, you can simply pass a reference to the function as a callback (e.g., callback: myFn).\nHowever, if you tried to pass a function with arguments (e.g., callback: myFn(arg1, arg2)) the function\nwould simply execute immediately when the code is parsed. Example usage:\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\n// clicking the button alerts \"Hi, Fred\"\nnew <a href=\"#!/api/Ext.Button\" rel=\"Ext.Button\" class=\"docClass\">Ext.Button</a>({\n    text: 'Say Hi',\n    renderTo: <a href=\"#!/api/Ext-method-getBody\" rel=\"Ext-method-getBody\" class=\"docClass\">Ext.getBody</a>(),\n    handler: sayHi.createCallback('Fred')\n});\n</code></pre>\n\n</p><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'><p>The new function</p>\n</div></li></ul></div></div></div><div id='method-createDelegate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Function'>Function</span><br/><a href='source/Ext.html#Function-method-createDelegate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Function-method-createDelegate' class='name expandable'>createDelegate</a>( <span class='pre'>[scope], [args], [appendArgs]</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></div><div class='description'><div class='short'>Creates a delegate (callback) that sets the scope to obj. ...</div><div class='long'><p>Creates a delegate (callback) that sets the scope to obj.\nCall directly on any function. Example: <code>this.myFunction.createDelegate(this, [arg1, arg2])</code>\nWill create a function that is automatically scoped to obj so that the <tt>this</tt> variable inside the\ncallback points to obj. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    // Note this use of \"this.text\" here.  This function expects to\n    // execute within a scope that contains a text property.  In this\n    // example, the \"this\" variable is pointing to the btn object that\n    // was passed in createDelegate below.\n    alert('Hi, ' + name + '. You clicked the \"' + this.text + '\" button.');\n}\n\nvar btn = new <a href=\"#!/api/Ext.Button\" rel=\"Ext.Button\" class=\"docClass\">Ext.Button</a>({\n    text: 'Say Hi',\n    renderTo: <a href=\"#!/api/Ext-method-getBody\" rel=\"Ext-method-getBody\" class=\"docClass\">Ext.getBody</a>()\n});\n\n// This callback will execute in the scope of the\n// button instance. Clicking the button alerts\n// \"Hi, Fred. You clicked the \"Say Hi\" button.\"\nbtn.on('click', sayHi.createDelegate(btn, ['Fred']));\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the function is executed.\n<b>If omitted, defaults to the browser window.</b></p>\n</div></li><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> (optional)<div class='sub-desc'><p>Overrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n</div></li><li><span class='pre'>appendArgs</span> : Boolean/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'><p>The new function</p>\n</div></li></ul></div></div></div><div id='method-createInterceptor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Function'>Function</span><br/><a href='source/Ext.html#Function-method-createInterceptor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Function-method-createInterceptor' class='name expandable'>createInterceptor</a>( <span class='pre'>fcn, [scope]</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></div><div class='description'><div class='short'>Creates an interceptor function. ...</div><div class='long'><p>Creates an interceptor function. The passed function is called before the original one. If it returns false,\nthe original one is not called. The resulting function returns the results of the original function.\nThe passed function is called with the parameters of the original function. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\nsayHi('Fred'); // alerts \"Hi, Fred\"\n\n// create a new function that validates input without\n// directly modifying the original function:\nvar sayHiToFriend = sayHi.createInterceptor(function(name){\n    return name == 'Brian';\n});\n\nsayHiToFriend('Fred');  // no alert\nsayHiToFriend('Brian'); // alerts \"Hi, Brian\"\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fcn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The function to call before the original</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the passed function is executed.\n<b>If omitted, defaults to the scope in which the original function is called or the browser window.</b></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'><p>The new function</p>\n</div></li></ul></div></div></div><div id='method-createSequence' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Function'>Function</span><br/><a href='source/Ext-more.html#Function-method-createSequence' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Function-method-createSequence' class='name expandable'>createSequence</a>( <span class='pre'>fcn, [scope]</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></div><div class='description'><div class='short'>Create a combined function call sequence of the original function + the passed function. ...</div><div class='long'><p>Create a combined function call sequence of the original function + the passed function.\nThe resulting function returns the results of the original function.\nThe passed fcn is called with the parameters of the original function. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\nsayHi('Fred'); // alerts \"Hi, Fred\"\n\nvar sayGoodbye = sayHi.createSequence(function(name){\n    alert('Bye, ' + name);\n});\n\nsayGoodbye('Fred'); // both alerts show\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fcn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The function to sequence</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the passed function is executed.\n<b>If omitted, defaults to the scope in which the original function is called or the browser window.</b></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'><p>The new function</p>\n</div></li></ul></div></div></div><div id='method-defer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Function'>Function</span><br/><a href='source/Ext.html#Function-method-defer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Function-method-defer' class='name expandable'>defer</a>( <span class='pre'>millis, [scope], [args], [appendArgs]</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></div><div class='description'><div class='short'>Calls this function after the number of millseconds specified, optionally in a specific scope. ...</div><div class='long'><p>Calls this function after the number of millseconds specified, optionally in a specific scope. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\n// executes immediately:\nsayHi('Fred');\n\n// executes after 2 seconds:\nsayHi.defer(2000, this, ['Fred']);\n\n// this syntax is sometimes useful for deferring\n// execution of an anonymous function:\n(function(){\n    alert('Anonymous');\n}).defer(100);\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>millis</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The number of milliseconds for the setTimeout call (if less than or equal to 0 the function is executed immediately)</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code><b>this</b></code> reference) in which the function is executed.\n<b>If omitted, defaults to the browser window.</b></p>\n</div></li><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a> (optional)<div class='sub-desc'><p>Overrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n</div></li><li><span class='pre'>appendArgs</span> : Boolean/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>The timeout id that can be used with clearTimeout</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "Ext-more.html#Function",
        "filename": "Ext-more.js"
    }, {
        "href": "Ext.html#Function",
        "filename": "Ext.js"
    }],
    "linenr": 538,
    "members": {
        "property": [],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Function",
            "meta": {},
            "name": "createCallback",
            "id": "method-createCallback"
        }, {
            "tagname": "method",
            "owner": "Function",
            "meta": {},
            "name": "createDelegate",
            "id": "method-createDelegate"
        }, {
            "tagname": "method",
            "owner": "Function",
            "meta": {},
            "name": "createInterceptor",
            "id": "method-createInterceptor"
        }, {
            "tagname": "method",
            "owner": "Function",
            "meta": {},
            "name": "createSequence",
            "id": "method-createSequence"
        }, {
            "tagname": "method",
            "owner": "Function",
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
    "name": "Function",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Function",
    "mixins": [],
    "mixedInto": []
});