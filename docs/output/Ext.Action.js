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
Ext.data.JsonP.Ext_Action({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Action.html#Ext-Action' target='_blank'>Action.js</a></div></pre><div class='doc-contents'><p>An Action is a piece of reusable functionality that can be abstracted out of any particular component so that it\ncan be usefully shared among multiple components.  Actions let you share handlers, configuration options and UI\nupdates across any components that support the Action interface (primarily <a href=\"#!/api/Ext.Toolbar\" rel=\"Ext.Toolbar\" class=\"docClass\">Ext.Toolbar</a>, <a href=\"#!/api/Ext.Button\" rel=\"Ext.Button\" class=\"docClass\">Ext.Button</a>\nand <a href=\"#!/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Ext.menu.Menu</a> components).</p>\n\n\n<p>Aside from supporting the config object interface, any component that needs to use Actions must also support\nthe following method list, as these will be called as needed by the Action class: setText(string), setIconCls(string),\nsetDisabled(boolean), setVisible(boolean) and setHandler(function).</p>\n\n\n<p>Example usage:<br></p>\n\n<pre><code>// Define the shared action.  Each component below will have the same\n// display text and icon, and will display the same message on click.\nvar action = new <a href=\"#!/api/Ext.Action\" rel=\"Ext.Action\" class=\"docClass\">Ext.Action</a>({\n    <a href=\"#!/api/Ext.Action-cfg-text\" rel=\"Ext.Action-cfg-text\" class=\"docClass\">text</a>: 'Do something',\n    <a href=\"#!/api/Ext.Action-cfg-handler\" rel=\"Ext.Action-cfg-handler\" class=\"docClass\">handler</a>: function(){\n        Ext.Msg.alert('Click', 'You did something.');\n    },\n    <a href=\"#!/api/Ext.Action-cfg-iconCls\" rel=\"Ext.Action-cfg-iconCls\" class=\"docClass\">iconCls</a>: 'do-something',\n    <a href=\"#!/api/Ext.Action-cfg-itemId\" rel=\"Ext.Action-cfg-itemId\" class=\"docClass\">itemId</a>: 'myAction'\n});\n\nvar panel = new <a href=\"#!/api/Ext.Panel\" rel=\"Ext.Panel\" class=\"docClass\">Ext.Panel</a>({\n    title: 'Actions',\n    width: 500,\n    height: 300,\n    tbar: [\n        // Add the action directly to a toolbar as a menu button\n        action,\n        {\n            text: 'Action Menu',\n            // Add the action to a menu as a text item\n            menu: [action]\n        }\n    ],\n    items: [\n        // Add the action to the panel body as a standard button\n        new <a href=\"#!/api/Ext.Button\" rel=\"Ext.Button\" class=\"docClass\">Ext.Button</a>(action)\n    ],\n    renderTo: <a href=\"#!/api/Ext-method-getBody\" rel=\"Ext-method-getBody\" class=\"docClass\">Ext.getBody</a>()\n});\n\n// Change the text for all components using the action\naction.setText('Something else');\n\n// Reference an action through a container using the itemId\nvar btn = panel.getComponent('myAction');\nvar aRef = btn.baseAction;\naRef.setText('New text');\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-disabled' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-cfg-disabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-cfg-disabled' class='name not-expandable'>disabled</a><span> : Boolean</span></div><div class='description'><div class='short'><p>True to disable all components using this action, false to enable them (defaults to false).</p>\n</div><div class='long'><p>True to disable all components using this action, false to enable them (defaults to false).</p>\n</div></div></div><div id='cfg-handler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-cfg-handler' class='name expandable'>handler</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'>The function that will be invoked by each component tied to this action\nwhen the component's primary event is trigger...</div><div class='long'><p>The function that will be invoked by each component tied to this action\nwhen the component's primary event is triggered (defaults to undefined).</p>\n</div></div></div><div id='cfg-hidden' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-cfg-hidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-cfg-hidden' class='name not-expandable'>hidden</a><span> : Boolean</span></div><div class='description'><div class='short'><p>True to hide all components using this action, false to show them (defaults to false).</p>\n</div><div class='long'><p>True to hide all components using this action, false to show them (defaults to false).</p>\n</div></div></div><div id='cfg-iconCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-cfg-iconCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-cfg-iconCls' class='name expandable'>iconCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The CSS class selector that specifies a background image to be used as the header icon for\nall components using this ...</div><div class='long'><p>The CSS class selector that specifies a background image to be used as the header icon for\nall components using this action (defaults to '').</p>\n\n<p>An example of specifying a custom icon class would be something like:\n</p>\n\n\n<pre><code>// specify the property in the config for the class:\n     ...\n     iconCls: 'do-something'\n\n// css class that specifies background image to be used as the icon image:\n.do-something { background-image: url(../images/my-icon.gif) 0 6px no-repeat !important; }\n</code></pre>\n\n</div></div></div><div id='cfg-itemId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-cfg-itemId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-cfg-itemId' class='name not-expandable'>itemId</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>See <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#!/api/Ext.Component-cfg-itemId\" rel=\"Ext.Component-cfg-itemId\" class=\"docClass\">itemId</a>.</p>\n</div><div class='long'><p>See <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#!/api/Ext.Component-cfg-itemId\" rel=\"Ext.Component-cfg-itemId\" class=\"docClass\">itemId</a>.</p>\n</div></div></div><div id='cfg-scope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-cfg-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-cfg-scope' class='name expandable'>scope</a><span> : Object</span></div><div class='description'><div class='short'>The scope (this reference) in which the\nhandler is executed. ...</div><div class='long'><p>The scope (<tt><b>this</b></tt> reference) in which the\n<code><a href=\"#!/api/Ext.Action-cfg-handler\" rel=\"Ext.Action-cfg-handler\" class=\"docClass\">handler</a></code> is executed. Defaults to this Button.</p>\n</div></div></div><div id='cfg-text' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-cfg-text' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-cfg-text' class='name not-expandable'>text</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The text to set for all components using this action (defaults to '').</p>\n</div><div class='long'><p>The text to set for all components using this action (defaults to '').</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-isAction' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-property-isAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-property-isAction' class='name expandable'>isAction</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.Action-method-constructor' class='name expandable'>Ext.Action</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.Action\" rel=\"Ext.Action\" class=\"docClass\">Ext.Action</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The configuration options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Action\" rel=\"Ext.Action\" class=\"docClass\">Ext.Action</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-addComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-addComponent' class='name expandable'>addComponent</a>( <span class='pre'>comp</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>comp</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-callEach' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-callEach' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-callEach' class='name expandable'>callEach</a>( <span class='pre'>fnName, args</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fnName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-disable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-disable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-disable' class='name expandable'>disable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Disables all components using this action. ...</div><div class='long'><p>Disables all components using this action.</p>\n</div></div></div><div id='method-each' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-each' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-each' class='name expandable'>each</a>( <span class='pre'>fn, scope</span> )</div><div class='description'><div class='short'>Executes the specified function once for each Component currently tied to this action. ...</div><div class='long'><p>Executes the specified function once for each Component currently tied to this action.  The function passed\nin should accept a single argument that will be an object that supports the basic Action config/method interface.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The function to execute for each component</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the function is executed.  Defaults to the Component.</p>\n</div></li></ul></div></div></div><div id='method-enable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-enable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-enable' class='name expandable'>enable</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Enables all components using this action. ...</div><div class='long'><p>Enables all components using this action.</p>\n</div></div></div><div id='method-execute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-execute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-execute' class='name expandable'>execute</a>( <span class='pre'>args</span> )</div><div class='description'><div class='short'>Executes this action manually using the handler function specified in the original config object\nor the handler funct...</div><div class='long'><p>Executes this action manually using the handler function specified in the original config object\nor the handler function set with <code><a href=\"#!/api/Ext.Action-method-setHandler\" rel=\"Ext.Action-method-setHandler\" class=\"docClass\">setHandler</a></code>.  Any arguments passed to this\nfunction will be passed on to the handler function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Mixed...<div class='sub-desc'><p>Variable number of arguments passed to the handler function</p>\n</div></li></ul></div></div></div><div id='method-getIconClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-getIconClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-getIconClass' class='name expandable'>getIconClass</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Gets the icon CSS class currently used by all components using this action. ...</div><div class='long'><p>Gets the icon CSS class currently used by all components using this action.</p>\n</div></div></div><div id='method-getText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-getText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-getText' class='name expandable'>getText</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Gets the text currently displayed by all components using this action. ...</div><div class='long'><p>Gets the text currently displayed by all components using this action.</p>\n</div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Hides all components using this action. ...</div><div class='long'><p>Hides all components using this action.</p>\n</div></div></div><div id='method-isDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-isDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-isDisabled' class='name expandable'>isDisabled</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Returns true if the components using this action are currently disabled, else returns false. ...</div><div class='long'><p>Returns true if the components using this action are currently disabled, else returns false.</p>\n</div></div></div><div id='method-isHidden' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-isHidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-isHidden' class='name expandable'>isHidden</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Returns true if the components using this action are currently hidden, else returns false. ...</div><div class='long'><p>Returns true if the components using this action are currently hidden, else returns false.</p>\n</div></div></div><div id='method-removeComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-removeComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-removeComponent' class='name expandable'>removeComponent</a>( <span class='pre'>comp</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private ...</div><div class='long'><p>private</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>comp</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-setDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-setDisabled' class='name expandable'>setDisabled</a>( <span class='pre'>disabled</span> )</div><div class='description'><div class='short'>Sets the disabled state of all components using this action. ...</div><div class='long'><p>Sets the disabled state of all components using this action.  Shortcut method\nfor <a href=\"#!/api/Ext.Action-method-enable\" rel=\"Ext.Action-method-enable\" class=\"docClass\">enable</a> and <a href=\"#!/api/Ext.Action-method-disable\" rel=\"Ext.Action-method-disable\" class=\"docClass\">disable</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>disabled</span> : Boolean<div class='sub-desc'><p>True to disable the component, false to enable it</p>\n</div></li></ul></div></div></div><div id='method-setHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-setHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-setHandler' class='name expandable'>setHandler</a>( <span class='pre'>fn, scope</span> )</div><div class='description'><div class='short'>Sets the function that will be called by each Component using this action when its primary event is triggered. ...</div><div class='long'><p>Sets the function that will be called by each Component using this action when its primary event is triggered.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The function that will be invoked by the action's components.  The function\nwill be called with no arguments.</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the function is executed. Defaults to the Component firing the event.</p>\n</div></li></ul></div></div></div><div id='method-setHidden' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-setHidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-setHidden' class='name expandable'>setHidden</a>( <span class='pre'>hidden</span> )</div><div class='description'><div class='short'>Sets the hidden state of all components using this action. ...</div><div class='long'><p>Sets the hidden state of all components using this action.  Shortcut method\nfor <code><a href=\"#!/api/Ext.Action-method-hide\" rel=\"Ext.Action-method-hide\" class=\"docClass\">hide</a></code> and <code><a href=\"#!/api/Ext.Action-method-show\" rel=\"Ext.Action-method-show\" class=\"docClass\">show</a></code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hidden</span> : Boolean<div class='sub-desc'><p>True to hide the component, false to show it</p>\n</div></li></ul></div></div></div><div id='method-setIconClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-setIconClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-setIconClass' class='name expandable'>setIconClass</a>( <span class='pre'>cls</span> )</div><div class='description'><div class='short'>Sets the icon CSS class for all components using this action. ...</div><div class='long'><p>Sets the icon CSS class for all components using this action.  The class should supply\na background image that will be used as the icon image.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The CSS class supplying the icon image</p>\n</div></li></ul></div></div></div><div id='method-setText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-setText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-setText' class='name expandable'>setText</a>( <span class='pre'>text</span> )</div><div class='description'><div class='short'>Sets the text to be displayed by all components using this action. ...</div><div class='long'><p>Sets the text to be displayed by all components using this action.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The text to display</p>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Action'>Ext.Action</span><br/><a href='source/Action.html#Ext-Action-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Action-method-show' class='name expandable'>show</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Shows all components using this action. ...</div><div class='long'><p>Shows all components using this action.</p>\n</div></div></div></div></div></div></div>",
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
        "href": "Action.html#Ext-Action",
        "filename": "Action.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.Action",
            "meta": {
                "private": true
            },
            "name": "isAction",
            "id": "property-isAction"
        }],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.Action",
            "meta": {},
            "name": "disabled",
            "id": "cfg-disabled"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Action",
            "meta": {},
            "name": "handler",
            "id": "cfg-handler"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Action",
            "meta": {},
            "name": "hidden",
            "id": "cfg-hidden"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Action",
            "meta": {},
            "name": "iconCls",
            "id": "cfg-iconCls"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Action",
            "meta": {},
            "name": "itemId",
            "id": "cfg-itemId"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Action",
            "meta": {},
            "name": "scope",
            "id": "cfg-scope"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Action",
            "meta": {},
            "name": "text",
            "id": "cfg-text"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {},
            "name": "constructor",
            "id": "method-constructor"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {
                "private": true
            },
            "name": "addComponent",
            "id": "method-addComponent"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {
                "private": true
            },
            "name": "callEach",
            "id": "method-callEach"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {},
            "name": "disable",
            "id": "method-disable"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {},
            "name": "each",
            "id": "method-each"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {},
            "name": "enable",
            "id": "method-enable"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {},
            "name": "execute",
            "id": "method-execute"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {},
            "name": "getIconClass",
            "id": "method-getIconClass"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {},
            "name": "getText",
            "id": "method-getText"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {},
            "name": "hide",
            "id": "method-hide"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {},
            "name": "isDisabled",
            "id": "method-isDisabled"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {},
            "name": "isHidden",
            "id": "method-isHidden"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {
                "private": true
            },
            "name": "removeComponent",
            "id": "method-removeComponent"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {},
            "name": "setDisabled",
            "id": "method-setDisabled"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {},
            "name": "setHandler",
            "id": "method-setHandler"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {},
            "name": "setHidden",
            "id": "method-setHidden"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {},
            "name": "setIconClass",
            "id": "method-setIconClass"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
            "meta": {},
            "name": "setText",
            "id": "method-setText"
        }, {
            "tagname": "method",
            "owner": "Ext.Action",
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
    "name": "Ext.Action",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.Action",
    "mixins": [],
    "mixedInto": []
});