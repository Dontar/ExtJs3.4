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
Ext.data.JsonP.Ext_form_VTypes({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/VTypes.html#Ext-form-VTypes' target='_blank'>VTypes.js</a></div></pre><div class='doc-contents'><p>This is a singleton object which contains a set of commonly used field validation functions.\nThe validations provided are basic and intended to be easily customizable and extended.</p>\n\n\n<p>To add custom VTypes specify the <code><a href=\"#!/api/Ext.form.TextField-cfg-vtype\" rel=\"Ext.form.TextField-cfg-vtype\" class=\"docClass\">vtype</a></code> validation\ntest function, and optionally specify any corresponding error text to display and any keystroke\nfiltering mask to apply. For example:</p>\n\n\n<pre><code>// custom Vtype for vtype:'time'\nvar timeTest = /^([1-9]|1[0-9]):([0-5][0-9])(\\s[a|p]m)$/i;\n<a href=\"#!/api/Ext-method-apply\" rel=\"Ext-method-apply\" class=\"docClass\">Ext.apply</a>(<a href=\"#!/api/Ext.form.VTypes\" rel=\"Ext.form.VTypes\" class=\"docClass\">Ext.form.VTypes</a>, {\n    //  vtype validation function\n    time: function(val, field) {\n        return timeTest.test(val);\n    },\n    // vtype Text property: The error text to display when the validation function returns false\n    timeText: 'Not a valid time.  Must be in the format \"12:34 PM\".',\n    // vtype Mask property: The keystroke filter mask\n    timeMask: /[\\d\\s:amp]/i\n});\n</code></pre>\n\n\n<p>Another example:</p>\n\n<pre><code>// custom Vtype for vtype:'IPAddress'\n<a href=\"#!/api/Ext-method-apply\" rel=\"Ext-method-apply\" class=\"docClass\">Ext.apply</a>(<a href=\"#!/api/Ext.form.VTypes\" rel=\"Ext.form.VTypes\" class=\"docClass\">Ext.form.VTypes</a>, {\n    IPAddress:  function(v) {\n        return /^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$/.test(v);\n    },\n    IPAddressText: 'Must be a numeric IP address',\n    IPAddressMask: /[\\d\\.]/i\n});\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-alphaMask' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.VTypes'>Ext.form.VTypes</span><br/><a href='source/VTypes.html#Ext-form-VTypes-property-alphaMask' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.VTypes-property-alphaMask' class='name expandable'>alphaMask</a><span> : RegExp</span></div><div class='description'><div class='short'>The keystroke filter mask to be applied on alpha input. ...</div><div class='long'><p>The keystroke filter mask to be applied on alpha input.  Defaults to:\n<tt>/[a-z_]/i</tt></p>\n<p>Defaults to: <code>/[a-z_]/i</code></p></div></div></div><div id='property-alphaText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.VTypes'>Ext.form.VTypes</span><br/><a href='source/VTypes.html#Ext-form-VTypes-property-alphaText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.VTypes-property-alphaText' class='name expandable'>alphaText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The error text to display when the alpha validation function returns false. ...</div><div class='long'><p>The error text to display when the alpha validation function returns false.  Defaults to:\n<tt>'This field should only contain letters and _'</tt></p>\n<p>Defaults to: <code>'This field should only contain letters and _'</code></p></div></div></div><div id='property-alphanumMask' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.VTypes'>Ext.form.VTypes</span><br/><a href='source/VTypes.html#Ext-form-VTypes-property-alphanumMask' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.VTypes-property-alphanumMask' class='name expandable'>alphanumMask</a><span> : RegExp</span></div><div class='description'><div class='short'>The keystroke filter mask to be applied on alphanumeric input. ...</div><div class='long'><p>The keystroke filter mask to be applied on alphanumeric input.  Defaults to:\n<tt>/[a-z0-9_]/i</tt></p>\n<p>Defaults to: <code>/[a-z0-9_]/i</code></p></div></div></div><div id='property-alphanumText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.VTypes'>Ext.form.VTypes</span><br/><a href='source/VTypes.html#Ext-form-VTypes-property-alphanumText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.VTypes-property-alphanumText' class='name expandable'>alphanumText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The error text to display when the alphanumeric validation function returns false. ...</div><div class='long'><p>The error text to display when the alphanumeric validation function returns false.  Defaults to:\n<tt>'This field should only contain letters, numbers and _'</tt></p>\n<p>Defaults to: <code>'This field should only contain letters, numbers and _'</code></p></div></div></div><div id='property-emailMask' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.VTypes'>Ext.form.VTypes</span><br/><a href='source/VTypes.html#Ext-form-VTypes-property-emailMask' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.VTypes-property-emailMask' class='name expandable'>emailMask</a><span> : RegExp</span></div><div class='description'><div class='short'>The keystroke filter mask to be applied on email input. ...</div><div class='long'><p>The keystroke filter mask to be applied on email input.  See the <a href=\"#!/api/Ext.form.VTypes-method-email\" rel=\"Ext.form.VTypes-method-email\" class=\"docClass\">email</a> method for\ninformation about more complex email validation. Defaults to:\n<tt>/[a-z0-9_.-+\\'@]/i</tt></p>\n<p>Defaults to: <code>/[a-z0-9_\\.\\-\\+\\'@]/i</code></p></div></div></div><div id='property-emailText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.VTypes'>Ext.form.VTypes</span><br/><a href='source/VTypes.html#Ext-form-VTypes-property-emailText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.VTypes-property-emailText' class='name expandable'>emailText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The error text to display when the email validation function returns false. ...</div><div class='long'><p>The error text to display when the email validation function returns false.  Defaults to:\n<tt>'This field should be an e-mail address in the format \"user@example.com\"'</tt></p>\n<p>Defaults to: <code>'This field should be an e-mail address in the format &quot;user@example.com&quot;'</code></p></div></div></div><div id='property-urlText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.VTypes'>Ext.form.VTypes</span><br/><a href='source/VTypes.html#Ext-form-VTypes-property-urlText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.VTypes-property-urlText' class='name expandable'>urlText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The error text to display when the url validation function returns false. ...</div><div class='long'><p>The error text to display when the url validation function returns false.  Defaults to:\n<tt>'This field should be a URL in the format \"http:/'+'/www.example.com\"'</tt></p>\n<p>Defaults to: <code>'This field should be a URL in the format &quot;http:/' + '/www.example.com&quot;'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-alpha' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.VTypes'>Ext.form.VTypes</span><br/><a href='source/VTypes.html#Ext-form-VTypes-method-alpha' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.VTypes-method-alpha' class='name expandable'>alpha</a>( <span class='pre'>value</span> ) : Boolean</div><div class='description'><div class='short'>The function used to validate alpha values ...</div><div class='long'><p>The function used to validate alpha values</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The value</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the RegExp test passed, and false if not.</p>\n</div></li></ul></div></div></div><div id='method-alphanum' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.VTypes'>Ext.form.VTypes</span><br/><a href='source/VTypes.html#Ext-form-VTypes-method-alphanum' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.VTypes-method-alphanum' class='name expandable'>alphanum</a>( <span class='pre'>value</span> ) : Boolean</div><div class='description'><div class='short'>The function used to validate alphanumeric values ...</div><div class='long'><p>The function used to validate alphanumeric values</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The value</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the RegExp test passed, and false if not.</p>\n</div></li></ul></div></div></div><div id='method-email' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.VTypes'>Ext.form.VTypes</span><br/><a href='source/VTypes.html#Ext-form-VTypes-method-email' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.VTypes-method-email' class='name expandable'>email</a>( <span class='pre'>value</span> ) : Boolean</div><div class='description'><div class='short'>The function used to validate email addresses. ...</div><div class='long'><p>The function used to validate email addresses.  Note that this is a very basic validation -- complete\nvalidation per the email RFC specifications is very complex and beyond the scope of this class, although\nthis function can be overridden if a more comprehensive validation scheme is desired.  See the validation\nsection of the <a href=\"http://en.wikipedia.org/wiki/E-mail_address\">Wikipedia article on email addresses</a>\nfor additional information.  This implementation is intended to validate the following emails:<tt>\n'barney@example.de', 'barney.rubble@example.com', 'barney-rubble@example.coop', 'barney+rubble@example.com'\n</tt>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The email address</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the RegExp test passed, and false if not.</p>\n</div></li></ul></div></div></div><div id='method-url' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.VTypes'>Ext.form.VTypes</span><br/><a href='source/VTypes.html#Ext-form-VTypes-method-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.VTypes-method-url' class='name expandable'>url</a>( <span class='pre'>value</span> ) : Boolean</div><div class='description'><div class='short'>The function used to validate URLs ...</div><div class='long'><p>The function used to validate URLs</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The URL</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>true if the RegExp test passed, and false if not.</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "VTypes.html#Ext-form-VTypes",
        "filename": "VTypes.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.form.VTypes",
            "meta": {},
            "name": "alphaMask",
            "id": "property-alphaMask"
        }, {
            "tagname": "property",
            "owner": "Ext.form.VTypes",
            "meta": {},
            "name": "alphaText",
            "id": "property-alphaText"
        }, {
            "tagname": "property",
            "owner": "Ext.form.VTypes",
            "meta": {},
            "name": "alphanumMask",
            "id": "property-alphanumMask"
        }, {
            "tagname": "property",
            "owner": "Ext.form.VTypes",
            "meta": {},
            "name": "alphanumText",
            "id": "property-alphanumText"
        }, {
            "tagname": "property",
            "owner": "Ext.form.VTypes",
            "meta": {},
            "name": "emailMask",
            "id": "property-emailMask"
        }, {
            "tagname": "property",
            "owner": "Ext.form.VTypes",
            "meta": {},
            "name": "emailText",
            "id": "property-emailText"
        }, {
            "tagname": "property",
            "owner": "Ext.form.VTypes",
            "meta": {},
            "name": "urlText",
            "id": "property-urlText"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.form.VTypes",
            "meta": {},
            "name": "alpha",
            "id": "method-alpha"
        }, {
            "tagname": "method",
            "owner": "Ext.form.VTypes",
            "meta": {},
            "name": "alphanum",
            "id": "method-alphanum"
        }, {
            "tagname": "method",
            "owner": "Ext.form.VTypes",
            "meta": {},
            "name": "email",
            "id": "method-email"
        }, {
            "tagname": "method",
            "owner": "Ext.form.VTypes",
            "meta": {},
            "name": "url",
            "id": "method-url"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.form.VTypes",
    "singleton": true,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.form.VTypes",
    "mixins": [],
    "mixedInto": []
});