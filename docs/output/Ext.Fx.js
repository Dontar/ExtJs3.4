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
Ext.data.JsonP.Ext_Fx({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Fx.html#Ext-Fx' target='_blank'>Fx.js</a></div></pre><div class='doc-contents'><p>A class to provide basic animation and visual effects support.  <b>Note:</b> This class is automatically applied\nto the <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a> interface when included, so all effects calls should be performed via <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>.\nConversely, since the effects are not actually defined in <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a>, <a href=\"#!/api/Ext.Fx\" rel=\"Ext.Fx\" class=\"docClass\">Ext.Fx</a> <b>must</b> be\n<a href=\"#!/api/Ext-property-enableFx\" rel=\"Ext-property-enableFx\" class=\"docClass\">included</a> in order for the Element effects to work.</p>\n\n\n<br/>\n\n\n\n\n<p><b><u>Method Chaining</u></b></p>\n\n\n<p>It is important to note that although the Fx methods and many non-Fx Element methods support \"method chaining\" in that\nthey return the Element object itself as the method return value, it is not always possible to mix the two in a single\nmethod chain.  The Fx methods use an internal effects queue so that each effect can be properly timed and sequenced.\nNon-Fx methods, on the other hand, have no such internal queueing and will always execute immediately.  For this reason,\nwhile it may be possible to mix certain Fx and non-Fx method calls in a single chain, it may not always provide the\nexpected results and should be done with care.  Also see <tt><a href=\"#!/api/Ext.Fx-cfg-callback\" rel=\"Ext.Fx-cfg-callback\" class=\"docClass\">callback</a></tt>.</p>\n\n\n<br/>\n\n\n\n\n<p><b><u>Anchor Options for Motion Effects</u></b></p>\n\n\n<p>Motion effects support 8-way anchoring, meaning that you can choose one of 8 different anchor points on the Element\nthat will serve as either the start or end point of the animation.  Following are all of the supported anchor positions:</p>\n\n\n<pre>Value  Description\n-----  -----------------------------\ntl     The top left corner\nt      The center of the top edge\ntr     The top right corner\nl      The center of the left edge\nr      The center of the right edge\nbl     The bottom left corner\nb      The center of the bottom edge\nbr     The bottom right corner\n</pre>\n\n\n<p><b>Note</b>: some Fx methods accept specific custom config parameters.  The options shown in the Config Options\nsection below are common options that can be passed to any Fx method unless otherwise noted.</b></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-afterCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-cfg-afterCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-cfg-afterCls' class='name not-expandable'>afterCls</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>A css class to apply after the effect</p>\n</div><div class='long'><p>A css class to apply after the effect</p>\n</div></div></div><div id='cfg-afterStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-cfg-afterStyle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-cfg-afterStyle' class='name expandable'>afterStyle</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/Object/<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'>A style specification string, e.g. ...</div><div class='long'><p>A style specification string, e.g. <tt>\"width:100px\"</tt>, or an object\nin the form <tt>{width:\"100px\"}</tt>, or a function which returns such a specification that will be applied to the\nElement after the effect finishes.</p>\n</div></div></div><div id='cfg-block' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-cfg-block' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-cfg-block' class='name not-expandable'>block</a><span> : Boolean</span></div><div class='description'><div class='short'><p>Whether the effect should block other effects from queueing while it runs</p>\n</div><div class='long'><p>Whether the effect should block other effects from queueing while it runs</p>\n</div></div></div><div id='cfg-callback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-cfg-callback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-cfg-callback' class='name expandable'>callback</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'>A function called when the effect is finished. ...</div><div class='long'><p>A function called when the effect is finished.  Note that effects are queued internally by the\nFx class, so a callback is not required to specify another effect -- effects can simply be chained together\nand called in sequence (see note for <b><u>Method Chaining</u></b> above), for example:</p>\n\n<pre><code>el.slideIn().highlight();\n</code></pre>\n\n\n<p>The callback is intended for any additional code that should run once a particular effect has completed. The Element\nbeing operated upon is passed as the first parameter.</p>\n</div></div></div><div id='cfg-concurrent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-cfg-concurrent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-cfg-concurrent' class='name expandable'>concurrent</a><span> : Boolean</span></div><div class='description'><div class='short'>Whether to allow subsequently-queued effects to run at the same time as the current effect, or to ensure that they ru...</div><div class='long'><p>Whether to allow subsequently-queued effects to run at the same time as the current effect, or to ensure that they run in sequence</p>\n</div></div></div><div id='cfg-duration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-cfg-duration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-cfg-duration' class='name not-expandable'>duration</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>The length of time (in seconds) that the effect should last</p>\n</div><div class='long'><p>The length of time (in seconds) that the effect should last</p>\n</div></div></div><div id='cfg-easing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-cfg-easing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-cfg-easing' class='name expandable'>easing</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>A valid Ext.lib.Easing value for the effect:\nbackBoth\nbackIn\nbackOut\nbounceBoth\nbounceIn\nbounceOut\neaseBoth\neaseBothS...</div><div class='long'><p>A valid Ext.lib.Easing value for the effect:</p><div class=\"mdetail-params\"><ul>\n<li><b><tt>backBoth</tt></b></li>\n<li><b><tt>backIn</tt></b></li>\n<li><b><tt>backOut</tt></b></li>\n<li><b><tt>bounceBoth</tt></b></li>\n<li><b><tt>bounceIn</tt></b></li>\n<li><b><tt>bounceOut</tt></b></li>\n<li><b><tt>easeBoth</tt></b></li>\n<li><b><tt>easeBothStrong</tt></b></li>\n<li><b><tt>easeIn</tt></b></li>\n<li><b><tt>easeInStrong</tt></b></li>\n<li><b><tt>easeNone</tt></b></li>\n<li><b><tt>easeOut</tt></b></li>\n<li><b><tt>easeOutStrong</tt></b></li>\n<li><b><tt>elasticBoth</tt></b></li>\n<li><b><tt>elasticIn</tt></b></li>\n<li><b><tt>elasticOut</tt></b></li>\n</ul></div></p>\n</div></div></div><div id='cfg-endOpacity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-cfg-endOpacity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-cfg-endOpacity' class='name not-expandable'>endOpacity</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'><p>Only applicable for <a href=\"#!/api/Ext.Fx-method-fadeIn\" rel=\"Ext.Fx-method-fadeIn\" class=\"docClass\">fadeIn</a> or <a href=\"#!/api/Ext.Fx-method-fadeOut\" rel=\"Ext.Fx-method-fadeOut\" class=\"docClass\">fadeOut</a>, a number between\n<tt>0</tt> and <tt>1</tt> inclusive to configure the ending opacity value.</p>\n</div><div class='long'><p>Only applicable for <a href=\"#!/api/Ext.Fx-method-fadeIn\" rel=\"Ext.Fx-method-fadeIn\" class=\"docClass\">fadeIn</a> or <a href=\"#!/api/Ext.Fx-method-fadeOut\" rel=\"Ext.Fx-method-fadeOut\" class=\"docClass\">fadeOut</a>, a number between\n<tt>0</tt> and <tt>1</tt> inclusive to configure the ending opacity value.</p>\n</div></div></div><div id='cfg-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-cfg-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-cfg-remove' class='name not-expandable'>remove</a><span> : Boolean</span></div><div class='description'><div class='short'><p>Whether the Element should be removed from the DOM and destroyed after the effect finishes</p>\n</div><div class='long'><p>Whether the Element should be removed from the DOM and destroyed after the effect finishes</p>\n</div></div></div><div id='cfg-scope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-cfg-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-cfg-scope' class='name expandable'>scope</a><span> : Object</span></div><div class='description'><div class='short'>The scope (this reference) in which the callback function is executed. ...</div><div class='long'><p>The scope (<code>this</code> reference) in which the <tt><a href=\"#!/api/Ext.Fx-cfg-callback\" rel=\"Ext.Fx-cfg-callback\" class=\"docClass\">callback</a></tt> function is executed. Defaults to the browser window.</p>\n</div></div></div><div id='cfg-stopFx' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-cfg-stopFx' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-cfg-stopFx' class='name expandable'>stopFx</a><span> : Boolean</span></div><div class='description'><div class='short'>Whether preceding effects should be stopped and removed before running current effect (only applies to non blocking e...</div><div class='long'><p>Whether preceding effects should be stopped and removed before running current effect (only applies to non blocking effects)</p>\n</div></div></div><div id='cfg-useDisplay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-cfg-useDisplay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-cfg-useDisplay' class='name expandable'>useDisplay</a><span> : Boolean</span></div><div class='description'><div class='short'>Whether to use the display CSS property instead of visibility when hiding Elements (only applies to\neffects that end ...</div><div class='long'><p>Whether to use the <i>display</i> CSS property instead of <i>visibility</i> when hiding Elements (only applies to\neffects that end with the element being visually hidden, ignored otherwise)</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-afterFx' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-afterFx' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-afterFx' class='name expandable'>afterFx</a>( <span class='pre'>o</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-beforeFx' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-beforeFx' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-beforeFx' class='name expandable'>beforeFx</a>( <span class='pre'>o</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fadeIn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-fadeIn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-fadeIn' class='name expandable'>fadeIn</a>( <span class='pre'>[options]</span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Fade an element in (from transparent to opaque). ...</div><div class='long'><p>Fade an element in (from transparent to opaque).  The ending opacity can be specified\nusing the <tt><a href=\"#!/api/Ext.Fx-cfg-endOpacity\" rel=\"Ext.Fx-cfg-endOpacity\" class=\"docClass\">endOpacity</a></tt> config option.\nUsage:</p>\n\n<pre><code>// default: fade in from opacity 0 to 100%\nel.fadeIn();\n\n// custom: fade in from opacity 0 to 75% over 2 seconds\nel.fadeIn({ endOpacity: .75, duration: 2});\n\n// common config options shown with default values\nel.fadeIn({\n    endOpacity: 1, //can be any value between 0 and 1 (e.g. .5)\n    easing: 'easeOut',\n    duration: .5\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Object literal with any of the Fx config options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The Element</p>\n</div></li></ul></div></div></div><div id='method-fadeOut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-fadeOut' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-fadeOut' class='name expandable'>fadeOut</a>( <span class='pre'>[options]</span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Fade an element out (from opaque to transparent). ...</div><div class='long'><p>Fade an element out (from opaque to transparent).  The ending opacity can be specified\nusing the <tt><a href=\"#!/api/Ext.Fx-cfg-endOpacity\" rel=\"Ext.Fx-cfg-endOpacity\" class=\"docClass\">endOpacity</a></tt> config option.  Note that IE may require\n<tt><a href=\"#!/api/Ext.Fx-cfg-useDisplay\" rel=\"Ext.Fx-cfg-useDisplay\" class=\"docClass\">useDisplay</a>:true</tt> in order to redisplay correctly.\nUsage:</p>\n\n<pre><code>// default: fade out from the element's current opacity to 0\nel.fadeOut();\n\n// custom: fade out from the element's current opacity to 25% over 2 seconds\nel.fadeOut({ endOpacity: .25, duration: 2});\n\n// common config options shown with default values\nel.fadeOut({\n    endOpacity: 0, //can be any value between 0 and 1 (e.g. .5)\n    easing: 'easeOut',\n    duration: .5,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Object literal with any of the Fx config options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The Element</p>\n</div></li></ul></div></div></div><div id='method-frame' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-frame' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-frame' class='name expandable'>frame</a>( <span class='pre'>[color], [count], [options]</span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Shows a ripple of exploding, attenuating borders to draw attention to an Element. ...</div><div class='long'><p>Shows a ripple of exploding, attenuating borders to draw attention to an Element.\nUsage:</p>\n\n<pre><code>// default: a single light blue ripple\nel.frame();\n\n// custom: 3 red ripples lasting 3 seconds total\nel.frame(\"ff0000\", 3, { duration: 3 });\n\n// common config options shown with default values\nel.frame(\"C3DAF9\", 1, {\n    duration: 1 //duration of each individual ripple.\n    // Note: Easing is not configurable and will be ignored if included\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>color</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The color of the border.  Should be a 6 char hex color without the leading # (defaults to light blue: 'C3DAF9').</p>\n</div></li><li><span class='pre'>count</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>The number of ripples to display (defaults to 1)</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Object literal with any of the Fx config options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The Element</p>\n</div></li></ul></div></div></div><div id='method-fxUnwrap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-fxUnwrap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-fxUnwrap' class='name expandable'>fxUnwrap</a>( <span class='pre'>wrap, pos, o</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>wrap</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>pos</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>o</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fxWrap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-fxWrap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-fxWrap' class='name expandable'>fxWrap</a>( <span class='pre'>pos, o, vis</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pos</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>o</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>vis</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fxanim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-fxanim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-fxanim' class='name expandable'>fxanim</a>( <span class='pre'>args, opt, animType, defaultDur, defaultEase, cb</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>opt</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>animType</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>defaultDur</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>defaultEase</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>cb</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFxRestore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-getFxRestore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-getFxRestore' class='name expandable'>getFxRestore</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-ghost' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-ghost' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-ghost' class='name expandable'>ghost</a>( <span class='pre'>[anchor], [options]</span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Slides the element while fading it out of view. ...</div><div class='long'><p>Slides the element while fading it out of view.  An anchor point can be optionally passed to set the\nending point of the effect.\nUsage:</p>\n\n<pre><code>// default: slide the element downward while fading out\nel.ghost();\n\n// custom: slide the element out to the right with a 2-second duration\nel.ghost('r', { duration: 2 });\n\n// common config options shown with default values\nel.ghost('b', {\n    easing: 'easeOut',\n    duration: .5,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>anchor</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>One of the valid Fx anchor positions (defaults to bottom: 'b')</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Object literal with any of the Fx config options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The Element</p>\n</div></li></ul></div></div></div><div id='method-hasActiveFx' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-hasActiveFx' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-hasActiveFx' class='name expandable'>hasActiveFx</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the element has any effects actively running or queued, else returns false. ...</div><div class='long'><p>Returns true if the element has any effects actively running or queued, else returns false.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if element has active effects, else false</p>\n</div></li></ul></div></div></div><div id='method-hasFxBlock' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-hasFxBlock' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-hasFxBlock' class='name expandable'>hasFxBlock</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the element is currently blocking so that no other effect can be queued\nuntil this effect is finished...</div><div class='long'><p>Returns true if the element is currently blocking so that no other effect can be queued\nuntil this effect is finished, else returns false if blocking is not set.  This is commonly\nused to ensure that an effect initiated by a user action runs to completion prior to the\nsame effect being restarted (e.g., firing only one effect even if the user clicks several times).</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if blocking, else false</p>\n</div></li></ul></div></div></div><div id='method-highlight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-highlight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-highlight' class='name expandable'>highlight</a>( <span class='pre'>[color], [options]</span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Highlights the Element by setting a color (applies to the background-color by default, but can be\nchanged using the \"...</div><div class='long'><p>Highlights the Element by setting a color (applies to the background-color by default, but can be\nchanged using the \"attr\" config option) and then fading back to the original color. If no original\ncolor is available, you should provide the \"endColor\" config option which will be cleared after the animation.\nUsage:</p>\n\n<pre><code>// default: highlight background to yellow\nel.highlight();\n\n// custom: highlight foreground text to blue for 2 seconds\nel.highlight(\"0000ff\", { attr: 'color', duration: 2 });\n\n// common config options shown with default values\nel.highlight(\"ffff9c\", {\n    attr: \"background-color\", //can be any valid CSS property (attribute) that supports a color value\n    endColor: (current color) or \"ffffff\",\n    easing: 'easeIn',\n    duration: 1\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>color</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The highlight color. Should be a 6 char hex color without the leading # (defaults to yellow: 'ffff9c')</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Object literal with any of the Fx config options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The Element</p>\n</div></li></ul></div></div></div><div id='method-nextFx' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-nextFx' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-nextFx' class='name expandable'>nextFx</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-pause' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-pause' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-pause' class='name expandable'>pause</a>( <span class='pre'>seconds</span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Creates a pause before any subsequent queued effects begin. ...</div><div class='long'><p>Creates a pause before any subsequent queued effects begin.  If there are\nno effects queued after the pause it will have no effect.\nUsage:</p>\n\n<pre><code>el.pause(1);\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>seconds</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The length of time to pause (in seconds)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The Element</p>\n</div></li></ul></div></div></div><div id='method-puff' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-puff' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-puff' class='name expandable'>puff</a>( <span class='pre'>[options]</span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Fades the element out while slowly expanding it in all directions. ...</div><div class='long'><p>Fades the element out while slowly expanding it in all directions.  When the effect is completed, the\nelement will be hidden (visibility = 'hidden') but block elements will still take up space in the document.\nThe element must be removed from the DOM using the 'remove' config option if desired.\nUsage:</p>\n\n<pre><code>// default\nel.puff();\n\n// common config options shown with default values\nel.puff({\n    easing: 'easeOut',\n    duration: .5,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Object literal with any of the Fx config options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The Element</p>\n</div></li></ul></div></div></div><div id='method-queueFx' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-queueFx' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-queueFx' class='name expandable'>queueFx</a>( <span class='pre'>o, fn</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>fn</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-scale' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-scale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-scale' class='name expandable'>scale</a>( <span class='pre'>width, height, [options]</span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Animates the transition of an element's dimensions from a starting height/width\nto an ending height/width. ...</div><div class='long'><p>Animates the transition of an element's dimensions from a starting height/width\nto an ending height/width.  This method is a convenience implementation of shift.\nUsage:</p>\n\n<pre><code>// change height and width to 100x100 pixels\nel.scale(100, 100);\n\n// common config options shown with default values.  The height and width will default to\n// the element&#39;s existing values if passed as null.\nel.scale(\n    [element&#39;s width],\n    [element&#39;s height], {\n        easing: 'easeOut',\n        duration: .35\n    }\n);\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>width</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The new width (pass undefined to keep the original width)</p>\n</div></li><li><span class='pre'>height</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>The new height (pass undefined to keep the original height)</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Object literal with any of the Fx config options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The Element</p>\n</div></li></ul></div></div></div><div id='method-sequenceFx' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-sequenceFx' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-sequenceFx' class='name expandable'>sequenceFx</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Ensures that all effects queued after sequenceFx is called on the element are\nrun in sequence. ...</div><div class='long'><p>Ensures that all effects queued after sequenceFx is called on the element are\nrun in sequence.  This is the opposite of <a href=\"#!/api/Ext.Fx-method-syncFx\" rel=\"Ext.Fx-method-syncFx\" class=\"docClass\">syncFx</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The Element</p>\n</div></li></ul></div></div></div><div id='method-shift' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-shift' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-shift' class='name expandable'>shift</a>( <span class='pre'>options</span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Animates the transition of any combination of an element's dimensions, xy position and/or opacity. ...</div><div class='long'><p>Animates the transition of any combination of an element's dimensions, xy position and/or opacity.\nAny of these properties not specified in the config object will not be changed.  This effect\nrequires that at least one new dimension, position or opacity setting must be passed in on\nthe config object in order for the function to have any effect.\nUsage:</p>\n\n<pre><code>// slide the element horizontally to x position 200 while changing the height and opacity\nel.shift({ x: 200, height: 50, opacity: .8 });\n\n// common config options shown with default values.\nel.shift({\n    width: [element&#39;s width],\n    height: [element&#39;s height],\n    x: [element&#39;s x position],\n    y: [element&#39;s y position],\n    opacity: [element&#39;s opacity],\n    easing: 'easeOut',\n    duration: .35\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>Object literal with any of the Fx config options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The Element</p>\n</div></li></ul></div></div></div><div id='method-slideIn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-slideIn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-slideIn' class='name expandable'>slideIn</a>( <span class='pre'>[anchor], [options]</span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Slides the element into view. ...</div><div class='long'><p>Slides the element into view.  An anchor point can be optionally passed to set the point of\norigin for the slide effect.  This function automatically handles wrapping the element with\na fixed-size container if needed.  See the Fx class overview for valid anchor point options.\nUsage:</p>\n\n<pre><code>// default: slide the element in from the top\nel.slideIn();\n\n// custom: slide the element in from the right with a 2-second duration\nel.slideIn('r', { duration: 2 });\n\n// common config options shown with default values\nel.slideIn('t', {\n    easing: 'easeOut',\n    duration: .5\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>anchor</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>One of the valid Fx anchor positions (defaults to top: 't')</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Object literal with any of the Fx config options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The Element</p>\n</div></li></ul></div></div></div><div id='method-slideOut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-slideOut' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-slideOut' class='name expandable'>slideOut</a>( <span class='pre'>[anchor], [options]</span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Slides the element out of view. ...</div><div class='long'><p>Slides the element out of view.  An anchor point can be optionally passed to set the end point\nfor the slide effect.  When the effect is completed, the element will be hidden (visibility =\n'hidden') but block elements will still take up space in the document.  The element must be removed\nfrom the DOM using the 'remove' config option if desired.  This function automatically handles\nwrapping the element with a fixed-size container if needed.  See the Fx class overview for valid anchor point options.\nUsage:</p>\n\n<pre><code>// default: slide the element out to the top\nel.slideOut();\n\n// custom: slide the element out to the right with a 2-second duration\nel.slideOut('r', { duration: 2 });\n\n// common config options shown with default values\nel.slideOut('t', {\n    easing: 'easeOut',\n    duration: .5,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>anchor</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>One of the valid Fx anchor positions (defaults to top: 't')</p>\n</div></li><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Object literal with any of the Fx config options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The Element</p>\n</div></li></ul></div></div></div><div id='method-stopFx' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-stopFx' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-stopFx' class='name expandable'>stopFx</a>( <span class='pre'>finish</span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Stops any running effects and clears the element's internal effects queue if it contains\nany additional effects that ...</div><div class='long'><p>Stops any running effects and clears the element's internal effects queue if it contains\nany additional effects that haven't started yet.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>finish</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The Element</p>\n</div></li></ul></div></div></div><div id='method-switchOff' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-switchOff' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-switchOff' class='name expandable'>switchOff</a>( <span class='pre'>[options]</span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Blinks the element as if it was clicked and then collapses on its center (similar to switching off a television). ...</div><div class='long'><p>Blinks the element as if it was clicked and then collapses on its center (similar to switching off a television).\nWhen the effect is completed, the element will be hidden (visibility = 'hidden') but block elements will still\ntake up space in the document. The element must be removed from the DOM using the 'remove' config option if desired.\nUsage:</p>\n\n<pre><code>// default\nel.switchOff();\n\n// all config options shown with default values\nel.switchOff({\n    easing: 'easeIn',\n    duration: .3,\n    remove: false,\n    useDisplay: false\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>Object literal with any of the Fx config options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The Element</p>\n</div></li></ul></div></div></div><div id='method-switchStatements' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-switchStatements' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-switchStatements' class='name expandable'>switchStatements</a>( <span class='pre'>key, fn, argHash</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>private - calls the function taking arguments from the argHash based on the key. ...</div><div class='long'><p>private - calls the function taking arguments from the argHash based on the key.  Returns the return value of the function.</p>\n\n<pre><code>      this is useful for replacing switch statements (for example).\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>fn</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>argHash</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-syncFx' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Fx'>Ext.Fx</span><br/><a href='source/Fx.html#Ext-Fx-method-syncFx' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Fx-method-syncFx' class='name expandable'>syncFx</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Ensures that all effects queued after syncFx is called on the element are\nrun concurrently. ...</div><div class='long'><p>Ensures that all effects queued after syncFx is called on the element are\nrun concurrently.  This is the opposite of <a href=\"#!/api/Ext.Fx-method-sequenceFx\" rel=\"Ext.Fx-method-sequenceFx\" class=\"docClass\">sequenceFx</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>The Element</p>\n</div></li></ul></div></div></div></div></div></div></div>",
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
        "href": "Fx.html#Ext-Fx",
        "filename": "Fx.js"
    }],
    "linenr": 52,
    "members": {
        "property": [],
        "cfg": [{
            "tagname": "cfg",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "afterCls",
            "id": "cfg-afterCls"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "afterStyle",
            "id": "cfg-afterStyle"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "block",
            "id": "cfg-block"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "callback",
            "id": "cfg-callback"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "concurrent",
            "id": "cfg-concurrent"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "duration",
            "id": "cfg-duration"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "easing",
            "id": "cfg-easing"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "endOpacity",
            "id": "cfg-endOpacity"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "remove",
            "id": "cfg-remove"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "scope",
            "id": "cfg-scope"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "stopFx",
            "id": "cfg-stopFx"
        }, {
            "tagname": "cfg",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "useDisplay",
            "id": "cfg-useDisplay"
        }],
        "css_var": [],
        "method": [{
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {
                "private": true
            },
            "name": "afterFx",
            "id": "method-afterFx"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {
                "private": true
            },
            "name": "beforeFx",
            "id": "method-beforeFx"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "fadeIn",
            "id": "method-fadeIn"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "fadeOut",
            "id": "method-fadeOut"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "frame",
            "id": "method-frame"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {
                "private": true
            },
            "name": "fxUnwrap",
            "id": "method-fxUnwrap"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {
                "private": true
            },
            "name": "fxWrap",
            "id": "method-fxWrap"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {
                "private": true
            },
            "name": "fxanim",
            "id": "method-fxanim"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {
                "private": true
            },
            "name": "getFxRestore",
            "id": "method-getFxRestore"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "ghost",
            "id": "method-ghost"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "hasActiveFx",
            "id": "method-hasActiveFx"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "hasFxBlock",
            "id": "method-hasFxBlock"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "highlight",
            "id": "method-highlight"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {
                "private": true
            },
            "name": "nextFx",
            "id": "method-nextFx"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {
                "chainable": true
            },
            "name": "pause",
            "id": "method-pause"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "puff",
            "id": "method-puff"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {
                "private": true
            },
            "name": "queueFx",
            "id": "method-queueFx"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {
                "chainable": true
            },
            "name": "scale",
            "id": "method-scale"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "sequenceFx",
            "id": "method-sequenceFx"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {
                "chainable": true
            },
            "name": "shift",
            "id": "method-shift"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "slideIn",
            "id": "method-slideIn"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "slideOut",
            "id": "method-slideOut"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "stopFx",
            "id": "method-stopFx"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "switchOff",
            "id": "method-switchOff"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {
                "private": true
            },
            "name": "switchStatements",
            "id": "method-switchStatements"
        }, {
            "tagname": "method",
            "owner": "Ext.Fx",
            "meta": {},
            "name": "syncFx",
            "id": "method-syncFx"
        }],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.Fx",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.Fx",
    "mixins": [],
    "mixedInto": []
});