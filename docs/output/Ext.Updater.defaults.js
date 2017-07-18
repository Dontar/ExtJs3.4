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
Ext.data.JsonP.Ext_Updater_defaults({
    "alternateClassNames": [],
    "aliases": {},
    "enum": null,
    "parentMixins": [],
    "tagname": "class",
    "subclasses": [],
    "extends": null,
    "uses": [],
    "html": "<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/UpdateManager.html#Ext-Updater-defaults' target='_blank'>UpdateManager.js</a></div></pre><div class='doc-contents'><p>The defaults collection enables customizing the default properties of Updater</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-disableCaching' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Updater.defaults'>Ext.Updater.defaults</span><br/><a href='source/UpdateManager.html#Ext-Updater-defaults-property-disableCaching' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Updater.defaults-property-disableCaching' class='name expandable'>disableCaching</a><span> : Boolean</span></div><div class='description'><div class='short'>True to append a unique parameter to GET requests to disable caching (defaults to false). ...</div><div class='long'><p>True to append a unique parameter to GET requests to disable caching (defaults to false).</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-indicatorText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Updater.defaults'>Ext.Updater.defaults</span><br/><a href='source/UpdateManager.html#Ext-Updater-defaults-property-indicatorText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Updater.defaults-property-indicatorText' class='name expandable'>indicatorText</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>Text for loading indicator (defaults to '&lt;div class=\"loading-indicator\"&gt;Loading...&lt;/div&gt;'). ...</div><div class='long'><p>Text for loading indicator (defaults to '&lt;div class=\"loading-indicator\"&gt;Loading...&lt;/div&gt;').</p>\n<p>Defaults to: <code>'&lt;div class=&quot;loading-indicator&quot;&gt;Loading...&lt;/div&gt;'</code></p></div></div></div><div id='property-loadScripts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Updater.defaults'>Ext.Updater.defaults</span><br/><a href='source/UpdateManager.html#Ext-Updater-defaults-property-loadScripts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Updater.defaults-property-loadScripts' class='name expandable'>loadScripts</a><span> : Boolean</span></div><div class='description'><div class='short'>True to process scripts by default (defaults to false). ...</div><div class='long'><p>True to process scripts by default (defaults to false).</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-showLoadIndicator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Updater.defaults'>Ext.Updater.defaults</span><br/><a href='source/UpdateManager.html#Ext-Updater-defaults-property-showLoadIndicator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Updater.defaults-property-showLoadIndicator' class='name expandable'>showLoadIndicator</a><span> : Boolean</span></div><div class='description'><div class='short'>Whether or not to show indicatorText during loading (defaults to true). ...</div><div class='long'><p>Whether or not to show <a href=\"#!/api/Ext.Updater.defaults-property-indicatorText\" rel=\"Ext.Updater.defaults-property-indicatorText\" class=\"docClass\">indicatorText</a> during loading (defaults to true).</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-sslBlankUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Updater.defaults'>Ext.Updater.defaults</span><br/><a href='source/UpdateManager.html#Ext-Updater-defaults-property-sslBlankUrl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Updater.defaults-property-sslBlankUrl' class='name not-expandable'>sslBlankUrl</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>Blank page URL to use with SSL file uploads (defaults to <a href=\"#!/api/Ext-property-SSL_SECURE_URL\" rel=\"Ext-property-SSL_SECURE_URL\" class=\"docClass\">Ext.SSL_SECURE_URL</a> if set, or \"javascript:false\").</p>\n</div><div class='long'><p>Blank page URL to use with SSL file uploads (defaults to <a href=\"#!/api/Ext-property-SSL_SECURE_URL\" rel=\"Ext-property-SSL_SECURE_URL\" class=\"docClass\">Ext.SSL_SECURE_URL</a> if set, or \"javascript:false\").</p>\n</div></div></div><div id='property-timeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Updater.defaults'>Ext.Updater.defaults</span><br/><a href='source/UpdateManager.html#Ext-Updater-defaults-property-timeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Updater.defaults-property-timeout' class='name expandable'>timeout</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Timeout for requests or form posts in seconds (defaults to 30 seconds). ...</div><div class='long'><p>Timeout for requests or form posts in seconds (defaults to 30 seconds).</p>\n<p>Defaults to: <code>30</code></p></div></div></div></div></div></div></div>",
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
        "href": "UpdateManager.html#Ext-Updater-defaults",
        "filename": "UpdateManager.js"
    }],
    "linenr": 454,
    "members": {
        "property": [{
            "tagname": "property",
            "owner": "Ext.Updater.defaults",
            "meta": {},
            "name": "disableCaching",
            "id": "property-disableCaching"
        }, {
            "tagname": "property",
            "owner": "Ext.Updater.defaults",
            "meta": {},
            "name": "indicatorText",
            "id": "property-indicatorText"
        }, {
            "tagname": "property",
            "owner": "Ext.Updater.defaults",
            "meta": {},
            "name": "loadScripts",
            "id": "property-loadScripts"
        }, {
            "tagname": "property",
            "owner": "Ext.Updater.defaults",
            "meta": {},
            "name": "showLoadIndicator",
            "id": "property-showLoadIndicator"
        }, {
            "tagname": "property",
            "owner": "Ext.Updater.defaults",
            "meta": {},
            "name": "sslBlankUrl",
            "id": "property-sslBlankUrl"
        }, {
            "tagname": "property",
            "owner": "Ext.Updater.defaults",
            "meta": {},
            "name": "timeout",
            "id": "property-timeout"
        }],
        "cfg": [],
        "css_var": [],
        "method": [],
        "event": [],
        "css_mixin": []
    },
    "inheritable": null,
    "private": null,
    "component": false,
    "name": "Ext.Updater.defaults",
    "singleton": false,
    "override": null,
    "inheritdoc": null,
    "id": "class-Ext.Updater.defaults",
    "mixins": [],
    "mixedInto": []
});