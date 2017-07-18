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
Ext.data.JsonP.Ext_form_Action_DirectLoad({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": "Ext.form.Action.Load",
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='docClass'>Ext.form.Action</a><div class='subclass '><a href='#!/api/Ext.form.Action.Load' rel='Ext.form.Action.Load' class='docClass'>Ext.form.Action.Load</a><div class='subclass '><strong>Ext.form.Action.DirectLoad</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Action2.html#Ext-form-Action-DirectLoad' target='_blank'>Action.js</a></div></pre><div class='doc-contents'><p>Provides Ext.direct support for loading form data.</p>\n\n\n<p>This example illustrates usage of <a href=\"#!/api/Ext.Direct\" rel=\"Ext.Direct\" class=\"docClass\">Ext.Direct</a> to <b>load</b> a form through <a href=\"#!/api/Ext.Direct\" rel=\"Ext.Direct\" class=\"docClass\">Ext.Direct</a>.</p>\n\n\n<pre><code>var myFormPanel = new <a href=\"#!/api/Ext.form.FormPanel\" rel=\"Ext.form.FormPanel\" class=\"docClass\">Ext.form.FormPanel</a>({\n    // configs for FormPanel\n    title: 'Basic Information',\n    renderTo: document.body,\n    width: 300, height: 160,\n    padding: 10,\n\n    // configs apply to child items\n    defaults: {anchor: '100%'},\n    defaultType: 'textfield',\n    items: [{\n        fieldLabel: 'Name',\n        name: 'name'\n    },{\n        fieldLabel: 'Email',\n        name: 'email'\n    },{\n        fieldLabel: 'Company',\n        name: 'company'\n    }],\n\n    // configs for BasicForm\n    api: {\n        // The server-side method to call for load() requests\n        load: Profile.getBasicInfo,\n        // The server-side must mark the submit handler as a 'formHandler'\n        submit: Profile.updateBasicInfo\n    },\n    // specify the order for the passed params\n    paramOrder: ['uid', 'foo']\n});\n\n// load the form\nmyFormPanel.getForm().load({\n    // pass 2 arguments to server side getBasicInfo method (len=2)\n    params: {\n        foo: 'bar',\n        uid: 34\n    }\n});\n</code></pre>\n\n\n<p>The data packet sent to the server will resemble something like:</p>\n\n<pre><code>[\n    {\n        \"action\":\"Profile\",\"method\":\"getBasicInfo\",\"type\":\"rpc\",\"tid\":2,\n        \"data\":[34,\"bar\"] // note the order of the params\n    }\n]\n</code></pre>\n\n\n<p>The form will process a data packet returned by the server that is similar\nto the following format:</p>\n\n<pre><code>[\n    {\n        \"action\":\"Profile\",\"method\":\"getBasicInfo\",\"type\":\"rpc\",\"tid\":2,\n        \"result\":{\n            \"success\":true,\n            \"data\":{\n                \"name\":\"Fred Flintstone\",\n                \"company\":\"Slate Rock and Gravel\",\n                \"email\":\"fred.flintstone@slaterg.com\"\n            }\n        }\n    }\n]\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-failure' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-failure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-failure' class='name expandable'>failure</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'>The function to call when a failure packet was recieved, or when an\nerror ocurred in the Ajax communication. ...</div><div class='long'><p>The function to call when a failure packet was recieved, or when an\nerror ocurred in the Ajax communication.\nThe function is passed the following parameters:<ul class=\"mdetail-params\">\n<li><b>form</b> : <a href=\"#!/api/Ext.form.BasicForm\" rel=\"Ext.form.BasicForm\" class=\"docClass\">Ext.form.BasicForm</a><div class=\"sub-desc\">The form that requested the action</div></li>\n<li><b>action</b> : <a href=\"#!/api/Ext.form.Action\" rel=\"Ext.form.Action\" class=\"docClass\">Ext.form.Action</a><div class=\"sub-desc\">The Action class. If an Ajax\nerror ocurred, the failure type will be in <a href=\"#!/api/Ext.form.Action-property-failureType\" rel=\"Ext.form.Action-property-failureType\" class=\"docClass\">failureType</a>. The <a href=\"#!/api/Ext.form.Action-property-result\" rel=\"Ext.form.Action-property-result\" class=\"docClass\">result</a>\nproperty of this object may be examined to perform custom postprocessing.</div></li>\n</ul></p>\n</div></div></div><div id='cfg-method' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-method' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-method' class='name expandable'>method</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The HTTP method to use to access the requested URL. ...</div><div class='long'><p>The HTTP method to use to access the requested URL. Defaults to the\n<a href=\"#!/api/Ext.form.BasicForm\" rel=\"Ext.form.BasicForm\" class=\"docClass\">Ext.form.BasicForm</a>'s method, or if that is not specified, the underlying DOM form's method.</p>\n</div></div></div><div id='cfg-params' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-params' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-params' class='name expandable'>params</a><span> : Mixed</span></div><div class='description'><div class='short'>Extra parameter values to pass. ...</div><div class='long'><p>Extra parameter values to pass. These are added to the Form's\n<a href=\"#!/api/Ext.form.BasicForm-cfg-baseParams\" rel=\"Ext.form.BasicForm-cfg-baseParams\" class=\"docClass\">Ext.form.BasicForm.baseParams</a> and passed to the specified URL along with the Form's\ninput fields.</p>\n\n\n<p>Parameters are encoded as standard HTTP parameters using <a href=\"#!/api/Ext-method-urlEncode\" rel=\"Ext-method-urlEncode\" class=\"docClass\">Ext.urlEncode</a>.</p>\n\n</div></div></div><div id='cfg-reset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-reset' class='name expandable'>reset</a><span> : Boolean</span></div><div class='description'><div class='short'>When set to true, causes the Form to be\nreset on Action success. ...</div><div class='long'><p>When set to <tt><b>true</b></tt>, causes the Form to be\nreset on Action success. If specified, this happens\n<b>before</b> the <a href=\"#!/api/Ext.form.Action-cfg-success\" rel=\"Ext.form.Action-cfg-success\" class=\"docClass\">success</a> callback is called and before the Form's\nactioncomplete event fires.</p>\n</div></div></div><div id='cfg-scope' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-scope' class='name not-expandable'>scope</a><span> : Object</span></div><div class='description'><div class='short'><p>The scope in which to call the callback functions (The <tt>this</tt> reference\nfor the callback functions).</p>\n</div><div class='long'><p>The scope in which to call the callback functions (The <tt>this</tt> reference\nfor the callback functions).</p>\n</div></div></div><div id='cfg-submitEmptyText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-submitEmptyText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-submitEmptyText' class='name expandable'>submitEmptyText</a><span> : Boolean</span></div><div class='description'><div class='short'>If set to true, the emptyText value will be sent with the form\nwhen it is submitted. ...</div><div class='long'><p>If set to <tt>true</tt>, the emptyText value will be sent with the form\nwhen it is submitted.  Defaults to <tt>true</tt>.</p>\n</div></div></div><div id='cfg-success' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-success' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-success' class='name expandable'>success</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'>The function to call when a valid success return packet is recieved. ...</div><div class='long'><p>The function to call when a valid success return packet is recieved.\nThe function is passed the following parameters:<ul class=\"mdetail-params\">\n<li><b>form</b> : <a href=\"#!/api/Ext.form.BasicForm\" rel=\"Ext.form.BasicForm\" class=\"docClass\">Ext.form.BasicForm</a><div class=\"sub-desc\">The form that requested the action</div></li>\n<li><b>action</b> : <a href=\"#!/api/Ext.form.Action\" rel=\"Ext.form.Action\" class=\"docClass\">Ext.form.Action</a><div class=\"sub-desc\">The Action class. The <a href=\"#!/api/Ext.form.Action-property-result\" rel=\"Ext.form.Action-property-result\" class=\"docClass\">result</a>\nproperty of this object may be examined to perform custom postprocessing.</div></li>\n</ul></p>\n</div></div></div><div id='cfg-timeout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-timeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-timeout' class='name expandable'>timeout</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The number of seconds to wait for a server response before\nfailing with the failureType as Action.CONNECT_FAILURE. ...</div><div class='long'><p>The number of seconds to wait for a server response before\nfailing with the <a href=\"#!/api/Ext.form.Action-property-failureType\" rel=\"Ext.form.Action-property-failureType\" class=\"docClass\">failureType</a> as Action.CONNECT_FAILURE. If not specified,\ndefaults to the configured <tt><a href=\"#!/api/Ext.form.BasicForm-cfg-timeout\" rel=\"Ext.form.BasicForm-cfg-timeout\" class=\"docClass\">timeout</a></tt> of the\n<a href=\"#!/api/Ext.form.BasicForm\" rel=\"Ext.form.BasicForm\" class=\"docClass\">form</a>.</p>\n</div></div></div><div id='cfg-url' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-url' class='name not-expandable'>url</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The URL that the Action is to invoke.</p>\n</div><div class='long'><p>The URL that the Action is to invoke.</p>\n</div></div></div><div id='cfg-waitMsg' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-waitMsg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-waitMsg' class='name not-expandable'>waitMsg</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The message to be displayed by a call to <a href=\"#!/api/Ext.MessageBox-method-wait\" rel=\"Ext.MessageBox-method-wait\" class=\"docClass\">Ext.MessageBox.wait</a>\nduring the time the action is being processed.</p>\n</div><div class='long'><p>The message to be displayed by a call to <a href=\"#!/api/Ext.MessageBox-method-wait\" rel=\"Ext.MessageBox-method-wait\" class=\"docClass\">Ext.MessageBox.wait</a>\nduring the time the action is being processed.</p>\n</div></div></div><div id='cfg-waitTitle' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-waitTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-waitTitle' class='name not-expandable'>waitTitle</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The title to be displayed by a call to <a href=\"#!/api/Ext.MessageBox-method-wait\" rel=\"Ext.MessageBox-method-wait\" class=\"docClass\">Ext.MessageBox.wait</a>\nduring the time the action is being processed.</p>\n</div><div class='long'><p>The title to be displayed by a call to <a href=\"#!/api/Ext.MessageBox-method-wait\" rel=\"Ext.MessageBox-method-wait\" class=\"docClass\">Ext.MessageBox.wait</a>\nduring the time the action is being processed.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-failureType' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-property-failureType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-property-failureType' class='name expandable'>failureType</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The type of failure detected will be one of these: CLIENT_INVALID,\nSERVER_INVALID, CONNECT_FAILURE, or LOAD_FAILURE. ...</div><div class='long'><p>The type of failure detected will be one of these: <a href=\"#!/api/Ext.form.Action-static-property-CLIENT_INVALID\" rel=\"Ext.form.Action-static-property-CLIENT_INVALID\" class=\"docClass\">CLIENT_INVALID</a>,\n<a href=\"#!/api/Ext.form.Action-static-property-SERVER_INVALID\" rel=\"Ext.form.Action-static-property-SERVER_INVALID\" class=\"docClass\">SERVER_INVALID</a>, <a href=\"#!/api/Ext.form.Action-static-property-CONNECT_FAILURE\" rel=\"Ext.form.Action-static-property-CONNECT_FAILURE\" class=\"docClass\">CONNECT_FAILURE</a>, or <a href=\"#!/api/Ext.form.Action-static-property-LOAD_FAILURE\" rel=\"Ext.form.Action-static-property-LOAD_FAILURE\" class=\"docClass\">LOAD_FAILURE</a>.  Usage:</p>\n\n<pre><code>var fp = new <a href=\"#!/api/Ext.form.FormPanel\" rel=\"Ext.form.FormPanel\" class=\"docClass\">Ext.form.FormPanel</a>({\n...\nbuttons: [{\n    text: 'Save',\n    formBind: true,\n    handler: function(){\n        if(fp.getForm().isValid()){\n            fp.getForm().submit({\n                url: 'form-submit.php',\n                waitMsg: 'Submitting your data...',\n                success: function(form, action){\n                    // server responded with success = true\n                    var result = action.<a href=\"#!/api/Ext.form.Action-property-result\" rel=\"Ext.form.Action-property-result\" class=\"docClass\">result</a>;\n                },\n                failure: function(form, action){\n                    if (action.<a href=\"#!/api/Ext.form.Action-property-failureType\" rel=\"Ext.form.Action-property-failureType\" class=\"docClass\">failureType</a> === <a href=\"#!/api/Ext.form.Action\" rel=\"Ext.form.Action\" class=\"docClass\">Ext.form.Action</a>.<a href=\"#!/api/Ext.form.Action-static-property-CONNECT_FAILURE\" rel=\"Ext.form.Action-static-property-CONNECT_FAILURE\" class=\"docClass\">CONNECT_FAILURE</a>) {\n                        Ext.Msg.alert('Error',\n                            'Status:'+action.<a href=\"#!/api/Ext.form.Action-property-response\" rel=\"Ext.form.Action-property-response\" class=\"docClass\">response</a>.status+': '+\n                            action.<a href=\"#!/api/Ext.form.Action-property-response\" rel=\"Ext.form.Action-property-response\" class=\"docClass\">response</a>.statusText);\n                    }\n                    if (action.failureType === <a href=\"#!/api/Ext.form.Action\" rel=\"Ext.form.Action\" class=\"docClass\">Ext.form.Action</a>.<a href=\"#!/api/Ext.form.Action-static-property-SERVER_INVALID\" rel=\"Ext.form.Action-static-property-SERVER_INVALID\" class=\"docClass\">SERVER_INVALID</a>){\n                        // server responded with success = false\n                        Ext.Msg.alert('Invalid', action.<a href=\"#!/api/Ext.form.Action-property-result\" rel=\"Ext.form.Action-property-result\" class=\"docClass\">result</a>.errormsg);\n                    }\n                }\n            });\n        }\n    }\n},{\n    text: 'Reset',\n    handler: function(){\n        fp.getForm().reset();\n    }\n}]\n</code></pre>\n\n</div></div></div><div id='property-response' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-property-response' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-property-response' class='name not-expandable'>response</a><span> : Object</span></div><div class='description'><div class='short'><p>The XMLHttpRequest object used to perform the action.</p>\n</div><div class='long'><p>The XMLHttpRequest object used to perform the action.</p>\n</div></div></div><div id='property-result' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-property-result' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-property-result' class='name not-expandable'>result</a><span> : Object</span></div><div class='description'><div class='short'><p>The decoded response object containing a boolean <tt style=\"font-weight:bold\">success</tt> property and\nother, action-specific properties.</p>\n</div><div class='long'><p>The decoded response object containing a boolean <tt style=\"font-weight:bold\">success</tt> property and\nother, action-specific properties.</p>\n</div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.Action.DirectLoad'>Ext.form.Action.DirectLoad</span><br/><a href='source/Action2.html#Ext-form-Action-DirectLoad-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action.DirectLoad-property-type' class='name expandable'>type</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The type of action this Action instance performs. ...</div><div class='long'><p>The type of action this Action instance performs.\nCurrently only \"submit\" and \"load\" are supported.</p>\n<p>Defaults to: <code>'directload'</code></p><p>Overrides: <a href='#!/api/Ext.form.Action-property-type' rel='Ext.form.Action-property-type' class='docClass'>Ext.form.Action.type</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.Action.DirectLoad'>Ext.form.Action.DirectLoad</span><br/><a href='source/Action2.html#Ext-form-Action-DirectLoad-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.form.Action.DirectLoad-method-constructor' class='name expandable'>Ext.form.Action.DirectLoad</a>( <span class='pre'>form, opts</span> ) : <a href=\"#!/api/Ext.form.Action.DirectLoad\" rel=\"Ext.form.Action.DirectLoad\" class=\"docClass\">Ext.form.Action.DirectLoad</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>form</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>opts</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.form.Action.DirectLoad\" rel=\"Ext.form.Action.DirectLoad\" class=\"docClass\">Ext.form.Action.DirectLoad</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getParams' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.Action.DirectLoad'>Ext.form.Action.DirectLoad</span><br/><a href='source/Action2.html#Ext-form-Action-DirectLoad-method-getParams' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action.DirectLoad-method-getParams' class='name expandable'>getParams</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-processResponse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.Action.DirectLoad'>Ext.form.Action.DirectLoad</span><br/><a href='source/Action2.html#Ext-form-Action-DirectLoad-method-processResponse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action.DirectLoad-method-processResponse' class='name expandable'>processResponse</a>( <span class='pre'>result</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Direct actions have already been processed and therefore\nwe can directly set the result; Direct Actions do not have\na...</div><div class='long'><p>Direct actions have already been processed and therefore\nwe can directly set the result; Direct Actions do not have\na this.response property.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>result</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.Action.DirectLoad'>Ext.form.Action.DirectLoad</span><br/><a href='source/Action2.html#Ext-form-Action-DirectLoad-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action.DirectLoad-method-run' class='name expandable'>run</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-success' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.form.Action.DirectLoad'>Ext.form.Action.DirectLoad</span><br/><a href='source/Action2.html#Ext-form-Action-DirectLoad-method-success' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action.DirectLoad-method-success' class='name expandable'>success</a>( <span class='pre'>response, trans</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>response</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>trans</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>",
    "superclasses": ["Ext.form.Action", "Ext.form.Action.Load"],
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
        "href": "Action2.html#Ext-form-Action-DirectLoad",
        "filename": "Action.js"
    }],
    "linenr": 526,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.form.Action",
            "meta": {},
            "name": "failureType",
            "id": "property-failureType"
        }, {
            "tagname": "property",
            "owner": "Ext.form.Action",
            "meta": {},
            "name": "response",
            "id": "property-response"
        }, {
            "tagname": "property",
            "owner": "Ext.form.Action",
            "meta": {},
            "name": "result",
            "id": "property-result"
        }, {
            "tagname": "property",
            "owner": "Ext.form.Action.DirectLoad",
            "meta": {},
            "name": "type",
            "id": "property-type"
        }],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.form.Action",
            "meta": {},
            "name": "failure",
            "id": "cfg-failure"
        }, {
            "tagname": "cfg",
            "owner": "Ext.form.Action",
            "meta": {},
            "name": "method",
            "id": "cfg-method"
        }, {
            "tagname": "cfg",
            "owner": "Ext.form.Action",
            "meta": {},
            "name": "params",
            "id": "cfg-params"
        }, {
            "tagname": "cfg",
            "owner": "Ext.form.Action",
            "meta": {},
            "name": "reset",
            "id": "cfg-reset"
        }, {
            "tagname": "cfg",
            "owner": "Ext.form.Action",
            "meta": {},
            "name": "scope",
            "id": "cfg-scope"
        }, {
            "tagname": "cfg",
            "owner": "Ext.form.Action",
            "meta": {},
            "name": "submitEmptyText",
            "id": "cfg-submitEmptyText"
        }, {
            "tagname": "cfg",
            "owner": "Ext.form.Action",
            "meta": {},
            "name": "success",
            "id": "cfg-success"
        }, {
            "tagname": "cfg",
            "owner": "Ext.form.Action",
            "meta": {},
            "name": "timeout",
            "id": "cfg-timeout"
        }, {
            "tagname": "cfg",
            "owner": "Ext.form.Action",
            "meta": {},
            "name": "url",
            "id": "cfg-url"
        }, {
            "tagname": "cfg",
            "owner": "Ext.form.Action",
            "meta": {},
            "name": "waitMsg",
            "id": "cfg-waitMsg"
        }, {
            "tagname": "cfg",
            "owner": "Ext.form.Action",
            "meta": {},
            "name": "waitTitle",
            "id": "cfg-waitTitle"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.form.Action.DirectLoad",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.form.Action.DirectLoad",
            "meta": {
                "private": true
            },
            "name": "getParams",
            "id": "method-getParams"
        }, {
            "tagname": "method",
            "owner": "Ext.form.Action.DirectLoad",
            "meta": {
                "private": true
            },
            "name": "processResponse",
            "id": "method-processResponse"
        }, {
            "tagname": "method",
            "owner": "Ext.form.Action.DirectLoad",
            "meta": {
                "private": true
            },
            "name": "run",
            "id": "method-run"
        }, {
            "tagname": "method",
            "owner": "Ext.form.Action.DirectLoad",
            "meta": {
                "private": true
            },
            "name": "success",
            "id": "method-success"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.form.Action.DirectLoad",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.form.Action.DirectLoad",
    "mixins": [],
    "mixedInto": []
});