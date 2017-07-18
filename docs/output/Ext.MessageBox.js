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
Ext.data.JsonP.Ext_MessageBox({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/MessageBox.html#Ext-MessageBox' target='_blank'>MessageBox.js</a></div></pre><div class='doc-contents'><p>Utility class for generating different styles of message boxes.  The alias <a href=\"#!/api/Ext.Msg\" rel=\"Ext.Msg\" class=\"docClass\">Ext.Msg</a> can also be used.<p/>\n<p>Note that the MessageBox is asynchronous.  Unlike a regular JavaScript <code>alert</code> (which will halt\nbrowser execution), showing a MessageBox will not cause the code to stop.  For this reason, if you have code\nthat should only run <em>after</em> some user feedback from the MessageBox, you must use a callback function\n(see the <code>function</code> parameter for <a href=\"#!/api/Ext.MessageBox-method-show\" rel=\"Ext.MessageBox-method-show\" class=\"docClass\">show</a> for more details).</p>\n<p>Example usage:</p>\n<pre><code>// Basic alert:\nExt.Msg.alert('Status', 'Changes saved successfully.');\n\n// Prompt for user data and process the result using a callback:\nExt.Msg.prompt('Name', 'Please enter your name:', function(btn, text){\n    if (btn == 'ok'){\n        // process text value and close...\n    }\n});\n\n// Show a dialog using config options:\nExt.Msg.show({\n   title:'Save Changes?',\n   msg: 'You are closing a tab that has unsaved changes. Would you like to save your changes?',\n   buttons: Ext.Msg.YESNOCANCEL,\n   fn: processResult,\n   animEl: 'elId',\n   icon: <a href=\"#!/api/Ext.MessageBox-property-QUESTION\" rel=\"Ext.MessageBox-property-QUESTION\" class=\"docClass\">Ext.MessageBox.QUESTION</a>\n});\n</code></pre>\n\n</p></p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-CANCEL' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-property-CANCEL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-property-CANCEL' class='name expandable'>CANCEL</a><span> : Object</span></div><div class='description'><div class='short'>Button config that displays a single Cancel button ...</div><div class='long'><p>Button config that displays a single Cancel button</p>\n<p>Defaults to: <code>{cancel: true}</code></p></div></div></div><div id='property-ERROR' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-property-ERROR' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-property-ERROR' class='name expandable'>ERROR</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The CSS class that provides the ERROR icon image ...</div><div class='long'><p>The CSS class that provides the ERROR icon image</p>\n<p>Defaults to: <code>'ext-mb-error'</code></p></div></div></div><div id='property-INFO' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-property-INFO' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-property-INFO' class='name expandable'>INFO</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The CSS class that provides the INFO icon image ...</div><div class='long'><p>The CSS class that provides the INFO icon image</p>\n<p>Defaults to: <code>'ext-mb-info'</code></p></div></div></div><div id='property-OK' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-property-OK' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-property-OK' class='name expandable'>OK</a><span> : Object</span></div><div class='description'><div class='short'>Button config that displays a single OK button ...</div><div class='long'><p>Button config that displays a single OK button</p>\n<p>Defaults to: <code>{ok: true}</code></p></div></div></div><div id='property-OKCANCEL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-property-OKCANCEL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-property-OKCANCEL' class='name expandable'>OKCANCEL</a><span> : Object</span></div><div class='description'><div class='short'>Button config that displays OK and Cancel buttons ...</div><div class='long'><p>Button config that displays OK and Cancel buttons</p>\n<p>Defaults to: <code>{ok: true, cancel: true}</code></p></div></div></div><div id='property-QUESTION' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-property-QUESTION' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-property-QUESTION' class='name expandable'>QUESTION</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The CSS class that provides the QUESTION icon image ...</div><div class='long'><p>The CSS class that provides the QUESTION icon image</p>\n<p>Defaults to: <code>'ext-mb-question'</code></p></div></div></div><div id='property-WARNING' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-property-WARNING' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-property-WARNING' class='name expandable'>WARNING</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The CSS class that provides the WARNING icon image ...</div><div class='long'><p>The CSS class that provides the WARNING icon image</p>\n<p>Defaults to: <code>'ext-mb-warning'</code></p></div></div></div><div id='property-YESNO' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-property-YESNO' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-property-YESNO' class='name expandable'>YESNO</a><span> : Object</span></div><div class='description'><div class='short'>Button config that displays Yes and No buttons ...</div><div class='long'><p>Button config that displays Yes and No buttons</p>\n<p>Defaults to: <code>{yes: true, no: true}</code></p></div></div></div><div id='property-YESNOCANCEL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-property-YESNOCANCEL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-property-YESNOCANCEL' class='name expandable'>YESNOCANCEL</a><span> : Object</span></div><div class='description'><div class='short'>Button config that displays Yes, No and Cancel buttons ...</div><div class='long'><p>Button config that displays Yes, No and Cancel buttons</p>\n<p>Defaults to: <code>{yes: true, no: true, cancel: true}</code></p></div></div></div><div id='property-buttonText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-property-buttonText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-property-buttonText' class='name expandable'>buttonText</a><span> : Object</span></div><div class='description'><div class='short'>An object containing the default button text strings that can be overriden for localized language support. ...</div><div class='long'><p>An object containing the default button text strings that can be overriden for localized language support.\nSupported properties are: ok, cancel, yes and no.  Generally you should include a locale-specific\nresource file for handling language support across the framework.\nCustomize the default text like so: Ext.MessageBox.buttonText.yes = \"oui\"; //french</p>\n<p>Defaults to: <code>{ok: &quot;OK&quot;, cancel: &quot;Cancel&quot;, yes: &quot;Yes&quot;, no: &quot;No&quot;}</code></p></div></div></div><div id='property-defaultTextHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-property-defaultTextHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-property-defaultTextHeight' class='name expandable'>defaultTextHeight</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The default height in pixels of the message box's multiline textarea if displayed (defaults to 75) ...</div><div class='long'><p>The default height in pixels of the message box's multiline textarea if displayed (defaults to 75)</p>\n<p>Defaults to: <code>75</code></p></div></div></div><div id='property-maxWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-property-maxWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-property-maxWidth' class='name expandable'>maxWidth</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The maximum width in pixels of the message box (defaults to 600) ...</div><div class='long'><p>The maximum width in pixels of the message box (defaults to 600)</p>\n<p>Defaults to: <code>600</code></p></div></div></div><div id='property-minProgressWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-property-minProgressWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-property-minProgressWidth' class='name expandable'>minProgressWidth</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The minimum width in pixels of the message box if it is a progress-style dialog. ...</div><div class='long'><p>The minimum width in pixels of the message box if it is a progress-style dialog.  This is useful\nfor setting a different minimum width than text-only dialogs may need (defaults to 250).</p>\n<p>Defaults to: <code>250</code></p></div></div></div><div id='property-minPromptWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-property-minPromptWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-property-minPromptWidth' class='name expandable'>minPromptWidth</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The minimum width in pixels of the message box if it is a prompt dialog. ...</div><div class='long'><p>The minimum width in pixels of the message box if it is a prompt dialog.  This is useful\nfor setting a different minimum width than text-only dialogs may need (defaults to 250).</p>\n<p>Defaults to: <code>250</code></p></div></div></div><div id='property-minWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-property-minWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-property-minWidth' class='name expandable'>minWidth</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The minimum width in pixels of the message box (defaults to 100) ...</div><div class='long'><p>The minimum width in pixels of the message box (defaults to 100)</p>\n<p>Defaults to: <code>100</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-alert' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-method-alert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-method-alert' class='name expandable'>alert</a>( <span class='pre'>title, msg, [fn], [scope]</span> ) : <a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Displays a standard read-only message box with an OK button (comparable to the basic JavaScript alert prompt). ...</div><div class='long'><p>Displays a standard read-only message box with an OK button (comparable to the basic JavaScript alert prompt).\nIf a callback function is passed it will be called after the user clicks the button, and the\nid of the button that was clicked will be passed as the only parameter to the callback\n(could also be the top-right close button).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The title bar text</p>\n</div></li><li><span class='pre'>msg</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The message box body text</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>The callback function invoked after the message box is closed</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the callback is executed. Defaults to the browser wnidow.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-confirm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-method-confirm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-method-confirm' class='name expandable'>confirm</a>( <span class='pre'>title, msg, [fn], [scope]</span> ) : <a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Displays a confirmation message box with Yes and No buttons (comparable to JavaScript's confirm). ...</div><div class='long'><p>Displays a confirmation message box with Yes and No buttons (comparable to JavaScript's confirm).\nIf a callback function is passed it will be called after the user clicks either button,\nand the id of the button that was clicked will be passed as the only parameter to the callback\n(could also be the top-right close button).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The title bar text</p>\n</div></li><li><span class='pre'>msg</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The message box body text</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>The callback function invoked after the message box is closed</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the callback is executed. Defaults to the browser wnidow.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-getDialog' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-method-getDialog' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-method-getDialog' class='name expandable'>getDialog</a>( <span class='pre'>titleText</span> ) : <a href=\"#!/api/Ext.Window\" rel=\"Ext.Window\" class=\"docClass\">Ext.Window</a></div><div class='description'><div class='short'>Returns a reference to the underlying Ext.Window element ...</div><div class='long'><p>Returns a reference to the underlying <a href=\"#!/api/Ext.Window\" rel=\"Ext.Window\" class=\"docClass\">Ext.Window</a> element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>titleText</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Window\" rel=\"Ext.Window\" class=\"docClass\">Ext.Window</a></span><div class='sub-desc'><p>The window</p>\n</div></li></ul></div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-method-hide' class='name expandable'>hide</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Hides the message box if it is displayed ...</div><div class='long'><p>Hides the message box if it is displayed</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-isVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-method-isVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-method-isVisible' class='name expandable'>isVisible</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the message box is currently displayed ...</div><div class='long'><p>Returns true if the message box is currently displayed</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the message box is visible, else false</p>\n</div></li></ul></div></div></div><div id='method-progress' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-method-progress' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-method-progress' class='name expandable'>progress</a>( <span class='pre'>title, msg, [progressText]</span> ) : <a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Displays a message box with a progress bar. ...</div><div class='long'><p>Displays a message box with a progress bar.  This message box has no buttons and is not closeable by\nthe user.  You are responsible for updating the progress bar as needed via <a href=\"#!/api/Ext.MessageBox-method-updateProgress\" rel=\"Ext.MessageBox-method-updateProgress\" class=\"docClass\">updateProgress</a>\nand closing the message box when the process is complete.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The title bar text</p>\n</div></li><li><span class='pre'>msg</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The message box body text</p>\n</div></li><li><span class='pre'>progressText</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The text to display inside the progress bar (defaults to '')</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-prompt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-method-prompt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-method-prompt' class='name expandable'>prompt</a>( <span class='pre'>title, msg, [fn], [scope], [multiline], [value]</span> ) : <a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Displays a message box with OK and Cancel buttons prompting the user to enter some text (comparable to JavaScript's p...</div><div class='long'><p>Displays a message box with OK and Cancel buttons prompting the user to enter some text (comparable to JavaScript's prompt).\nThe prompt can be a single-line or multi-line textbox.  If a callback function is passed it will be called after the user\nclicks either button, and the id of the button that was clicked (could also be the top-right\nclose button) and the text that was entered will be passed as the two parameters to the callback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The title bar text</p>\n</div></li><li><span class='pre'>msg</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The message box body text</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>The callback function invoked after the message box is closed</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the callback is executed. Defaults to the browser wnidow.</p>\n</div></li><li><span class='pre'>multiline</span> : Boolean/<a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>True to create a multiline textbox using the defaultTextHeight\nproperty, or the height in pixels to create the textbox (defaults to false / single-line)</p>\n</div></li><li><span class='pre'>value</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>Default value of the text input element (defaults to '')</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setIcon' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-method-setIcon' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-method-setIcon' class='name expandable'>setIcon</a>( <span class='pre'>icon</span> ) : <a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Adds the specified icon to the dialog. ...</div><div class='long'><p>Adds the specified icon to the dialog.  By default, the class 'ext-mb-icon' is applied for default\nstyling, and the class passed in is expected to supply the background image url. Pass in empty string ('')\nto clear any existing icon. This method must be called before the MessageBox is shown.\nThe following built-in icon classes are supported, but you can also pass in a custom class name:</p>\n\n<pre><a href=\"#!/api/Ext.MessageBox-property-INFO\" rel=\"Ext.MessageBox-property-INFO\" class=\"docClass\">Ext.MessageBox.INFO</a>\n<a href=\"#!/api/Ext.MessageBox-property-WARNING\" rel=\"Ext.MessageBox-property-WARNING\" class=\"docClass\">Ext.MessageBox.WARNING</a>\n<a href=\"#!/api/Ext.MessageBox-property-QUESTION\" rel=\"Ext.MessageBox-property-QUESTION\" class=\"docClass\">Ext.MessageBox.QUESTION</a>\n<a href=\"#!/api/Ext.MessageBox-property-ERROR\" rel=\"Ext.MessageBox-property-ERROR\" class=\"docClass\">Ext.MessageBox.ERROR</a>\n</pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>icon</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>A CSS classname specifying the icon's background image url, or empty string to clear the icon</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-method-show' class='name expandable'>show</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Displays a new message box, or reinitializes an existing message box, based on the config options\npassed in. ...</div><div class='long'><p>Displays a new message box, or reinitializes an existing message box, based on the config options\npassed in. All display functions (e.g. prompt, alert, etc.) on MessageBox call this function internally,\nalthough those calls are basic shortcuts and do not support all of the config options allowed here.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The following config options are supported: <ul>\n<li><b>animEl</b> : String/Element<div class=\"sub-desc\">An id or Element from which the message box should animate as it\nopens and closes (defaults to undefined)</div></li>\n<li><b>buttons</b> : Object/Boolean<div class=\"sub-desc\">A button config object (e.g., <a href=\"#!/api/Ext.MessageBox-property-OKCANCEL\" rel=\"Ext.MessageBox-property-OKCANCEL\" class=\"docClass\">Ext.MessageBox.OKCANCEL</a> or {ok:'Foo',\ncancel:'Bar'}), or false to not show any buttons (defaults to false)</div></li>\n<li><b>closable</b> : Boolean<div class=\"sub-desc\">False to hide the top-right close button (defaults to true). Note that\nprogress and wait dialogs will ignore this property and always hide the close button as they can only\nbe closed programmatically.</div></li>\n<li><b>cls</b> : String<div class=\"sub-desc\">A custom CSS class to apply to the message box's container element</div></li>\n<li><b>defaultTextHeight</b> : Number<div class=\"sub-desc\">The default height in pixels of the message box's multiline textarea\nif displayed (defaults to 75)</div></li>\n<li><b>fn</b> : Function<div class=\"sub-desc\">A callback function which is called when the dialog is dismissed either\nby clicking on the configured buttons, or on the dialog close button, or by pressing\nthe return button to enter input.</p>\n\n<p>Progress and wait dialogs will ignore this option since they do not respond to user\nactions and can only be closed programmatically, so any required function should be called\nby the same code after it closes the dialog. Parameters passed:<ul>\n<li><b>buttonId</b> : String<div class=\"sub-desc\">The ID of the button pressed, one of:<div class=\"sub-desc\"><ul>\n<li><tt>ok</tt></li>\n<li><tt>yes</tt></li>\n<li><tt>no</tt></li>\n<li><tt>cancel</tt></li>\n</ul></div></div></li>\n<li><b>text</b> : String<div class=\"sub-desc\">Value of the input field if either <tt><a href=\"#show-option-prompt\" ext:member=\"show-option-prompt\" ext:cls=\"Ext.MessageBox\">prompt</a></tt>\nor <tt><a href=\"#show-option-multiline\" ext:member=\"show-option-multiline\" ext:cls=\"Ext.MessageBox\">multiline</a></tt> is true</div></li>\n<li><b>opt</b> : Object<div class=\"sub-desc\">The config object passed to show.</div></li>\n</ul></p>\n\n\n<p></div></li>\n<li><b>scope</b> : Object<div class=\"sub-desc\">The scope of the callback function</div></li>\n<li><b>icon</b> : String<div class=\"sub-desc\">A CSS class that provides a background image to be used as the body icon for the\ndialog (e.g. <a href=\"#!/api/Ext.MessageBox-property-WARNING\" rel=\"Ext.MessageBox-property-WARNING\" class=\"docClass\">Ext.MessageBox.WARNING</a> or 'custom-class') (defaults to '')</div></li>\n<li><b>iconCls</b> : String<div class=\"sub-desc\">The standard <a href=\"#!/api/Ext.Window-cfg-iconCls\" rel=\"Ext.Window-cfg-iconCls\" class=\"docClass\">Ext.Window.iconCls</a> to\nadd an optional header icon (defaults to '')</div></li>\n<li><b>maxWidth</b> : Number<div class=\"sub-desc\">The maximum width in pixels of the message box (defaults to 600)</div></li>\n<li><b>minWidth</b> : Number<div class=\"sub-desc\">The minimum width in pixels of the message box (defaults to 100)</div></li>\n<li><b>modal</b> : Boolean<div class=\"sub-desc\">False to allow user interaction with the page while the message box is\ndisplayed (defaults to true)</div></li>\n<li><b>msg</b> : String<div class=\"sub-desc\">A string that will replace the existing message box body text (defaults to the\nXHTML-compliant non-breaking space character '&amp;#160;')</div></li>\n<li><a id=\"show-option-multiline\"></a><b>multiline</b> : Boolean<div class=\"sub-desc\">\nTrue to prompt the user to enter multi-line text (defaults to false)</div></li>\n<li><b>progress</b> : Boolean<div class=\"sub-desc\">True to display a progress bar (defaults to false)</div></li>\n<li><b>progressText</b> : String<div class=\"sub-desc\">The text to display inside the progress bar if progress = true (defaults to '')</div></li>\n<li><a id=\"show-option-prompt\"></a><b>prompt</b> : Boolean<div class=\"sub-desc\">True to prompt the user to enter single-line text (defaults to false)</div></li>\n<li><b>proxyDrag</b> : Boolean<div class=\"sub-desc\">True to display a lightweight proxy while dragging (defaults to false)</div></li>\n<li><b>title</b> : String<div class=\"sub-desc\">The title text</div></li>\n<li><b>value</b> : String<div class=\"sub-desc\">The string value to set into the active textbox element if displayed</div></li>\n<li><b>wait</b> : Boolean<div class=\"sub-desc\">True to display a progress bar (defaults to false)</div></li>\n<li><b>waitConfig</b> : Object<div class=\"sub-desc\">A Ext.ProgressBar.waitConfig object (applies only if wait = true)</div></li>\n<li><b>width</b> : Number<div class=\"sub-desc\">The width of the dialog in pixels</div></li>\n</ul>\nExample usage:</p>\n\n<pre><code>Ext.Msg.show({\n   title: 'Address',\n   msg: 'Please enter your address:',\n   width: 300,\n   buttons: <a href=\"#!/api/Ext.MessageBox-property-OKCANCEL\" rel=\"Ext.MessageBox-property-OKCANCEL\" class=\"docClass\">Ext.MessageBox.OKCANCEL</a>,\n   multiline: true,\n   fn: saveAddress,\n   animEl: 'addAddressBtn',\n   icon: <a href=\"#!/api/Ext.MessageBox-property-INFO\" rel=\"Ext.MessageBox-property-INFO\" class=\"docClass\">Ext.MessageBox.INFO</a>\n});\n</code></pre>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-updateProgress' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-method-updateProgress' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-method-updateProgress' class='name expandable'>updateProgress</a>( <span class='pre'>value, progressText, msg</span> ) : <a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Updates a progress-style message box's text and progress bar. ...</div><div class='long'><p>Updates a progress-style message box's text and progress bar. Only relevant on message boxes\ninitiated via <a href=\"#!/api/Ext.MessageBox-method-progress\" rel=\"Ext.MessageBox-method-progress\" class=\"docClass\">progress</a> or <a href=\"#!/api/Ext.MessageBox-method-wait\" rel=\"Ext.MessageBox-method-wait\" class=\"docClass\">wait</a>,\nor by calling <a href=\"#!/api/Ext.MessageBox-method-show\" rel=\"Ext.MessageBox-method-show\" class=\"docClass\">show</a> with progress: true.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Any number between 0 and 1 (e.g., .5, defaults to 0)</p>\n</div></li><li><span class='pre'>progressText</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The progress text to display inside the progress bar (defaults to '')</p>\n</div></li><li><span class='pre'>msg</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The message box's body text is replaced with the specified string (defaults to undefined\nso that any existing body text will not get overwritten by default unless a new value is passed in)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-updateText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-method-updateText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-method-updateText' class='name expandable'>updateText</a>( <span class='pre'>[text]</span> ) : <a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Updates the message box body text ...</div><div class='long'><p>Updates the message box body text</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>Replaces the message box element's innerHTML with the specified string (defaults to\nthe XHTML-compliant non-breaking space character '&amp;#160;')</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-wait' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.MessageBox'>Ext.MessageBox</span><br/><a href='source/MessageBox.html#Ext-MessageBox-method-wait' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.MessageBox-method-wait' class='name expandable'>wait</a>( <span class='pre'>msg, [title], [config]</span> ) : <a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Displays a message box with an infinitely auto-updating progress bar. ...</div><div class='long'><p>Displays a message box with an infinitely auto-updating progress bar.  This can be used to block user\ninteraction while waiting for a long-running process to complete that does not have defined intervals.\nYou are responsible for closing the message box when the process is complete.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>msg</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The message box body text</p>\n</div></li><li><span class='pre'>title</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The title bar text</p>\n</div></li><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'><p>A Ext.ProgressBar.waitConfig object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.MessageBox\" rel=\"Ext.MessageBox\" class=\"docClass\">Ext.MessageBox</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "MessageBox.html#Ext-MessageBox",
        "filename": "MessageBox.js"
    }],
    "linenr": 1,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "CANCEL",
            "id": "property-CANCEL"
        }, {
            "tagname": "property",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "ERROR",
            "id": "property-ERROR"
        }, {
            "tagname": "property",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "INFO",
            "id": "property-INFO"
        }, {
            "tagname": "property",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "OK",
            "id": "property-OK"
        }, {
            "tagname": "property",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "OKCANCEL",
            "id": "property-OKCANCEL"
        }, {
            "tagname": "property",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "QUESTION",
            "id": "property-QUESTION"
        }, {
            "tagname": "property",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "WARNING",
            "id": "property-WARNING"
        }, {
            "tagname": "property",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "YESNO",
            "id": "property-YESNO"
        }, {
            "tagname": "property",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "YESNOCANCEL",
            "id": "property-YESNOCANCEL"
        }, {
            "tagname": "property",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "buttonText",
            "id": "property-buttonText"
        }, {
            "tagname": "property",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "defaultTextHeight",
            "id": "property-defaultTextHeight"
        }, {
            "tagname": "property",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "maxWidth",
            "id": "property-maxWidth"
        }, {
            "tagname": "property",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "minProgressWidth",
            "id": "property-minProgressWidth"
        }, {
            "tagname": "property",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "minPromptWidth",
            "id": "property-minPromptWidth"
        }, {
            "tagname": "property",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "minWidth",
            "id": "property-minWidth"
        }],
        "cfg": [],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.MessageBox",
            "meta": {
                "chainable": true
            },
            "name": "alert",
            "id": "method-alert"
        }, {
            "tagname": "method",
            "owner": "Ext.MessageBox",
            "meta": {
                "chainable": true
            },
            "name": "confirm",
            "id": "method-confirm"
        }, {
            "tagname": "method",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "getDialog",
            "id": "method-getDialog"
        }, {
            "tagname": "method",
            "owner": "Ext.MessageBox",
            "meta": {
                "chainable": true
            },
            "name": "hide",
            "id": "method-hide"
        }, {
            "tagname": "method",
            "owner": "Ext.MessageBox",
            "meta": {},
            "name": "isVisible",
            "id": "method-isVisible"
        }, {
            "tagname": "method",
            "owner": "Ext.MessageBox",
            "meta": {
                "chainable": true
            },
            "name": "progress",
            "id": "method-progress"
        }, {
            "tagname": "method",
            "owner": "Ext.MessageBox",
            "meta": {
                "chainable": true
            },
            "name": "prompt",
            "id": "method-prompt"
        }, {
            "tagname": "method",
            "owner": "Ext.MessageBox",
            "meta": {
                "chainable": true
            },
            "name": "setIcon",
            "id": "method-setIcon"
        }, {
            "tagname": "method",
            "owner": "Ext.MessageBox",
            "meta": {
                "chainable": true
            },
            "name": "show",
            "id": "method-show"
        }, {
            "tagname": "method",
            "owner": "Ext.MessageBox",
            "meta": {
                "chainable": true
            },
            "name": "updateProgress",
            "id": "method-updateProgress"
        }, {
            "tagname": "method",
            "owner": "Ext.MessageBox",
            "meta": {
                "chainable": true
            },
            "name": "updateText",
            "id": "method-updateText"
        }, {
            "tagname": "method",
            "owner": "Ext.MessageBox",
            "meta": {
                "chainable": true
            },
            "name": "wait",
            "id": "method-wait"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.MessageBox",
    "singleton": true,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.MessageBox",
    "mixins": [],
    "mixedInto": []
});